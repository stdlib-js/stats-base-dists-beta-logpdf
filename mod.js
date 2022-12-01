// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(r){return r!=r}var l=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY;function s(r){return r===l||r===y}function p(r){return Math.abs(r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var N=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var _=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return N.call(r);t=r[A],f=A,n=null!=(u=r)&&w.call(u,f);try{r[A]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[A]=t:delete r[A],e}:function(r){return N.call(r)},h="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var m,g="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var U=m,j="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,k="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var x,L="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:x,uint8:P};(V=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(V.buffer)[0],q=!0===Y?1:0,C=new E(1),z=new U(C.buffer);function B(r){return C[0]=r,z[q]}var D=!0===Y?1:0,J=new E(1),K=new U(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}var R=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,t,e,u,f,i,o,a,c,l,s,p;return 0===r?y:v(r)||r<0?NaN:(f=0,(t=B(r))<1048576&&(f-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-1023|0,f+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=Q(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===f?0:f*R+f*X:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*R-(i-f*X-o)):(a=t-398458|0,c=440401-t|0,u=(s=(p=(l=o/(2+o))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*R-(n-(l*(n+i)+f*X)-o)):0===f?o-l*(o-i):f*R-(l*(o-i)-f*X-o))))}var $=Math.floor,rr=Math.ceil;function nr(r){return r<0?rr(r):$(r)}function tr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var er=-.16666666666666632;function ur(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(er+u*t):r-(u*(.5*n-e*t)-n-e*er)}var fr,ir,or=!0===Y?0:1,ar=new E(1),cr=new U(ar.buffer);!0===Y?(fr=1,ir=0):(fr=0,ir=1);var vr={HIGH:fr,LOW:ir},lr=new E(1),yr=new U(lr.buffer),sr=vr.HIGH,pr=vr.LOW;function br(r,n){return yr[sr]=r,yr[pr]=n,lr[0]}var Nr,wr;!0===Y?(Nr=1,wr=0):(Nr=0,wr=1);var Ar={HIGH:Nr,LOW:wr},_r=new E(1),hr=new U(_r.buffer),dr=Ar.HIGH,mr=Ar.LOW;function gr(r,n,t,e){return _r[0]=r,n[e]=hr[dr],n[e+t]=hr[mr],n}function Ur(r){return gr(r,[0,0],1,0)}c(Ur,"assign",gr);var jr=[0,0];function Ir(r,n){var t,e;return Ur.assign(r,jr,1,0),t=jr[0],t&=2147483647,e=B(n),br(t|=e&=2147483648,jr[1])}function Or(r,n,t,e){return v(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Sr=[0,0],Er=[0,0];function Fr(r,n){var t,e;return 0===n||0===r||v(r)||s(r)?r:(Or(r,Sr,1,0),n+=Sr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Sr[0]),n<-1074?Ir(0,r):n>1023?r<0?y:l:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ur.assign(r,Er,1,0),t=Er[0],t&=2148532223,e*br(t|=n+1023<<20,Er[1])))}function Hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=5.960464477539063e-8,kr=Hr(20),Mr=Hr(20),xr=Hr(20),Lr=Hr(20);function Vr(r,n,t,e,u,f,i,o,a){var c,v,l,y,s,p,b,N,w;for(y=f,w=e[t],N=t,s=0;N>0;s++)v=Pr*w|0,Lr[s]=w-16777216*v|0,w=e[N-1]+v,N-=1;if(w=Fr(w,u),w-=8*$(.125*w),w-=b=0|w,l=0,u>0?(b+=s=Lr[t-1]>>24-u,Lr[t-1]-=s<<24-u,l=Lr[t-1]>>23-u):0===u?l=Lr[t-1]>>23:w>=.5&&(l=2),l>0){for(b+=1,c=0,s=0;s<t;s++)N=Lr[s],0===c?0!==N&&(c=1,Lr[s]=16777216-N):Lr[s]=16777215-N;if(u>0)switch(u){case 1:Lr[t-1]&=8388607;break;case 2:Lr[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Fr(1,u)))}if(0===w){for(N=0,s=t-1;s>=f;s--)N|=Lr[s];if(0===N){for(p=1;0===Lr[f-p];p++);for(s=t+1;s<=t+p;s++){for(a[o+s]=Tr[i+s],v=0,N=0;N<=o;N++)v+=r[N]*a[o+(s-N)];e[s]=v}return Vr(r,n,t+=p,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===Lr[t];)t-=1,u-=24;else(w=Fr(w,-u))>=16777216?(v=Pr*w|0,Lr[t]=w-16777216*v|0,u+=24,Lr[t+=1]=v):Lr[t]=0|w;for(v=Fr(1,u),s=t;s>=0;s--)e[s]=v*Lr[s],v*=Pr;for(s=t;s>=0;s--){for(v=0,p=0;p<=y&&p<=t-s;p++)v+=Gr[p]*e[s+p];xr[t-s]=v}for(v=0,s=t;s>=0;s--)v+=xr[s];for(n[0]=0===l?v:-v,v=xr[0]-v,s=1;s<=t;s++)v+=xr[s];return n[1]=0===l?v:-v,7&b}function Wr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)kr[a]=c<0?0:Tr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*kr[i+(a-c)];Mr[a]=u}return 4,Vr(r,n,4,Mr,o,4,f,i,kr)}var Yr=Math.round;function qr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Yr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(B(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(B(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Cr=1.5707963267341256,zr=6077100506506192e-26,Br=2*zr,Dr=4*zr,Jr=[0,0,0],Kr=[0,0];function Qr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?qr(r,u,n):u<=1073928572?r>0?(a=r-Cr,n[0]=a-zr,n[1]=a-n[0]-zr,1):(a=r+Cr,n[0]=a+zr,n[1]=a-n[0]+zr,-1):r>0?(a=r-2*Cr,n[0]=a-Br,n[1]=a-n[0]-Br,2):(a=r+2*Cr,n[0]=a+Br,n[1]=a-n[0]+Br,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?qr(r,u,n):r>0?(a=r-3*Cr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Cr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?qr(r,u,n):r>0?(a=r-4*Cr,n[0]=a-Dr,n[1]=a-n[0]-Dr,4):(a=r+4*Cr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-4);if(u<1094263291)return qr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ar[0]=r,cr[or]}(r),a=br(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Jr[i]=0|a,a=16777216*(a-Jr[i]);for(Jr[2]=a,f=3;0===Jr[f-1];)f-=1;return o=Wr(Jr,Kr,e,f),r<0?(n[0]=-Kr[0],n[1]=-Kr[1],-o):(n[0]=Kr[0],n[1]=Kr[1],o)}var Rr=[0,0];function Xr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:tr(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Rr)){case 0:return tr(Rr[0],Rr[1]);case 1:return-ur(Rr[0],Rr[1]);case 2:return-tr(Rr[0],Rr[1]);default:return ur(Rr[0],Rr[1])}}var Zr=[0,0];function $r(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ur(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Zr)){case 0:return ur(Zr[0],Zr[1]);case 1:return tr(Zr[0],Zr[1]);case 2:return-ur(Zr[0],Zr[1]);default:return-tr(Zr[0],Zr[1])}}var rn=3.141592653589793;var nn=1.4616321449683622,tn=1.4616321449683622;function en(r){var n,t,e,u,f,i,o,a,c,y,b,N,w;if(v(r)||s(r))return r;if(0===r)return l;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Z(r);if(n){if(r>=4503599627370496)return l;if(c=function(r){var n,t;return v(r)||s(r)?NaN:0===(n=p(t=r%2))||1===n?Ir(0,t):n<.25?$r(rn*t):n<.75?Ir(Xr(rn*(n=.5-n)),t):n<1.25?(t=Ir(1,t)-t,$r(rn*t)):n<1.75?-Ir(Xr(rn*(n-=1.5)),t):(t-=Ir(2,t),$r(rn*t))}(r),0===c)return l;t=Z(rn/p(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-Z(r),r>=nn-1+.27?(b=1-r,e=0):r>=nn-1-.27?(b=r-(tn-1),e=1):(b=r,e=2)):(w=0,r>=nn+.27?(b=2-r,e=0):r>=nn-.27?(b=r-tn,e=1):(b=r-1,e=2)),e){case 0:i=.07721566490153287+(N=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),f=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(o=b*i+f)-.5*b;break;case 1:i=.48383612272381005+(y=(N=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,u=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),w+=-.12148629053584961+(o=N*i-(-3638676997039505e-33-y*(f+b*u)));break;case 2:i=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),f=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),w+=-.5*b+i/f}else if(r<8)switch(o=(b=r-(e=nr(r)))*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),a=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),w=.5*b+o/a,N=1,e){case 7:N*=b+6;case 6:N*=b+5;case 5:N*=b+4;case 4:N*=b+3;case 3:w+=Z(N*=b+2)}else r<0x400000000000000?(c=Z(r),y=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=N*N),w=(r-.5)*(c-1)+y):w=r*(Z(r)-1);return n&&(w=t-w),w}var un=.6931471803691238,fn=1.9082149292705877e-10;function on(r){var n,t,e,u,f,i,o,a,c,s;if(r<-1||v(r))return NaN;if(-1===r)return y;if(r===l)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,u=r,t=1)}return 0!==s&&(e<9007199254740992?(f=(s=((t=B(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(s=((t=B(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=Q(c,1072693248|t):(s+=1,c=Q(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?s*un+(f+=s*fn):s*un-((a=n*(1-.6666666666666666*u))-(s*fn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?u-(n-i*(n+a)):s*un-(n-(i*(n+a)+(s*fn+f))-u))}function an(r){return $(r)===r}function cn(r){return 0===r&&1/r===y}function vn(r){return an(r/2)}function ln(r){return vn(r>0?r-1:r+1)}var yn=Math.sqrt,sn=!0===Y?0:1,pn=new E(1),bn=new U(pn.buffer);function Nn(r,n){return pn[0]=r,bn[sn]=n>>>0,pn[0]}function wn(r){return 0|r}var An=[1,1.5],_n=[0,.5849624872207642],hn=[0,1.350039202129749e-8];var dn=1e300,mn=1e-300,gn=[0,0],Un=[0,0];function jn(r,n){var t,e,u,f,i,o,a,c,b,N,w,A,_,h;if(v(r)||v(n))return NaN;if(Ur.assign(n,gn,1,0),i=gn[0],0===gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return yn(r);if(-.5===n)return 1/yn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:p(r)<1==(n===l)?0:l}(r,n)}if(Ur.assign(r,gn,1,0),f=gn[0],0===gn[1]){if(0===f)return function(r,n){return n===y?l:n===l?0:n>0?ln(n)?r:0:ln(n)?Ir(l,r):l}(r,n);if(1===r)return 1;if(-1===r&&ln(n))return-1;if(s(r))return r===y?jn(-0,-n):n<0?0:l}if(r<0&&!1===an(n))return(r-r)/(r-r);if(u=p(r),t=2147483647&f|0,e=2147483647&i|0,a=i>>>31|0,o=(o=f>>>31|0)&&ln(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&B(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*dn*dn:o*mn*mn;if(t>1072693248)return 0===a?o*dn*dn:o*mn*mn;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Nn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Un,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,s,p,b,N,w,A,_,h,d,m,g;return h=0,t<1048576&&(h-=53,t=B(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,h+=1,t-=1048576),i=Nn(u=(A=(n=Q(n,t))-(c=An[m]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Q(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Nn(a=3+(f=i*i)+(w+=(o=_*(A-i*a-i*(n-(a-c))))*(i+u)),0),b=(s=-7.028461650952758e-9*(l=Nn(l=(A=i*a)+(_=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(_-(l-A))+hn[m])-((p=Nn(p=(y=.9617967009544373*l)+s+(v=_n[m])+(N=h),0))-N-v-y),r[0]=p,r[1]=b,r}(Un,u,t);if(A=(N=(n-(c=Nn(n,0)))*w[0]+n*w[1])+(b=c*w[0]),Ur.assign(A,gn,1,0),_=wn(gn[0]),h=wn(gn[1]),_>=1083179008){if(0!=(_-1083179008|h))return o*dn*dn;if(N+8008566259537294e-32>A-b)return o*dn*dn}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|h))return o*mn*mn;if(N<=A-b)return o*mn*mn}return A=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,s;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=Q(0,e)),r=wn(r=B(c=1-((c=(i=.6931471824645996*(f=Nn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(s=f)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Fr(c,v):Q(c,r)}(_,b,N),o*A}function In(r){var n;return v(r)||r===l?r:r===y?0:r>709.782712893384?l:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return Fr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=nr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function On(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=In(r),2.5066282746310007*(t=r>143.01608?(e=jn(r,.5*r-.25))*(e/t):jn(r,r-.5)/t)*n}function Sn(r,n){return n/((1+.5772156649015329*r)*r)}function En(r){var n,t,e,u;if(an(r)&&r<0||r===y||v(r))return NaN;if(0===r)return cn(r)?y:l;if(r>171.61447887182297)return l;if(r<-170.5674972726612)return 0;if((t=p(r))>33)return r>=0?On(r):(n=0==(1&(e=$(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*$r(rn*u),n*rn/(p(u)*On(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Sn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Sn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function Fn(r){return 0===r&&1/r===l}var Hn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Tn=Hn.length;function Gn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Tn;f++)t=e,u=n*(e=u)-t+Hn[f];return.5*(u-t)}(2*jn(10/r,2)-1)/r:1/(12*r)}function Pn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===y||n===y?y:r===n&&0===r?cn(r)?r:n:r<n?r:n;for(e=l,f=0;f<t;f++){if(v(u=arguments[f])||u===y)return u;(u<e||u===e&&0===u&&cn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===l||n===l?l:r===n&&0===r?Fn(r)?r:n:r>n?r:n;for(e=y,f=0;f<t;f++){if(v(u=arguments[f])||u===l)return u;(u>e||u===e&&0===u&&Fn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?l:u===l?y:e>=10?(t=Gn(e)+Gn(u)-Gn(e+u),-.5*Z(u)+.9189385332046728+t+(e-.5)*Z(e/(e+u))+u*on(-e/(e+u))):u>=10?(t=Gn(u)-Gn(e+u),en(e)+t+e-e*Z(e+u)+(u-.5)*on(-e/(e+u))):Z(En(e)*(En(u)/En(e+u)))}function kn(r,n,t){var e;return v(r)||v(n)||v(t)||n<=0||t<=0?NaN:r<0||r>1?y:0===r?n<1?l:n>1?y:Z(t):1===r?t<1?l:t>1?y:Z(n):(e=(n-1)*Z(r),e+=(t-1)*on(-r),e-=Pn(n,t))}function Mn(r,n){var t,e;return v(r)||v(n)||r<=0||n<=0?(e=NaN,function(){return e}):(t=Pn(r,n),function(e){var u;if(v(e))return NaN;if(e<0||e>1)return y;if(0===e)return r<1?l:r>1?y:Z(n);if(1===e)return n<1?l:n>1?y:Z(r);return u=-t,u+=(r-1)*Z(e)+(n-1)*on(-e)})}c(kn,"factory",Mn);export{kn as default,Mn as factory};
//# sourceMappingURL=mod.js.map
