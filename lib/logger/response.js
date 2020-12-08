'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _types = require('../common/types');

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function responseLogger(response, config) {
    var _respConfig$meta$requ, _respConfig$meta;

    const {
        config: { url, method },
        status,
        statusText,
        data,
        headers,
    } = response;
    const buildConfig = (0, _config.assembleBuildConfig)(config);

    if (!buildConfig.isResponseLogEnabled) {
        return response;
    }

    const currentTime = new Date().getTime();
    const respConfig = response.config;
    const requestDurationInMs =
        currentTime -
        ((_respConfig$meta$requ =
            (_respConfig$meta = respConfig.meta) === null || _respConfig$meta === void 0
                ? void 0
                : _respConfig$meta.requestStartedAt) !== null && _respConfig$meta$requ !== void 0
            ? _respConfig$meta$requ
            : currentTime);
    let logger = buildConfig.logger;
    const { warnIfDurationIsLongerThanMs, warnLogger } = buildConfig;
    let durationString = '';

    if (buildConfig.showDuration) {
        if (
            buildConfig.warnIfDurationIsLongerThanMs > 0 &&
            requestDurationInMs > buildConfig.warnIfDurationIsLongerThanMs
        ) {
            warnLogger('Request duration was over ' + warnIfDurationIsLongerThanMs + 'ms ');
            logger = warnLogger;
        }

        durationString = ` ${Number(requestDurationInMs / 1000).toFixed(2)}s`;
    }

    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(_types.LOG_TYPE.RESPONSE, url, durationString)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeStatus(status, statusText)
        .makeHeader(headers)
        .makeData(data)
        .build();
    logger(log);
    return response;
}

var _default = responseLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwiaXNSZXNwb25zZUxvZ0VuYWJsZWQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwicmVzcENvbmZpZyIsInJlcXVlc3REdXJhdGlvbkluTXMiLCJtZXRhIiwicmVxdWVzdFN0YXJ0ZWRBdCIsImxvZ2dlciIsIndhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMiLCJ3YXJuTG9nZ2VyIiwiZHVyYXRpb25TdHJpbmciLCJzaG93RHVyYXRpb24iLCJOdW1iZXIiLCJ0b0ZpeGVkIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJMT0dfVFlQRSIsIlJFU1BPTlNFIiwibWFrZURhdGVGb3JtYXQiLCJtYWtlTWV0aG9kIiwibWFrZVN0YXR1cyIsIm1ha2VIZWFkZXIiLCJtYWtlRGF0YSIsImJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxTQUFTQSxjQUFULENBQXdCQyxRQUF4QixFQUFpREMsTUFBakQsRUFBNkU7QUFBQTs7QUFDekUsUUFBTTtBQUFDQSxJQUFBQSxNQUFNLEVBQUU7QUFBQ0MsTUFBQUEsR0FBRDtBQUFNQyxNQUFBQTtBQUFOLEtBQVQ7QUFBd0JDLElBQUFBLE1BQXhCO0FBQWdDQyxJQUFBQSxVQUFoQztBQUE0Q0MsSUFBQUEsSUFBNUM7QUFBa0RDLElBQUFBO0FBQWxELE1BQTZEUCxRQUFuRTtBQUNBLFFBQU1RLFdBQVcsR0FBRyxpQ0FBb0JQLE1BQXBCLENBQXBCOztBQUNBLE1BQUksQ0FBQ08sV0FBVyxDQUFDQyxvQkFBakIsRUFBdUM7QUFDbkMsV0FBT1QsUUFBUDtBQUNIOztBQUNELFFBQU1VLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7QUFDQSxRQUFNQyxVQUFVLEdBQUdiLFFBQVEsQ0FBQ0MsTUFBNUI7QUFDQSxRQUFNYSxtQkFBbUIsR0FBR0osV0FBVyxpREFBSUcsVUFBVSxDQUFDRSxJQUFmLHFEQUFJLGlCQUFpQkMsZ0JBQXJCLHlFQUF5Q04sV0FBekMsQ0FBdkM7QUFDQSxNQUFJTyxNQUFNLEdBQUdULFdBQVcsQ0FBQ1MsTUFBekI7QUFFQSxRQUFNO0FBQUVDLElBQUFBLDRCQUFGO0FBQWdDQyxJQUFBQTtBQUFoQyxNQUErQ1gsV0FBckQ7QUFDQSxNQUFJWSxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsTUFBSVosV0FBVyxDQUFDYSxZQUFoQixFQUE4QjtBQUMxQixRQUFJYixXQUFXLENBQUNVLDRCQUFaLEdBQTJDLENBQTNDLElBQWdESixtQkFBbUIsR0FBR04sV0FBVyxDQUFDVSw0QkFBdEYsRUFBb0g7QUFDaEhDLE1BQUFBLFVBQVUsQ0FBQywrQkFBK0JELDRCQUEvQixHQUE4RCxLQUEvRCxDQUFWO0FBQ0FELE1BQUFBLE1BQU0sR0FBR0UsVUFBVDtBQUNIOztBQUNEQyxJQUFBQSxjQUFjLEdBQUksSUFBR0UsTUFBTSxDQUFDUixtQkFBbUIsR0FBRyxJQUF2QixDQUFOLENBQW1DUyxPQUFuQyxDQUEyQyxDQUEzQyxDQUE4QyxHQUFuRTtBQUNIOztBQUVELFFBQU1DLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQmpCLFdBQWxCLENBQXRCO0FBQ0EsUUFBTWtCLEdBQUcsR0FBR0YsYUFBYSxDQUNwQkcscUJBRE8sQ0FDZUMsZ0JBQVNDLFFBRHhCLEVBQ2tDM0IsR0FEbEMsRUFDdUNrQixjQUR2QyxFQUVQVSxjQUZPLENBRVEsSUFBSW5CLElBQUosRUFGUixFQUdQb0IsVUFITyxDQUdJNUIsTUFISixFQUlQNkIsVUFKTyxDQUlJNUIsTUFKSixFQUlZQyxVQUpaLEVBS1A0QixVQUxPLENBS0kxQixPQUxKLEVBTVAyQixRQU5PLENBTUU1QixJQU5GLEVBT1A2QixLQVBPLEVBQVo7QUFTQWxCLEVBQUFBLE1BQU0sQ0FBQ1MsR0FBRCxDQUFOO0FBRUEsU0FBTzFCLFFBQVA7QUFDSDs7ZUFFY0QsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBMT0dfVFlQRSwgUmVzcG9uc2VMb2dDb25maWcgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgYXNzZW1ibGVCdWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFN0cmluZ0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL3N0cmluZy1idWlsZGVyJztcblxuXG5mdW5jdGlvbiByZXNwb25zZUxvZ2dlcihyZXNwb25zZTogQXhpb3NSZXNwb25zZSwgY29uZmlnPzogUmVzcG9uc2VMb2dDb25maWcpIHtcbiAgICBjb25zdCB7Y29uZmlnOiB7dXJsLCBtZXRob2R9LCBzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGhlYWRlcnN9ID0gcmVzcG9uc2U7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKCFidWlsZENvbmZpZy5pc1Jlc3BvbnNlTG9nRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgcmVzcENvbmZpZyA9IHJlc3BvbnNlLmNvbmZpZyBhcyBhbnk7XG4gICAgY29uc3QgcmVxdWVzdER1cmF0aW9uSW5NcyA9IGN1cnJlbnRUaW1lIC0gKHJlc3BDb25maWcubWV0YT8ucmVxdWVzdFN0YXJ0ZWRBdCA/PyBjdXJyZW50VGltZSk7XG4gICAgbGV0IGxvZ2dlciA9IGJ1aWxkQ29uZmlnLmxvZ2dlcjtcblxuICAgIGNvbnN0IHsgd2FybklmRHVyYXRpb25Jc0xvbmdlclRoYW5Ncywgd2FybkxvZ2dlciB9ID0gYnVpbGRDb25maWc7XG4gICAgbGV0IGR1cmF0aW9uU3RyaW5nID0gXCJcIjtcbiAgICBpZiAoYnVpbGRDb25maWcuc2hvd0R1cmF0aW9uKSB7XG4gICAgICAgIGlmIChidWlsZENvbmZpZy53YXJuSWZEdXJhdGlvbklzTG9uZ2VyVGhhbk1zID4gMCAmJiByZXF1ZXN0RHVyYXRpb25Jbk1zID4gYnVpbGRDb25maWcud2FybklmRHVyYXRpb25Jc0xvbmdlclRoYW5Ncykge1xuICAgICAgICAgICAgd2FybkxvZ2dlcignUmVxdWVzdCBkdXJhdGlvbiB3YXMgb3ZlciAnICsgd2FybklmRHVyYXRpb25Jc0xvbmdlclRoYW5NcyArICdtcyAnKTtcbiAgICAgICAgICAgIGxvZ2dlciA9IHdhcm5Mb2dnZXI7XG4gICAgICAgIH1cbiAgICAgICAgZHVyYXRpb25TdHJpbmcgPSBgICR7TnVtYmVyKHJlcXVlc3REdXJhdGlvbkluTXMgLyAxMDAwKS50b0ZpeGVkKDIpfXNgO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KExPR19UWVBFLlJFU1BPTlNFLCB1cmwsIGR1cmF0aW9uU3RyaW5nKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIGxvZ2dlcihsb2cpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNwb25zZUxvZ2dlcjtcbiJdfQ==
