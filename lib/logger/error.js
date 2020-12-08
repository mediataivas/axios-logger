'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.errorLogger = errorLogger;
exports.errorLoggerWithoutPromise = errorLoggerWithoutPromise;

var _types = require('../common/types');

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function errorLoggerWithoutPromise(error, config) {
    var _respConfig$meta;

    const {
        config: { method, url },
        response,
    } = error;
    let status, statusText, data, headers;

    if (response) {
        status = response.status;
        statusText = response.statusText;
        data = response.data;
        headers = response.headers;
    }

    const respConfig = error.config;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(
            _types.LOG_TYPE.ERROR,
            url,
            '',
            (_respConfig$meta = respConfig.meta) === null || _respConfig$meta === void 0
                ? void 0
                : _respConfig$meta.chalk
        )
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();

    if (buildConfig && buildConfig.errorLogger) {
        buildConfig.errorLogger(log);
    } else if (buildConfig && buildConfig.logger) {
        buildConfig.logger(log);
    } else {
        console.log(log);
    }

    return error;
}

function errorLogger(error, config) {
    return Promise.reject(errorLoggerWithoutPromise(error, config));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJyZXNwQ29uZmlnIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIkxPR19UWVBFIiwiRVJST1IiLCJtZXRhIiwiY2hhbGsiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCIsImVycm9yTG9nZ2VyIiwibG9nZ2VyIiwiY29uc29sZSIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSx5QkFBVCxDQUFtQ0MsS0FBbkMsRUFBc0RDLE1BQXRELEVBQStFO0FBQUE7O0FBRTNFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLE1BQUY7QUFBVUMsTUFBQUE7QUFBVixLQUFUO0FBQTBCQyxJQUFBQTtBQUExQixNQUFzQ0osS0FBNUM7QUFFQSxNQUFJSyxNQUFKLEVBQVlDLFVBQVosRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5Qjs7QUFDQSxNQUFJSixRQUFKLEVBQWM7QUFDVkMsSUFBQUEsTUFBTSxHQUFHRCxRQUFRLENBQUNDLE1BQWxCO0FBQ0FDLElBQUFBLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUF0QjtBQUNBQyxJQUFBQSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0csSUFBaEI7QUFDQUMsSUFBQUEsT0FBTyxHQUFHSixRQUFRLENBQUNJLE9BQW5CO0FBQ0g7O0FBQ0QsUUFBTUMsVUFBVSxHQUFHVCxLQUFLLENBQUNDLE1BQXpCO0FBRUEsUUFBTVMsV0FBVyxHQUFHLGlDQUFvQlQsTUFBcEIsQ0FBcEI7QUFFQSxRQUFNVSxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxxQkFETyxDQUNlQyxnQkFBU0MsS0FEeEIsRUFDK0JiLEdBRC9CLEVBQ29DLEVBRHBDLHNCQUN3Q00sVUFBVSxDQUFDUSxJQURuRCxxREFDd0MsaUJBQWlCQyxLQUR6RCxFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSW5CLE1BSEosRUFJUG9CLE9BSk8sQ0FJQ25CLEdBSkQsRUFLUG9CLFVBTE8sQ0FLSWxCLE1BTEosRUFLWUMsVUFMWixFQU1Qa0IsVUFOTyxDQU1JaEIsT0FOSixFQU9QaUIsUUFQTyxDQU9FbEIsSUFQRixFQVFQbUIsS0FSTyxFQUFaOztBQVVBLE1BQUdoQixXQUFXLElBQUlBLFdBQVcsQ0FBQ2lCLFdBQTlCLEVBQTJDO0FBQ3ZDakIsSUFBQUEsV0FBVyxDQUFDaUIsV0FBWixDQUF3QmQsR0FBeEI7QUFDSCxHQUZELE1BRU8sSUFBSUgsV0FBVyxJQUFJQSxXQUFXLENBQUNrQixNQUEvQixFQUF1QztBQUMxQ2xCLElBQUFBLFdBQVcsQ0FBQ2tCLE1BQVosQ0FBbUJmLEdBQW5CO0FBQ0gsR0FGTSxNQUVBO0FBQ0hnQixJQUFBQSxPQUFPLENBQUNoQixHQUFSLENBQVlBLEdBQVo7QUFDSDs7QUFFRCxTQUFPYixLQUFQO0FBQ0g7O0FBRUQsU0FBUzJCLFdBQVQsQ0FBcUIzQixLQUFyQixFQUF3Q0MsTUFBeEMsRUFBaUU7QUFDN0QsU0FBTzZCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlaEMseUJBQXlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixDQUF4QyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRXJyb3JMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UoZXJyb3I6IEF4aW9zRXJyb3IsIGNvbmZpZz86IEVycm9yTG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7Y29uZmlnOiB7IG1ldGhvZCwgdXJsIH0sIHJlc3BvbnNlfSA9IGVycm9yO1xuXG4gICAgbGV0IHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIH1cbiAgICBjb25zdCByZXNwQ29uZmlnID0gZXJyb3IuY29uZmlnIGFzIGFueTtcblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoTE9HX1RZUEUuRVJST1IsIHVybCwgXCJcIiwgcmVzcENvbmZpZy5tZXRhPy5jaGFsaylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIGlmKGJ1aWxkQ29uZmlnICYmIGJ1aWxkQ29uZmlnLmVycm9yTG9nZ2VyKSB7XG4gICAgICAgIGJ1aWxkQ29uZmlnLmVycm9yTG9nZ2VyKGxvZyk7XG4gICAgfSBlbHNlIGlmIChidWlsZENvbmZpZyAmJiBidWlsZENvbmZpZy5sb2dnZXIpIHtcbiAgICAgICAgYnVpbGRDb25maWcubG9nZ2VyKGxvZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGVycm9yTG9nZ2VyKGVycm9yOiBBeGlvc0Vycm9yLCBjb25maWc/OiBFcnJvckxvZ0NvbmZpZykge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlKGVycm9yLCBjb25maWcpKTtcbn1cblxuZXhwb3J0IHsgZXJyb3JMb2dnZXIsIGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UgfTtcbiJdfQ==
