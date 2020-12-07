'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.getGlobalConfig = getGlobalConfig;
exports.setGlobalConfig = setGlobalConfig;
exports.assembleBuildConfig = assembleBuildConfig;
exports.globalConfig = void 0;

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

let globalConfig = {
    method: true,
    url: true,
    data: true,
    status: true,
    logger: console.log,
    warnLogger: console.log,
    errorLogger: console.log,
    prefixText: 'Axios',
    dateFormat: false,
    headers: false,
    showDuration: true,
    isRequestLogEnabled: true,
    isResponseLogEnabled: true,
};
exports.globalConfig = globalConfig;

function getGlobalConfig() {
    return globalConfig;
}

function setGlobalConfig(config) {
    exports.globalConfig = globalConfig = _objectSpread(_objectSpread({}, globalConfig), config);
}

function assembleBuildConfig(config) {
    return _objectSpread(_objectSpread({}, globalConfig), config);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29uZmlnLnRzIl0sIm5hbWVzIjpbImdsb2JhbENvbmZpZyIsIm1ldGhvZCIsInVybCIsImRhdGEiLCJzdGF0dXMiLCJsb2dnZXIiLCJjb25zb2xlIiwibG9nIiwid2FybkxvZ2dlciIsImVycm9yTG9nZ2VyIiwicHJlZml4VGV4dCIsImRhdGVGb3JtYXQiLCJoZWFkZXJzIiwic2hvd0R1cmF0aW9uIiwiaXNSZXF1ZXN0TG9nRW5hYmxlZCIsImlzUmVzcG9uc2VMb2dFbmFibGVkIiwiZ2V0R2xvYmFsQ29uZmlnIiwic2V0R2xvYmFsQ29uZmlnIiwiY29uZmlnIiwiYXNzZW1ibGVCdWlsZENvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLElBQUlBLFlBQTZCLEdBQUc7QUFDdkNDLEVBQUFBLE1BQU0sRUFBRSxJQUQrQjtBQUV2Q0MsRUFBQUEsR0FBRyxFQUFFLElBRmtDO0FBR3ZDQyxFQUFBQSxJQUFJLEVBQUUsSUFIaUM7QUFJdkNDLEVBQUFBLE1BQU0sRUFBRSxJQUorQjtBQUt2Q0MsRUFBQUEsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBTHVCO0FBTXZDQyxFQUFBQSxVQUFVLEVBQUVGLE9BQU8sQ0FBQ0MsR0FObUI7QUFPdkNFLEVBQUFBLFdBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQVBrQjtBQVF2Q0csRUFBQUEsVUFBVSxFQUFFLE9BUjJCO0FBU3ZDQyxFQUFBQSxVQUFVLEVBQUUsS0FUMkI7QUFVdkNDLEVBQUFBLE9BQU8sRUFBRSxLQVY4QjtBQVd2Q0MsRUFBQUEsWUFBWSxFQUFFLElBWHlCO0FBWXZDQyxFQUFBQSxtQkFBbUIsRUFBRSxJQVprQjtBQWF2Q0MsRUFBQUEsb0JBQW9CLEVBQUU7QUFiaUIsQ0FBcEM7OztBQWdCUCxTQUFTQyxlQUFULEdBQTJCO0FBQ3ZCLFNBQU9oQixZQUFQO0FBQ0g7O0FBRUQsU0FBU2lCLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWtEO0FBQzlDLHlCQUFBbEIsWUFBWSxtQ0FDTEEsWUFESyxHQUVMa0IsTUFGSyxDQUFaO0FBSUg7O0FBRUQsU0FBU0MsbUJBQVQsQ0FBNkJELE1BQTdCLEVBQWtHO0FBQzlGLHlDQUNPbEIsWUFEUCxHQUVPa0IsTUFGUDtBQUlIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JMb2dDb25maWcsIEdsb2JhbExvZ0NvbmZpZywgUmVxdWVzdExvZ0NvbmZpZywgUmVzcG9uc2VMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGxldCBnbG9iYWxDb25maWc6IEdsb2JhbExvZ0NvbmZpZyA9IHtcbiAgICBtZXRob2Q6IHRydWUsXG4gICAgdXJsOiB0cnVlLFxuICAgIGRhdGE6IHRydWUsXG4gICAgc3RhdHVzOiB0cnVlLFxuICAgIGxvZ2dlcjogY29uc29sZS5sb2csXG4gICAgd2FybkxvZ2dlcjogY29uc29sZS5sb2csXG4gICAgZXJyb3JMb2dnZXI6IGNvbnNvbGUubG9nLFxuICAgIHByZWZpeFRleHQ6ICdBeGlvcycsXG4gICAgZGF0ZUZvcm1hdDogZmFsc2UsXG4gICAgaGVhZGVyczogZmFsc2UsXG4gICAgc2hvd0R1cmF0aW9uOiB0cnVlLFxuICAgIGlzUmVxdWVzdExvZ0VuYWJsZWQ6IHRydWUsXG4gICAgaXNSZXNwb25zZUxvZ0VuYWJsZWQ6IHRydWUsXG59O1xuXG5mdW5jdGlvbiBnZXRHbG9iYWxDb25maWcoKSB7XG4gICAgcmV0dXJuIGdsb2JhbENvbmZpZztcbn1cblxuZnVuY3Rpb24gc2V0R2xvYmFsQ29uZmlnKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XG4gICAgZ2xvYmFsQ29uZmlnID0ge1xuICAgICAgICAuLi5nbG9iYWxDb25maWcsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZz86IFJlcXVlc3RMb2dDb25maWcgfCBSZXNwb25zZUxvZ0NvbmZpZyB8IEVycm9yTG9nQ29uZmlnKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5nbG9iYWxDb25maWcsXG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xufVxuXG5leHBvcnQge1xuICAgIGdldEdsb2JhbENvbmZpZyxcbiAgICBzZXRHbG9iYWxDb25maWcsXG4gICAgYXNzZW1ibGVCdWlsZENvbmZpZyxcbn07XG4iXX0=
