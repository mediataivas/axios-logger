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
    const buildConfig = (0, _config.assembleBuildConfig)(config); // eslint-disable-next-line no-console

    console.log('kwaakbuildConfig', buildConfig);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJyZXNwQ29uZmlnIiwiYnVpbGRDb25maWciLCJjb25zb2xlIiwibG9nIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJMT0dfVFlQRSIsIkVSUk9SIiwibWV0YSIsImNoYWxrIiwibWFrZURhdGVGb3JtYXQiLCJEYXRlIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCIsImVycm9yTG9nZ2VyIiwibG9nZ2VyIiwiUHJvbWlzZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLHlCQUFULENBQW1DQyxLQUFuQyxFQUFzREMsTUFBdEQsRUFBK0U7QUFBQTs7QUFFM0UsUUFBTTtBQUFDQSxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsTUFBRjtBQUFVQyxNQUFBQTtBQUFWLEtBQVQ7QUFBMEJDLElBQUFBO0FBQTFCLE1BQXNDSixLQUE1QztBQUVBLE1BQUlLLE1BQUosRUFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCOztBQUNBLE1BQUlKLFFBQUosRUFBYztBQUNWQyxJQUFBQSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0MsTUFBbEI7QUFDQUMsSUFBQUEsVUFBVSxHQUFHRixRQUFRLENBQUNFLFVBQXRCO0FBQ0FDLElBQUFBLElBQUksR0FBR0gsUUFBUSxDQUFDRyxJQUFoQjtBQUNBQyxJQUFBQSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ksT0FBbkI7QUFDSDs7QUFDRCxRQUFNQyxVQUFVLEdBQUdULEtBQUssQ0FBQ0MsTUFBekI7QUFFQSxRQUFNUyxXQUFXLEdBQUcsaUNBQW9CVCxNQUFwQixDQUFwQixDQWIyRSxDQWUzRTs7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NGLFdBQWhDO0FBQ0EsUUFBTUcsYUFBYSxHQUFHLElBQUlDLHNCQUFKLENBQWtCSixXQUFsQixDQUF0QjtBQUNBLFFBQU1FLEdBQUcsR0FBR0MsYUFBYSxDQUNwQkUscUJBRE8sQ0FDZUMsZ0JBQVNDLEtBRHhCLEVBQytCZCxHQUQvQixFQUNvQyxFQURwQyxzQkFDd0NNLFVBQVUsQ0FBQ1MsSUFEbkQscURBQ3dDLGlCQUFpQkMsS0FEekQsRUFFUEMsY0FGTyxDQUVRLElBQUlDLElBQUosRUFGUixFQUdQQyxPQUhPLENBR0NuQixHQUhELEVBSVBvQixVQUpPLENBSUlsQixNQUpKLEVBSVlDLFVBSlosRUFLUGtCLFVBTE8sQ0FLSWhCLE9BTEosRUFNUGlCLFFBTk8sQ0FNRWxCLElBTkYsRUFPUG1CLEtBUE8sRUFBWjs7QUFTQSxNQUFHaEIsV0FBVyxJQUFJQSxXQUFXLENBQUNpQixXQUE5QixFQUEyQztBQUN2Q2pCLElBQUFBLFdBQVcsQ0FBQ2lCLFdBQVosQ0FBd0JmLEdBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUlGLFdBQVcsSUFBSUEsV0FBVyxDQUFDa0IsTUFBL0IsRUFBdUM7QUFDMUNsQixJQUFBQSxXQUFXLENBQUNrQixNQUFaLENBQW1CaEIsR0FBbkI7QUFDSCxHQUZNLE1BRUE7QUFDSEQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlBLEdBQVo7QUFDSDs7QUFFRCxTQUFPWixLQUFQO0FBQ0g7O0FBRUQsU0FBUzJCLFdBQVQsQ0FBcUIzQixLQUFyQixFQUF3Q0MsTUFBeEMsRUFBaUU7QUFDN0QsU0FBTzRCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlL0IseUJBQXlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixDQUF4QyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRXJyb3JMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UoZXJyb3I6IEF4aW9zRXJyb3IsIGNvbmZpZz86IEVycm9yTG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7Y29uZmlnOiB7IG1ldGhvZCwgdXJsIH0sIHJlc3BvbnNlfSA9IGVycm9yO1xuXG4gICAgbGV0IHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIH1cbiAgICBjb25zdCByZXNwQ29uZmlnID0gZXJyb3IuY29uZmlnIGFzIGFueTtcblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmxvZyhcImt3YWFrYnVpbGRDb25maWdcIiwgYnVpbGRDb25maWcpXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoTE9HX1RZUEUuRVJST1IsIHVybCwgXCJcIiwgcmVzcENvbmZpZy5tZXRhPy5jaGFsaylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VTdGF0dXMoc3RhdHVzLCBzdGF0dXNUZXh0KVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBpZihidWlsZENvbmZpZyAmJiBidWlsZENvbmZpZy5lcnJvckxvZ2dlcikge1xuICAgICAgICBidWlsZENvbmZpZy5lcnJvckxvZ2dlcihsb2cpO1xuICAgIH0gZWxzZSBpZiAoYnVpbGRDb25maWcgJiYgYnVpbGRDb25maWcubG9nZ2VyKSB7XG4gICAgICAgIGJ1aWxkQ29uZmlnLmxvZ2dlcihsb2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcihlcnJvcjogQXhpb3NFcnJvciwgY29uZmlnPzogRXJyb3JMb2dDb25maWcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZShlcnJvciwgY29uZmlnKSk7XG59XG5cbmV4cG9ydCB7IGVycm9yTG9nZ2VyLCBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlIH07XG4iXX0=
