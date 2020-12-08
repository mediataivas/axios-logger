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

    makeLogTypeWithPrefix(logType = _types.LOG_TYPE.REQUEST, url = '', requestDuration = '', color, colorBg) {
        const logStr = `${logType.toString()} ${url}${requestDuration}`;
        const coloredType = color
            ? _chalk.default.keyword(color).bgKeyword(colorBg)(logStr)
            : StringBuilder.chalkByType(logType, logStr);
        const prefix = this.config.prefixText === false ? `` : `[${this.config.prefixText || 'Axios'}]`;
        this.printQueue.push(_chalk.default.green(prefix) + `[${coloredType}]`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yQmciLCJsb2dTdHIiLCJ0b1N0cmluZyIsImNvbG9yZWRUeXBlIiwiY2hhbGsiLCJrZXl3b3JkIiwiYmdLZXl3b3JkIiwiY2hhbGtCeVR5cGUiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImdyZWVuIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIm1ha2VIZWFkZXIiLCJoZWFkZXJzIiwiaGVhZGVyTWFwIiwia2V5IiwiaW5jbHVkZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVVybCIsIm1ha2VNZXRob2QiLCJtZXRob2QiLCJ5ZWxsb3ciLCJ0b1VwcGVyQ2FzZSIsIm1ha2VEYXRhIiwiZGF0YSIsIm1ha2VTdGF0dXMiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYnVpbGQiLCJqb2luIiwic3RyIiwiUkVTUE9OU0UiLCJFUlJPUiIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQs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QUFDN0IsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFpQkMsVUFBakIsRUFBc0M7QUFDNUMsUUFBR0QsTUFBTSxJQUFJQyxVQUFiLEVBQXlCLEtBQUt4QyxVQUFMLENBQWdCbUIsSUFBaEIsQ0FBc0IsR0FBRW9CLE1BQU8sSUFBR0MsVUFBVyxFQUE3QztBQUN6QixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsS0FBSyxHQUFHO0FBQ0osV0FBTyxLQUFLekMsVUFBTCxDQUFnQjBDLElBQWhCLENBQXFCLEdBQXJCLENBQVA7QUFDSDs7QUFFRCxTQUFlMUIsV0FBZixDQUEyQmIsT0FBM0IsRUFBOEN3QyxHQUE5QyxFQUFtRTtBQUMvRCxZQUFReEMsT0FBUjtBQUNJLFdBQUtDLGdCQUFTQyxPQUFkO0FBQ0ksZUFBT1EsZUFBTU8sS0FBTixDQUFZdUIsR0FBWixDQUFQOztBQUNKLFdBQUt2QyxnQkFBU3dDLFFBQWQ7QUFDSSxlQUFPL0IsZUFBTXFCLE1BQU4sQ0FBYVMsR0FBYixDQUFQOztBQUNKLFdBQUt2QyxnQkFBU3lDLEtBQWQ7QUFDSSxlQUFPaEMsZUFBTWlDLEdBQU4sQ0FBVUgsR0FBVixDQUFQO0FBTlI7O0FBU0EsV0FBT0EsR0FBUDtBQUNIOztBQWhGZTs7ZUFxRkw5QyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jbGFzcyBTdHJpbmdCdWlsZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnO1xuICAgIHByaXZhdGUgcHJpbnRRdWV1ZTogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIGZpbHRlcmVkSGVhZGVyTGlzdDogQXJyYXk8U3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnByaW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QgPSBbJ2NvbW1vbicsICdkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ3ZhcnknLCAnZGF0ZScsICdjb25uZWN0aW9uJywgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5J107XG4gICAgfVxuXG4gICAgbWFrZUxvZ1R5cGVXaXRoUHJlZml4KGxvZ1R5cGU6IExPR19UWVBFID0gTE9HX1RZUEUuUkVRVUVTVCwgdXJsOiBzdHJpbmcgPSBcIlwiLCByZXF1ZXN0RHVyYXRpb246IHN0cmluZyA9IFwiXCIsIGNvbG9yPzogYW55LCBjb2xvckJnPzogYW55KSB7XG5cbiAgICAgICAgY29uc3QgbG9nU3RyID0gYCR7bG9nVHlwZS50b1N0cmluZygpfSAke3VybH0ke3JlcXVlc3REdXJhdGlvbn1gO1xuICAgICAgICBjb25zdCBjb2xvcmVkVHlwZSA9IGNvbG9yID8gY2hhbGsua2V5d29yZChjb2xvcikuYmdLZXl3b3JkKGNvbG9yQmcpKGxvZ1N0cikgOiBTdHJpbmdCdWlsZGVyLmNoYWxrQnlUeXBlKGxvZ1R5cGUsIGxvZ1N0cik7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYGAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1gO1xuXG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLmdyZWVuKHByZWZpeCkgKyBgWyR7Y29sb3JlZFR5cGV9XWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hhbGtCeVR5cGUobG9nVHlwZTogTE9HX1RZUEUsIHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChsb2dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFUVVFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLmdyZWVuKHN0cik7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFU1BPTlNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFsay55ZWxsb3coc3RyKTtcbiAgICAgICAgICAgIGNhc2UgTE9HX1RZUEUuRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnJlZChzdHIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xuIl19
