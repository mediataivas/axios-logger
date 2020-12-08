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
    var _respConfig$meta$requ, _respConfig$meta, _respConfig$meta2, _respConfig$meta3;

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
        .makeLogTypeWithPrefix(
            _types.LOG_TYPE.RESPONSE,
            url,
            durationString,
            (_respConfig$meta2 = respConfig.meta) === null || _respConfig$meta2 === void 0
                ? void 0
                : _respConfig$meta2.chalk,
            (_respConfig$meta3 = respConfig.meta) === null || _respConfig$meta3 === void 0
                ? void 0
                : _respConfig$meta3.chalkBg
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwiaXNSZXNwb25zZUxvZ0VuYWJsZWQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwicmVzcENvbmZpZyIsInJlcXVlc3REdXJhdGlvbkluTXMiLCJtZXRhIiwicmVxdWVzdFN0YXJ0ZWRBdCIsImxvZ2dlciIsIndhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMiLCJ3YXJuTG9nZ2VyIiwiZHVyYXRpb25TdHJpbmciLCJzaG93RHVyYXRpb24iLCJOdW1iZXIiLCJ0b0ZpeGVkIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJMT0dfVFlQRSIsIlJFU1BPTlNFIiwiY2hhbGsiLCJjaGFsa0JnIiwibWFrZURhdGVGb3JtYXQiLCJtYWtlTWV0aG9kIiwibWFrZVN0YXR1cyIsIm1ha2VIZWFkZXIiLCJtYWtlRGF0YSIsImJ1aWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxTQUFTQSxjQUFULENBQXdCQyxRQUF4QixFQUFpREMsTUFBakQsRUFBNkU7QUFBQTs7QUFDekUsUUFBTTtBQUFDQSxJQUFBQSxNQUFNLEVBQUU7QUFBQ0MsTUFBQUEsR0FBRDtBQUFNQyxNQUFBQTtBQUFOLEtBQVQ7QUFBd0JDLElBQUFBLE1BQXhCO0FBQWdDQyxJQUFBQSxVQUFoQztBQUE0Q0MsSUFBQUEsSUFBNUM7QUFBa0RDLElBQUFBO0FBQWxELE1BQTZEUCxRQUFuRTtBQUNBLFFBQU1RLFdBQVcsR0FBRyxpQ0FBb0JQLE1BQXBCLENBQXBCOztBQUNBLE1BQUksQ0FBQ08sV0FBVyxDQUFDQyxvQkFBakIsRUFBdUM7QUFDbkMsV0FBT1QsUUFBUDtBQUNIOztBQUNELFFBQU1VLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBcEI7QUFDQSxRQUFNQyxVQUFVLEdBQUdiLFFBQVEsQ0FBQ0MsTUFBNUI7QUFDQSxRQUFNYSxtQkFBbUIsR0FBR0osV0FBVyxpREFBSUcsVUFBVSxDQUFDRSxJQUFmLHFEQUFJLGlCQUFpQkMsZ0JBQXJCLHlFQUF5Q04sV0FBekMsQ0FBdkM7QUFDQSxNQUFJTyxNQUFNLEdBQUdULFdBQVcsQ0FBQ1MsTUFBekI7QUFFQSxRQUFNO0FBQUVDLElBQUFBLDRCQUFGO0FBQWdDQyxJQUFBQTtBQUFoQyxNQUErQ1gsV0FBckQ7QUFDQSxNQUFJWSxjQUFjLEdBQUcsRUFBckI7O0FBQ0EsTUFBSVosV0FBVyxDQUFDYSxZQUFoQixFQUE4QjtBQUMxQixRQUFJYixXQUFXLENBQUNVLDRCQUFaLEdBQTJDLENBQTNDLElBQWdESixtQkFBbUIsR0FBR04sV0FBVyxDQUFDVSw0QkFBdEYsRUFBb0g7QUFDaEhDLE1BQUFBLFVBQVUsQ0FBQywrQkFBK0JELDRCQUEvQixHQUE4RCxLQUEvRCxDQUFWO0FBQ0FELE1BQUFBLE1BQU0sR0FBR0UsVUFBVDtBQUNIOztBQUNEQyxJQUFBQSxjQUFjLEdBQUksSUFBR0UsTUFBTSxDQUFDUixtQkFBbUIsR0FBRyxJQUF2QixDQUFOLENBQW1DUyxPQUFuQyxDQUEyQyxDQUEzQyxDQUE4QyxHQUFuRTtBQUNIOztBQUVELFFBQU1DLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQmpCLFdBQWxCLENBQXRCO0FBQ0EsUUFBTWtCLEdBQUcsR0FBR0YsYUFBYSxDQUNwQkcscUJBRE8sQ0FDZUMsZ0JBQVNDLFFBRHhCLEVBQ2tDM0IsR0FEbEMsRUFDdUNrQixjQUR2Qyx1QkFDdURQLFVBQVUsQ0FBQ0UsSUFEbEUsc0RBQ3VELGtCQUFpQmUsS0FEeEUsdUJBQytFakIsVUFBVSxDQUFDRSxJQUQxRixzREFDK0Usa0JBQWlCZ0IsT0FEaEcsRUFFUEMsY0FGTyxDQUVRLElBQUlyQixJQUFKLEVBRlIsRUFHUHNCLFVBSE8sQ0FHSTlCLE1BSEosRUFJUCtCLFVBSk8sQ0FJSTlCLE1BSkosRUFJWUMsVUFKWixFQUtQOEIsVUFMTyxDQUtJNUIsT0FMSixFQU1QNkIsUUFOTyxDQU1FOUIsSUFORixFQU9QK0IsS0FQTyxFQUFaO0FBU0FwQixFQUFBQSxNQUFNLENBQUNTLEdBQUQsQ0FBTjtBQUVBLFNBQU8xQixRQUFQO0FBQ0g7O2VBRWNELGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTE9HX1RZUEUsIFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cblxuZnVuY3Rpb24gcmVzcG9uc2VMb2dnZXIocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UsIGNvbmZpZz86IFJlc3BvbnNlTG9nQ29uZmlnKSB7XG4gICAgY29uc3Qge2NvbmZpZzoge3VybCwgbWV0aG9kfSwgc3RhdHVzLCBzdGF0dXNUZXh0LCBkYXRhLCBoZWFkZXJzfSA9IHJlc3BvbnNlO1xuICAgIGNvbnN0IGJ1aWxkQ29uZmlnID0gYXNzZW1ibGVCdWlsZENvbmZpZyhjb25maWcpO1xuICAgIGlmICghYnVpbGRDb25maWcuaXNSZXNwb25zZUxvZ0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHJlc3BDb25maWcgPSByZXNwb25zZS5jb25maWcgYXMgYW55O1xuICAgIGNvbnN0IHJlcXVlc3REdXJhdGlvbkluTXMgPSBjdXJyZW50VGltZSAtIChyZXNwQ29uZmlnLm1ldGE/LnJlcXVlc3RTdGFydGVkQXQgPz8gY3VycmVudFRpbWUpO1xuICAgIGxldCBsb2dnZXIgPSBidWlsZENvbmZpZy5sb2dnZXI7XG5cbiAgICBjb25zdCB7IHdhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMsIHdhcm5Mb2dnZXIgfSA9IGJ1aWxkQ29uZmlnO1xuICAgIGxldCBkdXJhdGlvblN0cmluZyA9IFwiXCI7XG4gICAgaWYgKGJ1aWxkQ29uZmlnLnNob3dEdXJhdGlvbikge1xuICAgICAgICBpZiAoYnVpbGRDb25maWcud2FybklmRHVyYXRpb25Jc0xvbmdlclRoYW5NcyA+IDAgJiYgcmVxdWVzdER1cmF0aW9uSW5NcyA+IGJ1aWxkQ29uZmlnLndhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMpIHtcbiAgICAgICAgICAgIHdhcm5Mb2dnZXIoJ1JlcXVlc3QgZHVyYXRpb24gd2FzIG92ZXIgJyArIHdhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMgKyAnbXMgJyk7XG4gICAgICAgICAgICBsb2dnZXIgPSB3YXJuTG9nZ2VyO1xuICAgICAgICB9XG4gICAgICAgIGR1cmF0aW9uU3RyaW5nID0gYCAke051bWJlcihyZXF1ZXN0RHVyYXRpb25Jbk1zIC8gMTAwMCkudG9GaXhlZCgyKX1zYDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdCdWlsZGVyID0gbmV3IFN0cmluZ0J1aWxkZXIoYnVpbGRDb25maWcpO1xuICAgIGNvbnN0IGxvZyA9IHN0cmluZ0J1aWxkZXJcbiAgICAgICAgLm1ha2VMb2dUeXBlV2l0aFByZWZpeChMT0dfVFlQRS5SRVNQT05TRSwgdXJsLCBkdXJhdGlvblN0cmluZywgcmVzcENvbmZpZy5tZXRhPy5jaGFsaywgcmVzcENvbmZpZy5tZXRhPy5jaGFsa0JnKVxuICAgICAgICAubWFrZURhdGVGb3JtYXQobmV3IERhdGUoKSlcbiAgICAgICAgLm1ha2VNZXRob2QobWV0aG9kKVxuICAgICAgICAubWFrZVN0YXR1cyhzdGF0dXMsIHN0YXR1c1RleHQpXG4gICAgICAgIC5tYWtlSGVhZGVyKGhlYWRlcnMpXG4gICAgICAgIC5tYWtlRGF0YShkYXRhKVxuICAgICAgICAuYnVpbGQoKTtcblxuICAgIGxvZ2dlcihsb2cpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZXNwb25zZUxvZ2dlcjtcbiJdfQ==
