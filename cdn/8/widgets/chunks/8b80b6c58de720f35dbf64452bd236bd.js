/*! For license information please see 8b80b6c58de720f35dbf64452bd236bd.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[57316],{57316:(e,r,i)=>{i.r(r),i.d(r,{arcgis_new_item_append_layer_card:()=>l});var a=i(28384),t=i(29162);const l=class{constructor(e){(0,a.r)(this,e),this.layerCardSelect=(0,a.c)(this,"layerCardSelect",7),this.layer=void 0,this.selected=!1,this.isIncompatibleGeom=!1}render(){const{layer:e,selected:r,isIncompatibleGeom:i}=this;return(0,a.h)(a.H,null,(0,a.h)("section",{class:{"item-layer-card":!0},onClick:()=>{this.radioButton&&!this.radioButton.disabled&&(this.radioButton.checked=!0,this.layerCardSelect.emit({item:e,selected:!0}))}},(0,a.h)("div",{class:"item-layer-card-flex item-layer-card__top"},(0,a.h)("calcite-radio-button",{class:"item-layer-card__input",disabled:i,checked:r,value:"item layer card",ref:e=>this.radioButton=e,onClick:e=>{e.stopPropagation()},onCalciteRadioButtonChange:()=>{this.layerCardSelect.emit({item:e,selected:!0})}},(0,a.h)("span",{class:"screen-readers-only"},e.name)),(0,a.h)("calcite-icon",{class:{"item-layer-card__thumbnail":!0,"disabled-card":i},icon:e.geometryType?t.e[e.geometryType]||"point":"table",scale:"s"}," "),(0,a.h)("div",{class:"item-layer-card-flex-1"},(0,a.h)("div",{class:"item-layer-card-flex"},(0,a.h)("div",{class:"item-layer-card__content"},(0,a.h)("p",{class:{"item-layer-card__title":!0,"disabled-card":i}},e.name))),(0,a.h)("slot",{name:"content-end"})))))}get el(){return(0,a.d)(this)}};l.style=".item-layer-card.sc-arcgis-new-item-append-layer-card{display:block;box-shadow:none;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-duration:150ms;color:var(--calcite-ui-text-1);cursor:pointer;background-color:var(--calcite-ui-foreground-1);border-bottom-width:2px;z-index:1;border-bottom:solid var(--calcite-ui-border-3)}.item-layer-card--hoverable.sc-arcgis-new-item-append-layer-card:hover{cursor:pointer}.item-layer-card__top.sc-arcgis-new-item-append-layer-card{padding:1rem}.item-layer-card__content.sc-arcgis-new-item-append-layer-card{flex:1 1 0%;flex-direction:column;min-width:0}.item-layer-card-flex.sc-arcgis-new-item-append-layer-card{display:flex}.item-layer-card-flex-1.sc-arcgis-new-item-append-layer-card{flex:1 1 0%;min-width:0}.screen-readers-only.sc-arcgis-new-item-append-layer-card{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.item-layer-card__input.sc-arcgis-new-item-append-layer-card{-webkit-margin-end:1rem;margin-inline-end:1rem;margin-top:0.125rem}.item-layer-card__title.sc-arcgis-new-item-append-layer-card{font-size:0.875rem;font-weight:500;margin-bottom:0;padding-top:0;padding-bottom:0;margin-top:0;word-wrap:break-word;overflow-wrap:break-word}.item-layer-card__thumbnail.sc-arcgis-new-item-append-layer-card{width:2rem;padding:0;margin:0;box-sizing:content-box;-webkit-padding-start:0rem;padding-inline-start:0rem;flex:0 0 auto}.disabled-card.sc-arcgis-new-item-append-layer-card{color:var(--calcite-ui-foreground-3)}"},29162:(e,r,i)=>{i.d(r,{a:()=>a,e:()=>t,f:()=>l});const a={point:"point",line:"line",polygon:"polygon",multipatch:"cube",table:"table",multipoint:"layer-points"},t={esriGeometryPoint:"point",esriGeometryPolyline:"line",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"cube",esriGeometryMultipoint:"point",none:"table"},l={esriFieldTypeOID:"key",esriFieldTypeBoolean:"boolean",esriFieldTypeString:"string",esriFieldTypeSingle:"number",esriFieldTypeDouble:"number",esriFieldTypeInteger:"integer",esriFieldTypeSmallInteger:"integer",esriFieldTypeGlobalID:"key",esriFieldTypeDate:"date-time",esriFieldTypeBigInteger:"integer",esriFieldTypeDateOnly:"calendar",esriFieldTypeTimeOnly:"clock",esriFieldTypeTimestampOffset:"time-zone"}}}]);