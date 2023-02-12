var e,t,n={},r={},o=r={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===i||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:i}catch(t){e=i}try{t="function"==typeof clearTimeout?clearTimeout:a}catch(e){t=a}}();var s,l=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?l=s.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=c(f);u=!0;for(var n=l.length;n;){for(s=l,l=[];++d<n;)s&&s[d].run();d=-1,n=l.length}s=null,u=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===a||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0};var m={},v={};function y(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function b(e,t){for(var n,r="",o=0,i=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(i===c-1||1===a);else if(i!==c-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",o=0):o=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),i=c,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=c,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,c):r=e.slice(i+1,c),o=c-i-1;i=c,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var w,C={resolve:function(){for(var e,t="",n=!1,o=arguments.length-1;o>=-1&&!n;o--){var i;o>=0?i=arguments[o]:(void 0===e&&(e=r.cwd()),i=e),y(i),0!==i.length&&(t=i+"/"+t,n=47===i.charCodeAt(0))}return t=b(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(y(e),0===e.length)return".";var t=47===e.charCodeAt(0),n=47===e.charCodeAt(e.length-1);return 0!==(e=b(e,!t)).length||t||(e="."),e.length>0&&n&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return y(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var n=arguments[t];y(n),n.length>0&&(void 0===e?e=n:e+="/"+n)}return void 0===e?".":C.normalize(e)},relative:function(e,t){if(y(e),y(t),e===t)return"";if((e=C.resolve(e))===(t=C.resolve(t)))return"";for(var n=1;n<e.length&&47===e.charCodeAt(n);++n);for(var r=e.length,o=r-n,i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var a=t.length-i,c=o<a?o:a,s=-1,l=0;l<=c;++l){if(l===c){if(a>c){if(47===t.charCodeAt(i+l))return t.slice(i+l+1);if(0===l)return t.slice(i+l)}else o>c&&(47===e.charCodeAt(n+l)?s=l:0===l&&(s=0));break}var u=e.charCodeAt(n+l);if(u!==t.charCodeAt(i+l))break;47===u&&(s=l)}var d="";for(l=n+s+1;l<=r;++l)l!==r&&47!==e.charCodeAt(l)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(i+s):(i+=s,47===t.charCodeAt(i)&&++i,t.slice(i))},_makeLong:function(e){return e},dirname:function(e){if(y(e),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');y(e);var n,r=0,o=-1,i=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var a=t.length-1,c=-1;for(n=e.length-1;n>=0;--n){var s=e.charCodeAt(n);if(47===s){if(!i){r=n+1;break}}else-1===c&&(i=!1,c=n+1),a>=0&&(s===t.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=c))}return r===o?o=c:-1===o&&(o=e.length),e.slice(r,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){r=n+1;break}}else-1===o&&(i=!1,o=n+1);return-1===o?"":e.slice(r,o)},extname:function(e){y(e);for(var t=-1,n=0,r=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===r&&(o=!1,r=a+1),46===c?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){y(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var n,r=e.charCodeAt(0),o=47===r;o?(t.root="/",n=1):n=0;for(var i=-1,a=0,c=-1,s=!0,l=e.length-1,u=0;l>=n;--l)if(47!==(r=e.charCodeAt(l)))-1===c&&(s=!1,c=l+1),46===r?-1===i?i=l:1!==u&&(u=1):-1!==i&&(u=-1);else if(!s){a=l+1;break}return-1===i||-1===c||0===u||1===u&&i===c-1&&i===a+1?-1!==c&&(t.base=t.name=0===a&&o?e.slice(1,c):e.slice(a,c)):(0===a&&o?(t.name=e.slice(1,i),t.base=e.slice(1,c)):(t.name=e.slice(a,i),t.base=e.slice(a,c)),t.ext=e.slice(i,c)),a>0?t.dir=e.slice(0,a-1):o&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};C.posix=C,v=C,w=function(){return"/"};const A=JSON.parse('{"name":"dotenv","version":"16.0.3","description":"Loads environment variables from .env file","main":"lib/main.js","types":"lib/main.d.ts","exports":{".":{"require":"./lib/main.js","types":"./lib/main.d.ts","default":"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},"scripts":{"dts-check":"tsc --project tests/types/tsconfig.json","lint":"standard","lint-readme":"standard-markdown","pretest":"npm run lint && npm run dts-check","test":"tap tests/*.js --100 -Rspec","prerelease":"npm test","release":"standard-version"},"repository":{"type":"git","url":"git://github.com/motdotla/dotenv.git"},"keywords":["dotenv","env",".env","environment","variables","config","settings"],"readmeFilename":"README.md","license":"BSD-2-Clause","devDependencies":{"@types/node":"^17.0.9","decache":"^4.6.1","dtslint":"^3.7.0","sinon":"^12.0.1","standard":"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2","tap":"^15.1.6","tar":"^6.1.11","typescript":"^4.5.4"},"engines":{"node":">=12"}}').version,j=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;function T(e){console.log(`[dotenv@${A}][DEBUG] ${e}`)}const k={config:function(e){let t=v.resolve(r.cwd(),".env"),n="utf8";const o=Boolean(e&&e.debug),i=Boolean(e&&e.override);var a;e&&(null!=e.path&&(t="~"===(a=e.path)[0]?v.join(w(),a.slice(1)):a),null!=e.encoding&&(n=e.encoding));try{const e=k.parse(m.readFileSync(t,{encoding:n}));return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(r.env,t)?(!0===i&&e[t],o&&T(!0===i?`"${t}" is already defined in \`process.env\` and WAS overwritten`:`"${t}" is already defined in \`process.env\` and was NOT overwritten`)):e[t]})),{parsed:e}}catch(e){return o&&T(`Failed to load ${t} ${e.message}`),{error:e}}},parse:function(e){const t={};let n,r=e.toString();for(r=r.replace(/\r\n?/gm,"\n");null!=(n=j.exec(r));){const e=n[1];let r=n[2]||"";r=r.trim();const o=r[0];r=r.replace(/^(['"`])([\s\S]*)\1$/gm,"$2"),'"'===o&&(r=r.replace(/\\n/g,"\n"),r=r.replace(/\\r/g,"\r")),t[e]=r}return t}};n.config=k.config,n.parse=k.parse,(n=k).config();var x=async(e,t)=>(await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=2dce9ac4a9cb1a19ee7c347a60a7027c&units=metric`)).json();n.config();var S=async e=>{const t=await(async e=>(await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&limit=1&appid=2dce9ac4a9cb1a19ee7c347a60a7027c`)).json())(e);return{lat:t[0].lat,lon:t[0].lon,city:t[0].name}};var $=async e=>{const{lat:t,lon:n,city:r}=await S(e),o=await x(t,n);return{temperature:o.main.temp,conditions:o.weather[0].main,icon:o.weather[0].icon,city:r,country:o.sys.country}};const q=document.querySelector("form"),E=document.querySelector(".weather-city"),O=document.querySelector(".weather-country"),L=document.querySelector(".weather-temp"),D=document.querySelector(".weather-conditions");q.addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector("input").value;if(""===t)document.querySelector("input").placeholder="Please enter a city name",document.querySelector("input").classList.add("invalid");else{document.querySelector("input").placeholder="City name e.g. New York",document.querySelector("input").classList.remove("invalid");const{temperature:e,conditions:n,city:r,country:o}=await $(t);E.textContent=`${r}, `,O.textContent=o,L.textContent=`${Math.round(e)}°C`,D.textContent=n}}));
//# sourceMappingURL=index.af56120b.js.map