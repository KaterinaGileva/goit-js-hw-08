!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return d.Date.now()};function b(t,n,e){var o,r,u,f,a,c,l=0,d=!1,s=!1,b=!0;if("function"!=typeof t)throw new TypeError(i);function j(n){var e=o,i=r;return o=r=void 0,l=n,f=t.apply(i,e)}function h(t){return l=t,a=setTimeout(T,n),d?j(t):f}function w(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-l>=u}function T(){var t=y();if(w(t))return O(t);a=setTimeout(T,function(t){var e=n-(t-c);return s?p(e,u-(t-l)):e}(t))}function O(t){return a=void 0,b&&o?j(t):(o=r=void 0,f)}function x(){var t=y(),e=w(t);if(o=arguments,r=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(T,n),j(c)}return void 0===a&&(a=setTimeout(T,n)),f}return n=m(n)||0,g(e)&&(d=!!e.leading,u=(s="maxWait"in e)?v(m(e.maxWait)||0,n):u,b="trailing"in e?!!e.trailing:b),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,o=c=r=a=void 0},x.flush=function(){return void 0===a?f:O(y())},x}function g(t){var i=void 0===t?"undefined":n(e)(t);return!!t&&("object"==i||"function"==i)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(e)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var i="function"==typeof t.valueOf?t.valueOf():t;t=g(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var c=u.test(t);return c||f.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}(function(t,n,e){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError(i);g(e)&&(o="leading"in e?!!e.leading:o,r="trailing"in e?!!e.trailing:r),b(t,n,{leading:o,maxWait:n,trailing:r})})(onForm,500)}();
//# sourceMappingURL=03-feedback.873145b7.js.map
