(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"3865d884"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="assets/css/"+({about:"about"}[e]||e)+"."+{about:"656b9ad7"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"41cb":function(e,t,n){"use strict";var r=n("a026"),o=n("8c4f");r["default"].use(o["a"]);var a=new o["a"]({mode:"history",base:"",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",redirect:"/home/bill",component:function(){return n.e("about").then(n.bind(null,"16c0"))},children:[{path:"/home/bill",name:"bill",component:function(){return n.e("about").then(n.bind(null,"ac61"))}},{path:"/home/products",name:"products",component:function(){return n.e("about").then(n.bind(null,"4bcf"))}},{path:"/home/Personal",name:"personal",component:function(){return n.e("about").then(n.bind(null,"20a6"))}}]},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"d9c9"))}},{path:"/register",name:"register",component:function(){return n.e("about").then(n.bind(null,"cc4d"))}},{path:"/404",name:"404",component:function(){return n.e("about").then(n.bind(null,"dc75"))}},{path:"*",redirect:"/404"}]});a.beforeEach(function(e,t,n){localStorage.getItem("token")?n():"/login"===e.path||"/register"===e.path?n():n("/login")}),t["a"]=a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("04e1"),i=n.n(u),c={name:"app",created:function(){var e=localStorage.getItem("token");this.$store.dispatch("jToken",i()(e))}},l=c,s=(n("034f"),n("2877")),f=Object(s["a"])(l,o,a,!1,null,null,null),p=f.exports,d=n("41cb"),h=n("2f62");r["default"].use(h["a"]);var m=new h["a"].Store({state:{token:[]},mutations:{setToken:function(e,t){e.token=t}},actions:{jToken:function(e,t){e.commit("setToken",t)}}}),b=n("bc3a"),g=n.n(b),v=n("5c96"),y=n.n(v);n("0fae");g.a.defaults.headers["Content-Type"]="application/json; charset=utf-8",r["default"].prototype.axios=g.a,r["default"].config.productionTip=!1,r["default"].use(y.a),new r["default"]({router:d["a"],store:m,render:function(e){return e(p)}}).$mount("#app")},"64a9":function(e,t,n){}});
//# sourceMappingURL=app.b6c9f8f4.js.map