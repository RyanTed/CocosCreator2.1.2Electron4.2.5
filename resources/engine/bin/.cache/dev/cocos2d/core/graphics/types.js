(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/graphics/types.js';
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
        var LineCap = cc.Enum({
            BUTT: 0,
            ROUND: 1,
            SQUARE: 2
        });
        var LineJoin = cc.Enum({
            BEVEL: 0,
            ROUND: 1,
            MITER: 2
        });
        var PointFlags = cc.Enum({
            PT_CORNER: 1,
            PT_LEFT: 2,
            PT_BEVEL: 4,
            PT_INNERBEVEL: 8
        });
        module.exports = {
            LineCap: LineCap,
            LineJoin: LineJoin,
            PointFlags: PointFlags
        };
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL2dyYXBoaWNzL3R5cGVzLmpzIl0sIm5hbWVzIjpbIkxpbmVDYXAiLCJjYyIsIkVudW0iLCJCVVRUIiwiUk9VTkQiLCJTUVVBUkUiLCJMaW5lSm9pbiIsIkJFVkVMIiwiTUlURVIiLCJQb2ludEZsYWdzIiwiUFRfQ09STkVSIiwiUFRfTEVGVCIsIlBUX0JFVkVMIiwiUFRfSU5ORVJCRVZFTCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUEwQkE7QUFBQSxRQU9BLElBQUlBLE9BQUFBLEdBQVVDLEVBQUFBLENBQUdDLElBQUhELENBQVE7QUFBQSxZQU1sQkUsSUFBQUEsRUFBTSxDQU5ZO0FBQUEsWUFhbEJDLEtBQUFBLEVBQU8sQ0FiVztBQUFBLFlBb0JsQkMsTUFBQUEsRUFBUSxDQXBCVTtBQUFBLFNBQVJKLENBQWQsQ0FQQTtBQUFBLFFBbUNBLElBQUlLLFFBQUFBLEdBQVdMLEVBQUFBLENBQUdDLElBQUhELENBQVE7QUFBQSxZQU1uQk0sS0FBQUEsRUFBTyxDQU5ZO0FBQUEsWUFhbkJILEtBQUFBLEVBQU8sQ0FiWTtBQUFBLFlBb0JuQkksS0FBQUEsRUFBTyxDQXBCWTtBQUFBLFNBQVJQLENBQWYsQ0FuQ0E7QUFBQSxRQTREQSxJQUFJUSxVQUFBQSxHQUFjUixFQUFBQSxDQUFHQyxJQUFIRCxDQUFRO0FBQUEsWUFDdEJTLFNBQUFBLEVBQVcsQ0FEVztBQUFBLFlBRXRCQyxPQUFBQSxFQUFTLENBRmE7QUFBQSxZQUd0QkMsUUFBQUEsRUFBVSxDQUhZO0FBQUEsWUFJdEJDLGFBQUFBLEVBQWUsQ0FKTztBQUFBLFNBQVJaLENBQWxCLENBNURBO0FBQUEsUUFtRUFhLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCO0FBQUEsWUFDYmQsT0FBQUEsRUFBWUEsT0FEQztBQUFBLFlBRWJNLFFBQUFBLEVBQVlBLFFBRkM7QUFBQSxZQUdiRyxVQUFBQSxFQUFZQSxVQUhDO0FBQUEsU0FBakJLIiwiZmlsZSI6InR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4gXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8qKlxyXG4gKiAhI2VuIEVudW0gZm9yIExpbmVDYXAuXHJcbiAqICEjemgg57q/5q615pyr56uv5bGe5oCnXHJcbiAqIEBlbnVtIEdyYXBoaWNzLkxpbmVDYXBcclxuICovXHJcbnZhciBMaW5lQ2FwID0gY2MuRW51bSh7XHJcbiAgICAvKipcclxuICAgICAqICEjZW4gVGhlIGVuZHMgb2YgbGluZXMgYXJlIHNxdWFyZWQgb2ZmIGF0IHRoZSBlbmRwb2ludHMuXHJcbiAgICAgKiAhI3poIOe6v+auteacq+err+S7peaWueW9oue7k+adn+OAglxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IEJVVFRcclxuICAgICAqL1xyXG4gICAgQlVUVDogMCxcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gVGhlIGVuZHMgb2YgbGluZXMgYXJlIHJvdW5kZWQuXHJcbiAgICAgKiAhI3poIOe6v+auteacq+err+S7peWchuW9oue7k+adn+OAglxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IFJPVU5EXHJcbiAgICAgKi9cclxuICAgIFJPVU5EOiAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogISNlbiBUaGUgZW5kcyBvZiBsaW5lcyBhcmUgc3F1YXJlZCBvZmYgYnkgYWRkaW5nIGEgYm94IHdpdGggYW4gZXF1YWwgd2lkdGggYW5kIGhhbGYgdGhlIGhlaWdodCBvZiB0aGUgbGluZSdzIHRoaWNrbmVzcy5cclxuICAgICAqICEjemgg57q/5q615pyr56uv5Lul5pa55b2i57uT5p2f77yM5L2G5piv5aKe5Yqg5LqG5LiA5Liq5a695bqm5ZKM57q/5q6155u45ZCM77yM6auY5bqm5piv57q/5q615Y6a5bqm5LiA5Y2K55qE55+p5b2i5Yy65Z+f44CCXHJcbiAgICAgKiBAcHJvcGVydHkge051bWJlcn0gU1FVQVJFXHJcbiAgICAgKi9cclxuICAgIFNRVUFSRTogMixcclxufSk7XHJcblxyXG4vKipcclxuICogISNlbiBFbnVtIGZvciBMaW5lSm9pbi5cclxuICogISN6aCDnur/mrrXmi5Dop5LlsZ7mgKdcclxuICogQGVudW0gR3JhcGhpY3MuTGluZUpvaW5cclxuICovXHJcbnZhciBMaW5lSm9pbiA9IGNjLkVudW0oe1xyXG4gICAgLyoqXHJcbiAgICAgKiAhI2VuIEZpbGxzIGFuIGFkZGl0aW9uYWwgdHJpYW5ndWxhciBhcmVhIGJldHdlZW4gdGhlIGNvbW1vbiBlbmRwb2ludCBvZiBjb25uZWN0ZWQgc2VnbWVudHMsIGFuZCB0aGUgc2VwYXJhdGUgb3V0c2lkZSByZWN0YW5ndWxhciBjb3JuZXJzIG9mIGVhY2ggc2VnbWVudC5cclxuICAgICAqICEjemgg5Zyo55u46L+e6YOo5YiG55qE5pyr56uv5aGr5YWF5LiA5Liq6aKd5aSW55qE5Lul5LiJ6KeS5b2i5Li65bqV55qE5Yy65Z+f77yMIOavj+S4qumDqOWIhumDveacieWQhOiHqueLrOeri+eahOefqeW9ouaLkOinkuOAglxyXG4gICAgICogQHByb3BlcnR5IHtOdW1iZXJ9IEJFVkVMXHJcbiAgICAgKi9cclxuICAgIEJFVkVMOiAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogISNlbiBSb3VuZHMgb2ZmIHRoZSBjb3JuZXJzIG9mIGEgc2hhcGUgYnkgZmlsbGluZyBhbiBhZGRpdGlvbmFsIHNlY3RvciBvZiBkaXNjIGNlbnRlcmVkIGF0IHRoZSBjb21tb24gZW5kcG9pbnQgb2YgY29ubmVjdGVkIHNlZ21lbnRzLiBUaGUgcmFkaXVzIGZvciB0aGVzZSByb3VuZGVkIGNvcm5lcnMgaXMgZXF1YWwgdG8gdGhlIGxpbmUgd2lkdGguXHJcbiAgICAgKiAhI3poIOmAmui/h+Whq+WFheS4gOS4qumineWklueahO+8jOWchuW/g+WcqOebuOi/numDqOWIhuacq+err+eahOaJh+W9ou+8jOe7mOWItuaLkOinkueahOW9oueKtuOAgiDlnIbop5LnmoTljYrlvoTmmK/nur/mrrXnmoTlrr3luqbjgIJcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBST1VORFxyXG4gICAgICovXHJcbiAgICBST1VORDogMSxcclxuXHJcbiAgICAvKipcclxuICAgICAqICEjZW4gQ29ubmVjdGVkIHNlZ21lbnRzIGFyZSBqb2luZWQgYnkgZXh0ZW5kaW5nIHRoZWlyIG91dHNpZGUgZWRnZXMgdG8gY29ubmVjdCBhdCBhIHNpbmdsZSBwb2ludCwgd2l0aCB0aGUgZWZmZWN0IG9mIGZpbGxpbmcgYW4gYWRkaXRpb25hbCBsb3plbmdlLXNoYXBlZCBhcmVhLlxyXG4gICAgICogISN6aCDpgJrov4flu7bkvLjnm7jov57pg6jliIbnmoTlpJbovrnnvJjvvIzkvb/lhbbnm7jkuqTkuo7kuIDngrnvvIzlvaLmiJDkuIDkuKrpop3lpJbnmoToj7HlvaLljLrln5/jgIJcclxuICAgICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBNSVRFUlxyXG4gICAgICovXHJcbiAgICBNSVRFUjogMlxyXG59KTtcclxuXHJcblxyXG4vLyBQb2ludEZsYWdzXHJcbnZhciBQb2ludEZsYWdzID0gIGNjLkVudW0oe1xyXG4gICAgUFRfQ09STkVSOiAweDAxLFxyXG4gICAgUFRfTEVGVDogMHgwMixcclxuICAgIFBUX0JFVkVMOiAweDA0LFxyXG4gICAgUFRfSU5ORVJCRVZFTDogMHgwOCxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIExpbmVDYXA6ICAgIExpbmVDYXAsXHJcbiAgICBMaW5lSm9pbjogICBMaW5lSm9pbixcclxuICAgIFBvaW50RmxhZ3M6IFBvaW50RmxhZ3NcclxufTtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxyXG4gKiAhI2VuIEVudW0gZm9yIExpbmVDYXAuXHJcbiAqICEjemgg57q/5q615pyr56uv5bGe5oCnXHJcbiAqIEBlbnVtIEdyYXBoaWNzLkxpbmVDYXBcclxuICovXG5cbnZhciBMaW5lQ2FwID0gY2MuRW51bSh7XG4gIC8qKlxyXG4gICAqICEjZW4gVGhlIGVuZHMgb2YgbGluZXMgYXJlIHNxdWFyZWQgb2ZmIGF0IHRoZSBlbmRwb2ludHMuXHJcbiAgICogISN6aCDnur/mrrXmnKvnq6/ku6XmlrnlvaLnu5PmnZ/jgIJcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gQlVUVFxyXG4gICAqL1xuICBCVVRUOiAwLFxuXG4gIC8qKlxyXG4gICAqICEjZW4gVGhlIGVuZHMgb2YgbGluZXMgYXJlIHJvdW5kZWQuXHJcbiAgICogISN6aCDnur/mrrXmnKvnq6/ku6XlnIblvaLnu5PmnZ/jgIJcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gUk9VTkRcclxuICAgKi9cbiAgUk9VTkQ6IDEsXG5cbiAgLyoqXHJcbiAgICogISNlbiBUaGUgZW5kcyBvZiBsaW5lcyBhcmUgc3F1YXJlZCBvZmYgYnkgYWRkaW5nIGEgYm94IHdpdGggYW4gZXF1YWwgd2lkdGggYW5kIGhhbGYgdGhlIGhlaWdodCBvZiB0aGUgbGluZSdzIHRoaWNrbmVzcy5cclxuICAgKiAhI3poIOe6v+auteacq+err+S7peaWueW9oue7k+adn++8jOS9huaYr+WinuWKoOS6huS4gOS4quWuveW6puWSjOe6v+auteebuOWQjO+8jOmrmOW6puaYr+e6v+auteWOmuW6puS4gOWNiueahOefqeW9ouWMuuWfn+OAglxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBTUVVBUkVcclxuICAgKi9cbiAgU1FVQVJFOiAyXG59KTtcblxuLyoqXHJcbiAqICEjZW4gRW51bSBmb3IgTGluZUpvaW4uXHJcbiAqICEjemgg57q/5q615ouQ6KeS5bGe5oCnXHJcbiAqIEBlbnVtIEdyYXBoaWNzLkxpbmVKb2luXHJcbiAqL1xudmFyIExpbmVKb2luID0gY2MuRW51bSh7XG4gIC8qKlxyXG4gICAqICEjZW4gRmlsbHMgYW4gYWRkaXRpb25hbCB0cmlhbmd1bGFyIGFyZWEgYmV0d2VlbiB0aGUgY29tbW9uIGVuZHBvaW50IG9mIGNvbm5lY3RlZCBzZWdtZW50cywgYW5kIHRoZSBzZXBhcmF0ZSBvdXRzaWRlIHJlY3Rhbmd1bGFyIGNvcm5lcnMgb2YgZWFjaCBzZWdtZW50LlxyXG4gICAqICEjemgg5Zyo55u46L+e6YOo5YiG55qE5pyr56uv5aGr5YWF5LiA5Liq6aKd5aSW55qE5Lul5LiJ6KeS5b2i5Li65bqV55qE5Yy65Z+f77yMIOavj+S4qumDqOWIhumDveacieWQhOiHqueLrOeri+eahOefqeW9ouaLkOinkuOAglxyXG4gICAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBCRVZFTFxyXG4gICAqL1xuICBCRVZFTDogMCxcblxuICAvKipcclxuICAgKiAhI2VuIFJvdW5kcyBvZmYgdGhlIGNvcm5lcnMgb2YgYSBzaGFwZSBieSBmaWxsaW5nIGFuIGFkZGl0aW9uYWwgc2VjdG9yIG9mIGRpc2MgY2VudGVyZWQgYXQgdGhlIGNvbW1vbiBlbmRwb2ludCBvZiBjb25uZWN0ZWQgc2VnbWVudHMuIFRoZSByYWRpdXMgZm9yIHRoZXNlIHJvdW5kZWQgY29ybmVycyBpcyBlcXVhbCB0byB0aGUgbGluZSB3aWR0aC5cclxuICAgKiAhI3poIOmAmui/h+Whq+WFheS4gOS4qumineWklueahO+8jOWchuW/g+WcqOebuOi/numDqOWIhuacq+err+eahOaJh+W9ou+8jOe7mOWItuaLkOinkueahOW9oueKtuOAgiDlnIbop5LnmoTljYrlvoTmmK/nur/mrrXnmoTlrr3luqbjgIJcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gUk9VTkRcclxuICAgKi9cbiAgUk9VTkQ6IDEsXG5cbiAgLyoqXHJcbiAgICogISNlbiBDb25uZWN0ZWQgc2VnbWVudHMgYXJlIGpvaW5lZCBieSBleHRlbmRpbmcgdGhlaXIgb3V0c2lkZSBlZGdlcyB0byBjb25uZWN0IGF0IGEgc2luZ2xlIHBvaW50LCB3aXRoIHRoZSBlZmZlY3Qgb2YgZmlsbGluZyBhbiBhZGRpdGlvbmFsIGxvemVuZ2Utc2hhcGVkIGFyZWEuXHJcbiAgICogISN6aCDpgJrov4flu7bkvLjnm7jov57pg6jliIbnmoTlpJbovrnnvJjvvIzkvb/lhbbnm7jkuqTkuo7kuIDngrnvvIzlvaLmiJDkuIDkuKrpop3lpJbnmoToj7HlvaLljLrln5/jgIJcclxuICAgKiBAcHJvcGVydHkge051bWJlcn0gTUlURVJcclxuICAgKi9cbiAgTUlURVI6IDJcbn0pO1xuXG4vLyBQb2ludEZsYWdzXG52YXIgUG9pbnRGbGFncyA9IGNjLkVudW0oe1xuICBQVF9DT1JORVI6IDB4MDEsXG4gIFBUX0xFRlQ6IDB4MDIsXG4gIFBUX0JFVkVMOiAweDA0LFxuICBQVF9JTk5FUkJFVkVMOiAweDA4XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIExpbmVDYXA6IExpbmVDYXAsXG4gIExpbmVKb2luOiBMaW5lSm9pbixcbiAgUG9pbnRGbGFnczogUG9pbnRGbGFnc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluUjVjR1Z6TG1weklsMHNJbTVoYldWeklqcGJJa3hwYm1WRFlYQWlMQ0pqWXlJc0lrVnVkVzBpTENKQ1ZWUlVJaXdpVWs5VlRrUWlMQ0pUVVZWQlVrVWlMQ0pNYVc1bFNtOXBiaUlzSWtKRlZrVk1JaXdpVFVsVVJWSWlMQ0pRYjJsdWRFWnNZV2R6SWl3aVVGUmZRMDlTVGtWU0lpd2lVRlJmVEVWR1ZDSXNJbEJVWDBKRlZrVk1JaXdpVUZSZlNVNU9SVkpDUlZaRlRDSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVEJDUVRzN1FVRkZRVHM3T3pzN08wRkJTMEVzU1VGQlNVRXNWVUZCVlVNc1IwRkJSME1zU1VGQlNDeERRVUZSTzBGQlEyeENPenM3T3p0QlFVdEJReXhSUVVGTkxFTkJUbGs3TzBGQlVXeENPenM3T3p0QlFVdEJReXhUUVVGUExFTkJZbGM3TzBGQlpXeENPenM3T3p0QlFVdEJReXhWUVVGUk8wRkJjRUpWTEVOQlFWSXNRMEZCWkRzN1FVRjFRa0U3T3pzN08wRkJTMEVzU1VGQlNVTXNWMEZCVjB3c1IwRkJSME1zU1VGQlNDeERRVUZSTzBGQlEyNUNPenM3T3p0QlFVdEJTeXhUUVVGUExFTkJUbGs3TzBGQlVXNUNPenM3T3p0QlFVdEJTQ3hUUVVGUExFTkJZbGs3TzBGQlpXNUNPenM3T3p0QlFVdEJTU3hUUVVGUE8wRkJjRUpaTEVOQlFWSXNRMEZCWmpzN1FVRjNRa0U3UVVGRFFTeEpRVUZKUXl4aFFVRmpVaXhIUVVGSFF5eEpRVUZJTEVOQlFWRTdRVUZEZEVKUkxHRkJRVmNzU1VGRVZ6dEJRVVYwUWtNc1YwRkJVeXhKUVVaaE8wRkJSM1JDUXl4WlFVRlZMRWxCU0ZrN1FVRkpkRUpETEdsQ1FVRmxPMEZCU2s4c1EwRkJVaXhEUVVGc1FqczdRVUZQUVVNc1QwRkJUME1zVDBGQlVDeEhRVUZwUWp0QlFVTmlaaXhYUVVGWlFTeFBRVVJETzBGQlJXSk5MRmxCUVZsQkxGRkJSa003UVVGSFlrY3NZMEZCV1VFN1FVRklReXhEUVVGcVFpSXNJbVpwYkdVaU9pSjBlWEJsY3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhISmNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVE10TWpBeE5pQkRhSFZyYjI1bklGUmxZMmh1YjJ4dloybGxjeUJKYm1NdVhISmNiaUJEYjNCNWNtbG5hSFFnS0dNcElESXdNVGN0TWpBeE9DQllhV0Z0Wlc0Z1dXRnFhU0JUYjJaMGQyRnlaU0JEYnk0c0lFeDBaQzVjY2x4dVhISmNiaUJvZEhSd2N6b3ZMM2QzZHk1amIyTnZjeTVqYjIwdlhISmNibHh5WEc0Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdFZ1kyOXdlVnh5WEc0Z2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JsYm1kcGJtVWdjMjkxY21ObElHTnZaR1VnS0hSb1pTQmNJbE52Wm5SM1lYSmxYQ0lwTENCaElHeHBiV2wwWldRc1hISmNiaUFnZDI5eWJHUjNhV1JsTENCeWIzbGhiSFI1TFdaeVpXVXNJRzV2YmkxaGMzTnBaMjVoWW14bExDQnlaWFp2WTJGaWJHVWdZVzVrSUc1dmJpMWxlR05zZFhOcGRtVWdiR2xqWlc1elpWeHlYRzRnZEc4Z2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOXNaV3g1SUhSdklHUmxkbVZzYjNBZ1oyRnRaWE1nYjI0Z2VXOTFjaUIwWVhKblpYUWdjR3hoZEdadmNtMXpMaUJaYjNVZ2MyaGhiR3hjY2x4dUlDQnViM1FnZFhObElFTnZZMjl6SUVOeVpXRjBiM0lnYzI5bWRIZGhjbVVnWm05eUlHUmxkbVZzYjNCcGJtY2diM1JvWlhJZ2MyOW1kSGRoY21VZ2IzSWdkRzl2YkhNZ2RHaGhkQ2R6WEhKY2JpQWdkWE5sWkNCbWIzSWdaR1YyWld4dmNHbHVaeUJuWVcxbGN5NGdXVzkxSUdGeVpTQnViM1FnWjNKaGJuUmxaQ0IwYnlCd2RXSnNhWE5vTENCa2FYTjBjbWxpZFhSbExGeHlYRzRnSUhOMVlteHBZMlZ1YzJVc0lHRnVaQzl2Y2lCelpXeHNJR052Y0dsbGN5QnZaaUJEYjJOdmN5QkRjbVZoZEc5eUxseHlYRzVjY2x4dUlGUm9aU0J6YjJaMGQyRnlaU0J2Y2lCMGIyOXNjeUJwYmlCMGFHbHpJRXhwWTJWdWMyVWdRV2R5WldWdFpXNTBJR0Z5WlNCc2FXTmxibk5sWkN3Z2JtOTBJSE52YkdRdVhISmNiaUJZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM0Z2NtVnpaWEoyWlhNZ1lXeHNJSEpwWjJoMGN5QnViM1FnWlhod2NtVnpjMng1SUdkeVlXNTBaV1FnZEc4Z2VXOTFMbHh5WEc1Y2NseHVJRlJJUlNCVFQwWlVWMEZTUlNCSlV5QlFVazlXU1VSRlJDQmNJa0ZUSUVsVFhDSXNJRmRKVkVoUFZWUWdWMEZTVWtGT1ZGa2dUMFlnUVU1WklFdEpUa1FzSUVWWVVGSkZVMU1nVDFKY2NseHVJRWxOVUV4SlJVUXNJRWxPUTB4VlJFbE9SeUJDVlZRZ1RrOVVJRXhKVFVsVVJVUWdWRThnVkVoRklGZEJVbEpCVGxSSlJWTWdUMFlnVFVWU1EwaEJUbFJCUWtsTVNWUlpMRnh5WEc0Z1JrbFVUa1ZUVXlCR1QxSWdRU0JRUVZKVVNVTlZURUZTSUZCVlVsQlBVMFVnUVU1RUlFNVBUa2xPUmxKSlRrZEZUVVZPVkM0Z1NVNGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZYSEpjYmlCQlZWUklUMUpUSUU5U0lFTlBVRmxTU1VkSVZDQklUMHhFUlZKVElFSkZJRXhKUVVKTVJTQkdUMUlnUVU1WklFTk1RVWxOTENCRVFVMUJSMFZUSUU5U0lFOVVTRVZTWEhKY2JpQk1TVUZDU1V4SlZGa3NJRmRJUlZSSVJWSWdTVTRnUVU0Z1FVTlVTVTlPSUU5R0lFTlBUbFJTUVVOVUxDQlVUMUpVSUU5U0lFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTEZ4eVhHNGdUMVZVSUU5R0lFOVNJRWxPSUVOUFRrNUZRMVJKVDA0Z1YwbFVTQ0JVU0VVZ1UwOUdWRmRCVWtVZ1QxSWdWRWhGSUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUbHh5WEc0Z1ZFaEZJRk5QUmxSWFFWSkZMbHh5WEc0Z0tpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaTljY2x4dUlGeHlYRzRuZFhObElITjBjbWxqZENjN1hISmNibHh5WEc0dktpcGNjbHh1SUNvZ0lTTmxiaUJGYm5WdElHWnZjaUJNYVc1bFEyRndMbHh5WEc0Z0tpQWhJM3BvSU9lNnYrYXV0ZWFjcStlcnIrV3hudWFBcDF4eVhHNGdLaUJBWlc1MWJTQkhjbUZ3YUdsamN5NU1hVzVsUTJGd1hISmNiaUFxTDF4eVhHNTJZWElnVEdsdVpVTmhjQ0E5SUdOakxrVnVkVzBvZTF4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQWhJMlZ1SUZSb1pTQmxibVJ6SUc5bUlHeHBibVZ6SUdGeVpTQnpjWFZoY21Wa0lHOW1aaUJoZENCMGFHVWdaVzVrY0c5cGJuUnpMbHh5WEc0Z0lDQWdJQ29nSVNONmFDRG51ci9tcnJYbW5Ldm5xNi9rdTZYbWxybmx2YUxudTVQbW5aL2pnSUpjY2x4dUlDQWdJQ0FxSUVCd2NtOXdaWEowZVNCN1RuVnRZbVZ5ZlNCQ1ZWUlVYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJRUpWVkZRNklEQXNYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQWhJMlZ1SUZSb1pTQmxibVJ6SUc5bUlHeHBibVZ6SUdGeVpTQnliM1Z1WkdWa0xseHlYRzRnSUNBZ0lDb2dJU042YUNEbnVyL21yclhtbkt2bnE2L2t1NlhsbklibHZhTG51NVBtblovamdJSmNjbHh1SUNBZ0lDQXFJRUJ3Y205d1pYSjBlU0I3VG5WdFltVnlmU0JTVDFWT1JGeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQlNUMVZPUkRvZ01TeGNjbHh1WEhKY2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlDRWpaVzRnVkdobElHVnVaSE1nYjJZZ2JHbHVaWE1nWVhKbElITnhkV0Z5WldRZ2IyWm1JR0o1SUdGa1pHbHVaeUJoSUdKdmVDQjNhWFJvSUdGdUlHVnhkV0ZzSUhkcFpIUm9JR0Z1WkNCb1lXeG1JSFJvWlNCb1pXbG5hSFFnYjJZZ2RHaGxJR3hwYm1VbmN5QjBhR2xqYTI1bGMzTXVYSEpjYmlBZ0lDQWdLaUFoSTNwb0lPZTZ2K2F1dGVhY3ErZXJyK1M3cGVhV3VlVzlvdWU3aythZG4rKzhqT1M5aHVhWXIrV2ludVdLb09TNmh1UzRnT1M0cXVXdXZlVzZwdVdTak9lNnYrYXV0ZWVidU9XUWpPKzhqT21ybU9XNnB1YVlyK2U2dithdXRlV09tdVc2cHVTNGdPV05pdWVhaE9lZnFlVzlvdVdNdXVXZm4rT0FnbHh5WEc0Z0lDQWdJQ29nUUhCeWIzQmxjblI1SUh0T2RXMWlaWEo5SUZOUlZVRlNSVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JUVVZWQlVrVTZJRElzWEhKY2JuMHBPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJQ0VqWlc0Z1JXNTFiU0JtYjNJZ1RHbHVaVXB2YVc0dVhISmNiaUFxSUNFamVtZ2c1N3EvNXE2MTVvdVE2S2VTNWJHZTVvQ25YSEpjYmlBcUlFQmxiblZ0SUVkeVlYQm9hV056TGt4cGJtVktiMmx1WEhKY2JpQXFMMXh5WEc1MllYSWdUR2x1WlVwdmFXNGdQU0JqWXk1RmJuVnRLSHRjY2x4dUlDQWdJQzhxS2x4eVhHNGdJQ0FnSUNvZ0lTTmxiaUJHYVd4c2N5QmhiaUJoWkdScGRHbHZibUZzSUhSeWFXRnVaM1ZzWVhJZ1lYSmxZU0JpWlhSM1pXVnVJSFJvWlNCamIyMXRiMjRnWlc1a2NHOXBiblFnYjJZZ1kyOXVibVZqZEdWa0lITmxaMjFsYm5SekxDQmhibVFnZEdobElITmxjR0Z5WVhSbElHOTFkSE5wWkdVZ2NtVmpkR0Z1WjNWc1lYSWdZMjl5Ym1WeWN5QnZaaUJsWVdOb0lITmxaMjFsYm5RdVhISmNiaUFnSUNBZ0tpQWhJM3BvSU9XY3FPZWJ1T2kvbnVtRHFPV0lodWVhaE9hY3ErZXJyK1docStXRmhlUzRnT1M0cXVtaW5lV2tsdWVhaE9TN3BlUzRpZWlua3VXOW91UzR1dVc2bGVlYWhPV011dVdmbisrOGpDRG1yNC9rdUtycGc2amxpSWJwZzczbW5JbmxrSVRvaDZybmk2em5xNHZubW9Ubm42bmx2YUxtaTVEb3A1TGpnSUpjY2x4dUlDQWdJQ0FxSUVCd2NtOXdaWEowZVNCN1RuVnRZbVZ5ZlNCQ1JWWkZURnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JDUlZaRlREb2dNQ3hjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJQ0VqWlc0Z1VtOTFibVJ6SUc5bVppQjBhR1VnWTI5eWJtVnljeUJ2WmlCaElITm9ZWEJsSUdKNUlHWnBiR3hwYm1jZ1lXNGdZV1JrYVhScGIyNWhiQ0J6WldOMGIzSWdiMllnWkdsell5QmpaVzUwWlhKbFpDQmhkQ0IwYUdVZ1kyOXRiVzl1SUdWdVpIQnZhVzUwSUc5bUlHTnZibTVsWTNSbFpDQnpaV2R0Wlc1MGN5NGdWR2hsSUhKaFpHbDFjeUJtYjNJZ2RHaGxjMlVnY205MWJtUmxaQ0JqYjNKdVpYSnpJR2x6SUdWeGRXRnNJSFJ2SUhSb1pTQnNhVzVsSUhkcFpIUm9MbHh5WEc0Z0lDQWdJQ29nSVNONmFDRHBnSnJvdjRmbG9hdmxoWVhrdUlEa3VLcnBvcDNscEpibm1vVHZ2SXpsbklibHY0UGxuS2pubTdqb3Y1N3BnNmpsaUlibW5Ldm5xNi9ubW9UbWlZZmx2YUx2dkl6bnU1amxpTGJtaTVEb3A1TG5tb1RsdmFMbmlyYmpnSUlnNVp5RzZLZVM1NXFFNVkySzViNkU1cGl2NTdxLzVxNjE1NXFFNWE2OTVicW00NENDWEhKY2JpQWdJQ0FnS2lCQWNISnZjR1Z5ZEhrZ2UwNTFiV0psY24wZ1VrOVZUa1JjY2x4dUlDQWdJQ0FxTDF4eVhHNGdJQ0FnVWs5VlRrUTZJREVzWEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUFoSTJWdUlFTnZibTVsWTNSbFpDQnpaV2R0Wlc1MGN5QmhjbVVnYW05cGJtVmtJR0o1SUdWNGRHVnVaR2x1WnlCMGFHVnBjaUJ2ZFhSemFXUmxJR1ZrWjJWeklIUnZJR052Ym01bFkzUWdZWFFnWVNCemFXNW5iR1VnY0c5cGJuUXNJSGRwZEdnZ2RHaGxJR1ZtWm1WamRDQnZaaUJtYVd4c2FXNW5JR0Z1SUdGa1pHbDBhVzl1WVd3Z2JHOTZaVzVuWlMxemFHRndaV1FnWVhKbFlTNWNjbHh1SUNBZ0lDQXFJQ0VqZW1nZzZZQ2E2TCtINWJ1MjVMeTQ1NXU0NkwrZTZZT281WWlHNTVxRTVhU1c2TDY1NTd5WTc3eU01TDIvNVlXMjU1dTQ1THFrNUxxTzVMaUE1NEs1Nzd5TTViMmk1b2lRNUxpQTVMaXE2YUtkNWFTVzU1cUU2SSt4NWIyaTVZeTY1WitmNDRDQ1hISmNiaUFnSUNBZ0tpQkFjSEp2Y0dWeWRIa2dlMDUxYldKbGNuMGdUVWxVUlZKY2NseHVJQ0FnSUNBcUwxeHlYRzRnSUNBZ1RVbFVSVkk2SURKY2NseHVmU2s3WEhKY2JseHlYRzVjY2x4dUx5OGdVRzlwYm5SR2JHRm5jMXh5WEc1MllYSWdVRzlwYm5SR2JHRm5jeUE5SUNCall5NUZiblZ0S0h0Y2NseHVJQ0FnSUZCVVgwTlBVazVGVWpvZ01IZ3dNU3hjY2x4dUlDQWdJRkJVWDB4RlJsUTZJREI0TURJc1hISmNiaUFnSUNCUVZGOUNSVlpGVERvZ01IZ3dOQ3hjY2x4dUlDQWdJRkJVWDBsT1RrVlNRa1ZXUlV3NklEQjRNRGdzWEhKY2JuMHBPMXh5WEc1Y2NseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQjdYSEpjYmlBZ0lDQk1hVzVsUTJGd09pQWdJQ0JNYVc1bFEyRndMRnh5WEc0Z0lDQWdUR2x1WlVwdmFXNDZJQ0FnVEdsdVpVcHZhVzRzWEhKY2JpQWdJQ0JRYjJsdWRFWnNZV2R6T2lCUWIybHVkRVpzWVdkelhISmNibjA3WEhKY2JpSmRmUT09Il19