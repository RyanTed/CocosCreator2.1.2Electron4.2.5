(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/CCTextAsset.js';
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
        var TextAsset = cc.Class({
            name: 'cc.TextAsset',
            extends: cc.Asset,
            properties: { text: '' },
            toString: function toString() {
                return this.text;
            }
        });
        module.exports = cc.TextAsset = TextAsset;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDVGV4dEFzc2V0LmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2Fzc2V0cy9DQ1RleHRBc3NldC5qcyJdLCJuYW1lcyI6WyJUZXh0QXNzZXQiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJBc3NldCIsInByb3BlcnRpZXMiLCJ0ZXh0IiwidG9TdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFnQ0EsSUFBSUEsU0FBQUEsR0FBWUMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3JCRSxJQUFBQSxFQUFNLGNBRGU7QUFBQSxZQUVyQkMsT0FBQUEsRUFBU0gsRUFBQUEsQ0FBR0ksS0FGUztBQUFBLFlBR3JCQyxVQUFBQSxFQUFZLEVBSVJDLElBQUFBLEVBQU0sRUFKRSxFQUhTO0FBQUEsWUFVckJDLFFBQUFBLEVBVnFCLFNBQUEsUUFBQSxHQVVUO0FBQUEsZ0JBQ1IsT0FBTyxLQUFLRCxJQUFaLENBRFE7QUFBQSxhQVZTO0FBQUEsU0FBVE4sQ0FBaEI7UUFlQVEsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJSLEVBQUFBLENBQUdELFNBQUhDLEdBQWVELFNBQWhDUyIsImZpbGUiOiJDQ1RleHRBc3NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8qKlxyXG4gKiAhI2VuIENsYXNzIGZvciB0ZXh0IGZpbGUuXHJcbiAqICEjemgg5paH5pys6LWE5rqQ57G744CCXHJcbiAqIEBjbGFzcyBUZXh0QXNzZXRcclxuICogQGV4dGVuZHMgQXNzZXRcclxuICovXHJcbnZhciBUZXh0QXNzZXQgPSBjYy5DbGFzcyh7XHJcbiAgICBuYW1lOiAnY2MuVGV4dEFzc2V0JyxcclxuICAgIGV4dGVuZHM6IGNjLkFzc2V0LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgY29udGVudHMgb2YgdGhlIHJlc291cmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRleHQ6IFwiXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHRvU3RyaW5nICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNjLlRleHRBc3NldCA9IFRleHRBc3NldDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXHJcbiAqICEjZW4gQ2xhc3MgZm9yIHRleHQgZmlsZS5cclxuICogISN6aCDmlofmnKzotYTmupDnsbvjgIJcclxuICogQGNsYXNzIFRleHRBc3NldFxyXG4gKiBAZXh0ZW5kcyBBc3NldFxyXG4gKi9cbnZhciBUZXh0QXNzZXQgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5UZXh0QXNzZXQnLFxuICBleHRlbmRzOiBjYy5Bc3NldCxcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxyXG4gICAgICogQHByb3BlcnR5IHtTdHJpbmd9IHRleHQgLSBUaGUgdGV4dCBjb250ZW50cyBvZiB0aGUgcmVzb3VyY2UuXHJcbiAgICAgKi9cbiAgICB0ZXh0OiBcIlwiXG4gIH0sXG5cbiAgdG9TdHJpbmc6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnRleHQ7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNjLlRleHRBc3NldCA9IFRleHRBc3NldDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRWR1Y0ZEVGemMyVjBMbXB6SWwwc0ltNWhiV1Z6SWpwYklsUmxlSFJCYzNObGRDSXNJbU5qSWl3aVEyeGhjM01pTENKdVlXMWxJaXdpWlhoMFpXNWtjeUlzSWtGemMyVjBJaXdpY0hKdmNHVnlkR2xsY3lJc0luUmxlSFFpTENKMGIxTjBjbWx1WnlJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJNRUpCT3pzN096czdRVUZOUVN4SlFVRkpRU3haUVVGWlF5eEhRVUZIUXl4TFFVRklMRU5CUVZNN1FVRkRja0pETEZGQlFVMHNZMEZFWlR0QlFVVnlRa01zVjBGQlUwZ3NSMEZCUjBrc1MwRkdVenRCUVVkeVFrTXNZMEZCV1R0QlFVTlNPenM3UVVGSFFVTXNWVUZCVFR0QlFVcEZMRWRCU0ZNN08wRkJWWEpDUXl4VlFWWnhRaXh6UWtGVlZEdEJRVU5TTEZkQlFVOHNTMEZCUzBRc1NVRkJXanRCUVVOSU8wRkJXbTlDTEVOQlFWUXNRMEZCYUVJN08wRkJaVUZGTEU5QlFVOURMRTlCUVZBc1IwRkJhVUpVTEVkQlFVZEVMRk5CUVVnc1IwRkJaVUVzVTBGQmFFTWlMQ0ptYVd4bElqb2lRME5VWlhoMFFYTnpaWFF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERXpMVEl3TVRZZ1EyaDFhMjl1WnlCVVpXTm9ibTlzYjJkcFpYTWdTVzVqTGx4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYSEpjYmx4eVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4eVhHNWNjbHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNjbHh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4eVhHNGdJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2NseHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYSEpjYmlBZ2JtOTBJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52Wm5SM1lYSmxJR1p2Y2lCa1pYWmxiRzl3YVc1bklHOTBhR1Z5SUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUhSb1lYUW5jMXh5WEc0Z0lIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2NseHVJQ0J6ZFdKc2FXTmxibk5sTENCaGJtUXZiM0lnYzJWc2JDQmpiM0JwWlhNZ2IyWWdRMjlqYjNNZ1EzSmxZWFJ2Y2k1Y2NseHVYSEpjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4eVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNjbHh1WEhKY2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEhKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNjbHh1SUVaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHlYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh5WEc0Z1RFbEJRa2xNU1ZSWkxDQlhTRVZVU0VWU0lFbE9JRUZPSUVGRFZFbFBUaUJQUmlCRFQwNVVVa0ZEVkN3Z1ZFOVNWQ0JQVWlCUFZFaEZVbGRKVTBVc0lFRlNTVk5KVGtjZ1JsSlBUU3hjY2x4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNjbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dJU05sYmlCRGJHRnpjeUJtYjNJZ2RHVjRkQ0JtYVd4bExseHlYRzRnS2lBaEkzcG9JT2FXaCthY3JPaTFoT2E2a09leHUrT0FnbHh5WEc0Z0tpQkFZMnhoYzNNZ1ZHVjRkRUZ6YzJWMFhISmNiaUFxSUVCbGVIUmxibVJ6SUVGemMyVjBYSEpjYmlBcUwxeHlYRzUyWVhJZ1ZHVjRkRUZ6YzJWMElEMGdZMk11UTJ4aGMzTW9lMXh5WEc0Z0lDQWdibUZ0WlRvZ0oyTmpMbFJsZUhSQmMzTmxkQ2NzWEhKY2JpQWdJQ0JsZUhSbGJtUnpPaUJqWXk1QmMzTmxkQ3hjY2x4dUlDQWdJSEJ5YjNCbGNuUnBaWE02SUh0Y2NseHVJQ0FnSUNBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FnSUNBZ0tpQkFjSEp2Y0dWeWRIa2dlMU4wY21sdVozMGdkR1Y0ZENBdElGUm9aU0IwWlhoMElHTnZiblJsYm5SeklHOW1JSFJvWlNCeVpYTnZkWEpqWlM1Y2NseHVJQ0FnSUNBZ0lDQWdLaTljY2x4dUlDQWdJQ0FnSUNCMFpYaDBPaUJjSWx3aUxGeHlYRzRnSUNBZ2ZTeGNjbHh1WEhKY2JpQWdJQ0IwYjFOMGNtbHVaeUFvS1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11ZEdWNGREdGNjbHh1SUNBZ0lIMHNYSEpjYm4wcE8xeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCall5NVVaWGgwUVhOelpYUWdQU0JVWlhoMFFYTnpaWFE3WEhKY2JpSmRmUT09Il19