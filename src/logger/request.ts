import { AxiosRequestConfig } from 'axios';
import { LOG_TYPE, RequestLogConfig } from '../common/types';
import { assembleBuildConfig, getGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';


function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, method, data, headers} = request;
    const buildConfig = assembleBuildConfig(config);
    const requestAsAny = request as any;
    if(!requestAsAny.meta) {
        requestAsAny.meta = {};
    }

    requestAsAny.meta.requestStartedAt = new Date().getTime();

    if (!buildConfig.isRequestLogEnabled) {
        return request;
    }

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(LOG_TYPE.REQUEST, url)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();

    buildConfig.logger(log);

    return request;
}

export default requestLogger;
