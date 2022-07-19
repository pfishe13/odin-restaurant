(()=>{"use strict";var n,e,t,r,o,i,a,c,s,l,d,u,p,f,m={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,"body {\n  height: 100vh;\n  color: #061f41;\n  margin: 0;\n  padding: 20px;\n  box-sizing: border-box;\n  /* display: flex;\n  justify-content: center;\n  align-items: center; */\n}\n\nh2 {\n  margin-bottom: 0;\n}\n\n#content {\n  box-sizing: border-box;\n  height: 100%;\n  padding: 60px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.navigation-bar {\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n\n.navigation-bar > ul {\n  font-size: 2em;\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  /* align-items: center; */\n}\n\n.menu-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n  height: 100%;\n}\n\n.menu-grid {\n  flex-grow: 3;\n  width: 100%;\n  height: calc(100% - 100px);\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(10, 100px);\n  overflow: scroll;\n}\n\n.menu-header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-column: span 3;\n}\n\n.menu-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.footer {\n  margin-top: auto;\n  text-align: center;\n  position: relative;\n}\n\n.logo-header {\n  height: 300px;\n}\n\n.logo-header-small {\n  /* height: 100px; */\n  width: 200px;\n  object-fit: cover;\n}\n",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},h={};function v(n){var e=h[n];if(void 0!==e)return e.exports;var t=h[n]={id:n,exports:{}};return m[n](t,t.exports,v),t.exports}v.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return v.d(e,{a:e}),e},v.d=(n,e)=>{for(var t in e)v.o(e,t)&&!v.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},v.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),v.nc=void 0,n=v(379),e=v.n(n),t=v(795),r=v.n(t),o=v(569),i=v.n(o),a=v(565),c=v.n(a),s=v(216),l=v.n(s),d=v(589),u=v.n(d),p=v(28),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,(()=>{const n=document.getElementById("content"),e=document.createElement("div");e.classList.add("navigation-bar");const t=document.createElement("ul");e.appendChild(t);const r=document.createElement("li");r.textContent="Home";const o=document.createElement("li");o.textContent="Menu";const i=document.createElement("li");i.textContent="Contact",t.appendChild(r),t.appendChild(o),t.appendChild(i),n.appendChild(e)})(),(()=>{const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="Contact Us",n.appendChild(e);const t=document.createElement("div");t.innerHTML="\n        <h3> Swensons Drive-In </h3>\n        <h4>40 South Hawkins St.</h4>\n        <h4>Akron, OH 44313</h4>\n        <h4>United States</h4>\n    ",n.appendChild(t);const r=document.createElement("div");r.innerHTML="\n        <h3>(330)864-8416</h3>\n    ",n.appendChild(r)})(),(()=>{const n=document.createElement("div");n.classList.add("footer"),n.textContent="Created by Parker Fisher",document.querySelector("body").appendChild(n)})()})();