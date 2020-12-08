import { GlobalLogConfig, LOG_TYPE } from './types';
declare class StringBuilder {
    private config;
    private printQueue;
    private filteredHeaderList;
    constructor(config: GlobalLogConfig);
    makeLogTypeWithPrefix(logType?: LOG_TYPE, url?: string, requestDuration?: string, color?: any, colorBg?: any): this;
    makeDateFormat(date: Date): this;
    makeHeader(headers?: {
        [key: string]: {
            value: string;
        };
    }): this;
    makeUrl(url?: string): this;
    makeMethod(method?: string): this;
    makeData(data: object): this;
    makeStatus(status?: number, statusText?: string): this;
    build(): string;
}
export default StringBuilder;
