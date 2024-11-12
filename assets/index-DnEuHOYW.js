(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function h(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(o){if(o.ep)return;o.ep=!0;const t=h(o);fetch(o.href,t)}})();var ne=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ae(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var te={exports:{}};(function(u,W){(function(h,s){u.exports=s()})(ne,function(){return function(h){function s(t){if(o[t])return o[t].exports;var c=o[t]={exports:{},id:t,loaded:!1};return h[t].call(c.exports,c,c.exports,s),c.loaded=!0,c.exports}var o={};return s.m=h,s.c=o,s.p="dist/",s(0)}([function(h,s,o){function t(a){return a&&a.__esModule?a:{default:a}}var c=Object.assign||function(a){for(var k=1;k<arguments.length;k++){var _=arguments[k];for(var D in _)Object.prototype.hasOwnProperty.call(_,D)&&(a[D]=_[D])}return a},v=o(1),x=(t(v),o(6)),r=t(x),p=o(7),i=t(p),l=o(8),d=t(l),b=o(9),j=t(b),O=o(10),V=t(O),R=o(11),G=t(R),K=o(14),B=t(K),M=[],Y=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},S=function(){var a=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(a&&(Y=!0),Y)return M=(0,G.default)(M,g),(0,V.default)(M,g.once),M},T=function(){M=(0,B.default)(),S()},n=function(){M.forEach(function(a,k){a.node.removeAttribute("data-aos"),a.node.removeAttribute("data-aos-easing"),a.node.removeAttribute("data-aos-duration"),a.node.removeAttribute("data-aos-delay")})},e=function(a){return a===!0||a==="mobile"&&j.default.mobile()||a==="phone"&&j.default.phone()||a==="tablet"&&j.default.tablet()||typeof a=="function"&&a()===!0},f=function(a){g=c(g,a),M=(0,B.default)();var k=document.all&&!window.atob;return e(g.disable)||k?n():(g.disableMutationObserver||d.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?S(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){S(!0)}):document.addEventListener(g.startEvent,function(){S(!0)}),window.addEventListener("resize",(0,i.default)(S,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,i.default)(S,g.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)(function(){(0,V.default)(M,g.once)},g.throttleDelay)),g.disableMutationObserver||d.default.ready("[data-aos]",T),M)};h.exports={init:f,refresh:S,refreshHard:T}},function(h,s){},,,,,function(h,s){(function(o){function t(e,f,a){function k(m){var L=z,$=P;return z=P=void 0,H=m,C=e.apply($,L)}function _(m){return H=m,w=setTimeout(Z,f),F?k(m):C}function D(m){var L=m-E,$=m-H,Q=f-L;return A?T(Q,N-$):Q}function I(m){var L=m-E,$=m-H;return E===void 0||L>=f||L<0||A&&$>=N}function Z(){var m=n();return I(m)?J(m):void(w=setTimeout(Z,D(m)))}function J(m){return w=void 0,y&&z?k(m):(z=P=void 0,C)}function U(){w!==void 0&&clearTimeout(w),H=0,z=E=P=w=void 0}function X(){return w===void 0?C:J(n())}function q(){var m=n(),L=I(m);if(z=arguments,P=this,E=m,L){if(w===void 0)return _(E);if(A)return w=setTimeout(Z,f),k(E)}return w===void 0&&(w=setTimeout(Z,f)),C}var z,P,N,C,w,E,H=0,F=!1,A=!1,y=!0;if(typeof e!="function")throw new TypeError(l);return f=p(f)||0,v(a)&&(F=!!a.leading,A="maxWait"in a,N=A?S(p(a.maxWait)||0,f):N,y="trailing"in a?!!a.trailing:y),q.cancel=U,q.flush=X,q}function c(e,f,a){var k=!0,_=!0;if(typeof e!="function")throw new TypeError(l);return v(a)&&(k="leading"in a?!!a.leading:k,_="trailing"in a?!!a.trailing:_),t(e,f,{leading:k,maxWait:f,trailing:_})}function v(e){var f=typeof e>"u"?"undefined":i(e);return!!e&&(f=="object"||f=="function")}function x(e){return!!e&&(typeof e>"u"?"undefined":i(e))=="object"}function r(e){return(typeof e>"u"?"undefined":i(e))=="symbol"||x(e)&&g.call(e)==b}function p(e){if(typeof e=="number")return e;if(r(e))return d;if(v(e)){var f=typeof e.valueOf=="function"?e.valueOf():e;e=v(f)?f+"":f}if(typeof e!="string")return e===0?e:+e;e=e.replace(j,"");var a=V.test(e);return a||R.test(e)?G(e.slice(2),a?2:8):O.test(e)?d:+e}var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,b="[object Symbol]",j=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,R=/^0o[0-7]+$/i,G=parseInt,K=(typeof o>"u"?"undefined":i(o))=="object"&&o&&o.Object===Object&&o,B=(typeof self>"u"?"undefined":i(self))=="object"&&self&&self.Object===Object&&self,M=K||B||Function("return this")(),Y=Object.prototype,g=Y.toString,S=Math.max,T=Math.min,n=function(){return M.Date.now()};h.exports=c}).call(s,function(){return this}())},function(h,s){(function(o){function t(n,e,f){function a(y){var m=q,L=z;return q=z=void 0,E=y,N=n.apply(L,m)}function k(y){return E=y,C=setTimeout(I,e),H?a(y):N}function _(y){var m=y-w,L=y-E,$=e-m;return F?S($,P-L):$}function D(y){var m=y-w,L=y-E;return w===void 0||m>=e||m<0||F&&L>=P}function I(){var y=T();return D(y)?Z(y):void(C=setTimeout(I,_(y)))}function Z(y){return C=void 0,A&&q?a(y):(q=z=void 0,N)}function J(){C!==void 0&&clearTimeout(C),E=0,q=w=z=C=void 0}function U(){return C===void 0?N:Z(T())}function X(){var y=T(),m=D(y);if(q=arguments,z=this,w=y,m){if(C===void 0)return k(w);if(F)return C=setTimeout(I,e),a(w)}return C===void 0&&(C=setTimeout(I,e)),N}var q,z,P,N,C,w,E=0,H=!1,F=!1,A=!0;if(typeof n!="function")throw new TypeError(i);return e=r(e)||0,c(f)&&(H=!!f.leading,F="maxWait"in f,P=F?g(r(f.maxWait)||0,e):P,A="trailing"in f?!!f.trailing:A),X.cancel=J,X.flush=U,X}function c(n){var e=typeof n>"u"?"undefined":p(n);return!!n&&(e=="object"||e=="function")}function v(n){return!!n&&(typeof n>"u"?"undefined":p(n))=="object"}function x(n){return(typeof n>"u"?"undefined":p(n))=="symbol"||v(n)&&Y.call(n)==d}function r(n){if(typeof n=="number")return n;if(x(n))return l;if(c(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=c(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=n.replace(b,"");var f=O.test(n);return f||V.test(n)?R(n.slice(2),f?2:8):j.test(n)?l:+n}var p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i="Expected a function",l=NaN,d="[object Symbol]",b=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,V=/^0o[0-7]+$/i,R=parseInt,G=(typeof o>"u"?"undefined":p(o))=="object"&&o&&o.Object===Object&&o,K=(typeof self>"u"?"undefined":p(self))=="object"&&self&&self.Object===Object&&self,B=G||K||Function("return this")(),M=Object.prototype,Y=M.toString,g=Math.max,S=Math.min,T=function(){return B.Date.now()};h.exports=t}).call(s,function(){return this}())},function(h,s){function o(p){var i=void 0,l=void 0;for(i=0;i<p.length;i+=1)if(l=p[i],l.dataset&&l.dataset.aos||l.children&&o(l.children))return!0;return!1}function t(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function c(){return!!t()}function v(p,i){var l=window.document,d=t(),b=new d(x);r=i,b.observe(l.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function x(p){p&&p.forEach(function(i){var l=Array.prototype.slice.call(i.addedNodes),d=Array.prototype.slice.call(i.removedNodes),b=l.concat(d);if(o(b))return r()})}Object.defineProperty(s,"__esModule",{value:!0});var r=function(){};s.default={isSupported:c,ready:v}},function(h,s){function o(l,d){if(!(l instanceof d))throw new TypeError("Cannot call a class as a function")}function t(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(s,"__esModule",{value:!0});var c=function(){function l(d,b){for(var j=0;j<b.length;j++){var O=b[j];O.enumerable=O.enumerable||!1,O.configurable=!0,"value"in O&&(O.writable=!0),Object.defineProperty(d,O.key,O)}}return function(d,b,j){return b&&l(d.prototype,b),j&&l(d,j),d}}(),v=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,x=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,i=function(){function l(){o(this,l)}return c(l,[{key:"phone",value:function(){var d=t();return!(!v.test(d)&&!x.test(d.substr(0,4)))}},{key:"mobile",value:function(){var d=t();return!(!r.test(d)&&!p.test(d.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),l}();s.default=new i},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(c,v,x){var r=c.node.getAttribute("data-aos-once");v>c.position?c.node.classList.add("aos-animate"):typeof r<"u"&&(r==="false"||!x&&r!=="true")&&c.node.classList.remove("aos-animate")},t=function(c,v){var x=window.pageYOffset,r=window.innerHeight;c.forEach(function(p,i){o(p,r+x,v)})};s.default=t},function(h,s,o){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(12),v=t(c),x=function(r,p){return r.forEach(function(i,l){i.node.classList.add("aos-init"),i.position=(0,v.default)(i.node,p.offset)}),r};s.default=x},function(h,s,o){function t(r){return r&&r.__esModule?r:{default:r}}Object.defineProperty(s,"__esModule",{value:!0});var c=o(13),v=t(c),x=function(r,p){var i=0,l=0,d=window.innerHeight,b={offset:r.getAttribute("data-aos-offset"),anchor:r.getAttribute("data-aos-anchor"),anchorPlacement:r.getAttribute("data-aos-anchor-placement")};switch(b.offset&&!isNaN(b.offset)&&(l=parseInt(b.offset)),b.anchor&&document.querySelectorAll(b.anchor)&&(r=document.querySelectorAll(b.anchor)[0]),i=(0,v.default)(r).top,b.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=r.offsetHeight/2;break;case"bottom-bottom":i+=r.offsetHeight;break;case"top-center":i+=d/2;break;case"bottom-center":i+=d/2+r.offsetHeight;break;case"center-center":i+=d/2+r.offsetHeight/2;break;case"top-top":i+=d;break;case"bottom-top":i+=r.offsetHeight+d;break;case"center-top":i+=r.offsetHeight/2+d}return b.anchorPlacement||b.offset||isNaN(p)||(l=p),i+l};s.default=x},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){for(var c=0,v=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)c+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),v+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:v,left:c}};s.default=o},function(h,s){Object.defineProperty(s,"__esModule",{value:!0});var o=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,function(c){return{node:c}})};s.default=o}])})})(te);var re=te.exports;const ee=ae(re),oe="data:image/svg+xml,%3csvg%20viewBox='0%200%20126%2059'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M119.816%2044.2133H107.982V47L104.656%2044.2133L101.017%2041.1647L107.982%2035.3298V38.1163H118.501C121.647%2038.1163%20123.608%2034.7034%20122.024%2031.9849L124.451%2036.111C126.559%2039.6952%20123.974%2044.2133%20119.816%2044.2133Z'%20fill='%2300DF82'/%3e%3cpath%20d='M88.7504%2036.1095L94.7502%2025.9093L92.3483%2024.4967L96.4367%2023.0422L100.91%2021.451L102.407%2030.4135L100.006%2029.0006L94.6727%2038.0667C93.0774%2040.7789%2095.0248%2044.1998%2098.1714%2044.2121H93.3846C89.2263%2044.2121%2086.6422%2039.6937%2088.7504%2036.1095Z'%20fill='%2300DF82'/%3e%3cpath%20d='M119.615%2022.5017L118.878%2026.7779L118.073%2031.4567L109.527%2028.3693L111.935%2026.9682L106.647%2017.8761C105.065%2015.1561%20101.129%2015.1766%2099.5757%2017.9132L101.922%2013.7411C103.96%2010.1166%20109.165%2010.0788%20111.256%2013.6734L117.206%2023.9027L119.615%2022.5017Z'%20fill='%2300DF82'/%3e%3cpath%20d='M20.4658%2047.48C17.8418%2047.48%2015.4258%2047.064%2013.2178%2046.232C11.0418%2045.368%209.13781%2044.168%207.50581%2042.632C5.87381%2041.064%204.60981%2039.224%203.71381%2037.112C2.81781%2035%202.36981%2032.696%202.36981%2030.2C2.36981%2027.704%202.81781%2025.4%203.71381%2023.288C4.60981%2021.176%205.87381%2019.352%207.50581%2017.816C9.16981%2016.248%2011.1058%2015.048%2013.3138%2014.216C15.5218%2013.352%2017.9378%2012.92%2020.5618%2012.92C23.4098%2012.92%2025.9698%2013.384%2028.2418%2014.312C30.5458%2015.24%2032.4818%2016.6%2034.0498%2018.392L30.1138%2022.232C28.8018%2020.92%2027.3778%2019.96%2025.8418%2019.352C24.3378%2018.712%2022.6738%2018.392%2020.8498%2018.392C19.0898%2018.392%2017.4578%2018.68%2015.9538%2019.256C14.4498%2019.832%2013.1538%2020.648%2012.0658%2021.704C10.9778%2022.76%2010.1298%2024.008%209.52181%2025.448C8.94581%2026.888%208.65781%2028.472%208.65781%2030.2C8.65781%2031.896%208.94581%2033.464%209.52181%2034.904C10.1298%2036.344%2010.9778%2037.608%2012.0658%2038.696C13.1538%2039.752%2014.4338%2040.568%2015.9058%2041.144C17.3778%2041.72%2019.0098%2042.008%2020.8018%2042.008C22.4658%2042.008%2024.0658%2041.752%2025.6018%2041.24C27.1698%2040.696%2028.6578%2039.8%2030.0658%2038.552L33.6178%2043.208C31.8578%2044.616%2029.8098%2045.688%2027.4738%2046.424C25.1698%2047.128%2022.8338%2047.48%2020.4658%2047.48ZM27.7138%2042.392V29.816H33.6178V43.208L27.7138%2042.392ZM57.5919%2047.48C54.9679%2047.48%2052.5519%2047.048%2050.3439%2046.184C48.1359%2045.32%2046.2159%2044.12%2044.5839%2042.584C42.9519%2041.016%2041.6879%2039.192%2040.7919%2037.112C39.8959%2035%2039.4479%2032.696%2039.4479%2030.2C39.4479%2027.704%2039.8959%2025.416%2040.7919%2023.336C41.6879%2021.224%2042.9519%2019.4%2044.5839%2017.864C46.2159%2016.296%2048.1359%2015.08%2050.3439%2014.216C52.5519%2013.352%2054.9519%2012.92%2057.5439%2012.92C60.1679%2012.92%2062.5679%2013.352%2064.7439%2014.216C66.9519%2015.08%2068.8719%2016.296%2070.5039%2017.864C72.1359%2019.4%2073.3999%2021.224%2074.2959%2023.336C75.1919%2025.416%2075.6399%2027.704%2075.6399%2030.2C75.6399%2032.696%2075.1919%2035%2074.2959%2037.112C73.3999%2039.224%2072.1359%2041.048%2070.5039%2042.584C68.8719%2044.12%2066.9519%2045.32%2064.7439%2046.184C62.5679%2047.048%2060.1839%2047.48%2057.5919%2047.48ZM57.5439%2042.008C59.2399%2042.008%2060.8079%2041.72%2062.2479%2041.144C63.6879%2040.568%2064.9359%2039.752%2065.9919%2038.696C67.0479%2037.608%2067.8639%2036.36%2068.4399%2034.952C69.0479%2033.512%2069.3519%2031.928%2069.3519%2030.2C69.3519%2028.472%2069.0479%2026.904%2068.4399%2025.496C67.8639%2024.056%2067.0479%2022.808%2065.9919%2021.752C64.9359%2020.664%2063.6879%2019.832%2062.2479%2019.256C60.8079%2018.68%2059.2399%2018.392%2057.5439%2018.392C55.8479%2018.392%2054.2799%2018.68%2052.8399%2019.256C51.4319%2019.832%2050.1839%2020.664%2049.0959%2021.752C48.0399%2022.808%2047.2079%2024.056%2046.5999%2025.496C46.0239%2026.904%2045.7359%2028.472%2045.7359%2030.2C45.7359%2031.896%2046.0239%2033.464%2046.5999%2034.904C47.2079%2036.344%2048.0399%2037.608%2049.0959%2038.696C50.1519%2039.752%2051.3999%2040.568%2052.8399%2041.144C54.2799%2041.72%2055.8479%2042.008%2057.5439%2042.008Z'%20fill='%23F1F7F7'/%3e%3c/svg%3e";window.addEventListener("load",ie);function ie(){var u;ee.init(),ee.refresh(),(u=document.getElementById("app"))==null||u.append(...ue())}function se(){const u=document.createElement("div");return u.classList.add("h-14","w-full","bg-primary-700","flex","items-center","justify-center","font-display","z-50","overflow-hidden"),u.appendChild(ce()),u}function ce(){const u=new Image;return u.src=oe,u.classList.add("h-14"),u}function de(){const u=document.createElement("main");return u.classList.add("min-h-full","-mt-14","pt-14","font-display"),u.innerHTML=`
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
  <img class="absolute top-2 sm:top-4 -translate-y-full" src="/grass.svg">
      <div class="sm:mr-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <img class="h-20 hidden sm:block" src="/whistle.svg" alt="whistle">
      </div>
      <div class="sm:max-w-md mb-10 px-10 md:px-0" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <p class="font-bold text-3xl mb-4">Por que o descarte certo é o Jogo da Vida?</p>
        <p class="font-light ">Exames por imagem, como raios-X, podem parecer inofensivos à primeira vista, mas contêm metais pesados que, se descartados inadequadamente no lixo comum, representam sérios riscos ao meio ambiente. Esses materiais podem contaminar o solo e a água, afetando a saúde de toda a cadeia ecológica. Por isso, é essencial dar o destino correto a esse tipo de resíduo.</p>
      </div>
    </section>
    <section class="min-h-full overflow-x-hidden relative bg-primary-400 text-primary-100 flex flex-col items-center justify-center py-5">
      <div class="flex flex-col mb-10" data-aos="fade-right" data-aos-anchor-placement="center-bottom">
        <p class="text-3xl md:text-4xl font-bold">Esquema tático</p>
        <img class="h-14 md:h-16 translate-x-1/4 -translate-y-1/3" src="/tactics.svg">
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
        <img class="md:absolute h-52 md:bottom-10 md:right-0 self-end" src="/tab.svg">
    </section>
    <section class=" min-h-screen relative -z-10 bg-primary-200 text-primary-700 flex flex-col py-10 md:py-0 md:flex-row justify-center items-center">
     <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" class="max-w-xl px-4 sm:pr-32 mb-20">
      <p class="font-extrabold text-4xl mb-10 text-center md:text-left">O Planeta é seu <strong class="text-primary-400">técnico</strong></p>
      <p>Agora que você já sabe o esquema tático do descarte correto, tá na hora de entrar em campo e fazer sua parte. Descartar radiografias antigas no lugar certo não só te deixa livre de bagunça, como ainda garante que o meio ambiente continue jogando no seu time.</p>
     </div>
     <img class="h-64 md:self-end -mb-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom" src="/goal.svg">
    </section>
  `,u.append(le()),u}function le(){const u=document.createElement("footer");return u.classList.add("min-h-60","bg-primary-700","w-full","flex","items-center","justify-center","text-primary-100","font-display","z-50"),u.innerHTML=`
  <div class="md:max-w-2xl flex items-center p-2"> 
    <img class="h-10 sm:h-14 m-5" src="${oe}" alt="Go recycle logo">
      <div>
        <p class="font-thin text-xl">
          Este site foi desenvolvido para alertar e conscientizar as pessoas a <strong class="font-regular italic">pensarem verde</strong>.
        </p>
        <p class="font-thin text-xs mt-4">
          Desenvolvido para fins academicos por alunos do curso de Engenharia de Software da Universidade Positivo.
        </p>
      </div>
    </div>
  `,u}function ue(){const u=se(),W=de();return[u,W]}
