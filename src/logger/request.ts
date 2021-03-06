import { AxiosRequestConfig } from 'axios';
import { LOG_TYPE, RequestLogConfig } from '../common/types';
import { assembleBuildConfig } from '../common/config';
import StringBuilder from '../common/string-builder';


function requestLogger(request: AxiosRequestConfig, config?: RequestLogConfig) {

    const {url, method, data, headers} = request;
    const buildConfig = assembleBuildConfig(config);
    const requestAsAny = request as any;
    if(!requestAsAny.meta) {
        requestAsAny.meta = {};
    }
    const randomChalk = getRandomColor();
    const randomChalkBg = getRandomColor();
    const randomId = makeId();

    requestAsAny.meta.chalk = randomChalk;
    requestAsAny.meta.chalkBg = randomChalkBg;
    requestAsAny.meta.randomId = randomId;

    requestAsAny.meta.requestStartedAt = new Date().getTime();

    if (!buildConfig.isRequestLogEnabled) {
        return request;
    }

    const stringBuilder = new StringBuilder(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(LOG_TYPE.REQUEST, url, undefined, randomChalk, randomChalkBg, randomId)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();

    buildConfig.logger(log);

    return request;
}

let lastRandomIndex: number = -1;

function getRandomColor() {
    const colors = ["yellow", "blue", "magenta", "cyan", "white", "grey", "black"];
    let randomTextColorIndex
    do {
        randomTextColorIndex = Math.floor(Math.random() * colors.length);
    } while(lastRandomIndex === randomTextColorIndex);

    lastRandomIndex = randomTextColorIndex;
    return colors[randomTextColorIndex];
}

function makeId(): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default requestLogger;
