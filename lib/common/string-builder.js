'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _dateformat = _interopRequireDefault(require('dateformat'));

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

    makeLogTypeWithPrefix(url = '', logType = '', requestDuration = '') {
        const prefix =
            this.config.prefixText === false
                ? `[${logType}${requestDuration}]`
                : `[${this.config.prefixText || 'Axios'}][${logType} ${url}]`;
        this.printQueue.push(_chalk.default.green(prefix));
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
}

var _default = StringBuilder;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsInVybCIsImxvZ1R5cGUiLCJyZXF1ZXN0RHVyYXRpb24iLCJwcmVmaXgiLCJwcmVmaXhUZXh0IiwicHVzaCIsImNoYWxrIiwiZ3JlZW4iLCJtYWtlRGF0ZUZvcm1hdCIsImRhdGUiLCJkYXRlRm9ybWF0IiwibWFrZUhlYWRlciIsImhlYWRlcnMiLCJoZWFkZXJNYXAiLCJrZXkiLCJpbmNsdWRlcyIsIkpTT04iLCJzdHJpbmdpZnkiLCJtYWtlVXJsIiwibWFrZU1ldGhvZCIsIm1ldGhvZCIsInllbGxvdyIsInRvVXBwZXJDYXNlIiwibWFrZURhdGEiLCJkYXRhIiwibWFrZVN0YXR1cyIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJidWlsZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7O0FBR0EsTUFBTUEsYUFBTixDQUFvQjtBQUtoQkMsRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQTBCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLEVBQTRCLE1BQTVCLEVBQW9DLE1BQXBDLEVBQTRDLEtBQTVDLEVBQW1ELE9BQW5ELEVBQTRELGNBQTVELEVBQTRFLGdCQUE1RSxFQUE4RixNQUE5RixFQUFzRyxNQUF0RyxFQUE4RyxZQUE5RyxFQUE0SCx5QkFBNUgsQ0FBMUI7QUFDSDs7QUFFREMsRUFBQUEscUJBQXFCLENBQUNDLEdBQVcsR0FBRyxFQUFmLEVBQW1CQyxPQUFlLEdBQUcsRUFBckMsRUFBeUNDLGVBQXVCLEdBQUcsRUFBbkUsRUFBdUU7QUFDeEYsVUFBTUMsTUFBTSxHQUFHLEtBQUtQLE1BQUwsQ0FBWVEsVUFBWixLQUEyQixLQUEzQixHQUFvQyxJQUFHSCxPQUFRLEdBQUVDLGVBQWdCLEdBQWpFLEdBQXVFLElBQUcsS0FBS04sTUFBTCxDQUFZUSxVQUFaLElBQTBCLE9BQVEsS0FBSUgsT0FBUSxJQUFHRCxHQUFJLEdBQTlJO0FBQ0EsU0FBS0gsVUFBTCxDQUFnQlEsSUFBaEIsQ0FBcUJDLGVBQU1DLEtBQU4sQ0FBWUosTUFBWixDQUFyQjtBQUNBLFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxjQUFjLENBQUNDLElBQUQsRUFBYTtBQUN2QjtBQUNBLFFBQUksS0FBS2IsTUFBTCxDQUFZYyxVQUFaLEtBQTJCLEtBQS9CLEVBQXNDO0FBQ2xDO0FBQ0EsWUFBTUEsVUFBVSxHQUFHLHlCQUFXRCxJQUFYLEVBQWlCLEtBQUtiLE1BQUwsQ0FBWWMsVUFBWixJQUEwQixhQUEzQyxDQUFuQjtBQUNBLFdBQUtiLFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCSyxVQUFyQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLE9BQUQsRUFBNkM7QUFDbkQsUUFBRyxLQUFLaEIsTUFBTCxDQUFZZ0IsT0FBWixJQUF1QkEsT0FBMUIsRUFBbUM7QUFDL0IsWUFBTUMsU0FBMEMsR0FBRyxFQUFuRDs7QUFDQSxXQUFJLElBQUlDLEdBQVIsSUFBZUYsT0FBZixFQUF3QjtBQUNwQixZQUFHLENBQUMsS0FBS2Qsa0JBQUwsQ0FBd0JpQixRQUF4QixDQUFpQ0QsR0FBakMsQ0FBSixFQUEyQztBQUN2Q0QsVUFBQUEsU0FBUyxDQUFDQyxHQUFELENBQVQsR0FBaUJGLE9BQU8sQ0FBQ0UsR0FBRCxDQUF4QjtBQUNIO0FBQ0o7O0FBRUQsV0FBS2pCLFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCVyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosU0FBZixDQUFyQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxPQUFPLENBQUNsQixHQUFELEVBQWU7QUFDbEIsUUFBRyxLQUFLSixNQUFMLENBQVlJLEdBQVosSUFBbUJBLEdBQXRCLEVBQTJCLEtBQUtILFVBQUwsQ0FBZ0JRLElBQWhCLENBQXFCTCxHQUFyQjtBQUMzQixXQUFPLElBQVA7QUFDSDs7QUFFRG1CLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFrQjtBQUN4QixRQUFHLEtBQUt4QixNQUFMLENBQVl3QixNQUFaLElBQXNCQSxNQUF6QixFQUFpQyxLQUFLdkIsVUFBTCxDQUFnQlEsSUFBaEIsQ0FBcUJDLGVBQU1lLE1BQU4sQ0FBYUQsTUFBTSxDQUFDRSxXQUFQLEVBQWIsQ0FBckI7QUFDakMsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ25CLFFBQUcsS0FBSzVCLE1BQUwsQ0FBWTRCLElBQVosSUFBb0JBLElBQXZCLEVBQTZCLEtBQUszQixVQUFMLENBQWdCUSxJQUFoQixDQUFxQlcsSUFBSSxDQUFDQyxTQUFMLENBQWVPLElBQWYsQ0FBckI7QUFDN0IsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFVBQVUsQ0FBQ0MsTUFBRCxFQUFpQkMsVUFBakIsRUFBc0M7QUFDNUMsUUFBR0QsTUFBTSxJQUFJQyxVQUFiLEVBQXlCLEtBQUs5QixVQUFMLENBQWdCUSxJQUFoQixDQUFzQixHQUFFcUIsTUFBTyxJQUFHQyxVQUFXLEVBQTdDO0FBQ3pCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxLQUFLLEdBQUc7QUFDSixXQUFPLEtBQUsvQixVQUFMLENBQWdCZ0MsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBUDtBQUNIOztBQS9EZTs7ZUFrRUxuQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBTdHJpbmdCdWlsZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnO1xuICAgIHByaXZhdGUgcHJpbnRRdWV1ZTogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIGZpbHRlcmVkSGVhZGVyTGlzdDogQXJyYXk8U3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnByaW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QgPSBbJ2NvbW1vbicsICdkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ3ZhcnknLCAnZGF0ZScsICdjb25uZWN0aW9uJywgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5J107XG4gICAgfVxuXG4gICAgbWFrZUxvZ1R5cGVXaXRoUHJlZml4KHVybDogc3RyaW5nID0gXCJcIiwgbG9nVHlwZTogc3RyaW5nID0gXCJcIiwgcmVxdWVzdER1cmF0aW9uOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYFske2xvZ1R5cGV9JHtyZXF1ZXN0RHVyYXRpb259XWAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1bJHtsb2dUeXBlfSAke3VybH1dYDtcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsuZ3JlZW4ocHJlZml4KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRlRm9ybWF0KGRhdGU6IERhdGUpIHtcbiAgICAgICAgLy8gYWxsb3cgZm9yIG9wdGluZy1vdXQgb2YgYWRkaW5nIHRoZSB0aW1lc3RhbXAgKGFzIG1vc3QgbG9nZ2VycyBhbHJlYWR5IGFkZCB0aGlzKVxuICAgICAgICBpZiAodGhpcy5jb25maWcuZGF0ZUZvcm1hdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSBkYXRlZm9ybWF0KGRhdGUsIHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgfHwgJ2lzb0RhdGVUaW1lJyk7XG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChkYXRlRm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlSGVhZGVyKGhlYWRlcnM/OiB7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5oZWFkZXJzICYmIGhlYWRlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck1hcDp7IFtrZXk6c3RyaW5nXSA6IHt2YWx1ZTpzdHJpbmd9fSA9IHt9O1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgIGlmKCF0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdC5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlck1hcFtrZXldID0gaGVhZGVyc1trZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoaGVhZGVyTWFwKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVVybCh1cmw/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcudXJsICYmIHVybCkgdGhpcy5wcmludFF1ZXVlLnB1c2godXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZU1ldGhvZChtZXRob2Q/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcubWV0aG9kICYmIG1ldGhvZCkgdGhpcy5wcmludFF1ZXVlLnB1c2goY2hhbGsueWVsbG93KG1ldGhvZC50b1VwcGVyQ2FzZSgpKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VEYXRhKGRhdGE6IG9iamVjdCkge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5kYXRhICYmIGRhdGEpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZVN0YXR1cyhzdGF0dXM/Om51bWJlciwgc3RhdHVzVGV4dD86IHN0cmluZykge1xuICAgICAgICBpZihzdGF0dXMgJiYgc3RhdHVzVGV4dCkgdGhpcy5wcmludFF1ZXVlLnB1c2goYCR7c3RhdHVzfToke3N0YXR1c1RleHR9YCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJ1aWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmludFF1ZXVlLmpvaW4oJyAnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0J1aWxkZXI7XG4iXX0=
