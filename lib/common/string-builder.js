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
        const coloredType = color ? _chalk.default.keyword(color).bgKeyword(colorBg)(logStr) : logType;
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
    } // private static chalkByType(logType: LOG_TYPE, str: string): string {
    //     switch (logType) {
    //         case LOG_TYPE.REQUEST:
    //             return chalk.green(str);
    //         case LOG_TYPE.RESPONSE:
    //             return chalk.yellow(str);
    //         case LOG_TYPE.ERROR:
    //             return chalk.red(str);
    //
    //     }
    //     return str;
    // }
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yQmciLCJsb2dTdHIiLCJ0b1N0cmluZyIsImNvbG9yZWRUeXBlIiwiY2hhbGsiLCJrZXl3b3JkIiwiYmdLZXl3b3JkIiwicHJlZml4IiwicHJlZml4VGV4dCIsInB1c2giLCJncmVlbiIsIm1ha2VEYXRlRm9ybWF0IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJtYWtlSGVhZGVyIiwiaGVhZGVycyIsImhlYWRlck1hcCIsImtleSIsImluY2x1ZGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJtYWtlU3RhdHVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImJ1aWxkIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsY0FBNUQsRUFBNEUsZ0JBQTVFLEVBQThGLE1BQTlGLEVBQXNHLE1BQXRHLEVB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QUlDLFVBQWIsRUFBeUIsS0FBS3ZDLFVBQUwsQ0FBZ0JrQixJQUFoQixDQUFzQixHQUFFb0IsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUt4QyxVQUFMLENBQWdCeUMsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNILEdBbkVlLENBcUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWhGZ0I7O2VBcUZMNUMsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRlZm9ybWF0IGZyb20gJ2RhdGVmb3JtYXQnO1xuaW1wb3J0IHsgR2xvYmFsTG9nQ29uZmlnLCBMT0dfVFlQRSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IGNoYWxrIGZyb20gJ2NoYWxrJztcblxuY2xhc3MgU3RyaW5nQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBjb25maWc6IEdsb2JhbExvZ0NvbmZpZztcbiAgICBwcml2YXRlIHByaW50UXVldWU6IEFycmF5PHN0cmluZz47XG4gICAgcHJpdmF0ZSBmaWx0ZXJlZEhlYWRlckxpc3Q6IEFycmF5PFN0cmluZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEdsb2JhbExvZ0NvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0ID0gWydjb21tb24nLCAnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbnRlbnQtdHlwZScsICdjb250ZW50LWxlbmd0aCcsICd2YXJ5JywgJ2RhdGUnLCAnY29ubmVjdGlvbicsICdjb250ZW50LXNlY3VyaXR5LXBvbGljeSddO1xuICAgIH1cblxuICAgIG1ha2VMb2dUeXBlV2l0aFByZWZpeChsb2dUeXBlOiBMT0dfVFlQRSA9IExPR19UWVBFLlJFUVVFU1QsIHVybDogc3RyaW5nID0gXCJcIiwgcmVxdWVzdER1cmF0aW9uOiBzdHJpbmcgPSBcIlwiLCBjb2xvcj86IGFueSwgY29sb3JCZz86IGFueSkge1xuXG4gICAgICAgIGNvbnN0IGxvZ1N0ciA9IGAke2xvZ1R5cGUudG9TdHJpbmcoKX0gJHt1cmx9JHtyZXF1ZXN0RHVyYXRpb259YDtcbiAgICAgICAgY29uc3QgY29sb3JlZFR5cGUgPSBjb2xvciA/IGNoYWxrLmtleXdvcmQoY29sb3IpLmJnS2V5d29yZChjb2xvckJnKShsb2dTdHIpIDogbG9nVHlwZTtcbiAgICAgICAgY29uc3QgcHJlZml4ID0gdGhpcy5jb25maWcucHJlZml4VGV4dCA9PT0gZmFsc2UgPyBgYCA6IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0IHx8ICdBeGlvcyd9XWA7XG5cbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsuZ3JlZW4ocHJlZml4KSArIGBbJHtjb2xvcmVkVHlwZX1dYCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRlRm9ybWF0KGRhdGU6IERhdGUpIHtcbiAgICAgICAgLy8gYWxsb3cgZm9yIG9wdGluZy1vdXQgb2YgYWRkaW5nIHRoZSB0aW1lc3RhbXAgKGFzIG1vc3QgbG9nZ2VycyBhbHJlYWR5IGFkZCB0aGlzKVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGF0ZUZvcm1hdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlZm9ybWF0KGRhdGUsIHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgfHwgJ2lzb0RhdGVUaW1lJyk7XG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChkYXRlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlSGVhZGVyKGhlYWRlcnM/OiB7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5oZWFkZXJzICYmIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck1hcDp7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSA9IHt9O1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtrZXldID0gaGVhZGVyc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoaGVhZGVyTWFwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcudXJsICYmIHVybCkgdGhpcy5wcmludFF1ZXVlLnB1c2godXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZU1ldGhvZChtZXRob2Q/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcubWV0aG9kICYmIG1ldGhvZCkgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsueWVsbG93KG1ldGhvZC50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5kYXRhICYmIGRhdGEpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVN0YXR1cyhzdGF0dXM/Om51bWJlciwgc3RhdHVzVGV4dD86IHN0cmluZykge1xuICAgICAgICBpZihzdGF0dXMgJiYgc3RhdHVzVGV4dCkgdGhpcy5wcmludFF1ZXVlLnB1c2goYCR7c3RhdHVzfToke3N0YXR1c1RleHR9YCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFF1ZXVlLmpvaW4oJyAnKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBjaGFsa0J5VHlwZShsb2dUeXBlOiBMT0dfVFlQRSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vICAgICBzd2l0Y2ggKGxvZ1R5cGUpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgTE9HX1RZUEUuUkVRVUVTVDpcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gY2hhbGsuZ3JlZW4oc3RyKTtcbiAgICAvLyAgICAgICAgIGNhc2UgTE9HX1RZUEUuUkVTUE9OU0U6XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnllbGxvdyhzdHIpO1xuICAgIC8vICAgICAgICAgY2FzZSBMT0dfVFlQRS5FUlJPUjpcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gY2hhbGsucmVkKHN0cik7XG4gICAgLy9cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gc3RyO1xuICAgIC8vIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0J1aWxkZXI7XG4iXX0=
