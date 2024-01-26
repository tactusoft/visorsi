/*! For license information please see 8732.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[8732],{5611:(e,t,n)=>{function a(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>a})},8732:(e,t,n)=>{n.r(t),n.d(t,{calcite_flow_item:()=>d});var a=n(8641),o=n(2322),i=n(9336),s=n(3844),c=n(4879),l=n(339),r=n(8698);n(8274);const d=class{constructor(e){(0,a.r)(this,e),this.calciteFlowItemBack=(0,a.c)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,a.c)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,a.c)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,a.c)(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,i.c)(this),(0,c.c)(this),(0,l.c)(this)}async componentWillLoad(){await(0,l.s)(this),(0,s.s)(this)}componentDidRender(){(0,i.u)(this)}disconnectedCallback(){(0,i.d)(this),(0,c.d)(this),(0,l.d)(this)}componentDidLoad(){(0,s.a)(this)}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async setFocus(){await(0,s.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){await(this.containerEl?.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,o.g)(e),{showBackButton:n,backButtonClick:i,messages:s}=this,c=s.back,l=t?"chevron-right":"chevron-left";return n?(0,a.h)("calcite-action",{"aria-label":c,class:"back-button",icon:l,key:"flow-back-button",onClick:i,scale:"s",slot:"header-actions-start",text:c,title:c,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:n,closable:o,closed:i,description:s,disabled:c,heading:l,headingLevel:d,loading:h,menuOpen:u,messages:f}=this;return(0,a.h)(a.H,null,(0,a.h)("calcite-panel",{closable:o,closed:i,collapseDirection:t,collapsed:e,collapsible:n,description:s,disabled:c,heading:l,headingLevel:d,loading:h,menuOpen:u,messageOverrides:f,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),(0,a.h)("slot",{name:"action-bar",slot:r.S.actionBar}),(0,a.h)("slot",{name:"header-actions-start",slot:r.S.headerActionsStart}),(0,a.h)("slot",{name:"header-actions-end",slot:r.S.headerActionsEnd}),(0,a.h)("slot",{name:"header-content",slot:r.S.headerContent}),(0,a.h)("slot",{name:"header-menu-actions",slot:r.S.headerMenuActions}),(0,a.h)("slot",{name:"fab",slot:r.S.fab}),(0,a.h)("slot",{name:"footer-actions",slot:r.S.footerActions}),(0,a.h)("slot",{name:"footer",slot:r.S.footer}),(0,a.h)("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return(0,a.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};d.style=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"},9336:(e,t,n)=>{n.d(t,{c:()=>g,d:()=>p,u:()=>h});var a=n(5611);const o=/firefox/i.test((0,a.g)()),i=o?new WeakMap:null;function s(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(o&&!i.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const l=["mousedown","mouseup","click"];function r(e){if(o&&!i.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);b(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=s,(t=o?f(e):e.el)&&(t.addEventListener("pointerdown",c,d),l.forEach((e=>t.addEventListener(e,r,d))))}function f(e){return i.get(e.el)}function b(e){var t;delete e.el.click,(t=o?f(e):e.el)&&(t.removeEventListener("pointerdown",c,d),l.forEach((e=>t.removeEventListener(e,r,d))))}function g(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;i.set(e.el,t),u(e)}function p(e){o&&(i.delete(e.el),b(e))}},3844:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>l,c:()=>r,s:()=>s});var a=n(8641);const o=new WeakMap,i=new WeakMap;function s(e){i.set(e,new Promise((t=>o.set(e,t))))}function c(e){o.get(e)()}function l(e){return i.get(e)}async function r(e){return await l(e),(0,a.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},8698:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>o,S:()=>i});const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},o={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},i={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"}},339:(e,t,n)=>{n.d(t,{c:()=>h,d:()=>u,s:()=>l,u:()=>d});var a=n(8641),o=n(4879);const i={};function s(){throw new Error("could not fetch component message bundle")}function c(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function l(e){e.defaultMessages=await r(e,e.effectiveLocale),c(e)}async function r(e,t){const{el:n}=e,c=n.tagName.toLowerCase().replace("calcite-","");return async function(e,t){const n=`${t}_${e}`;return i[n]||(i[n]=fetch((0,a.g)(`./assets/${t}/t9n/messages_${e}.json`)).then((e=>(e.ok||s(),e.json()))).catch((()=>s()))),i[n]}((0,o.g)(t,"t9n"),c)}async function d(e,t){e.defaultMessages=await r(e,t),c(e)}function h(e){e.onMessagesChange=f}function u(e){e.onMessagesChange=void 0}function f(){c(this)}}}]);