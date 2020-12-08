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

    makeLogTypeWithPrefix(logType = _types.LOG_TYPE.REQUEST, url = '', requestDuration = '', randomChalk) {
        const coloredType = randomChalk
            ? randomChalk(logType.toString())
            : StringBuilder.chalkByType(logType, logType.toString());
        const str = `${coloredType}${requestDuration}${url}`;
        const prefix = this.config.prefixText === false ? `[${str}]` : `[${this.config.prefixText || 'Axios'}][${str}]`;
        this.printQueue.push(prefix);
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
                return _chalk.default.green(str);

            case _types.LOG_TYPE.RESPONSE:
                return _chalk.default.yellow(str);

            case _types.LOG_TYPE.ERROR:
                return _chalk.default.red(str);
        }

        return str;
    }
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJyYW5kb21DaGFsayIsImNvbG9yZWRUeXBlIiwidG9TdHJpbmciLCJjaGFsa0J5VHlwZSIsInN0ciIsInByZWZpeCIsInByZWZpeFRleHQiLCJwdXNoIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIm1ha2VIZWFkZXIiLCJoZWFkZXJzIiwiaGVhZGVyTWFwIiwia2V5IiwiaW5jbHVkZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVVybCIsIm1ha2VNZXRob2QiLCJtZXRob2QiLCJjaGFsayIsInllbGxvdyIsInRvVXBwZXJDYXNlIiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iLCJncmVlbiIsIlJFU1BPTlNFIiwiRVJST1IiLCJyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFz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QyxVQUFMLENBQWdCZSxJQUFoQixDQUFzQixHQUFFb0IsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUtyQyxVQUFMLENBQWdCc0MsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQUVELFNBQWUzQixXQUFmLENBQTJCUixPQUEzQixFQUE4Q1MsR0FBOUMsRUFBbUU7QUFDL0QsWUFBUVQsT0FBUjtBQUNJLFdBQUtDLGdCQUFTQyxPQUFkO0FBQ0ksZUFBT3dCLGVBQU1VLEtBQU4sQ0FBWTNCLEdBQVosQ0FBUDs7QUFDSixXQUFLUixnQkFBU29DLFFBQWQ7QUFDSSxlQUFPWCxlQUFNQyxNQUFOLENBQWFsQixHQUFiLENBQVA7O0FBQ0osV0FBS1IsZ0JBQVNxQyxLQUFkO0FBQ0ksZUFBT1osZUFBTWEsR0FBTixDQUFVOUIsR0FBVixDQUFQO0FBTlI7O0FBU0EsV0FBT0EsR0FBUDtBQUNIOztBQWhGZTs7ZUFxRkxmLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZywgTE9HX1RZUEUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcbiAgICB9XG5cbiAgICBtYWtlTG9nVHlwZVdpdGhQcmVmaXgobG9nVHlwZTogTE9HX1RZUEUgPSBMT0dfVFlQRS5SRVFVRVNULCB1cmw6IHN0cmluZyA9IFwiXCIsIHJlcXVlc3REdXJhdGlvbjogc3RyaW5nID0gXCJcIiwgcmFuZG9tQ2hhbGs/OiBhbnkpIHtcblxuICAgICAgICBjb25zdCBjb2xvcmVkVHlwZSA9IHJhbmRvbUNoYWxrID8gcmFuZG9tQ2hhbGsobG9nVHlwZS50b1N0cmluZygpKSA6IFN0cmluZ0J1aWxkZXIuY2hhbGtCeVR5cGUobG9nVHlwZSwgbG9nVHlwZS50b1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCBzdHIgPWAke2NvbG9yZWRUeXBlfSR7cmVxdWVzdER1cmF0aW9ufSR7dXJsfWBcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7c3RyfV1gIDogYFske3RoaXMuY29uZmlnLnByZWZpeFRleHQgfHwgJ0F4aW9zJ31dWyR7c3RyfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChwcmVmaXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hhbGtCeVR5cGUobG9nVHlwZTogTE9HX1RZUEUsIHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChsb2dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFUVVFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLmdyZWVuKHN0cik7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFU1BPTlNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFsay55ZWxsb3coc3RyKTtcbiAgICAgICAgICAgIGNhc2UgTE9HX1RZUEUuRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnJlZChzdHIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xuIl19
