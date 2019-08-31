(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/assets/CCBitmapFont.js';
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
        var BitmapFont = cc.Class({
            name: 'cc.BitmapFont',
            extends: cc.Font,
            properties: {
                fntDataStr: { default: '' },
                spriteFrame: {
                    default: null,
                    type: cc.SpriteFrame
                },
                fontSize: { default: -1 },
                _fntConfig: null
            }
        });
        cc.BitmapFont = BitmapFont;
        module.exports = BitmapFont;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDQml0bWFwRm9udC5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvY29yZS9hc3NldHMvQ0NCaXRtYXBGb250LmpzIl0sIm5hbWVzIjpbIkJpdG1hcEZvbnQiLCJjYyIsIkNsYXNzIiwibmFtZSIsImV4dGVuZHMiLCJGb250IiwicHJvcGVydGllcyIsImZudERhdGFTdHIiLCJkZWZhdWx0Iiwic3ByaXRlRnJhbWUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJmb250U2l6ZSIsIl9mbnRDb25maWciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQSxPQUFBLEdBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQSxJQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUE7Ozs7Ozs7Ozs7Ozs7UUFvQ0EsSUFBSUEsVUFBQUEsR0FBYUMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ3RCRSxJQUFBQSxFQUFNLGVBRGdCO0FBQUEsWUFFdEJDLE9BQUFBLEVBQVNILEVBQUFBLENBQUdJLElBRlU7QUFBQSxZQUl0QkMsVUFBQUEsRUFBWTtBQUFBLGdCQUNSQyxVQUFBQSxFQUFZLEVBQ1JDLE9BQUFBLEVBQVMsRUFERCxFQURKO0FBQUEsZ0JBS1JDLFdBQUFBLEVBQWE7QUFBQSxvQkFDVEQsT0FBQUEsRUFBUyxJQURBO0FBQUEsb0JBRVRFLElBQUFBLEVBQU1ULEVBQUFBLENBQUdVLFdBRkE7QUFBQSxpQkFMTDtBQUFBLGdCQVVSQyxRQUFBQSxFQUFVLEVBQ05KLE9BQUFBLEVBQVMsQ0FBQyxDQURKLEVBVkY7QUFBQSxnQkFjUkssVUFBQUEsRUFBWSxJQWRKO0FBQUEsYUFKVTtBQUFBLFNBQVRaLENBQWpCO1FBc0JBQSxFQUFBQSxDQUFHRCxVQUFIQyxHQUFnQkQsVUFBaEJDO1FBQ0FhLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCZCxVQUFqQmMiLCJmaWxlIjoiQ0NCaXRtYXBGb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLyoqXHJcbiAqIEBtb2R1bGUgY2NcclxuICovXHJcbi8qKlxyXG4gKiAhI2VuIENsYXNzIGZvciBCaXRtYXBGb250IGhhbmRsaW5nLlxyXG4gKiAhI3poIOS9jeWbvuWtl+S9k+i1hOa6kOexu+OAglxyXG4gKiBAY2xhc3MgQml0bWFwRm9udFxyXG4gKiBAZXh0ZW5kcyBGb250XHJcbiAqXHJcbiAqL1xyXG52YXIgQml0bWFwRm9udCA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6ICdjYy5CaXRtYXBGb250JyxcclxuICAgIGV4dGVuZHM6IGNjLkZvbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGZudERhdGFTdHI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzcHJpdGVGcmFtZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGZvbnRTaXplOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IC0xXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvL+eUqOadpee8k+WtmCBCaXRtYXBGb250IOino+aekOS5i+WQjueahOaVsOaNrlxyXG4gICAgICAgIF9mbnRDb25maWc6IG51bGxcclxuICAgIH1cclxufSk7XHJcblxyXG5jYy5CaXRtYXBGb250ID0gQml0bWFwRm9udDtcclxubW9kdWxlLmV4cG9ydHMgPSBCaXRtYXBGb250O1xyXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTMtMjAxNiBDaHVrb25nIFRlY2hub2xvZ2llcyBJbmMuXHJcbiBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOCBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC5cclxuXHJcbiBodHRwczovL3d3dy5jb2Nvcy5jb20vXHJcblxyXG4gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG4gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBlbmdpbmUgc291cmNlIGNvZGUgKHRoZSBcIlNvZnR3YXJlXCIpLCBhIGxpbWl0ZWQsXHJcbiAgd29ybGR3aWRlLCByb3lhbHR5LWZyZWUsIG5vbi1hc3NpZ25hYmxlLCByZXZvY2FibGUgYW5kIG5vbi1leGNsdXNpdmUgbGljZW5zZVxyXG4gdG8gdXNlIENvY29zIENyZWF0b3Igc29sZWx5IHRvIGRldmVsb3AgZ2FtZXMgb24geW91ciB0YXJnZXQgcGxhdGZvcm1zLiBZb3Ugc2hhbGxcclxuICBub3QgdXNlIENvY29zIENyZWF0b3Igc29mdHdhcmUgZm9yIGRldmVsb3Bpbmcgb3RoZXIgc29mdHdhcmUgb3IgdG9vbHMgdGhhdCdzXHJcbiAgdXNlZCBmb3IgZGV2ZWxvcGluZyBnYW1lcy4gWW91IGFyZSBub3QgZ3JhbnRlZCB0byBwdWJsaXNoLCBkaXN0cmlidXRlLFxyXG4gIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiBDb2NvcyBDcmVhdG9yLlxyXG5cclxuIFRoZSBzb2Z0d2FyZSBvciB0b29scyBpbiB0aGlzIExpY2Vuc2UgQWdyZWVtZW50IGFyZSBsaWNlbnNlZCwgbm90IHNvbGQuXHJcbiBYaWFtZW4gWWFqaSBTb2Z0d2FyZSBDby4sIEx0ZC4gcmVzZXJ2ZXMgYWxsIHJpZ2h0cyBub3QgZXhwcmVzc2x5IGdyYW50ZWQgdG8geW91LlxyXG5cclxuIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcbiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcbiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxyXG4gVEhFIFNPRlRXQVJFLlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLyoqXHJcbiAqIEBtb2R1bGUgY2NcclxuICovXG4vKipcclxuICogISNlbiBDbGFzcyBmb3IgQml0bWFwRm9udCBoYW5kbGluZy5cclxuICogISN6aCDkvY3lm77lrZfkvZPotYTmupDnsbvjgIJcclxuICogQGNsYXNzIEJpdG1hcEZvbnRcclxuICogQGV4dGVuZHMgRm9udFxyXG4gKlxyXG4gKi9cbnZhciBCaXRtYXBGb250ID0gY2MuQ2xhc3Moe1xuICBuYW1lOiAnY2MuQml0bWFwRm9udCcsXG4gIGV4dGVuZHM6IGNjLkZvbnQsXG5cbiAgcHJvcGVydGllczoge1xuICAgIGZudERhdGFTdHI6IHtcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcblxuICAgIHNwcml0ZUZyYW1lOiB7XG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWVcbiAgICB9LFxuXG4gICAgZm9udFNpemU6IHtcbiAgICAgIGRlZmF1bHQ6IC0xXG4gICAgfSxcbiAgICAvL+eUqOadpee8k+WtmCBCaXRtYXBGb250IOino+aekOS5i+WQjueahOaVsOaNrlxuICAgIF9mbnRDb25maWc6IG51bGxcbiAgfVxufSk7XG5cbmNjLkJpdG1hcEZvbnQgPSBCaXRtYXBGb250O1xubW9kdWxlLmV4cG9ydHMgPSBCaXRtYXBGb250O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFFtbDBiV0Z3Um05dWRDNXFjeUpkTENKdVlXMWxjeUk2V3lKQ2FYUnRZWEJHYjI1MElpd2lZMk1pTENKRGJHRnpjeUlzSW01aGJXVWlMQ0psZUhSbGJtUnpJaXdpUm05dWRDSXNJbkJ5YjNCbGNuUnBaWE1pTENKbWJuUkVZWFJoVTNSeUlpd2laR1ZtWVhWc2RDSXNJbk53Y21sMFpVWnlZVzFsSWl3aWRIbHdaU0lzSWxOd2NtbDBaVVp5WVcxbElpd2labTl1ZEZOcGVtVWlMQ0pmWm01MFEyOXVabWxuSWl3aWJXOWtkV3hsSWl3aVpYaHdiM0owY3lKZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRXdRa0U3T3p0QlFVZEJPenM3T3pzN08wRkJUMEVzU1VGQlNVRXNZVUZCWVVNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlEzUkNReXhSUVVGTkxHVkJSR2RDTzBGQlJYUkNReXhYUVVGVFNDeEhRVUZIU1N4SlFVWlZPenRCUVVsMFFrTXNZMEZCV1R0QlFVTlNReXhuUWtGQldUdEJRVU5TUXl4bFFVRlRPMEZCUkVRc1MwRkVTanM3UVVGTFVrTXNhVUpCUVdFN1FVRkRWRVFzWlVGQlV5eEpRVVJCTzBGQlJWUkZMRmxCUVUxVUxFZEJRVWRWTzBGQlJrRXNTMEZNVERzN1FVRlZVa01zWTBGQlZUdEJRVU5PU2l4bFFVRlRMRU5CUVVNN1FVRkVTaXhMUVZaR08wRkJZVkk3UVVGRFFVc3NaMEpCUVZrN1FVRmtTanRCUVVwVkxFTkJRVlFzUTBGQmFrSTdPMEZCYzBKQldpeEhRVUZIUkN4VlFVRklMRWRCUVdkQ1FTeFZRVUZvUWp0QlFVTkJZeXhQUVVGUFF5eFBRVUZRTEVkQlFXbENaaXhWUVVGcVFpSXNJbVpwYkdVaU9pSkRRMEpwZEcxaGNFWnZiblF1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERXpMVEl3TVRZZ1EyaDFhMjl1WnlCVVpXTm9ibTlzYjJkcFpYTWdTVzVqTGx4eVhHNGdRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTNMVEl3TVRnZ1dHbGhiV1Z1SUZsaGFta2dVMjltZEhkaGNtVWdRMjh1TENCTWRHUXVYSEpjYmx4eVhHNGdhSFIwY0hNNkx5OTNkM2N1WTI5amIzTXVZMjl0TDF4eVhHNWNjbHh1SUZCbGNtMXBjM05wYjI0Z2FYTWdhR1Z5WldKNUlHZHlZVzUwWldRc0lHWnlaV1VnYjJZZ1kyaGhjbWRsTENCMGJ5QmhibmtnY0dWeWMyOXVJRzlpZEdGcGJtbHVaeUJoSUdOdmNIbGNjbHh1SUc5bUlIUm9hWE1nYzI5bWRIZGhjbVVnWVc1a0lHRnpjMjlqYVdGMFpXUWdaVzVuYVc1bElITnZkWEpqWlNCamIyUmxJQ2gwYUdVZ1hDSlRiMlowZDJGeVpWd2lLU3dnWVNCc2FXMXBkR1ZrTEZ4eVhHNGdJSGR2Y214a2QybGtaU3dnY205NVlXeDBlUzFtY21WbExDQnViMjR0WVhOemFXZHVZV0pzWlN3Z2NtVjJiMk5oWW14bElHRnVaQ0J1YjI0dFpYaGpiSFZ6YVhabElHeHBZMlZ1YzJWY2NseHVJSFJ2SUhWelpTQkRiMk52Y3lCRGNtVmhkRzl5SUhOdmJHVnNlU0IwYnlCa1pYWmxiRzl3SUdkaGJXVnpJRzl1SUhsdmRYSWdkR0Z5WjJWMElIQnNZWFJtYjNKdGN5NGdXVzkxSUhOb1lXeHNYSEpjYmlBZ2JtOTBJSFZ6WlNCRGIyTnZjeUJEY21WaGRHOXlJSE52Wm5SM1lYSmxJR1p2Y2lCa1pYWmxiRzl3YVc1bklHOTBhR1Z5SUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUhSb1lYUW5jMXh5WEc0Z0lIVnpaV1FnWm05eUlHUmxkbVZzYjNCcGJtY2daMkZ0WlhNdUlGbHZkU0JoY21VZ2JtOTBJR2R5WVc1MFpXUWdkRzhnY0hWaWJHbHphQ3dnWkdsemRISnBZblYwWlN4Y2NseHVJQ0J6ZFdKc2FXTmxibk5sTENCaGJtUXZiM0lnYzJWc2JDQmpiM0JwWlhNZ2IyWWdRMjlqYjNNZ1EzSmxZWFJ2Y2k1Y2NseHVYSEpjYmlCVWFHVWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdhVzRnZEdocGN5Qk1hV05sYm5ObElFRm5jbVZsYldWdWRDQmhjbVVnYkdsalpXNXpaV1FzSUc1dmRDQnpiMnhrTGx4eVhHNGdXR2xoYldWdUlGbGhhbWtnVTI5bWRIZGhjbVVnUTI4dUxDQk1kR1F1SUhKbGMyVnlkbVZ6SUdGc2JDQnlhV2RvZEhNZ2JtOTBJR1Y0Y0hKbGMzTnNlU0JuY21GdWRHVmtJSFJ2SUhsdmRTNWNjbHh1WEhKY2JpQlVTRVVnVTA5R1ZGZEJVa1VnU1ZNZ1VGSlBWa2xFUlVRZ1hDSkJVeUJKVTF3aUxDQlhTVlJJVDFWVUlGZEJVbEpCVGxSWklFOUdJRUZPV1NCTFNVNUVMQ0JGV0ZCU1JWTlRJRTlTWEhKY2JpQkpUVkJNU1VWRUxDQkpUa05NVlVSSlRrY2dRbFZVSUU1UFZDQk1TVTFKVkVWRUlGUlBJRlJJUlNCWFFWSlNRVTVVU1VWVElFOUdJRTFGVWtOSVFVNVVRVUpKVEVsVVdTeGNjbHh1SUVaSlZFNUZVMU1nUms5U0lFRWdVRUZTVkVsRFZVeEJVaUJRVlZKUVQxTkZJRUZPUkNCT1QwNUpUa1pTU1U1SFJVMUZUbFF1SUVsT0lFNVBJRVZXUlU1VUlGTklRVXhNSUZSSVJWeHlYRzRnUVZWVVNFOVNVeUJQVWlCRFQxQlpVa2xIU0ZRZ1NFOU1SRVZTVXlCQ1JTQk1TVUZDVEVVZ1JrOVNJRUZPV1NCRFRFRkpUU3dnUkVGTlFVZEZVeUJQVWlCUFZFaEZVbHh5WEc0Z1RFbEJRa2xNU1ZSWkxDQlhTRVZVU0VWU0lFbE9JRUZPSUVGRFZFbFBUaUJQUmlCRFQwNVVVa0ZEVkN3Z1ZFOVNWQ0JQVWlCUFZFaEZVbGRKVTBVc0lFRlNTVk5KVGtjZ1JsSlBUU3hjY2x4dUlFOVZWQ0JQUmlCUFVpQkpUaUJEVDA1T1JVTlVTVTlPSUZkSlZFZ2dWRWhGSUZOUFJsUlhRVkpGSUU5U0lGUklSU0JWVTBVZ1QxSWdUMVJJUlZJZ1JFVkJURWxPUjFNZ1NVNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTNWNjbHh1SUNvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3ZYSEpjYmx4eVhHNHZLaXBjY2x4dUlDb2dRRzF2WkhWc1pTQmpZMXh5WEc0Z0tpOWNjbHh1THlvcVhISmNiaUFxSUNFalpXNGdRMnhoYzNNZ1ptOXlJRUpwZEcxaGNFWnZiblFnYUdGdVpHeHBibWN1WEhKY2JpQXFJQ0VqZW1nZzVMMk41WnUrNWEyWDVMMlQ2TFdFNXJxUTU3Rzc0NENDWEhKY2JpQXFJRUJqYkdGemN5QkNhWFJ0WVhCR2IyNTBYSEpjYmlBcUlFQmxlSFJsYm1SeklFWnZiblJjY2x4dUlDcGNjbHh1SUNvdlhISmNiblpoY2lCQ2FYUnRZWEJHYjI1MElEMGdZMk11UTJ4aGMzTW9lMXh5WEc0Z0lDQWdibUZ0WlRvZ0oyTmpMa0pwZEcxaGNFWnZiblFuTEZ4eVhHNGdJQ0FnWlhoMFpXNWtjem9nWTJNdVJtOXVkQ3hjY2x4dVhISmNiaUFnSUNCd2NtOXdaWEowYVdWek9pQjdYSEpjYmlBZ0lDQWdJQ0FnWm01MFJHRjBZVk4wY2pvZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwT2lBbkoxeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JseHlYRzRnSUNBZ0lDQWdJSE53Y21sMFpVWnlZVzFsT2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SUc1MWJHd3NYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUdOakxsTndjbWwwWlVaeVlXMWxYSEpjYmlBZ0lDQWdJQ0FnZlN4Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWm05dWRGTnBlbVU2SUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRG9nTFRGY2NseHVJQ0FnSUNBZ0lDQjlMRnh5WEc0Z0lDQWdJQ0FnSUM4djU1U281cDJsNTd5VDVhMllJRUpwZEcxaGNFWnZiblFnNktlajVwNlE1TG1MNVpDTzU1cUU1cFd3NW8ydVhISmNiaUFnSUNBZ0lDQWdYMlp1ZEVOdmJtWnBaem9nYm5Wc2JGeHlYRzRnSUNBZ2ZWeHlYRzU5S1R0Y2NseHVYSEpjYm1OakxrSnBkRzFoY0VadmJuUWdQU0JDYVhSdFlYQkdiMjUwTzF4eVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlFSnBkRzFoY0VadmJuUTdYSEpjYmlKZGZRPT0iXX0=