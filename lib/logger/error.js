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
    var _respConfig$meta, _respConfig$meta2;

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
                : _respConfig$meta.chalk,
            (_respConfig$meta2 = respConfig.meta) === null || _respConfig$meta2 === void 0
                ? void 0
                : _respConfig$meta2.chalkBg
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJyZXNwQ29uZmlnIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIkxPR19UWVBFIiwiRVJST1IiLCJtZXRhIiwiY2hhbGsiLCJjaGFsa0JnIiwibWFrZURhdGVGb3JtYXQiLCJEYXRlIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCIsImVycm9yTG9nZ2VyIiwibG9nZ2VyIiwiY29uc29sZSIsIlByb21pc2UiLCJyZWplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxTQUFTQSx5QkFBVCxDQUFtQ0MsS0FBbkMsRUFBc0RDLE1BQXRELEVBQStFO0FBQUE7O0FBRTNFLFFBQU07QUFBQ0EsSUFBQUEsTUFBTSxFQUFFO0FBQUVDLE1BQUFBLE1BQUY7QUFBVUMsTUFBQUE7QUFBVixLQUFUO0FBQTBCQyxJQUFBQTtBQUExQixNQUFzQ0osS0FBNUM7QUFFQSxNQUFJSyxNQUFKLEVBQVlDLFVBQVosRUFBd0JDLElBQXhCLEVBQThCQyxPQUE5Qjs7QUFDQSxNQUFJSixRQUFKLEVBQWM7QUFDVkMsSUFBQUEsTUFBTSxHQUFHRCxRQUFRLENBQUNDLE1BQWxCO0FBQ0FDLElBQUFBLFVBQVUsR0FBR0YsUUFBUSxDQUFDRSxVQUF0QjtBQUNBQyxJQUFBQSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0csSUFBaEI7QUFDQUMsSUFBQUEsT0FBTyxHQUFHSixRQUFRLENBQUNJLE9BQW5CO0FBQ0g7O0FBQ0QsUUFBTUMsVUFBVSxHQUFHVCxLQUFLLENBQUNDLE1BQXpCO0FBRUEsUUFBTVMsV0FBVyxHQUFHLGlDQUFvQlQsTUFBcEIsQ0FBcEI7QUFFQSxRQUFNVSxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxxQkFETyxDQUNlQyxnQkFBU0MsS0FEeEIsRUFDK0JiLEdBRC9CLEVBQ29DLEVBRHBDLHNCQUN3Q00sVUFBVSxDQUFDUSxJQURuRCxxREFDd0MsaUJBQWlCQyxLQUR6RCx1QkFDZ0VULFVBQVUsQ0FBQ1EsSUFEM0Usc0RBQ2dFLGtCQUFpQkUsT0FEakYsRUFFUEMsY0FGTyxDQUVRLElBQUlDLElBQUosRUFGUixFQUdQQyxPQUhPLENBR0NuQixHQUhELEVBSVBvQixVQUpPLENBSUlsQixNQUpKLEVBSVlDLFVBSlosRUFLUGtCLFVBTE8sQ0FLSWhCLE9BTEosRUFNUGlCLFFBTk8sQ0FNRWxCLElBTkYsRUFPUG1CLEtBUE8sRUFBWjs7QUFTQSxNQUFHaEIsV0FBVyxJQUFJQSxXQUFXLENBQUNpQixXQUE5QixFQUEyQztBQUN2Q2pCLElBQUFBLFdBQVcsQ0FBQ2lCLFdBQVosQ0FBd0JkLEdBQXhCO0FBQ0gsR0FGRCxNQUVPLElBQUlILFdBQVcsSUFBSUEsV0FBVyxDQUFDa0IsTUFBL0IsRUFBdUM7QUFDMUNsQixJQUFBQSxXQUFXLENBQUNrQixNQUFaLENBQW1CZixHQUFuQjtBQUNILEdBRk0sTUFFQTtBQUNIZ0IsSUFBQUEsT0FBTyxDQUFDaEIsR0FBUixDQUFZQSxHQUFaO0FBQ0g7O0FBRUQsU0FBT2IsS0FBUDtBQUNIOztBQUVELFNBQVMyQixXQUFULENBQXFCM0IsS0FBckIsRUFBd0NDLE1BQXhDLEVBQWlFO0FBQzdELFNBQU82QixPQUFPLENBQUNDLE1BQVIsQ0FBZWhDLHlCQUF5QixDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBeEMsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVycm9yTG9nQ29uZmlnLCBMT0dfVFlQRSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlKGVycm9yOiBBeGlvc0Vycm9yLCBjb25maWc/OiBFcnJvckxvZ0NvbmZpZykge1xuXG4gICAgY29uc3Qge2NvbmZpZzogeyBtZXRob2QsIHVybCB9LCByZXNwb25zZX0gPSBlcnJvcjtcblxuICAgIGxldCBzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBoZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICB9XG4gICAgY29uc3QgcmVzcENvbmZpZyA9IGVycm9yLmNvbmZpZyBhcyBhbnk7XG5cbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KExPR19UWVBFLkVSUk9SLCB1cmwsIFwiXCIsIHJlc3BDb25maWcubWV0YT8uY2hhbGssIHJlc3BDb25maWcubWV0YT8uY2hhbGtCZylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlVXJsKHVybClcbiAgICAgICAgLm1ha2VTdGF0dXMoc3RhdHVzLCBzdGF0dXNUZXh0KVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBpZihidWlsZENvbmZpZyAmJiBidWlsZENvbmZpZy5lcnJvckxvZ2dlcikge1xuICAgICAgICBidWlsZENvbmZpZy5lcnJvckxvZ2dlcihsb2cpO1xuICAgIH0gZWxzZSBpZiAoYnVpbGRDb25maWcgJiYgYnVpbGRDb25maWcubG9nZ2VyKSB7XG4gICAgICAgIGJ1aWxkQ29uZmlnLmxvZ2dlcihsb2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVycm9yO1xufVxuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcihlcnJvcjogQXhpb3NFcnJvciwgY29uZmlnPzogRXJyb3JMb2dDb25maWcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZShlcnJvciwgY29uZmlnKSk7XG59XG5cbmV4cG9ydCB7IGVycm9yTG9nZ2VyLCBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlIH07XG4iXX0=
