import { AxiosResponse } from 'axios';
import { LOG_TYPE, ResponseLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';


function responseLogger(response: AxiosResponse, config?: ResponseLogConfig) {
    const {config: {url, method}, status, statusText, data, headers} = response;
    const buildConfig = assembleBuildConfig(config);
    if (!buildConfig.isResponseLogEnabled) {
        return response;
    }
    const currentTime = new Date().getTime();
    const respConfig = response.config as any;
    const requestDurationInMs = currentTime - (respConfig.meta?.requestStartedAt ?? currentTime);
    let logger = buildConfig.logger;

    const { warnIfDurationIsLongerThanMs, warnLogger } = buildConfig;
    let durationString = "";
    if (buildConfig.showDuration) {
        if (buildConfig.warnIfDurationIsLongerThanMs > 0 && requestDurationInMs > buildConfig.warnIfDurationIsLongerThanMs) {
            warnLogger('Request duration was over ' + warnIfDurationIsLongerThanMs + 'ms ');
            logger = warnLogger;
        }
        durationString = ` ${Number(requestDurationInMs / 1000).toFixed(2)}s`;
    }

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(LOG_TYPE.RESPONSE, url, durationString, respConfig.meta?.chalk, respConfig.meta?.chalkBg)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();

    logger(log);

    return response;
}

export default responseLogger;
