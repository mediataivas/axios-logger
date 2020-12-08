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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvZXJyb3IudHMiXSwibmFtZXMiOlsiZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSIsImVycm9yIiwiY29uZmlnIiwibWV0aG9kIiwidXJsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImhlYWRlcnMiLCJyZXNwQ29uZmlnIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIkxPR19UWVBFIiwiRVJST1IiLCJtZXRhIiwiY2hhbGsiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlVXJsIiwibWFrZVN0YXR1cyIsIm1ha2VIZWFkZXIiLCJtYWtlRGF0YSIsImJ1aWxkIiwiZXJyb3JMb2dnZXIiLCJsb2dnZXIiLCJjb25zb2xlIiwiUHJvbWlzZSIsInJlamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLFNBQVNBLHlCQUFULENBQW1DQyxLQUFuQyxFQUFzREMsTUFBdEQsRUFBK0U7QUFBQTs7QUFFM0UsUUFBTTtBQUFDQSxJQUFBQSxNQUFNLEVBQUU7QUFBRUMsTUFBQUEsTUFBRjtBQUFVQyxNQUFBQTtBQUFWLEtBQVQ7QUFBMEJDLElBQUFBO0FBQTFCLE1BQXNDSixLQUE1QztBQUVBLE1BQUlLLE1BQUosRUFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCOztBQUNBLE1BQUlKLFFBQUosRUFBYztBQUNWQyxJQUFBQSxNQUFNLEdBQUdELFFBQVEsQ0FBQ0MsTUFBbEI7QUFDQUMsSUFBQUEsVUFBVSxHQUFHRixRQUFRLENBQUNFLFVBQXRCO0FBQ0FDLElBQUFBLElBQUksR0FBR0gsUUFBUSxDQUFDRyxJQUFoQjtBQUNBQyxJQUFBQSxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ksT0FBbkI7QUFDSDs7QUFDRCxRQUFNQyxVQUFVLEdBQUdULEtBQUssQ0FBQ0MsTUFBekI7QUFFQSxRQUFNUyxXQUFXLEdBQUcsaUNBQW9CVCxNQUFwQixDQUFwQjtBQUVBLFFBQU1VLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2VDLGdCQUFTQyxLQUR4QixFQUMrQmIsR0FEL0IsRUFDb0MsRUFEcEMsc0JBQ3dDTSxVQUFVLENBQUNRLElBRG5ELHFEQUN3QyxpQkFBaUJDLEtBRHpELEVBRVBDLGNBRk8sQ0FFUSxJQUFJQyxJQUFKLEVBRlIsRUFHUEMsT0FITyxDQUdDbEIsR0FIRCxFQUlQbUIsVUFKTyxDQUlJakIsTUFKSixFQUlZQyxVQUpaLEVBS1BpQixVQUxPLENBS0lmLE9BTEosRUFNUGdCLFFBTk8sQ0FNRWpCLElBTkYsRUFPUGtCLEtBUE8sRUFBWjs7QUFTQSxNQUFHZixXQUFXLElBQUlBLFdBQVcsQ0FBQ2dCLFdBQTlCLEVBQTJDO0FBQ3ZDaEIsSUFBQUEsV0FBVyxDQUFDZ0IsV0FBWixDQUF3QmIsR0FBeEI7QUFDSCxHQUZELE1BRU8sSUFBSUgsV0FBVyxJQUFJQSxXQUFXLENBQUNpQixNQUEvQixFQUF1QztBQUMxQ2pCLElBQUFBLFdBQVcsQ0FBQ2lCLE1BQVosQ0FBbUJkLEdBQW5CO0FBQ0gsR0FGTSxNQUVBO0FBQ0hlLElBQUFBLE9BQU8sQ0FBQ2YsR0FBUixDQUFZQSxHQUFaO0FBQ0g7O0FBRUQsU0FBT2IsS0FBUDtBQUNIOztBQUVELFNBQVMwQixXQUFULENBQXFCMUIsS0FBckIsRUFBd0NDLE1BQXhDLEVBQWlFO0FBQzdELFNBQU80QixPQUFPLENBQUNDLE1BQVIsQ0FBZS9CLHlCQUF5QixDQUFDQyxLQUFELEVBQVFDLE1BQVIsQ0FBeEMsQ0FBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEVycm9yTG9nQ29uZmlnLCBMT0dfVFlQRSB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuXG5mdW5jdGlvbiBlcnJvckxvZ2dlcldpdGhvdXRQcm9taXNlKGVycm9yOiBBeGlvc0Vycm9yLCBjb25maWc/OiBFcnJvckxvZ0NvbmZpZykge1xuXG4gICAgY29uc3Qge2NvbmZpZzogeyBtZXRob2QsIHVybCB9LCByZXNwb25zZX0gPSBlcnJvcjtcblxuICAgIGxldCBzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGhlYWRlcnM7XG4gICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgIHN0YXR1cyA9IHJlc3BvbnNlLnN0YXR1cztcbiAgICAgICAgc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgIGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICBoZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICB9XG4gICAgY29uc3QgcmVzcENvbmZpZyA9IGVycm9yLmNvbmZpZyBhcyBhbnk7XG5cbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KExPR19UWVBFLkVSUk9SLCB1cmwsIFwiXCIsIHJlc3BDb25maWcubWV0YT8uY2hhbGspXG4gICAgICAgIC5tYWtlRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKVxuICAgICAgICAubWFrZVVybCh1cmwpXG4gICAgICAgIC5tYWtlU3RhdHVzKHN0YXR1cywgc3RhdHVzVGV4dClcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgaWYoYnVpbGRDb25maWcgJiYgYnVpbGRDb25maWcuZXJyb3JMb2dnZXIpIHtcbiAgICAgICAgYnVpbGRDb25maWcuZXJyb3JMb2dnZXIobG9nKTtcbiAgICB9IGVsc2UgaWYgKGJ1aWxkQ29uZmlnICYmIGJ1aWxkQ29uZmlnLmxvZ2dlcikge1xuICAgICAgICBidWlsZENvbmZpZy5sb2dnZXIobG9nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcjtcbn1cblxuZnVuY3Rpb24gZXJyb3JMb2dnZXIoZXJyb3I6IEF4aW9zRXJyb3IsIGNvbmZpZz86IEVycm9yTG9nQ29uZmlnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yTG9nZ2VyV2l0aG91dFByb21pc2UoZXJyb3IsIGNvbmZpZykpO1xufVxuXG5leHBvcnQgeyBlcnJvckxvZ2dlciwgZXJyb3JMb2dnZXJXaXRob3V0UHJvbWlzZSB9O1xuIl19
