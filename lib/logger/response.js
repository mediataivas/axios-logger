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
        .makeLogTypeWithPrefix(url, 'Response', durationString)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVzcG9uc2UudHMiXSwibmFtZXMiOlsicmVzcG9uc2VMb2dnZXIiLCJyZXNwb25zZSIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJkYXRhIiwiaGVhZGVycyIsImJ1aWxkQ29uZmlnIiwiaXNSZXNwb25zZUxvZ0VuYWJsZWQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwicmVzcENvbmZpZyIsInJlcXVlc3REdXJhdGlvbkluTXMiLCJtZXRhIiwicmVxdWVzdFN0YXJ0ZWRBdCIsImxvZ2dlciIsIndhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMiLCJ3YXJuTG9nZ2VyIiwiZHVyYXRpb25TdHJpbmciLCJzaG93RHVyYXRpb24iLCJOdW1iZXIiLCJ0b0ZpeGVkIiwic3RyaW5nQnVpbGRlciIsIlN0cmluZ0J1aWxkZXIiLCJsb2ciLCJtYWtlTG9nVHlwZVdpdGhQcmVmaXgiLCJtYWtlRGF0ZUZvcm1hdCIsIm1ha2VNZXRob2QiLCJtYWtlU3RhdHVzIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWlEQyxNQUFqRCxFQUE2RTtBQUFBOztBQUN6RSxRQUFNO0FBQUNBLElBQUFBLE1BQU0sRUFBRTtBQUFDQyxNQUFBQSxHQUFEO0FBQU1DLE1BQUFBO0FBQU4sS0FBVDtBQUF3QkMsSUFBQUEsTUFBeEI7QUFBZ0NDLElBQUFBLFVBQWhDO0FBQTRDQyxJQUFBQSxJQUE1QztBQUFrREMsSUFBQUE7QUFBbEQsTUFBNkRQLFFBQW5FO0FBQ0EsUUFBTVEsV0FBVyxHQUFHLGlDQUFvQlAsTUFBcEIsQ0FBcEI7O0FBQ0EsTUFBSSxDQUFDTyxXQUFXLENBQUNDLG9CQUFqQixFQUF1QztBQUNuQyxXQUFPVCxRQUFQO0FBQ0g7O0FBQ0QsUUFBTVUsV0FBVyxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFwQjtBQUNBLFFBQU1DLFVBQVUsR0FBR2IsUUFBUSxDQUFDQyxNQUE1QjtBQUNBLFFBQU1hLG1CQUFtQixHQUFHSixXQUFXLGlEQUFJRyxVQUFVLENBQUNFLElBQWYscURBQUksaUJBQWlCQyxnQkFBckIseUVBQXlDTixXQUF6QyxDQUF2QztBQUNBLE1BQUlPLE1BQU0sR0FBR1QsV0FBVyxDQUFDUyxNQUF6QjtBQUVBLFFBQU07QUFBRUMsSUFBQUEsNEJBQUY7QUFBZ0NDLElBQUFBO0FBQWhDLE1BQStDWCxXQUFyRDtBQUNBLE1BQUlZLGNBQWMsR0FBRyxFQUFyQjs7QUFDQSxNQUFJWixXQUFXLENBQUNhLFlBQWhCLEVBQThCO0FBQzFCLFFBQUliLFdBQVcsQ0FBQ1UsNEJBQVosR0FBMkMsQ0FBM0MsSUFBZ0RKLG1CQUFtQixHQUFHTixXQUFXLENBQUNVLDRCQUF0RixFQUFvSDtBQUNoSEMsTUFBQUEsVUFBVSxDQUFDLCtCQUErQkQsNEJBQS9CLEdBQThELEtBQS9ELENBQVY7QUFDQUQsTUFBQUEsTUFBTSxHQUFHRSxVQUFUO0FBQ0g7O0FBQ0RDLElBQUFBLGNBQWMsR0FBSSxJQUFHRSxNQUFNLENBQUNSLG1CQUFtQixHQUFHLElBQXZCLENBQU4sQ0FBbUNTLE9BQW5DLENBQTJDLENBQTNDLENBQThDLEdBQW5FO0FBQ0g7O0FBRUQsUUFBTUMsYUFBYSxHQUFHLElBQUlDLHNCQUFKLENBQWtCakIsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNa0IsR0FBRyxHQUFHRixhQUFhLENBQ3BCRyxxQkFETyxDQUNlekIsR0FEZixFQUNvQixVQURwQixFQUNnQ2tCLGNBRGhDLEVBRVBRLGNBRk8sQ0FFUSxJQUFJakIsSUFBSixFQUZSLEVBR1BrQixVQUhPLENBR0kxQixNQUhKLEVBSVAyQixVQUpPLENBSUkxQixNQUpKLEVBSVlDLFVBSlosRUFLUDBCLFVBTE8sQ0FLSXhCLE9BTEosRUFNUHlCLFFBTk8sQ0FNRTFCLElBTkYsRUFPUDJCLEtBUE8sRUFBWjtBQVNBaEIsRUFBQUEsTUFBTSxDQUFDUyxHQUFELENBQU47QUFFQSxTQUFPMUIsUUFBUDtBQUNIOztlQUVjRCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IFJlc3BvbnNlTG9nQ29uZmlnIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7IGFzc2VtYmxlQnVpbGRDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIHJlc3BvbnNlTG9nZ2VyKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlLCBjb25maWc/OiBSZXNwb25zZUxvZ0NvbmZpZykge1xuICAgIGNvbnN0IHtjb25maWc6IHt1cmwsIG1ldGhvZH0sIHN0YXR1cywgc3RhdHVzVGV4dCwgZGF0YSwgaGVhZGVyc30gPSByZXNwb25zZTtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcbiAgICBpZiAoIWJ1aWxkQ29uZmlnLmlzUmVzcG9uc2VMb2dFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCByZXNwQ29uZmlnID0gcmVzcG9uc2UuY29uZmlnIGFzIGFueTtcbiAgICBjb25zdCByZXF1ZXN0RHVyYXRpb25Jbk1zID0gY3VycmVudFRpbWUgLSAocmVzcENvbmZpZy5tZXRhPy5yZXF1ZXN0U3RhcnRlZEF0ID8/IGN1cnJlbnRUaW1lKTtcbiAgICBsZXQgbG9nZ2VyID0gYnVpbGRDb25maWcubG9nZ2VyO1xuXG4gICAgY29uc3QgeyB3YXJuSWZEdXJhdGlvbklzTG9uZ2VyVGhhbk1zLCB3YXJuTG9nZ2VyIH0gPSBidWlsZENvbmZpZztcbiAgICBsZXQgZHVyYXRpb25TdHJpbmcgPSBcIlwiO1xuICAgIGlmIChidWlsZENvbmZpZy5zaG93RHVyYXRpb24pIHtcbiAgICAgICAgaWYgKGJ1aWxkQ29uZmlnLndhcm5JZkR1cmF0aW9uSXNMb25nZXJUaGFuTXMgPiAwICYmIHJlcXVlc3REdXJhdGlvbkluTXMgPiBidWlsZENvbmZpZy53YXJuSWZEdXJhdGlvbklzTG9uZ2VyVGhhbk1zKSB7XG4gICAgICAgICAgICB3YXJuTG9nZ2VyKCdSZXF1ZXN0IGR1cmF0aW9uIHdhcyBvdmVyICcgKyB3YXJuSWZEdXJhdGlvbklzTG9uZ2VyVGhhbk1zICsgJ21zICcpO1xuICAgICAgICAgICAgbG9nZ2VyID0gd2FybkxvZ2dlcjtcbiAgICAgICAgfVxuICAgICAgICBkdXJhdGlvblN0cmluZyA9IGAgJHtOdW1iZXIocmVxdWVzdER1cmF0aW9uSW5NcyAvIDEwMDApLnRvRml4ZWQoMil9c2A7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nQnVpbGRlciA9IG5ldyBTdHJpbmdCdWlsZGVyKGJ1aWxkQ29uZmlnKTtcbiAgICBjb25zdCBsb2cgPSBzdHJpbmdCdWlsZGVyXG4gICAgICAgIC5tYWtlTG9nVHlwZVdpdGhQcmVmaXgodXJsLCAnUmVzcG9uc2UnLCBkdXJhdGlvblN0cmluZylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VTdGF0dXMoc3RhdHVzLCBzdGF0dXNUZXh0KVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBsb2dnZXIobG9nKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVzcG9uc2VMb2dnZXI7XG4iXX0=
