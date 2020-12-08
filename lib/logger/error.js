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
    buildConfig.errorLogger ? buildConfig.errorLogger(log) : buildConfig.logger(log);
    return error;
}

function errorLogger(error, config) {
    return Promise.reject(errorLoggerWithoutPromise(error, config));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJyZXNwQ29uZmlnIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIkxPR19UWVBFIiwiRVJST1IiLCJtZXRhIiwiY2hhbGsiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCIsImVycm9yTG9nZ2VyIiwibG9nZ2VyIiwiUHJvbWlzZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLHlCQUFULENBQW1DQyxLQUFuQyxFQUFzREMsTUFBdEQsRUFBK0U7QUFBQTs7QUFFM0UsUUFBTTtBQUFDQSxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsTUFBRjtBQUFVQyxNQUFBQTtBQUFWLEtBQVQ7QUFBMEJDLElBQUFBO0FBQTFCLE1BQXNDSixLQUE1QztBQUVBLE1BQUlLLE1BQUosRUFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCOztBQUNBLE1BQUlKLFFBQUosRUFBYztBQUNWQyxJQUFBQSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0MsTUFBbEI7QUFDQUMsSUFBQUEsVUFBVSxHQUFHRixRQUFRLENBQUNFLFVBQXRCO0FBQ0FDLElBQUFBLElBQUksR0FBR0gsUUFBUSxDQUFDRyxJQUFoQjtBQUNBQyxJQUFBQSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ksT0FBbkI7QUFDSDs7QUFDRCxRQUFNQyxVQUFVLEdBQUdULEtBQUssQ0FBQ0MsTUFBekI7QUFFQSxRQUFNUyxXQUFXLEdBQUcsaUNBQW9CVCxNQUFwQixDQUFwQjtBQUVBLFFBQU1VLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2VDLGdCQUFTQyxLQUR4QixFQUMrQmIsR0FEL0IsRUFDb0MsRUFEcEMsc0JBQ3dDTSxVQUFVLENBQUNRLElBRG5ELHFEQUN3QyxpQkFBaUJDLEtBRHpELEVBRVBDLGNBRk8sQ0FFUSxJQUFJQyxJQUFKLEVBRlIsRUFHUEMsVUFITyxDQUdJbkIsTUFISixFQUlQb0IsT0FKTyxDQUlDbkIsR0FKRCxFQUtQb0IsVUFMTyxDQUtJbEIsTUFMSixFQUtZQyxVQUxaLEVBTVBrQixVQU5PLENBTUloQixPQU5KLEVBT1BpQixRQVBPLENBT0VsQixJQVBGLEVBUVBtQixLQVJPLEVBQVo7QUFVQWhCLEVBQUFBLFdBQVcsQ0FBQ2lCLFdBQVosR0FBMEJqQixXQUFXLENBQUNpQixXQUFaLENBQXdCZCxHQUF4QixDQUExQixHQUF5REgsV0FBVyxDQUFDa0IsTUFBWixDQUFtQmYsR0FBbkIsQ0FBekQ7QUFFQSxTQUFPYixLQUFQO0FBQ0g7O0FBRUQsU0FBUzJCLFdBQVQsQ0FBcUIzQixLQUFyQixFQUF3Q0MsTUFBeEMsRUFBaUU7QUFDN0QsU0FBTzRCLE9BQU8sQ0FBQ0MsTUFBUixDQUFlL0IseUJBQXlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixDQUF4QyxDQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRXJyb3JMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UoZXJyb3I6IEF4aW9zRXJyb3IsIGNvbmZpZz86IEVycm9yTG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7Y29uZmlnOiB7IG1ldGhvZCwgdXJsIH0sIHJlc3BvbnNlfSA9IGVycm9yO1xuXG4gICAgbGV0IHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVycztcbiAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgc3RhdHVzID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgICAgICBzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgIH1cbiAgICBjb25zdCByZXNwQ29uZmlnID0gZXJyb3IuY29uZmlnIGFzIGFueTtcblxuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgoTE9HX1RZUEUuRVJST1IsIHVybCwgXCJcIiwgcmVzcENvbmZpZy5tZXRhPy5jaGFsaylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIGJ1aWxkQ29uZmlnLmVycm9yTG9nZ2VyID8gYnVpbGRDb25maWcuZXJyb3JMb2dnZXIobG9nKSA6IGJ1aWxkQ29uZmlnLmxvZ2dlcihsb2cpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcihlcnJvcjogQXhpb3NFcnJvciwgY29uZmlnPzogRXJyb3JMb2dDb25maWcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZShlcnJvciwgY29uZmlnKSk7XG59XG5cbmV4cG9ydCB7IGVycm9yTG9nZ2VyLCBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlIH07XG4iXX0=
