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

    makeLogTypeWithPrefix(logType = _types.LOG_TYPE.REQUEST, url = '', requestDuration = '', color) {
        const coloredType = color
            ? _chalk.default.keyword(color)(logType.toString())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yZWRUeXBlIiwiY2hhbGsiLCJrZXl3b3JkIiwidG9TdHJpbmciLCJjaGFsa0J5VHlwZSIsInN0ciIsInByZWZpeCIsInByZWZpeFRleHQiLCJwdXNoIiwibWFrZURhdGVGb3JtYXQiLCJkYXRlIiwiZGF0ZUZvcm1hdCIsIm1ha2VIZWFkZXIiLCJoZWFkZXJzIiwiaGVhZGVyTWFwIiwia2V5IiwiaW5jbHVkZXMiLCJKU09OIiwic3RyaW5naWZ5IiwibWFrZVVybCIsIm1ha2VNZXRob2QiLCJtZXRob2QiLCJ5ZWxsb3ciLCJ0b1VwcGVyQ2FzZSIsIm1ha2VEYXRhIiwiZGF0YSIsIm1ha2VTdGF0dXMiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiYnVpbGQiLCJqb2luIiwiZ3JlZW4iLCJSRVNQT05TRSIsIkVSUk9SIiwicmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU1BLGFBQU4sQ0FBb0I7QUFLaEJDLEVBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUEwQjtBQUFBOztBQUFBOztBQUFBOztBQUNqQyxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0Msa0JBQUwsR0FBMEIsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixLQUFyQixFQUE0QixNQUE1QixFQUFvQyxNQUFwQyxFQUE0QyxLQUE1QyxFQUFtRCxPQUFuRCxFQUE0RCxjQUE1RCxFQUE0RSxnQkFBNUUsRUFBOEYsTUFBOUYsRUFBc0csTUFBdEcsRUFBOEcsWUFBOUcsRUFBNEgseUJBQTVILENBQTFCO0FBQ0g7O0FBRURDLEVBQUFBLHFCQUFxQixDQUFDQyxPQUFpQixHQUFHQyxnQkFBU0MsT0FBOUIsRUFBdUNDLEdBQVcsR0FBRyxFQUFyRCxFQUF5REMsZUFBdUIsR0FBRyxFQUFuRixFQUF1RkMsS0FBdkYsRUFBb0c7QUFFckgsVUFBTUMsV0FBVyxHQUFHRCxLQUFLLEdBQUdFLGVBQU1DLE9BQU4sQ0FBY0gsS0FBZCxFQUFxQkwsT0FBTyxDQUFDUyxRQUFSLEVBQXJCLENBQUgsR0FBOENmLGFBQWEsQ0FBQ2dCLFdBQWQsQ0FBMEJWLE9BQTFCLEVBQW1DQSxPQUFPLENBQUNTLFFBQVIsRUFBbkMsQ0FBdkU7QUFFQSxVQUFNRSxHQUFHLEdBQUcsR0FBRUwsV0FBWSxHQUFFSCxHQUFJLEdBQUVDLGVBQWdCLEVBQWxEO0FBQ0EsVUFBTVEsTUFBTSxHQUFHLEtBQUtoQixNQUFMLENBQVlpQixVQUFaLEtBQTJCLEtBQTNCLEdBQW9DLElBQUdGLEdBQUksR0FBM0MsR0FBaUQsSUFBRyxLQUFLZixNQUFMLENBQVlpQixVQUFaLElBQTBCLE9BQVEsS0FBSUYsR0FBSSxHQUE3RztBQUNBLFNBQUtkLFVBQUwsQ0FBZ0JpQixJQUFoQixDQUFxQkYsTUFBckI7QUFDQSxXQUFPLElBQVA7QUFDSDs7QUFFREcsRUFBQUEsY0FBYyxDQUFDQyxJQUFELEVBQWE7QUFDdkI7QUFDQSxRQUFJLEtBQUtwQixNQUFMLENBQVlxQixVQUFaLEtBQTJCLEtBQS9CLEVBQXNDO0FBQ2xDO0FBQ0EsWUFBTUEsVUFBVSxHQUFHLHlCQUFXRCxJQUFYLEVBQWlCLEtBQUtwQixNQUFMLENBQVlxQixVQUFaLElBQTBCLGFBQTNDLENBQW5CO0FBQ0EsV0FBS3BCLFVBQUwsQ0FBZ0JpQixJQUFoQixDQUFxQkcsVUFBckI7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsVUFBVSxDQUFDQyxPQUFELEVBQTZDO0FBQ25ELFFBQUcsS0FBS3ZCLE1BQUwsQ0FBWXVCLE9BQVosSUFBdUJBLE9BQTFCLEVBQW1DO0FBQy9CLFlBQU1DLFNBQTBDLEdBQUcsRUFBbkQ7O0FBQ0EsV0FBSSxJQUFJQyxHQUFSLElBQWVGLE9BQWYsRUFBd0I7QUFDcEIsWUFBRyxDQUFDLEtBQUtyQixrQkFBTCxDQUF3QndCLFFBQXhCLENBQWlDRCxHQUFqQyxDQUFKLEVBQTJDO0FBQ3ZDRCxVQUFBQSxTQUFTLENBQUNDLEdBQUQsQ0FBVCxHQUFpQkYsT0FBTyxDQUFDRSxHQUFELENBQXhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLeEIsVUFBTCxDQUFnQmlCLElBQWhCLENBQXFCUyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosU0FBZixDQUFyQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIOztBQUVESyxFQUFBQSxPQUFPLENBQUN0QixHQUFELEVBQWU7QUFDbEIsUUFBRyxLQUFLUCxNQUFMLENBQVlPLEdBQVosSUFBbUJBLEdBQXRCLEVBQTJCLEtBQUtOLFVBQUwsQ0FBZ0JpQixJQUFoQixDQUFxQlgsR0FBckI7QUFDM0IsV0FBTyxJQUFQO0FBQ0g7O0FBRUR1QixFQUFBQSxVQUFVLENBQUNDLE1BQUQsRUFBa0I7QUFDeEIsUUFBRyxLQUFLL0IsTUFBTCxDQUFZK0IsTUFBWixJQUFzQkEsTUFBekIsRUFBaUMsS0FBSzlCLFVBQUwsQ0FBZ0JpQixJQUFoQixDQUFxQlAsZUFBTXFCLE1BQU4sQ0FBYUQsTUFBTSxDQUFDRSxXQUFQLEVBQWIsQ0FBckI7QUFDakMsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLFFBQVEsQ0FBQ0MsSUFBRCxFQUFlO0FBQ25CLFFBQUcsS0FBS25DLE1BQUwsQ0FBWW1DLElBQVosSUFBb0JBLElBQXZCLEVBQTZCLEtBQUtsQyxVQUFMLENBQWdCaUIsSUFBaEIsQ0FBcUJTLElBQUksQ0FBQ0MsU0FBTCxDQUFlTyxJQUFmLENBQXJCO0FBQzdCLFdBQU8sSUFBUDtBQUNIOztBQUVEQyxFQUFBQSxVQUFVLENBQUNDLE1BQUQsRUFBaUJDLFVBQWpCLEVBQXNDO0FBQzVDLFFBQUdELE1BQU0sSUFBSUMsVUFBYixFQUF5QixLQUFLckMsVUFBTCxDQUFnQmlCLElBQWhCLENBQXNCLEdBQUVtQixNQUFPLElBQUdDLFVBQVcsRUFBN0M7QUFDekIsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLEtBQUssR0FBRztBQUNKLFdBQU8sS0FBS3RDLFVBQUwsQ0FBZ0J1QyxJQUFoQixDQUFxQixHQUFyQixDQUFQO0FBQ0g7O0FBRUQsU0FBZTFCLFdBQWYsQ0FBMkJWLE9BQTNCLEVBQThDVyxHQUE5QyxFQUFtRTtBQUMvRCxZQUFRWCxPQUFSO0FBQ0ksV0FBS0MsZ0JBQVNDLE9BQWQ7QUFDSSxlQUFPSyxlQUFNOEIsS0FBTixDQUFZMUIsR0FBWixDQUFQOztBQUNKLFdBQUtWLGdCQUFTcUMsUUFBZDtBQUNJLGVBQU8vQixlQUFNcUIsTUFBTixDQUFhakIsR0FBYixDQUFQOztBQUNKLFdBQUtWLGdCQUFTc0MsS0FBZDtBQUNJLGVBQU9oQyxlQUFNaUMsR0FBTixDQUFVN0IsR0FBVixDQUFQO0FBTlI7O0FBU0EsV0FBT0EsR0FBUDtBQUNIOztBQWhGZTs7ZUFxRkxqQixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jbGFzcyBTdHJpbmdCdWlsZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnO1xuICAgIHByaXZhdGUgcHJpbnRRdWV1ZTogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIGZpbHRlcmVkSGVhZGVyTGlzdDogQXJyYXk8U3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnByaW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QgPSBbJ2NvbW1vbicsICdkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ3ZhcnknLCAnZGF0ZScsICdjb25uZWN0aW9uJywgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5J107XG4gICAgfVxuXG4gICAgbWFrZUxvZ1R5cGVXaXRoUHJlZml4KGxvZ1R5cGU6IExPR19UWVBFID0gTE9HX1RZUEUuUkVRVUVTVCwgdXJsOiBzdHJpbmcgPSBcIlwiLCByZXF1ZXN0RHVyYXRpb246IHN0cmluZyA9IFwiXCIsIGNvbG9yPzogYW55KSB7XG5cbiAgICAgICAgY29uc3QgY29sb3JlZFR5cGUgPSBjb2xvciA/IGNoYWxrLmtleXdvcmQoY29sb3IpKGxvZ1R5cGUudG9TdHJpbmcoKSkgOiBTdHJpbmdCdWlsZGVyLmNoYWxrQnlUeXBlKGxvZ1R5cGUsIGxvZ1R5cGUudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgY29uc3Qgc3RyID1gJHtjb2xvcmVkVHlwZX0ke3VybH0ke3JlcXVlc3REdXJhdGlvbn1gXG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYFske3N0cn1dYCA6IGBbJHt0aGlzLmNvbmZpZy5wcmVmaXhUZXh0IHx8ICdBeGlvcyd9XVske3N0cn1dYDtcbiAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2gocHJlZml4KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICAgICAgICAvLyBhbGxvdyBmb3Igb3B0aW5nLW91dCBvZiBhZGRpbmcgdGhlIHRpbWVzdGFtcCAoYXMgbW9zdCBsb2dnZXJzIGFscmVhZHkgYWRkIHRoaXMpXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kYXRlRm9ybWF0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IGRhdGVmb3JtYXQoZGF0ZSwgdGhpcy5jb25maWcuZGF0ZUZvcm1hdCB8fCAnaXNvRGF0ZVRpbWUnKTtcbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGRhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoaGVhZGVycz86IHsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319KSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmhlYWRlcnMgJiYgaGVhZGVycykge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyTWFwOnsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319ID0ge307XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW2tleV0gPSBoZWFkZXJzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShoZWFkZXJNYXApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlVXJsKHVybD86IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy51cmwgJiYgdXJsKSB0aGlzLnByaW50UXVldWUucHVzaCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlTWV0aG9kKG1ldGhvZD86IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5tZXRob2QgJiYgbWV0aG9kKSB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay55ZWxsb3cobWV0aG9kLnRvVXBwZXJDYXNlKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGEoZGF0YTogb2JqZWN0KSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmRhdGEgJiYgZGF0YSkgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlU3RhdHVzKHN0YXR1cz86bnVtYmVyLCBzdGF0dXNUZXh0Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHN0YXR1cyAmJiBzdGF0dXNUZXh0KSB0aGlzLnByaW50UXVldWUucHVzaChgJHtzdGF0dXN9OiR7c3RhdHVzVGV4dH1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW50UXVldWUuam9pbignICcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNoYWxrQnlUeXBlKGxvZ1R5cGU6IExPR19UWVBFLCBzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHN3aXRjaCAobG9nVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBMT0dfVFlQRS5SRVFVRVNUOlxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFsay5ncmVlbihzdHIpO1xuICAgICAgICAgICAgY2FzZSBMT0dfVFlQRS5SRVNQT05TRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhbGsueWVsbG93KHN0cik7XG4gICAgICAgICAgICBjYXNlIExPR19UWVBFLkVSUk9SOlxuICAgICAgICAgICAgICAgIHJldHVybiBjaGFsay5yZWQoc3RyKTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nQnVpbGRlcjtcbiJdfQ==
