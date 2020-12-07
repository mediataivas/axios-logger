'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.errorLogger = errorLogger;
exports.errorLoggerWithoutPromise = errorLoggerWithoutPromise;

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function errorLoggerWithoutPromise(error, config) {
    var _buildConfig$logger;

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

    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Error')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    const logger =
        (_buildConfig$logger = buildConfig.logger) !== null && _buildConfig$logger !== void 0
            ? _buildConfig$logger
            : (0, _config.getGlobalConfig)().logger;
    logger(log);
    return error;
}

function errorLogger(error, config) {
    return Promise.reject(errorLoggerWithoutPromise(error, config));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJidWlsZENvbmZpZyIsInN0cmluZ0J1aWxkZXIiLCJTdHJpbmdCdWlsZGVyIiwibG9nIiwibWFrZUxvZ1R5cGVXaXRoUHJlZml4IiwibWFrZURhdGVGb3JtYXQiLCJEYXRlIiwibWFrZU1ldGhvZCIsIm1ha2VVcmwiLCJtYWtlU3RhdHVzIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiLCJsb2dnZXIiLCJlcnJvckxvZ2dlciIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxTQUFTQSx5QkFBVCxDQUFtQ0MsS0FBbkMsRUFBc0RDLE1BQXRELEVBQStFO0FBQUE7O0FBRTNFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLE1BQUY7QUFBVUMsTUFBQUE7QUFBVixLQUFUO0FBQTBCQyxJQUFBQTtBQUExQixNQUFzQ0osS0FBNUM7QUFFQSxNQUFJSyxNQUFKLEVBQVlDLFVBQVosRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5Qjs7QUFDQSxNQUFJSixRQUFKLEVBQWM7QUFDVkMsSUFBQUEsTUFBTSxHQUFHRCxRQUFRLENBQUNDLE1BQWxCO0FBQ0FDLElBQUFBLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUF0QjtBQUNBQyxJQUFBQSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0csSUFBaEI7QUFDQUMsSUFBQUEsT0FBTyxHQUFHSixRQUFRLENBQUNJLE9BQW5CO0FBQ0g7O0FBRUQsUUFBTUMsV0FBVyxHQUFHLGlDQUFvQlIsTUFBcEIsQ0FBcEI7QUFFQSxRQUFNUyxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxxQkFETyxDQUNlLE9BRGYsRUFFUEMsY0FGTyxDQUVRLElBQUlDLElBQUosRUFGUixFQUdQQyxVQUhPLENBR0lkLE1BSEosRUFJUGUsT0FKTyxDQUlDZCxHQUpELEVBS1BlLFVBTE8sQ0FLSWIsTUFMSixFQUtZQyxVQUxaLEVBTVBhLFVBTk8sQ0FNSVgsT0FOSixFQU9QWSxRQVBPLENBT0ViLElBUEYsRUFRUGMsS0FSTyxFQUFaO0FBV0EsUUFBTUMsTUFBTSwwQkFBSWIsV0FBVyxDQUFDYSxNQUFoQixxRUFBMEIsK0JBQWtCQSxNQUF4RDtBQUNBQSxFQUFBQSxNQUFNLENBQUNWLEdBQUQsQ0FBTjtBQUVBLFNBQU9aLEtBQVA7QUFDSDs7QUFFRCxTQUFTdUIsV0FBVCxDQUFxQnZCLEtBQXJCLEVBQXdDQyxNQUF4QyxFQUFpRTtBQUM3RCxTQUFPdUIsT0FBTyxDQUFDQyxNQUFSLENBQWUxQix5QkFBeUIsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLENBQXhDLENBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zRXJyb3IgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBFcnJvckxvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UoZXJyb3I6IEF4aW9zRXJyb3IsIGNvbmZpZz86IEVycm9yTG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7Y29uZmlnOiB7IG1ldGhvZCwgdXJsIH0sIHJlc3BvbnNlfSA9IGVycm9yO1xuXG4gICAgbGV0IHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoJ0Vycm9yJylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuXG4gICAgY29uc3QgbG9nZ2VyID0gKGJ1aWxkQ29uZmlnLmxvZ2dlciA/PyBnZXRHbG9iYWxDb25maWcoKS5sb2dnZXIpO1xuICAgIGxvZ2dlcihsb2cpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcihlcnJvcjogQXhpb3NFcnJvciwgY29uZmlnPzogRXJyb3JMb2dDb25maWcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZShlcnJvciwgY29uZmlnKSk7XG59XG5cbmV4cG9ydCB7IGVycm9yTG9nZ2VyLCBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlIH07XG4iXX0=
