import { AxiosRequestConfig } from 'axios';
import { RequestLogConfig } from '../common/types';
import { assembleBuildConfig, getGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';

function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, method, data, headers} = request;
    const buildConfig = assembleBuildConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Request')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeHeader(headers)
        .makeData(data)
        .build();

    const logger = (buildConfig.logger ?? getGlobalConfig().logger);
    logger(log);

    return request;
}

export default requestLogger;
