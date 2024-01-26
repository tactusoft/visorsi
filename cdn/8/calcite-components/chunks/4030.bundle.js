/*! For license information please see 4030.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4030,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},4259:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteTable:()=>m,defineCustomElement:()=>b});var s=i(7210),a=i(6265),l=i(3801),o=i(9417),n=i(4426),c=i(9281),r=i(8569),h=i(4586),d=i(2708),u=i(6925);const g=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableSelect=(0,s.yM)(this,"calciteTableSelect",6),this.calciteTablePageChange=(0,s.yM)(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=(0,s.yM)(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=e=>e?.assignedElements({flatten:!0})?.filter((e=>e?.matches("calcite-table-row"))),this.updateRows=()=>{const e=this.getSlottedRows(this.tableHeadSlotEl)||[],t=this.getSlottedRows(this.tableBodySlotEl)||[],i=this.getSlottedRows(this.tableFootSlotEl)||[],s=[...e,...t,...i];e?.forEach((t=>{const i=e?.indexOf(t);t.rowType="head",t.positionSection=i,t.positionSectionLocalized=this.localizeNumber((i+1).toString())})),t?.forEach((e=>{const i=t?.indexOf(e);e.rowType="body",e.positionSection=i,e.positionSectionLocalized=this.localizeNumber((i+1).toString())})),i?.forEach((e=>{const t=i?.indexOf(e);e.rowType="foot",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),s?.forEach((e=>{e.selectionMode=this.selectionMode,e.bodyRowCount=t?.length,e.positionAll=s?.indexOf(e),e.numbered=this.numbered,e.scale=this.scale,e.readCellContentsToAT=this.readCellContentsToAT}));const a=e[0]?.cellCount||e[0]?.querySelectorAll("calcite-table-header")?.length;this.colCount=a,this.headRows=e,this.bodyRows=t,this.footRows=i,this.allRows=s,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{const e=this.paginationEl?.startItem;this.pageStartRow=e||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{this.bodyRows?.forEach((e=>{const t=e.positionSection+1,i=t>=this.pageStartRow&&t<this.pageStartRow+this.pageSize;e.hidden=this.pageSize>0&&!i&&!this.footRows.includes(e)}))},this.updateSelectedItems=e=>{const t=this.bodyRows?.filter((e=>e.selected));this.selectedItems=t,this.selectedCount=t?.length,this.allRows?.forEach((e=>{e.selectedRowCount=this.selectedCount,e.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)})),e&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{this.bodyRows?.forEach((e=>{e.selected=!1})),this.updateSelectedItems(!0)},this.setSelectedItems=e=>{this.bodyRows?.forEach((t=>{t.selected="head"===e?.rowType?this.selectedCount!==this.bodyRows?.length:e===t?!t.selected:"multiple"===this.selectionMode&&t.selected})),this.updateSelectedItems(!0)},this.localizeNumber=e=>(o.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},o.n.localize(e.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.zebra=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,a.a)(this),await(0,l.s)(this),this.readCellContentsToAT=/safari/i.test((0,n.g)()),this.updateRows()}componentDidLoad(){(0,a.s)(this)}connectedCallback(){(0,o.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this)}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(e.target)}calciteInternalTableRowFocusEvent(e){const t=e.detail.cellPosition,i=e.detail.rowPosition,s=e.detail.destination,a=e.detail.lastCell,l=this.bodyRows?.filter((e=>!e.hidden)),o=this.allRows?.filter((e=>!e.hidden)),n=this.headRows[this.headRows.length-1]?.positionAll,c=l[0]?.positionAll,r=l[l.length-1]?.positionAll,h=this.footRows[0]?.positionAll,d=o[o.length-1]?.positionAll,u="next"===s&&i===n,g="previous"===s&&i===h,p="previous"===s&&i===c,m="next"===s&&i===r;let b;switch(s){case"first":b=0;break;case"last":b=d;break;case"next":b=u?c:m?h:i+1;break;case"previous":b=g?r:p?n:i-1}const f=this.allRows?.find((e=>e.positionAll===b))?.cellCount,v=t>f?f:t;void 0!==b&&this.calciteInternalTableRowFocusChange.emit({cellPosition:v,rowPosition:b,destination:s,lastCell:a})}renderSelectionArea(){const e=this.selectedItems?.filter((e=>e.hidden))?.length,t=this.localizeNumber(e?.toString()),i=`${this.localizeNumber(this.selectedCount?.toString())} ${this.messages.selected}`,a=`${t} ${this.messages.hiddenSelected}`;return(0,s.h)("div",{class:"selection-area"},(0,s.h)("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:i},i),e>0&&(0,s.h)("calcite-chip",{icon:"hide-empty",scale:this.scale,title:a,value:a},t),this.selectedCount>0&&(0,s.h)("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:`${this.messages.clear} ${i} ${this.messages.row}`},this.messages.clear),(0,s.h)("div",{class:"selection-actions"},(0,s.h)("slot",{name:"selection-actions"})))}renderPaginationArea(){return(0,s.h)("div",{class:"pagination-area"},(0,s.h)("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,scale:this.scale,startItem:1,totalItems:this.bodyRows?.length,ref:e=>this.paginationEl=e}))}renderTHead(){return(0,s.h)("thead",null,(0,s.h)("slot",{name:"table-header",onSlotchange:this.updateRows,ref:e=>this.tableHeadSlotEl=e}))}renderTBody(){return(0,s.h)("tbody",null,(0,s.h)("slot",{onSlotchange:this.updateRows,ref:e=>this.tableBodySlotEl=e}))}renderTFoot(){return(0,s.h)("tfoot",null,(0,s.h)("slot",{name:"table-footer",onSlotchange:this.updateRows,ref:e=>this.tableFootSlotEl=e}))}render(){return(0,s.h)(s.AA,null,(0,s.h)("div",{class:"container"},"none"!==this.selectionMode&&this.renderSelectionArea(),(0,s.h)("div",{class:{bordered:this.bordered,zebra:this.zebra,"table-container":!0}},(0,s.h)("table",{"aria-colcount":this.colCount,"aria-multiselectable":"multiple"===this.selectionMode,"aria-readonly":!0,"aria-rowcount":this.allRows?.length,class:{"table--fixed":"fixed"===this.layout},role:"grid"},(0,s.h)("caption",{class:"assistive-text"},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{groupSeparator:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:table}.container{max-inline-size:100vw;inline-size:100%}.table-container{overflow-x:auto;white-space:nowrap}.table-container:not(.bordered){border-block-end:1px solid var(--calcite-ui-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll;border-block-start:1px solid var(--calcite-ui-border-3);border-inline-start:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3)}tbody{border-block-end:1px solid var(--calcite-ui-border-3)}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-ui-border-3)}.zebra ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-ui-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-table",{bordered:[516],caption:[1],groupSeparator:[516,"group-separator"],layout:[513],numbered:[516],numberingSystem:[513,"numbering-system"],pageSize:[514,"page-size"],scale:[513],selectionMode:[513,"selection-mode"],zebra:[516],selectedItems:[1040],messages:[1040],messageOverrides:[1040],colCount:[32],pageStartRow:[32],selectedCount:[32],readCellContentsToAT:[32],defaultMessages:[32],effectiveLocale:[32]},[[0,"calciteTableRowSelect","calciteChipSelectListener"],[0,"calciteInternalTableRowFocusRequest","calciteInternalTableRowFocusEvent"]]]);function p(){"undefined"!=typeof customElements&&["calcite-table","calcite-button","calcite-chip","calcite-icon","calcite-loader","calcite-pagination"].forEach((e=>{switch(e){case"calcite-table":customElements.get(e)||customElements.define(e,g);break;case"calcite-button":customElements.get(e)||(0,c.d)();break;case"calcite-chip":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,d.d)();break;case"calcite-pagination":customElements.get(e)||(0,u.d)()}}))}p();const m=g,b=p},6925:(e,t,i)=>{"use strict";i.d(t,{P:()=>d,d:()=>u});var s=i(7210),a=i(6265),l=i(9417),o=i(3801),n=i(5545),c=i(4649),r=i(4586);const h="is-disabled",d=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=(0,s.yM)(this,"calcitePaginationChange",6),this.resizeObserver=(0,n.c)("resize",(e=>e.forEach(this.resizeHandler))),this.resizeHandler=({contentRect:{width:e}})=>this.setMaxItemsToBreakpoint(e),this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=5,this.totalPages=void 0}onMessagesChange(){}handleTotalPages(){this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}effectiveLocaleWatcher(){l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}connectedCallback(){(0,l.c)(this),(0,o.c)(this),this.resizeObserver?.observe(this.el)}async componentWillLoad(){const[,e]=await Promise.all([(0,o.s)(this),(0,c.g)()]);this.breakpoints=e,(0,a.a)(this),this.handleTotalPages()}componentDidLoad(){(0,a.s)(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){(0,l.d)(this),(0,o.d)(this),this.resizeObserver?.disconnect()}async setFocus(){await(0,a.c)(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.getLastStart(),this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}setMaxItemsToBreakpoint(e){const{breakpoints:t}=this;t&&e&&(e>=t.width.medium?this.maxItems=11:e>=t.width.small?this.maxItems=9:e>=t.width.xsmall?this.maxItems=7:this.maxItems=5)}getLastStart(){const{totalItems:e,pageSize:t,totalPages:i}=this;return 1+(e%t==0?e-t:Math.floor(i)*t)}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-2-2}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-2-1}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return(0,s.h)("span",{class:{ellipsis:!0,"ellipsis--start":"start"===e,"ellipsis--end":"end"===e},key:e},"…")}renderItems(){const{totalItems:e,pageSize:t,startItem:i,maxItems:s,totalPages:a}=this,l=[],o=e>t,n=this.showStartEllipsis(),c=this.showEndEllipsis(),r=this.getLastStart();o&&l.push(this.renderPage(1)),n&&l.push(this.renderEllipsis("start"));const h=s-2-(c?1:0)-(n?1:0);let d,u;a-1<=h?(u=1+t,d=r-t):i/t<h?(u=1+t,d=1+h*t):i+h*t>=e?(u=r-h*t,d=r-t):(u=i-t*((h-1)/2),d=i+t*((h-1)/2));for(let e=0;e<h&&u<=d;e++)l.push(this.renderPage(u)),u+=t;return c&&l.push(this.renderEllipsis("end")),l.push(this.renderPage(r)),l}renderPage(e){const{pageSize:t}=this,i=Math.floor(e/t)+(1===t?0:1);l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=l.n.localize(i.toString()),o=e===this.startItem;return(0,s.h)("button",{"aria-current":o?"page":"false",class:{page:!0,"is-selected":o},onClick:this.handlePageClick,value:e},a)}render(){const{totalItems:e,pageSize:t,startItem:i,messages:a,scale:l}=this,o=1===t?i<=t:i<t,n=i+t>e,c="l"===l?"m":"s";return(0,s.h)(s.HY,null,(0,s.h)("button",{"aria-label":a.previous,class:{previous:!0,[h]:o},disabled:o,onClick:this.previousClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:"chevronLeft",scale:c})),this.renderItems(),(0,s.h)("button",{"aria-label":a.next,class:{next:!0,[h]:n},disabled:n,onClick:this.nextClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:"chevronRight",scale:c})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],pageSize:["handleTotalPages"],totalItems:["handleTotalPages"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"]}}static get style(){return":host{display:flex;writing-mode:horizontal-tb}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .previous,:host([scale=l]) .next{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.previous,.next,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3)}.previous,.next,.page{cursor:pointer;border-block:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{pointer-events:none;background-color:transparent}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[514,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],setFocus:[64],nextPage:[64],previousPage:[64]}]);function u(){"undefined"!=typeof customElements&&["calcite-pagination","calcite-icon"].forEach((e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,d);break;case"calcite-icon":customElements.get(e)||(0,r.d)()}}))}u()},4649:(e,t,i)=>{"use strict";let s;function a(e,t){return parseInt(e.getPropertyValue(t))}async function l(){return s||(s=new Promise((e=>{requestAnimationFrame((()=>{const t=getComputedStyle(document.body);e({width:{large:a(t,"--calcite-app-breakpoint-width-lg"),medium:a(t,"--calcite-app-breakpoint-width-md"),small:a(t,"--calcite-app-breakpoint-width-sm"),xsmall:a(t,"--calcite-app-breakpoint-width-xs")}})}))})),s)}i.d(t,{g:()=>l})}}]);