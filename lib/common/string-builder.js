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
        const coloredType = color
            ? _chalk.default.keyword(color).bgKeyword(colorBg)(logType.toString())
            : StringBuilder.chalkByType(logType, logType.toString());
        const str = `${coloredType}${url}${requestDuration}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yQmciLCJjb2xvcmVkVHlwZSIsImNoYWxrIiwia2V5d29yZCIsImJnS2V5d29yZCIsInRvU3RyaW5nIiwiY2hhbGtCeVR5cGUiLCJzdHIiLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsIm1ha2VEYXRlRm9ybWF0IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJtYWtlSGVhZGVyIiwiaGVhZGVycyIsImhlYWRlck1hcCIsImtleSIsImluY2x1ZGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJtYWtlU3RhdHVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImJ1aWxkIiwiam9pbiIsImdyZWVuIiwiUkVTUE9OU0UiLCJFUlJPUiIsInJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsY0FBNUQsRUFB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LElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxNQUFELEVBQWlCQyxVQUFqQixFQUFzQztBQUM1QyxRQUFHRCxNQUFNLElBQUlDLFVBQWIsRUFBeUIsS0FBS3ZDLFVBQUwsQ0FBZ0JtQixJQUFoQixDQUFzQixHQUFFbUIsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUt4QyxVQUFMLENBQWdCeUMsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQUVELFNBQWUxQixXQUFmLENBQTJCWixPQUEzQixFQUE4Q2EsR0FBOUMsRUFBbUU7QUFDL0QsWUFBUWIsT0FBUjtBQUNJLFdBQUtDLGdCQUFTQyxPQUFkO0FBQ0ksZUFBT00sZUFBTStCLEtBQU4sQ0FBWTFCLEdBQVosQ0FBUDs7QUFDSixXQUFLWixnQkFBU3VDLFFBQWQ7QUFDSSxlQUFPaEMsZUFBTXNCLE1BQU4sQ0FBYWpCLEdBQWIsQ0FBUDs7QUFDSixXQUFLWixnQkFBU3dDLEtBQWQ7QUFDSSxlQUFPakMsZUFBTWtDLEdBQU4sQ0FBVTdCLEdBQVYsQ0FBUDtBQU5SOztBQVNBLFdBQU9BLEdBQVA7QUFDSDs7QUFoRmU7O2VBcUZMbkIsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRlZm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnO1xuaW1wb3J0IHsgR2xvYmFsTG9nQ29uZmlnLCBMT0dfVFlQRSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY2xhc3MgU3RyaW5nQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbExvZ0NvbmZpZztcbiAgICBwcml2YXRlIHByaW50UXVldWU6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBmaWx0ZXJlZEhlYWRlckxpc3Q6IEFycmF5PFN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0ID0gWydjb21tb24nLCAnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbnRlbnQtdHlwZScsICdjb250ZW50LWxlbmd0aCcsICd2YXJ5JywgJ2RhdGUnLCAnY29ubmVjdGlvbicsICdjb250ZW50LXNlY3VyaXR5LXBvbGljeSddO1xuICAgIH1cblxuICAgIG1ha2VMb2dUeXBlV2l0aFByZWZpeChsb2dUeXBlOiBMT0dfVFlQRSA9IExPR19UWVBFLlJFUVVFU1QsIHVybDogc3RyaW5nID0gXCJcIiwgcmVxdWVzdER1cmF0aW9uOiBzdHJpbmcgPSBcIlwiLCBjb2xvcj86IGFueSwgY29sb3JCZz86IGFueSkge1xuXG4gICAgICAgIGNvbnN0IGNvbG9yZWRUeXBlID0gY29sb3IgPyBjaGFsay5rZXl3b3JkKGNvbG9yKS5iZ0tleXdvcmQoY29sb3JCZykobG9nVHlwZS50b1N0cmluZygpKSA6IFN0cmluZ0J1aWxkZXIuY2hhbGtCeVR5cGUobG9nVHlwZSwgbG9nVHlwZS50b1N0cmluZygpKTtcblxuICAgICAgICBjb25zdCBzdHIgPWAke2NvbG9yZWRUeXBlfSR7dXJsfSR7cmVxdWVzdER1cmF0aW9ufWBcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgWyR7c3RyfV1gIDogYFske3RoaXMuY29uZmlnLnByZWZpeFRleHQgfHwgJ0F4aW9zJ31dWyR7c3RyfV1gO1xuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChwcmVmaXgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2hhbGtCeVR5cGUobG9nVHlwZTogTE9HX1RZUEUsIHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgc3dpdGNoIChsb2dUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFUVVFU1Q6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLmdyZWVuKHN0cik7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLlJFU1BPTlNFOlxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFsay55ZWxsb3coc3RyKTtcbiAgICAgICAgICAgIGNhc2UgTE9HX1RZUEUuRVJST1I6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnJlZChzdHIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xuIl19
