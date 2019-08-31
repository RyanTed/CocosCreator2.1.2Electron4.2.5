(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/collider/CCPhysicsChainCollider.js';
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
        var PTM_RATIO = require('../CCPhysicsTypes').PTM_RATIO;
        var PhysicsChainCollider = cc.Class({
            name: 'cc.PhysicsChainCollider',
            extends: cc.PhysicsCollider,
            editor: {
                menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Chain',
                inspector: CC_EDITOR && 'packages://inspector/inspectors/comps/physics/points-base-collider.js',
                requireComponent: cc.RigidBody
            },
            properties: {
                loop: false,
                points: {
                    default: function _default() {
                        return [
                            cc.v2(-50, 0),
                            cc.v2(50, 0)
                        ];
                    },
                    type: [cc.Vec2]
                },
                threshold: {
                    default: 1,
                    serializable: false,
                    visible: false
                }
            },
            _createShape: function _createShape(scale) {
                var shape = new b2.ChainShape();
                var points = this.points;
                var vertices = [];
                for (var i = 0; i < points.length; i++) {
                    var p = points[i];
                    vertices.push(new b2.Vec2(p.x / PTM_RATIO * scale.x, p.y / PTM_RATIO * scale.y));
                }
                if (this.loop) {
                    shape.CreateLoop(vertices, vertices.length);
                } else {
                    shape.CreateChain(vertices, vertices.length);
                }
                return shape;
            },
            resetInEditor: CC_EDITOR && function () {
                this.resetPointsByContour();
            },
            resetPointsByContour: CC_EDITOR && function () {
                var PhysicsUtils = Editor.require('scene://utils/physics');
                PhysicsUtils.resetPoints(this, {
                    threshold: this.threshold,
                    loop: this.loop
                });
            }
        });
        cc.PhysicsChainCollider = module.exports = PhysicsChainCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUGh5c2ljc0NoYWluQ29sbGlkZXIuanMiLCJDOi9Vc2Vycy9uYW50YXMvZmlyZWJhbGwteC9mYl8yMS1yZWxlYXNlL2VuZ2luZS9jb2NvczJkL2NvcmUvcGh5c2ljcy9jb2xsaWRlci9DQ1BoeXNpY3NDaGFpbkNvbGxpZGVyLmpzIl0sIm5hbWVzIjpbIlBUTV9SQVRJTyIsInJlcXVpcmUiLCJQaHlzaWNzQ2hhaW5Db2xsaWRlciIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsIlBoeXNpY3NDb2xsaWRlciIsImVkaXRvciIsIm1lbnUiLCJDQ19FRElUT1IiLCJpbnNwZWN0b3IiLCJyZXF1aXJlQ29tcG9uZW50IiwiUmlnaWRCb2R5IiwicHJvcGVydGllcyIsImxvb3AiLCJwb2ludHMiLCJkZWZhdWx0IiwidjIiLCJ0eXBlIiwiVmVjMiIsInRocmVzaG9sZCIsInNlcmlhbGl6YWJsZSIsInZpc2libGUiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNoYXBlIiwiYjIiLCJDaGFpblNoYXBlIiwidmVydGljZXMiLCJpIiwibGVuZ3RoIiwicCIsInB1c2giLCJ4IiwieSIsIkNyZWF0ZUxvb3AiLCJDcmVhdGVDaGFpbiIsInJlc2V0SW5FZGl0b3IiLCJyZXNldFBvaW50c0J5Q29udG91ciIsIlBoeXNpY3NVdGlscyIsIkVkaXRvciIsInJlc2V0UG9pbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBMEJBLElBQUlBLFNBQUFBLEdBQVlDLE9BQUFBLENBQVEsbUJBQVJBLEVBQTZCRCxTQUE3QztRQU1BLElBQUlFLG9CQUFBQSxHQUF1QkMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ2hDRSxJQUFBQSxFQUFNLHlCQUQwQjtBQUFBLFlBRWhDQyxPQUFBQSxFQUFTSCxFQUFBQSxDQUFH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LGlCQUEvQnlCLEVBRjJDO0FBQUEsYUE5RGY7QUFBQSxTQUFUckMsQ0FBM0I7UUFvRUFBLEVBQUFBLENBQUdELG9CQUFIQyxHQUEwQndDLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCekMsb0JBQTNDQyIsImZpbGUiOiJDQ1BoeXNpY3NDaGFpbkNvbGxpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxudmFyIFBUTV9SQVRJTyA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuUFRNX1JBVElPO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBQaHlzaWNzQ2hhaW5Db2xsaWRlclxyXG4gKiBAZXh0ZW5kcyBQb2x5Z29uQ29sbGlkZXJcclxuICovXHJcbnZhciBQaHlzaWNzQ2hhaW5Db2xsaWRlciA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6ICdjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcicsXHJcbiAgICBleHRlbmRzOiBjYy5QaHlzaWNzQ29sbGlkZXIsXHJcblxyXG4gICAgZWRpdG9yOiB7XHJcbiAgICAgICAgbWVudTogQ0NfRURJVE9SICYmICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucGh5c2ljcy9Db2xsaWRlci9DaGFpbicsXHJcbiAgICAgICAgaW5zcGVjdG9yOiBDQ19FRElUT1IgJiYgJ3BhY2thZ2VzOi8vaW5zcGVjdG9yL2luc3BlY3RvcnMvY29tcHMvcGh5c2ljcy9wb2ludHMtYmFzZS1jb2xsaWRlci5qcycsXHJcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XHJcbiAgICB9LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIFdoZXRoZXIgdGhlIGNoYWluIGlzIGxvb3BcclxuICAgICAgICAgKiAhI3poIOmTvuadoeaYr+WQpummluWwvuebuOi/nlxyXG4gICAgICAgICAqIEBwcm9wZXJ0eSBsb29wXHJcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbG9vcDogZmFsc2UsXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqICEjZW4gQ2hhaW4gcG9pbnRzXHJcbiAgICAgICAgICogISN6aCDpk77mnaHpobbngrnmlbDnu4RcclxuICAgICAgICAgKiBAcHJvcGVydHkgcG9pbnRzXHJcbiAgICAgICAgICogQHR5cGUge1ZlYzJbXX1cclxuICAgICAgICAgKi9cclxuICAgICAgICBwb2ludHM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgIHJldHVybiBbY2MudjIoLTUwLCAwKSwgY2MudjIoNTAsIDApXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLlZlYzJdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdGhyZXNob2xkOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgX2NyZWF0ZVNoYXBlOiBmdW5jdGlvbiAoc2NhbGUpIHtcclxuICAgICAgICB2YXIgc2hhcGUgPSBuZXcgYjIuQ2hhaW5TaGFwZSgpO1xyXG5cclxuICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHM7XHJcbiAgICAgICAgdmFyIHZlcnRpY2VzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBwb2ludHNbaV07XHJcbiAgICAgICAgICAgIHZlcnRpY2VzLnB1c2goIG5ldyBiMi5WZWMyKHAueC9QVE1fUkFUSU8qc2NhbGUueCwgcC55L1BUTV9SQVRJTypzY2FsZS55KSApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubG9vcCkge1xyXG4gICAgICAgICAgICBzaGFwZS5DcmVhdGVMb29wKHZlcnRpY2VzLCB2ZXJ0aWNlcy5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2hhcGUuQ3JlYXRlQ2hhaW4odmVydGljZXMsIHZlcnRpY2VzLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzaGFwZTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRJbkVkaXRvcjogQ0NfRURJVE9SICYmIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0UG9pbnRzQnlDb250b3VyKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0UG9pbnRzQnlDb250b3VyOiBDQ19FRElUT1IgJiYgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBQaHlzaWNzVXRpbHMgPSBFZGl0b3IucmVxdWlyZSgnc2NlbmU6Ly91dGlscy9waHlzaWNzJyk7XHJcbiAgICAgICAgUGh5c2ljc1V0aWxzLnJlc2V0UG9pbnRzKHRoaXMsIHt0aHJlc2hvbGQ6IHRoaXMudGhyZXNob2xkLCBsb29wOiB0aGlzLmxvb3B9KTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jYy5QaHlzaWNzQ2hhaW5Db2xsaWRlciA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc0NoYWluQ29sbGlkZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG52YXIgUFRNX1JBVElPID0gcmVxdWlyZSgnLi4vQ0NQaHlzaWNzVHlwZXMnKS5QVE1fUkFUSU87XG5cbi8qKlxyXG4gKiBAY2xhc3MgUGh5c2ljc0NoYWluQ29sbGlkZXJcclxuICogQGV4dGVuZHMgUG9seWdvbkNvbGxpZGVyXHJcbiAqL1xudmFyIFBoeXNpY3NDaGFpbkNvbGxpZGVyID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcicsXG4gICAgZXh0ZW5kczogY2MuUGh5c2ljc0NvbGxpZGVyLFxuXG4gICAgZWRpdG9yOiB7XG4gICAgICAgIG1lbnU6IENDX0VESVRPUiAmJiAnaTE4bjpNQUlOX01FTlUuY29tcG9uZW50LnBoeXNpY3MvQ29sbGlkZXIvQ2hhaW4nLFxuICAgICAgICBpbnNwZWN0b3I6IENDX0VESVRPUiAmJiAncGFja2FnZXM6Ly9pbnNwZWN0b3IvaW5zcGVjdG9ycy9jb21wcy9waHlzaWNzL3BvaW50cy1iYXNlLWNvbGxpZGVyLmpzJyxcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XG4gICAgfSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogISNlbiBXaGV0aGVyIHRoZSBjaGFpbiBpcyBsb29wXHJcbiAgICAgICAgICogISN6aCDpk77mnaHmmK/lkKbpppblsL7nm7jov55cclxuICAgICAgICAgKiBAcHJvcGVydHkgbG9vcFxyXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxyXG4gICAgICAgICAqL1xuICAgICAgICBsb29wOiBmYWxzZSxcblxuICAgICAgICAvKipcclxuICAgICAgICAgKiAhI2VuIENoYWluIHBvaW50c1xyXG4gICAgICAgICAqICEjemgg6ZO+5p2h6aG254K55pWw57uEXHJcbiAgICAgICAgICogQHByb3BlcnR5IHBvaW50c1xyXG4gICAgICAgICAqIEB0eXBlIHtWZWMyW119XHJcbiAgICAgICAgICovXG4gICAgICAgIHBvaW50czoge1xuICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtjYy52MigtNTAsIDApLCBjYy52Mig1MCwgMCldO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5WZWMyXVxuICAgICAgICB9LFxuXG4gICAgICAgIHRocmVzaG9sZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9jcmVhdGVTaGFwZTogZnVuY3Rpb24gX2NyZWF0ZVNoYXBlKHNjYWxlKSB7XG4gICAgICAgIHZhciBzaGFwZSA9IG5ldyBiMi5DaGFpblNoYXBlKCk7XG5cbiAgICAgICAgdmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuICAgICAgICB2YXIgdmVydGljZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaChuZXcgYjIuVmVjMihwLnggLyBQVE1fUkFUSU8gKiBzY2FsZS54LCBwLnkgLyBQVE1fUkFUSU8gKiBzY2FsZS55KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgICAgICBzaGFwZS5DcmVhdGVMb29wKHZlcnRpY2VzLCB2ZXJ0aWNlcy5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhcGUuQ3JlYXRlQ2hhaW4odmVydGljZXMsIHZlcnRpY2VzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoYXBlO1xuICAgIH0sXG5cbiAgICByZXNldEluRWRpdG9yOiBDQ19FRElUT1IgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0UG9pbnRzQnlDb250b3VyKCk7XG4gICAgfSxcblxuICAgIHJlc2V0UG9pbnRzQnlDb250b3VyOiBDQ19FRElUT1IgJiYgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgUGh5c2ljc1V0aWxzID0gRWRpdG9yLnJlcXVpcmUoJ3NjZW5lOi8vdXRpbHMvcGh5c2ljcycpO1xuICAgICAgICBQaHlzaWNzVXRpbHMucmVzZXRQb2ludHModGhpcywgeyB0aHJlc2hvbGQ6IHRoaXMudGhyZXNob2xkLCBsb29wOiB0aGlzLmxvb3AgfSk7XG4gICAgfVxufSk7XG5cbmNjLlBoeXNpY3NDaGFpbkNvbGxpZGVyID0gbW9kdWxlLmV4cG9ydHMgPSBQaHlzaWNzQ2hhaW5Db2xsaWRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrTkRVR2g1YzJsamMwTm9ZV2x1UTI5c2JHbGtaWEl1YW5NaVhTd2libUZ0WlhNaU9sc2lVRlJOWDFKQlZFbFBJaXdpY21WeGRXbHlaU0lzSWxCb2VYTnBZM05EYUdGcGJrTnZiR3hwWkdWeUlpd2lZMk1pTENKRGJHRnpjeUlzSW01aGJXVWlMQ0psZUhSbGJtUnpJaXdpVUdoNWMybGpjME52Ykd4cFpHVnlJaXdpWldScGRHOXlJaXdpYldWdWRTSXNJa05EWDBWRVNWUlBVaUlzSW1sdWMzQmxZM1J2Y2lJc0luSmxjWFZwY21WRGIyMXdiMjVsYm5RaUxDSlNhV2RwWkVKdlpIa2lMQ0p3Y205d1pYSjBhV1Z6SWl3aWJHOXZjQ0lzSW5CdmFXNTBjeUlzSW1SbFptRjFiSFFpTENKMk1pSXNJblI1Y0dVaUxDSldaV015SWl3aWRHaHlaWE5vYjJ4a0lpd2ljMlZ5YVdGc2FYcGhZbXhsSWl3aWRtbHphV0pzWlNJc0lsOWpjbVZoZEdWVGFHRndaU0lzSW5OallXeGxJaXdpYzJoaGNHVWlMQ0ppTWlJc0lrTm9ZV2x1VTJoaGNHVWlMQ0oyWlhKMGFXTmxjeUlzSW1raUxDSnNaVzVuZEdnaUxDSndJaXdpY0hWemFDSXNJbmdpTENKNUlpd2lRM0psWVhSbFRHOXZjQ0lzSWtOeVpXRjBaVU5vWVdsdUlpd2ljbVZ6WlhSSmJrVmthWFJ2Y2lJc0luSmxjMlYwVUc5cGJuUnpRbmxEYjI1MGIzVnlJaXdpVUdoNWMybGpjMVYwYVd4eklpd2lSV1JwZEc5eUlpd2ljbVZ6WlhSUWIybHVkSE1pTENKdGIyUjFiR1VpTENKbGVIQnZjblJ6SWwwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUQkNRU3hKUVVGSlFTeFpRVUZaUXl4UlFVRlJMRzFDUVVGU0xFVkJRVFpDUkN4VFFVRTNRenM3UVVGRlFUczdPenRCUVVsQkxFbEJRVWxGTEhWQ1FVRjFRa01zUjBGQlIwTXNTMEZCU0N4RFFVRlRPMEZCUTJoRFF5eFZRVUZOTEhsQ1FVUXdRanRCUVVWb1EwTXNZVUZCVTBnc1IwRkJSMGtzWlVGR2IwSTdPMEZCU1doRFF5eFpRVUZSTzBGQlEwcERMR05CUVUxRExHRkJRV0VzYVVSQlJHWTdRVUZGU2tNc2JVSkJRVmRFTEdGQlFXRXNkVVZCUm5CQ08wRkJSMHBGTERCQ1FVRnJRbFFzUjBGQlIxVTdRVUZJYWtJc1MwRktkMEk3TzBGQlZXaERReXhuUWtGQldUdEJRVU5TT3pzN096czdRVUZOUVVNc1kwRkJUU3hMUVZCRk96dEJRVk5TT3pzN096czdRVUZOUVVNc1owSkJRVkU3UVVGRFNrTXNjVUpCUVZNc2IwSkJRVms3UVVGRGFFSXNkVUpCUVU4c1EwRkJRMlFzUjBGQlIyVXNSVUZCU0N4RFFVRk5MRU5CUVVNc1JVRkJVQ3hGUVVGWExFTkJRVmdzUTBGQlJDeEZRVUZuUW1Zc1IwRkJSMlVzUlVGQlNDeERRVUZOTEVWQlFVNHNSVUZCVlN4RFFVRldMRU5CUVdoQ0xFTkJRVkE3UVVGRFNpeGhRVWhITzBGQlNVcERMR3RDUVVGTkxFTkJRVU5vUWl4SFFVRkhhVUlzU1VGQlNqdEJRVXBHTEZOQlprRTdPMEZCYzBKU1F5eHRRa0ZCVnp0QlFVTlFTaXh4UWtGQlV5eERRVVJHTzBGQlJWQkxMREJDUVVGakxFdEJSbEE3UVVGSFVFTXNjVUpCUVZNN1FVRklSanRCUVhSQ1NDeExRVlp2UWpzN1FVRjFRMmhEUXl4clFrRkJZeXh6UWtGQlZVTXNTMEZCVml4RlFVRnBRanRCUVVNelFpeFpRVUZKUXl4UlFVRlJMRWxCUVVsRExFZEJRVWRETEZWQlFWQXNSVUZCV2pzN1FVRkZRU3haUVVGSldpeFRRVUZUTEV0QlFVdEJMRTFCUVd4Q08wRkJRMEVzV1VGQlNXRXNWMEZCVnl4RlFVRm1PMEZCUTBFc1lVRkJTeXhKUVVGSlF5eEpRVUZKTEVOQlFXSXNSVUZCWjBKQkxFbEJRVWxrTEU5QlFVOWxMRTFCUVROQ0xFVkJRVzFEUkN4SFFVRnVReXhGUVVGM1F6dEJRVU53UXl4blFrRkJTVVVzU1VGQlNXaENMRTlCUVU5akxFTkJRVkFzUTBGQlVqdEJRVU5CUkN4eFFrRkJVMGtzU1VGQlZDeERRVUZsTEVsQlFVbE9MRWRCUVVkUUxFbEJRVkFzUTBGQldWa3NSVUZCUlVVc1EwRkJSaXhIUVVGSmJFTXNVMEZCU2l4SFFVRmplVUlzVFVGQlRWTXNRMEZCYUVNc1JVRkJiVU5HTEVWQlFVVkhMRU5CUVVZc1IwRkJTVzVETEZOQlFVb3NSMEZCWTNsQ0xFMUJRVTFWTEVOQlFYWkVMRU5CUVdZN1FVRkRTRHM3UVVGRlJDeFpRVUZKTEV0QlFVdHdRaXhKUVVGVUxFVkJRV1U3UVVGRFdGY3NhMEpCUVUxVkxGVkJRVTRzUTBGQmFVSlFMRkZCUVdwQ0xFVkJRVEpDUVN4VFFVRlRSU3hOUVVGd1F6dEJRVU5JTEZOQlJrUXNUVUZIU3p0QlFVTkVUQ3hyUWtGQlRWY3NWMEZCVGl4RFFVRnJRbElzVVVGQmJFSXNSVUZCTkVKQkxGTkJRVk5GTEUxQlFYSkRPMEZCUTBnN1FVRkRSQ3hsUVVGUFRDeExRVUZRTzBGQlEwZ3NTMEY0UkN0Q096dEJRVEJFYUVOWkxHMUNRVUZsTlVJc1lVRkJZU3haUVVGWk8wRkJRM0JETEdGQlFVczJRaXh2UWtGQlREdEJRVU5JTEV0Qk5VUXJRanM3UVVFNFJHaERRU3d3UWtGQmMwSTNRaXhoUVVGaExGbEJRVms3UVVGRE0wTXNXVUZCU1RoQ0xHVkJRV1ZETEU5QlFVOTRReXhQUVVGUUxFTkJRV1VzZFVKQlFXWXNRMEZCYmtJN1FVRkRRWFZETEhGQ1FVRmhSU3hYUVVGaUxFTkJRWGxDTEVsQlFYcENMRVZCUVN0Q0xFVkJRVU55UWl4WFFVRlhMRXRCUVV0QkxGTkJRV3BDTEVWQlFUUkNUaXhOUVVGTkxFdEJRVXRCTEVsQlFYWkRMRVZCUVM5Q08wRkJRMGc3UVVGcVJTdENMRU5CUVZRc1EwRkJNMEk3TzBGQmIwVkJXaXhIUVVGSFJDeHZRa0ZCU0N4SFFVRXdRbmxETEU5QlFVOURMRTlCUVZBc1IwRkJhVUl4UXl4dlFrRkJNME1pTENKbWFXeGxJam9pUTBOUWFIbHphV056UTJoaGFXNURiMnhzYVdSbGNpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYSEpjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRNdE1qQXhOaUJEYUhWcmIyNW5JRlJsWTJodWIyeHZaMmxsY3lCSmJtTXVYSEpjYmlCRGIzQjVjbWxuYUhRZ0tHTXBJREl3TVRjdE1qQXhPQ0JZYVdGdFpXNGdXV0ZxYVNCVGIyWjBkMkZ5WlNCRGJ5NHNJRXgwWkM1Y2NseHVYSEpjYmlCb2RIUndjem92TDNkM2R5NWpiMk52Y3k1amIyMHZYSEpjYmx4eVhHNGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRWdZMjl3ZVZ4eVhHNGdiMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCbGJtZHBibVVnYzI5MWNtTmxJR052WkdVZ0tIUm9aU0JjSWxOdlpuUjNZWEpsWENJcExDQmhJR3hwYldsMFpXUXNYSEpjYmlBZ2QyOXliR1IzYVdSbExDQnliM2xoYkhSNUxXWnlaV1VzSUc1dmJpMWhjM05wWjI1aFlteGxMQ0J5WlhadlkyRmliR1VnWVc1a0lHNXZiaTFsZUdOc2RYTnBkbVVnYkdsalpXNXpaVnh5WEc0Z2RHOGdkWE5sSUVOdlkyOXpJRU55WldGMGIzSWdjMjlzWld4NUlIUnZJR1JsZG1Wc2IzQWdaMkZ0WlhNZ2IyNGdlVzkxY2lCMFlYSm5aWFFnY0d4aGRHWnZjbTF6TGlCWmIzVWdjMmhoYkd4Y2NseHVJQ0J1YjNRZ2RYTmxJRU52WTI5eklFTnlaV0YwYjNJZ2MyOW1kSGRoY21VZ1ptOXlJR1JsZG1Wc2IzQnBibWNnYjNSb1pYSWdjMjltZEhkaGNtVWdiM0lnZEc5dmJITWdkR2hoZENkelhISmNiaUFnZFhObFpDQm1iM0lnWkdWMlpXeHZjR2x1WnlCbllXMWxjeTRnV1c5MUlHRnlaU0J1YjNRZ1ozSmhiblJsWkNCMGJ5QndkV0pzYVhOb0xDQmthWE4wY21saWRYUmxMRnh5WEc0Z0lITjFZbXhwWTJWdWMyVXNJR0Z1WkM5dmNpQnpaV3hzSUdOdmNHbGxjeUJ2WmlCRGIyTnZjeUJEY21WaGRHOXlMbHh5WEc1Y2NseHVJRlJvWlNCemIyWjBkMkZ5WlNCdmNpQjBiMjlzY3lCcGJpQjBhR2x6SUV4cFkyVnVjMlVnUVdkeVpXVnRaVzUwSUdGeVpTQnNhV05sYm5ObFpDd2dibTkwSUhOdmJHUXVYSEpjYmlCWWFXRnRaVzRnV1dGcWFTQlRiMlowZDJGeVpTQkRieTRzSUV4MFpDNGdjbVZ6WlhKMlpYTWdZV3hzSUhKcFoyaDBjeUJ1YjNRZ1pYaHdjbVZ6YzJ4NUlHZHlZVzUwWldRZ2RHOGdlVzkxTGx4eVhHNWNjbHh1SUZSSVJTQlRUMFpVVjBGU1JTQkpVeUJRVWs5V1NVUkZSQ0JjSWtGVElFbFRYQ0lzSUZkSlZFaFBWVlFnVjBGU1VrRk9WRmtnVDBZZ1FVNVpJRXRKVGtRc0lFVllVRkpGVTFNZ1QxSmNjbHh1SUVsTlVFeEpSVVFzSUVsT1EweFZSRWxPUnlCQ1ZWUWdUazlVSUV4SlRVbFVSVVFnVkU4Z1ZFaEZJRmRCVWxKQlRsUkpSVk1nVDBZZ1RVVlNRMGhCVGxSQlFrbE1TVlJaTEZ4eVhHNGdSa2xVVGtWVFV5QkdUMUlnUVNCUVFWSlVTVU5WVEVGU0lGQlZVbEJQVTBVZ1FVNUVJRTVQVGtsT1JsSkpUa2RGVFVWT1ZDNGdTVTRnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGWEhKY2JpQkJWVlJJVDFKVElFOVNJRU5QVUZsU1NVZElWQ0JJVDB4RVJWSlRJRUpGSUV4SlFVSk1SU0JHVDFJZ1FVNVpJRU5NUVVsTkxDQkVRVTFCUjBWVElFOVNJRTlVU0VWU1hISmNiaUJNU1VGQ1NVeEpWRmtzSUZkSVJWUklSVklnU1U0Z1FVNGdRVU5VU1U5T0lFOUdJRU5QVGxSU1FVTlVMQ0JVVDFKVUlFOVNJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxGeHlYRzRnVDFWVUlFOUdJRTlTSUVsT0lFTlBUazVGUTFSSlQwNGdWMGxVU0NCVVNFVWdVMDlHVkZkQlVrVWdUMUlnVkVoRklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGx4eVhHNGdWRWhGSUZOUFJsUlhRVkpGTGx4eVhHNGdLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2k5Y2NseHVYSEpjYm5aaGNpQlFWRTFmVWtGVVNVOGdQU0J5WlhGMWFYSmxLQ2N1TGk5RFExQm9lWE5wWTNOVWVYQmxjeWNwTGxCVVRWOVNRVlJKVHp0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCQVkyeGhjM01nVUdoNWMybGpjME5vWVdsdVEyOXNiR2xrWlhKY2NseHVJQ29nUUdWNGRHVnVaSE1nVUc5c2VXZHZia052Ykd4cFpHVnlYSEpjYmlBcUwxeHlYRzUyWVhJZ1VHaDVjMmxqYzBOb1lXbHVRMjlzYkdsa1pYSWdQU0JqWXk1RGJHRnpjeWg3WEhKY2JpQWdJQ0J1WVcxbE9pQW5ZMk11VUdoNWMybGpjME5vWVdsdVEyOXNiR2xrWlhJbkxGeHlYRzRnSUNBZ1pYaDBaVzVrY3pvZ1kyTXVVR2g1YzJsamMwTnZiR3hwWkdWeUxGeHlYRzVjY2x4dUlDQWdJR1ZrYVhSdmNqb2dlMXh5WEc0Z0lDQWdJQ0FnSUcxbGJuVTZJRU5EWDBWRVNWUlBVaUFtSmlBbmFURTRianBOUVVsT1gwMUZUbFV1WTI5dGNHOXVaVzUwTG5Cb2VYTnBZM012UTI5c2JHbGtaWEl2UTJoaGFXNG5MRnh5WEc0Z0lDQWdJQ0FnSUdsdWMzQmxZM1J2Y2pvZ1EwTmZSVVJKVkU5U0lDWW1JQ2R3WVdOcllXZGxjem92TDJsdWMzQmxZM1J2Y2k5cGJuTndaV04wYjNKekwyTnZiWEJ6TDNCb2VYTnBZM012Y0c5cGJuUnpMV0poYzJVdFkyOXNiR2xrWlhJdWFuTW5MRnh5WEc0Z0lDQWdJQ0FnSUhKbGNYVnBjbVZEYjIxd2IyNWxiblE2SUdOakxsSnBaMmxrUW05a2VWeHlYRzRnSUNBZ2ZTeGNjbHh1WEhKY2JpQWdJQ0J3Y205d1pYSjBhV1Z6T2lCN1hISmNiaUFnSUNBZ0lDQWdMeW9xWEhKY2JpQWdJQ0FnSUNBZ0lDb2dJU05sYmlCWGFHVjBhR1Z5SUhSb1pTQmphR0ZwYmlCcGN5QnNiMjl3WEhKY2JpQWdJQ0FnSUNBZ0lDb2dJU042YUNEcGs3N21uYUhtbUsvbGtLYnBwcGJsc0w3bm03am92NTVjY2x4dUlDQWdJQ0FnSUNBZ0tpQkFjSEp2Y0dWeWRIa2diRzl2Y0Z4eVhHNGdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdENiMjlzWldGdWZWeHlYRzRnSUNBZ0lDQWdJQ0FxTDF4eVhHNGdJQ0FnSUNBZ0lHeHZiM0E2SUdaaGJITmxMRnh5WEc1Y2NseHVJQ0FnSUNBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FnSUNBZ0tpQWhJMlZ1SUVOb1lXbHVJSEJ2YVc1MGMxeHlYRzRnSUNBZ0lDQWdJQ0FxSUNFamVtZ2c2Wk8rNXAyaDZhRzI1NEs1NXBXdzU3dUVYSEpjYmlBZ0lDQWdJQ0FnSUNvZ1FIQnliM0JsY25SNUlIQnZhVzUwYzF4eVhHNGdJQ0FnSUNBZ0lDQXFJRUIwZVhCbElIdFdaV015VzExOVhISmNiaUFnSUNBZ0lDQWdJQ292WEhKY2JpQWdJQ0FnSUNBZ2NHOXBiblJ6T2lCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2SUdaMWJtTjBhVzl1SUNncElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdXMk5qTG5ZeUtDMDFNQ3dnTUNrc0lHTmpMbll5S0RVd0xDQXdLVjA3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0FnSUNBZ0lDQWdJSFI1Y0dVNklGdGpZeTVXWldNeVhWeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JseHlYRzRnSUNBZ0lDQWdJSFJvY21WemFHOXNaRG9nZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPaUF4TEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6WlhKcFlXeHBlbUZpYkdVNklHWmhiSE5sTEZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyYVhOcFlteGxPaUJtWVd4elpWeHlYRzRnSUNBZ0lDQWdJSDBzWEhKY2JpQWdJQ0I5TEZ4eVhHNWNjbHh1SUNBZ0lGOWpjbVZoZEdWVGFHRndaVG9nWm5WdVkzUnBiMjRnS0hOallXeGxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSE5vWVhCbElEMGdibVYzSUdJeUxrTm9ZV2x1VTJoaGNHVW9LVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdkbUZ5SUhCdmFXNTBjeUE5SUhSb2FYTXVjRzlwYm5Sek8xeHlYRzRnSUNBZ0lDQWdJSFpoY2lCMlpYSjBhV05sY3lBOUlGdGRPMXh5WEc0Z0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NHOXBiblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3SUQwZ2NHOXBiblJ6VzJsZE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCMlpYSjBhV05sY3k1d2RYTm9LQ0J1WlhjZ1lqSXVWbVZqTWlod0xuZ3ZVRlJOWDFKQlZFbFBLbk5qWVd4bExuZ3NJSEF1ZVM5UVZFMWZVa0ZVU1U4cWMyTmhiR1V1ZVNrZ0tUdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbXh2YjNBcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2MyaGhjR1V1UTNKbFlYUmxURzl2Y0NoMlpYSjBhV05sY3l3Z2RtVnlkR2xqWlhNdWJHVnVaM1JvS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnWld4elpTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lITm9ZWEJsTGtOeVpXRjBaVU5vWVdsdUtIWmxjblJwWTJWekxDQjJaWEowYVdObGN5NXNaVzVuZEdncE8xeHlYRzRnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJoaGNHVTdYSEpjYmlBZ0lDQjlMRnh5WEc1Y2NseHVJQ0FnSUhKbGMyVjBTVzVGWkdsMGIzSTZJRU5EWDBWRVNWUlBVaUFtSmlCbWRXNWpkR2x2YmlBb0tTQjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NXlaWE5sZEZCdmFXNTBjMEo1UTI5dWRHOTFjaWdwTzF4eVhHNGdJQ0FnZlN4Y2NseHVYSEpjYmlBZ0lDQnlaWE5sZEZCdmFXNTBjMEo1UTI5dWRHOTFjam9nUTBOZlJVUkpWRTlTSUNZbUlHWjFibU4wYVc5dUlDZ3BJSHRjY2x4dUlDQWdJQ0FnSUNCMllYSWdVR2g1YzJsamMxVjBhV3h6SUQwZ1JXUnBkRzl5TG5KbGNYVnBjbVVvSjNOalpXNWxPaTh2ZFhScGJITXZjR2g1YzJsamN5Y3BPMXh5WEc0Z0lDQWdJQ0FnSUZCb2VYTnBZM05WZEdsc2N5NXlaWE5sZEZCdmFXNTBjeWgwYUdsekxDQjdkR2h5WlhOb2IyeGtPaUIwYUdsekxuUm9jbVZ6YUc5c1pDd2diRzl2Y0RvZ2RHaHBjeTVzYjI5d2ZTazdYSEpjYmlBZ0lDQjlYSEpjYm4wcE8xeHlYRzVjY2x4dVkyTXVVR2g1YzJsamMwTm9ZV2x1UTI5c2JHbGtaWElnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUZCb2VYTnBZM05EYUdGcGJrTnZiR3hwWkdWeU8xeHlYRzRpWFgwPSJdfQ==