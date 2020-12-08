'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.default = void 0;

var _types = require('../common/types');

var _config = require('../common/config');

var _stringBuilder = _interopRequireDefault(require('../common/string-builder'));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function requestLogger(request, config) {
    const { url, method, data, headers } = request;
    const buildConfig = (0, _config.assembleBuildConfig)(config);
    const requestAsAny = request;

    if (!requestAsAny.meta) {
        requestAsAny.meta = {};
    }

    const randomChalk = getRandomColor();
    requestAsAny.meta.chalk = randomChalk;
    requestAsAny.meta.requestStartedAt = new Date().getTime();

    if (!buildConfig.isRequestLogEnabled) {
        return request;
    }

    const stringBuilder = new _stringBuilder.default(buildConfig);
    const log = stringBuilder
        .makeLogTypeWithPrefix(_types.LOG_TYPE.REQUEST, url, undefined, randomChalk)
        .makeDateFormat(new Date())
        .makeMethod(method)
        .makeHeader(headers)
        .makeData(data)
        .build();
    buildConfig.logger(log);
    return request;
}

let lastRandomIndex = -1;

function getRandomColor() {
    const colors = [
        'yellow',
        'blue',
        'magenta',
        'cyan',
        'white',
        'gray',
        'grey',
        'blackBright',
        'redBright',
        'greenBright',
        'yellowBright',
        'blueBright',
        'magentaBright',
        'cyanBright',
        'whiteBright',
    ];
    let randomTextColorIndex;
    let randomBgColorIndex;

    do {
        randomTextColorIndex = Math.floor(Math.random() * colors.length);
        randomBgColorIndex = Math.floor(Math.random() * colors.length);
    } while (randomBgColorIndex === randomTextColorIndex || lastRandomIndex === randomTextColorIndex);

    lastRandomIndex = randomTextColorIndex;
    return colors[randomTextColorIndex];
}

var _default = requestLogger;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2dnZXIvcmVxdWVzdC50cyJdLCJuYW1lcyI6WyJyZXF1ZXN0TG9nZ2VyIiwicmVxdWVzdCIsImNvbmZpZyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJoZWFkZXJzIiwiYnVpbGRDb25maWciLCJyZXF1ZXN0QXNBbnkiLCJtZXRhIiwicmFuZG9tQ2hhbGsiLCJnZXRSYW5kb21Db2xvciIsImNoYWxrIiwicmVxdWVzdFN0YXJ0ZWRBdCIsIkRhdGUiLCJnZXRUaW1lIiwiaXNSZXF1ZXN0TG9nRW5hYmxlZCIsInN0cmluZ0J1aWxkZXIiLCJTdHJpbmdCdWlsZGVyIiwibG9nIiwibWFrZUxvZ1R5cGVXaXRoUHJlZml4IiwiTE9HX1RZUEUiLCJSRVFVRVNUIiwidW5kZWZpbmVkIiwibWFrZURhdGVGb3JtYXQiLCJtYWtlTWV0aG9kIiwibWFrZUhlYWRlciIsIm1ha2VEYXRhIiwiYnVpbGQiLCJsb2dnZXIiLCJsYXN0UmFuZG9tSW5kZXgiLCJjb2xvcnMiLCJyYW5kb21UZXh0Q29sb3JJbmRleCIsInJhbmRvbUJnQ29sb3JJbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBR0EsU0FBU0EsYUFBVCxDQUF1QkMsT0FBdkIsRUFBb0RDLE1BQXBELEVBQStFO0FBRTNFLFFBQU07QUFBQ0MsSUFBQUEsR0FBRDtBQUFNQyxJQUFBQSxNQUFOO0FBQWNDLElBQUFBLElBQWQ7QUFBb0JDLElBQUFBO0FBQXBCLE1BQStCTCxPQUFyQztBQUNBLFFBQU1NLFdBQVcsR0FBRyxpQ0FBb0JMLE1BQXBCLENBQXBCO0FBQ0EsUUFBTU0sWUFBWSxHQUFHUCxPQUFyQjs7QUFDQSxNQUFHLENBQUNPLFlBQVksQ0FBQ0MsSUFBakIsRUFBdUI7QUFDbkJELElBQUFBLFlBQVksQ0FBQ0MsSUFBYixHQUFvQixFQUFwQjtBQUNIOztBQUNELFFBQU1DLFdBQVcsR0FBR0MsY0FBYyxFQUFsQztBQUNBSCxFQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JHLEtBQWxCLEdBQTBCRixXQUExQjtBQUVBRixFQUFBQSxZQUFZLENBQUNDLElBQWIsQ0FBa0JJLGdCQUFsQixHQUFxQyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBckM7O0FBRUEsTUFBSSxDQUFDUixXQUFXLENBQUNTLG1CQUFqQixFQUFzQztBQUNsQyxXQUFPZixPQUFQO0FBQ0g7O0FBRUQsUUFBTWdCLGFBQWEsR0FBRyxJQUFJQyxzQkFBSixDQUFrQlgsV0FBbEIsQ0FBdEI7QUFDQSxRQUFNWSxHQUFHLEdBQUdGLGFBQWEsQ0FDcEJHLHFCQURPLENBQ2VDLGdCQUFTQyxPQUR4QixFQUNpQ25CLEdBRGpDLEVBQ3NDb0IsU0FEdEMsRUFDaURiLFdBRGpELEVBRVBjLGNBRk8sQ0FFUSxJQUFJVixJQUFKLEVBRlIsRUFHUFcsVUFITyxDQUdJckIsTUFISixFQUlQc0IsVUFKTyxDQUlJcEIsT0FKSixFQUtQcUIsUUFMTyxDQUtFdEIsSUFMRixFQU1QdUIsS0FOTyxFQUFaO0FBUUFyQixFQUFBQSxXQUFXLENBQUNzQixNQUFaLENBQW1CVixHQUFuQjtBQUVBLFNBQU9sQixPQUFQO0FBQ0g7O0FBRUQsSUFBSTZCLGVBQXVCLEdBQUcsQ0FBQyxDQUEvQjs7QUFFQSxTQUFTbkIsY0FBVCxHQUEwQjtBQUN0QixRQUFNb0IsTUFBTSxHQUFHLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsU0FBbkIsRUFBOEIsTUFBOUIsRUFBc0MsT0FBdEMsRUFBK0MsTUFBL0MsRUFBdUQsTUFBdkQsRUFBK0QsYUFBL0QsRUFBOEUsV0FBOUUsRUFBMkYsYUFBM0YsRUFBMEcsY0FBMUcsRUFBMEgsWUFBMUgsRUFBd0ksZUFBeEksRUFBeUosWUFBekosRUFBdUssYUFBdkssQ0FBZjtBQUNBLE1BQUlDLG9CQUFKO0FBQ0EsTUFBSUMsa0JBQUo7O0FBQ0EsS0FBRztBQUNDRCxJQUFBQSxvQkFBb0IsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsTUFBTSxDQUFDTSxNQUFsQyxDQUF2QjtBQUNBSixJQUFBQSxrQkFBa0IsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsTUFBTSxDQUFDTSxNQUFsQyxDQUFyQjtBQUNILEdBSEQsUUFHUUosa0JBQWtCLEtBQUtELG9CQUF2QixJQUErQ0YsZUFBZSxLQUFLRSxvQkFIM0U7O0FBS0FGLEVBQUFBLGVBQWUsR0FBR0Usb0JBQWxCO0FBQ0EsU0FBT0QsTUFBTSxDQUFDQyxvQkFBRCxDQUFiO0FBQ0g7O2VBRWNoQyxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgTE9HX1RZUEUsIFJlcXVlc3RMb2dDb25maWcgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgYXNzZW1ibGVCdWlsZENvbmZpZyB9IGZyb20gJy4uL2NvbW1vbi9jb25maWcnO1xuaW1wb3J0IFN0cmluZ0J1aWxkZXIgZnJvbSAnLi4vY29tbW9uL3N0cmluZy1idWlsZGVyJztcblxuXG5mdW5jdGlvbiByZXF1ZXN0TG9nZ2VyKHJlcXVlc3Q6IEF4aW9zUmVxdWVzdENvbmZpZywgY29uZmlnPzogUmVxdWVzdExvZ0NvbmZpZykge1xuXG4gICAgY29uc3Qge3VybCwgbWV0aG9kLCBkYXRhLCBoZWFkZXJzfSA9IHJlcXVlc3Q7XG4gICAgY29uc3QgYnVpbGRDb25maWcgPSBhc3NlbWJsZUJ1aWxkQ29uZmlnKGNvbmZpZyk7XG4gICAgY29uc3QgcmVxdWVzdEFzQW55ID0gcmVxdWVzdCBhcyBhbnk7XG4gICAgaWYoIXJlcXVlc3RBc0FueS5tZXRhKSB7XG4gICAgICAgIHJlcXVlc3RBc0FueS5tZXRhID0ge307XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbUNoYWxrID0gZ2V0UmFuZG9tQ29sb3IoKTtcbiAgICByZXF1ZXN0QXNBbnkubWV0YS5jaGFsayA9IHJhbmRvbUNoYWxrO1xuXG4gICAgcmVxdWVzdEFzQW55Lm1ldGEucmVxdWVzdFN0YXJ0ZWRBdCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKCFidWlsZENvbmZpZy5pc1JlcXVlc3RMb2dFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZ0J1aWxkZXIgPSBuZXcgU3RyaW5nQnVpbGRlcihidWlsZENvbmZpZyk7XG4gICAgY29uc3QgbG9nID0gc3RyaW5nQnVpbGRlclxuICAgICAgICAubWFrZUxvZ1R5cGVXaXRoUHJlZml4KExPR19UWVBFLlJFUVVFU1QsIHVybCwgdW5kZWZpbmVkLCByYW5kb21DaGFsaylcbiAgICAgICAgLm1ha2VEYXRlRm9ybWF0KG5ldyBEYXRlKCkpXG4gICAgICAgIC5tYWtlTWV0aG9kKG1ldGhvZClcbiAgICAgICAgLm1ha2VIZWFkZXIoaGVhZGVycylcbiAgICAgICAgLm1ha2VEYXRhKGRhdGEpXG4gICAgICAgIC5idWlsZCgpO1xuXG4gICAgYnVpbGRDb25maWcubG9nZ2VyKGxvZyk7XG5cbiAgICByZXR1cm4gcmVxdWVzdDtcbn1cblxubGV0IGxhc3RSYW5kb21JbmRleDogbnVtYmVyID0gLTE7XG5cbmZ1bmN0aW9uIGdldFJhbmRvbUNvbG9yKCkge1xuICAgIGNvbnN0IGNvbG9ycyA9IFtcInllbGxvd1wiLCBcImJsdWVcIiwgXCJtYWdlbnRhXCIsIFwiY3lhblwiLCBcIndoaXRlXCIsIFwiZ3JheVwiLCBcImdyZXlcIiwgXCJibGFja0JyaWdodFwiLCBcInJlZEJyaWdodFwiLCBcImdyZWVuQnJpZ2h0XCIsIFwieWVsbG93QnJpZ2h0XCIsIFwiYmx1ZUJyaWdodFwiLCBcIm1hZ2VudGFCcmlnaHRcIiwgXCJjeWFuQnJpZ2h0XCIsIFwid2hpdGVCcmlnaHRcIl07XG4gICAgbGV0IHJhbmRvbVRleHRDb2xvckluZGV4XG4gICAgbGV0IHJhbmRvbUJnQ29sb3JJbmRleFxuICAgIGRvIHtcbiAgICAgICAgcmFuZG9tVGV4dENvbG9ySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgICAgICAgcmFuZG9tQmdDb2xvckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCk7XG4gICAgfSB3aGlsZShyYW5kb21CZ0NvbG9ySW5kZXggPT09IHJhbmRvbVRleHRDb2xvckluZGV4IHx8IGxhc3RSYW5kb21JbmRleCA9PT0gcmFuZG9tVGV4dENvbG9ySW5kZXgpO1xuXG4gICAgbGFzdFJhbmRvbUluZGV4ID0gcmFuZG9tVGV4dENvbG9ySW5kZXg7XG4gICAgcmV0dXJuIGNvbG9yc1tyYW5kb21UZXh0Q29sb3JJbmRleF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RMb2dnZXI7XG4iXX0=
