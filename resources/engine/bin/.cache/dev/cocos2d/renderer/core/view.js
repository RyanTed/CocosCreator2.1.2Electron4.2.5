(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/core/view.js';
    var __require = nodeEnv ? function (request) {
        return require(request);
    } : function (request) {
        return __quick_compile__.require(request, __filename);
    };
    function __define(exports, require, module) {
        if (!nodeEnv) {
            __quick_compile__.registerModule(__filename, module);
        }
                'use strict';
        Object.defineProperty(exports, '__esModule', { value: true });
        exports.default = undefined;
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ('value' in descriptor)
                        descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps)
                    defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                    defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _vmath = require('../../core/vmath');
        var _enums = require('../enums');
        var _enums2 = _interopRequireDefault(_enums);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError('Cannot call a class as a function');
            }
        }
        var _m4_tmp = _vmath.mat4.create();
        var _genID = 0;
        var View = function () {
            function View() {
                _classCallCheck(this, View);
                this._id = _genID++;
                this._priority = 0;
                this._rect = {
                    x: 0,
                    y: 0,
                    w: 1,
                    h: 1
                };
                this._color = _vmath.color4.create(0.3, 0.3, 0.3, 1);
                this._depth = 1;
                this._stencil = 0;
                this._clearFlags = _enums2.default.CLEAR_COLOR | _enums2.default.CLEAR_DEPTH;
                this._clearModel = null;
                this._matView = _vmath.mat4.create();
                this._matProj = _vmath.mat4.create();
                this._matViewProj = _vmath.mat4.create();
                this._matInvViewProj = _vmath.mat4.create();
                this._stages = [];
                this._cullingByID = false;
                this._framebuffer = null;
                this._shadowLight = null;
                this._cullingMask = 4294967295;
            }
            _createClass(View, [
                {
                    key: 'getForward',
                    value: function getForward(out) {
                        return _vmath.vec3.set(out, -this._matView.m02, -this._matView.m06, -this._matView.m10);
                    }
                },
                {
                    key: 'getPosition',
                    value: function getPosition(out) {
                        _vmath.mat4.invert(_m4_tmp, this._matView);
                        return _vmath.mat4.getTranslation(out, _m4_tmp);
                    }
                }
            ]);
            return View;
        }();
        exports.default = View;
        module.exports = exports['default'];
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL3JlbmRlcmVyL2NvcmUvdmlldy5qcyJdLCJuYW1lcyI6WyJfbTRfdG1wIiwiY3JlYXRlIiwiX2dlbklEIiwiVmlldyIsIl9pZCIsIl9wcmlvcml0eSIsIl9yZWN0IiwieCIsInkiLCJ3IiwiaCIsIl9jb2xvciIsIl9kZXB0aCIsIl9zdGVuY2lsIiwiX2NsZWFyRmxhZ3MiLCJDTEVBUl9DT0xPUiIsIkNMRUFSX0RFUFRIIiwiX2NsZWFyTW9kZWwiLCJfbWF0VmlldyIsIl9tYXRQcm9qIiwiX21hdFZpZXdQcm9qIiwiX21hdEludlZpZXdQcm9qIiwiX3N0YWdlcyIsIl9jdWxsaW5nQnlJRCIsIl9mcmFtZWJ1ZmZlciIsIl9zaGFkb3dMaWdodCIsIl9jdWxsaW5nTWFzayIsIm91dCIsInNldCIsIm0wMiIsIm0wNiIsIm0xMCIsImludmVydCIsImdldFRyYW5zbGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1FBR0EsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLFlBQUEsaUJBQUEsQ0FBQSxjQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQURBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxrQkFBQSxDQUFBO1FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUEsQ0FBQTs7Ozs7Ozs7OztRQUVBLElBQUlBLE9BQUFBLEdBQVUsTUFBQSxDQUFBLElBQUEsQ0FBS0MsTUFBTCxFQUFkO1FBQ0EsSUFBSUMsTUFBQUEsR0FBUyxDQUFiO1lBS3FCQyxJQUFBQTtZQUluQixTQUFBLElBQUEsR0FBYztBQUFBLGdCQUFBLGVBQUEsQ0FBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO0FBQUEsZ0JBQ1osS0FBS0MsR0FBTCxHQUFXRixNQUFBQSxFQUFYLENBRFk7QUFBQSxnQkFJWixLQUFLRyxTQUFMLEdBQWlCLENBQWpCLENBSlk7QUFBQSxnQkFPWixLQUFLQyxLQUFMLEdBQWE7QUFBQSxvQkFDWEMsQ0FBQUEsRUFBRyxDQURRO0FBQUEsb0JBQ0xDLENBQUFBLEVBQUcsQ0FERTtBQUFBLG9CQUNDQyxDQUFBQSxFQUFHLENBREo7QUFBQSxvQkFDT0MsQ0FBQUEsRUFBRyxDQURWO0FBQUEsaUJBQWIsQ0FQWTtBQUFBLGdCQWlCWixLQUFLQyxNQUFMLEdBQWMsTUFBQSxDQUFBLE1BQUEsQ0FBT1YsTUFBUCxDQUFjLEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsQ0FBN0IsQ0FBZCxDQWpCWTtBQUFBLGdCQWtCWixLQUFLVyxNQUFMLEdBQWMsQ0FBZCxDQWxCWTtBQUFBLGdCQW1CWixLQUFLQyxRQUFMLEdBQWdCLENBQWhCLENBbkJZO0FBQUEsZ0JBb0JaLEtBQUtDLFdBQUwsR0FBbUIsT0FBQSxDQUFBLE9BQUEsQ0FBTUMsV0FBTixHQUFvQixPQUFBLENBQUEsT0FBQSxDQUFNQyxXQUE3QyxDQXBCWTtBQUFBLGdCQXFCWixLQUFLQyxXQUFMLEdBQW1CLElBQW5CLENBckJZO0FBQUEsZ0JBd0JaLEtBQUtDLFFBQUwsR0FBZ0IsTUFBQSxDQUFBLElBQUEsQ0FBS2pCLE1BQUwsRUFBaEIsQ0F4Qlk7QUFBQSxnQkF5QlosS0FBS2tCLFFBQUwsR0FBZ0IsTUFBQSxDQUFBLElBQUEsQ0FBS2xCLE1BQUwsRUFBaEIsQ0F6Qlk7QUFBQSxnQkEwQlosS0FBS21CLFlBQUwsR0FBb0IsTUFBQSxDQUFBLElBQUEsQ0FBS25CLE1BQUwsRUFBcEIsQ0ExQlk7QUFBQSxnQkEyQlosS0FBS29CLGVBQUwsR0FBdUIsTUFBQSxDQUFBLElBQUEsQ0FBS3BCLE1BQUwsRUFBdkIsQ0EzQlk7QUFBQSxnQkE4QlosS0FBS3FCLE9BQUwsR0FBZSxFQUFmLENBOUJZO0FBQUEsZ0JBK0JaLEtBQUtDLFlBQUwsR0FBb0IsS0FBcEIsQ0EvQlk7QUFBQSxnQkFnQ1osS0FBS0MsWUFBTCxHQUFvQixJQUFwQixDQWhDWTtBQUFBLGdCQWtDWixLQUFLQyxZQUFMLEdBQW9CLElBQXBCLENBbENZO0FBQUEsZ0JBb0NaLEtBQUtDLFlBQUwsR0FBb0IsVUFBcEIsQ0FwQ1k7QUFBQTs7OzsrQ0E0Q0hDLEtBQUs7QUFBQSx3QkFDZCxPQUFPLE1BQUEsQ0FBQSxJQUFBLENBQUtDLEdBQUwsQ0FDTEQsR0FESyxFQUVMLENBQUMsS0FBS1QsUUFBTCxDQUFjVyxHQUZWLEVBR0wsQ0FBQyxLQUFLWCxRQUFMLENBQWNZLEdBSFYsRUFJTCxDQUFDLEtBQUtaLFFBQUwsQ0FBY2EsR0FKVixDQUFQLENBRGM7QUFBQTs7OztnREFjSkosS0FBSztBQUFBLHdCQUNmLE1BQUEsQ0FBQSxJQUFBLENBQUtLLE1BQUwsQ0FBWWhDLE9BQVosRUFBcUIsS0FBS2tCLFFBQTFCLEVBRGU7QUFBQSx3QkFFZixPQUFPLE1BQUEsQ0FBQSxJQUFBLENBQUtlLGNBQUwsQ0FBb0JOLEdBQXBCLEVBQXlCM0IsT0FBekIsQ0FBUCxDQUZlO0FBQUE7Ozs7OzBCQTlERUciLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuaW1wb3J0IHsgdmVjMywgY29sb3I0LCBtYXQ0IH0gZnJvbSAnLi4vLi4vY29yZS92bWF0aCc7XHJcbmltcG9ydCBlbnVtcyBmcm9tICcuLi9lbnVtcyc7XHJcblxyXG5sZXQgX200X3RtcCA9IG1hdDQuY3JlYXRlKCk7XHJcbmxldCBfZ2VuSUQgPSAwO1xyXG5cclxuLyoqXHJcbiAqIEEgcmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgY2FtZXJhIHZpZXdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcge1xyXG4gIC8qKlxyXG4gICAqIFNldHVwIGEgZGVmYXVsdCB2aWV3XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9pZCA9IF9nZW5JRCsrO1xyXG5cclxuICAgIC8vIHByaW9yaXR5LiB0aGUgc21hbGxlciBvbmUgd2lsbCBiZSByZW5kZXJlZCBmaXJzdFxyXG4gICAgdGhpcy5fcHJpb3JpdHkgPSAwO1xyXG5cclxuICAgIC8vIHZpZXdwb3J0XHJcbiAgICB0aGlzLl9yZWN0ID0ge1xyXG4gICAgICB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFRPRE86XHJcbiAgICAvLyB0aGlzLl9zY2lzc29yID0ge1xyXG4gICAgLy8gICB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGNsZWFyIG9wdGlvbnNcclxuICAgIHRoaXMuX2NvbG9yID0gY29sb3I0LmNyZWF0ZSgwLjMsIDAuMywgMC4zLCAxKTtcclxuICAgIHRoaXMuX2RlcHRoID0gMTtcclxuICAgIHRoaXMuX3N0ZW5jaWwgPSAwO1xyXG4gICAgdGhpcy5fY2xlYXJGbGFncyA9IGVudW1zLkNMRUFSX0NPTE9SIHwgZW51bXMuQ0xFQVJfREVQVEg7XHJcbiAgICB0aGlzLl9jbGVhck1vZGVsID0gbnVsbDtcclxuXHJcbiAgICAvLyBtYXRyaXhcclxuICAgIHRoaXMuX21hdFZpZXcgPSBtYXQ0LmNyZWF0ZSgpO1xyXG4gICAgdGhpcy5fbWF0UHJvaiA9IG1hdDQuY3JlYXRlKCk7XHJcbiAgICB0aGlzLl9tYXRWaWV3UHJvaiA9IG1hdDQuY3JlYXRlKCk7XHJcbiAgICB0aGlzLl9tYXRJbnZWaWV3UHJvaiA9IG1hdDQuY3JlYXRlKCk7XHJcblxyXG4gICAgLy8gc3RhZ2VzICYgZnJhbWVidWZmZXJcclxuICAgIHRoaXMuX3N0YWdlcyA9IFtdO1xyXG4gICAgdGhpcy5fY3VsbGluZ0J5SUQgPSBmYWxzZTtcclxuICAgIHRoaXMuX2ZyYW1lYnVmZmVyID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLl9zaGFkb3dMaWdodCA9IG51bGw7IC8vIFRPRE86IHNob3VsZCBub3QgcmVmZXIgbGlnaHQgaW4gdmlldy5cclxuXHJcbiAgICB0aGlzLl9jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIHZpZXcncyBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAgICogQHJldHVybnMge3ZlYzN9IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAgICovXHJcbiAgZ2V0Rm9yd2FyZChvdXQpIHtcclxuICAgIHJldHVybiB2ZWMzLnNldChcclxuICAgICAgb3V0LFxyXG4gICAgICAtdGhpcy5fbWF0Vmlldy5tMDIsXHJcbiAgICAgIC10aGlzLl9tYXRWaWV3Lm0wNixcclxuICAgICAgLXRoaXMuX21hdFZpZXcubTEwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB2aWV3J3Mgb2JzZXJ2aW5nIGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICAgKiBAcmV0dXJucyB7dmVjM30gdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICAgKi9cclxuICBnZXRQb3NpdGlvbihvdXQpIHtcclxuICAgIG1hdDQuaW52ZXJ0KF9tNF90bXAsIHRoaXMuX21hdFZpZXcpO1xyXG4gICAgcmV0dXJuIG1hdDQuZ2V0VHJhbnNsYXRpb24ob3V0LCBfbTRfdG1wKTtcclxuICB9XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpOyAvLyBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cblxudmFyIF92bWF0aCA9IHJlcXVpcmUoJy4uLy4uL2NvcmUvdm1hdGgnKTtcblxudmFyIF9lbnVtcyA9IHJlcXVpcmUoJy4uL2VudW1zJyk7XG5cbnZhciBfZW51bXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW51bXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgX200X3RtcCA9IF92bWF0aC5tYXQ0LmNyZWF0ZSgpO1xudmFyIF9nZW5JRCA9IDA7XG5cbi8qKlxyXG4gKiBBIHJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGNhbWVyYSB2aWV3XHJcbiAqL1xuXG52YXIgVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXHJcbiAgICogU2V0dXAgYSBkZWZhdWx0IHZpZXdcclxuICAgKi9cbiAgZnVuY3Rpb24gVmlldygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlldyk7XG5cbiAgICB0aGlzLl9pZCA9IF9nZW5JRCsrO1xuXG4gICAgLy8gcHJpb3JpdHkuIHRoZSBzbWFsbGVyIG9uZSB3aWxsIGJlIHJlbmRlcmVkIGZpcnN0XG4gICAgdGhpcy5fcHJpb3JpdHkgPSAwO1xuXG4gICAgLy8gdmlld3BvcnRcbiAgICB0aGlzLl9yZWN0ID0ge1xuICAgICAgeDogMCwgeTogMCwgdzogMSwgaDogMVxuICAgIH07XG5cbiAgICAvLyBUT0RPOlxuICAgIC8vIHRoaXMuX3NjaXNzb3IgPSB7XG4gICAgLy8gICB4OiAwLCB5OiAwLCB3OiAxLCBoOiAxXG4gICAgLy8gfTtcblxuICAgIC8vIGNsZWFyIG9wdGlvbnNcbiAgICB0aGlzLl9jb2xvciA9IF92bWF0aC5jb2xvcjQuY3JlYXRlKDAuMywgMC4zLCAwLjMsIDEpO1xuICAgIHRoaXMuX2RlcHRoID0gMTtcbiAgICB0aGlzLl9zdGVuY2lsID0gMDtcbiAgICB0aGlzLl9jbGVhckZsYWdzID0gX2VudW1zMi5kZWZhdWx0LkNMRUFSX0NPTE9SIHwgX2VudW1zMi5kZWZhdWx0LkNMRUFSX0RFUFRIO1xuICAgIHRoaXMuX2NsZWFyTW9kZWwgPSBudWxsO1xuXG4gICAgLy8gbWF0cml4XG4gICAgdGhpcy5fbWF0VmlldyA9IF92bWF0aC5tYXQ0LmNyZWF0ZSgpO1xuICAgIHRoaXMuX21hdFByb2ogPSBfdm1hdGgubWF0NC5jcmVhdGUoKTtcbiAgICB0aGlzLl9tYXRWaWV3UHJvaiA9IF92bWF0aC5tYXQ0LmNyZWF0ZSgpO1xuICAgIHRoaXMuX21hdEludlZpZXdQcm9qID0gX3ZtYXRoLm1hdDQuY3JlYXRlKCk7XG5cbiAgICAvLyBzdGFnZXMgJiBmcmFtZWJ1ZmZlclxuICAgIHRoaXMuX3N0YWdlcyA9IFtdO1xuICAgIHRoaXMuX2N1bGxpbmdCeUlEID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhbWVidWZmZXIgPSBudWxsO1xuXG4gICAgdGhpcy5fc2hhZG93TGlnaHQgPSBudWxsOyAvLyBUT0RPOiBzaG91bGQgbm90IHJlZmVyIGxpZ2h0IGluIHZpZXcuXG5cbiAgICB0aGlzLl9jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmY7XG4gIH1cblxuICAvKipcclxuICAgKiBHZXQgdGhlIHZpZXcncyBmb3J3YXJkIGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAgICogQHJldHVybnMge3ZlYzN9IHRoZSByZWNlaXZpbmcgdmVjdG9yXHJcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVmlldywgW3tcbiAgICBrZXk6ICdnZXRGb3J3YXJkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9yd2FyZChvdXQpIHtcbiAgICAgIHJldHVybiBfdm1hdGgudmVjMy5zZXQob3V0LCAtdGhpcy5fbWF0Vmlldy5tMDIsIC10aGlzLl9tYXRWaWV3Lm0wNiwgLXRoaXMuX21hdFZpZXcubTEwKTtcbiAgICB9XG5cbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmlldydzIG9ic2VydmluZyBsb2NhdGlvblxyXG4gICAgICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcclxuICAgICAqIEByZXR1cm5zIHt2ZWMzfSB0aGUgcmVjZWl2aW5nIHZlY3RvclxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFBvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UG9zaXRpb24ob3V0KSB7XG4gICAgICBfdm1hdGgubWF0NC5pbnZlcnQoX200X3RtcCwgdGhpcy5fbWF0Vmlldyk7XG4gICAgICByZXR1cm4gX3ZtYXRoLm1hdDQuZ2V0VHJhbnNsYXRpb24ob3V0LCBfbTRfdG1wKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlldztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVmlldztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5acFpYY3Vhbk1pWFN3aWJtRnRaWE1pT2xzaVgyMDBYM1J0Y0NJc0ltTnlaV0YwWlNJc0lsOW5aVzVKUkNJc0lsWnBaWGNpTENKZmFXUWlMQ0pmY0hKcGIzSnBkSGtpTENKZmNtVmpkQ0lzSW5naUxDSjVJaXdpZHlJc0ltZ2lMQ0pmWTI5c2IzSWlMQ0pmWkdWd2RHZ2lMQ0pmYzNSbGJtTnBiQ0lzSWw5amJHVmhja1pzWVdkeklpd2lRMHhGUVZKZlEwOU1UMUlpTENKRFRFVkJVbDlFUlZCVVNDSXNJbDlqYkdWaGNrMXZaR1ZzSWl3aVgyMWhkRlpwWlhjaUxDSmZiV0YwVUhKdmFpSXNJbDl0WVhSV2FXVjNVSEp2YWlJc0lsOXRZWFJKYm5aV2FXVjNVSEp2YWlJc0lsOXpkR0ZuWlhNaUxDSmZZM1ZzYkdsdVowSjVTVVFpTENKZlpuSmhiV1ZpZFdabVpYSWlMQ0pmYzJoaFpHOTNUR2xuYUhRaUxDSmZZM1ZzYkdsdVowMWhjMnNpTENKdmRYUWlMQ0p6WlhRaUxDSnRNRElpTENKdE1EWWlMQ0p0TVRBaUxDSnBiblpsY25RaUxDSm5aWFJVY21GdWMyeGhkR2x2YmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dHhha0pCUVVFN08wRkJSVUU3TzBGQlEwRTdPenM3T3pzN08wRkJSVUVzU1VGQlNVRXNWVUZCVlN4WlFVRkxReXhOUVVGTUxFVkJRV1E3UVVGRFFTeEpRVUZKUXl4VFFVRlRMRU5CUVdJN08wRkJSVUU3T3pzN1NVRkhjVUpETEVrN1FVRkRia0k3T3p0QlFVZEJMR3RDUVVGak8wRkJRVUU3TzBGQlExb3NVMEZCUzBNc1IwRkJUQ3hIUVVGWFJpeFJRVUZZT3p0QlFVVkJPMEZCUTBFc1UwRkJTMGNzVTBGQlRDeEhRVUZwUWl4RFFVRnFRanM3UVVGRlFUdEJRVU5CTEZOQlFVdERMRXRCUVV3c1IwRkJZVHRCUVVOWVF5eFRRVUZITEVOQlJGRXNSVUZEVEVNc1IwRkJSeXhEUVVSRkxFVkJRME5ETEVkQlFVY3NRMEZFU2l4RlFVTlBReXhIUVVGSE8wRkJSRllzUzBGQllqczdRVUZKUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEZOQlFVdERMRTFCUVV3c1IwRkJZeXhqUVVGUFZpeE5RVUZRTEVOQlFXTXNSMEZCWkN4RlFVRnRRaXhIUVVGdVFpeEZRVUYzUWl4SFFVRjRRaXhGUVVFMlFpeERRVUUzUWl4RFFVRmtPMEZCUTBFc1UwRkJTMWNzVFVGQlRDeEhRVUZqTEVOQlFXUTdRVUZEUVN4VFFVRkxReXhSUVVGTUxFZEJRV2RDTEVOQlFXaENPMEZCUTBFc1UwRkJTME1zVjBGQlRDeEhRVUZ0UWl4blFrRkJUVU1zVjBGQlRpeEhRVUZ2UWl4blFrRkJUVU1zVjBGQk4wTTdRVUZEUVN4VFFVRkxReXhYUVVGTUxFZEJRVzFDTEVsQlFXNUNPenRCUVVWQk8wRkJRMEVzVTBGQlMwTXNVVUZCVEN4SFFVRm5RaXhaUVVGTGFrSXNUVUZCVEN4RlFVRm9RanRCUVVOQkxGTkJRVXRyUWl4UlFVRk1MRWRCUVdkQ0xGbEJRVXRzUWl4TlFVRk1MRVZCUVdoQ08wRkJRMEVzVTBGQlMyMUNMRmxCUVV3c1IwRkJiMElzV1VGQlMyNUNMRTFCUVV3c1JVRkJjRUk3UVVGRFFTeFRRVUZMYjBJc1pVRkJUQ3hIUVVGMVFpeFpRVUZMY0VJc1RVRkJUQ3hGUVVGMlFqczdRVUZGUVR0QlFVTkJMRk5CUVV0eFFpeFBRVUZNTEVkQlFXVXNSVUZCWmp0QlFVTkJMRk5CUVV0RExGbEJRVXdzUjBGQmIwSXNTMEZCY0VJN1FVRkRRU3hUUVVGTFF5eFpRVUZNTEVkQlFXOUNMRWxCUVhCQ096dEJRVVZCTEZOQlFVdERMRmxCUVV3c1IwRkJiMElzU1VGQmNFSXNRMEZzUTFrc1EwRnJRMk03TzBGQlJURkNMRk5CUVV0RExGbEJRVXdzUjBGQmIwSXNWVUZCY0VJN1FVRkRSRHM3UVVGRlJEczdPenM3T3pzN095dENRVXRYUXl4SExFVkJRVXM3UVVGRFpDeGhRVUZQTEZsQlFVdERMRWRCUVV3c1EwRkRURVFzUjBGRVN5eEZRVVZNTEVOQlFVTXNTMEZCUzFRc1VVRkJUQ3hEUVVGalZ5eEhRVVpXTEVWQlIwd3NRMEZCUXl4TFFVRkxXQ3hSUVVGTUxFTkJRV05aTEVkQlNGWXNSVUZKVEN4RFFVRkRMRXRCUVV0YUxGRkJRVXdzUTBGQlkyRXNSMEZLVml4RFFVRlFPMEZCVFVRN08wRkJSVVE3T3pzN096czdPMmREUVV0WlNpeEhMRVZCUVVzN1FVRkRaaXhyUWtGQlMwc3NUVUZCVEN4RFFVRlphRU1zVDBGQldpeEZRVUZ4UWl4TFFVRkxhMElzVVVGQk1VSTdRVUZEUVN4aFFVRlBMRmxCUVV0bExHTkJRVXdzUTBGQmIwSk9MRWRCUVhCQ0xFVkJRWGxDTTBJc1QwRkJla0lzUTBGQlVEdEJRVU5FT3pzN096czdhMEpCYWtWclFrY3NTU0lzSW1acGJHVWlPaUoyYVdWM0xtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1EyOXdlWEpwWjJoMElDaGpLU0F5TURFM0xUSXdNVGdnV0dsaGJXVnVJRmxoYW1rZ1UyOW1kSGRoY21VZ1EyOHVMQ0JNZEdRdVhISmNibHh5WEc1cGJYQnZjblFnZXlCMlpXTXpMQ0JqYjJ4dmNqUXNJRzFoZERRZ2ZTQm1jbTl0SUNjdUxpOHVMaTlqYjNKbEwzWnRZWFJvSnp0Y2NseHVhVzF3YjNKMElHVnVkVzF6SUdaeWIyMGdKeTR1TDJWdWRXMXpKenRjY2x4dVhISmNibXhsZENCZmJUUmZkRzF3SUQwZ2JXRjBOQzVqY21WaGRHVW9LVHRjY2x4dWJHVjBJRjluWlc1SlJDQTlJREE3WEhKY2JseHlYRzR2S2lwY2NseHVJQ29nUVNCeVpYQnlaWE5sYm5SaGRHbHZiaUJ2WmlCaElITnBibWRzWlNCallXMWxjbUVnZG1sbGQxeHlYRzRnS2k5Y2NseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVm1sbGR5QjdYSEpjYmlBZ0x5b3FYSEpjYmlBZ0lDb2dVMlYwZFhBZ1lTQmtaV1poZFd4MElIWnBaWGRjY2x4dUlDQWdLaTljY2x4dUlDQmpiMjV6ZEhKMVkzUnZjaWdwSUh0Y2NseHVJQ0FnSUhSb2FYTXVYMmxrSUQwZ1gyZGxia2xFS3lzN1hISmNibHh5WEc0Z0lDQWdMeThnY0hKcGIzSnBkSGt1SUhSb1pTQnpiV0ZzYkdWeUlHOXVaU0IzYVd4c0lHSmxJSEpsYm1SbGNtVmtJR1pwY25OMFhISmNiaUFnSUNCMGFHbHpMbDl3Y21sdmNtbDBlU0E5SURBN1hISmNibHh5WEc0Z0lDQWdMeThnZG1sbGQzQnZjblJjY2x4dUlDQWdJSFJvYVhNdVgzSmxZM1FnUFNCN1hISmNiaUFnSUNBZ0lIZzZJREFzSUhrNklEQXNJSGM2SURFc0lHZzZJREZjY2x4dUlDQWdJSDA3WEhKY2JseHlYRzRnSUNBZ0x5OGdWRTlFVHpwY2NseHVJQ0FnSUM4dklIUm9hWE11WDNOamFYTnpiM0lnUFNCN1hISmNiaUFnSUNBdkx5QWdJSGc2SURBc0lIazZJREFzSUhjNklERXNJR2c2SURGY2NseHVJQ0FnSUM4dklIMDdYSEpjYmx4eVhHNGdJQ0FnTHk4Z1kyeGxZWElnYjNCMGFXOXVjMXh5WEc0Z0lDQWdkR2hwY3k1ZlkyOXNiM0lnUFNCamIyeHZjalF1WTNKbFlYUmxLREF1TXl3Z01DNHpMQ0F3TGpNc0lERXBPMXh5WEc0Z0lDQWdkR2hwY3k1ZlpHVndkR2dnUFNBeE8xeHlYRzRnSUNBZ2RHaHBjeTVmYzNSbGJtTnBiQ0E5SURBN1hISmNiaUFnSUNCMGFHbHpMbDlqYkdWaGNrWnNZV2R6SUQwZ1pXNTFiWE11UTB4RlFWSmZRMDlNVDFJZ2ZDQmxiblZ0Y3k1RFRFVkJVbDlFUlZCVVNEdGNjbHh1SUNBZ0lIUm9hWE11WDJOc1pXRnlUVzlrWld3Z1BTQnVkV3hzTzF4eVhHNWNjbHh1SUNBZ0lDOHZJRzFoZEhKcGVGeHlYRzRnSUNBZ2RHaHBjeTVmYldGMFZtbGxkeUE5SUcxaGREUXVZM0psWVhSbEtDazdYSEpjYmlBZ0lDQjBhR2x6TGw5dFlYUlFjbTlxSUQwZ2JXRjBOQzVqY21WaGRHVW9LVHRjY2x4dUlDQWdJSFJvYVhNdVgyMWhkRlpwWlhkUWNtOXFJRDBnYldGME5DNWpjbVZoZEdVb0tUdGNjbHh1SUNBZ0lIUm9hWE11WDIxaGRFbHVkbFpwWlhkUWNtOXFJRDBnYldGME5DNWpjbVZoZEdVb0tUdGNjbHh1WEhKY2JpQWdJQ0F2THlCemRHRm5aWE1nSmlCbWNtRnRaV0oxWm1abGNseHlYRzRnSUNBZ2RHaHBjeTVmYzNSaFoyVnpJRDBnVzEwN1hISmNiaUFnSUNCMGFHbHpMbDlqZFd4c2FXNW5RbmxKUkNBOUlHWmhiSE5sTzF4eVhHNGdJQ0FnZEdocGN5NWZabkpoYldWaWRXWm1aWElnUFNCdWRXeHNPMXh5WEc1Y2NseHVJQ0FnSUhSb2FYTXVYM05vWVdSdmQweHBaMmgwSUQwZ2JuVnNiRHNnTHk4Z1ZFOUVUem9nYzJodmRXeGtJRzV2ZENCeVpXWmxjaUJzYVdkb2RDQnBiaUIyYVdWM0xseHlYRzVjY2x4dUlDQWdJSFJvYVhNdVgyTjFiR3hwYm1kTllYTnJJRDBnTUhobVptWm1abVptWmp0Y2NseHVJQ0I5WEhKY2JseHlYRzRnSUM4cUtseHlYRzRnSUNBcUlFZGxkQ0IwYUdVZ2RtbGxkeWR6SUdadmNuZGhjbVFnWkdseVpXTjBhVzl1WEhKY2JpQWdJQ29nUUhCaGNtRnRJSHQyWldNemZTQnZkWFFnZEdobElISmxZMlZwZG1sdVp5QjJaV04wYjNKY2NseHVJQ0FnS2lCQWNtVjBkWEp1Y3lCN2RtVmpNMzBnZEdobElISmxZMlZwZG1sdVp5QjJaV04wYjNKY2NseHVJQ0FnS2k5Y2NseHVJQ0JuWlhSR2IzSjNZWEprS0c5MWRDa2dlMXh5WEc0Z0lDQWdjbVYwZFhKdUlIWmxZek11YzJWMEtGeHlYRzRnSUNBZ0lDQnZkWFFzWEhKY2JpQWdJQ0FnSUMxMGFHbHpMbDl0WVhSV2FXVjNMbTB3TWl4Y2NseHVJQ0FnSUNBZ0xYUm9hWE11WDIxaGRGWnBaWGN1YlRBMkxGeHlYRzRnSUNBZ0lDQXRkR2hwY3k1ZmJXRjBWbWxsZHk1dE1UQmNjbHh1SUNBZ0lDazdYSEpjYmlBZ2ZWeHlYRzVjY2x4dUlDQXZLaXBjY2x4dUlDQWdLaUJIWlhRZ2RHaGxJSFpwWlhjbmN5QnZZbk5sY25acGJtY2diRzlqWVhScGIyNWNjbHh1SUNBZ0tpQkFjR0Z5WVcwZ2UzWmxZek45SUc5MWRDQjBhR1VnY21WalpXbDJhVzVuSUhabFkzUnZjbHh5WEc0Z0lDQXFJRUJ5WlhSMWNtNXpJSHQyWldNemZTQjBhR1VnY21WalpXbDJhVzVuSUhabFkzUnZjbHh5WEc0Z0lDQXFMMXh5WEc0Z0lHZGxkRkJ2YzJsMGFXOXVLRzkxZENrZ2UxeHlYRzRnSUNBZ2JXRjBOQzVwYm5abGNuUW9YMjAwWDNSdGNDd2dkR2hwY3k1ZmJXRjBWbWxsZHlrN1hISmNiaUFnSUNCeVpYUjFjbTRnYldGME5DNW5aWFJVY21GdWMyeGhkR2x2YmlodmRYUXNJRjl0TkY5MGJYQXBPMXh5WEc0Z0lIMWNjbHh1ZlZ4eVhHNGlYWDA9Il19