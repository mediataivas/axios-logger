import dateformat from 'dateformat';
import { GlobalLogConfig, LOG_TYPE } from './types';
import chalk from 'chalk';

class StringBuilder {
    private config: GlobalLogConfig;
    private printQueue: Array<string>;
    private filteredHeaderList: Array<String>;

    constructor(config: GlobalLogConfig) {
        this.config = config;
        this.printQueue = [];
        this.filteredHeaderList = ['common', 'delete', 'get', 'head', 'post', 'put', 'patch', 'content-type', 'content-length', 'vary', 'date', 'connection', 'content-security-policy'];
    }

    makeLogTypeWithPrefix(logType: LOG_TYPE = LOG_TYPE.REQUEST, url: string = "", requestDuration: string = "") {

        let colorFunction = LOG_TYPE.RESPONSE ? chalk.green : chalk.magenta;

        const str =`${StringBuilder.chalkByType(logType, logType)}${requestDuration}${url}`
        const prefix = this.config.prefixText === false ? `[${str}]` : `[${this.config.prefixText || 'Axios'}][${str}]`;
        this.printQueue.push(colorFunction(prefix));
        return this;
    }

    makeDateFormat(date: Date) {
        // allow for opting-out of adding the timestamp (as most loggers already add this)
        if (this.config.dateFormat !== false) {
            // @ts-ignore
            const dateFormat = dateformat(date, this.config.dateFormat || 'isoDateTime');
            this.printQueue.push(dateFormat);
        }
        return this;
    }

    makeHeader(headers?: { [key:string] : {value:string}}) {
        if(this.config.headers && headers) {
            const headerMap:{ [key:string] : {value:string}} = {};
            for(let key in headers) {
                if(!this.filteredHeaderList.includes(key)) {
                    headerMap[key] = headers[key];
                }
            }

            this.printQueue.push(JSON.stringify(headerMap));
        }
        return this;
    }

    makeUrl(url?: string) {
        if(this.config.url && url) this.printQueue.push(url);
        return this;
    }

    makeMethod(method?: string) {
        if(this.config.method && method) this.printQueue.push(chalk.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data: object) {
        if(this.config.data && data) this.printQueue.push(JSON.stringify(data));
        return this;
    }

    makeStatus(status?:number, statusText?: string) {
        if(status && statusText) this.printQueue.push(`${status}:${statusText}`);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }

    private static chalkByType(logType: LOG_TYPE, str: string): void {
        switch (logType) {
            case LOG_TYPE.REQUEST:
                chalk.green(str);
                break;
            case LOG_TYPE.RESPONSE:
                chalk.yellow(str);
                break;
            case LOG_TYPE.ERROR:
                chalk.red(str);
                break;
        }
    }
}

export default StringBuilder;
