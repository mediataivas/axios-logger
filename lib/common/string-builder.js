"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dateformat = _interopRequireDefault(require("dateformat"));

var _types = require("./types");

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class StringBuilder {
  constructor(config) {
    _defineProperty(this, "config", void 0);

    _defineProperty(this, "printQueue", void 0);

    _defineProperty(this, "filteredHeaderList", void 0);

    this.config = config;
    this.printQueue = [];
    this.filteredHeaderList = ['common', 'delete', 'get', 'head', 'post', 'put', 'patch', 'content-type', 'content-length', 'vary', 'date', 'connection', 'content-security-policy'];
  }

  makeLogTypeWithPrefix(logType = _types.LOG_TYPE.REQUEST, url = "", requestDuration = "", color, colorBg, randomId) {
    const randomIdColored = color ? _chalk.default.keyword(color).bgKeyword(colorBg)("#" + randomId) : logType;
    const prefix = this.config.prefixText === false ? `` : `[${this.config.prefixText || 'Axios'}]`;
    this.printQueue.push(_chalk.default.green(prefix) + `${logType.toString()}${randomIdColored} ${url}${requestDuration}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yQmciLCJyYW5kb21JZCIsInJhbmRvbUlkQ29sb3JlZCIsImNoYWxrIiwia2V5d29yZCIsImJnS2V5d29yZCIsInByZWZpeCIsInByZWZpeFRleHQiLCJwdXNoIiwiZ3JlZW4iLCJ0b1N0cmluZyIsIm1ha2VEYXRlRm9ybWF0IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJtYWtlSGVhZGVyIiwiaGVhZGVycyIsImhlYWRlck1hcCIsImtleSIsImluY2x1ZGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJtYWtlU3RhdHVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImJ1aWxkIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsY0FBNUQsRUFBNEUsZ0JBQTVFLEVBQThGLE1BQTlGLEVBQXNHLE1B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SUMsVUFBYixFQUF5QixLQUFLdkMsVUFBTCxDQUFnQmlCLElBQWhCLENBQXNCLEdBQUVxQixNQUFPLElBQUdDLFVBQVcsRUFBN0M7QUFDekIsV0FBTyxJQUFQO0FBQ0g7O0FBRURDLEVBQUFBLEtBQUssR0FBRztBQUNKLFdBQU8sS0FBS3hDLFVBQUwsQ0FBZ0J5QyxJQUFoQixDQUFxQixHQUFyQixDQUFQO0FBQ0gsR0FqRWUsQ0FtRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBOUVnQjs7ZUFtRkw1QyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGVmb3JtYXQgZnJvbSAnZGF0ZWZvcm1hdCc7XG5pbXBvcnQgeyBHbG9iYWxMb2dDb25maWcsIExPR19UWVBFIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xuXG5jbGFzcyBTdHJpbmdCdWlsZGVyIHtcbiAgICBwcml2YXRlIGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnO1xuICAgIHByaXZhdGUgcHJpbnRRdWV1ZTogQXJyYXk8c3RyaW5nPjtcbiAgICBwcml2YXRlIGZpbHRlcmVkSGVhZGVyTGlzdDogQXJyYXk8U3RyaW5nPjtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogR2xvYmFsTG9nQ29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnByaW50UXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QgPSBbJ2NvbW1vbicsICdkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29udGVudC10eXBlJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ3ZhcnknLCAnZGF0ZScsICdjb25uZWN0aW9uJywgJ2NvbnRlbnQtc2VjdXJpdHktcG9saWN5J107XG4gICAgfVxuXG4gICAgbWFrZUxvZ1R5cGVXaXRoUHJlZml4KGxvZ1R5cGU6IExPR19UWVBFID0gTE9HX1RZUEUuUkVRVUVTVCwgdXJsOiBzdHJpbmcgPSBcIlwiLCByZXF1ZXN0RHVyYXRpb246IHN0cmluZyA9IFwiXCIsIGNvbG9yPzogYW55LCBjb2xvckJnPzogYW55LCByYW5kb21JZD86IHN0cmluZykge1xuICAgICAgICBjb25zdCByYW5kb21JZENvbG9yZWQgPSBjb2xvciA/IGNoYWxrLmtleXdvcmQoY29sb3IpLmJnS2V5d29yZChjb2xvckJnKShcIiNcIityYW5kb21JZCkgOiBsb2dUeXBlO1xuICAgICAgICBjb25zdCBwcmVmaXggPSB0aGlzLmNvbmZpZy5wcmVmaXhUZXh0ID09PSBmYWxzZSA/IGBgIDogYFske3RoaXMuY29uZmlnLnByZWZpeFRleHQgfHwgJ0F4aW9zJ31dYDtcblxuICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay5ncmVlbihwcmVmaXgpICsgYCR7bG9nVHlwZS50b1N0cmluZygpfSR7cmFuZG9tSWRDb2xvcmVkfSAke3VybH0ke3JlcXVlc3REdXJhdGlvbn1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGVGb3JtYXQoZGF0ZTogRGF0ZSkge1xuICAgICAgICAvLyBhbGxvdyBmb3Igb3B0aW5nLW91dCBvZiBhZGRpbmcgdGhlIHRpbWVzdGFtcCAoYXMgbW9zdCBsb2dnZXJzIGFscmVhZHkgYWRkIHRoaXMpXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5kYXRlRm9ybWF0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZGF0ZUZvcm1hdCA9IGRhdGVmb3JtYXQoZGF0ZSwgdGhpcy5jb25maWcuZGF0ZUZvcm1hdCB8fCAnaXNvRGF0ZVRpbWUnKTtcbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGRhdGVGb3JtYXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VIZWFkZXIoaGVhZGVycz86IHsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319KSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmhlYWRlcnMgJiYgaGVhZGVycykge1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyTWFwOnsgW2tleTpzdHJpbmddIDoge3ZhbHVlOnN0cmluZ319ID0ge307XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuZmlsdGVyZWRIZWFkZXJMaXN0LmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTWFwW2tleV0gPSBoZWFkZXJzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShoZWFkZXJNYXApKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlVXJsKHVybD86IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy51cmwgJiYgdXJsKSB0aGlzLnByaW50UXVldWUucHVzaCh1cmwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlTWV0aG9kKG1ldGhvZD86IHN0cmluZykge1xuICAgICAgICBpZih0aGlzLmNvbmZpZy5tZXRob2QgJiYgbWV0aG9kKSB0aGlzLnByaW50UXVldWUucHVzaChjaGFsay55ZWxsb3cobWV0aG9kLnRvVXBwZXJDYXNlKCkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZURhdGEoZGF0YTogb2JqZWN0KSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLmRhdGEgJiYgZGF0YSkgdGhpcy5wcmludFF1ZXVlLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlU3RhdHVzKHN0YXR1cz86bnVtYmVyLCBzdGF0dXNUZXh0Pzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHN0YXR1cyAmJiBzdGF0dXNUZXh0KSB0aGlzLnByaW50UXVldWUucHVzaChgJHtzdGF0dXN9OiR7c3RhdHVzVGV4dH1gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW50UXVldWUuam9pbignICcpO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgc3RhdGljIGNoYWxrQnlUeXBlKGxvZ1R5cGU6IExPR19UWVBFLCBzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gICAgIHN3aXRjaCAobG9nVHlwZSkge1xuICAgIC8vICAgICAgICAgY2FzZSBMT0dfVFlQRS5SRVFVRVNUOlxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBjaGFsay5ncmVlbihzdHIpO1xuICAgIC8vICAgICAgICAgY2FzZSBMT0dfVFlQRS5SRVNQT05TRTpcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gY2hhbGsueWVsbG93KHN0cik7XG4gICAgLy8gICAgICAgICBjYXNlIExPR19UWVBFLkVSUk9SOlxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBjaGFsay5yZWQoc3RyKTtcbiAgICAvL1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiBzdHI7XG4gICAgLy8gfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nQnVpbGRlcjtcbiJdfQ==