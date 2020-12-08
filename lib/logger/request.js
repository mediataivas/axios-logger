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
    } while (randomBgIndex === randomTextIndex);

    return _chalk.default.bgKeyword(colors[randomBgIndex]);
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJyZXF1ZXN0QXNBbnkiLCJtZXRhIiwicmFuZG9tQ2hhbGsiLCJnZXRSYW5kb21Db2xvciIsImNoYWxrIiwicmVxdWVzdFN0YXJ0ZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwiaXNSZXF1ZXN0TG9nRW5hYmxlZCIsInN0cmluZ0J1aWxkZXIiLCJTdHJpbmdCdWlsZGVyIiwibG9nIiwibWFrZUxvZ1R5cGVXaXRoUHJlZml4IiwiTE9HX1RZUEUiLCJSRVFVRVNUIiwidW5kZWZpbmVkIiwibWFrZURhdGVGb3JtYXQiLCJtYWtlTWV0aG9kIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiLCJsb2dnZXIiLCJjb2xvcnMiLCJyYW5kb21UZXh0SW5kZXgiLCJyYW5kb21CZ0luZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiYmdLZXl3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxTQUFTQSxhQUFULENBQXVCQyxPQUF2QixFQUFvREMsTUFBcEQsRUFBK0U7QUFFM0UsUUFBTTtBQUFDQyxJQUFBQSxHQUFEO0FBQU1DLElBQUFBLE1BQU47QUFBY0MsSUFBQUEsSUFBZDtBQUFvQkMsSUFBQUE7QUFBcEIsTUFBK0JMLE9BQXJDO0FBQ0EsUUFBTU0sV0FBVyxHQUFHLGlDQUFvQkwsTUFBcEIsQ0FBcEI7QUFDQSxRQUFNTSxZQUFZLEdBQUdQLE9BQXJCOztBQUNBLE1BQUcsQ0FBQ08sWUFBWSxDQUFDQyxJQUFqQixFQUF1QjtBQUNuQkQsSUFBQUEsWUFBWSxDQUFDQyxJQUFiLEdBQW9CLEVBQXBCO0FBQ0g7O0FBQ0QsUUFBTUMsV0FBVyxHQUFHQyxjQUFjLEVBQWxDO0FBQ0FILEVBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQkcsS0FBbEIsR0FBMEJGLFdBQTFCO0FBRUFGLEVBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQkksZ0JBQWxCLEdBQXFDLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFyQzs7QUFFQSxNQUFJLENBQUNSLFdBQVcsQ0FBQ1MsbUJBQWpCLEVBQXNDO0FBQ2xDLFdBQU9mLE9BQVA7QUFDSDs7QUFFRCxRQUFNZ0IsYUFBYSxHQUFHLElBQUlDLHNCQUFKLENBQWtCWCxXQUFsQixDQUF0QjtBQUNBLFFBQU1ZLEdBQUcsR0FBR0YsYUFBYSxDQUNwQkcscUJBRE8sQ0FDZUMsZ0JBQVNDLE9BRHhCLEVBQ2lDbkIsR0FEakMsRUFDc0NvQixTQUR0QyxFQUNpRGIsV0FEakQsRUFFUGMsY0FGTyxDQUVRLElBQUlWLElBQUosRUFGUixFQUdQVyxVQUhPLENBR0lyQixNQUhKLEVBSVBzQixVQUpPLENBSUlwQixPQUpKLEVBS1BxQixRQUxPLENBS0V0QixJQUxGLEVBTVB1QixLQU5PLEVBQVo7QUFRQXJCLEVBQUFBLFdBQVcsQ0FBQ3NCLE1BQVosQ0FBbUJWLEdBQW5CO0FBRUEsU0FBT2xCLE9BQVA7QUFDSDs7QUFFRCxTQUFTVSxjQUFULEdBQTBCO0FBQ3RCLFFBQU1tQixNQUFNLEdBQUcsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixTQUFuQixFQUE4QixNQUE5QixFQUFzQyxPQUF0QyxFQUErQyxNQUEvQyxFQUF1RCxNQUF2RCxFQUErRCxhQUEvRCxFQUE4RSxXQUE5RSxFQUEyRixhQUEzRixFQUEwRyxjQUExRyxFQUEwSCxZQUExSCxFQUF3SSxlQUF4SSxFQUF5SixZQUF6SixFQUF1SyxhQUF2SyxDQUFmO0FBQ0EsTUFBSUMsZUFBSjtBQUNBLE1BQUlDLGFBQUo7O0FBQ0EsS0FBRztBQUNDRCxJQUFBQSxlQUFlLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JMLE1BQU0sQ0FBQ00sTUFBbEMsQ0FBbEI7QUFDQUosSUFBQUEsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCTCxNQUFNLENBQUNNLE1BQWxDLENBQWhCO0FBQ0gsR0FIRCxRQUdRSixhQUFhLEtBQUtELGVBSDFCOztBQUtBLFNBQU9uQixlQUFNeUIsU0FBTixDQUFnQlAsTUFBTSxDQUFDRSxhQUFELENBQXRCLENBQVA7QUFDSDs7ZUFFY2hDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMT0dfVFlQRSwgUmVxdWVzdExvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5cbmZ1bmN0aW9uIHJlcXVlc3RMb2dnZXIocmVxdWVzdDogQXhpb3NSZXF1ZXN0Q29uZmlnLCBjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7dXJsLCBtZXRob2QsIGRhdGEsIGhlYWRlcnN9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcbiAgICBjb25zdCByZXF1ZXN0QXNBbnkgPSByZXF1ZXN0IGFzIGFueTtcbiAgICBpZighcmVxdWVzdEFzQW55Lm1ldGEpIHtcbiAgICAgICAgcmVxdWVzdEFzQW55Lm1ldGEgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tQ2hhbGsgPSBnZXRSYW5kb21Db2xvcigpO1xuICAgIHJlcXVlc3RBc0FueS5tZXRhLmNoYWxrID0gcmFuZG9tQ2hhbGs7XG5cbiAgICByZXF1ZXN0QXNBbnkubWV0YS5yZXF1ZXN0U3RhcnRlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBpZiAoIWJ1aWxkQ29uZmlnLmlzUmVxdWVzdExvZ0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoTE9HX1RZUEUuUkVRVUVTVCwgdXJsLCB1bmRlZmluZWQsIHJhbmRvbUNoYWxrKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBidWlsZENvbmZpZy5sb2dnZXIobG9nKTtcblxuICAgIHJldHVybiByZXF1ZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBbXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwibWFnZW50YVwiLCBcImN5YW5cIiwgXCJ3aGl0ZVwiLCBcImdyYXlcIiwgXCJncmV5XCIsIFwiYmxhY2tCcmlnaHRcIiwgXCJyZWRCcmlnaHRcIiwgXCJncmVlbkJyaWdodFwiLCBcInllbGxvd0JyaWdodFwiLCBcImJsdWVCcmlnaHRcIiwgXCJtYWdlbnRhQnJpZ2h0XCIsIFwiY3lhbkJyaWdodFwiLCBcIndoaXRlQnJpZ2h0XCJdO1xuICAgIGxldCByYW5kb21UZXh0SW5kZXhcbiAgICBsZXQgcmFuZG9tQmdJbmRleFxuICAgIGRvIHtcbiAgICAgICAgcmFuZG9tVGV4dEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCk7XG4gICAgICAgIHJhbmRvbUJnSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgICB9IHdoaWxlKHJhbmRvbUJnSW5kZXggPT09IHJhbmRvbVRleHRJbmRleCk7XG5cbiAgICByZXR1cm4gY2hhbGsuYmdLZXl3b3JkKGNvbG9yc1tyYW5kb21CZ0luZGV4XSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RMb2dnZXI7XG4iXX0=
