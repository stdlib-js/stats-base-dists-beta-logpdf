"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var y=c(function(E,g){
var A=require('@stdlib/math-base-special-betaln/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/math-base-special-log1p/dist'),v=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-pinf/dist'),o=require('@stdlib/constants-float64-ninf/dist');function O(e,r,u){var n;return f(e)||f(r)||f(u)||r<=0||u<=0?NaN:e<0||e>1?o:e===0?r<1?F:r>1?o:v(u):e===1?u<1?F:u>1?o:v(r):(n=(r-1)*v(e),n+=(u-1)*B(-e),n-=A(r,u),n)}g.exports=O
});var P=c(function(G,d){
var R=require('@stdlib/utils-constant-function/dist'),j=require('@stdlib/math-base-special-betaln/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/math-base-special-log1p/dist'),s=require('@stdlib/math-base-special-ln/dist'),N=require('@stdlib/constants-float64-ninf/dist'),I=require('@stdlib/constants-float64-pinf/dist');function w(e,r){var u;if(q(e)||q(r)||e<=0||r<=0)return R(NaN);return u=j(e,r),n;function n(i){var t;return q(i)?NaN:i<0||i>1?N:i===0?e<1?I:e>1?N:s(r):i===1?r<1?I:r>1?N:s(e):(t=-u,t+=(e-1)*s(i)+(r-1)*k(-i),t)}}d.exports=w
});var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=y(),C=P();z(m,"factory",C);module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
