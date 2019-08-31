(function () {
    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
    var __module = nodeEnv ? module : { exports: {} };
    var __filename = 'engine-dev/cocos2d/compression/base64.js';
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
        var misc = require('../core/utils/misc');
        var strValue = misc.BASE64_VALUES;
        var Base64 = { name: 'Jacob__Codec__Base64' };
        Base64.decode = function Jacob__Codec__Base64__decode(input) {
            var output = [], chr1, chr2, chr3, enc1, enc2, enc3, enc4, i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
            while (i < input.length) {
                enc1 = strValue[input.charCodeAt(i++)];
                enc2 = strValue[input.charCodeAt(i++)];
                enc3 = strValue[input.charCodeAt(i++)];
                enc4 = strValue[input.charCodeAt(i++)];
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                output.push(String.fromCharCode(chr1));
                if (enc3 !== 64) {
                    output.push(String.fromCharCode(chr2));
                }
                if (enc4 !== 64) {
                    output.push(String.fromCharCode(chr3));
                }
            }
            output = output.join('');
            return output;
        };
        Base64.decodeAsArray = function Jacob__Codec__Base64___decodeAsArray(input, bytes) {
            var dec = this.decode(input), ar = [], i, j, len;
            for (i = 0, len = dec.length / bytes; i < len; i++) {
                ar[i] = 0;
                for (j = bytes - 1; j >= 0; --j) {
                    ar[i] += dec.charCodeAt(i * bytes + j) << j * 8;
                }
            }
            return ar;
        };
        module.exports = Base64;
    }
    if (nodeEnv) {
        __define(__module.exports, __require, __module);
    } else {
        __quick_compile__.registerModuleFunc(__filename, function () {
            __define(__module.exports, __require, __module);
        });
    }
}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2U2NC5qcyIsIkM6L1VzZXJzL25hbnRhcy9maXJlYmFsbC14L2ZiXzIxLXJlbGVhc2UvZW5naW5lL2NvY29zMmQvY29tcHJlc3Npb24vYmFzZTY0LmpzIl0sIm5hbWVzIjpbIm1pc2MiLCJyZXF1aXJlIiwic3RyVmFsdWUiLCJCQVNFNjRfVkFMVUVTIiwiQmFzZTY0IiwibmFtZSIsImRlY29kZSIsIkphY29iX19Db2RlY19fQmFzZTY0X19kZWNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwicmVwbGFjZSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiam9pbiIsImRlY29kZUFzQXJyYXkiLCJKYWNvYl9fQ29kZWNfX0Jhc2U2NF9fX2RlY29kZUFzQXJyYXkiLCJieXRlcyIsImRlYyIsImFyIiwiaiIsImxlbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFBLE9BQUEsR0FBQSxPQUFBLE9BQUEsS0FBQSxXQUFBLElBQUEsT0FBQSxPQUFBLEtBQUEsV0FBQTs7Ozs7O1FBTW1CLE9BQUEsaUJBQUEsQ0FBbkIsT0FBbUIsQ0FBbkIsT0FBbUIsRUFBbkIsVUFBbUIsQ0FBQTs7O1FBR25CLElBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxZQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLFVBQUEsRUFBQSxNQUFBLEVBQUE7QUFBQTs7UUFIQSxJQUFJQSxJQUFBQSxHQUFPQyxPQUFBQSxDQUFRLG9CQUFSQSxDQUFYO1FBQ0EsSUFBSUMsUUFBQUEsR0FBV0YsSUFBQUEsQ0FBS0csYUFBcEI7UUFLQSxJQUFJQyxNQUFBQSxHQUFTLEVBQUNDLElBQUFBLEVBQUssc0JBQU4sRUFBYjtRQWFBRCxNQUFBQSxDQUFPRSxNQUFQRixHQUFnQixTQUFTRyw0QkFBVCxDQUFzQ0MsS0FBdEMsRUFBNkM7QUFBQSxZ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QUF6QixFQUE0QixFQUFFQSxDQUE5QixFQUFpQztBQUFBLG9CQUM3QkQsRUFBQUEsQ0FBR1osQ0FBSFksS0FBU0QsR0FBQUEsQ0FBSVIsVUFBSlEsQ0FBZ0JYLENBQUFBLEdBQUlVLEtBQUpWLEdBQWFhLENBQTdCRixLQUFvQ0UsQ0FBQUEsR0FBSSxDQUFqREQsQ0FENkI7QUFBQSxpQkFGZTtBQUFBLGFBSDJCO0FBQUEsWUFVL0UsT0FBT0EsRUFBUCxDQVYrRTtBQUFBLFNBQW5GekI7UUFhQTRCLE1BQUFBLENBQU9DLE9BQVBELEdBQWlCNUIsTUFBakI0Qjs7O1FBeEVtQixRQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsRUFBbkIsU0FBbUIsRUFBbkIsUUFBbUI7V0FFbkI7QUFBQTs7V0FBQTtBQUFBIiwiZmlsZSI6ImJhc2U2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS1cclxuIENvcHlyaWdodCAyMDA5LTIwMTAgYnkgU3RlZmFuIFJ1c3RlcmhvbHouXHJcbiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gWW91IGNhbiBjaG9vc2UgYmV0d2VlbiBNSVQgYW5kIEJTRC0zLUNsYXVzZSBsaWNlbnNlLiBMaWNlbnNlIGZpbGUgd2lsbCBiZSBhZGRlZCBsYXRlci5cclxuIC0tKi9cclxuXHJcbnZhciBtaXNjID0gcmVxdWlyZSgnLi4vY29yZS91dGlscy9taXNjJyk7XHJcbnZhciBzdHJWYWx1ZSA9IG1pc2MuQkFTRTY0X1ZBTFVFUztcclxuXHJcbi8qKlxyXG4gKiBtaXhpbiBjYy5Db2RlYy5CYXNlNjRcclxuICovXHJcbnZhciBCYXNlNjQgPSB7bmFtZTonSmFjb2JfX0NvZGVjX19CYXNlNjQnfTtcclxuXHJcbi8qKlxyXG4gKiA8cD5cclxuICogICAgY2MuQ29kZWMuQmFzZTY0LmRlY29kZShpbnB1dFssIHVuaWNvZGU9ZmFsc2VdKSAtPiBTdHJpbmcgKGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0KS5cclxuICogPC9wPlxyXG4gKiBAZnVuY3Rpb25cclxuICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgdG8gZGVjb2RlXHJcbiAqIEByZXR1cm4ge1N0cmluZ30gRGVjb2RlcyBhIGJhc2U2NCBlbmNvZGVkIFN0cmluZ1xyXG4gKiBAZXhhbXBsZVxyXG4gKiAvL2RlY29kZSBzdHJpbmdcclxuICogY2MuQ29kZWMuQmFzZTY0LmRlY29kZShcIlUyOXRaU0JUZEhKcGJtYz1cIik7IC8vID0+IFwiU29tZSBTdHJpbmdcIlxyXG4gKi9cclxuQmFzZTY0LmRlY29kZSA9IGZ1bmN0aW9uIEphY29iX19Db2RlY19fQmFzZTY0X19kZWNvZGUoaW5wdXQpIHtcclxuICAgIHZhciBvdXRwdXQgPSBbXSxcclxuICAgICAgICBjaHIxLCBjaHIyLCBjaHIzLFxyXG4gICAgICAgIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQsXHJcbiAgICAgICAgaSA9IDA7XHJcblxyXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcblxyXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICBlbmMxID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcclxuICAgICAgICBlbmMyID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcclxuICAgICAgICBlbmMzID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcclxuICAgICAgICBlbmM0ID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcclxuXHJcbiAgICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XHJcbiAgICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG4gICAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XHJcblxyXG4gICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSkpO1xyXG5cclxuICAgICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn07XHJcblxyXG4vKipcclxuICogPHA+XHJcbiAqICAgIENvbnZlcnRzIGFuIGlucHV0IHN0cmluZyBlbmNvZGVkIGluIGJhc2U2NCB0byBhbiBhcnJheSBvZiBpbnRlZ2VycyB3aG9zZTxici8+XHJcbiAqICAgIHZhbHVlcyByZXByZXNlbnQgdGhlIGRlY29kZWQgc3RyaW5nJ3MgY2hhcmFjdGVycycgYnl0ZXMuXHJcbiAqIDwvcD5cclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgU3RyaW5nIHRvIGNvbnZlcnQgdG8gYW4gYXJyYXkgb2YgSW50ZWdlcnNcclxuICogQHBhcmFtIHtOdW1iZXJ9IGJ5dGVzXHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvL2RlY29kZSBzdHJpbmcgdG8gYXJyYXlcclxuICogdmFyIGRlY29kZUFyciA9IGNjLkNvZGVjLkJhc2U2NC5kZWNvZGVBc0FycmF5KFwiVTI5dFpTQlRkSEpwYm1jPVwiKTtcclxuICovXHJcbkJhc2U2NC5kZWNvZGVBc0FycmF5ID0gZnVuY3Rpb24gSmFjb2JfX0NvZGVjX19CYXNlNjRfX19kZWNvZGVBc0FycmF5KGlucHV0LCBieXRlcykge1xyXG4gICAgdmFyIGRlYyA9IHRoaXMuZGVjb2RlKGlucHV0KSxcclxuICAgICAgICBhciA9IFtdLCBpLCBqLCBsZW47XHJcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBkZWMubGVuZ3RoIC8gYnl0ZXM7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGFyW2ldID0gMDtcclxuICAgICAgICBmb3IgKGogPSBieXRlcyAtIDE7IGogPj0gMDsgLS1qKSB7XHJcbiAgICAgICAgICAgIGFyW2ldICs9IGRlYy5jaGFyQ29kZUF0KChpICogYnl0ZXMpICsgaikgPDwgKGogKiA4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFyO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBCYXNlNjQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcblxuLyotLVxyXG4gQ29weXJpZ2h0IDIwMDktMjAxMCBieSBTdGVmYW4gUnVzdGVyaG9sei5cclxuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiBZb3UgY2FuIGNob29zZSBiZXR3ZWVuIE1JVCBhbmQgQlNELTMtQ2xhdXNlIGxpY2Vuc2UuIExpY2Vuc2UgZmlsZSB3aWxsIGJlIGFkZGVkIGxhdGVyLlxyXG4gLS0qL1xuXG52YXIgbWlzYyA9IHJlcXVpcmUoJy4uL2NvcmUvdXRpbHMvbWlzYycpO1xudmFyIHN0clZhbHVlID0gbWlzYy5CQVNFNjRfVkFMVUVTO1xuXG4vKipcclxuICogbWl4aW4gY2MuQ29kZWMuQmFzZTY0XHJcbiAqL1xudmFyIEJhc2U2NCA9IHsgbmFtZTogJ0phY29iX19Db2RlY19fQmFzZTY0JyB9O1xuXG4vKipcclxuICogPHA+XHJcbiAqICAgIGNjLkNvZGVjLkJhc2U2NC5kZWNvZGUoaW5wdXRbLCB1bmljb2RlPWZhbHNlXSkgLT4gU3RyaW5nIChodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCkuXHJcbiAqIDwvcD5cclxuICogQGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHRvIGRlY29kZVxyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IERlY29kZXMgYSBiYXNlNjQgZW5jb2RlZCBTdHJpbmdcclxuICogQGV4YW1wbGVcclxuICogLy9kZWNvZGUgc3RyaW5nXHJcbiAqIGNjLkNvZGVjLkJhc2U2NC5kZWNvZGUoXCJVMjl0WlNCVGRISnBibWM9XCIpOyAvLyA9PiBcIlNvbWUgU3RyaW5nXCJcclxuICovXG5CYXNlNjQuZGVjb2RlID0gZnVuY3Rpb24gSmFjb2JfX0NvZGVjX19CYXNlNjRfX2RlY29kZShpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBbXSxcbiAgICAgICAgY2hyMSxcbiAgICAgICAgY2hyMixcbiAgICAgICAgY2hyMyxcbiAgICAgICAgZW5jMSxcbiAgICAgICAgZW5jMixcbiAgICAgICAgZW5jMyxcbiAgICAgICAgZW5jNCxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgIGVuYzEgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuICAgICAgICBlbmMyID0gc3RyVmFsdWVbaW5wdXQuY2hhckNvZGVBdChpKyspXTtcbiAgICAgICAgZW5jMyA9IHN0clZhbHVlW2lucHV0LmNoYXJDb2RlQXQoaSsrKV07XG4gICAgICAgIGVuYzQgPSBzdHJWYWx1ZVtpbnB1dC5jaGFyQ29kZUF0KGkrKyldO1xuXG4gICAgICAgIGNocjEgPSBlbmMxIDw8IDIgfCBlbmMyID4+IDQ7XG4gICAgICAgIGNocjIgPSAoZW5jMiAmIDE1KSA8PCA0IHwgZW5jMyA+PiAyO1xuICAgICAgICBjaHIzID0gKGVuYzMgJiAzKSA8PCA2IHwgZW5jNDtcblxuICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpKTtcblxuICAgICAgICBpZiAoZW5jMyAhPT0gNjQpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMikpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbmM0ICE9PSA2NCkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdXRwdXQgPSBvdXRwdXQuam9pbignJyk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xufTtcblxuLyoqXHJcbiAqIDxwPlxyXG4gKiAgICBDb252ZXJ0cyBhbiBpbnB1dCBzdHJpbmcgZW5jb2RlZCBpbiBiYXNlNjQgdG8gYW4gYXJyYXkgb2YgaW50ZWdlcnMgd2hvc2U8YnIvPlxyXG4gKiAgICB2YWx1ZXMgcmVwcmVzZW50IHRoZSBkZWNvZGVkIHN0cmluZydzIGNoYXJhY3RlcnMnIGJ5dGVzLlxyXG4gKiA8L3A+XHJcbiAqIEBmdW5jdGlvblxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFN0cmluZyB0byBjb252ZXJ0IHRvIGFuIGFycmF5IG9mIEludGVnZXJzXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBieXRlc1xyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGV4YW1wbGVcclxuICogLy9kZWNvZGUgc3RyaW5nIHRvIGFycmF5XHJcbiAqIHZhciBkZWNvZGVBcnIgPSBjYy5Db2RlYy5CYXNlNjQuZGVjb2RlQXNBcnJheShcIlUyOXRaU0JUZEhKcGJtYz1cIik7XHJcbiAqL1xuQmFzZTY0LmRlY29kZUFzQXJyYXkgPSBmdW5jdGlvbiBKYWNvYl9fQ29kZWNfX0Jhc2U2NF9fX2RlY29kZUFzQXJyYXkoaW5wdXQsIGJ5dGVzKSB7XG4gICAgdmFyIGRlYyA9IHRoaXMuZGVjb2RlKGlucHV0KSxcbiAgICAgICAgYXIgPSBbXSxcbiAgICAgICAgaSxcbiAgICAgICAgaixcbiAgICAgICAgbGVuO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGRlYy5sZW5ndGggLyBieXRlczsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGFyW2ldID0gMDtcbiAgICAgICAgZm9yIChqID0gYnl0ZXMgLSAxOyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgYXJbaV0gKz0gZGVjLmNoYXJDb2RlQXQoaSAqIGJ5dGVzICsgaikgPDwgaiAqIDg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXI7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2U2NDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltSmhjMlUyTkM1cWN5SmRMQ0p1WVcxbGN5STZXeUp0YVhOaklpd2ljbVZ4ZFdseVpTSXNJbk4wY2xaaGJIVmxJaXdpUWtGVFJUWTBYMVpCVEZWRlV5SXNJa0poYzJVMk5DSXNJbTVoYldVaUxDSmtaV052WkdVaUxDSktZV052WWw5ZlEyOWtaV05mWDBKaGMyVTJORjlmWkdWamIyUmxJaXdpYVc1d2RYUWlMQ0p2ZFhSd2RYUWlMQ0pqYUhJeElpd2lZMmh5TWlJc0ltTm9jak1pTENKbGJtTXhJaXdpWlc1ak1pSXNJbVZ1WXpNaUxDSmxibU0wSWl3aWFTSXNJbkpsY0d4aFkyVWlMQ0pzWlc1bmRHZ2lMQ0pqYUdGeVEyOWtaVUYwSWl3aWNIVnphQ0lzSWxOMGNtbHVaeUlzSW1aeWIyMURhR0Z5UTI5a1pTSXNJbXB2YVc0aUxDSmtaV052WkdWQmMwRnljbUY1SWl3aVNtRmpiMkpmWDBOdlpHVmpYMTlDWVhObE5qUmZYMTlrWldOdlpHVkJjMEZ5Y21GNUlpd2lZbmwwWlhNaUxDSmtaV01pTENKaGNpSXNJbW9pTENKc1pXNGlMQ0p0YjJSMWJHVWlMQ0psZUhCdmNuUnpJbDBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3pzN096czdRVUZOUVN4SlFVRkpRU3hQUVVGUFF5eFJRVUZSTEc5Q1FVRlNMRU5CUVZnN1FVRkRRU3hKUVVGSlF5eFhRVUZYUml4TFFVRkxSeXhoUVVGd1FqczdRVUZGUVRzN08wRkJSMEVzU1VGQlNVTXNVMEZCVXl4RlFVRkRReXhOUVVGTExITkNRVUZPTEVWQlFXSTdPMEZCUlVFN096czdPenM3T3pzN08wRkJWMEZFTEU5QlFVOUZMRTFCUVZBc1IwRkJaMElzVTBGQlUwTXNORUpCUVZRc1EwRkJjME5ETEV0QlFYUkRMRVZCUVRaRE8wRkJRM3BFTEZGQlFVbERMRk5CUVZNc1JVRkJZanRCUVVGQkxGRkJRMGxETEVsQlJFbzdRVUZCUVN4UlFVTlZReXhKUVVSV08wRkJRVUVzVVVGRFowSkRMRWxCUkdoQ08wRkJRVUVzVVVGRlNVTXNTVUZHU2p0QlFVRkJMRkZCUlZWRExFbEJSbFk3UVVGQlFTeFJRVVZuUWtNc1NVRkdhRUk3UVVGQlFTeFJRVVZ6UWtNc1NVRkdkRUk3UVVGQlFTeFJRVWRKUXl4SlFVRkpMRU5CU0ZJN08wRkJTMEZVTEZsQlFWRkJMRTFCUVUxVkxFOUJRVTRzUTBGQll5eHhRa0ZCWkN4RlFVRnhReXhGUVVGeVF5eERRVUZTT3p0QlFVVkJMRmRCUVU5RUxFbEJRVWxVTEUxQlFVMVhMRTFCUVdwQ0xFVkJRWGxDTzBGQlEzSkNUaXhsUVVGUFdDeFRRVUZUVFN4TlFVRk5XU3hWUVVGT0xFTkJRV2xDU0N4SFFVRnFRaXhEUVVGVUxFTkJRVkE3UVVGRFFVZ3NaVUZCVDFvc1UwRkJVMDBzVFVGQlRWa3NWVUZCVGl4RFFVRnBRa2dzUjBGQmFrSXNRMEZCVkN4RFFVRlFPMEZCUTBGR0xHVkJRVTlpTEZOQlFWTk5MRTFCUVUxWkxGVkJRVTRzUTBGQmFVSklMRWRCUVdwQ0xFTkJRVlFzUTBGQlVEdEJRVU5CUkN4bFFVRlBaQ3hUUVVGVFRTeE5RVUZOV1N4VlFVRk9MRU5CUVdsQ1NDeEhRVUZxUWl4RFFVRlVMRU5CUVZBN08wRkJSVUZRTEdWQlFWRkhMRkZCUVZFc1EwRkJWQ3hIUVVGbFF5eFJRVUZSTEVOQlFUbENPMEZCUTBGSUxHVkJRVkVzUTBGQlEwY3NUMEZCVHl4RlFVRlNMRXRCUVdVc1EwRkJhRUlzUjBGQmMwSkRMRkZCUVZFc1EwRkJja003UVVGRFFVZ3NaVUZCVVN4RFFVRkRSeXhQUVVGUExFTkJRVklzUzBGQll5eERRVUZtTEVkQlFXOUNReXhKUVVFelFqczdRVUZGUVZBc1pVRkJUMWtzU1VGQlVDeERRVUZaUXl4UFFVRlBReXhaUVVGUUxFTkJRVzlDWWl4SlFVRndRaXhEUVVGYU96dEJRVVZCTEZsQlFVbExMRk5CUVZNc1JVRkJZaXhGUVVGcFFqdEJRVU5pVGl4dFFrRkJUMWtzU1VGQlVDeERRVUZaUXl4UFFVRlBReXhaUVVGUUxFTkJRVzlDV2l4SlFVRndRaXhEUVVGYU8wRkJRMGc3UVVGRFJDeFpRVUZKU3l4VFFVRlRMRVZCUVdJc1JVRkJhVUk3UVVGRFlsQXNiVUpCUVU5WkxFbEJRVkFzUTBGQldVTXNUMEZCVDBNc1dVRkJVQ3hEUVVGdlFsZ3NTVUZCY0VJc1EwRkJXanRCUVVOSU8wRkJRMG83TzBGQlJVUklMR0ZCUVZOQkxFOUJRVTlsTEVsQlFWQXNRMEZCV1N4RlFVRmFMRU5CUVZRN08wRkJSVUVzVjBGQlQyWXNUVUZCVUR0QlFVTklMRU5CTDBKRU96dEJRV2xEUVRzN096czdPenM3T3pzN096dEJRV0ZCVEN4UFFVRlBjVUlzWVVGQlVDeEhRVUYxUWl4VFFVRlRReXh2UTBGQlZDeERRVUU0UTJ4Q0xFdEJRVGxETEVWQlFYRkViVUlzUzBGQmNrUXNSVUZCTkVRN1FVRkRMMFVzVVVGQlNVTXNUVUZCVFN4TFFVRkxkRUlzVFVGQlRDeERRVUZaUlN4TFFVRmFMRU5CUVZZN1FVRkJRU3hSUVVOSmNVSXNTMEZCU3l4RlFVUlVPMEZCUVVFc1VVRkRZVm9zUTBGRVlqdEJRVUZCTEZGQlEyZENZU3hEUVVSb1FqdEJRVUZCTEZGQlEyMUNReXhIUVVSdVFqdEJRVVZCTEZOQlFVdGtMRWxCUVVrc1EwRkJTaXhGUVVGUFl5eE5RVUZOU0N4SlFVRkpWQ3hOUVVGS0xFZEJRV0ZSTEV0QlFTOUNMRVZCUVhORFZpeEpRVUZKWXl4SFFVRXhReXhGUVVFclEyUXNSMEZCTDBNc1JVRkJiMFE3UVVGRGFFUlpMRmRCUVVkYUxFTkJRVWdzU1VGQlVTeERRVUZTTzBGQlEwRXNZVUZCUzJFc1NVRkJTVWdzVVVGQlVTeERRVUZxUWl4RlFVRnZRa2NzUzBGQlN5eERRVUY2UWl4RlFVRTBRaXhGUVVGRlFTeERRVUU1UWl4RlFVRnBRenRCUVVNM1FrUXNaVUZCUjFvc1EwRkJTQ3hMUVVGVFZ5eEpRVUZKVWl4VlFVRktMRU5CUVdkQ1NDeEpRVUZKVlN4TFFVRk1MRWRCUVdOSExFTkJRVGRDTEV0QlFXOURRU3hKUVVGSkxFTkJRV3BFTzBGQlEwZzdRVUZEU2pzN1FVRkZSQ3hYUVVGUFJDeEZRVUZRTzBGQlEwZ3NRMEZZUkRzN1FVRmhRVWNzVDBGQlQwTXNUMEZCVUN4SFFVRnBRamRDTEUxQlFXcENJaXdpWm1sc1pTSTZJbUpoYzJVMk5DNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUxTMWNjbHh1SUVOdmNIbHlhV2RvZENBeU1EQTVMVEl3TVRBZ1lua2dVM1JsWm1GdUlGSjFjM1JsY21odmJIb3VYSEpjYmlCQmJHd2djbWxuYUhSeklISmxjMlZ5ZG1Wa0xseHlYRzRnV1c5MUlHTmhiaUJqYUc5dmMyVWdZbVYwZDJWbGJpQk5TVlFnWVc1a0lFSlRSQzB6TFVOc1lYVnpaU0JzYVdObGJuTmxMaUJNYVdObGJuTmxJR1pwYkdVZ2QybHNiQ0JpWlNCaFpHUmxaQ0JzWVhSbGNpNWNjbHh1SUMwdEtpOWNjbHh1WEhKY2JuWmhjaUJ0YVhOaklEMGdjbVZ4ZFdseVpTZ25MaTR2WTI5eVpTOTFkR2xzY3k5dGFYTmpKeWs3WEhKY2JuWmhjaUJ6ZEhKV1lXeDFaU0E5SUcxcGMyTXVRa0ZUUlRZMFgxWkJURlZGVXp0Y2NseHVYSEpjYmk4cUtseHlYRzRnS2lCdGFYaHBiaUJqWXk1RGIyUmxZeTVDWVhObE5qUmNjbHh1SUNvdlhISmNiblpoY2lCQ1lYTmxOalFnUFNCN2JtRnRaVG9uU21GamIySmZYME52WkdWalgxOUNZWE5sTmpRbmZUdGNjbHh1WEhKY2JpOHFLbHh5WEc0Z0tpQThjRDVjY2x4dUlDb2dJQ0FnWTJNdVEyOWtaV011UW1GelpUWTBMbVJsWTI5a1pTaHBibkIxZEZzc0lIVnVhV052WkdVOVptRnNjMlZkS1NBdFBpQlRkSEpwYm1jZ0tHaDBkSEE2THk5bGJpNTNhV3RwY0dWa2FXRXViM0puTDNkcGEya3ZRbUZ6WlRZMEtTNWNjbHh1SUNvZ1BDOXdQbHh5WEc0Z0tpQkFablZ1WTNScGIyNWNjbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUdsdWNIVjBJRlJvWlNCaVlYTmxOalFnWlc1amIyUmxaQ0J6ZEhKcGJtY2dkRzhnWkdWamIyUmxYSEpjYmlBcUlFQnlaWFIxY200Z2UxTjBjbWx1WjMwZ1JHVmpiMlJsY3lCaElHSmhjMlUyTkNCbGJtTnZaR1ZrSUZOMGNtbHVaMXh5WEc0Z0tpQkFaWGhoYlhCc1pWeHlYRzRnS2lBdkwyUmxZMjlrWlNCemRISnBibWRjY2x4dUlDb2dZMk11UTI5a1pXTXVRbUZ6WlRZMExtUmxZMjlrWlNoY0lsVXlPWFJhVTBKVVpFaEtjR0p0WXoxY0lpazdJQzh2SUQwK0lGd2lVMjl0WlNCVGRISnBibWRjSWx4eVhHNGdLaTljY2x4dVFtRnpaVFkwTG1SbFkyOWtaU0E5SUdaMWJtTjBhVzl1SUVwaFkyOWlYMTlEYjJSbFkxOWZRbUZ6WlRZMFgxOWtaV052WkdVb2FXNXdkWFFwSUh0Y2NseHVJQ0FnSUhaaGNpQnZkWFJ3ZFhRZ1BTQmJYU3hjY2x4dUlDQWdJQ0FnSUNCamFISXhMQ0JqYUhJeUxDQmphSEl6TEZ4eVhHNGdJQ0FnSUNBZ0lHVnVZekVzSUdWdVl6SXNJR1Z1WXpNc0lHVnVZelFzWEhKY2JpQWdJQ0FnSUNBZ2FTQTlJREE3WEhKY2JseHlYRzRnSUNBZ2FXNXdkWFFnUFNCcGJuQjFkQzV5WlhCc1lXTmxLQzliWGtFdFdtRXRlakF0T1Z4Y0sxeGNMMXhjUFYwdlp5d2dYQ0pjSWlrN1hISmNibHh5WEc0Z0lDQWdkMmhwYkdVZ0tHa2dQQ0JwYm5CMWRDNXNaVzVuZEdncElIdGNjbHh1SUNBZ0lDQWdJQ0JsYm1NeElEMGdjM1J5Vm1Gc2RXVmJhVzV3ZFhRdVkyaGhja052WkdWQmRDaHBLeXNwWFR0Y2NseHVJQ0FnSUNBZ0lDQmxibU15SUQwZ2MzUnlWbUZzZFdWYmFXNXdkWFF1WTJoaGNrTnZaR1ZCZENocEt5c3BYVHRjY2x4dUlDQWdJQ0FnSUNCbGJtTXpJRDBnYzNSeVZtRnNkV1ZiYVc1d2RYUXVZMmhoY2tOdlpHVkJkQ2hwS3lzcFhUdGNjbHh1SUNBZ0lDQWdJQ0JsYm1NMElEMGdjM1J5Vm1Gc2RXVmJhVzV3ZFhRdVkyaGhja052WkdWQmRDaHBLeXNwWFR0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnWTJoeU1TQTlJQ2hsYm1NeElEdzhJRElwSUh3Z0tHVnVZeklnUGo0Z05DazdYSEpjYmlBZ0lDQWdJQ0FnWTJoeU1pQTlJQ2dvWlc1ak1pQW1JREUxS1NBOFBDQTBLU0I4SUNobGJtTXpJRDQrSURJcE8xeHlYRzRnSUNBZ0lDQWdJR05vY2pNZ1BTQW9LR1Z1WXpNZ0ppQXpLU0E4UENBMktTQjhJR1Z1WXpRN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUc5MWRIQjFkQzV3ZFhOb0tGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9ZMmh5TVNrcE8xeHlYRzVjY2x4dUlDQWdJQ0FnSUNCcFppQW9aVzVqTXlBaFBUMGdOalFwSUh0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnYjNWMGNIVjBMbkIxYzJnb1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTaGphSEl5S1NrN1hISmNiaUFnSUNBZ0lDQWdmVnh5WEc0Z0lDQWdJQ0FnSUdsbUlDaGxibU0wSUNFOVBTQTJOQ2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J2ZFhSd2RYUXVjSFZ6YUNoVGRISnBibWN1Wm5KdmJVTm9ZWEpEYjJSbEtHTm9jak1wS1R0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnYjNWMGNIVjBJRDBnYjNWMGNIVjBMbXB2YVc0b0p5Y3BPMXh5WEc1Y2NseHVJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUTdYSEpjYm4wN1hISmNibHh5WEc0dktpcGNjbHh1SUNvZ1BIQStYSEpjYmlBcUlDQWdJRU52Ym5abGNuUnpJR0Z1SUdsdWNIVjBJSE4wY21sdVp5QmxibU52WkdWa0lHbHVJR0poYzJVMk5DQjBieUJoYmlCaGNuSmhlU0J2WmlCcGJuUmxaMlZ5Y3lCM2FHOXpaVHhpY2k4K1hISmNiaUFxSUNBZ0lIWmhiSFZsY3lCeVpYQnlaWE5sYm5RZ2RHaGxJR1JsWTI5a1pXUWdjM1J5YVc1bkozTWdZMmhoY21GamRHVnljeWNnWW5sMFpYTXVYSEpjYmlBcUlEd3ZjRDVjY2x4dUlDb2dRR1oxYm1OMGFXOXVYSEpjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCcGJuQjFkQ0JVYUdVZ1UzUnlhVzVuSUhSdklHTnZiblpsY25RZ2RHOGdZVzRnWVhKeVlYa2diMllnU1c1MFpXZGxjbk5jY2x4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHSjVkR1Z6WEhKY2JpQXFJRUJ5WlhSMWNtNGdlMEZ5Y21GNWZWeHlYRzRnS2lCQVpYaGhiWEJzWlZ4eVhHNGdLaUF2TDJSbFkyOWtaU0J6ZEhKcGJtY2dkRzhnWVhKeVlYbGNjbHh1SUNvZ2RtRnlJR1JsWTI5a1pVRnljaUE5SUdOakxrTnZaR1ZqTGtKaGMyVTJOQzVrWldOdlpHVkJjMEZ5Y21GNUtGd2lWVEk1ZEZwVFFsUmtTRXB3WW0xalBWd2lLVHRjY2x4dUlDb3ZYSEpjYmtKaGMyVTJOQzVrWldOdlpHVkJjMEZ5Y21GNUlEMGdablZ1WTNScGIyNGdTbUZqYjJKZlgwTnZaR1ZqWDE5Q1lYTmxOalJmWDE5a1pXTnZaR1ZCYzBGeWNtRjVLR2x1Y0hWMExDQmllWFJsY3lrZ2UxeHlYRzRnSUNBZ2RtRnlJR1JsWXlBOUlIUm9hWE11WkdWamIyUmxLR2x1Y0hWMEtTeGNjbHh1SUNBZ0lDQWdJQ0JoY2lBOUlGdGRMQ0JwTENCcUxDQnNaVzQ3WEhKY2JpQWdJQ0JtYjNJZ0tHa2dQU0F3TENCc1pXNGdQU0JrWldNdWJHVnVaM1JvSUM4Z1lubDBaWE03SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh5WEc0Z0lDQWdJQ0FnSUdGeVcybGRJRDBnTUR0Y2NseHVJQ0FnSUNBZ0lDQm1iM0lnS0dvZ1BTQmllWFJsY3lBdElERTdJR29nUGowZ01Ec2dMUzFxS1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdGeVcybGRJQ3M5SUdSbFl5NWphR0Z5UTI5a1pVRjBLQ2hwSUNvZ1lubDBaWE1wSUNzZ2Fpa2dQRHdnS0dvZ0tpQTRLVHRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjbVYwZFhKdUlHRnlPMXh5WEc1OU8xeHlYRzVjY2x4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCQ1lYTmxOalE3WEhKY2JpSmRmUT09Il19