import { ErrorLogConfig, GlobalLogConfig, RequestLogConfig, ResponseLogConfig } from './types';

export let globalConfig: GlobalLogConfig = {
    method: true,
    url: true,
    data: true,
    status: true,
    logger: console.log,
    warnLogger: console.log,
    errorLogger: console.log,
    prefixText: 'Axios',
    dateFormat: false,
    headers: false,
    showDuration: true,
    isRequestLogEnabled: true,
    isResponseLogEnabled: true,
};

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config: GlobalLogConfig) {
    globalConfig = {
        ...globalConfig,
        ...config,
    };
}

function assembleBuildConfig(config?: RequestLogConfig | ResponseLogConfig | ErrorLogConfig): any {
    return {
        ...globalConfig,
        ...config,
    };
}

export {
    getGlobalConfig,
    setGlobalConfig,
    assembleBuildConfig,
};
