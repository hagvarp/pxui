(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){(function(e,n){var r;!function(){var a="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this||{},i=a._,o=Array.prototype,u=Object.prototype,c="undefined"!==typeof Symbol?Symbol.prototype:null,l=o.push,s=o.slice,f=u.toString,p=u.hasOwnProperty,h=Array.isArray,d=Object.keys,v=Object.create,m=function(){},g=function e(t){return t instanceof e?t:this instanceof e?void(this._wrapped=t):new e(t)};t.nodeType?a._=g:(!n.nodeType&&n.exports&&(t=n.exports=g),t._=g),g.VERSION="1.9.1";var b,y=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,a){return e.call(t,n,r,a)};case 4:return function(n,r,a,i){return e.call(t,n,r,a,i)}}return function(){return e.apply(t,arguments)}},O=function(e,t,n){return g.iteratee!==b?g.iteratee(e,t):null==e?g.identity:g.isFunction(e)?y(e,t,n):g.isObject(e)&&!g.isArray(e)?g.matcher(e):g.property(e)};g.iteratee=b=function(e,t){return O(e,t,1/0)};var j=function(e,t){return t=null==t?e.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),r=Array(n),a=0;a<n;a++)r[a]=arguments[a+t];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var i=Array(t+1);for(a=0;a<t;a++)i[a]=arguments[a];return i[t]=r,e.apply(this,i)}},E=function(e){if(!g.isObject(e))return{};if(v)return v(e);m.prototype=e;var t=new m;return m.prototype=null,t},w=function(e){return function(t){return null==t?void 0:t[e]}},x=function(e,t){return null!=e&&p.call(e,t)},A=function(e,t){for(var n=t.length,r=0;r<n;r++){if(null==e)return;e=e[t[r]]}return n?e:void 0},S=Math.pow(2,53)-1,k=w("length"),N=function(e){var t=k(e);return"number"==typeof t&&t>=0&&t<=S};g.each=g.forEach=function(e,t,n){var r,a;if(t=y(t,n),N(e))for(r=0,a=e.length;r<a;r++)t(e[r],r,e);else{var i=g.keys(e);for(r=0,a=i.length;r<a;r++)t(e[i[r]],i[r],e)}return e},g.map=g.collect=function(e,t,n){t=O(t,n);for(var r=!N(e)&&g.keys(e),a=(r||e).length,i=Array(a),o=0;o<a;o++){var u=r?r[o]:o;i[o]=t(e[u],u,e)}return i};var C=function(e){return function(t,n,r,a){var i=arguments.length>=3;return function(t,n,r,a){var i=!N(t)&&g.keys(t),o=(i||t).length,u=e>0?0:o-1;for(a||(r=t[i?i[u]:u],u+=e);u>=0&&u<o;u+=e){var c=i?i[u]:u;r=n(r,t[c],c,t)}return r}(t,y(n,a,4),r,i)}};g.reduce=g.foldl=g.inject=C(1),g.reduceRight=g.foldr=C(-1),g.find=g.detect=function(e,t,n){var r=(N(e)?g.findIndex:g.findKey)(e,t,n);if(void 0!==r&&-1!==r)return e[r]},g.filter=g.select=function(e,t,n){var r=[];return t=O(t,n),g.each(e,function(e,n,a){t(e,n,a)&&r.push(e)}),r},g.reject=function(e,t,n){return g.filter(e,g.negate(O(t)),n)},g.every=g.all=function(e,t,n){t=O(t,n);for(var r=!N(e)&&g.keys(e),a=(r||e).length,i=0;i<a;i++){var o=r?r[i]:i;if(!t(e[o],o,e))return!1}return!0},g.some=g.any=function(e,t,n){t=O(t,n);for(var r=!N(e)&&g.keys(e),a=(r||e).length,i=0;i<a;i++){var o=r?r[i]:i;if(t(e[o],o,e))return!0}return!1},g.contains=g.includes=g.include=function(e,t,n,r){return N(e)||(e=g.values(e)),("number"!=typeof n||r)&&(n=0),g.indexOf(e,t,n)>=0},g.invoke=j(function(e,t,n){var r,a;return g.isFunction(t)?a=t:g.isArray(t)&&(r=t.slice(0,-1),t=t[t.length-1]),g.map(e,function(e){var i=a;if(!i){if(r&&r.length&&(e=A(e,r)),null==e)return;i=e[t]}return null==i?i:i.apply(e,n)})}),g.pluck=function(e,t){return g.map(e,g.property(t))},g.where=function(e,t){return g.filter(e,g.matcher(t))},g.findWhere=function(e,t){return g.find(e,g.matcher(t))},g.max=function(e,t,n){var r,a,i=-1/0,o=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var u=0,c=(e=N(e)?e:g.values(e)).length;u<c;u++)null!=(r=e[u])&&r>i&&(i=r);else t=O(t,n),g.each(e,function(e,n,r){((a=t(e,n,r))>o||a===-1/0&&i===-1/0)&&(i=e,o=a)});return i},g.min=function(e,t,n){var r,a,i=1/0,o=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var u=0,c=(e=N(e)?e:g.values(e)).length;u<c;u++)null!=(r=e[u])&&r<i&&(i=r);else t=O(t,n),g.each(e,function(e,n,r){((a=t(e,n,r))<o||a===1/0&&i===1/0)&&(i=e,o=a)});return i},g.shuffle=function(e){return g.sample(e,1/0)},g.sample=function(e,t,n){if(null==t||n)return N(e)||(e=g.values(e)),e[g.random(e.length-1)];var r=N(e)?g.clone(e):g.values(e),a=k(r);t=Math.max(Math.min(t,a),0);for(var i=a-1,o=0;o<t;o++){var u=g.random(o,i),c=r[o];r[o]=r[u],r[u]=c}return r.slice(0,t)},g.sortBy=function(e,t,n){var r=0;return t=O(t,n),g.pluck(g.map(e,function(e,n,a){return{value:e,index:r++,criteria:t(e,n,a)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index-t.index}),"value")};var T=function(e,t){return function(n,r,a){var i=t?[[],[]]:{};return r=O(r,a),g.each(n,function(t,a){var o=r(t,a,n);e(i,t,o)}),i}};g.groupBy=T(function(e,t,n){x(e,n)?e[n].push(t):e[n]=[t]}),g.indexBy=T(function(e,t,n){e[n]=t}),g.countBy=T(function(e,t,n){x(e,n)?e[n]++:e[n]=1});var B=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;g.toArray=function(e){return e?g.isArray(e)?s.call(e):g.isString(e)?e.match(B):N(e)?g.map(e,g.identity):g.values(e):[]},g.size=function(e){return null==e?0:N(e)?e.length:g.keys(e).length},g.partition=T(function(e,t,n){e[n?0:1].push(t)},!0),g.first=g.head=g.take=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:g.initial(e,e.length-t)},g.initial=function(e,t,n){return s.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},g.last=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:g.rest(e,Math.max(0,e.length-t))},g.rest=g.tail=g.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},g.compact=function(e){return g.filter(e,Boolean)};var _=function e(t,n,r,a){for(var i=(a=a||[]).length,o=0,u=k(t);o<u;o++){var c=t[o];if(N(c)&&(g.isArray(c)||g.isArguments(c)))if(n)for(var l=0,s=c.length;l<s;)a[i++]=c[l++];else e(c,n,r,a),i=a.length;else r||(a[i++]=c)}return a};g.flatten=function(e,t){return _(e,t,!1)},g.without=j(function(e,t){return g.difference(e,t)}),g.uniq=g.unique=function(e,t,n,r){g.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=O(n,r));for(var a=[],i=[],o=0,u=k(e);o<u;o++){var c=e[o],l=n?n(c,o,e):c;t&&!n?(o&&i===l||a.push(c),i=l):n?g.contains(i,l)||(i.push(l),a.push(c)):g.contains(a,c)||a.push(c)}return a},g.union=j(function(e){return g.uniq(_(e,!0,!0))}),g.intersection=function(e){for(var t=[],n=arguments.length,r=0,a=k(e);r<a;r++){var i=e[r];if(!g.contains(t,i)){var o;for(o=1;o<n&&g.contains(arguments[o],i);o++);o===n&&t.push(i)}}return t},g.difference=j(function(e,t){return t=_(t,!0,!0),g.filter(e,function(e){return!g.contains(t,e)})}),g.unzip=function(e){for(var t=e&&g.max(e,k).length||0,n=Array(t),r=0;r<t;r++)n[r]=g.pluck(e,r);return n},g.zip=j(g.unzip),g.object=function(e,t){for(var n={},r=0,a=k(e);r<a;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n};var P=function(e){return function(t,n,r){n=O(n,r);for(var a=k(t),i=e>0?0:a-1;i>=0&&i<a;i+=e)if(n(t[i],i,t))return i;return-1}};g.findIndex=P(1),g.findLastIndex=P(-1);var F=function(e,t,n){return function(r,a,i){var o=0,u=k(r);if("number"==typeof i)e>0?o=i>=0?i:Math.max(i+u,o):u=i>=0?Math.min(i+1,u):i+u+1;else if(n&&i&&u)return r[i=n(r,a)]===a?i:-1;if(a!==a)return(i=t(s.call(r,o,u),g.isNaN))>=0?i+o:-1;for(i=e>0?o:u-1;i>=0&&i<u;i+=e)if(r[i]===a)return i;return-1}};g.indexOf=F(1,g.findIndex,g.sortedIndex=function(e,t,n,r){for(var a=(n=O(n,r,1))(t),i=0,o=k(e);i<o;){var u=Math.floor((i+o)/2);n(e[u])<a?i=u+1:o=u}return i}),g.lastIndexOf=F(-1,g.findLastIndex),g.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var r=Math.max(Math.ceil((t-e)/n),0),a=Array(r),i=0;i<r;i++,e+=n)a[i]=e;return a},g.chunk=function(e,t){if(null==t||t<1)return[];for(var n=[],r=0,a=e.length;r<a;)n.push(s.call(e,r,r+=t));return n};var I=function(e,t,n,r,a){if(!(r instanceof t))return e.apply(n,a);var i=E(e.prototype),o=e.apply(i,a);return g.isObject(o)?o:i};g.bind=j(function(e,t,n){if(!g.isFunction(e))throw new TypeError("Bind must be called on a function");var r=j(function(a){return I(e,r,t,this,n.concat(a))});return r}),(g.partial=j(function(e,t){var n=g.partial.placeholder;return function r(){for(var a=0,i=t.length,o=Array(i),u=0;u<i;u++)o[u]=t[u]===n?arguments[a++]:t[u];for(;a<arguments.length;)o.push(arguments[a++]);return I(e,r,this,this,o)}})).placeholder=g,g.bindAll=j(function(e,t){var n=(t=_(t,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=t[n];e[r]=g.bind(e[r],e)}}),g.memoize=function(e,t){var n=function n(r){var a=n.cache,i=""+(t?t.apply(this,arguments):r);return x(a,i)||(a[i]=e.apply(this,arguments)),a[i]};return n.cache={},n},g.delay=j(function(e,t,n){return setTimeout(function(){return e.apply(null,n)},t)}),g.defer=g.partial(g.delay,g,1),g.throttle=function(e,t,n){var r,a,i,o,u=0;n||(n={});var c=function(){u=!1===n.leading?0:g.now(),r=null,o=e.apply(a,i),r||(a=i=null)},l=function(){var l=g.now();u||!1!==n.leading||(u=l);var s=t-(l-u);return a=this,i=arguments,s<=0||s>t?(r&&(clearTimeout(r),r=null),u=l,o=e.apply(a,i),r||(a=i=null)):r||!1===n.trailing||(r=setTimeout(c,s)),o};return l.cancel=function(){clearTimeout(r),u=0,r=a=i=null},l},g.debounce=function(e,t,n){var r,a,i=function(t,n){r=null,n&&(a=e.apply(t,n))},o=j(function(o){if(r&&clearTimeout(r),n){var u=!r;r=setTimeout(i,t),u&&(a=e.apply(this,o))}else r=g.delay(i,t,this,o);return a});return o.cancel=function(){clearTimeout(r),r=null},o},g.wrap=function(e,t){return g.partial(t,e)},g.negate=function(e){return function(){return!e.apply(this,arguments)}},g.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},g.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},g.once=g.partial(g.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}},2),g.restArguments=j;var L=!{toString:null}.propertyIsEnumerable("toString"),D=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],H=function(e,t){var n=D.length,r=e.constructor,a=g.isFunction(r)&&r.prototype||u,i="constructor";for(x(e,i)&&!g.contains(t,i)&&t.push(i);n--;)(i=D[n])in e&&e[i]!==a[i]&&!g.contains(t,i)&&t.push(i)};g.keys=function(e){if(!g.isObject(e))return[];if(d)return d(e);var t=[];for(var n in e)x(e,n)&&t.push(n);return L&&H(e,t),t},g.allKeys=function(e){if(!g.isObject(e))return[];var t=[];for(var n in e)t.push(n);return L&&H(e,t),t},g.values=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=e[t[a]];return r},g.mapObject=function(e,t,n){t=O(t,n);for(var r=g.keys(e),a=r.length,i={},o=0;o<a;o++){var u=r[o];i[u]=t(e[u],u,e)}return i},g.pairs=function(e){for(var t=g.keys(e),n=t.length,r=Array(n),a=0;a<n;a++)r[a]=[t[a],e[t[a]]];return r},g.invert=function(e){for(var t={},n=g.keys(e),r=0,a=n.length;r<a;r++)t[e[n[r]]]=n[r];return t},g.functions=g.methods=function(e){var t=[];for(var n in e)g.isFunction(e[n])&&t.push(n);return t.sort()};var M=function(e,t){return function(n){var r=arguments.length;if(t&&(n=Object(n)),r<2||null==n)return n;for(var a=1;a<r;a++)for(var i=arguments[a],o=e(i),u=o.length,c=0;c<u;c++){var l=o[c];t&&void 0!==n[l]||(n[l]=i[l])}return n}};g.extend=M(g.allKeys),g.extendOwn=g.assign=M(g.keys),g.findKey=function(e,t,n){t=O(t,n);for(var r,a=g.keys(e),i=0,o=a.length;i<o;i++)if(t(e[r=a[i]],r,e))return r};var V,G,U=function(e,t,n){return t in n};g.pick=j(function(e,t){var n={},r=t[0];if(null==e)return n;g.isFunction(r)?(t.length>1&&(r=y(r,t[1])),t=g.allKeys(e)):(r=U,t=_(t,!1,!1),e=Object(e));for(var a=0,i=t.length;a<i;a++){var o=t[a],u=e[o];r(u,o,e)&&(n[o]=u)}return n}),g.omit=j(function(e,t){var n,r=t[0];return g.isFunction(r)?(r=g.negate(r),t.length>1&&(n=t[1])):(t=g.map(_(t,!1,!1),String),r=function(e,n){return!g.contains(t,n)}),g.pick(e,r,n)}),g.defaults=M(g.allKeys,!0),g.create=function(e,t){var n=E(e);return t&&g.extendOwn(n,t),n},g.clone=function(e){return g.isObject(e)?g.isArray(e)?e.slice():g.extend({},e):e},g.tap=function(e,t){return t(e),e},g.isMatch=function(e,t){var n=g.keys(t),r=n.length;if(null==e)return!r;for(var a=Object(e),i=0;i<r;i++){var o=n[i];if(t[o]!==a[o]||!(o in a))return!1}return!0},V=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return!1;if(e!==e)return t!==t;var a=typeof e;return("function"===a||"object"===a||"object"==typeof t)&&G(e,t,n,r)},G=function(e,t,n,r){e instanceof g&&(e=e._wrapped),t instanceof g&&(t=t._wrapped);var a=f.call(e);if(a!==f.call(t))return!1;switch(a){case"[object RegExp]":case"[object String]":return""+e===""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t;case"[object Symbol]":return c.valueOf.call(e)===c.valueOf.call(t)}var i="[object Array]"===a;if(!i){if("object"!=typeof e||"object"!=typeof t)return!1;var o=e.constructor,u=t.constructor;if(o!==u&&!(g.isFunction(o)&&o instanceof o&&g.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}r=r||[];for(var l=(n=n||[]).length;l--;)if(n[l]===e)return r[l]===t;if(n.push(e),r.push(t),i){if((l=e.length)!==t.length)return!1;for(;l--;)if(!V(e[l],t[l],n,r))return!1}else{var s,p=g.keys(e);if(l=p.length,g.keys(t).length!==l)return!1;for(;l--;)if(s=p[l],!x(t,s)||!V(e[s],t[s],n,r))return!1}return n.pop(),r.pop(),!0},g.isEqual=function(e,t){return V(e,t)},g.isEmpty=function(e){return null==e||(N(e)&&(g.isArray(e)||g.isString(e)||g.isArguments(e))?0===e.length:0===g.keys(e).length)},g.isElement=function(e){return!(!e||1!==e.nodeType)},g.isArray=h||function(e){return"[object Array]"===f.call(e)},g.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},g.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){g["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),g.isArguments(arguments)||(g.isArguments=function(e){return x(e,"callee")});var R=a.document&&a.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof R&&(g.isFunction=function(e){return"function"==typeof e||!1}),g.isFinite=function(e){return!g.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},g.isNaN=function(e){return g.isNumber(e)&&isNaN(e)},g.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===f.call(e)},g.isNull=function(e){return null===e},g.isUndefined=function(e){return void 0===e},g.has=function(e,t){if(!g.isArray(t))return x(e,t);for(var n=t.length,r=0;r<n;r++){var a=t[r];if(null==e||!p.call(e,a))return!1;e=e[a]}return!!n},g.noConflict=function(){return a._=i,this},g.identity=function(e){return e},g.constant=function(e){return function(){return e}},g.noop=function(){},g.property=function(e){return g.isArray(e)?function(t){return A(t,e)}:w(e)},g.propertyOf=function(e){return null==e?function(){}:function(t){return g.isArray(t)?A(e,t):e[t]}},g.matcher=g.matches=function(e){return e=g.extendOwn({},e),function(t){return g.isMatch(t,e)}},g.times=function(e,t,n){var r=Array(Math.max(0,e));t=y(t,n,1);for(var a=0;a<e;a++)r[a]=t(a);return r},g.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},g.now=Date.now||function(){return(new Date).getTime()};var W={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},z=g.invert(W),Q=function(e){var t=function(t){return e[t]},n="(?:"+g.keys(e).join("|")+")",r=RegExp(n),a=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(a,t):e}};g.escape=Q(W),g.unescape=Q(z),g.result=function(e,t,n){g.isArray(t)||(t=[t]);var r=t.length;if(!r)return g.isFunction(n)?n.call(e):n;for(var a=0;a<r;a++){var i=null==e?void 0:e[t[a]];void 0===i&&(i=n,a=r),e=g.isFunction(i)?i.call(e):i}return e};var q=0;g.uniqueId=function(e){var t=++q+"";return e?e+t:t},g.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var J=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},X=/\\|'|\r|\n|\u2028|\u2029/g,Y=function(e){return"\\"+K[e]};g.template=function(e,t,n){!t&&n&&(t=n),t=g.defaults({},t,g.templateSettings);var r,a=RegExp([(t.escape||J).source,(t.interpolate||J).source,(t.evaluate||J).source].join("|")+"|$","g"),i=0,o="__p+='";e.replace(a,function(t,n,r,a,u){return o+=e.slice(i,u).replace(X,Y),i=u+t.length,n?o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(t.variable||"obj","_",o)}catch(l){throw l.source=o,l}var u=function(e){return r.call(this,e,g)},c=t.variable||"obj";return u.source="function("+c+"){\n"+o+"}",u},g.chain=function(e){var t=g(e);return t._chain=!0,t};var $=function(e,t){return e._chain?g(t).chain():t};g.mixin=function(e){return g.each(g.functions(e),function(t){var n=g[t]=e[t];g.prototype[t]=function(){var e=[this._wrapped];return l.apply(e,arguments),$(this,n.apply(g,e))}}),g},g.mixin(g),g.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=o[e];g.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],$(this,n)}}),g.each(["concat","join","slice"],function(e){var t=o[e];g.prototype[e]=function(){return $(this,t.apply(this._wrapped,arguments))}}),g.prototype.value=function(){return this._wrapped},g.prototype.valueOf=g.prototype.toJSON=g.prototype.value,g.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return g}.apply(t,[]))||(n.exports=r)}()}).call(this,n(70),n(123)(e))},131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(9),o=n.n(i),u=(n(99),n(60),n(21)),c=n.n(u),l=n(29),s=n(12),f=n(42),p=n(87),h=n(28),d=n(166),v=n(47),m=n.n(v),g=n(7),b=n(172),y=n(165),O=n(170),j=n(163),E=n(171),w=n(174),x=n(88),A=n.n(x),S=n(133),k=n(173),N=n(167),C=n(169),T=n(89),B=n.n(T),_=n(90),P=n.n(_),F=n(40),I=(n(54),n(43));function L(e){return a.a.createElement(F.a,{className:"selectors",onChange:function(t){e.onChange(t)},closeMenuOnSelect:!0,defaultValue:[I[0]],options:I})}var D=function(){return a.a.createElement("div",{className:"footer"},"Hagstova F\xf8roya | Kv\xedggjart\xfan 1 | Postboks 2068 | FO-165 Argir | Tlf.: +298-352800 | Fax.: +298-352801 | V-tal: 463000 | T-postur:"," ",a.a.createElement("a",{href:"mailto:hagstova@hagstova.fo"},"hagstova@hagstova.fo"))},H=(n(77),n(57)),M=n(175),V=n(79),G=n.n(V),U=function(e){var t=e.type,n=e.color,r=e.height,i=e.width;return a.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},a.a.createElement(G.a,{type:t,color:n,height:r,width:i}))},R=n(80),W=n.n(R),z=16,Q=4,q=16,J=0;function K(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),i=n[0],o=n[1],u=Object(r.useState)(0),f=Object(s.a)(u,2),p=(f[0],f[1]),h=e.statBank.label||"Hagtalsgrunnurin",d=a.a.createElement("i",{class:"fa fa-caret-up",style:{color:e.mainColor},"aria-hidden":"true",alt:"-"}),v=a.a.createElement("i",{class:"fa fa-caret-down",style:{color:e.mainColor},"aria-hidden":"true",alt:"+"}),g=a.a.createElement("i",{class:"fa fa-table",style:{color:e.mainColor},"aria-hidden":"true",alt:"table"}),b=function(e){var t=e.on;return a.a.createElement("span",{style:{marginRight:8}},t?d:v)},y=function(e){var t=e.level,n=void 0===t?0:t,r=e.hasNodes,i=e.isOpen,o=e.label,u=(e.searchTerm,e.openNodes,e.toggleNode),c=(e.matchSearch,e.focused),l=Object(H.a)(e,["level","hasNodes","isOpen","label","searchTerm","openNodes","toggleNode","matchSearch","focused"]);return a.a.createElement(M.a,Object.assign({},l,{style:{paddingLeft:z+Q+n*q,cursor:"pointer",boxShadow:c?"0px 0px 5px 0px #222":"none",position:"relative",fontFamily:"Open Sans,sans-serif",borderStyle:"none"}}),r&&a.a.createElement("div",{onClick:function(e){r&&u&&u(),e.stopPropagation()}},a.a.createElement("div",null,a.a.createElement(b,{on:i}),o)),r?"":a.a.createElement("div",null,g," ",o))};Object(r.useEffect)(function(){o(null),function(e){O.apply(this,arguments)}(e.statBank.value||e.statBank)},[e.statBank]);function O(){return(O=Object(l.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:for(n=e.sent,r=0;r<n.length;r++)n[r].dbid&&(n[r].id=n[r].dbid,n[r].type="l",delete n[r].dbid);return e.next=6,o(n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}var j=function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:if(!(n=e.sent)){e.next=7;break}return Promise.all(n.map(function(){var e=Object(l.a)(c.a.mark(function e(n){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout(Object(l.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"l"!==n.type){e.next=5;break}return e.next=4,j(t+"/"+n.id);case 4:n.nodes=e.sent;case 5:e.next=11;break;case 7:throw e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,7]])})),0);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())),p(J++),e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function E(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(t).then(function(e){n=e.data}).catch(function(e){});case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}return i?a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"headLine",style:{color:e.mainColor}},h),a.a.createElement(W.a,{data:i,debounceTime:500,onClickItem:function(t){if("t"===t.type){var n=(e.statBank.value||e.statBank)+t.id;e.onClickItem(n)}}},function(e){var t=e.search,n=e.items;return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"text",onChange:function(e){return t(e.target.value)},placeholder:"Type and search"}),a.a.createElement(M.a,null,n.map(function(e){e.reset;var t=Object(H.a)(e,["reset"]);return a.a.createElement(y,t)})))})):a.a.createElement("div",null,a.a.createElement(U,{type:"spin",color:"#2d4182",height:"5%",width:"5%"}))}n(71);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){var t=Object(r.useState)(e.options),n=Object(s.a)(t,1)[0],i=Object(r.useState)(e.code),o=Object(s.a)(i,1)[0],u=Object(r.useState)(e.text),c=Object(s.a)(u,1)[0],l=Object(r.useState)(e.elimination),p=Object(s.a)(l,1)[0],h={option:function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{borderBottom:"1px dotted #2d4182",color:t.isSelected?"red":"#2d4182"})}};return a.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4 col-xl-3"},!0===p?a.a.createElement("div",{className:"selectorsHeadLine"},c," "):a.a.createElement("div",{className:"selectorsHeadLine"},c," ",a.a.createElement("i",{className:"fa fa-exclamation-circle",style:{color:"red"}})),a.a.createElement(F.a,{styles:h,onChange:function(t){return function(n){e.callBack(t,n)}}(o),closeMenuOnSelect:!1,defaultValue:[n[0]],isMulti:!0,options:n}))}var $=[],Z=[];function ee(e){var t,n,i=Object(r.useState)(null),o=Object(s.a)(i,2),u=o[0],f=o[1],p=Object(r.useState)(null),h=Object(s.a)(p,2),d=h[0],v=h[1],m=Object(r.useState)(""),g=Object(s.a)(m,2),b=g[0],y=g[1];function O(e,t){var n=[];if(null!=t)for(var r=0;r<t.length;r++)n.push(t[r].value);var a={code:e,selection:{filter:"item",values:n}},i=Z.findIndex(function(e){return e.code===a.code});Z[i]?Z[i]=a:Z.push(a);j({query:Z,response:{px:""}},e)}function j(e){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(c.a.mark(function t(n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.pxTable,{body:JSON.stringify(n),method:"post"}).then(function(e){if(!e.ok)throw new Error("POST Failed to fetch.");return e.text()}).then(function(e){f(e)}).catch(function(e){console.log(e),f(null)});case 2:case"end":return t.stop()}},t)}))).apply(this,arguments)}return Object(r.useEffect)(function(){$=[],Z.length=0,v(!0),console.log(e.pxTable),fetch(e.pxTable).then(function(e){if(!e.ok)throw new Error("Selectors","Failed to fetch.");return e.json()}).then(function(e){v(!1);var t,n=[],r=[];t=e.title,y(t);for(var i=0,o=0;o<e.variables.length;o++){for(var u=e.variables[o].time,c=e.variables[o].elimination,l=e.variables[o].code,s=e.variables[o].text,f=0;f<e.variables[i].values.length;f++)n.push({value:e.variables[i].values[f],label:e.variables[i].valueTexts[f]});if(!0===u&&n.reverse(),Z.length!==e.variables.length){var p=n[0].value,h=[];h.push(p);var d={code:l,selection:{filter:"item",values:h}};Z.push(d)}$.push(a.a.createElement(Y,{options:n,selectorName:r,code:l,text:s,elimination:c,callBack:O})),r=[],n=[],i++}j({query:Z,response:{px:""}})}).catch(function(e){console.log("HERE",e),v(!1)})},[e.pxTable]),d?a.a.createElement(U,{type:"spinningBubbles",color:"#2d4182",height:"2%",width:"2%"}):$.length>0?a.a.createElement("div",{className:"row",onChange:(t=u,n=b,void e.onChange(t,n))},$):a.a.createElement(U,{type:"spin",color:"#2d4182",height:"1%",width:"1%"})}var te=n(82),ne=n.n(te),re=n(83),ae=n.n(re);function ie(e){var t,n=Object(r.useState)(null),i=Object(s.a)(n,2),o=i[0],u=i[1],c=ae()(e.contentElement);return Object(r.useEffect)(function(){u(e.data)},[e.data]),o?a.a.createElement("div",null,(t=function(e){!function(e,t){var n=[];if(!e.data||!e.metadata)return(n=[]).push("<div>Vinarliga fill teir kravdu gervisveljararnir</div>"),t.html(n.join(""));var r,a,i,o,u=e.data,c=e.metadata,l=c.LANGUAGES||null;null!==l?((r=c["HEADING["+(l=c.LANGUAGES.TABLE[1])+"]"])||(r=c.HEADING),a=r.TABLE,Array.isArray(a)||(a=[a]),(i=c["VALUES["+l+"]"])||(i=c.VALUES),o=c["STUB["+l+"]"],r||(o=c.STUB)):(a=(r=c.HEADING).TABLE,Array.isArray(a)||(a=[a]),i=c.VALUES,o=c.STUB),u.length>0&&u[0];var s=["a"];try{s=o.TABLE,Array.isArray(s)||(s=[s])}catch(C){console.log("Stub is undefined")}var f=null!==s,p=0;if(u&&u.length>0&&(p=1),n.push("<table class='pxtable table table-striped table-responsive'><colgroup><col width='100%'/></colgroup>"),a&&a.length>0){n.push("<thead>");for(var h=[],d=0;d<a.length;d++){h[d]||(h[d]=[]);var v=a[d],m=i[v];Array.isArray(m)||(m=[m]);for(var g=0;g<m.length;g++)h[d].push({headingName:v,headingValue:m[g],colSpan:1})}for(var b=function(e){var t=h[e],n=h[e+1],r=n[0].colSpan*n.length;t.forEach(function(e){e.colSpan=r})},y=h.length-2;y>-1;y--)b(y);for(var O=1,j=0;j<h.length;j++){n.push("<tr>"),f&&n.push("<th></th>");for(var E=h[j],w="",x=0;x<E.length*O;x++){var A=E[x%E.length];w="<th ",A.colSpan>1&&(w+="colSpan='"+A.colSpan+"'"),w+=">"+A.headingValue+"</th>",n.push(w)}n.push("</tr>"),O=E.length*O,p<O&&(p=O)}n.push("</thead>")}var S=[];if(n.push("<tbody>"),f)!function(){for(var e=s.length-1;e>-1;e--){var t=[];S.length>0&&(t=S.slice(0),S=[]);var r=s[e],a=i[r];void 0==a&&(a=""),Array.isArray(a)||(a=[a]);for(var o=0;o<a.length;o++)S.push({stubName:r,stubValue:a[o],elements:t.slice(0)})}for(var c=S.slice(0),l=0;c.length>0;){var f=c.shift(),h=0==f.elements.length;n.push("<tr>"),n.push("<td>"+f.stubValue+"</td>");for(var d=0;d<p;d++){var v="";h&&(v='"-"'===(v=u[d+p*l])?"-":Number(v)),n.push("<td>"+v+"</td>")}h||f.elements.forEach(function(e){c.push(e)}),n.push("</tr>"),h&&l++}}();else for(var k=0;k<p;k++){var N=u[k];n.push("<td>"+N+"</td>")}n.push("</tbody>"),n.push("</table>"),t.html(n.join(""))}(e,c)},e.data?t(new ne.a(e.data)):t(""))):a.a.createElement(U,{type:"cylon",color:"#2d4182",height:"1%",width:"1%"})}var oe=n(84),ue=n.n(oe),ce=n(56),le=n.n(ce),se=n(85),fe=n.n(se),pe=n(86),he=Object(pe.a)();function de(e){return a.a.createElement(F.a,{className:"selectors",onChange:function(t){e.onChange(t)},closeMenuOnSelect:!0,components:he,defaultValue:[e.db.data[0]],options:e.db.data})}function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach(function(t){Object(f.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ge=Object(p.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh",overflowX:"hidden",overflowY:"hidden"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},appBar:{backgroundColor:"#2d4182",transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,overflowX:"hidden"},drawerHeader:me({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"white"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary},paperX:{backgroundColor:e.palette.background.paper,border:"2px solid #2d4182",boxShadow:e.shadows[1],padding:e.spacing(2,4,3),width:"90%",height:"90%"}}}),be="";function ye(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)(null),u=Object(s.a)(o,2),p=u[0],v=u[1],x=Object(r.useState)(I[0].value),T=Object(s.a)(x,2),_=T[0],F=T[1],H=Object(h.a)(),M=Object(r.useState)(!0),V=Object(s.a)(M,2),G=V[0],U=V[1],R=Object(r.useState)("V\xe6lkomin til Hagtalsgrunnin"),W=Object(s.a)(R,2),z=W[0],Q=W[1],q=Object(r.useState)(!1),J=Object(s.a)(q,2),X=J[0],Y=J[1],$=Object(r.useState)(!0),Z=Object(s.a)($,2),te=Z[0],ne=Z[1],re=Object(r.useState)(le.a),ae=Object(s.a)(re,2),oe=ae[0],ce=ae[1],se=Object(r.useState)(!1),pe=Object(s.a)(se,2),he=pe[0],ve=pe[1],me=Object(r.useState)(null),ye=Object(s.a)(me,2),Oe=ye[0],je=ye[1],Ee=Object(r.useState)("#2d4182"),we=Object(s.a)(Ee,2),xe=we[0],Ae=we[1],Se=ge(),ke=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("Hagtalsgrunnurin"===t.label&&(Ae("#2d4182"),ce(le.a),ve(!1),F(t)),"Statistics Greenland"===t.label&&(Ae("#F26222"),ce(ue.a),ve(!1),F(t),Q("Welcome to Statistics Greenland")),"Statistics Iceland"!==t.label){e.next=14;break}return Ae("#3786C4"),ce(fe.a),Q("Welcome to Statistics Iceland"),e.next=8,m()(t.value);case 8:for(n=e.sent,r=0;r<n.data.length;r++)n.data[r].value=n.data[r].dbid,n.data[r].label=n.data[r].text,delete n.data[r].text,delete n.data[r].dbid;je(n),F({value:t.value+n.data[0].value+"/",label:"Statistics Iceland"}),be=t.value,ve(!0);case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:Se.root},a.a.createElement(y.a,null),a.a.createElement(d.a,{style:{backgroundColor:xe},position:"relative",className:Object(g.a)(Se.appBar,Object(f.a)({},Se.appBarShift,G))},a.a.createElement(N.a,null,a.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",onClick:function(){U(!0)},edge:"start",className:Object(g.a)(Se.menuButton,G&&Se.hide)},a.a.createElement(A.a,null)),a.a.createElement(C.a,{onClick:function(){ne(!te)},variant:"h6",noWrap:te,style:{fontSize:"1.2em",fontFamily:"Open Sans, sans-serif"}},z))),a.a.createElement(k.a,{className:Se.drawer,variant:"persistent",anchor:"left",open:G,onClose:function(){U(!1)},classes:{paper:Se.drawerPaper}},a.a.createElement("div",{className:Se.drawerHeader},a.a.createElement(w.a,{onClick:function(){U(!1)}},"ltr"===H.direction?a.a.createElement(B.a,null):a.a.createElement(P.a,null),a.a.createElement("img",{src:oe,style:{height:"50px",width:"50px",backgroundRepeat:"no-repeat"},alt:"logo"}))),a.a.createElement(L,{onChange:ke,mainColor:xe}),he?a.a.createElement(de,{db:Oe,onChange:function(e){F(be+e.value+"/")}}):null,a.a.createElement(O.a,null),a.a.createElement(K,{onClickItem:function(e){i(e),U(!G),Y(!1),Y(!0)},statBank:_,mainColor:xe})),a.a.createElement(E.a,Object.assign({in:X,style:{transformOrigin:"0 0 0"}},X?{timeout:2e3}:{}),a.a.createElement(b.a,{component:"main",className:Se.main,maxWidth:"m"},a.a.createElement(j.a,{container:!0,spacing:1},a.a.createElement(j.a,{item:!0,xs:12,sm:12},a.a.createElement(S.a,{elevation:6,style:{marginBottom:"1cm"},className:Se.paper},a.a.createElement(ee,{onChange:function(e,t){Q(t),v(e)},pxTable:n})),a.a.createElement(S.a,{elevation:6,className:Se.paper},a.a.createElement(C.a,{component:"span"},a.a.createElement(ie,{data:p,contentElement:"#tableResult"}),a.a.createElement("div",{style:{fontSize:"1em"},id:"tableResult"}))))))),a.a.createElement("footer",{className:Se.footer},a.a.createElement(b.a,{maxWidth:"m"},a.a.createElement(C.a,{variant:"body1"},a.a.createElement(O.a,null),a.a.createElement(D,null)))))}var Oe=function(){return a.a.createElement("div",{className:"app"},a.a.createElement(ye,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e){e.exports=[{value:"https://statbank.hagstova.fo/api/v1/fo/H2/",label:"Hagtalsgrunnurin"},{value:"https://bank.stat.gl/api/v1/en/Greenland/",label:"Statistics Greenland"},{value:"https://px.hagstofa.is/pxen/api/v1/en/",label:"Statistics Iceland"}]},56:function(e,t,n){e.exports=n.p+"static/media/hagstova_foroya.c347cb8e.svg"},60:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/logo.565f9a19.svg"},82:function(e,t,n){(function(){"use strict";var r=function(){function e(e){this._ctor(e)}function t(e){for(var t=[];e--;)t[e]=0;return t}return e.prototype={keyword:function(e){if(!a.include(this.keywords(),e))throw"'"+e+"' is not a valid KEYWORD";return this.metadata[e].TABLE?this.metadata[e].TABLE:this.metadata[e]},title:function(){return this.keyword("TITLE")},keywords:function(){return a.keys(this.metadata)},variables:function(){return a.flatten([this.keyword("STUB"),this.keyword("HEADING")])},variable:function(e){var t=this.variables();return"number"===typeof e?t[e]:"string"===typeof e?a.indexOf(t,e):void 0},values:function(e){var t="number"===typeof e?this.variable(e):this.variables()[this.variable(e)];return this.keyword("VALUES")[t]},codes:function(e){var t="number"===typeof e?this.variable(e):this.variables()[this.variable(e)];return this.metadata.CODES&&this.keyword("CODES")[t]?this.keyword("CODES")[t]:this.keyword("VALUES")[t]},valCounts:function(){var e=[];return a.each(this.variables(),function(t,n){e.push(a.size(this.values(n)))},this),e},value:function(e,t){var n=a.indexOf(this.codes(t),e);return this.values(t)[n]},code:function(e,t){var n=a.indexOf(this.values(t),e);return this.codes(t)[n]},datum:function(e){for(var t=this.valCounts(),n=0,r=0,i=e.length-1;r<i;r++)n+=e[r]*a.reduce(t.slice(r+1),function(e,t){return e*t});return n+=a.last(e),!0===arguments[1]?n:this.data[n].replace(/"|'/g,"")},dataCol:function(e){for(var t=this.valCounts(),n=[],r=a.indexOf(e,"*"),i=e.slice(0),o=0;o<t[r];o++)i[r]=o,n.push(this.datum(i,arguments[1]));return n},dataDict:function(e){var t={},n=a.indexOf(e,"*"),r=this.codes(n),i=this.dataCol(e);return a.each(i,function(e,n){t[r[n]]=e}),t},datatable:function(e){var t=this.valCounts(),n=[];a.each(e,function(e,t){"*"===e&&n.push(t)});for(var r=n[0],i=a.last(n),o=[],u=0;u<t[i];u++)e[r]="*",e[i]=u,o.push(this.dataCol(e,arguments[1]));return o},entries:function(){for(var e=this.valCounts(),n=this.variables(),r=t(e.length),i=r.length-1,o=[],u=[],c=0,l=e.length;c<l-1;c++)o[c]=a.reduce(e.slice(c+1),function(e,t){return e*t});return a.each(this.data,function(t,a){for(var c={num:t},l=0,s=n.length;l<s;l++)c[n[l]]=this.values(l)[r[l]];u.push(c);for(var f=0,p=o.length;f<p;f++)(a+1)%o[f]===0&&(r[f]=r[f]===e[f]-1?0:r[f]+1);r[i]=r[i]===e[i]-1?0:r[i]+1},this),u},truncate:function(e){var n=this.valCounts(),r=[];a.each(e,function(t,r){"*"===t[0]&&(e[r]=a.range(0,n[r]-1))});for(var i=0,o=n.length;i<o-1;i++)r[i]=a.reduce(n.slice(i+1),function(e,t){return e*t});r.push(1);for(var u=0,c=e.length;u<c;u++)this.metadata.VALUES[this.variables()[u]]=a.filter(this.metadata.VALUES[this.variables()[u]],function(t,n){return-1!==a.indexOf(e[u],n)});var l=[];!function e(n,r,i,o){if(n.length>1){o="undefined"!==typeof o?o:1;var u=n.pop(),c=r.pop(),s=i.pop();e(n,r,i,a.flatten(a.map(a.range(0,u),function(e){return a.include(s,e)?o:t(c)})))}l.push(a.flatten(o))}(n,r,e),l=l[0];var s=[];a.each(e[0],function(e){var t=e*r[0],n=t+r[0];s.push(a.filter(a.range(t,n),function(e,t){return 1===l[t]}))}),s=a.flatten(s),this.data=a.filter(this.data,function(e,t){return-1!==a.indexOf(s,t)})},subset:function(e){},_ctor:function(e){for(var t,n={},r=e.split(/\nDATA=/),a=r[0].replace(/;\s*(\r\n?|\n)/g,";;").replace(/;;$/,";").replace(/(\r\n?|\n)/g,"").replace(/""/g," ").split(";;"),i=r[1],o=0,u=a.length;o<u;o++){var c=a[o].match(/^(.+?)(?:\((.+?)\))?=(.+)$/);if(null!=c){c[2]||(c[2]="TABLE");var l=c[1],s=c[3].replace(/^"|"$/g,"").split(/","/g),f=c[2].replace(/"/g,"");n[l]||(n[l]={}),n[l][f]="VALUES"!==l&&1===s.length?s[0]:s}}try{t=i.replace(/(\r\n|\r|\n)/g,"").replace(/;\s*/,"").split(/\s+/)}catch(p){}n.HEADING||(n.HEADING={TABLE:[]}),this.metadata=n,this.data=t}},e}(),a=this._;e.exports&&(t=e.exports=r),t.Px=r,a=n(122)}).call(this)},84:function(e,t,n){e.exports=n.p+"static/media/greenland.47af88e4.png"},85:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAIAAAClJN76AAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAAPVJREFUWMNj/P//P8PAASaGAQWj1o9c61koN+LH739Xn33++ecfAwMDFxuzlhQvGzMj/ayvXH9j9ZnncG65h3Kuk8Jo3I9aT3HS+/Lly5u3byFsQQEBfn5+ulrf2z8JmVtcmMfDwzMa96PWj1o/av2o9UPQesYR3c0gXOPJlO2luq1PupzJbGpaKAmgiTx+9+Pphx9wrrQAh6wQBx4T+DhYyG/prskwRm8Q7LrXv+c+nBtmIlnspjSa8UatH7V+1PqhWuY/6XI+dvc9hG2lLDgAoxtUt3U07ketp1Jb7+qzzx+//2FgYODnZNGW4h1tao5aTxgAANcVQFHaCHb7AAAAAElFTkSuQmCC"},94:function(e,t,n){e.exports=n(131)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.9dfd0b74.chunk.js.map