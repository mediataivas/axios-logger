'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _dateformat = _interopRequireDefault(require('dateformat'));

var _types = require('./types');

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

class StringBuilder {
    constructor(config) {
        _defineProperty(this, 'config', void 0);

        _defineProperty(this, 'printQueue', void 0);

        _defineProperty(this, 'filteredHeaderList', void 0);

        this.config = config;
        this.printQueue = [];
        this.filteredHeaderList = [
            'common',
            'delete',
            'get',
            'head',
            'post',
            'put',
            'patch',
            'content-type',
            'content-length',
            'vary',
            'date',
            'connection',
            'content-security-policy',
        ];
    }

    makeLogTypeWithPrefix(logType = _types.LOG_TYPE.REQUEST, url = '', requestDuration = '') {
        let colorFunction = _types.LOG_TYPE.RESPONSE ? _chalk.default.green : _chalk.default.magenta;
        const str = `${StringBuilder.chalkByType(logType, logType)}${requestDuration}${url}`;
        const prefix = this.config.prefixText === false ? `[${str}]` : `[${this.config.prefixText || 'Axios'}][${str}]`;
        this.printQueue.push(colorFunction(prefix));
        return this;
    }

    makeDateFormat(date) {
        // allow for opting-out of adding the timestamp (as most loggers already add this)
        if (this.config.dateFormat !== false) {
            // @ts-ignore
            const dateFormat = (0, _dateformat.default)(date, this.config.dateFormat || 'isoDateTime');
            this.printQueue.push(dateFormat);
        }

        return this;
    }

    makeHeader(headers) {
        if (this.config.headers && headers) {
            const headerMap = {};

            for (let key in headers) {
                if (!this.filteredHeaderList.includes(key)) {
                    headerMap[key] = headers[key];
                }
            }

            this.printQueue.push(JSON.stringify(headerMap));
        }

        return this;
    }

    makeUrl(url) {
        if (this.config.url && url) this.printQueue.push(url);
        return this;
    }

    makeMethod(method) {
        if (this.config.method && method) this.printQueue.push(_chalk.default.yellow(method.toUpperCase()));
        return this;
    }

    makeData(data) {
        if (this.config.data && data) this.printQueue.push(JSON.stringify(data));
        return this;
    }

    makeStatus(status, statusText) {
        if (status && statusText) this.printQueue.push(`${status}:${statusText}`);
        return this;
    }

    build() {
        return this.printQueue.join(' ');
    }

    static chalkByType(logType, str) {
        switch (logType) {
            case _types.LOG_TYPE.REQUEST:
                _chalk.default.green(str);

                break;

            case _types.LOG_TYPE.RESPONSE:
                _chalk.default.yellow(str);

                break;

            case _types.LOG_TYPE.ERROR:
                _chalk.default.red(str);

                break;
        }
    }
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvckZ1bmN0aW9uIiwiUkVTUE9OU0UiLCJjaGFsayIsImdyZWVuIiwibWFnZW50YSIsInN0ciIsImNoYWxrQnlUeXBlIiwicHJlZml4IiwicHJlZml4VGV4dCIsInB1c2giLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwibWFrZU1ldGhvZCIsIm1ldGhvZCIsInllbGxvdyIsInRvVXBwZXJDYXNlIiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iLCJFUlJPUiIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsY0FBNUQsRUFBNEUsZ0JBQTVFLEVBQThGLE1BQTlGLEVBQXNHLE1BQXRHLEVBQThH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c0IsR0FBRW1CLE1BQU8sSUFBR0MsVUFBVyxFQUE3QztBQUN6QixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsS0FBSyxHQUFHO0FBQ0osV0FBTyxLQUFLdEMsVUFBTCxDQUFnQnVDLElBQWhCLENBQXFCLEdBQXJCLENBQVA7QUFDSDs7QUFFRCxTQUFlekIsV0FBZixDQUEyQlgsT0FBM0IsRUFBOENVLEdBQTlDLEVBQWlFO0FBQzdELFlBQVFWLE9BQVI7QUFDSSxXQUFLQyxnQkFBU0MsT0FBZDtBQUNJSyx1QkFBTUMsS0FBTixDQUFZRSxHQUFaOztBQUNBOztBQUNKLFdBQUtULGdCQUFTSyxRQUFkO0FBQ0lDLHVCQUFNcUIsTUFBTixDQUFhbEIsR0FBYjs7QUFDQTs7QUFDSixXQUFLVCxnQkFBU29DLEtBQWQ7QUFDSTlCLHVCQUFNK0IsR0FBTixDQUFVNUIsR0FBVjs7QUFDQTtBQVRSO0FBV0g7O0FBakZlOztlQW9GTGhCLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZywgTE9HX1RZUEUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcbiAgICB9XG5cbiAgICBtYWtlTG9nVHlwZVdpdGhQcmVmaXgobG9nVHlwZTogTE9HX1RZUEUgPSBMT0dfVFlQRS5SRVFVRVNULCB1cmw6IHN0cmluZyA9IFwiXCIsIHJlcXVlc3REdXJhdGlvbjogc3RyaW5nID0gXCJcIikge1xuXG4gICAgICAgIGxldCBjb2xvckZ1bmN0aW9uID0gTE9HX1RZUEUuUkVTUE9OU0UgPyBjaGFsay5ncmVlbiA6IGNoYWxrLm1hZ2VudGE7XG5cbiAgICAgICAgY29uc3Qgc3RyID1gJHtTdHJpbmdCdWlsZGVyLmNoYWxrQnlUeXBlKGxvZ1R5cGUsIGxvZ1R5cGUpfSR7cmVxdWVzdER1cmF0aW9ufSR7dXJsfWBcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7c3RyfV1gIDogYFske3RoaXMuY29uZmlnLnByZWZpeFRleHQgfHwgJ0F4aW9zJ31dWyR7c3RyfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjb2xvckZ1bmN0aW9uKHByZWZpeCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hhbGtCeVR5cGUobG9nVHlwZTogTE9HX1RZUEUsIHN0cjogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHN3aXRjaCAobG9nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBMT0dfVFlQRS5SRVFVRVNUOlxuICAgICAgICAgICAgICAgIGNoYWxrLmdyZWVuKHN0cik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFU1BPTlNFOlxuICAgICAgICAgICAgICAgIGNoYWxrLnllbGxvdyhzdHIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBMT0dfVFlQRS5FUlJPUjpcbiAgICAgICAgICAgICAgICBjaGFsay5yZWQoc3RyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nQnVpbGRlcjtcbiJdfQ==
