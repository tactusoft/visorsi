/*! For license information please see 0c2be60a336145c47e3c86a0a3bfdeac.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[27388],{46014:(t,e,i)=>{i.d(e,{E:()=>p,a:()=>h,b:()=>d,g:()=>l,o:()=>c,q:()=>u,t:()=>f});var n=i(30396),o=i(9615),a=i(93658),r=i(33980);const c=150,s=t=>t.reduce(((t,e)=>t+e),0)/t.length,l=t=>{const e=t?.length;return{actionWidth:e?s(t.map((t=>t.clientWidth||0))):0,actionHeight:e?s(t.map((t=>t.clientHeight||0))):0}},d=({layout:t,actionCount:e,actionWidth:i,width:n,actionHeight:o,height:a,groupCount:r})=>Math.max(e-(({width:t,actionWidth:e,layout:i,height:n,actionHeight:o,groupCount:a})=>{const r="horizontal"===i?t:n,c="horizontal"===i?e:o;return Math.floor((r-2*a)/c)})({width:n,actionWidth:i,layout:t,height:a,actionHeight:o,groupCount:r}),0),u=t=>Array.from(t.querySelectorAll("calcite-action")).filter((t=>!t.closest("calcite-action-menu")||t.slot===r.S.trigger)),h=({actionGroups:t,expanded:e,overflowCount:i})=>{let o=i;t.reverse().forEach((t=>{let i=0;const r=u(t).reverse();r.forEach((t=>{t.slot===a.S.menuActions&&(t.removeAttribute("slot"),t.textEnabled=e)})),o>0&&r.some((t=>(r.filter((t=>!t.slot)).length>1&&r.length>2&&!t.closest("calcite-action-menu")&&(t.textEnabled=!0,t.setAttribute("slot",a.S.menuActions),i++,i>1&&o--),o<1))),(0,n.f)(t)}))};function f({parent:t,expanded:e}){u(t).filter((t=>t.slot!==a.S.menuActions)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t=>t.expanded=e))}const p=({expanded:t,intlExpand:e,intlCollapse:i,toggle:a,el:r,position:c,tooltip:s,ref:l,scale:d})=>{const u="rtl"===(0,o.b)(r),h=t?i:e,f=["chevrons-left","chevrons-right"];u&&f.reverse();const p="end"===function(t,e){return t||e.closest("calcite-shell-panel")?.position||"start"}(c,r),g=p?f[1]:f[0],m=p?f[0]:f[1],v=(0,n.h)("calcite-action",{icon:t?g:m,onClick:a,ref:e=>(({tooltip:t,referenceElement:e,expanded:i,ref:n})=>(t&&(t.referenceElement=!i&&e?e:null),n&&n(e),e))({tooltip:s,referenceElement:e,expanded:t,ref:l}),scale:d,text:h,textEnabled:t});return v}},27388:(t,e,i)=>{i.r(e),i.d(e,{calcite_action_bar:()=>p});var n=i(30396),o=i(39591),a=i(9615),r=i(29340),c=i(36578),s=i(77041),l=i(39351),d=i(46014),u=i(58435);const h="bottom-actions",f="expand-tooltip",p=class{constructor(t){(0,n.r)(this,t),this.calciteActionBarToggle=(0,n.c)(this,"calciteActionBarToggle",6),this.mutationObserver=(0,s.c)("mutation",(()=>{const{el:t,expanded:e}=this;(0,d.t)({parent:t,expanded:e}),this.conditionallyOverflowActions()})),this.resizeObserver=(0,s.c)("resize",(t=>this.resizeHandlerEntries(t))),this.actionMenuOpenHandler=t=>{if(t.target.menuOpen){const e=t.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((t=>{e.includes(t)||(t.menuOpen=!1)}))}},this.resizeHandlerEntries=t=>{t.forEach(this.resizeHandler)},this.resizeHandler=t=>{const{width:e,height:i}=t.contentRect;this.resize({width:e,height:i})},this.resize=(0,u.d)((({width:t,height:e})=>{const{el:i,expanded:n,expandDisabled:o,layout:r}=this;if("vertical"===r&&!e||"horizontal"===r&&!t)return;const c=(0,d.q)(i),s=o?c.length:c.length+1,l=Array.from(i.querySelectorAll("calcite-action-group")),u=(0,a.g)(i,h)||!o?l.length+1:l.length,{actionHeight:f,actionWidth:p}=(0,d.g)(c),g=(0,d.b)({layout:r,actionCount:s,actionHeight:f,actionWidth:p,height:e,width:t,groupCount:u});(0,d.a)({actionGroups:l,expanded:n,overflowCount:g})}),d.o),this.conditionallyOverflowActions=()=>{this.overflowActionsDisabled||this.overflowActions()},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.setExpandToggleRef=t=>{this.expandToggleEl=t},this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.overflowActionsDisabled=!1,this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}expandHandler(){this.conditionallyOverflowActions()}expandedHandler(t){(0,d.t)({parent:this.el,expanded:t}),this.conditionallyOverflowActions()}overflowDisabledHandler(t){t?this.resizeObserver.disconnect():this.resizeObserver.observe(this.el)}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}componentDidLoad(){(0,r.s)(this),this.conditionallyOverflowActions()}connectedCallback(){const{el:t,expanded:e}=this;(0,c.c)(this),(0,l.c)(this),(0,d.t)({parent:t,expanded:e}),this.mutationObserver?.observe(t,{childList:!0,subtree:!0}),this.overflowActionsDisabled||this.resizeObserver?.observe(t),this.conditionallyOverflowActions(),(0,o.c)(this)}async componentWillLoad(){(0,r.a)(this),await(0,l.s)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,o.d)(this),(0,c.d)(this),(0,l.d)(this)}async overflowActions(){this.resize({width:this.el.clientWidth,height:this.el.clientHeight})}async setFocus(){await(0,r.c)(this),this.el?.focus()}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,el:i,position:o,toggleExpand:r,scale:c,layout:s,messages:l}=this,u=(0,a.g)(i,f),p=e?null:(0,n.h)(d.E,{el:i,expanded:t,intlCollapse:l.collapse,intlExpand:l.expand,position:o,ref:this.setExpandToggleRef,scale:c,toggle:r,tooltip:u});return(0,a.g)(i,h)||p?(0,n.h)("calcite-action-group",{class:"action-group--bottom",layout:s,scale:c},(0,n.h)("slot",{name:h}),(0,n.h)("slot",{name:f}),p):null}render(){return(0,n.h)(n.H,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,n.h)("slot",null),this.renderBottomActionGroup())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return(0,n.g)(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"],overflowActionsDisabled:["overflowDisabledHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};p.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{pointer-events:auto;display:inline-flex;align-self:stretch;background:transparent;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=horizontal]){flex-direction:row}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-width:0px;border-inline-end-width:1px;border-style:solid}::slotted(calcite-action-group:last-child){border-block-end-width:0px;border-inline-end-width:0px}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px;padding-inline-end:0px}"},39591:(t,e,i)=>{i.d(e,{c:()=>s,d:()=>l});var n=i(30396),o=i(77041);const a=new Set;let r;const c={childList:!0};function s(t){r||(r=(0,o.c)("mutation",d)),r.observe(t.el,c)}function l(t){a.delete(t.el),d(r.takeRecords()),r.disconnect();for(const[t]of a.entries())r.observe(t,c)}function d(t){t.forEach((({target:t})=>{(0,n.f)(t)}))}},58435:(t,e,i)=>{i.d(e,{S:()=>r,a:()=>b,b:()=>g,c:()=>m,d:()=>M,f:()=>n,i:()=>w,r:()=>a});var n="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")(),r=a.Symbol,c=Object.prototype,s=c.hasOwnProperty,l=c.toString,d=r?r.toStringTag:void 0,u=Object.prototype.toString,h="[object Null]",f="[object Undefined]",p=r?r.toStringTag:void 0;function g(t){return null==t?void 0===t?f:h:p&&p in Object(t)?function(t){var e=s.call(t,d),i=t[d];try{t[d]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(e?t[d]=i:delete t[d]),o}(t):function(t){return u.call(t)}(t)}function m(t){return null!=t&&"object"==typeof t}var v="[object Symbol]";function b(t){return"symbol"==typeof t||m(t)&&g(t)==v}var x=/\s/,y=/^\s+/;function w(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var A=NaN,O=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,z=/^0o[0-7]+$/i,C=parseInt;function H(t){if("number"==typeof t)return t;if(b(t))return A;if(w(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=w(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;var i;t=(i=t)?i.slice(0,function(t){for(var e=t.length;e--&&x.test(t.charAt(e)););return e}(i)+1).replace(y,""):i;var n=E.test(t);return n||z.test(t)?C(t.slice(2),n?2:8):O.test(t)?A:+t}var k=function(){return a.Date.now()},D="Expected a function",S=Math.max,j=Math.min;function M(t,e,i){var n,o,a,r,c,s,l=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError(D);function f(e){var i=n,a=o;return n=o=void 0,l=e,r=t.apply(a,i)}function p(t){var i=t-s;return void 0===s||i>=e||i<0||u&&t-l>=a}function g(){var t=k();if(p(t))return m(t);c=setTimeout(g,function(t){var i=e-(t-s);return u?j(i,a-(t-l)):i}(t))}function m(t){return c=void 0,h&&n?f(t):(n=o=void 0,r)}function v(){var t=k(),i=p(t);if(n=arguments,o=this,s=t,i){if(void 0===c)return function(t){return l=t,c=setTimeout(g,e),d?f(t):r}(s);if(u)return clearTimeout(c),c=setTimeout(g,e),f(s)}return void 0===c&&(c=setTimeout(g,e)),r}return e=H(e)||0,w(i)&&(d=!!i.leading,a=(u="maxWait"in i)?S(H(i.maxWait)||0,e):a,h="trailing"in i?!!i.trailing:h),v.cancel=function(){void 0!==c&&clearTimeout(c),l=0,n=s=o=c=void 0},v.flush=function(){return void 0===c?r:m(k())},v}},29340:(t,e,i)=>{i.d(e,{a:()=>a,c:()=>c,s:()=>r});const n=new WeakMap,o=new WeakMap;function a(t){o.set(t,new Promise((e=>n.set(t,e))))}function r(t){n.get(t)()}function c(t){return o.get(t)}},33980:(t,e,i)=>{i.d(e,{C:()=>n,I:()=>a,S:()=>o});const n={menu:"menu",defaultTrigger:"default-trigger"},o={tooltip:"tooltip",trigger:"trigger"},a={menu:"ellipsis"}},93658:(t,e,i)=>{i.d(e,{I:()=>o,S:()=>n});const n={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},o={menu:"ellipsis"}},39351:(t,e,i)=>{i.d(e,{c:()=>u,d:()=>h,s:()=>s,u:()=>d});var n=i(30396),o=i(36578);const a={};function r(){throw new Error("could not fetch component message bundle")}function c(t){t.messages={...t.defaultMessages,...t.messageOverrides}}async function s(t){t.defaultMessages=await l(t,t.effectiveLocale),c(t)}async function l(t,e){const{el:i}=t,c=i.tagName.toLowerCase().replace("calcite-","");return async function(t,e){const i=`${e}_${t}`;return a[i]||(a[i]=fetch((0,n.a)(`./assets/${e}/t9n/messages_${t}.json`)).then((t=>(t.ok||r(),t.json()))).catch((()=>r()))),a[i]}((0,o.g)(e,"t9n"),c)}async function d(t,e){t.defaultMessages=await l(t,e),c(t)}function u(t){t.onMessagesChange=f}function h(t){t.onMessagesChange=void 0}function f(){c(this)}}}]);