'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function responseLogger(response, config) {
    var _ref, _buildConfig$logger;

    const {
        config: { url, method },
        status,
        statusText,
        data,
        headers,
    } = response;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Response')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    const logger =
        (_ref =
            (_buildConfig$logger = buildConfig.logger) !== null && _buildConfig$logger !== void 0
                ? _buildConfig$logger
                : (0, _config.getGlobalConfig)().logger) !== null && _ref !== void 0
            ? _ref
            : console.log;
    logger(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIkRhdGUiLCJtYWtlTWV0aG9kIiwibWFrZVVybCIsIm1ha2VTdGF0dXMiLCJtYWtlSGVhZGVyIiwibWFrZURhdGEiLCJidWlsZCIsImxvZ2dlciIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWlEQyxNQUFqRCxFQUE2RTtBQUFBOztBQUN6RSxRQUFNO0FBQUNBLElBQUFBLE1BQU0sRUFBRTtBQUFDQyxNQUFBQSxHQUFEO0FBQU1DLE1BQUFBO0FBQU4sS0FBVDtBQUF3QkMsSUFBQUEsTUFBeEI7QUFBZ0NDLElBQUFBLFVBQWhDO0FBQTRDQyxJQUFBQSxJQUE1QztBQUFrREMsSUFBQUE7QUFBbEQsTUFBNkRQLFFBQW5FO0FBQ0EsUUFBTVEsV0FBVyxHQUFHLGlDQUFvQlAsTUFBcEIsQ0FBcEI7QUFFQSxRQUFNUSxhQUFhLEdBQUcsSUFBSUMsc0JBQUosQ0FBa0JGLFdBQWxCLENBQXRCO0FBQ0EsUUFBTUcsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxxQkFETyxDQUNlLFVBRGYsRUFFUEMsY0FGTyxDQUVRLElBQUlDLElBQUosRUFGUixFQUdQQyxVQUhPLENBR0laLE1BSEosRUFJUGEsT0FKTyxDQUlDZCxHQUpELEVBS1BlLFVBTE8sQ0FLSWIsTUFMSixFQUtZQyxVQUxaLEVBTVBhLFVBTk8sQ0FNSVgsT0FOSixFQU9QWSxRQVBPLENBT0ViLElBUEYsRUFRUGMsS0FSTyxFQUFaO0FBVUEsUUFBTUMsTUFBTSxrQ0FBSWIsV0FBVyxDQUFDYSxNQUFoQixxRUFBMEIsK0JBQWtCQSxNQUE1Qyx1Q0FBdURDLE9BQU8sQ0FBQ1gsR0FBM0U7QUFDQVUsRUFBQUEsTUFBTSxDQUFDVixHQUFELENBQU47QUFFQSxTQUFPWCxRQUFQO0FBQ0g7O2VBRWNELGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUmVzcG9uc2VMb2dDb25maWcgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgYXNzZW1ibGVCdWlsZENvbmZpZywgZ2V0R2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZyc7XG5pbXBvcnQgU3RyaW5nQnVpbGRlciBmcm9tICcuLi9jb21tb24vc3RyaW5nLWJ1aWxkZXInO1xuXG5mdW5jdGlvbiByZXNwb25zZUxvZ2dlcihyZXNwb25zZTogQXhpb3NSZXNwb25zZSwgY29uZmlnPzogUmVzcG9uc2VMb2dDb25maWcpIHtcbiAgICBjb25zdCB7Y29uZmlnOiB7dXJsLCBtZXRob2R9LCBzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGhlYWRlcnN9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZyk7XG5cbiAgICBjb25zdCBzdHJpbmdCdWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoYnVpbGRDb25maWcpO1xuICAgIGNvbnN0IGxvZyA9IHN0cmluZ0J1aWxkZXJcbiAgICAgICAgLm1ha2VMb2dUeXBlV2l0aFByZWZpeCgnUmVzcG9uc2UnKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZVVybCh1cmwpXG4gICAgICAgIC5tYWtlU3RhdHVzKHN0YXR1cywgc3RhdHVzVGV4dClcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgY29uc3QgbG9nZ2VyID0gKGJ1aWxkQ29uZmlnLmxvZ2dlciA/PyBnZXRHbG9iYWxDb25maWcoKS5sb2dnZXIpID8/IGNvbnNvbGUubG9nO1xuICAgIGxvZ2dlcihsb2cpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNwb25zZUxvZ2dlcjtcbiJdfQ==
