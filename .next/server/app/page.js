(()=>{var e={};e.id=931,e.ids=[931],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5495:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>f,pages:()=>c,routeModule:()=>d,tree:()=>u});var n=r(7096),i=r(6132),a=r(7284),o=r.n(a),s=r(2564),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9447)),"C:\\Users\\cBote\\Documents\\code\\elena-funny-fillin\\src\\app\\page.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4553)),"C:\\Users\\cBote\\Documents\\code\\elena-funny-fillin\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\cBote\\Documents\\code\\elena-funny-fillin\\src\\app\\page.js"],f="/page",p={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},5644:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3579,23)),Promise.resolve().then(r.t.bind(r,619,23)),Promise.resolve().then(r.t.bind(r,1459,23)),Promise.resolve().then(r.t.bind(r,3456,23)),Promise.resolve().then(r.t.bind(r,847,23)),Promise.resolve().then(r.t.bind(r,7303,23))},2431:()=>{},7886:(e,t,r)=>{Promise.resolve().then(r.bind(r,3993))},3854:(e,t,r)=>{"use strict";e.exports=r(2337).vendored["react-ssr"].ReactJsxRuntime},3993:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(3854),i=r(4218);function a(){let[e,t]=(0,i.useState)(!1),[r,a]=(0,i.useState)({friend:null,relative:null,relation:null,verb:null,verb2:null,adverb:null,animal:null,exclamation:null}),[o,s]=(0,i.useState)({}),[l,u]=(0,i.useState)(!1),c=e=>{let t={},r="please fill this value!";return e.friend||(t.friend=r),e.relative||(t.relative=r),e.relation||(t.relation=r),e.verb||(t.verb=r),e.verb2||(t.verb2=r),e.adverb||(t.adverb=r),e.animal||(t.animal=r),e.exclamation||(t.exclamation=r),t},f=e=>{a({...r,[e.target.name]:e.target.value}),console.log(r)},p=e=>{console.log(`This is the event value ${e.target.className}`),e.preventDefault(),s(c(r)),u(!0)},d=()=>{e?(u(!1),t(!1)):t(!0)};return(0,i.useEffect)(()=>{0===Object.keys(o).length&&l&&d()},[o]),(0,n.jsxs)("div",{className:"App",children:[n.jsx("div",{className:"App-header",children:n.jsx(()=>n.jsx("header",{className:"App-header",children:n.jsx("h2",{children:"Elena's Funny Fill-In"})}),{})}),n.jsx("div",{className:"cards",children:0===Object.keys(o).length&&l?n.jsx("div",{className:"content",children:(0,n.jsxs)("p",{children:[n.jsx("b",{children:r.friend})," and I were going to he theatre, when we met ",n.jsx("b",{children:r.relative}),". ",(0,n.jsxs)("em",{children:['"Hello, Sunny! Wtacha doin? ',n.jsx("b",{children:r.verb}),'?", he said.']})," I didn't know what to do, so I said ",n.jsx("b",{children:r.adverb})," ",(0,n.jsxs)("em",{children:['"Kick your butt, ',n.jsx("b",{children:r.animal}),'!"']}),". Then my ",n.jsx("b",{children:r.relation})," showed up, and in a loud voice said ",(0,n.jsxs)("em",{children:['"',n.jsx("b",{children:r.exclamation}),'!"']})," I ",n.jsx("b",{children:r.verb2})," to the nearest bus stop, and so did ",n.jsx("b",{children:r.friend}),". Now that was some crazy day!"]})}):(0,n.jsxs)("div",{className:"inputs",children:[n.jsx("h3",{children:"Fill in the blanks:"}),(0,n.jsxs)("div",{className:o.friend?"error":"",children:["Friend's Name: ",o.friend?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"friend",type:"text",value:r.friend,onChange:f})]}),(0,n.jsxs)("div",{className:o.relative?"error":"",children:["Relative's name: ",o.relative?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"relative",type:"text",value:r.relative,onChange:f})]}),(0,n.jsxs)("div",{className:o.relation?"error":"",children:["His/her relation to you: ",o.relation?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"relation",type:"text",value:r.relation,onChange:f})]}),(0,n.jsxs)("div",{className:o.verb?"error":"",children:["Verb, ending in 'ing': ",o.verb?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"verb",type:"text",value:r.verb,onChange:f})]}),(0,n.jsxs)("div",{className:o.verb2?"error":"",children:["Past tense verb: ",o.verb2?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"verb2",type:"text",value:r.verb2,onChange:f})]}),(0,n.jsxs)("div",{className:o.adverb?"error":"",children:["Adverb, ending in 'ly': ",o.adverb?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"adverb",type:"text",value:r.adverb,onChange:f})]}),(0,n.jsxs)("div",{className:o.animal?"error":"",children:["Scary animal: ",o.animal?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"animal",type:"text",value:r.animal,onChange:f})]}),(0,n.jsxs)("div",{className:o.exclamation?"error":"",children:["Silly exclamation: ",o.exclamation?n.jsx("em",{className:"error",children:"*required"}):null,n.jsx("br",{}),n.jsx("input",{className:"input",size:"30",name:"exclamation",type:"text",value:r.exclamation,onChange:f})]})]})}),n.jsx("div",{children:n.jsx(()=>n.jsx(n.Fragment,{children:n.jsx("button",{className:e?"btn-toggle-back":"btn-toggle",onClick:p,children:e?"Start again":"See the story"})}),{})})]})}r(185)},9001:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RSC_HEADER:function(){return r},ACTION:function(){return n},NEXT_ROUTER_STATE_TREE:function(){return i},NEXT_ROUTER_PREFETCH_HEADER:function(){return a},NEXT_URL:function(){return o},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_VARY_HEADER:function(){return l},FLIGHT_PARAMETERS:function(){return u},NEXT_RSC_UNION_QUERY:function(){return c}});let r="RSC",n="Next-Action",i="Next-Router-State-Tree",a="Next-Router-Prefetch",o="Next-Url",s="text/x-component",l=r+", "+i+", "+a+", "+o,u=[[r],[i],[a]],c="_rsc";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8712:e=>{"use strict";(()=>{"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var l=a[s],u=l.indexOf("=");if(!(u<0)){var c=l.substr(0,u).trim(),f=l.substr(++u,l.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[c]&&(i[c]=function(e,t){try{return t(e)}catch(t){return e}}(f,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=a.maxAge){var u=a.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},9481:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,l="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){l+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);l+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!l)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,o="[^"+a(t.delimiter||"/#?")+"]+?",s=[],l=0,u=0,c="",f=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[u];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var m=f("CHAR"),h=f("NAME"),g=f("PATTERN");if(h||g){var v=m||"";-1===i.indexOf(v)&&(c+=v,v=""),c&&(s.push(c),c=""),s.push({name:h||l++,prefix:v,suffix:"",pattern:g||o,modifier:f("MODIFIER")||""});continue}var x=m||f("ESCAPED_CHAR");if(x){c+=x;continue}if(c&&(s.push(c),c=""),f("OPEN")){var v=d(),y=f("NAME")||"",b=f("PATTERN")||"",E=d();p("CLOSE"),s.push({name:y||(b?l++:""),pattern:y&&!b?o:b,prefix:v,suffix:E,modifier:f("MODIFIER")||""});continue}p("END")}return s}function n(e,t){void 0===t&&(t={});var r=o(t),n=t.encode,i=void 0===n?function(e){return e}:n,a=t.validate,s=void 0===a||a,l=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,c="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!c)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(u)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<o.length;f++){var p=i(o[f],a);if(s&&!l[n].test(p))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var p=i(String(o),a);if(s&&!l[n].test(p))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix;continue}if(!u){var d=c?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+d)}}return r}}function i(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),l=1;l<n.length;l++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(l);return{path:a,index:o,params:s}}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,s=r.start,l=r.end,u=r.encode,c=void 0===u?function(e){return e}:u,f="["+a(r.endsWith||"")+"]|$",p="["+a(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)d+=a(c(h));else{var g=a(c(h.prefix)),v=a(c(h.suffix));if(h.pattern){if(t&&t.push(h),g||v){if("+"===h.modifier||"*"===h.modifier){var x="*"===h.modifier?"?":"";d+="(?:"+g+"((?:"+h.pattern+")(?:"+v+g+"(?:"+h.pattern+"))*)"+v+")"+x}else d+="(?:"+g+"("+h.pattern+")"+v+")"+h.modifier}else d+="("+h.pattern+")"+h.modifier}else d+="(?:"+g+v+")"+h.modifier}}if(void 0===l||l)i||(d+=p+"?"),d+=r.endsWith?"(?="+f+")":"$";else{var y=e[e.length-1],b="string"==typeof y?p.indexOf(y[y.length-1])>-1:void 0===y;i||(d+="(?:"+p+"(?="+f+"))?"),b||(d+="(?="+p+"|"+f+")")}return new RegExp(d,o(r))}function l(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return l(e,t,n).source}).join("|")+")",o(n)):s(r(e,n),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return i(l(e,r,t),r,t)},t.regexpToFunction=i,t.tokensToRegexp=s,t.pathToRegexp=l},8531:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataRoute:function(){return p}});let n=r(4608),i=function(e){return e&&e.__esModule?e:{default:e}}(r(5585)),a=r(1239),o=r(4018),s=r(8043),l=r(1478),u=r(7819);function c(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,l.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),f=(0,a.interpolateDynamicPath)(n,t,s),p=c(e),d=p?`-${p}`:"",{name:m,ext:h}=i.default.parse(r);return(0,u.normalizePathSep)(i.default.join(f,`${m}${d}${h}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e)t+=".txt";else if("/manifest"===e)t+=".webmanifest";else if(e.endsWith("/sitemap"))t+=".xml";else{let t=e.slice(0,-(i.default.basename(e).length+1));r=c(t)}if(!t.endsWith("/route")){let{dir:a,name:o,ext:s}=i.default.parse(t),l=(0,n.isStaticMetadataRoute)(e);t=i.default.posix.join(a,`${o}${r?`-${r}`:""}${s}`,l?"":"[[...__metadata_id__]]","route")}return t}},4608:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},isMetadataRouteFile:function(){return s},isStaticMetadataRouteFile:function(){return l},isStaticMetadataRoute:function(){return u},isMetadataRoute:function(){return c}});let n=r(7819),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=e=>`(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`\\.${o(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${o(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${o(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`\\.${o(t.concat(i.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`\\.${o(t.concat(i.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`\\.${o(t.concat(i.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`\\.${o(t.concat(i.twitter.extensions))}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function l(e){return s(e,[],!0)}function u(e){return"/robots"===e||"/manifest"===e||l(e)}function c(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},4427:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(8712);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},7302:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},isInterceptionRouteAppPath:function(){return a},extractInterceptionRouteInformation:function(){return o}});let n=r(1478),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},1239:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeVercelUrl:function(){return p},interpolateDynamicPath:function(){return d},getUtils:function(){return m}});let n=r(7310),i=r(5259),a=r(9302),o=r(4018),s=r(4893),l=r(1731),u=r(4419),c=r(1478),f=r(9368);function p(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e];e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let{optional:i,repeat:a}=r.groups[n],o=`[${a?"...":""}${n}]`;i&&(o=`[${o}]`);let s=e.indexOf(o);if(s>-1){let r;let i=t[n];r=Array.isArray(i)?i.map(e=>e&&encodeURIComponent(e)).join("/"):i?encodeURIComponent(i):"",e=e.slice(0,s)+r+e.slice(s+o.length)}}return e}function m({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:m,trailingSlash:h,caseSensitive:g}){let v,x,y;return m&&(v=(0,o.getNamedRouteRegex)(e,!1),y=(x=(0,s.getRouteMatcher)(v))(e)),{handleRewrites:function(o,s){let c={},f=s.pathname,p=n=>{let u=(0,a.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g}),p=u(s.pathname);if((n.has||n.missing)&&p){let e=(0,l.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(p,e):p=!1}if(p){let{parsedDestination:a,destQuery:o}=(0,l.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:p,query:s.query});if(a.protocol)return!0;if(Object.assign(c,o,p),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),f=s.pathname,r&&(f=f.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(f,t.locales);f=e.pathname,s.query.nextInternalLocale=e.detectedLocale||p.nextInternalLocale}if(f===e)return!0;if(m&&x){let e=x(f);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])p(e);if(f!==e){let t=!1;for(let e of n.afterFiles||[])if(t=p(e))break;if(!t&&!(()=>{let t=(0,u.removeTrailingSlash)(f||"");return t===(0,u.removeTrailingSlash)(e)||(null==x?void 0:x(t))})()){for(let e of n.fallback||[])if(t=p(e))break}}return c},defaultRouteRegex:v,dynamicRouteMatcher:x,defaultRouteMatches:y,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=v;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];if(e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)){let r=e.substring(f.NEXT_QUERY_PARAM_PREFIX.length);o[r]=t,delete o[e]}}let l=Object.keys(i||{}),u=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return l.every(e=>o[e])?l.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!u(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!u(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:function(e,t){let r=!0;return v?{params:e=Object.keys(v.groups).reduce((n,i)=>{let a=e[i];"string"==typeof a&&(a=(0,c.normalizeRscURL)(a)),Array.isArray(a)&&(a=a.map(e=>("string"==typeof e&&(e=(0,c.normalizeRscURL)(e)),e)));let o=y[i],s=v.groups[i].optional,l=Array.isArray(o)?o.some(e=>Array.isArray(a)?a.some(t=>t.includes(e)):null==a?void 0:a.includes(e)):null==a?void 0:a.includes(o);return(l||void 0===a&&!(s&&t))&&(r=!1),s&&(!a||Array.isArray(a)&&1===a.length&&("index"===a[0]||a[0]===`[[...${i}]]`))&&(a=void 0,delete e[i]),a&&"string"==typeof a&&v.groups[i].repeat&&(a=a.split("/")),a&&(n[i]=a),n},{}),hasValidParams:r}:{params:e,hasValidParams:!1}},normalizeVercelUrl:(e,t,r)=>p(e,t,r,m,v),interpolateDynamicPath:(e,t)=>d(e,t,v)}}},9789:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},8043:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);t=(t<<5)+t+n&4294967295}return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},5259:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},5585:(e,t,r)=>{"use strict";let n;n=r(1017),e.exports=n},9701:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},7819:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},1478:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(9701),i=r(2219);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},129:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(351);let n=r(6024);function i(e,t){let r=new URL("http://n"),i=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:a,searchParams:o,search:s,hash:l,href:u,origin:c}=new URL(e,i);if(c!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:a,query:(0,n.searchParamsToUrlQuery)(o),search:s,hash:l,href:u.slice(r.origin.length)}}},6940:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(6024),i=r(129);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},9302:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(9481);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},1731:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchHas:function(){return c},compileNonPath:function(){return f},prepareDestination:function(){return p}});let n=r(9481),i=r(9789),a=r(6940),o=r(7302),s=r(9001),l=r(4427);function u(e){return e.replace(/__ESC_COLON_/gi,":")}function c(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":if("cookies"in e)n=e.cookies[r.key];else{let t=(0,l.getCookieParser)(e.headers)();n=t[r.key]}break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{},r=null==t?void 0:t.split(":",1)[0].toLowerCase();n=r}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1},o=r.every(e=>a(e))&&!n.some(e=>a(e));return!!o&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let l=e.destination;for(let t of Object.keys({...e.params,...r}))l=l.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let c=(0,a.parseUrl)(l),p=c.query,d=u(""+c.pathname+(c.hash||"")),m=u(c.hostname||""),h=[],g=[];(0,n.pathToRegexp)(d,h),(0,n.pathToRegexp)(m,g);let v=[];h.forEach(e=>v.push(e.name)),g.forEach(e=>v.push(e.name));let x=(0,n.compile)(d,{validate:!1}),y=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(p))Array.isArray(r)?p[t]=r.map(t=>f(u(t),e.params)):"string"==typeof r&&(p[t]=f(u(r),e.params));let b=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!b.some(e=>v.includes(e)))for(let t of b)t in p||(p[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{t=x(e.params);let[r,n]=t.split("#",2);c.hostname=y(e.params),c.pathname=r,c.hash=(n?"#":"")+(n||""),delete c.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return c.query={...r,...c.query},{newUrl:t,destQuery:p,parsedDestination:c}}},6024:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i},assign:function(){return a}})},4419:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},4893:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(351);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},4018:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getRouteRegex:function(){return l},getNamedRouteRegex:function(){return f},getNamedMiddlewareRegex:function(){return p}});let n=r(7302),i=r(9789),a=r(4419);function o(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:l}=o(a[1]);return r[e]={pos:s++,repeat:l,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=o(a[1]);return r[e]={pos:s++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function l(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function u(e){let{getSafeRouteKey:t,segment:r,routeKeys:n,keyPrefix:i}=e,{key:a,optional:s,repeat:l}=o(r),u=a.replace(/\W/g,"");i&&(u=""+i+u);let c=!1;return(0===u.length||u.length>30)&&(c=!0),isNaN(parseInt(u.slice(0,1)))||(c=!0),c&&(u=t()),i?n[u]=""+i+a:n[u]=""+a,l?s?"(?:/(?<"+u+">.+?))?":"/(?<"+u+">.+?)":"/(?<"+u+">[^/]+?)"}function c(e,t){let r;let o=(0,a.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),l={};return{namedParameterizedRoute:o.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);return r&&a?u({getSafeRouteKey:s,segment:a[1],routeKeys:l,keyPrefix:t?"nxtI":void 0}):a?u({getSafeRouteKey:s,segment:a[1],routeKeys:l,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:l}}function f(e,t){let r=c(e,t);return{...l(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function p(e,t){let{parameterizedRoute:r}=s(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=c(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},2219:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isGroupSegment",{enumerable:!0,get:function(){return r}})},351:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{WEB_VITALS:function(){return r},execOnce:function(){return n},isAbsoluteUrl:function(){return a},getLocationOrigin:function(){return o},getURL:function(){return s},getDisplayName:function(){return l},isResSent:function(){return u},normalizeRepeatedSlashes:function(){return c},loadGetInitialProps:function(){return f},SP:function(){return p},ST:function(){return d},DecodeError:function(){return m},NormalizeError:function(){return h},PageNotFoundError:function(){return g},MissingStaticPage:function(){return v},MiddlewareNotFoundError:function(){return x},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?"),r=t[0];return r.replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n){let t='"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.';throw Error(t)}return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class v extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class x extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},4553:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>o});var n=r(4656),i=r(4302),a=r.n(i);let o={title:"Elena's Funny Fill-In",description:"Elena's Funny Fill-In"};function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:a().className,children:e})})}},9447:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>l});var n=r(5153);let i=(0,n.createProxy)(String.raw`C:\Users\cBote\Documents\code\elena-funny-fillin\src\app\page.js`),{__esModule:a,$$typeof:o}=i,s=i.default,l=s},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(8531);let i=e=>{let t=(0,n.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},185:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[271,185],()=>r(5495));module.exports=n})();