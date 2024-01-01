// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,g,"e-0$1"),r.alternate&&(t=p.call(t,y,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function A(r,e,n){var t=e-r.length;return t<0?r:r=n?r+N(t):N(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var M=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function Z(r){return r===M||r===R}function X(r){return Math.abs(r)}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var q=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return q.call(r);n=r[D],a=D,e=null!=(i=r)&&z.call(i,a);try{r[D]=void 0}catch(e){return q.call(r)}return t=q.call(r),e?r[D]=n:delete r[D],t}:function(r){return q.call(r)},K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(K&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr=rr,tr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var ar,or="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),n=e,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,fr="function"==typeof Uint8Array;var cr="function"==typeof Uint8Array?Uint8Array:null;var sr,lr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(e=[1,3.14,-3.14,256,257]),n=e,r=(fr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,vr="function"==typeof Uint16Array;var gr="function"==typeof Uint16Array?Uint16Array:null;var yr,dr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:yr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(hr.buffer)[0],mr=!0===br?1:0,Nr=new ur(1),Ar=new nr(Nr.buffer);function _r(r){return Nr[0]=r,Ar[mr]}var Er=!0===br?1:0,Ur=new ur(1),kr=new nr(Ur.buffer);function Ir(r,e){return Ur[0]=r,kr[Er]=e>>>0,Ur[0]}var Sr=.6931471803691238,xr=1.9082149292705877e-10;function Fr(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?R:P(r)||r<0?NaN:(a=0,(n=_r(r))<1048576&&(a-=54,n=_r(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(f=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=Ir(r,n|1072693248^f))-1,(1048575&2+n)<3?0===u?0===a?0:a*Sr+a*xr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Sr-(o-a*xr-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Sr-(e-(s*(e+o)+a*xr)-u)):0===a?u-s*(u-o):a*Sr-(s*(u-o)-a*xr-u))))}var jr=Math.floor,Tr=Math.ceil;function Or(r){return r<0?Tr(r):jr(r)}function Vr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var $r=-.16666666666666632;function Gr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*($r+i*n):r-(i*(.5*e-t*n)-e-t*$r)}var Hr,Wr,Cr=!0===br?0:1,Lr=new ur(1),Pr=new nr(Lr.buffer);!0===br?(Hr=1,Wr=0):(Hr=0,Wr=1);var Mr={HIGH:Hr,LOW:Wr},Rr=new ur(1),Zr=new nr(Rr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function qr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Rr[0]}var zr,Br;!0===br?(zr=1,Br=0):(zr=0,Br=1);var Dr={HIGH:zr,LOW:Br},Jr=new ur(1),Kr=new nr(Jr.buffer),Qr=Dr.HIGH,re=Dr.LOW;function ee(r,e,n,t){return Jr[0]=r,e[t]=Kr[Qr],e[t+n]=Kr[re],e}function ne(r){return ee(r,[0,0],1,0)}L(ne,"assign",ee);var te=[0,0];function ie(r,e){var n,t;return ne.assign(r,te,1,0),n=te[0],n&=2147483647,t=_r(e),qr(n|=t&=2147483648,te[1])}function ae(r,e,n,t){return P(r)||Z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return ae(r,[0,0],1,0)}),"assign",ae);var oe=[0,0],ue=[0,0];function fe(r,e){var n,t;return 0===e||0===r||P(r)||Z(r)?r:(ae(r,oe,1,0),e+=oe[1],e+=function(r){var e=_r(r);return(e=(2146435072&e)>>>20)-1023|0}(r=oe[0]),e<-1074?ie(0,r):e>1023?r<0?R:M:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,ne.assign(r,ue,1,0),n=ue[0],n&=2148532223,t*qr(n|=e+1023<<20,ue[1])))}function ce(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],le=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],pe=5.960464477539063e-8,ve=ce(20),ge=ce(20),ye=ce(20),de=ce(20);function he(r,e,n,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=pe*h|0,de[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=fe(h,i),h-=8*jr(.125*h),h-=y=0|h,l=0,i>0?(y+=v=de[n-1]>>24-i,de[n-1]-=v<<24-i,l=de[n-1]>>23-i):0===i?l=de[n-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<n;v++)d=de[v],0===c?0!==d&&(c=1,de[v]=16777216-d):de[v]=16777215-d;if(i>0)switch(i){case 1:de[n-1]&=8388607;break;case 2:de[n-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=fe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=de[v];if(0===d){for(g=1;0===de[a-g];g++);for(v=n+1;v<=n+g;v++){for(f[u+v]=se[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return he(r,e,n+=g,t,i,a,o,u,f)}}if(0===h)for(n-=1,i-=24;0===de[n];)n-=1,i-=24;else(h=fe(h,-i))>=16777216?(s=pe*h|0,de[n]=h-16777216*s|0,i+=24,de[n+=1]=s):de[n]=0|h;for(s=fe(1,i),v=n;v>=0;v--)t[v]=s*de[v],s*=pe;for(v=n;v>=0;v--){for(s=0,g=0;g<=p&&g<=n-v;g++)s+=le[g]*t[v+g];ye[n-v]=s}for(s=0,v=n;v>=0;v--)s+=ye[v];for(e[0]=0===l?s:-s,s=ye[0]-s,v=1;v<=n;v++)s+=ye[v];return e[1]=0===l?s:-s,7&y}function we(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)ve[f]=c<0?0:se[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*ve[o+(f-c)];ge[f]=i}return 4,he(r,e,4,ge,u,4,a,o,ve)}var be=Math.round;function me(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=be(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(_r(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ne=1.5707963267341256,Ae=6077100506506192e-26,_e=2*Ae,Ee=4*Ae,Ue=[0,0,0],ke=[0,0];function Ie(r,e){var n,t,i,a,o,u,f;if((i=2147483647&_r(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?me(r,i,e):i<=1073928572?r>0?(f=r-Ne,e[0]=f-Ae,e[1]=f-e[0]-Ae,1):(f=r+Ne,e[0]=f+Ae,e[1]=f-e[0]+Ae,-1):r>0?(f=r-2*Ne,e[0]=f-_e,e[1]=f-e[0]-_e,2):(f=r+2*Ne,e[0]=f+_e,e[1]=f-e[0]+_e,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?me(r,i,e):r>0?(f=r-3*Ne,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*Ne,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?me(r,i,e):r>0?(f=r-4*Ne,e[0]=f-Ee,e[1]=f-e[0]-Ee,4):(f=r+4*Ne,e[0]=f+Ee,e[1]=f-e[0]+Ee,-4);if(i<1094263291)return me(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Lr[0]=r,Pr[Cr]}(r),f=qr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ue[o]=0|f,f=16777216*(f-Ue[o]);for(Ue[2]=f,a=3;0===Ue[a-1];)a-=1;return u=we(Ue,ke,t,a),r<0?(e[0]=-ke[0],e[1]=-ke[1],-u):(e[0]=ke[0],e[1]=ke[1],u)}var Se=[0,0];function xe(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Vr(r,0);if(e>=2146435072)return NaN;switch(3&Ie(r,Se)){case 0:return Vr(Se[0],Se[1]);case 1:return-Gr(Se[0],Se[1]);case 2:return-Vr(Se[0],Se[1]);default:return Gr(Se[0],Se[1])}}var Fe=[0,0];function je(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Gr(r,0);if(e>=2146435072)return NaN;switch(3&Ie(r,Fe)){case 0:return Gr(Fe[0],Fe[1]);case 1:return Vr(Fe[0],Fe[1]);case 2:return-Gr(Fe[0],Fe[1]);default:return-Vr(Fe[0],Fe[1])}}var Te=3.141592653589793;var Oe=1.4616321449683622,Ve=1.4616321449683622;function $e(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(P(r)||Z(r))return r;if(0===r)return M;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-Fr(r);if(e){if(r>=4503599627370496)return M;if(c=function(r){var e,n;return P(r)||Z(r)?NaN:0===(e=X(n=r%2))||1===e?ie(0,n):e<.25?je(Te*n):e<.75?ie(xe(Te*(e=.5-e)),n):e<1.25?(n=ie(1,n)-n,je(Te*n)):e<1.75?-ie(xe(Te*(e-=1.5)),n):(n-=ie(2,n),je(Te*n))}(r),0===c)return M;n=Fr(Te/X(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Fr(r),r>=Oe-1+.27?(l=1-r,t=0):r>=Oe-1-.27?(l=r-(Ve-1),t=1):(l=r,t=2)):(v=0,r>=Oe+.27?(l=2-r,t=0):r>=Oe-.27?(l=r-Ve,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(u=p*o-(-3638676997039505e-33-s*(a+l*i)));break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Or(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Fr(p*=l+2)}else r<0x400000000000000?(c=Fr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Fr(r)-1);return e&&(v=n-v),v}var Ge=.6931471803691238,He=1.9082149292705877e-10;function We(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||P(r))return NaN;if(-1===r)return R;if(r===M)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,n=1)}return 0!==s&&(t<9007199254740992?(a=(s=((n=_r(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((n=_r(c=r))>>20)-1023,a=0),(n&=1048575)<434334?c=Ir(c,1072693248|n):(s+=1,c=Ir(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Ge+(a+=s*He):s*Ge-((f=e*(1-.6666666666666666*i))-(s*He+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Ge-(e-(o*(e+f)+(s*He+a))-i))}function Ce(r){return jr(r)===r}function Le(r){return 0===r&&1/r===R}function Pe(r){return Ce(r/2)}function Me(r){return Pe(r>0?r-1:r+1)}var Re=Math.sqrt,Ze=!0===br?0:1,Xe=new ur(1),Ye=new nr(Xe.buffer);function qe(r,e){return Xe[0]=r,Ye[Ze]=e>>>0,Xe[0]}function ze(r){return 0|r}var Be=[1,1.5],De=[0,.5849624872207642],Je=[0,1.350039202129749e-8];var Ke=1e300,Qe=1e-300,rn=[0,0],en=[0,0];function nn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,g,y;if(P(r)||P(e))return NaN;if(ne.assign(e,rn,1,0),o=rn[0],0===rn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Re(r);if(-.5===e)return 1/Re(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(Z(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:X(r)<1==(e===M)?0:M}(r,e)}if(ne.assign(r,rn,1,0),a=rn[0],0===rn[1]){if(0===a)return function(r,e){return e===R?M:e===M?0:e>0?Me(e)?r:0:Me(e)?ie(M,r):M}(r,e);if(1===r)return 1;if(-1===r&&Me(e))return-1;if(Z(r))return r===R?nn(-0,-e):e<0?0:M}if(r<0&&!1===Ce(e))return(r-r)/(r-r);if(i=X(r),n=2147483647&a|0,t=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&Me(e)?-1:1,t>1105199104){if(t>1139802112)return function(r,e){return(2147483647&_r(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(r,e);if(n<1072693247)return 1===f?u*Ke*Ke:u*Qe*Qe;if(n>1072693248)return 0===f?u*Ke*Ke:u*Qe*Qe;p=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=qe(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(en,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<1048576&&(m-=53,n=_r(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=1048576),o=qe(i=(w=(e=Ir(e,n))-(c=Be[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=Ir(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=qe(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),y=(v=-7.028461650952758e-9*(l=qe(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+Je[A])-((g=qe(g=(p=.9617967009544373*l)+v+(s=De[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(en,i,n);if(v=(l=(e-(c=qe(e,0)))*p[0]+e*p[1])+(s=c*p[0]),ne.assign(v,rn,1,0),g=ze(rn[0]),y=ze(rn[1]),g>=1083179008){if(0!=(g-1083179008|y))return u*Ke*Ke;if(l+8008566259537294e-32>v-s)return u*Ke*Ke}else if((2147483647&g)>=1083231232){if(0!=(g-3230714880|y))return u*Qe*Qe;if(l<=v-s)return u*Qe*Qe}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=Ir(0,t)),r=ze(r=_r(c=1-((c=(o=.6931471824645996*(a=qe(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?fe(c,s):Ir(c,r)}(g,s,l),u*v}function tn(r){var e;return P(r)||r===M?r:r===R?0:r>709.782712893384?M:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,n){var t,i,a,o;return fe(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(e=Or(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function an(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=tn(r),2.5066282746310007*(n=r>143.01608?(t=nn(r,.5*r-.25))*(t/n):nn(r,r-.5)/n)*e}function on(r,e){return e/((1+.5772156649015329*r)*r)}function un(r){var e,n,t,i;if(Ce(r)&&r<0||r===R||P(r))return NaN;if(0===r)return Le(r)?R:M;if(r>171.61447887182297)return M;if(r<-170.5674972726612)return 0;if((n=X(r))>33)return r>=0?an(r):(e=0==(1&(t=jr(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*je(Te*i),e*Te/(X(i)*an(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return on(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return on(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}function fn(r,e){return P(r)||P(e)?NaN:r===M||e===M?M:r===e&&0===r?function(r){return 0===r&&1/r===M}(r)?r:e:r>e?r:e}var cn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],sn=cn.length;function ln(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<sn;a++)n=t,i=e*(t=i)-n+cn[a];return.5*(i-n)}(2*nn(10/r,2)-1)/r:1/(12*r)}function pn(r,e){var n,t,i,a,o;return o=e,t=P(a=r)||P(o)?NaN:a===R||o===R?R:a===o&&0===a?Le(a)?a:o:a<o?a:o,i=fn(r,e),t<0?NaN:0===t?M:i===M?R:t>=10?(n=ln(t)+ln(i)-ln(t+i),-.5*Fr(i)+.9189385332046728+n+(t-.5)*Fr(t/(t+i))+i*We(-t/(t+i))):i>=10?(n=ln(i)-ln(t+i),$e(t)+n+t-t*Fr(t+i)+(i-.5)*We(-t/(t+i))):Fr(un(t)*(un(i)/un(t+i)))}function vn(r,e,n){var t;return P(r)||P(e)||P(n)||e<=0||n<=0?NaN:r<0||r>1?R:0===r?e<1?M:e>1?R:Fr(n):1===r?n<1?M:n>1?R:Fr(e):(t=(e-1)*Fr(r),t+=(n-1)*We(-r),t-=pn(e,n))}function gn(r,e){var n,t;return P(r)||P(e)||r<=0||e<=0?(t=NaN,function(){return t}):(n=pn(r,e),function(t){var i;if(P(t))return NaN;if(t<0||t>1)return R;if(0===t)return r<1?M:r>1?R:Fr(e);if(1===t)return e<1?M:e>1?R:Fr(r);return i=-n,i+=(r-1)*Fr(t)+(e-1)*We(-t)})}L(vn,"factory",gn);export{vn as default,gn as factory};
//# sourceMappingURL=mod.js.map
