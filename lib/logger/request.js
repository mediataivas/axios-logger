'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _types = require('../common/types');

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function requestLogger(request, config) {
    const { url, method, data, headers } = request;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const requestAsAny = request;

    if (!requestAsAny.meta) {
        requestAsAny.meta = {};
    }

    const randomChalk = getRandomColor();
    requestAsAny.meta.chalk = randomChalk;
    requestAsAny.meta.requestStartedAt = new Date().getTime();

    if (!buildConfig.isRequestLogEnabled) {
        return request;
    }

    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(_types.LOG_TYPE.REQUEST, url, undefined, randomChalk)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();
    buildConfig.logger(log);
    return request;
}

function getRandomColor() {
    const colors = [
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey',
        'blackBright',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright',
    ];
    let randomTextIndex;
    let randomBgIndex;

    do {
        randomTextIndex = Math.floor(Math.random() * colors.length);
        randomBgIndex = Math.floor(Math.random() * colors.length);
    } while (randomBgIndex !== randomTextIndex);

    return _chalk.default.keyword(colors[randomTextIndex]).bgKeyword(colors[randomBgIndex]);
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJyZXF1ZXN0QXNBbnkiLCJtZXRhIiwicmFuZG9tQ2hhbGsiLCJnZXRSYW5kb21Db2xvciIsImNoYWxrIiwicmVxdWVzdFN0YXJ0ZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwiaXNSZXF1ZXN0TG9nRW5hYmxlZCIsInN0cmluZ0J1aWxkZXIiLCJTdHJpbmdCdWlsZGVyIiwibG9nIiwibWFrZUxvZ1R5cGVXaXRoUHJlZml4IiwiTE9HX1RZUEUiLCJSRVFVRVNUIiwidW5kZWZpbmVkIiwibWFrZURhdGVGb3JtYXQiLCJtYWtlTWV0aG9kIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiLCJsb2dnZXIiLCJjb2xvcnMiLCJyYW5kb21UZXh0SW5kZXgiLCJyYW5kb21CZ0luZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwia2V5d29yZCIsImJnS2V5d29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBb0RDLE1BQXBELEVBQStFO0FBRTNFLFFBQU07QUFBQ0MsSUFBQUEsR0FBRDtBQUFNQyxJQUFBQSxNQUFOO0FBQWNDLElBQUFBLElBQWQ7QUFBb0JDLElBQUFBO0FBQXBCLE1BQStCTCxPQUFyQztBQUNBLFFBQU1NLFdBQVcsR0FBRyxpQ0FBb0JMLE1BQXBCLENBQXBCO0FBQ0EsUUFBTU0sWUFBWSxHQUFHUCxPQUFyQjs7QUFDQSxNQUFHLENBQUNPLFlBQVksQ0FBQ0MsSUFBakIsRUFBdUI7QUFDbkJELElBQUFBLFlBQVksQ0FBQ0MsSUFBYixHQUFvQixFQUFwQjtBQUNIOztBQUNELFFBQU1DLFdBQVcsR0FBR0MsY0FBYyxFQUFsQztBQUNBSCxFQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JHLEtBQWxCLEdBQTBCRixXQUExQjtBQUVBRixFQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JJLGdCQUFsQixHQUFxQyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBckM7O0FBRUEsTUFBSSxDQUFDUixXQUFXLENBQUNTLG1CQUFqQixFQUFzQztBQUNsQyxXQUFPZixPQUFQO0FBQ0g7O0FBRUQsUUFBTWdCLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQlgsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNWSxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2VDLGdCQUFTQyxPQUR4QixFQUNpQ25CLEdBRGpDLEVBQ3NDb0IsU0FEdEMsRUFDaURiLFdBRGpELEVBRVBjLGNBRk8sQ0FFUSxJQUFJVixJQUFKLEVBRlIsRUFHUFcsVUFITyxDQUdJckIsTUFISixFQUlQc0IsVUFKTyxDQUlJcEIsT0FKSixFQUtQcUIsUUFMTyxDQUtFdEIsSUFMRixFQU1QdUIsS0FOTyxFQUFaO0FBUUFyQixFQUFBQSxXQUFXLENBQUNzQixNQUFaLENBQW1CVixHQUFuQjtBQUVBLFNBQU9sQixPQUFQO0FBQ0g7O0FBRUQsU0FBU1UsY0FBVCxHQUEwQjtBQUN0QixRQUFNbUIsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsU0FBbkIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsTUFBL0MsRUFBdUQsTUFBdkQsRUFBK0QsYUFBL0QsRUFBOEUsV0FBOUUsRUFBMkYsYUFBM0YsRUFBMEcsY0FBMUcsRUFBMEgsWUFBMUgsRUFBd0ksZUFBeEksRUFBeUosWUFBekosRUFBdUssYUFBdkssQ0FBZjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxhQUFKOztBQUNBLEtBQUc7QUFDQ0QsSUFBQUEsZUFBZSxHQUFHRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxNQUFNLENBQUNNLE1BQWxDLENBQWxCO0FBQ0FKLElBQUFBLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsTUFBTSxDQUFDTSxNQUFsQyxDQUFoQjtBQUNILEdBSEQsUUFHUUosYUFBYSxLQUFLRCxlQUgxQjs7QUFLQSxTQUFPbkIsZUFBTXlCLE9BQU4sQ0FBY1AsTUFBTSxDQUFDQyxlQUFELENBQXBCLEVBQXVDTyxTQUF2QyxDQUFpRFIsTUFBTSxDQUFDRSxhQUFELENBQXZELENBQVA7QUFDSDs7ZUFFY2hDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMT0dfVFlQRSwgUmVxdWVzdExvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5cbmZ1bmN0aW9uIHJlcXVlc3RMb2dnZXIocmVxdWVzdDogQXhpb3NSZXF1ZXN0Q29uZmlnLCBjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7dXJsLCBtZXRob2QsIGRhdGEsIGhlYWRlcnN9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCByZXF1ZXN0QXNBbnkgPSByZXF1ZXN0IGFzIGFueTtcbiAgICBpZighcmVxdWVzdEFzQW55Lm1ldGEpIHtcbiAgICAgICAgcmVxdWVzdEFzQW55Lm1ldGEgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tQ2hhbGsgPSBnZXRSYW5kb21Db2xvcigpO1xuICAgIHJlcXVlc3RBc0FueS5tZXRhLmNoYWxrID0gcmFuZG9tQ2hhbGs7XG5cbiAgICByZXF1ZXN0QXNBbnkubWV0YS5yZXF1ZXN0U3RhcnRlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoIWJ1aWxkQ29uZmlnLmlzUmVxdWVzdExvZ0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoTE9HX1RZUEUuUkVRVUVTVCwgdXJsLCB1bmRlZmluZWQsIHJhbmRvbUNoYWxrKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBidWlsZENvbmZpZy5sb2dnZXIobG9nKTtcblxuICAgIHJldHVybiByZXF1ZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBbXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwibWFnZW50YVwiLCBcImN5YW5cIiwgXCJ3aGl0ZVwiLCBcImdyYXlcIiwgXCJncmV5XCIsIFwiYmxhY2tCcmlnaHRcIiwgXCJyZWRCcmlnaHRcIiwgXCJncmVlbkJyaWdodFwiLCBcInllbGxvd0JyaWdodFwiLCBcImJsdWVCcmlnaHRcIiwgXCJtYWdlbnRhQnJpZ2h0XCIsIFwiY3lhbkJyaWdodFwiLCBcIndoaXRlQnJpZ2h0XCJdO1xuICAgIGxldCByYW5kb21UZXh0SW5kZXhcbiAgICBsZXQgcmFuZG9tQmdJbmRleFxuICAgIGRvIHtcbiAgICAgICAgcmFuZG9tVGV4dEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCk7XG4gICAgICAgIHJhbmRvbUJnSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgICB9IHdoaWxlKHJhbmRvbUJnSW5kZXggIT09IHJhbmRvbVRleHRJbmRleCk7XG5cbiAgICByZXR1cm4gY2hhbGsua2V5d29yZChjb2xvcnNbcmFuZG9tVGV4dEluZGV4XSkuYmdLZXl3b3JkKGNvbG9yc1tyYW5kb21CZ0luZGV4XSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RMb2dnZXI7XG4iXX0=
