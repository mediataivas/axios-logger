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

function requestLogger(request, config) {
    var _buildConfig$logger;

    const { url, method, data, headers } = request;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix('Request')
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeUrl(url)
        .makeHeader(headers)
        .makeData(data)
        .build();
    const logger =
        (_buildConfig$logger = buildConfig.logger) !== null && _buildConfig$logger !== void 0
            ? _buildConfig$logger
            : (0, _config.getGlobalConfig)().logger;
    logger(log);
    return request;
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJzdHJpbmdCdWlsZGVyIiwiU3RyaW5nQnVpbGRlciIsImxvZyIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsIm1ha2VEYXRlRm9ybWF0IiwiRGF0ZSIsIm1ha2VNZXRob2QiLCJtYWtlVXJsIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiLCJsb2dnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFDQTs7OztBQUVBLFNBQVNBLGFBQVQsQ0FBdUJDLE9BQXZCLEVBQW9EQyxNQUFwRCxFQUErRTtBQUFBOztBQUUzRSxRQUFNO0FBQUNDLElBQUFBLEdBQUQ7QUFBTUMsSUFBQUEsTUFBTjtBQUFjQyxJQUFBQSxJQUFkO0FBQW9CQyxJQUFBQTtBQUFwQixNQUErQkwsT0FBckM7QUFDQSxRQUFNTSxXQUFXLEdBQUcsaUNBQW9CTCxNQUFwQixDQUFwQjtBQUVBLFFBQU1NLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQkYsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNRyxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2UsU0FEZixFQUVQQyxjQUZPLENBRVEsSUFBSUMsSUFBSixFQUZSLEVBR1BDLFVBSE8sQ0FHSVYsTUFISixFQUlQVyxPQUpPLENBSUNaLEdBSkQsRUFLUGEsVUFMTyxDQUtJVixPQUxKLEVBTVBXLFFBTk8sQ0FNRVosSUFORixFQU9QYSxLQVBPLEVBQVo7QUFTQSxRQUFNQyxNQUFNLDBCQUFJWixXQUFXLENBQUNZLE1BQWhCLHFFQUEwQiwrQkFBa0JBLE1BQXhEO0FBQ0FBLEVBQUFBLE1BQU0sQ0FBQ1QsR0FBRCxDQUFOO0FBRUEsU0FBT1QsT0FBUDtBQUNIOztlQUVjRCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgUmVxdWVzdExvZ0NvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBhc3NlbWJsZUJ1aWxkQ29uZmlnLCBnZXRHbG9iYWxDb25maWcgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJztcbmltcG9ydCBTdHJpbmdCdWlsZGVyIGZyb20gJy4uL2NvbW1vbi9zdHJpbmctYnVpbGRlcic7XG5cbmZ1bmN0aW9uIHJlcXVlc3RMb2dnZXIocmVxdWVzdDogQXhpb3NSZXF1ZXN0Q29uZmlnLCBjb25maWc/OiBSZXF1ZXN0TG9nQ29uZmlnKSB7XG5cbiAgICBjb25zdCB7dXJsLCBtZXRob2QsIGRhdGEsIGhlYWRlcnN9ID0gcmVxdWVzdDtcbiAgICBjb25zdCBidWlsZENvbmZpZyA9IGFzc2VtYmxlQnVpbGRDb25maWcoY29uZmlnKTtcblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KCdSZXF1ZXN0JylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VVcmwodXJsKVxuICAgICAgICAubWFrZUhlYWRlcihoZWFkZXJzKVxuICAgICAgICAubWFrZURhdGEoZGF0YSlcbiAgICAgICAgLmJ1aWxkKCk7XG5cbiAgICBjb25zdCBsb2dnZXIgPSAoYnVpbGRDb25maWcubG9nZ2VyID8/IGdldEdsb2JhbENvbmZpZygpLmxvZ2dlcik7XG4gICAgbG9nZ2VyKGxvZyk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdExvZ2dlcjtcbiJdfQ==
