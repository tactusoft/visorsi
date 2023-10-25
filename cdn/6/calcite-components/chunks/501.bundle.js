/*! For license information please see 501.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[501],{1033:(e,t,n)=>{n.d(t,{H:()=>o,c:()=>i});var a=n(861);function i(e){return Math.min(Math.max(Math.ceil(e),1),6)}const o=(e,t)=>{const n=e.level?`h${e.level}`:"div";return delete e.level,(0,a.h)(n,{...e},t)}},501:(e,t,n)=>{n.r(t),n.d(t,{calcite_panel:()=>g});var a=n(861),i=n(6077),o=n(1402),r=n(6591),s=n(1338),c=n(8110),l=n(1033),d=n(3866),h=n(3862),m=n(7572);n(5603);const g=class{constructor(e){(0,a.r)(this,e),this.calcitePanelClose=(0,a.c)(this,"calcitePanelClose",6),this.calcitePanelScroll=(0,a.c)(this,"calcitePanelScroll",6),this.resizeObserver=(0,s.c)("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setCloseRef=e=>{this.closeButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasStartActions=!!t.length},this.handleHeaderActionsEndSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasEndActions=!!t.length},this.handleHeaderMenuActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasMenuItems=!!t.length},this.handleActionBarSlotChange=e=>{const t=(0,i.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasHeaderContent=!!t.length},this.handleFooterSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterContent=!!t.length},this.handleFooterActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterActions=!!t.length},this.handleFabSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFab=!!t.length},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,h.c)(this),(0,m.c)(this)}async componentWillLoad(){(0,r.s)(this),await(0,m.s)(this)}componentDidLoad(){(0,r.a)(this)}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){(0,h.d)(this),(0,m.d)(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){(0,m.u)(this,this.effectiveLocale)}async setFocus(){await(0,r.c)(this),(0,i.p)(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:i}=this,o=e?(0,a.h)(l.H,{class:d.C.heading,level:t},e):null,r=n?(0,a.h)("span",{class:d.C.description},n):null;return i||!o&&!r?null:(0,a.h)("div",{class:d.C.headerContent,key:"header-content"},o,r)}renderActionBar(){return(0,a.h)("div",{class:d.C.actionBarContainer,hidden:!this.hasActionBar},(0,a.h)("slot",{name:d.S.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return(0,a.h)("div",{class:d.C.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},(0,a.h)("slot",{name:d.S.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,a.h)("div",{class:{[d.C.headerActionsStart]:!0,[d.C.headerActions]:!0},hidden:!e,key:"header-actions-start"},(0,a.h)("slot",{name:d.S.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:e,hasEndActions:t,messages:n,closable:i,hasMenuItems:o}=this,r=n.close,s=i?(0,a.h)("calcite-action",{"aria-label":r,"data-test":"close",icon:d.I.close,onClick:e,text:r,ref:this.setCloseRef}):null,c=(0,a.h)("slot",{name:d.S.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),l=t||s||o;return(0,a.h)("div",{class:{[d.C.headerActionsEnd]:!0,[d.C.headerActions]:!0},hidden:!l,key:"header-actions-end"},c,this.renderMenu(),s)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n}=this;return(0,a.h)("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,placement:"bottom-end"},(0,a.h)("calcite-action",{icon:d.I.menu,slot:c.S.trigger,text:t.options}),(0,a.h)("slot",{name:d.S.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:i,hasMenuItems:o}=this,r=this.renderHeaderContent(),s=e||r||t||n||i||o;return(0,a.h)("header",{class:d.C.header,hidden:!s},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),r,this.renderHeaderActionsEnd())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,n=e||t;return(0,a.h)("footer",{class:d.C.footer,hidden:!n},(0,a.h)("slot",{key:"footer-slot",name:d.S.footer,onSlotchange:this.handleFooterSlotChange}),(0,a.h)("slot",{key:"footer-actions-slot",name:d.S.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const{hasFab:e}=this,t=(0,a.h)("slot",{key:"default-slot"}),n=e?(0,a.h)("section",{class:d.C.contentContainer},t):t;return(0,a.h)("div",{class:{[d.C.contentWrapper]:!0,[d.C.contentContainer]:!e,[d.C.contentHeight]:e},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},n,this.renderFab())}renderFab(){return(0,a.h)("div",{class:d.C.fabContainer,hidden:!this.hasFab},(0,a.h)("slot",{name:d.S.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:n,closable:o}=this,r=(0,a.h)("article",{"aria-busy":(0,i.t)(e),class:d.C.container,hidden:n,onKeyDown:t,tabIndex:o?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderActionBar(),this.renderContent(),this.renderFooterNode());return(0,a.h)(a.F,null,e?(0,a.h)("calcite-scrim",{loading:e}):null,r)}static get assetsDirs(){return["assets"]}get el(){return(0,a.a)(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.action-bar-container{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;border-block-end-color:var(--calcite-ui-border-3)}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;padding:var(--calcite-panel-footer-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}"},1402:(e,t,n)=>{function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function i(e){e.preventDefault()}n.d(t,{u:()=>c});const o=["mousedown","mouseup","click"];function r(e){const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function c(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),e.el.click=a,e.el.addEventListener("pointerdown",i,s),void o.forEach((t=>e.el.addEventListener(t,r,s)));e.el.click=HTMLElement.prototype.click,e.el.removeEventListener("pointerdown",i,s),o.forEach((t=>e.el.removeEventListener(t,r,s))),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}},6591:(e,t,n)=>{n.d(t,{a:()=>r,c:()=>s,s:()=>o});const a=new WeakMap,i=new WeakMap;function o(e){i.set(e,new Promise((t=>a.set(e,t))))}function r(e){a.get(e)()}function s(e){return i.get(e)}},3866:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>i,S:()=>o});const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",contentContainer:"content-container",contentHeight:"content-height",fabContainer:"fab-container",footer:"footer"},i={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right"},o={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"}},8110:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>o,S:()=>i});const a={menu:"menu",defaultTrigger:"default-trigger"},i={tooltip:"tooltip",trigger:"trigger"},o={menu:"ellipsis"}}}]);