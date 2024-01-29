define(["exports","./index-86304dcd","./index2-600fb1b2","./analysis-expression-group2-0d72ca83","./utils-2b3d82c1","./analysis-attribute-expression2-f34aed10","./analysis-label2-b880686f","./analysis-query-builder2-19c561dd","./analysis-query-entry2-c95d7a4d","./analysis-query-modal2-d2d9489a","./analysis-query-target-select2-b8d3432e","./analysis-spatial-expression2-90d05c57"],(function(e,s,t,a,i,r,l,n,o,d,u,h){"use strict";const y=s.proxyCustomElement(class extends s.H{constructor(){super(),this.__registerHost(),this.analysisQueryInputChange=s.createEvent(this,"analysisQueryInputChange",7),this.analysisHelpClick=s.createEvent(this,"analysisHelpClick",7),this.openModal=()=>{var e,s,t;this.queryModal=document.createElement("analysis-query-modal"),this.queryModal.target=null!==(t=null!==(e=this.layer)&&void 0!==e?e:null===(s=this.expressionGroup)||void 0===s?void 0:s.layer)&&void 0!==t?t:this.combinedLayers[0],this.queryModal.expressionGroup=this.expressionGroup,this.queryModal.layers=this.combinedLayers,this.queryModal.recordsTerm=this.recordsTerm,this.queryModal.mode=this.mode,this.queryModal.open=!0,this.queryModal.options=this.options,this.hasValue&&void 0!==this.value&&(this.queryModal.value=this.value),this.queryModal.addEventListener("analysisQueryModalAdd",this.onQueryModalAddClick),this.queryModal.addEventListener("analysisQueryModalError",this.onQueryModalError),this.queryModal.addEventListener("analysisQueryModalDismissed",this.onQueryModalDismissed),document.body.appendChild(this.queryModal)},this.closeModal=()=>{var e,s,t,a;null===(e=this.queryModal)||void 0===e||e.removeEventListener("analysisQueryModalAdd",this.onQueryModalAddClick),null===(s=this.queryModal)||void 0===s||s.removeEventListener("analysisQueryModalError",this.onQueryModalError),null===(t=this.queryModal)||void 0===t||t.removeEventListener("analysisQueryModalDismissed",this.onQueryModalDismissed),null===(a=this.queryModal)||void 0===a||a.remove()},this.onQueryModalError=e=>{this.errorMessage=e.detail},this.onQueryModalAddClick=e=>{const s=e.detail;this.value=this.serializeExpressionGroup(s),this.analysisQueryInputChange.emit(this.value),this.validate()},this.serializeExpressionGroup=e=>{let s;if("sql"===this.mode)s=null==e?void 0:e.toSQL();else{const t=null==e?void 0:e.toJSON(this.combinedLayers,this.mapView);void 0!==(null==t?void 0:t.expressions)&&void 0!==(null==t?void 0:t.inputLayers)&&(s={expressions:null==t?void 0:t.expressions,inputLayers:null==t?void 0:t.inputLayers})}return s},this.onQueryModalDismissed=()=>{this.closeModal(),this.validate()},this.onDeleteQuery=()=>{this.value=void 0,this.analysisQueryInputChange.emit(void 0),this.validate()},this.combinedLayers=void 0,this.valueLabel=void 0,this.errorMessage=void 0,this.loading=!0,this.expressionGroup=void 0,this.label=void 0,this.required=!1,this.mode="analysis",this.value=void 0,this.mapLayers=[],this.recordsTerm="features",this.disabledTooltip=void 0,this.options=void 0,this.mapView=void 0,this.layer=void 0}async valueChange(){"analysis"===this.mode&&(this.combinedLayers=this.reorderInputAndMapLayers()),this.expressionGroup=await this.parseValue(),await this.setValueLabel()}reorderInputAndMapLayers(){var e,s,t;const a=null===(e=this.filteredMapLayers)||void 0===e?void 0:e.filter((e=>e.loaded));let r=[...null!=a?a:[],...null!==(s=this.inputLayersNotInMapLayers)&&void 0!==s?s:[]];if(void 0!==this.value&&"string"!=typeof this.value){const e=new Map;r.forEach((s=>{e.set(i.formatLayerUrlAndId(s),s)}));const s=[];null===(t=this.value.inputLayers)||void 0===t||t.forEach((t=>{e.has(t.url)&&(s.push(e.get(t.url)),e.delete(t.url))})),r.forEach((t=>{const a=i.formatLayerUrlAndId(t);e.has(a)&&(s.push(t),e.delete(a))})),r=s}return r}async setValueLabel(){var e;const s="features"===this.recordsTerm?this.strings.featureValueHeader:this.strings.recordsValueHeader,a=null===(e=this.expressionGroup)||void 0===e?void 0:e.layer;void 0!==a?(void 0===a.title&&await a.load(),this.valueLabel=t.formatMessage(s,{layer:a.title})):this.valueLabel=t.formatMessage(s,{layer:""})}async mapLayersChange(e){if(!1===t.isEmptyDataItem(e)){let s=null==e?void 0:e.filter((e=>t.isUrlFeatureLayer(e)));s=s.filter((e=>!e.isTable)),await Promise.allSettled(s.map((e=>e.load())));const a=s.filter((e=>e.loaded));a.length!==s.length&&(this.errorMessage=this.strings.layersLoadError),this.filteredMapLayers=a}else this.filteredMapLayers=[];this.combinedLayers=this.reorderInputAndMapLayers()}async targetLayerChange(e,s){if(void 0!==e&&e!==s)try{await this.layer.load(),this.parseValue()}catch(e){"sql"===this.mode?this.errorMessage=this.strings.targetDatasetLoadError:this.errorMessage=this.strings.layersLoadError}}get hasError(){return!1===t.isEmptyDataItem(this.errorMessage)}get hasValue(){let e;if("string"==typeof this.value)e=""!==this.value;else if(void 0!==this.value){const{expressions:s,inputLayers:t}=this.value;e=void 0!==s&&s.length>0&&void 0!==t&&t.length>0}else e=!1;return e}get canCreateQuery(){const e=void 0===this.layer,s=void 0===this.filteredMapLayers||this.filteredMapLayers.length<1,a=t.isEmptyDataItem(this.value);return!(e&&s&&a)}async componentWillLoad(){({strings:this.strings}=await t.fetchComponentLocaleStrings(this.hostElement,s.getAssetPath("."))),this.loading=!0,this.loadInitialState().finally((()=>this.loading=!1))}async loadInitialState(){if(await this.mapLayersChange(this.mapLayers),void 0!==this.layer)try{await this.layer.load()}catch(e){"sql"===this.mode?this.errorMessage=this.strings.targetDatasetLoadError:this.errorMessage=this.strings.layersLoadError}this.combinedLayers=this.filteredMapLayers,void 0!==this.value&&(this.inputLayersNotInMapLayers=await this.loadInputLayersNotInMapLayers(this.value),await this.valueChange()),void 0!==this.expressionGroup&&void 0===this.errorMessage&&(this.value=this.serializeExpressionGroup(this.expressionGroup),this.analysisQueryInputChange.emit(this.value))}async loadInputLayersNotInMapLayers(e){var s;let a=[];if("string"!=typeof e&&Array.isArray(null==e?void 0:e.expressions)){this.errorMessage=void 0;try{const r=null!==(s=null==e?void 0:e.inputLayers)&&void 0!==s?s:[],l=this.combinedLayers.map((e=>i.formatLayerUrlAndId(e))),n=r.filter((e=>!l.includes(e.url)));a=await t.loadFeatureLayers(n)}catch(e){this.value=void 0,this.analysisQueryInputChange.emit(),this.errorMessage=this.strings.layersLoadError}}return a}async parseValue(){let e,s;return"analysis"===this.mode&&"object"==typeof this.value?({group:e,errorKey:s}=await a.ExpressionGroup.fromJSON(this.value.expressions,this.combinedLayers)):"sql"===this.mode&&"string"==typeof this.value&&({group:e,errorKey:s}=await a.ExpressionGroup.fromSQL(this.value,this.layer,this.options)),void 0!==s&&(this.errorMessage=this.strings[s]),e}componentDidRender(){void 0!==this.tooltipRef&&null!==this.tooltipRef&&void 0!==this.addButtonRef&&(this.tooltipRef.referenceElement=this.addButtonRef)}disconnectedCallback(){this.closeModal()}async checkValidity(){return Promise.resolve(this.validate())}render(){return!0===this.loading?this.renderLoadingState():this.hasValue?this.renderValueState():this.renderInitialState()}renderLoadingState(){return s.h(s.Host,null,s.h("calcite-label",{scale:i.UIDefaults.Scale},void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,s.h("calcite-button",{appearance:"outline",kind:"neutral",round:!0,"icon-start":"plus",width:"full",scale:i.UIDefaults.Scale,onClick:()=>{},loading:!0},this.strings.createQuery)))}renderInitialState(){var e,a;return s.h(s.Host,null,s.h("calcite-label",{scale:i.UIDefaults.Scale},void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,s.h("calcite-button",{appearance:"outline",kind:"neutral",round:!0,"icon-start":"plus",width:"full",scale:i.UIDefaults.Scale,onClick:()=>{this.canCreateQuery&&this.openModal()},disabled:!1===this.canCreateQuery,ref:e=>this.addButtonRef=e},this.strings.createQuery),!1===this.canCreateQuery&&s.h("calcite-tooltip",{label:null!==(e=this.disabledTooltip)&&void 0!==e?e:this.strings.disabledTooltip,referenceElement:this.addButtonRef,ref:e=>this.tooltipRef=e,overlayPositioning:"fixed"},null!==(a=this.disabledTooltip)&&void 0!==a?a:this.strings.disabledTooltip)),s.h("calcite-input-message",{hidden:!this.hasError,icon:"exclamationMarkTriangle",status:t.UIInputStatus.INVALID,scale:i.UIDefaults.Scale},!1===this.hasError?this.strings.isRequired:this.errorMessage))}renderValueState(){return s.h(s.Host,null,s.h("calcite-label",{scale:i.UIDefaults.Scale},void 0!==this.label&&""!==this.label?s.h("analysis-label",{label:this.label,required:this.required,onAnalysisLabelHelpActionClick:()=>this.analysisHelpClick.emit()}):null,s.h("calcite-list",{onClick:()=>this.openModal(),class:"border mb-half"},s.h("calcite-list-item",{value:"query",label:this.valueLabel,description:this.strings.editDescription},s.h("calcite-action",{slot:"actions-end",icon:"pencil",text:this.strings.editAction})))),s.h("calcite-button",{appearance:"outline",kind:"neutral","icon-start":"trash",width:"full",scale:i.UIDefaults.Scale,onClick:this.onDeleteQuery},this.strings.deleteQuery),s.h("calcite-input-message",{class:"error-message",status:"invalid",scale:i.UIDefaults.Scale,hidden:!this.hasError,icon:"exclamationMarkTriangle"},this.errorMessage))}validate(){let e;return!this.hasValue&&this.required?(e=!1,this.errorMessage=this.strings.isRequired):(e=!0,this.errorMessage=void 0),e}static get assetsDirs(){return["t9n"]}get hostElement(){return this}static get watchers(){return{value:["valueChange"],mapLayers:["mapLayersChange"],layer:["targetLayerChange"]}}static get style(){return":root{--analysis-quarter-spacing:0.25rem;--analysis-half-spacing:0.5rem;--analysis-three-quarter-spacing:0.75rem;--analysis-full-spacing:1rem;--analysis-component-default-width:100%;--analysis-ui-border-input:var(--calcite-ui-border-2);--analysis-label-font-size:var(--calcite-font-size--2);--analysis-popover-content-min-height:30vh;--analysis-popover-content-max-height:60vh;--analysis-popover-content-height:45vh}.border{border:1px solid var(--calcite-ui-border-input)}.mb-half{margin-bottom:var(--analysis-half-spacing)}.error-message{margin-top:var(--analysis-half-spacing)}"}},[0,"analysis-query-input",{label:[513],required:[516],mode:[513],value:[1025],mapLayers:[16],recordsTerm:[513,"records-term"],disabledTooltip:[1,"disabled-tooltip"],options:[16],mapView:[16],layer:[16],combinedLayers:[32],valueLabel:[32],errorMessage:[32],loading:[32],expressionGroup:[32],checkValidity:[64]}]);function c(){"undefined"!=typeof customElements&&["analysis-query-input","analysis-attribute-expression","analysis-expression-group","analysis-label","analysis-query-builder","analysis-query-entry","analysis-query-modal","analysis-query-target-select","analysis-spatial-expression"].forEach((e=>{switch(e){case"analysis-query-input":customElements.get(e)||customElements.define(e,y);break;case"analysis-attribute-expression":customElements.get(e)||r.defineCustomElement();break;case"analysis-expression-group":customElements.get(e)||a.defineCustomElement();break;case"analysis-label":customElements.get(e)||l.defineCustomElement();break;case"analysis-query-builder":customElements.get(e)||n.defineCustomElement();break;case"analysis-query-entry":customElements.get(e)||o.defineCustomElement();break;case"analysis-query-modal":customElements.get(e)||d.defineCustomElement();break;case"analysis-query-target-select":customElements.get(e)||u.defineCustomElement();break;case"analysis-spatial-expression":customElements.get(e)||h.defineCustomElement()}}))}c(),e.AnalysisQueryInput=y,e.defineCustomElement=c}));