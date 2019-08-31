(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/core/physics/collider/CCPhysicsCircleCollider.js';
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
        var PhysicsCircleCollider = cc.Class({
            name: 'cc.PhysicsCircleCollider',
            extends: cc.PhysicsCollider,
            mixins: [cc.Collider.Circle],
            editor: {
                menu: CC_EDITOR && 'i18n:MAIN_MENU.component.physics/Collider/Circle',
                requireComponent: cc.RigidBody
            },
            _createShape: function _createShape(scale) {
                var scaleX = Math.abs(scale.x);
                var scaleY = Math.abs(scale.y);
                var offsetX = this.offset.x / PTM_RATIO * scaleX;
                var offsetY = this.offset.y / PTM_RATIO * scaleY;
                var shape = new b2.CircleShape();
                shape.m_radius = this.radius / PTM_RATIO * scaleX;
                shape.m_p = new b2.Vec2(offsetX, offsetY);
                return shape;
            }
        });
        cc.PhysicsCircleCollider = module.exports = PhysicsCircleCollider;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNDUGh5c2ljc0NpcmNsZUNvbGxpZGVyLmpzIiwiQzovVXNlcnMvbmFudGFzL2ZpcmViYWxsLXgvZmJfMjEtcmVsZWFzZS9lbmdpbmUvY29jb3MyZC9jb3JlL3BoeXNpY3MvY29sbGlkZXIvQ0NQaHlzaWNzQ2lyY2xlQ29sbGlkZXIuanMiXSwibmFtZXMiOlsiUFRNX1JBVElPIiwicmVxdWlyZSIsIlBoeXNpY3NDaXJjbGVDb2xsaWRlciIsImNjIiwiQ2xhc3MiLCJuYW1lIiwiZXh0ZW5kcyIsIlBoeXNpY3NDb2xsaWRlciIsIm1peGlucyIsIkNvbGxpZGVyIiwiQ2lyY2xlIiwiZWRpdG9yIiwibWVudSIsIkNDX0VESVRPUiIsInJlcXVpcmVDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJfY3JlYXRlU2hhcGUiLCJzY2FsZSIsInNjYWxlWCIsIk1hdGgiLCJhYnMiLCJ4Iiwic2NhbGVZIiwieSIsIm9mZnNldFgiLCJvZmZzZXQiLCJvZmZzZXRZIiwic2hhcGUiLCJiMiIsIkNpcmNsZVNoYXBlIiwibV9yYWRpdXMiLCJyYWRpdXMiLCJtX3AiLCJWZWMyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUEsT0FBQSxHQUFBLE9BQUEsT0FBQSxLQUFBLFdBQUEsSUFBQSxPQUFBLE9BQUEsS0FBQSxXQUFBOzs7Ozs7Ozs7Ozs7O1FBMEJBLElBQUlBLFNBQUFBLEdBQVlDLE9BQUFBLENBQVEsbUJBQVJBLEVBQTZCRCxTQUE3QztRQU9BLElBQUlFLHFCQUFBQSxHQUF3QkMsRUFBQUEsQ0FBR0MsS0FBSEQsQ0FBUztBQUFBLFlBQ2pDRSxJQUFBQSxFQUFNLDBCQUQyQjtBQUFBLFlBRWpDQyxPQUFBQSxFQUFTSCxFQUFBQSxDQUFHSSxlQUZxQjtBQUFBLFlBR2pDQyxNQUFBQSxFQUFRLENBQUNMLEVBQUFBLENBQUdNLFFBQUhOLENBQVlPLE1BQWIsQ0FIeUI7QUFBQSxZQUtqQ0MsTUFBQUEsRUFBUTtBQUFBLGdCQUNKQyxJQUFBQSxFQUFNQyxTQUFBQSxJQUFhLGtEQURmO0FBQUEsZ0JBRUpDLGdCQUFBQSxFQUFrQlgsRUFBQUEsQ0FBR1ksU0FGakI7QUFBQSxhQUx5QjtBQUFBLFlBVWpDQyxZQUFBQSxFQUFjLFNBQUEsWUFBQSxDQUFVQyxLQUFWLEVBQWlCO0FBQUEsZ0JBQzNCLElBQUlDLE1BQUFBLEdBQVNDLElBQUFBLENBQUtDLEdBQUxELENBQVNGLEtBQUFBLENBQU1JLENBQWZGLENBQWIsQ0FEMkI7QUFBQSxnQkFFM0IsSUFBSUcsTUFBQUEsR0FBU0gsSUFBQUEsQ0FBS0MsR0FBTEQsQ0FBU0YsS0FBQUEsQ0FBTU0sQ0FBZkosQ0FBYixDQUYyQjtBQUFBLGdCQUczQixJQUFJSyxPQUFBQSxHQUFVLEtBQUtDLE1BQUwsQ0FBWUosQ0FBWixHQUFjckIsU0FBZCxHQUEwQmtCLE1BQXhDLENBSDJCO0FBQUEsZ0JBSTNCLElBQUlRLE9BQUFBLEdBQVUsS0FBS0QsTUFBTCxDQUFZRixDQUFaLEdBQWN2QixTQUFkLEdBQTBCc0IsTUFBeEMsQ0FKMkI7QUFBQSxnQkFNM0IsSUFBSUssS0FBQUEsR0FBUSxJQUFJQyxFQUFBQSxDQUFHQyxXQUFQLEVBQVosQ0FOMkI7QUFBQSxnQkFPM0JGLEtBQUFBLENBQU1HLFFBQU5ILEdBQWlCLEtBQUtJLE1BQUwsR0FBYy9CLFNBQWQsR0FBMEJrQixNQUEzQ1MsQ0FQMkI7QUFBQSxnQkFRM0JBLEtBQUFBLENBQU1LLEdBQU5MLEdBQVksSUFBSUMsRUFBQUEsQ0FBR0ssSUFBUCxDQUFZVCxPQUFaLEVBQXFCRSxPQUFyQixDQUFaQyxDQVIyQjtBQUFBLGdCQVUzQixPQUFPQSxLQUFQLENBVjJCO0FBQUEsYUFWRTtBQUFBLFNBQVR4QixDQUE1QjtRQXdCQUEsRUFBQUEsQ0FBR0QscUJBQUhDLEdBQTJCK0IsTUFBQUEsQ0FBT0MsT0FBUEQsR0FBaUJoQyxxQkFBNUNDIiwiZmlsZSI6IkNDUGh5c2ljc0NpcmNsZUNvbGxpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIENvcHlyaWdodCAoYykgMjAxMy0yMDE2IENodWtvbmcgVGVjaG5vbG9naWVzIEluYy5cclxuIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLlxyXG5cclxuIGh0dHBzOi8vd3d3LmNvY29zLmNvbS9cclxuXHJcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcbiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGVuZ2luZSBzb3VyY2UgY29kZSAodGhlIFwiU29mdHdhcmVcIiksIGEgbGltaXRlZCxcclxuICB3b3JsZHdpZGUsIHJveWFsdHktZnJlZSwgbm9uLWFzc2lnbmFibGUsIHJldm9jYWJsZSBhbmQgbm9uLWV4Y2x1c2l2ZSBsaWNlbnNlXHJcbiB0byB1c2UgQ29jb3MgQ3JlYXRvciBzb2xlbHkgdG8gZGV2ZWxvcCBnYW1lcyBvbiB5b3VyIHRhcmdldCBwbGF0Zm9ybXMuIFlvdSBzaGFsbFxyXG4gIG5vdCB1c2UgQ29jb3MgQ3JlYXRvciBzb2Z0d2FyZSBmb3IgZGV2ZWxvcGluZyBvdGhlciBzb2Z0d2FyZSBvciB0b29scyB0aGF0J3NcclxuICB1c2VkIGZvciBkZXZlbG9waW5nIGdhbWVzLiBZb3UgYXJlIG5vdCBncmFudGVkIHRvIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsXHJcbiAgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIENvY29zIENyZWF0b3IuXHJcblxyXG4gVGhlIHNvZnR3YXJlIG9yIHRvb2xzIGluIHRoaXMgTGljZW5zZSBBZ3JlZW1lbnQgYXJlIGxpY2Vuc2VkLCBub3Qgc29sZC5cclxuIFhpYW1lbiBZYWppIFNvZnR3YXJlIENvLiwgTHRkLiByZXNlcnZlcyBhbGwgcmlnaHRzIG5vdCBleHByZXNzbHkgZ3JhbnRlZCB0byB5b3UuXHJcblxyXG4gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG4gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcbiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcbiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiBUSEUgU09GVFdBUkUuXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxudmFyIFBUTV9SQVRJTyA9IHJlcXVpcmUoJy4uL0NDUGh5c2ljc1R5cGVzJykuUFRNX1JBVElPO1xyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBQaHlzaWNzQ2lyY2xlQ29sbGlkZXJcclxuICogQGV4dGVuZHMgUGh5c2ljc0NvbGxpZGVyXHJcbiAqIEB1c2VzIENvbGxpZGVyLkNpcmNsZVxyXG4gKi9cclxudmFyIFBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IGNjLkNsYXNzKHtcclxuICAgIG5hbWU6ICdjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXInLFxyXG4gICAgZXh0ZW5kczogY2MuUGh5c2ljc0NvbGxpZGVyLFxyXG4gICAgbWl4aW5zOiBbY2MuQ29sbGlkZXIuQ2lyY2xlXSxcclxuXHJcbiAgICBlZGl0b3I6IHtcclxuICAgICAgICBtZW51OiBDQ19FRElUT1IgJiYgJ2kxOG46TUFJTl9NRU5VLmNvbXBvbmVudC5waHlzaWNzL0NvbGxpZGVyL0NpcmNsZScsXHJcbiAgICAgICAgcmVxdWlyZUNvbXBvbmVudDogY2MuUmlnaWRCb2R5XHJcbiAgICB9LFxyXG5cclxuICAgIF9jcmVhdGVTaGFwZTogZnVuY3Rpb24gKHNjYWxlKSB7XHJcbiAgICAgICAgdmFyIHNjYWxlWCA9IE1hdGguYWJzKHNjYWxlLngpO1xyXG4gICAgICAgIHZhciBzY2FsZVkgPSBNYXRoLmFicyhzY2FsZS55KTtcclxuICAgICAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0LngvUFRNX1JBVElPICogc2NhbGVYO1xyXG4gICAgICAgIHZhciBvZmZzZXRZID0gdGhpcy5vZmZzZXQueS9QVE1fUkFUSU8gKiBzY2FsZVk7XHJcblxyXG4gICAgICAgIHZhciBzaGFwZSA9IG5ldyBiMi5DaXJjbGVTaGFwZSgpO1xyXG4gICAgICAgIHNoYXBlLm1fcmFkaXVzID0gdGhpcy5yYWRpdXMgLyBQVE1fUkFUSU8gKiBzY2FsZVg7XHJcbiAgICAgICAgc2hhcGUubV9wID0gbmV3IGIyLlZlYzIob2Zmc2V0WCwgb2Zmc2V0WSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzaGFwZTtcclxuICAgIH1cclxufSk7XHJcblxyXG5jYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBtb2R1bGUuZXhwb3J0cyA9IFBoeXNpY3NDaXJjbGVDb2xsaWRlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gQ29weXJpZ2h0IChjKSAyMDEzLTIwMTYgQ2h1a29uZyBUZWNobm9sb2dpZXMgSW5jLlxyXG4gQ29weXJpZ2h0IChjKSAyMDE3LTIwMTggWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuXHJcblxyXG4gaHR0cHM6Ly93d3cuY29jb3MuY29tL1xyXG5cclxuIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZW5naW5lIHNvdXJjZSBjb2RlICh0aGUgXCJTb2Z0d2FyZVwiKSwgYSBsaW1pdGVkLFxyXG4gIHdvcmxkd2lkZSwgcm95YWx0eS1mcmVlLCBub24tYXNzaWduYWJsZSwgcmV2b2NhYmxlIGFuZCBub24tZXhjbHVzaXZlIGxpY2Vuc2VcclxuIHRvIHVzZSBDb2NvcyBDcmVhdG9yIHNvbGVseSB0byBkZXZlbG9wIGdhbWVzIG9uIHlvdXIgdGFyZ2V0IHBsYXRmb3Jtcy4gWW91IHNoYWxsXHJcbiAgbm90IHVzZSBDb2NvcyBDcmVhdG9yIHNvZnR3YXJlIGZvciBkZXZlbG9waW5nIG90aGVyIHNvZnR3YXJlIG9yIHRvb2xzIHRoYXQnc1xyXG4gIHVzZWQgZm9yIGRldmVsb3BpbmcgZ2FtZXMuIFlvdSBhcmUgbm90IGdyYW50ZWQgdG8gcHVibGlzaCwgZGlzdHJpYnV0ZSxcclxuICBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgQ29jb3MgQ3JlYXRvci5cclxuXHJcbiBUaGUgc29mdHdhcmUgb3IgdG9vbHMgaW4gdGhpcyBMaWNlbnNlIEFncmVlbWVudCBhcmUgbGljZW5zZWQsIG5vdCBzb2xkLlxyXG4gWGlhbWVuIFlhamkgU29mdHdhcmUgQ28uLCBMdGQuIHJlc2VydmVzIGFsbCByaWdodHMgbm90IGV4cHJlc3NseSBncmFudGVkIHRvIHlvdS5cclxuXHJcbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG4gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cclxuIFRIRSBTT0ZUV0FSRS5cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBQVE1fUkFUSU8gPSByZXF1aXJlKCcuLi9DQ1BoeXNpY3NUeXBlcycpLlBUTV9SQVRJTztcblxuLyoqXHJcbiAqIEBjbGFzcyBQaHlzaWNzQ2lyY2xlQ29sbGlkZXJcclxuICogQGV4dGVuZHMgUGh5c2ljc0NvbGxpZGVyXHJcbiAqIEB1c2VzIENvbGxpZGVyLkNpcmNsZVxyXG4gKi9cbnZhciBQaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBjYy5DbGFzcyh7XG4gIG5hbWU6ICdjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXInLFxuICBleHRlbmRzOiBjYy5QaHlzaWNzQ29sbGlkZXIsXG4gIG1peGluczogW2NjLkNvbGxpZGVyLkNpcmNsZV0sXG5cbiAgZWRpdG9yOiB7XG4gICAgbWVudTogQ0NfRURJVE9SICYmICdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucGh5c2ljcy9Db2xsaWRlci9DaXJjbGUnLFxuICAgIHJlcXVpcmVDb21wb25lbnQ6IGNjLlJpZ2lkQm9keVxuICB9LFxuXG4gIF9jcmVhdGVTaGFwZTogZnVuY3Rpb24gX2NyZWF0ZVNoYXBlKHNjYWxlKSB7XG4gICAgdmFyIHNjYWxlWCA9IE1hdGguYWJzKHNjYWxlLngpO1xuICAgIHZhciBzY2FsZVkgPSBNYXRoLmFicyhzY2FsZS55KTtcbiAgICB2YXIgb2Zmc2V0WCA9IHRoaXMub2Zmc2V0LnggLyBQVE1fUkFUSU8gKiBzY2FsZVg7XG4gICAgdmFyIG9mZnNldFkgPSB0aGlzLm9mZnNldC55IC8gUFRNX1JBVElPICogc2NhbGVZO1xuXG4gICAgdmFyIHNoYXBlID0gbmV3IGIyLkNpcmNsZVNoYXBlKCk7XG4gICAgc2hhcGUubV9yYWRpdXMgPSB0aGlzLnJhZGl1cyAvIFBUTV9SQVRJTyAqIHNjYWxlWDtcbiAgICBzaGFwZS5tX3AgPSBuZXcgYjIuVmVjMihvZmZzZXRYLCBvZmZzZXRZKTtcblxuICAgIHJldHVybiBzaGFwZTtcbiAgfVxufSk7XG5cbmNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IG1vZHVsZS5leHBvcnRzID0gUGh5c2ljc0NpcmNsZUNvbGxpZGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtORFVHaDVjMmxqYzBOcGNtTnNaVU52Ykd4cFpHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYklsQlVUVjlTUVZSSlR5SXNJbkpsY1hWcGNtVWlMQ0pRYUhsemFXTnpRMmx5WTJ4bFEyOXNiR2xrWlhJaUxDSmpZeUlzSWtOc1lYTnpJaXdpYm1GdFpTSXNJbVY0ZEdWdVpITWlMQ0pRYUhsemFXTnpRMjlzYkdsa1pYSWlMQ0p0YVhocGJuTWlMQ0pEYjJ4c2FXUmxjaUlzSWtOcGNtTnNaU0lzSW1Wa2FYUnZjaUlzSW0xbGJuVWlMQ0pEUTE5RlJFbFVUMUlpTENKeVpYRjFhWEpsUTI5dGNHOXVaVzUwSWl3aVVtbG5hV1JDYjJSNUlpd2lYMk55WldGMFpWTm9ZWEJsSWl3aWMyTmhiR1VpTENKelkyRnNaVmdpTENKTllYUm9JaXdpWVdKeklpd2llQ0lzSW5OallXeGxXU0lzSW5raUxDSnZabVp6WlhSWUlpd2liMlptYzJWMElpd2liMlptYzJWMFdTSXNJbk5vWVhCbElpd2lZaklpTENKRGFYSmpiR1ZUYUdGd1pTSXNJbTFmY21Ga2FYVnpJaXdpY21Ga2FYVnpJaXdpYlY5d0lpd2lWbVZqTWlJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJNRUpCTEVsQlFVbEJMRmxCUVZsRExGRkJRVkVzYlVKQlFWSXNSVUZCTmtKRUxGTkJRVGRET3p0QlFVVkJPenM3T3p0QlFVdEJMRWxCUVVsRkxIZENRVUYzUWtNc1IwRkJSME1zUzBGQlNDeERRVUZUTzBGQlEycERReXhSUVVGTkxEQkNRVVF5UWp0QlFVVnFRME1zVjBGQlUwZ3NSMEZCUjBrc1pVRkdjVUk3UVVGSGFrTkRMRlZCUVZFc1EwRkJRMHdzUjBGQlIwMHNVVUZCU0N4RFFVRlpReXhOUVVGaUxFTkJTSGxDT3p0QlFVdHFRME1zVlVGQlVUdEJRVU5LUXl4VlFVRk5ReXhoUVVGaExHdEVRVVJtTzBGQlJVcERMSE5DUVVGclFsZ3NSMEZCUjFrN1FVRkdha0lzUjBGTWVVSTdPMEZCVldwRFF5eG5Ra0ZCWXl4elFrRkJWVU1zUzBGQlZpeEZRVUZwUWp0QlFVTXpRaXhSUVVGSlF5eFRRVUZUUXl4TFFVRkxReXhIUVVGTUxFTkJRVk5JTEUxQlFVMUpMRU5CUVdZc1EwRkJZanRCUVVOQkxGRkJRVWxETEZOQlFWTklMRXRCUVV0RExFZEJRVXdzUTBGQlUwZ3NUVUZCVFUwc1EwRkJaaXhEUVVGaU8wRkJRMEVzVVVGQlNVTXNWVUZCVlN4TFFVRkxReXhOUVVGTUxFTkJRVmxLTEVOQlFWb3NSMEZCWTNKQ0xGTkJRV1FzUjBGQk1FSnJRaXhOUVVGNFF6dEJRVU5CTEZGQlFVbFJMRlZCUVZVc1MwRkJTMFFzVFVGQlRDeERRVUZaUml4RFFVRmFMRWRCUVdOMlFpeFRRVUZrTEVkQlFUQkNjMElzVFVGQmVFTTdPMEZCUlVFc1VVRkJTVXNzVVVGQlVTeEpRVUZKUXl4SFFVRkhReXhYUVVGUUxFVkJRVm83UVVGRFFVWXNWVUZCVFVjc1VVRkJUaXhIUVVGcFFpeExRVUZMUXl4TlFVRk1MRWRCUVdNdlFpeFRRVUZrTEVkQlFUQkNhMElzVFVGQk0wTTdRVUZEUVZNc1ZVRkJUVXNzUjBGQlRpeEhRVUZaTEVsQlFVbEtMRWRCUVVkTExFbEJRVkFzUTBGQldWUXNUMEZCV2l4RlFVRnhRa1VzVDBGQmNrSXNRMEZCV2pzN1FVRkZRU3hYUVVGUFF5eExRVUZRTzBGQlEwZzdRVUZ5UW1kRExFTkJRVlFzUTBGQk5VSTdPMEZCZDBKQmVFSXNSMEZCUjBRc2NVSkJRVWdzUjBGQk1rSm5ReXhQUVVGUFF5eFBRVUZRTEVkQlFXbENha01zY1VKQlFUVkRJaXdpWm1sc1pTSTZJa05EVUdoNWMybGpjME5wY21Oc1pVTnZiR3hwWkdWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNjbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TXkweU1ERTJJRU5vZFd0dmJtY2dWR1ZqYUc1dmJHOW5hV1Z6SUVsdVl5NWNjbHh1SUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TnkweU1ERTRJRmhwWVcxbGJpQlpZV3BwSUZOdlpuUjNZWEpsSUVOdkxpd2dUSFJrTGx4eVhHNWNjbHh1SUdoMGRIQnpPaTh2ZDNkM0xtTnZZMjl6TG1OdmJTOWNjbHh1WEhKY2JpQlFaWEp0YVhOemFXOXVJR2x6SUdobGNtVmllU0JuY21GdWRHVmtMQ0JtY21WbElHOW1JR05vWVhKblpTd2dkRzhnWVc1NUlIQmxjbk52YmlCdlluUmhhVzVwYm1jZ1lTQmpiM0I1WEhKY2JpQnZaaUIwYUdseklITnZablIzWVhKbElHRnVaQ0JoYzNOdlkybGhkR1ZrSUdWdVoybHVaU0J6YjNWeVkyVWdZMjlrWlNBb2RHaGxJRndpVTI5bWRIZGhjbVZjSWlrc0lHRWdiR2x0YVhSbFpDeGNjbHh1SUNCM2IzSnNaSGRwWkdVc0lISnZlV0ZzZEhrdFpuSmxaU3dnYm05dUxXRnpjMmxuYm1GaWJHVXNJSEpsZG05allXSnNaU0JoYm1RZ2JtOXVMV1Y0WTJ4MWMybDJaU0JzYVdObGJuTmxYSEpjYmlCMGJ5QjFjMlVnUTI5amIzTWdRM0psWVhSdmNpQnpiMnhsYkhrZ2RHOGdaR1YyWld4dmNDQm5ZVzFsY3lCdmJpQjViM1Z5SUhSaGNtZGxkQ0J3YkdGMFptOXliWE11SUZsdmRTQnphR0ZzYkZ4eVhHNGdJRzV2ZENCMWMyVWdRMjlqYjNNZ1EzSmxZWFJ2Y2lCemIyWjBkMkZ5WlNCbWIzSWdaR1YyWld4dmNHbHVaeUJ2ZEdobGNpQnpiMlowZDJGeVpTQnZjaUIwYjI5c2N5QjBhR0YwSjNOY2NseHVJQ0IxYzJWa0lHWnZjaUJrWlhabGJHOXdhVzVuSUdkaGJXVnpMaUJaYjNVZ1lYSmxJRzV2ZENCbmNtRnVkR1ZrSUhSdklIQjFZbXhwYzJnc0lHUnBjM1J5YVdKMWRHVXNYSEpjYmlBZ2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUVOdlkyOXpJRU55WldGMGIzSXVYSEpjYmx4eVhHNGdWR2hsSUhOdlpuUjNZWEpsSUc5eUlIUnZiMnh6SUdsdUlIUm9hWE1nVEdsalpXNXpaU0JCWjNKbFpXMWxiblFnWVhKbElHeHBZMlZ1YzJWa0xDQnViM1FnYzI5c1pDNWNjbHh1SUZocFlXMWxiaUJaWVdwcElGTnZablIzWVhKbElFTnZMaXdnVEhSa0xpQnlaWE5sY25abGN5QmhiR3dnY21sbmFIUnpJRzV2ZENCbGVIQnlaWE56YkhrZ1ozSmhiblJsWkNCMGJ5QjViM1V1WEhKY2JseHlYRzRnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVXlCUFVseHlYRzRnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmlCTlJWSkRTRUZPVkVGQ1NVeEpWRmtzWEhKY2JpQkdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUaUJPVHlCRlZrVk9WQ0JUU0VGTVRDQlVTRVZjY2x4dUlFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc0lFUkJUVUZIUlZNZ1QxSWdUMVJJUlZKY2NseHVJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSWdUMVJJUlZKWFNWTkZMQ0JCVWtsVFNVNUhJRVpTVDAwc1hISmNiaUJQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VVZ1ZWTkZJRTlTSUU5VVNFVlNJRVJGUVV4SlRrZFRJRWxPWEhKY2JpQlVTRVVnVTA5R1ZGZEJVa1V1WEhKY2JpQXFLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FLaW9xTDF4eVhHNWNjbHh1ZG1GeUlGQlVUVjlTUVZSSlR5QTlJSEpsY1hWcGNtVW9KeTR1TDBORFVHaDVjMmxqYzFSNWNHVnpKeWt1VUZSTlgxSkJWRWxQTzF4eVhHNWNjbHh1THlvcVhISmNiaUFxSUVCamJHRnpjeUJRYUhsemFXTnpRMmx5WTJ4bFEyOXNiR2xrWlhKY2NseHVJQ29nUUdWNGRHVnVaSE1nVUdoNWMybGpjME52Ykd4cFpHVnlYSEpjYmlBcUlFQjFjMlZ6SUVOdmJHeHBaR1Z5TGtOcGNtTnNaVnh5WEc0Z0tpOWNjbHh1ZG1GeUlGQm9lWE5wWTNORGFYSmpiR1ZEYjJ4c2FXUmxjaUE5SUdOakxrTnNZWE56S0h0Y2NseHVJQ0FnSUc1aGJXVTZJQ2RqWXk1UWFIbHphV056UTJseVkyeGxRMjlzYkdsa1pYSW5MRnh5WEc0Z0lDQWdaWGgwWlc1a2N6b2dZMk11VUdoNWMybGpjME52Ykd4cFpHVnlMRnh5WEc0Z0lDQWdiV2w0YVc1ek9pQmJZMk11UTI5c2JHbGtaWEl1UTJseVkyeGxYU3hjY2x4dVhISmNiaUFnSUNCbFpHbDBiM0k2SUh0Y2NseHVJQ0FnSUNBZ0lDQnRaVzUxT2lCRFExOUZSRWxVVDFJZ0ppWWdKMmt4T0c0NlRVRkpUbDlOUlU1VkxtTnZiWEJ2Ym1WdWRDNXdhSGx6YVdOekwwTnZiR3hwWkdWeUwwTnBjbU5zWlNjc1hISmNiaUFnSUNBZ0lDQWdjbVZ4ZFdseVpVTnZiWEJ2Ym1WdWREb2dZMk11VW1sbmFXUkNiMlI1WEhKY2JpQWdJQ0I5TEZ4eVhHNWNjbHh1SUNBZ0lGOWpjbVZoZEdWVGFHRndaVG9nWm5WdVkzUnBiMjRnS0hOallXeGxLU0I3WEhKY2JpQWdJQ0FnSUNBZ2RtRnlJSE5qWVd4bFdDQTlJRTFoZEdndVlXSnpLSE5qWVd4bExuZ3BPMXh5WEc0Z0lDQWdJQ0FnSUhaaGNpQnpZMkZzWlZrZ1BTQk5ZWFJvTG1GaWN5aHpZMkZzWlM1NUtUdGNjbHh1SUNBZ0lDQWdJQ0IyWVhJZ2IyWm1jMlYwV0NBOUlIUm9hWE11YjJabWMyVjBMbmd2VUZSTlgxSkJWRWxQSUNvZ2MyTmhiR1ZZTzF4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ2Wm1aelpYUlpJRDBnZEdocGN5NXZabVp6WlhRdWVTOVFWRTFmVWtGVVNVOGdLaUJ6WTJGc1pWazdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lIWmhjaUJ6YUdGd1pTQTlJRzVsZHlCaU1pNURhWEpqYkdWVGFHRndaU2dwTzF4eVhHNGdJQ0FnSUNBZ0lITm9ZWEJsTG0xZmNtRmthWFZ6SUQwZ2RHaHBjeTV5WVdScGRYTWdMeUJRVkUxZlVrRlVTVThnS2lCelkyRnNaVmc3WEhKY2JpQWdJQ0FnSUNBZ2MyaGhjR1V1YlY5d0lEMGdibVYzSUdJeUxsWmxZeklvYjJabWMyVjBXQ3dnYjJabWMyVjBXU2s3WEhKY2JseHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnphR0Z3WlR0Y2NseHVJQ0FnSUgxY2NseHVmU2s3WEhKY2JseHlYRzVqWXk1UWFIbHphV056UTJseVkyeGxRMjlzYkdsa1pYSWdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkJvZVhOcFkzTkRhWEpqYkdWRGIyeHNhV1JsY2p0Y2NseHVJbDE5Il19