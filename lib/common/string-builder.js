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
    this.printQueue.push(`${_chalk.default.green(prefix)} [${logType.toString()}${randomIdColored} ${url}${requestDuration}]`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc3RyaW5nLWJ1aWxkZXIudHMiXSwibmFtZXMiOlsiU3RyaW5nQnVpbGRlciIsImNvbnN0cnVjdG9yIiwiY29uZmlnIiwicHJpbnRRdWV1ZSIsImZpbHRlcmVkSGVhZGVyTGlzdCIsIm1ha2VMb2dUeXBlV2l0aFByZWZpeCIsImxvZ1R5cGUiLCJMT0dfVFlQRSIsIlJFUVVFU1QiLCJ1cmwiLCJyZXF1ZXN0RHVyYXRpb24iLCJjb2xvciIsImNvbG9yQmciLCJyYW5kb21JZCIsInJhbmRvbUlkQ29sb3JlZCIsImNoYWxrIiwia2V5d29yZCIsImJnS2V5d29yZCIsInByZWZpeCIsInByZWZpeFRleHQiLCJwdXNoIiwiZ3JlZW4iLCJ0b1N0cmluZyIsIm1ha2VEYXRlRm9ybWF0IiwiZGF0ZSIsImRhdGVGb3JtYXQiLCJtYWtlSGVhZGVyIiwiaGVhZGVycyIsImhlYWRlck1hcCIsImtleSIsImluY2x1ZGVzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1ha2VVcmwiLCJtYWtlTWV0aG9kIiwibWV0aG9kIiwieWVsbG93IiwidG9VcHBlckNhc2UiLCJtYWtlRGF0YSIsImRhdGEiLCJtYWtlU3RhdHVzIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImJ1aWxkIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBS2hCQyxFQUFBQSxXQUFXLENBQUNDLE1BQUQsRUFBMEI7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsY0FBNUQsRUFBNEUsZ0JBQTVFLEVBQThGLE1BQTlGLEVBQXNHLE1B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TSxJQUFJQyxVQUFiLEVBQXlCLEtBQUt2QyxVQUFMLENBQWdCaUIsSUFBaEIsQ0FBc0IsR0FBRXFCLE1BQU8sSUFBR0MsVUFBVyxFQUE3QztBQUN6QixXQUFPLElBQVA7QUFDSDs7QUFFREMsRUFBQUEsS0FBSyxHQUFHO0FBQ0osV0FBTyxLQUFLeEMsVUFBTCxDQUFnQnlDLElBQWhCLENBQXFCLEdBQXJCLENBQVA7QUFDSCxHQWpFZSxDQW1FaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUE5RWdCOztlQW1GTDVDLGEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGF0ZWZvcm1hdCBmcm9tICdkYXRlZm9ybWF0JztcbmltcG9ydCB7IEdsb2JhbExvZ0NvbmZpZywgTE9HX1RZUEUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XG5cbmNsYXNzIFN0cmluZ0J1aWxkZXIge1xuICAgIHByaXZhdGUgY29uZmlnOiBHbG9iYWxMb2dDb25maWc7XG4gICAgcHJpdmF0ZSBwcmludFF1ZXVlOiBBcnJheTxzdHJpbmc+O1xuICAgIHByaXZhdGUgZmlsdGVyZWRIZWFkZXJMaXN0OiBBcnJheTxTdHJpbmc+O1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBHbG9iYWxMb2dDb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcmVkSGVhZGVyTGlzdCA9IFsnY29tbW9uJywgJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb250ZW50LXR5cGUnLCAnY29udGVudC1sZW5ndGgnLCAndmFyeScsICdkYXRlJywgJ2Nvbm5lY3Rpb24nLCAnY29udGVudC1zZWN1cml0eS1wb2xpY3knXTtcbiAgICB9XG5cbiAgICBtYWtlTG9nVHlwZVdpdGhQcmVmaXgobG9nVHlwZTogTE9HX1RZUEUgPSBMT0dfVFlQRS5SRVFVRVNULCB1cmw6IHN0cmluZyA9IFwiXCIsIHJlcXVlc3REdXJhdGlvbjogc3RyaW5nID0gXCJcIiwgY29sb3I/OiBhbnksIGNvbG9yQmc/OiBhbnksIHJhbmRvbUlkPzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUlkQ29sb3JlZCA9IGNvbG9yID8gY2hhbGsua2V5d29yZChjb2xvcikuYmdLZXl3b3JkKGNvbG9yQmcpKFwiI1wiK3JhbmRvbUlkKSA6IGxvZ1R5cGU7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuY29uZmlnLnByZWZpeFRleHQgPT09IGZhbHNlID8gYGAgOiBgWyR7dGhpcy5jb25maWcucHJlZml4VGV4dCB8fCAnQXhpb3MnfV1gO1xuXG4gICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke2NoYWxrLmdyZWVuKHByZWZpeCl9IFske2xvZ1R5cGUudG9TdHJpbmcoKX0ke3JhbmRvbUlkQ29sb3JlZH0gJHt1cmx9JHtyZXF1ZXN0RHVyYXRpb259XWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0ZUZvcm1hdChkYXRlOiBEYXRlKSB7XG4gICAgICAgIC8vIGFsbG93IGZvciBvcHRpbmctb3V0IG9mIGFkZGluZyB0aGUgdGltZXN0YW1wIChhcyBtb3N0IGxvZ2dlcnMgYWxyZWFkeSBhZGQgdGhpcylcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRhdGVGb3JtYXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gZGF0ZWZvcm1hdChkYXRlLCB0aGlzLmNvbmZpZy5kYXRlRm9ybWF0IHx8ICdpc29EYXRlVGltZScpO1xuICAgICAgICAgICAgdGhpcy5wcmludFF1ZXVlLnB1c2goZGF0ZUZvcm1hdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWFrZUhlYWRlcihoZWFkZXJzPzogeyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0pIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuaGVhZGVycyAmJiBoZWFkZXJzKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJNYXA6eyBba2V5OnN0cmluZ10gOiB7dmFsdWU6c3RyaW5nfX0gPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5maWx0ZXJlZEhlYWRlckxpc3QuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJNYXBba2V5XSA9IGhlYWRlcnNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJpbnRRdWV1ZS5wdXNoKEpTT04uc3RyaW5naWZ5KGhlYWRlck1hcCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VVcmwodXJsPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLnVybCAmJiB1cmwpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKHVybCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VNZXRob2QobWV0aG9kPzogc3RyaW5nKSB7XG4gICAgICAgIGlmKHRoaXMuY29uZmlnLm1ldGhvZCAmJiBtZXRob2QpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGNoYWxrLnllbGxvdyhtZXRob2QudG9VcHBlckNhc2UoKSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBtYWtlRGF0YShkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgaWYodGhpcy5jb25maWcuZGF0YSAmJiBkYXRhKSB0aGlzLnByaW50UXVldWUucHVzaChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1ha2VTdGF0dXMoc3RhdHVzPzpudW1iZXIsIHN0YXR1c1RleHQ/OiBzdHJpbmcpIHtcbiAgICAgICAgaWYoc3RhdHVzICYmIHN0YXR1c1RleHQpIHRoaXMucHJpbnRRdWV1ZS5wdXNoKGAke3N0YXR1c306JHtzdGF0dXNUZXh0fWApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpbnRRdWV1ZS5qb2luKCcgJyk7XG4gICAgfVxuXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgY2hhbGtCeVR5cGUobG9nVHlwZTogTE9HX1RZUEUsIHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyAgICAgc3dpdGNoIChsb2dUeXBlKSB7XG4gICAgLy8gICAgICAgICBjYXNlIExPR19UWVBFLlJFUVVFU1Q6XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNoYWxrLmdyZWVuKHN0cik7XG4gICAgLy8gICAgICAgICBjYXNlIExPR19UWVBFLlJFU1BPTlNFOlxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBjaGFsay55ZWxsb3coc3RyKTtcbiAgICAvLyAgICAgICAgIGNhc2UgTE9HX1RZUEUuRVJST1I6XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGNoYWxrLnJlZChzdHIpO1xuICAgIC8vXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHN0cjtcbiAgICAvLyB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdCdWlsZGVyO1xuIl19