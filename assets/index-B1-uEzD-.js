(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function y(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=y(o);fetch(o.href,t)}})();var a2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function n2(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var t2={exports:{}};(function(u,I){(function(y,s){u.exports=s()})(a2,function(){return function(y){function s(t){if(o[t])return o[t].exports;var c=o[t]={exports:{},id:t,loaded:!1};return y[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var o={};return s.m=y,s.c=o,s.p="dist/",s(0)}([function(y,s,o){function t(n){return n&&n.__esModule?n:{default:n}}var c=Object.assign||function(n){for(var L=1;L<arguments.length;L++){var Z=arguments[L];for(var D in Z)Object.prototype.hasOwnProperty.call(Z,D)&&(n[D]=Z[D])}return n},b=o(1),w=(t(b),o(6)),i=t(w),p=o(7),r=t(p),d=o(8),l=t(d),v=o(9),k=t(v),j=o(10),B=t(j),R=o(11),G=t(R),K=o(14),W=t(K),O=[],Y=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},A=function(){var n=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(n&&(Y=!0),Y)return O=(0,G.default)(O,g),(0,B.default)(O,g.once),O},V=function(){O=(0,W.default)(),A()},a=function(){O.forEach(function(n,L){n.node.removeAttribute("data-aos"),n.node.removeAttribute("data-aos-easing"),n.node.removeAttribute("data-aos-duration"),n.node.removeAttribute("data-aos-delay")})},e=function(n){return n===!0||n==="mobile"&&k.default.mobile()||n==="phone"&&k.default.phone()||n==="tablet"&&k.default.tablet()||typeof n=="function"&&n()===!0},f=function(n){g=c(g,n),O=(0,W.default)();var L=document.all&&!window.atob;return e(g.disable)||L?a():(g.disableMutationObserver||l.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?A(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){A(!0)}):document.addEventListener(g.startEvent,function(){A(!0)}),window.addEventListener("resize",(0,r.default)(A,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(A,g.debounceDelay,!0)),window.addEventListener("scroll",(0,i.default)(function(){(0,B.default)(O,g.once)},g.throttleDelay)),g.disableMutationObserver||l.default.ready("[data-aos]",V),O)};y.exports={init:f,refresh:A,refreshHard:V}},function(y,s){},,,,,function(y,s){(function(o){function t(e,f,n){function L(m){var M=H,F=z;return H=z=void 0,P=m,x=e.apply(F,M)}function Z(m){return P=m,C=setTimeout($,f),N?L(m):x}function D(m){var M=m-E,F=m-P,U=f-M;return q?V(U,S-F):U}function T(m){var M=m-E,F=m-P;return E===void 0||M>=f||M<0||q&&F>=S}function $(){var m=a();return T(m)?J(m):void(C=setTimeout($,D(m)))}function J(m){return C=void 0,h&&H?L(m):(H=z=void 0,x)}function Q(){C!==void 0&&clearTimeout(C),P=0,H=E=z=C=void 0}function X(){return C===void 0?x:J(a())}function _(){var m=a(),M=T(m);if(H=arguments,z=this,E=m,M){if(C===void 0)return Z(E);if(q)return C=setTimeout($,f),L(E)}return C===void 0&&(C=setTimeout($,f)),x}var H,z,S,x,C,E,P=0,N=!1,q=!1,h=!0;if(typeof e!="function")throw new TypeError(d);return f=p(f)||0,b(n)&&(N=!!n.leading,q="maxWait"in n,S=q?A(p(n.maxWait)||0,f):S,h="trailing"in n?!!n.trailing:h),_.cancel=Q,_.flush=X,_}function c(e,f,n){var L=!0,Z=!0;if(typeof e!="function")throw new TypeError(d);return b(n)&&(L="leading"in n?!!n.leading:L,Z="trailing"in n?!!n.trailing:Z),t(e,f,{leading:L,maxWait:f,trailing:Z})}function b(e){var f=typeof e>"u"?"undefined":r(e);return!!e&&(f=="object"||f=="function")}function w(e){return!!e&&(typeof e>"u"?"undefined":r(e))=="object"}function i(e){return(typeof e>"u"?"undefined":r(e))=="symbol"||w(e)&&g.call(e)==v}function p(e){if(typeof e=="number")return e;if(i(e))return l;if(b(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=b(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(k,"");var n=B.test(e);return n||R.test(e)?G(e.slice(2),n?2:8):j.test(e)?l:+e}var r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",l=NaN,v="[object Symbol]",k=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,R=/^0o[0-7]+$/i,G=parseInt,K=(typeof o>"u"?"undefined":r(o))=="object"&&o&&o.Object===Object&&o,W=(typeof self>"u"?"undefined":r(self))=="object"&&self&&self.Object===Object&&self,O=K||W||Function("return this")(),Y=Object.prototype,g=Y.toString,A=Math.max,V=Math.min,a=function(){return O.Date.now()};y.exports=c}).call(s,function(){return this}())},function(y,s){(function(o){function t(a,e,f){function n(h){var m=_,M=H;return _=H=void 0,E=h,S=a.apply(M,m)}function L(h){return E=h,x=setTimeout(T,e),P?n(h):S}function Z(h){var m=h-C,M=h-E,F=e-m;return N?A(F,z-M):F}function D(h){var m=h-C,M=h-E;return C===void 0||m>=e||m<0||N&&M>=z}function T(){var h=V();return D(h)?$(h):void(x=setTimeout(T,Z(h)))}function $(h){return x=void 0,q&&_?n(h):(_=H=void 0,S)}function J(){x!==void 0&&clearTimeout(x),E=0,_=C=H=x=void 0}function Q(){return x===void 0?S:$(V())}function X(){var h=V(),m=D(h);if(_=arguments,H=this,C=h,m){if(x===void 0)return L(C);if(N)return x=setTimeout(T,e),n(C)}return x===void 0&&(x=setTimeout(T,e)),S}var _,H,z,S,x,C,E=0,P=!1,N=!1,q=!0;if(typeof a!="function")throw new TypeError(r);return e=i(e)||0,c(f)&&(P=!!f.leading,N="maxWait"in f,z=N?g(i(f.maxWait)||0,e):z,q="trailing"in f?!!f.trailing:q),X.cancel=J,X.flush=Q,X}function c(a){var e=typeof a>"u"?"undefined":p(a);return!!a&&(e=="object"||e=="function")}function b(a){return!!a&&(typeof a>"u"?"undefined":p(a))=="object"}function w(a){return(typeof a>"u"?"undefined":p(a))=="symbol"||b(a)&&Y.call(a)==l}function i(a){if(typeof a=="number")return a;if(w(a))return d;if(c(a)){var e=typeof a.valueOf=="function"?a.valueOf():a;a=c(e)?e+"":e}if(typeof a!="string")return a===0?a:+a;a=a.replace(v,"");var f=j.test(a);return f||B.test(a)?R(a.slice(2),f?2:8):k.test(a)?d:+a}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},r="Expected a function",d=NaN,l="[object Symbol]",v=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,B=/^0o[0-7]+$/i,R=parseInt,G=(typeof o>"u"?"undefined":p(o))=="object"&&o&&o.Object===Object&&o,K=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,W=G||K||Function("return this")(),O=Object.prototype,Y=O.toString,g=Math.max,A=Math.min,V=function(){return W.Date.now()};y.exports=t}).call(s,function(){return this}())},function(y,s){function o(p){var r=void 0,d=void 0;for(r=0;r<p.length;r+=1)if(d=p[r],d.dataset&&d.dataset.aos||d.children&&o(d.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function b(p,r){var d=window.document,l=t(),v=new l(w);i=r,v.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function w(p){p&&p.forEach(function(r){var d=Array.prototype.slice.call(r.addedNodes),l=Array.prototype.slice.call(r.removedNodes),v=d.concat(l);if(o(v))return i()})}Object.defineProperty(s,"__esModule",{value:!0});var i=function(){};s.default={isSupported:c,ready:b}},function(y,s){function o(d,l){if(!(d instanceof l))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){function d(l,v){for(var k=0;k<v.length;k++){var j=v[k];j.enumerable=j.enumerable||!1,j.configurable=!0,"value"in j&&(j.writable=!0),Object.defineProperty(l,j.key,j)}}return function(l,v,k){return v&&d(l.prototype,v),k&&d(l,k),l}}(),b=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,w=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=function(){function d(){o(this,d)}return c(d,[{key:"phone",value:function(){var l=t();return!(!b.test(l)&&!w.test(l.substr(0,4)))}},{key:"mobile",value:function(){var l=t();return!(!i.test(l)&&!p.test(l.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();s.default=new r},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(c,b,w){var i=c.node.getAttribute("data-aos-once");b>c.position?c.node.classList.add("aos-animate"):typeof i<"u"&&(i==="false"||!w&&i!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,b){var w=window.pageYOffset,i=window.innerHeight;c.forEach(function(p,r){o(p,i+w,b)})};s.default=t},function(y,s,o){function t(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(12),b=t(c),w=function(i,p){return i.forEach(function(r,d){r.node.classList.add("aos-init"),r.position=(0,b.default)(r.node,p.offset)}),i};s.default=w},function(y,s,o){function t(i){return i&&i.__esModule?i:{default:i}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(13),b=t(c),w=function(i,p){var r=0,d=0,l=window.innerHeight,v={offset:i.getAttribute("data-aos-offset"),anchor:i.getAttribute("data-aos-anchor"),anchorPlacement:i.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(d=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(i=document.querySelectorAll(v.anchor)[0]),r=(0,b.default)(i).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":r+=i.offsetHeight/2;break;case"bottom-bottom":r+=i.offsetHeight;break;case"top-center":r+=l/2;break;case"bottom-center":r+=l/2+i.offsetHeight;break;case"center-center":r+=l/2+i.offsetHeight/2;break;case"top-top":r+=l;break;case"bottom-top":r+=i.offsetHeight+l;break;case"center-top":r+=i.offsetHeight/2+l}return v.anchorPlacement||v.offset||isNaN(p)||(d=p),r+d};s.default=w},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){for(var c=0,b=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),b+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:b,left:c}};s.default=o},function(y,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};s.default=o}])})})(t2);var i2=t2.exports;const e2=n2(i2),o2="data:image/svg+xml,%3csvg%20viewBox='0%200%20126%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M119.816%2044.2133H107.982V47L104.656%2044.2133L101.017%2041.1647L107.982%2035.3298V38.1163H118.501C121.647%2038.1163%20123.608%2034.7034%20122.024%2031.9849L124.451%2036.111C126.559%2039.6952%20123.974%2044.2133%20119.816%2044.2133Z'%20fill='%2300DF82'/%3e%3cpath%20d='M88.7504%2036.1095L94.7502%2025.9093L92.3483%2024.4967L96.4367%2023.0422L100.91%2021.451L102.407%2030.4135L100.006%2029.0006L94.6727%2038.0667C93.0774%2040.7789%2095.0248%2044.1998%2098.1714%2044.2121H93.3846C89.2263%2044.2121%2086.6422%2039.6937%2088.7504%2036.1095Z'%20fill='%2300DF82'/%3e%3cpath%20d='M119.615%2022.5017L118.878%2026.7779L118.073%2031.4567L109.527%2028.3693L111.935%2026.9682L106.647%2017.8761C105.065%2015.1561%20101.129%2015.1766%2099.5757%2017.9132L101.922%2013.7411C103.96%2010.1166%20109.165%2010.0788%20111.256%2013.6734L117.206%2023.9027L119.615%2022.5017Z'%20fill='%2300DF82'/%3e%3cpath%20d='M20.4658%2047.48C17.8418%2047.48%2015.4258%2047.064%2013.2178%2046.232C11.0418%2045.368%209.13781%2044.168%207.50581%2042.632C5.87381%2041.064%204.60981%2039.224%203.71381%2037.112C2.81781%2035%202.36981%2032.696%202.36981%2030.2C2.36981%2027.704%202.81781%2025.4%203.71381%2023.288C4.60981%2021.176%205.87381%2019.352%207.50581%2017.816C9.16981%2016.248%2011.1058%2015.048%2013.3138%2014.216C15.5218%2013.352%2017.9378%2012.92%2020.5618%2012.92C23.4098%2012.92%2025.9698%2013.384%2028.2418%2014.312C30.5458%2015.24%2032.4818%2016.6%2034.0498%2018.392L30.1138%2022.232C28.8018%2020.92%2027.3778%2019.96%2025.8418%2019.352C24.3378%2018.712%2022.6738%2018.392%2020.8498%2018.392C19.0898%2018.392%2017.4578%2018.68%2015.9538%2019.256C14.4498%2019.832%2013.1538%2020.648%2012.0658%2021.704C10.9778%2022.76%2010.1298%2024.008%209.52181%2025.448C8.94581%2026.888%208.65781%2028.472%208.65781%2030.2C8.65781%2031.896%208.94581%2033.464%209.52181%2034.904C10.1298%2036.344%2010.9778%2037.608%2012.0658%2038.696C13.1538%2039.752%2014.4338%2040.568%2015.9058%2041.144C17.3778%2041.72%2019.0098%2042.008%2020.8018%2042.008C22.4658%2042.008%2024.0658%2041.752%2025.6018%2041.24C27.1698%2040.696%2028.6578%2039.8%2030.0658%2038.552L33.6178%2043.208C31.8578%2044.616%2029.8098%2045.688%2027.4738%2046.424C25.1698%2047.128%2022.8338%2047.48%2020.4658%2047.48ZM27.7138%2042.392V29.816H33.6178V43.208L27.7138%2042.392ZM57.5919%2047.48C54.9679%2047.48%2052.5519%2047.048%2050.3439%2046.184C48.1359%2045.32%2046.2159%2044.12%2044.5839%2042.584C42.9519%2041.016%2041.6879%2039.192%2040.7919%2037.112C39.8959%2035%2039.4479%2032.696%2039.4479%2030.2C39.4479%2027.704%2039.8959%2025.416%2040.7919%2023.336C41.6879%2021.224%2042.9519%2019.4%2044.5839%2017.864C46.2159%2016.296%2048.1359%2015.08%2050.3439%2014.216C52.5519%2013.352%2054.9519%2012.92%2057.5439%2012.92C60.1679%2012.92%2062.5679%2013.352%2064.7439%2014.216C66.9519%2015.08%2068.8719%2016.296%2070.5039%2017.864C72.1359%2019.4%2073.3999%2021.224%2074.2959%2023.336C75.1919%2025.416%2075.6399%2027.704%2075.6399%2030.2C75.6399%2032.696%2075.1919%2035%2074.2959%2037.112C73.3999%2039.224%2072.1359%2041.048%2070.5039%2042.584C68.8719%2044.12%2066.9519%2045.32%2064.7439%2046.184C62.5679%2047.048%2060.1839%2047.48%2057.5919%2047.48ZM57.5439%2042.008C59.2399%2042.008%2060.8079%2041.72%2062.2479%2041.144C63.6879%2040.568%2064.9359%2039.752%2065.9919%2038.696C67.0479%2037.608%2067.8639%2036.36%2068.4399%2034.952C69.0479%2033.512%2069.3519%2031.928%2069.3519%2030.2C69.3519%2028.472%2069.0479%2026.904%2068.4399%2025.496C67.8639%2024.056%2067.0479%2022.808%2065.9919%2021.752C64.9359%2020.664%2063.6879%2019.832%2062.2479%2019.256C60.8079%2018.68%2059.2399%2018.392%2057.5439%2018.392C55.8479%2018.392%2054.2799%2018.68%2052.8399%2019.256C51.4319%2019.832%2050.1839%2020.664%2049.0959%2021.752C48.0399%2022.808%2047.2079%2024.056%2046.5999%2025.496C46.0239%2026.904%2045.7359%2028.472%2045.7359%2030.2C45.7359%2031.896%2046.0239%2033.464%2046.5999%2034.904C47.2079%2036.344%2048.0399%2037.608%2049.0959%2038.696C50.1519%2039.752%2051.3999%2040.568%2052.8399%2041.144C54.2799%2041.72%2055.8479%2042.008%2057.5439%2042.008Z'%20fill='%23F1F7F7'/%3e%3c/svg%3e",r2="data:image/svg+xml,%3csvg%20width='325'%20height='393'%20viewBox='0%200%20325%20393'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M200.152%20283.762L199.864%20283.776C189.803%20283.932%20181.688%20292.126%20181.688%20302.226V374.536C181.688%20384.732%20189.956%20393%20200.152%20393H211.75V283.762H200.152Z'%20fill='%23021A1A'/%3e%3cpath%20d='M211.75%20393H223.346C233.542%20393%20241.81%20384.732%20241.81%20374.536V302.226C241.81%20292.028%20233.542%20283.762%20223.346%20283.762H211.75V393Z'%20fill='%23030F0F'/%3e%3cpath%20d='M211.749%20283.762V224.55H172.61C144.85%20224.55%20122.267%20201.965%20122.267%20174.205V11.8842C122.267%205.31906%20116.946%200%20110.383%200C103.82%200%2098.499%205.31906%2098.499%2011.8842V174.205C98.499%20215.071%20131.746%20248.318%20172.61%20248.318H199.863V283.777L200.152%20283.762H211.749Z'%20fill='%23F1F7F7'/%3e%3cpath%20d='M313.114%200C306.551%200%20301.23%205.31906%20301.23%2011.8842V174.205C301.23%20201.965%20278.647%20224.55%20250.887%20224.55H211.75V283.762H223.346L223.634%20283.777V248.318H250.887C291.753%20248.318%20325%20215.071%20325%20174.205V11.8842C325%205.31906%20319.679%200%20313.114%200Z'%20fill='%23AACBC4'/%3e%3cpath%20d='M211.75%20347.829L181.688%20323.929V303.06L211.75%20326.959V347.829Z'%20fill='%23042222'/%3e%3cpath%20d='M241.81%20371.728L211.75%20347.828V326.959L241.81%20350.858V371.728Z'%20fill='%23021A1A'/%3e%3cpath%20d='M241.81%20307.704L211.75%20283.804V283.762H223.346L223.634%20283.776V283.763C233.697%20283.917%20241.81%20292.124%20241.81%20302.226V307.704Z'%20fill='%23021A1A'/%3e%3cpath%20d='M170.722%20133.635C175.751%20123.09%20179.243%20111.936%20181.072%20100.533C181.757%2096.26%20180.914%2092.0485%20178.89%2088.5136L153.282%20103.175L170.722%20133.635Z'%20fill='%23085543'/%3e%3cpath%20d='M140.804%20110.316L119.101%2072.4066C99.9229%2073.355%2080.544%2078.761%2062.5753%2089.0477C44.6064%2099.3345%2030.133%20113.308%2019.6035%20129.366L41.3061%20167.276L140.804%20110.316Z'%20fill='%2303624C'/%3e%3cpath%20d='M41.3057%20167.276L19.6031%20129.366C16.5223%20134.064%2013.7822%20138.941%2011.3896%20143.957L28.8276%20174.42L41.3057%20167.276Z'%20fill='%23AACBC4'/%3e%3cpath%20d='M178.89%2088.5133C176.866%2084.9784%20173.664%2082.1202%20169.632%2080.5469C158.873%2076.3501%20147.485%2073.7136%20135.845%2072.7116L153.283%20103.174L178.89%2088.5133Z'%20fill='%2303624C'/%3e%3cpath%20d='M153.281%20103.174L135.843%2072.7117C130.306%2072.2347%20124.714%2072.1293%20119.101%2072.4066L140.804%20110.316L153.281%20103.174Z'%20fill='%23AACBC4'/%3e%3cpath%20d='M41.3066%20167.276L63.009%20205.186C82.1883%20204.237%20101.567%20198.831%20119.536%20188.545C137.504%20178.26%20151.978%20164.285%20162.507%20148.228L140.804%20110.316L41.3066%20167.276Z'%20fill='%23085543'/%3e%3cpath%20d='M153.281%20103.175L140.804%20110.317L162.507%20148.228C165.587%20143.528%20168.327%20138.651%20170.721%20133.635L153.281%20103.175Z'%20fill='%2317876E'/%3e%3cpath%20d='M3.22168%20189.079C5.24538%20192.614%208.44825%20195.474%2012.481%20197.046C23.2394%20201.243%2034.6277%20203.879%2046.2672%20204.881L28.8284%20174.42L3.22168%20189.079Z'%20fill='%23085543'/%3e%3cpath%20d='M28.8271%20174.42L46.266%20204.881C51.803%20205.358%2057.3963%20205.465%2063.0076%20205.186L41.3053%20167.276L28.8271%20174.42Z'%20fill='%2317876E'/%3e%3cpath%20d='M11.3902%20143.957C6.36088%20154.503%202.86757%20165.659%201.03911%20177.06C0.353756%20181.335%201.19791%20185.544%203.22143%20189.079L28.8281%20174.42L11.3902%20143.957Z'%20fill='%2303624C'/%3e%3c/svg%3e",s2="/go_recycle/assets/grass-Cy_-BD5L.svg",c2="/go_recycle/assets/tab-D-LrkAQ0.svg",l2="data:image/svg+xml,%3csvg%20width='492'%20height='125'%20viewBox='0%200%20492%20125'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.9921%2069.9998C9.84672%2069.9998%200%2079.8451%200%2091.9905C0%20104.136%209.84672%20113.982%2021.9921%20113.982C34.1374%20113.982%2043.9827%20104.136%2043.9827%2091.9905C43.9827%2079.8451%2034.1374%2069.9998%2021.9921%2069.9998Z'%20fill='%2300DF82'/%3e%3cpath%20d='M108.983%2091.9905C108.983%2079.8451%2099.1373%2069.9998%2086.992%2069.9998C74.8467%2069.9998%2065%2079.8451%2065%2091.9905C65%20104.136%2074.8467%20113.982%2086.992%20113.982C99.1373%20113.982%20108.983%20104.136%20108.983%2091.9905Z'%20fill='%2300DF82'/%3e%3cpath%20d='M151.992%2069.9998C139.847%2069.9998%20130%2079.8451%20130%2091.9905C130%20104.136%20139.847%20113.982%20151.992%20113.982C164.137%20113.982%20173.983%20104.136%20173.983%2091.9905C173.983%2079.8451%20164.137%2069.9998%20151.992%2069.9998Z'%20fill='%2300DF82'/%3e%3cpath%20d='M216.991%2069.9999C204.845%2069.9999%20195%2079.8452%20195%2091.9905C195%20104.136%20204.845%20113.981%20216.991%20113.981C229.136%20113.981%20238.981%20104.136%20238.981%2091.9905C238.981%2079.8452%20229.136%2069.9999%20216.991%2069.9999Z'%20fill='%2300DF82'/%3e%3cpath%20d='M465.98%2023.5529L470.638%2028.7303C472.717%2031.0419%20476.276%2031.23%20478.588%2029.1505C480.899%2027.071%20481.087%2023.5121%20479.008%2021.2005L465.443%206.12139C464.609%203.69152%20462.191%202.06633%20459.531%202.35055C458.246%202.48751%20457.125%203.06181%20456.259%203.88935L456.021%204.06459L439.305%2019.1017C436.993%2021.1812%20436.805%2024.7401%20438.885%2027.0518C440.963%2029.3624%20444.523%2029.5515%20446.835%2027.472L454.902%2020.2151C454.006%2041.2208%20444.713%2061.286%20428.897%2075.5135C414.699%2088.2866%20396.374%2095.4591%20377.299%2095.7084C374.19%2095.7489%20371.703%2098.3016%20371.744%20101.411C371.762%20102.831%20372.305%20104.122%20373.186%20105.101C374.233%20106.265%20375.758%20106.988%20377.446%20106.966C399.251%20106.681%20420.197%2098.4839%20436.427%2083.8837C453.783%2068.2705%20464.265%2046.5074%20465.98%2023.5529Z'%20fill='%2300DF82'/%3e%3c/svg%3e",d2="data:image/svg+xml,%3csvg%20viewBox='0%200%20261%20168'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M159.577%2087.8998L157.519%2085.7171L74.5813%2011.9038C71.7573%209.07851%2069.08%207.93715%2066.4506%207.94647V7.91849H15.752V7.9278C18.3226%207.97313%2020.944%209.14517%2023.7%2011.9038L99.5146%2087.7158L99.3293%2087.8998C115.028%20107.196%20113.899%20135.629%2095.924%20153.605C86.3333%20163.194%2073.7613%20167.99%2061.1906%20167.993H119.5V167.902C132.709%20168.417%20146.088%20163.688%20156.172%20153.605C174.145%20135.629%20175.276%20107.196%20159.577%2087.8998Z'%20fill='%232CC295'/%3e%3cpath%20d='M95.924%20153.605C113.899%20135.629%20115.028%20107.196%2099.3293%2087.8998L99.5146%2087.7158L23.7%2011.9038C20.944%209.14517%2018.3226%207.97313%2015.7519%207.9278C12.3666%207.86513%209.06397%209.76915%205.64263%2012.6265C3.61197%2014.3251%20-3.87605%2021.8731%202.55728%2033.7171L30.4773%2080.5331C29.0853%2081.6505%2027.736%2082.8372%2026.4453%2084.1265C7.25997%20103.31%207.25997%20134.417%2026.4453%20153.605C35.592%20162.752%2047.452%20167.485%2059.4346%20167.91C60.0173%20167.929%2060.5973%20167.993%2061.1786%20167.993H61.1906C73.7613%20167.99%2086.3333%20163.194%2095.924%20153.605Z'%20fill='%2317876E'/%3e%3cpath%20d='M141.013%2082.2238L110.311%2082.2598L97.3047%2069.6851H126.402L141.013%2082.2238Z'%20fill='%23042222'/%3e%3cpath%20d='M157.427%20138.304C157.427%20143.74%20153.023%20148.144%20147.587%20148.144H135.412C129.976%20148.144%20125.573%20143.74%20125.573%20138.304C125.573%20132.869%20129.976%20128.464%20135.412%20128.464H147.587C153.023%20128.464%20157.427%20132.869%20157.427%20138.304Z'%20fill='%2317876E'/%3e%3cpath%20d='M212.729%2011.6959C204.793%2011.6959%20198.246%2015.1065%20193.275%2021.8372C183.105%2035.6025%20180.774%2062.0291%20187.735%2084.6811C195.93%20111.352%20175.846%20121.108%20162.554%20127.564C155.113%20131.178%20148.085%20134.592%20147.565%20139.081C147.215%20142.082%20148.147%20143.52%20148.878%20144.34C151.03%20146.757%20155.851%20148.144%20162.106%20148.144H162.111C182.382%20148.144%20214.006%20134.236%20232.691%20108.457C249.153%2085.7412%20253.822%2056.9945%20244.59%2035.2225C238.974%2021.9798%20229.231%2013.7425%20217.154%2012.0185C215.639%2011.8052%20214.151%2011.6959%20212.729%2011.6959ZM162.111%20159.843H162.103C152.235%20159.843%20144.638%20157.17%20140.142%20152.12C136.745%20148.305%20135.294%20143.33%20135.945%20137.73C137.209%20126.872%20147.497%20121.876%20157.443%20117.044C172.549%20109.705%20181.553%20104.384%20176.554%2088.1158C168.461%2061.7812%20171.469%2031.6678%20183.867%2014.8838C192.274%203.50381%20204.545%20-1.60416%20218.803%200.441177C234.862%202.72784%20248.186%2013.7425%20255.358%2030.6545C266.159%2056.1252%20260.979%2089.3558%20242.163%20115.319C220.978%20144.548%20185.858%20159.843%20162.111%20159.843Z'%20fill='%2306302C'/%3e%3c/svg%3e";window.addEventListener("load",u2);function u2(){var u;e2.init(),e2.refresh(),(u=document.getElementById("app"))==null||u.append(...b2())}function f2(){const u=document.createElement("div");return u.classList.add("h-14","w-full","bg-primary-700","flex","items-center","justify-center","font-display","z-50","overflow-hidden"),u.appendChild(m2()),u}function m2(){const u=new Image;return u.src=o2,u.classList.add("h-14"),u}function p2(){const u=document.createElement("main");return u.classList.add("min-h-full","-mt-14","pt-14","font-display"),u.innerHTML=`
    <section class="md:px-20 -z-10 h-dvh -mt-14 w-full flex flex-col items-center justify-center bg-primary-700 sticky top-0 text-primary-300">
      <div class="max-w-lg flex flex-col items-center justify-center text-center">
        <div class="text-4xl font-extrabold">
          <p>Radiografia antiga?</p>
          <p>Não guarde como <strong class="text-primary-100 italic">troféu</strong>!</p>
        </div>
        <div class="mt-4 font-light">
          <p>Campanha de Conscientização sobre o Descarte Correto de Raios-X e Exames por Imagem</p>
        </div>
      </div>
  </section>
<section class="z-10 min-h-full relative bg-primary-400 text-primary-100 flex pt-10  items-center justify-center">
  <img class="absolute top-2 sm:top-4 -translate-y-full" src="${s2}">
      <div class="sm:mr-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img class="h-20 hidden sm:block" src="${d2}" alt="whistle">
      </div>
      <div class="sm:max-w-md mb-10 px-10 md:px-0" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <p class="font-bold text-3xl mb-4">Por que o descarte certo é o Jogo da Vida?</p>
        <p class="font-light ">Exames por imagem, como raios-X, podem parecer inofensivos à primeira vista, mas contêm metais pesados que, se descartados inadequadamente no lixo comum, representam sérios riscos ao meio ambiente. Esses materiais podem contaminar o solo e a água, afetando a saúde de toda a cadeia ecológica. Por isso, é essencial dar o destino correto a esse tipo de resíduo.</p>
      </div>
    </section>
    <section class="min-h-full overflow-x-hidden relative bg-primary-400 text-primary-100 flex flex-col items-center justify-center py-5">
      <div class="flex flex-col mb-10" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <p class="text-3xl md:text-4xl font-bold">Esquema tático</p>
        <img class="h-14 md:h-16 translate-x-1/4 -translate-y-1/3" src="${l2}">
      </div>
      <div class="w-full px-4 md:pl-20">
        <ul class="mb-10">
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center mb-5">
            <p class="text-6xl font-extrabold text-primary-200 w-20">1</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Revise seu time de exames</p>
              <p class="font-light md:font-thin">Tá guardando exame desde o século passado? Hora de passar o pente fino e separar o que não precisa mais. Nem todo exame precisa continuar no time titular!</p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center mb-5">
            <p class="text-6xl font-extrabold text-primary-200 w-20">2</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Procure o ponto de coleta certo</p>
              <p class="font-light md:font-thin">Não vá dar aquele passe errado jogando no lixo comum! Procure hospitais, clínicas de radiologia ou farmácias que aceitam exames para descarte. Eles têm um time treinado para lidar com esse tipo de coisa.</p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-anchor-placement="center-bottom" class="flex items-center">
            <p class="text-6xl font-extrabold text-primary-200 w-20">3</p>
            <div class="self-end max-w-md text-start ml-2">
              <p class="font-bold text-lg">Faça o descarte e comemore!</p>
              <p class="font-light md:font-thin">Leva seus exames ao ponto de coleta e pode comemorar como se tivesse acabado de ganhar a Copa! Agora sim você está ajudando o planeta e jogando limpo.</p>
            </div>
          </li>
        </ul>
        </div>
        <img class="md:absolute h-52 md:bottom-10 md:right-0 self-end" src="${c2}">
    </section>
    <section class=" min-h-screen relative -z-10 bg-primary-200 text-primary-700 flex flex-col py-10 md:py-0 md:flex-row justify-center items-center">
     <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="max-w-xl px-4 sm:pr-32 mb-20">
      <p class="font-extrabold text-4xl mb-10 text-center md:text-left">O Planeta é seu <strong class="text-primary-400">técnico</strong></p>
      <p>Agora que você já sabe o esquema tático do descarte correto, tá na hora de entrar em campo e fazer sua parte. Descartar radiografias antigas no lugar certo não só te deixa livre de bagunça, como ainda garante que o meio ambiente continue jogando no seu time.</p>
     </div>
     <img class="h-64 md:self-end -mb-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="${r2}">
    </section>
  `,u.append(v2()),u}function v2(){const u=document.createElement("footer");return u.classList.add("min-h-60","bg-primary-700","w-full","flex","items-center","justify-center","text-primary-100","font-display","z-50"),u.innerHTML=`
  <div class="md:max-w-2xl flex items-center p-2"> 
    <img class="h-10 sm:h-14 m-5" src="${o2}" alt="Go recycle logo">
      <div>
        <p class="font-thin text-xl">
          Este site foi desenvolvido para alertar e conscientizar as pessoas a <strong class="font-regular italic">pensarem verde</strong>.
        </p>
        <p class="font-thin text-xs mt-4">
          Desenvolvido para fins academicos por alunos do curso de Engenharia de Software da Universidade Positivo.
        </p>
      </div>
    </div>
  `,u}function b2(){const u=f2(),I=p2();return[u,I]}
