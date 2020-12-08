import { AxiosError } from 'axios';
import { ErrorLogConfig, LOG_TYPE } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';

function errorLoggerWithoutPromise(error: AxiosError, config?: ErrorLogConfig) {

    const {config: { method, url }, response} = error;

    let status, statusText, data, headers;
    if (response) {
        status = response.status;
        statusText = response.statusText;
        data = response.data;
        headers = response.headers;
    }
    const respConfig = error.config as any;

    const buildConfig = assembleBuildConfig(config);

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(LOG_TYPE.ERROR, url, "", respConfig.meta?.chalk)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();

    buildConfig.errorLogger ? buildConfig.errorLogger(log) : buildConfig.logger(log);

    return error;
}

function errorLogger(error: AxiosError, config?: ErrorLogConfig) {
    return Promise.reject(errorLoggerWithoutPromise(error, config));
}

export { errorLogger, errorLoggerWithoutPromise };
