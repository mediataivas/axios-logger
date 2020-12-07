export interface CommonConfig {
    prefixText?: string | boolean,
    dateFormat?: string | boolean,
    headers?: boolean,
    logger: (text: string) => any,
    errorLogger?: (text:string) => any,
    warnLogger?: (text:string) => any,
    showDuration?: boolean,
    isRequestLogEnabled?: boolean,
    isResponseLogEnabled?: boolean,
}

export enum LOG_TYPE {
    REQUEST= "Request",
    RESPONSE= "Response",
}

export interface GlobalLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean,
    status?: boolean,
    statusText?: boolean,
    code?: boolean,
}

export interface RequestLogConfig extends CommonConfig {
    data?: boolean,
    method?: boolean,
    url?: boolean
}

export interface ResponseLogConfig extends CommonConfig {
    data?: boolean,
    status?: boolean,
    statusText?: boolean,
    warnIfDurationIsLongerThanMs?: number
}

export interface ErrorLogConfig extends CommonConfig {
    data?: boolean,
    code?: boolean,
}
