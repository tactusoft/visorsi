/*! For license information please see 6958.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[6958],{5611:(e,t,n)=>{function i(){const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}n.d(t,{g:()=>i})},6958:(e,t,n)=>{n.r(t),n.d(t,{calcite_switch:()=>d});var i=n(8641),o=n(2322),r=n(1788),a=n(9336),c=n(5306),l=n(7039),s=n(3844);n(8274);const d=class{constructor(e){(0,i.r)(this,e),this.calciteSwitchChange=(0,i.c)(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&(0,c.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await(0,s.c)(this),(0,o.d)(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){(0,a.c)(this),(0,l.c)(this),(0,r.c)(this)}componentWillLoad(){(0,s.s)(this)}componentDidLoad(){(0,s.a)(this)}disconnectedCallback(){(0,a.d)(this),(0,l.d)(this),(0,r.d)(this)}componentDidRender(){(0,a.u)(this)}render(){return(0,i.h)(i.H,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,i.h)("div",{"aria-checked":(0,o.t)(this.checked),"aria-label":(0,l.g)(this),class:"container",role:"switch",tabIndex:0,ref:this.setSwitchEl},(0,i.h)("div",{class:"track"},(0,i.h)("div",{class:"handle"})),(0,i.h)(r.H,{component:this})))}get el(){return(0,i.a)(this)}};d.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"},1788:(e,t,n)=>{n.d(t,{H:()=>E,a:()=>f,c:()=>u,d:()=>m,f:()=>h,r:()=>d,s:()=>s});var i=n(2322),o=n(8641);!function(e){function t(e,t,n){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",n)}"function"!=typeof e.requestSubmit&&(e.requestSubmit=function(e){e?(function(e,n){e instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==e.type||t(TypeError,"The specified element is not a submit button"),e.form==n||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(e,this),e.click()):((e=document.createElement("input")).type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))})}(HTMLFormElement.prototype);const r="hidden-form-input";function a(e){return"checked"in e}const c=new WeakMap,l=new WeakSet;function s(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function d(e){e.formEl?.reset()}function u(e){const{el:t,value:n}=e,o=h(e);if(!o||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let o=!1;return e.addEventListener(n,(e=>{o=e.composedPath().some((e=>l.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),o}(o,t))return;e.formEl=o,e.defaultValue=n,a(e)&&(e.defaultChecked=e.checked);const r=(e.onFormReset||b).bind(e);o.addEventListener("reset",r),c.set(e.el,r),l.add(t)}function h(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function b(){a(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:n}=e;if(!n)return;const i=c.get(t);n.removeEventListener("reset",i),c.delete(t),e.formEl=null,l.delete(t)}function f(e,t){e.defaultValue=t}const p=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},v=e=>e.removeEventListener("change",p);function k(e,t,n){const{defaultValue:i,disabled:o,form:r,name:c,required:l}=e;t.defaultValue=i,t.disabled=o,t.name=c,t.required=l,t.tabIndex=-1,r?t.setAttribute("form",r):t.removeAttribute("form"),a(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",e.syncHiddenFormInput?.(t)}const E=({component:e})=>(function(e){const{el:t,formEl:n,name:i,value:o}=e,{ownerDocument:a}=t,c=t.querySelectorAll(`input[slot="${r}"]`);if(!n||!i)return void c.forEach((e=>{v(e),e.remove()}));const l=Array.isArray(o)?o:[o],s=[],d=new Set;let u;c.forEach((t=>{const n=l.find((e=>e==t.value));null!=n?(d.add(n),k(e,t,n)):s.push(t)})),l.forEach((t=>{if(d.has(t))return;let n=s.pop();n||(n=a.createElement("input"),n.slot=r),u||(u=a.createDocumentFragment()),u.append(n),n.addEventListener("change",p),k(e,n,t)})),u&&t.append(u),s.forEach((e=>{v(e),e.remove()}))}(e),(0,o.h)("slot",{name:r}))},9336:(e,t,n)=>{n.d(t,{c:()=>f,d:()=>p,u:()=>u});var i=n(5611);const o=/firefox/i.test((0,i.g)()),r=o?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function c(e){const t=e.target;if(o&&!r.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const l=["mousedown","mouseup","click"];function s(e){if(o&&!r.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const d={capture:!0};function u(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void h(e);m(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function h(e){var t;e.el.click=a,(t=o?b(e):e.el)&&(t.addEventListener("pointerdown",c,d),l.forEach((e=>t.addEventListener(e,s,d))))}function b(e){return r.get(e.el)}function m(e){var t;delete e.el.click,(t=o?b(e):e.el)&&(t.removeEventListener("pointerdown",c,d),l.forEach((e=>t.removeEventListener(e,s,d))))}function f(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;r.set(e.el,t),h(e)}function p(e){o&&(r.delete(e.el),m(e))}},5306:(e,t,n)=>{function i(e){return"Enter"===e||" "===e}n.d(t,{i:()=>i,n:()=>o});const o=["0","1","2","3","4","5","6","7","8","9"]},7039:(e,t,n)=>{n.d(t,{a:()=>a,c:()=>m,d:()=>f,g:()=>v,l:()=>r});var i=n(2322);const o="calciteInternalLabelClick",r="calciteInternalLabelConnected",a="calciteInternalLabelDisconnected",c="calcite-label",l=new WeakMap,s=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakSet,b=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:`${c}[for="${t}"]`});if(n)return n;const o=(0,i.c)(e,c);return!o||function(e,t){let n;const i="custom-element-ancestor-check",o=i=>{i.stopImmediatePropagation();const o=i.composedPath();n=o.slice(o.indexOf(t),o.indexOf(e))};e.addEventListener(i,o,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,o);return n.filter((n=>n!==t&&n!==e)).filter((e=>e.tagName?.includes("-"))).length>0}(o,e)?null:o};function m(e){const t=b(e.el);if(s.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=g.bind(e);if(t){e.labelEl=t;const i=l.get(t)||[];i.push(e),l.set(t,i.sort(p)),s.has(e.labelEl)||(s.set(e.labelEl,k),e.labelEl.addEventListener(o,k)),h.delete(e),document.removeEventListener(r,d.get(e)),u.set(e,n),document.addEventListener(a,n)}else h.has(e)||(n(),document.removeEventListener(a,u.get(e)))}function f(e){if(h.delete(e),document.removeEventListener(r,d.get(e)),document.removeEventListener(a,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=l.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(o,s.get(e.labelEl)),s.delete(e.labelEl)),l.set(e.labelEl,t.filter((t=>t!==e)).sort(p)),e.labelEl=null}function p(e,t){return(0,i.k)(e.el,t.el)?-1:1}function v(e){return e.label||e.labelEl?.textContent?.trim()||""}function k(e){const t=e.detail.sourceEvent.target,n=l.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const o=n[0];o.disabled||o.onLabelClick(e)}function E(){h.has(this)&&m(this)}function g(){h.add(this);const e=d.get(this)||E.bind(this);d.set(this,e),document.addEventListener(r,e)}},3844:(e,t,n)=>{n.d(t,{a:()=>c,b:()=>l,c:()=>s,s:()=>a});var i=n(8641);const o=new WeakMap,r=new WeakMap;function a(e){r.set(e,new Promise((t=>o.set(e,t))))}function c(e){o.get(e)()}function l(e){return r.get(e)}async function s(e){return await l(e),(0,i.f)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);