/*! For license information please see 5610.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[5610],{5610:(t,i,a)=>{a.r(i),a.d(i,{calcite_split_button:()=>c});var e=a(861),n=a(1402),o=a(6591);const c=class{constructor(t){(0,e.r)(this,t),this.calciteSplitButtonPrimaryClick=(0,e.c)(this,"calciteSplitButtonPrimaryClick",6),this.calciteSplitButtonSecondaryClick=(0,e.c)(this,"calciteSplitButtonSecondaryClick",6),this.calciteSplitButtonPrimaryClickHandler=()=>this.calciteSplitButtonPrimaryClick.emit(),this.calciteSplitButtonSecondaryClickHandler=()=>this.calciteSplitButtonSecondaryClick.emit(),this.appearance="solid",this.kind="brand",this.disabled=!1,this.active=!1,this.dropdownIconType="chevron",this.dropdownLabel=void 0,this.loading=!1,this.overlayPositioning="absolute",this.primaryIconEnd=void 0,this.primaryIconFlipRtl=void 0,this.primaryIconStart=void 0,this.primaryLabel=void 0,this.primaryText=void 0,this.scale="m",this.width="auto"}handleDisabledChange(t){t||(this.active=!1)}activeHandler(){this.disabled&&(this.active=!1)}async setFocus(){await(0,o.c)(this),this.el.focus()}componentWillLoad(){(0,o.s)(this)}componentDidLoad(){(0,o.a)(this)}componentDidRender(){(0,n.u)(this)}render(){const t={"split-button__container":!0,"width-auto":"auto"===this.width,"width-half":"half"===this.width,"width-full":"full"===this.width},i="auto"===this.width?"auto":"full";return(0,e.h)("div",{class:t},(0,e.h)("calcite-button",{appearance:this.appearance,disabled:this.disabled,"icon-end":this.primaryIconEnd?this.primaryIconEnd:null,"icon-start":this.primaryIconStart?this.primaryIconStart:null,iconFlipRtl:this.primaryIconFlipRtl?this.primaryIconFlipRtl:null,kind:this.kind,label:this.primaryLabel,loading:this.loading,onClick:this.calciteSplitButtonPrimaryClickHandler,scale:this.scale,splitChild:"primary",type:"button",width:i},this.primaryText),(0,e.h)("div",{class:"split-button__divider-container"},(0,e.h)("div",{class:"split-button__divider"})),(0,e.h)("calcite-dropdown",{disabled:this.disabled,onClick:this.calciteSplitButtonSecondaryClickHandler,open:this.active,overlayPositioning:this.overlayPositioning,placement:"bottom-end",scale:this.scale,width:this.scale},(0,e.h)("calcite-button",{appearance:this.appearance,disabled:this.disabled,"icon-start":this.dropdownIcon,kind:this.kind,label:this.dropdownLabel,scale:this.scale,slot:"trigger",splitChild:"secondary",type:"button"}),(0,e.h)("slot",null)))}get dropdownIcon(){return"chevron"===this.dropdownIconType?"chevronDown":"caret"===this.dropdownIconType?"caretDown":"ellipsis"===this.dropdownIconType?"ellipsis":"handle-vertical"}static get delegatesFocus(){return!0}get el(){return(0,e.a)(this)}static get watchers(){return{disabled:["handleDisabledChange"],active:["activeHandler"]}}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}:host .split-button__container{display:flex;align-items:stretch}:host .split-button__container>calcite-dropdown>calcite-button{block-size:100%;vertical-align:top}:host:host([kind=brand]){--calcite-split-button-background:var(--calcite-ui-brand);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=danger]){--calcite-split-button-background:var(--calcite-ui-danger);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host:host([kind=neutral]){--calcite-split-button-background:var(--calcite-ui-foreground-3);--calcite-split-button-divider:var(--calcite-ui-text-1)}:host:host([kind=inverse]){--calcite-split-button-background:var(--calcite-ui-inverse);--calcite-split-button-divider:var(--calcite-ui-foreground-1)}:host([appearance=transparent]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=transparent]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=transparent]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-text-1)}:host([appearance=transparent]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-foreground-1);--calcite-split-button-background:transparent}:host([appearance=outline]),:host([appearance=transparent]){--calcite-split-button-background:transparent}:host([appearance=outline-fill]){--calcite-split-button-background:var(--calcite-ui-foreground-1)}:host([appearance=outline]):host([kind=brand]),:host([appearance=outline-fill]):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand)}:host([appearance=outline]):host([kind=danger]),:host([appearance=outline-fill]):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger)}:host([appearance=outline]):host([kind=neutral]),:host([appearance=outline-fill]):host([kind=neutral]){--calcite-split-button-divider:var(--calcite-ui-foreground-3)}:host([appearance=outline]):host([kind=inverse]),:host([appearance=outline-fill]):host([kind=inverse]){--calcite-split-button-divider:var(--calcite-ui-inverse)}.width-auto{inline-size:auto}.width-half{inline-size:50%}.width-full{inline-size:100%}.split-button__divider-container{display:flex;inline-size:1px;align-items:stretch;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background-color:var(--calcite-split-button-background)}.split-button__divider{margin-block:0.25rem;display:inline-block;inline-size:1px;background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]) .split-button__divider-container,:host([appearance=outline]) .split-button__divider-container{border-block:1px solid var(--calcite-split-button-divider)}:host([appearance=outline-fill]):hover .split-button__divider-container,:host([appearance=outline]):hover .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:hover) .split-button__divider-container,:host([appearance=outline]:hover) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([appearance=outline-fill]:focus-within):host([kind=brand]),:host([appearance=outline]:focus-within):host([kind=brand]){--calcite-split-button-divider:var(--calcite-ui-brand-press)}:host([appearance=outline-fill]:focus-within):host([kind=danger]),:host([appearance=outline]:focus-within):host([kind=danger]){--calcite-split-button-divider:var(--calcite-ui-danger-press)}:host([appearance=outline-fill]:focus-within) .split-button__divider-container,:host([appearance=outline]:focus-within) .split-button__divider-container{background-color:var(--calcite-split-button-divider)}:host([disabled]) .split-button__divider-container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) calcite-dropdown>calcite-button{pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},1402:(t,i,a)=>{function e(){const{disabled:t}=this;t||HTMLElement.prototype.click.call(this)}function n(t){t.preventDefault()}a.d(i,{u:()=>r});const o=["mousedown","mouseup","click"];function c(t){const{disabled:i}=t.target;i&&(t.stopImmediatePropagation(),t.preventDefault())}const l={capture:!0};function r(t,i=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),t.el.click=e,t.el.addEventListener("pointerdown",n,l),void o.forEach((i=>t.el.addEventListener(i,c,l)));t.el.click=HTMLElement.prototype.click,t.el.removeEventListener("pointerdown",n,l),o.forEach((i=>t.el.removeEventListener(i,c,l))),"function"==typeof i?t.el.setAttribute("tabindex",i.call(t)?"0":"-1"):!0===i?t.el.setAttribute("tabindex","0"):!1===i&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}},6591:(t,i,a)=>{a.d(i,{a:()=>c,c:()=>l,s:()=>o});const e=new WeakMap,n=new WeakMap;function o(t){n.set(t,new Promise((i=>e.set(t,i))))}function c(t){e.get(t)()}function l(t){return n.get(t)}}}]);