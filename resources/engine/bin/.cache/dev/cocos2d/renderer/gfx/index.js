(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/renderer/gfx/index.js';
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
        var _enums = require('./enums');
        var _vertexFormat = require('./vertex-format');
        var _vertexFormat2 = _interopRequireDefault(_vertexFormat);
        var _indexBuffer = require('./index-buffer');
        var _indexBuffer2 = _interopRequireDefault(_indexBuffer);
        var _vertexBuffer = require('./vertex-buffer');
        var _vertexBuffer2 = _interopRequireDefault(_vertexBuffer);
        var _program = require('./program');
        var _program2 = _interopRequireDefault(_program);
        var _texture = require('./texture');
        var _texture2 = _interopRequireDefault(_texture);
        var _texture2d = require('./texture-2d');
        var _texture2d2 = _interopRequireDefault(_texture2d);
        var _textureCube = require('./texture-cube');
        var _textureCube2 = _interopRequireDefault(_textureCube);
        var _renderBuffer = require('./render-buffer');
        var _renderBuffer2 = _interopRequireDefault(_renderBuffer);
        var _frameBuffer = require('./frame-buffer');
        var _frameBuffer2 = _interopRequireDefault(_frameBuffer);
        var _device = require('./device');
        var _device2 = _interopRequireDefault(_device);
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }
        var gfx = {
            VertexFormat: _vertexFormat2.default,
            IndexBuffer: _indexBuffer2.default,
            VertexBuffer: _vertexBuffer2.default,
            Program: _program2.default,
            Texture: _texture2.default,
            Texture2D: _texture2d2.default,
            TextureCube: _textureCube2.default,
            RenderBuffer: _renderBuffer2.default,
            FrameBuffer: _frameBuffer2.default,
            Device: _device2.default,
            attrTypeBytes: _enums.attrTypeBytes,
            glFilter: _enums.glFilter,
            glTextureFmt: _enums.glTextureFmt
        };
        Object.assign(gfx, _enums.enums);
        exports.default = gfx;
        cc.gfx = gfx;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9yZW5kZXJlci9nZngvaW5kZXguanMiXSwibmFtZXMiOlsiZ2Z4IiwiVmVydGV4Rm9ybWF0IiwiSW5kZXhCdWZmZXIiLCJWZXJ0ZXhCdWZmZXIiLCJQcm9ncmFtIiwiVGV4dHVyZSIsIlRleHR1cmUyRCIsIlRleHR1cmVDdWJlIiwiUmVuZGVyQnVmZmVyIiwiRnJhbWVCdWZmZXIiLCJEZXZpY2UiLCJhdHRyVHlwZUJ5dGVzIiwiZ2xGaWx0ZXIiLCJnbFRleHR1cmVGbXQiLCJPYmplY3QiLCJhc3NpZ24iLCJjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFBQSxPQUFBLE9BQUEsQ0FBQSxPQUFBLENBQUE7O1FBT0EsT0FBQSxpQkFBQSxDQUFBLE9BQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQSxDQUFBOzs7Ozs7OztRQVBBLElBQUEsTUFBQSxHQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUE7UUFPQSxJQUFBLGFBQUEsR0FBQSxPQUFBLENBQUEsaUJBQUEsQ0FBQTs7UUFDQSxJQUFBLFlBQUEsR0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQTs7UUFDQSxJQUFBLGFBQUEsR0FBQSxPQUFBLENBQUEsaUJBQUEsQ0FBQTs7UUFDQSxJQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsV0FBQSxDQUFBOztRQUNBLElBQUEsUUFBQSxHQUFBLE9BQUEsQ0FBQSxXQUFBLENBQUE7O1FBQ0EsSUFBQSxVQUFBLEdBQUEsT0FBQSxDQUFBLGNBQUEsQ0FBQTs7UUFDQSxJQUFBLFlBQUEsR0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQTs7UUFDQSxJQUFBLGFBQUEsR0FBQSxPQUFBLENBQUEsaUJBQUEsQ0FBQTs7UUFDQSxJQUFBLFlBQUEsR0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQTs7UUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxDQUFBOzs7OztRQUVBLElBQUlBLEdBQUFBLEdBQU07QUFBQSxZQUVSQyxZQUFBQSxFQUFBQSxjQUFBQSxDQUFBQSxPQUZRO0FBQUEsWUFHUkMsV0FBQUEsRUFBQUEsYUFBQUEsQ0FBQUEsT0FIUTtBQUFBLFlBSVJDLFlBQUFBLEVBQUFBLGNBQUFBLENBQUFBLE9BSlE7QUFBQSxZQUtSQyxPQUFBQSxFQUFBQSxTQUFBQSxDQUFBQSxPQUxRO0FBQUEsWUFNUkMsT0FBQUEsRUFBQUEsU0FBQUEsQ0FBQUEsT0FOUTtBQUFBLFlBT1JDLFNBQUFBLEVBQUFBLFdBQUFBLENBQUFBLE9BUFE7QUFBQSxZQVFSQyxXQUFBQSxFQUFBQSxhQUFBQSxDQUFBQSxPQVJRO0FBQUEsWUFTUkMsWUFBQUEsRUFBQUEsY0FBQUEsQ0FBQUEsT0FUUTtBQUFBLFlBVVJDLFdBQUFBLEVBQUFBLGFBQUFBLENBQUFBLE9BVlE7QUFBQSxZQVdSQyxNQUFBQSxFQUFBQSxRQUFBQSxDQUFBQSxPQVhRO0FBQUEsWUFjUkMsYUFBQUEsRUFBQUEsTUFBQUEsQ0FBQUEsYUFkUTtBQUFBLFlBZVJDLFFBQUFBLEVBQUFBLE1BQUFBLENBQUFBLFFBZlE7QUFBQSxZQWdCUkMsWUFBQUEsRUFBQUEsTUFBQUEsQ0FBQUEsWUFoQlE7QUFBQSxTQUFWO1FBa0JBQyxNQUFBQSxDQUFPQyxNQUFQRCxDQUFjZCxHQUFkYyxFQUFBLE1BQUEsQ0FBQSxLQUFBQTswQkFFZWQ7UUFDZmdCLEVBQUFBLENBQUdoQixHQUFIZ0IsR0FBU2hCLEdBQVRnQjs7Ozs7V0E5QkE7QUFBQTs7V0FBQTtBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBlbnVtcyxcclxuICBhdHRyVHlwZUJ5dGVzLFxyXG4gIGdsRmlsdGVyLFxyXG4gIGdsVGV4dHVyZUZtdCxcclxufSBmcm9tICcuL2VudW1zJztcclxuXHJcbmltcG9ydCBWZXJ0ZXhGb3JtYXQgZnJvbSAnLi92ZXJ0ZXgtZm9ybWF0JztcclxuaW1wb3J0IEluZGV4QnVmZmVyIGZyb20gJy4vaW5kZXgtYnVmZmVyJztcclxuaW1wb3J0IFZlcnRleEJ1ZmZlciBmcm9tICcuL3ZlcnRleC1idWZmZXInO1xyXG5pbXBvcnQgUHJvZ3JhbSBmcm9tICcuL3Byb2dyYW0nO1xyXG5pbXBvcnQgVGV4dHVyZSBmcm9tICcuL3RleHR1cmUnO1xyXG5pbXBvcnQgVGV4dHVyZTJEIGZyb20gJy4vdGV4dHVyZS0yZCc7XHJcbmltcG9ydCBUZXh0dXJlQ3ViZSBmcm9tICcuL3RleHR1cmUtY3ViZSc7XHJcbmltcG9ydCBSZW5kZXJCdWZmZXIgZnJvbSAnLi9yZW5kZXItYnVmZmVyJztcclxuaW1wb3J0IEZyYW1lQnVmZmVyIGZyb20gJy4vZnJhbWUtYnVmZmVyJztcclxuaW1wb3J0IERldmljZSBmcm9tICcuL2RldmljZSc7XHJcblxyXG5sZXQgZ2Z4ID0ge1xyXG4gIC8vIGNsYXNzZXNcclxuICBWZXJ0ZXhGb3JtYXQsXHJcbiAgSW5kZXhCdWZmZXIsXHJcbiAgVmVydGV4QnVmZmVyLFxyXG4gIFByb2dyYW0sXHJcbiAgVGV4dHVyZSxcclxuICBUZXh0dXJlMkQsXHJcbiAgVGV4dHVyZUN1YmUsXHJcbiAgUmVuZGVyQnVmZmVyLFxyXG4gIEZyYW1lQnVmZmVyLFxyXG4gIERldmljZSxcclxuXHJcbiAgLy8gZnVuY3Rpb25zXHJcbiAgYXR0clR5cGVCeXRlcyxcclxuICBnbEZpbHRlcixcclxuICBnbFRleHR1cmVGbXQsXHJcbn07XHJcbk9iamVjdC5hc3NpZ24oZ2Z4LCBlbnVtcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZng7XHJcbmNjLmdmeCA9IGdmeDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2VudW1zID0gcmVxdWlyZSgnLi9lbnVtcycpO1xuXG52YXIgX3ZlcnRleEZvcm1hdCA9IHJlcXVpcmUoJy4vdmVydGV4LWZvcm1hdCcpO1xuXG52YXIgX3ZlcnRleEZvcm1hdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92ZXJ0ZXhGb3JtYXQpO1xuXG52YXIgX2luZGV4QnVmZmVyID0gcmVxdWlyZSgnLi9pbmRleC1idWZmZXInKTtcblxudmFyIF9pbmRleEJ1ZmZlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmRleEJ1ZmZlcik7XG5cbnZhciBfdmVydGV4QnVmZmVyID0gcmVxdWlyZSgnLi92ZXJ0ZXgtYnVmZmVyJyk7XG5cbnZhciBfdmVydGV4QnVmZmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZlcnRleEJ1ZmZlcik7XG5cbnZhciBfcHJvZ3JhbSA9IHJlcXVpcmUoJy4vcHJvZ3JhbScpO1xuXG52YXIgX3Byb2dyYW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvZ3JhbSk7XG5cbnZhciBfdGV4dHVyZSA9IHJlcXVpcmUoJy4vdGV4dHVyZScpO1xuXG52YXIgX3RleHR1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV4dHVyZSk7XG5cbnZhciBfdGV4dHVyZTJkID0gcmVxdWlyZSgnLi90ZXh0dXJlLTJkJyk7XG5cbnZhciBfdGV4dHVyZTJkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmUyZCk7XG5cbnZhciBfdGV4dHVyZUN1YmUgPSByZXF1aXJlKCcuL3RleHR1cmUtY3ViZScpO1xuXG52YXIgX3RleHR1cmVDdWJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RleHR1cmVDdWJlKTtcblxudmFyIF9yZW5kZXJCdWZmZXIgPSByZXF1aXJlKCcuL3JlbmRlci1idWZmZXInKTtcblxudmFyIF9yZW5kZXJCdWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVuZGVyQnVmZmVyKTtcblxudmFyIF9mcmFtZUJ1ZmZlciA9IHJlcXVpcmUoJy4vZnJhbWUtYnVmZmVyJyk7XG5cbnZhciBfZnJhbWVCdWZmZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJhbWVCdWZmZXIpO1xuXG52YXIgX2RldmljZSA9IHJlcXVpcmUoJy4vZGV2aWNlJyk7XG5cbnZhciBfZGV2aWNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldmljZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZnggPSB7XG4gIC8vIGNsYXNzZXNcbiAgVmVydGV4Rm9ybWF0OiBfdmVydGV4Rm9ybWF0Mi5kZWZhdWx0LFxuICBJbmRleEJ1ZmZlcjogX2luZGV4QnVmZmVyMi5kZWZhdWx0LFxuICBWZXJ0ZXhCdWZmZXI6IF92ZXJ0ZXhCdWZmZXIyLmRlZmF1bHQsXG4gIFByb2dyYW06IF9wcm9ncmFtMi5kZWZhdWx0LFxuICBUZXh0dXJlOiBfdGV4dHVyZTIuZGVmYXVsdCxcbiAgVGV4dHVyZTJEOiBfdGV4dHVyZTJkMi5kZWZhdWx0LFxuICBUZXh0dXJlQ3ViZTogX3RleHR1cmVDdWJlMi5kZWZhdWx0LFxuICBSZW5kZXJCdWZmZXI6IF9yZW5kZXJCdWZmZXIyLmRlZmF1bHQsXG4gIEZyYW1lQnVmZmVyOiBfZnJhbWVCdWZmZXIyLmRlZmF1bHQsXG4gIERldmljZTogX2RldmljZTIuZGVmYXVsdCxcblxuICAvLyBmdW5jdGlvbnNcbiAgYXR0clR5cGVCeXRlczogX2VudW1zLmF0dHJUeXBlQnl0ZXMsXG4gIGdsRmlsdGVyOiBfZW51bXMuZ2xGaWx0ZXIsXG4gIGdsVGV4dHVyZUZtdDogX2VudW1zLmdsVGV4dHVyZUZtdFxufTtcbk9iamVjdC5hc3NpZ24oZ2Z4LCBfZW51bXMuZW51bXMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBnZng7XG5cbmNjLmdmeCA9IGdmeDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1sdVpHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYkltZG1lQ0lzSWxabGNuUmxlRVp2Y20xaGRDSXNJa2x1WkdWNFFuVm1abVZ5SWl3aVZtVnlkR1Y0UW5WbVptVnlJaXdpVUhKdlozSmhiU0lzSWxSbGVIUjFjbVVpTENKVVpYaDBkWEpsTWtRaUxDSlVaWGgwZFhKbFEzVmlaU0lzSWxKbGJtUmxja0oxWm1abGNpSXNJa1p5WVcxbFFuVm1abVZ5SWl3aVJHVjJhV05sSWl3aVlYUjBjbFI1Y0dWQ2VYUmxjeUlzSW1kc1JtbHNkR1Z5SWl3aVoyeFVaWGgwZFhKbFJtMTBJaXdpVDJKcVpXTjBJaXdpWVhOemFXZHVJaXdpWTJNaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3p0QlFVOUJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN1FVRkZRU3hKUVVGSlFTeE5RVUZOTzBGQlExSTdRVUZEUVVNc2MwTkJSbEU3UVVGSFVrTXNiME5CU0ZFN1FVRkpVa01zYzBOQlNsRTdRVUZMVWtNc05FSkJURkU3UVVGTlVrTXNORUpCVGxFN1FVRlBVa01zWjBOQlVGRTdRVUZSVWtNc2IwTkJVbEU3UVVGVFVrTXNjME5CVkZFN1FVRlZVa01zYjBOQlZsRTdRVUZYVWtNc01FSkJXRkU3TzBGQllWSTdRVUZEUVVNc2NVTkJaRkU3UVVGbFVrTXNNa0pCWmxFN1FVRm5RbEpETzBGQmFFSlJMRU5CUVZZN1FVRnJRa0ZETEU5QlFVOURMRTFCUVZBc1EwRkJZMllzUjBGQlpEczdhMEpCUldWQkxFYzdPMEZCUTJablFpeEhRVUZIYUVJc1IwRkJTQ3hIUVVGVFFTeEhRVUZVSWl3aVptbHNaU0k2SW1sdVpHVjRMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2NseHVJQ0JsYm5WdGN5eGNjbHh1SUNCaGRIUnlWSGx3WlVKNWRHVnpMRnh5WEc0Z0lHZHNSbWxzZEdWeUxGeHlYRzRnSUdkc1ZHVjRkSFZ5WlVadGRDeGNjbHh1ZlNCbWNtOXRJQ2N1TDJWdWRXMXpKenRjY2x4dVhISmNibWx0Y0c5eWRDQldaWEowWlhoR2IzSnRZWFFnWm5KdmJTQW5MaTkyWlhKMFpYZ3RabTl5YldGMEp6dGNjbHh1YVcxd2IzSjBJRWx1WkdWNFFuVm1abVZ5SUdaeWIyMGdKeTR2YVc1a1pYZ3RZblZtWm1WeUp6dGNjbHh1YVcxd2IzSjBJRlpsY25SbGVFSjFabVpsY2lCbWNtOXRJQ2N1TDNabGNuUmxlQzFpZFdabVpYSW5PMXh5WEc1cGJYQnZjblFnVUhKdlozSmhiU0JtY205dElDY3VMM0J5YjJkeVlXMG5PMXh5WEc1cGJYQnZjblFnVkdWNGRIVnlaU0JtY205dElDY3VMM1JsZUhSMWNtVW5PMXh5WEc1cGJYQnZjblFnVkdWNGRIVnlaVEpFSUdaeWIyMGdKeTR2ZEdWNGRIVnlaUzB5WkNjN1hISmNibWx0Y0c5eWRDQlVaWGgwZFhKbFEzVmlaU0JtY205dElDY3VMM1JsZUhSMWNtVXRZM1ZpWlNjN1hISmNibWx0Y0c5eWRDQlNaVzVrWlhKQ2RXWm1aWElnWm5KdmJTQW5MaTl5Wlc1a1pYSXRZblZtWm1WeUp6dGNjbHh1YVcxd2IzSjBJRVp5WVcxbFFuVm1abVZ5SUdaeWIyMGdKeTR2Wm5KaGJXVXRZblZtWm1WeUp6dGNjbHh1YVcxd2IzSjBJRVJsZG1salpTQm1jbTl0SUNjdUwyUmxkbWxqWlNjN1hISmNibHh5WEc1c1pYUWdaMlo0SUQwZ2UxeHlYRzRnSUM4dklHTnNZWE56WlhOY2NseHVJQ0JXWlhKMFpYaEdiM0p0WVhRc1hISmNiaUFnU1c1a1pYaENkV1ptWlhJc1hISmNiaUFnVm1WeWRHVjRRblZtWm1WeUxGeHlYRzRnSUZCeWIyZHlZVzBzWEhKY2JpQWdWR1Y0ZEhWeVpTeGNjbHh1SUNCVVpYaDBkWEpsTWtRc1hISmNiaUFnVkdWNGRIVnlaVU4xWW1Vc1hISmNiaUFnVW1WdVpHVnlRblZtWm1WeUxGeHlYRzRnSUVaeVlXMWxRblZtWm1WeUxGeHlYRzRnSUVSbGRtbGpaU3hjY2x4dVhISmNiaUFnTHk4Z1puVnVZM1JwYjI1elhISmNiaUFnWVhSMGNsUjVjR1ZDZVhSbGN5eGNjbHh1SUNCbmJFWnBiSFJsY2l4Y2NseHVJQ0JuYkZSbGVIUjFjbVZHYlhRc1hISmNibjA3WEhKY2JrOWlhbVZqZEM1aGMzTnBaMjRvWjJaNExDQmxiblZ0Y3lrN1hISmNibHh5WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JuWm5nN1hISmNibU5qTG1kbWVDQTlJR2RtZUR0Y2NseHVJbDE5Il19