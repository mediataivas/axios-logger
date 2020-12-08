import { AxiosRequestConfig } from 'axios';
import { LOG_TYPE, RequestLogConfig } from '../common/types';
import { assembleBuildConfig, getGlobalConfig } from '../common/config';
import StringBuilder from '../common/string-builder';
import chalk from 'chalk';


function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, method, data, headers} = request;
    const buildConfig = assembleBuildConfig(config);
    const requestAsAny = request as any;
    if(!requestAsAny.meta) {
        requestAsAny.meta = {};
    }
    const randomChalk = getRandomColor();
    requestAsAny.meta.chalk = randomChalk;

    requestAsAny.meta.requestStartedAt = new Date().getTime();

    if (!buildConfig.isRequestLogEnabled) {
        return request;
    }

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(LOG_TYPE.REQUEST, url, undefined, randomChalk)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();

    buildConfig.logger(log);

    return request;
}

function getRandomColor() {
    const colors = ["yellow", "blue", "magenta", "cyan", "white", "gray", "grey", "blackBright", "redBright", "greenBright", "yellowBright", "blueBright", "magentaBright", "cyanBright", "whiteBright"];
    let randomTextIndex
    let randomBgIndex
    do {
        randomTextIndex = Math.floor(Math.random() * colors.length);
        randomBgIndex = Math.floor(Math.random() * colors.length);
    } while(randomBgIndex === randomTextIndex);

    return chalk.bgKeyword(colors[randomBgIndex]);
}

export default requestLogger;
