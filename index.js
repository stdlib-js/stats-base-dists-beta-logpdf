// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n,t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,u=Object.prototype,f=u.toString,i=u.__defineGetter__,o=u.__defineSetter__,a=u.__lookupGetter__,c=u.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,n,t){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||c.call(r,n)?(e=r.__proto__,r.__proto__=u,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,t.get),v&&o&&o.call(r,n,t.set),r};var l=n;function y(r){return r!=r}var v=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function s(r){return r===v||r===p}function b(r){return Math.abs(r)}var N,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"";N=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return d.call(r);t=r[_],f=_,n=null!=(u=r)&&h.call(u,f);try{r[_]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[_]=t:delete r[_],e}:function(r){return d.call(r)};var A,m=N,g="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,j="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(g&&t instanceof Uint32Array||"[object Uint32Array]"===m(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?j:function(){throw new Error("not implemented")};var I,O=A,S="function"==typeof Float64Array,E="function"==typeof Float64Array?Float64Array:null,F="function"==typeof Float64Array?Float64Array:void 0;I=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),t=n,r=(S&&t instanceof Float64Array||"[object Float64Array]"===m(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),t=n,r=(G&&t instanceof Uint8Array||"[object Uint8Array]"===m(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M,k=T,L="function"==typeof Uint16Array,V="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V(n=[1,3.14,-3.14,65536,65537]),t=n,r=(L&&t instanceof Uint16Array||"[object Uint16Array]"===m(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,q={uint16:M,uint8:k};(Y=new q.uint16(1))[0]=4660;var C=52===new q.uint8(Y.buffer)[0],z=!0===C?1:0,B=new H(1),D=new O(B.buffer);function J(r){return B[0]=r,D[z]}var K=!0===C?1:0,Q=new H(1),R=new O(Q.buffer);function X(r,n){return Q[0]=r,R[K]=n>>>0,Q[0]}var Z=1023,$=.6931471803691238,rr=1.9082149292705877e-10,nr=1048575;function tr(r){var n,t,e,u,f,i,o,a,c,l,v,s;return 0===r?p:y(r)||r<0?NaN:(f=0,(t=J(r))<1048576&&(f-=54,t=J(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-Z|0,f+=(a=614244+(t&=nr)&1048576|0)>>20|0,o=(r=X(r,t|1072693248^a))-1,(nr&2+t)<3?0===o?0===f?0:f*$+f*rr:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*$-(i-f*rr-o)):(a=t-398458|0,c=440401-t|0,u=(v=(s=(l=o/(2+o))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*$-(n-(l*(n+i)+f*rr)-o)):0===f?o-l*(o-i):f*$-(l*(o-i)-f*rr-o))))}var er=Math.floor,ur=Math.ceil;function fr(r){return r<0?ur(r):er(r)}function ir(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var or=-.16666666666666632;function ar(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(or+u*t):r-(u*(.5*n-e*t)-n-e*or)}var cr,lr,yr=!0===C?0:1,vr=new H(1),pr=new O(vr.buffer);!0===C?(cr=1,lr=0):(cr=0,lr=1);var sr,br,Nr={HIGH:cr,LOW:lr},wr=new H(1),dr=new O(wr.buffer),hr=Nr.HIGH,_r=Nr.LOW;function Ar(r,n){return dr[hr]=r,dr[_r]=n,wr[0]}!0===C?(sr=1,br=0):(sr=0,br=1);var mr={HIGH:sr,LOW:br},gr=new H(1),Ur=new O(gr.buffer),jr=mr.HIGH,Ir=mr.LOW;function Or(r,n){return gr[0]=n,r[0]=Ur[jr],r[1]=Ur[Ir],r}function Sr(r,n){return 1===arguments.length?Or([0,0],r):Or(r,n)}var Er=[0,0];function Fr(r,n){var t,e;return Sr(Er,r),t=Er[0],t&=2147483647,e=J(n),Ar(t|=e&=2147483648,Er[1])}function Tr(r,n){return y(n)||s(n)?(r[0]=n,r[1]=0,r):0!==n&&b(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||y(r)||s(r)?r:(function(r,n){1===arguments.length?Tr([0,0],r):Tr(r,n)}(Hr,r),n+=Hr[1],n+=function(r){var n=J(r);return(n=(2146435072&n)>>>20)-Z|0}(r=Hr[0]),n<-1074?Fr(0,r):n>1023?r<0?p:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Sr(Gr,r),t=Gr[0],t&=2148532223,e*Ar(t|=n+Z<<20,Gr[1])))}function xr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lr=16777216,Vr=5.960464477539063e-8,Wr=xr(20),Yr=xr(20),qr=xr(20),Cr=xr(20);function zr(r,n,t,e,u,f,i,o,a){var c,l,y,v,p,s,b,N,w;for(v=f,w=e[t],N=t,p=0;N>0;p++)l=Vr*w|0,Cr[p]=w-Lr*l|0,w=e[N-1]+l,N-=1;if(w=Pr(w,u),w-=8*er(.125*w),w-=b=0|w,y=0,u>0?(b+=p=Cr[t-1]>>24-u,Cr[t-1]-=p<<24-u,y=Cr[t-1]>>23-u):0===u?y=Cr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)N=Cr[p],0===c?0!==N&&(c=1,Cr[p]=16777216-N):Cr[p]=16777215-N;if(u>0)switch(u){case 1:Cr[t-1]&=8388607;break;case 2:Cr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Pr(1,u)))}if(0===w){for(N=0,p=t-1;p>=f;p--)N|=Cr[p];if(0===N){for(s=1;0===Cr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Mr[i+p],l=0,N=0;N<=o;N++)l+=r[N]*a[o+(p-N)];e[p]=l}return zr(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===Cr[t];)t-=1,u-=24;else(w=Pr(w,-u))>=Lr?(l=Vr*w|0,Cr[t]=w-Lr*l|0,u+=24,Cr[t+=1]=l):Cr[t]=0|w;for(l=Pr(1,u),p=t;p>=0;p--)e[p]=l*Cr[p],l*=Vr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=kr[s]*e[p+s];qr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=qr[p];for(n[0]=0===y?l:-l,l=qr[0]-l,p=1;p<=t;p++)l+=qr[p];return n[1]=0===y?l:-l,7&b}function Br(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Wr[a]=c<0?0:Mr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Wr[i+(a-c)];Yr[a]=u}return zr(r,n,4,Yr,o,4,f,i,Wr)}var Dr=Math.round;function Jr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Dr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(J(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(J(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Kr=1.5707963267341256,Qr=6077100506506192e-26,Rr=2*Qr,Xr=3*Qr,Zr=4*Qr,$r=[0,0,0],rn=[0,0];function nn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&J(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Jr(r,u,n):u<=1073928572?r>0?(a=r-Kr,n[0]=a-Qr,n[1]=a-n[0]-Qr,1):(a=r+Kr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-1):r>0?(a=r-2*Kr,n[0]=a-Rr,n[1]=a-n[0]-Rr,2):(a=r+2*Kr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Jr(r,u,n):r>0?(a=r-3*Kr,n[0]=a-Xr,n[1]=a-n[0]-Xr,3):(a=r+3*Kr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-3):1075388923===u?Jr(r,u,n):r>0?(a=r-4*Kr,n[0]=a-Zr,n[1]=a-n[0]-Zr,4):(a=r+4*Kr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-4);if(u<1094263291)return Jr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return vr[0]=r,pr[yr]}(r),a=Ar(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)$r[i]=0|a,a=16777216*(a-$r[i]);for($r[2]=a,f=3;0===$r[f-1];)f-=1;return o=Br($r,rn,e,f),r<0?(n[0]=-rn[0],n[1]=-rn[1],-o):(n[0]=rn[0],n[1]=rn[1],o)}var tn=[0,0];function en(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ir(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,tn)){case 0:return ir(tn[0],tn[1]);case 1:return-ar(tn[0],tn[1]);case 2:return-ir(tn[0],tn[1]);default:return ar(tn[0],tn[1])}}var un=[0,0];function fn(r){var n;if(n=J(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ar(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,un)){case 0:return ar(un[0],un[1]);case 1:return ir(un[0],un[1]);case 2:return-ar(un[0],un[1]);default:return-ir(un[0],un[1])}}var on=3.141592653589793,an=1.4616321449683622,cn=1.4616321449683622;function ln(r){var n,t,e,u,f,i,o,a,c,l,p,N,w;if(y(r)||s(r))return r;if(0===r)return v;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-tr(r);if(n){if(r>=4503599627370496)return v;if(c=function(r){var n,t;return y(r)||s(r)?NaN:0===(n=b(t=r%2))||1===n?Fr(0,t):n<.25?fn(on*t):n<.75?Fr(en(on*(n=.5-n)),t):n<1.25?(t=Fr(1,t)-t,fn(on*t)):n<1.75?-Fr(en(on*(n-=1.5)),t):(t-=Fr(2,t),fn(on*t))}(r),0===c)return v;t=tr(on/b(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-tr(r),r>=an-1+.27?(p=1-r,e=0):r>=an-1-.27?(p=r-(cn-1),e=1):(p=r,e=2)):(w=0,r>=an+.27?(p=2-r,e=0):r>=an-.27?(p=r-cn,e=1):(p=r-1,e=2)),e){case 0:i=.07721566490153287+(N=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),f=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(o=p*i+f)-.5*p;break;case 1:i=.48383612272381005+(l=(N=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),w+=(o=N*i-(-3638676997039505e-33-l*(f+p*u)))-.12148629053584961;break;case 2:i=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),f=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),w+=-.5*p+i/f}else if(r<8)switch(o=(p=r-(e=fr(r)))*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),a=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),w=.5*p+o/a,N=1,e){case 7:N*=p+6;case 6:N*=p+5;case 5:N*=p+4;case 4:N*=p+3;case 3:w+=tr(N*=p+2)}else r<0x400000000000000?(c=tr(r),l=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=N*N),w=(r-.5)*(c-1)+l):w=r*(tr(r)-1);return n&&(w=t-w),w}var yn=.6931471803691238,vn=1.9082149292705877e-10;function pn(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return p;if(r===v)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=J(c=1+r))>>20)-Z)>0?1-(c-r):r-(c-1),f/=c):(l=((t=J(c=r))>>20)-Z,f=0),(t&=1048575)<434334?c=X(c,1072693248|t):(l+=1,c=X(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*yn+(f+=l*vn):l*yn-((a=n*(1-.6666666666666666*u))-(l*vn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*yn-(n-(i*(n+a)+(l*vn+f))-u))}function sn(r){return er(r)===r}function bn(r){return 0===r&&1/r===p}function Nn(r){return sn(r/2)}function wn(r){return Nn(r>0?r-1:r+1)}var dn=Math.sqrt,hn=!0===C?0:1,_n=new H(1),An=new O(_n.buffer);function mn(r,n){return _n[0]=r,An[hn]=n>>>0,_n[0]}function gn(r){return 0|r}var Un=1048576,jn=[1,1.5],In=[0,.5849624872207642],On=[0,1.350039202129749e-8],Sn=2147483647,En=1048575,Fn=1048576,Tn=2147483647,Hn=1083179008,Gn=1e300,Pn=1e-300,xn=[0,0],Mn=[0,0];function kn(r,n){var t,e,u,f,i,o,a,c,l,N,w,d,h,_;if(y(r)||y(n))return NaN;if(Sr(xn,n),i=xn[0],0===xn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return dn(r);if(-.5===n)return 1/dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:b(r)<1==(n===v)?0:v}(r,n)}if(Sr(xn,r),f=xn[0],0===xn[1]){if(0===f)return function(r,n){return n===p?v:n===v?0:n>0?wn(n)?r:0:wn(n)?Fr(v,r):v}(r,n);if(1===r)return 1;if(-1===r&&wn(n))return-1;if(s(r))return r===p?kn(-0,-n):n<0?0:v}if(r<0&&!1===sn(n))return(r-r)/(r-r);if(u=b(r),t=f&Tn|0,e=i&Tn|0,a=i>>>31|0,o=(o=f>>>31|0)&&wn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&J(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Gn*Gn:o*Pn*Pn;if(t>1072693248)return 0===a?o*Gn*Gn:o*Pn*Pn;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=mn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Mn,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,b,N,w,d,h,_,A,m,g;return _=0,t<Un&&(_-=53,t=J(n*=9007199254740992)),_+=(t>>20)-Z|0,t=1072693248|(A=1048575&t|0),A<=235662?m=0:A<767610?m=1:(m=0,_+=1,t-=Un),i=mn(u=(d=(n=X(n,t))-(c=jn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=X(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=mn(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(y=mn(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+On[m])-((s=mn(s=(v=.9617967009544373*y)+p+(l=In[m])+(N=_),0))-N-l-v),r[0]=s,r[1]=b,r}(Mn,u,t);if(N=(n-(c=mn(n,0)))*w[0]+n*w[1],l=c*w[0],Sr(xn,d=N+l),h=gn(xn[0]),_=gn(xn[1]),h>=Hn){if(0!=(h-Hn|_))return o*Gn*Gn;if(N+8008566259537294e-32>d-l)return o*Gn*Gn}else if((h&Tn)>=1083231232){if(0!=(h-3230714880|_))return o*Pn*Pn;if(N<=d-l)return o*Pn*Pn}return d=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&Sn|0)>>20)-Z|0,c=0,l>1071644672&&(u=X(0,((c=r+(Fn>>y+1)>>>0)&~(En>>(y=((c&Sn)>>20)-Z|0)))>>>0),c=(c&En|Fn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=gn(r=J(a=1-((a=(f=.6931471824645996*(u=mn(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):X(a,r)}(h,l,N),o*d}var Ln=1.4426950408889634,Vn=1/(1<<28);function Wn(r){var n;return y(r)||r===v?r:r===p?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Vn?1+r:function(r,n,t){var e,u,f,i;return Pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=fr(r<0?Ln*r-.5:Ln*r+.5)),1.9082149292705877e-10*n,n)}function Yn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Wn(r),2.5066282746310007*(t=r>143.01608?(e=kn(r,.5*r-.25))*(e/t):kn(r,r-.5)/t)*n}function qn(r,n){return n/((1+.5772156649015329*r)*r)}function Cn(r){var n,t,e,u;if(sn(r)&&r<0||r===p||y(r))return NaN;if(0===r)return bn(r)?p:v;if(r>171.61447887182297)return v;if(r<-170.5674972726612)return 0;if((t=b(r))>33)return r>=0?Yn(r):(n=0==(1&(e=er(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*fn(on*u),n*on/(b(u)*Yn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return qn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return qn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}function zn(r){return 0===r&&1/r===v}var Bn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Dn=Bn.length;function Jn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Dn;f++)t=e,u=n*(e=u)-t+Bn[f];return.5*(u-t)}(2*kn(10/r,2)-1)/r:1/(12*r)}function Kn(r,n){var t,e,u;return e=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===p||n===p?p:r===n&&0===r?bn(r)?r:n:r<n?r:n;for(e=v,f=0;f<t;f++){if(y(u=arguments[f])||u===p)return u;(u<e||u===e&&0===u&&bn(u))&&(e=u)}return e}(r,n),u=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===v||n===v?v:r===n&&0===r?zn(r)?r:n:r>n?r:n;for(e=p,f=0;f<t;f++){if(y(u=arguments[f])||u===v)return u;(u>e||u===e&&0===u&&zn(u))&&(e=u)}return e}(r,n),e<0?NaN:0===e?v:u===v?p:e>=10?(t=Jn(e)+Jn(u)-Jn(e+u),-.5*tr(u)+.9189385332046728+t+(e-.5)*tr(e/(e+u))+u*pn(-e/(e+u))):u>=10?(t=Jn(u)-Jn(e+u),ln(e)+t+e-e*tr(e+u)+(u-.5)*pn(-e/(e+u))):tr(Cn(e)*(Cn(u)/Cn(e+u)))}function Qn(r,n,t){var e;return y(r)||y(n)||y(t)||n<=0||t<=0?NaN:r<0||r>1?p:0===r?n<1?v:n>1?p:tr(t):1===r?t<1?v:t>1?p:tr(n):(e=(n-1)*tr(r),e+=(t-1)*pn(-r),e-=Kn(n,t))}function Rn(r,n){var t,e;return y(r)||y(n)||r<=0||n<=0?(e=NaN,function(){return e}):(t=Kn(r,n),function(e){var u;return y(e)?NaN:e<0||e>1?p:0===e?r<1?v:r>1?p:tr(n):1===e?n<1?v:n>1?p:tr(r):(u=-t,u+=(r-1)*tr(e)+(n-1)*pn(-e))})}l(Qn,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Rn}),r.default=Qn,r.factory=Rn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpdf={});
//# sourceMappingURL=index.js.map
