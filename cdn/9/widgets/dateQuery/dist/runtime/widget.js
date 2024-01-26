System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/layers/FeatureLayer","esri/layers/MapImageLayer"],(function(e,t){var i={},a={},s={},r={},n={};return{setters:[function(e){i.React=e.React,i.css=e.css,i.jsx=e.jsx},function(e){a.JimuMapViewComponent=e.JimuMapViewComponent},function(e){s.Button=e.Button,s.Label=e.Label,s.TextInput=e.TextInput},function(e){r.default=e.default},function(e){n.default=e.default}],execute:function(){e((()=>{var e={818:e=>{"use strict";e.exports=r},779:e=>{"use strict";e.exports=n},826:e=>{"use strict";e.exports=a},891:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=s}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{__set_webpack_public_path__:()=>n,default:()=>r});var e=o(891);var t=o(826),i=o(726),a=o(818),s=o(779);class r extends e.React.PureComponent{constructor(t){super(t),this.textPreviewSpan=e.React.createRef(),this.queryBtnClick=e=>{if(!this.state.initialDate||!this.state.finalDate)return void this.setState({error:"Ingrese una fecha por favor"});const t=new Date(this.state.initialDate);new Date(this.state.finalDate)<=t?this.setState({error:"Fecha final invalida, debe ser mayor a fecha inicial"}):(this.setState({error:null}),this.queryLayers(!1))},this.drawClearBtnClick=e=>{this.setState({error:""}),this.queryLayers(!0)},this.queryLayers=e=>{const t=this.props.config.query_filters,i=this.state.currentJimuMapView.jimuLayerViews;for(const r of Object.values(i)){const i=r.layer,n=t.filter((e=>e.layerId==r.layer.id));if(n.length>0){const t=n[0];if(i instanceof a.default)i.definitionExpression=e?"":`${t.field} > date '${this.state.initialDate} 00:00:00' AND ${t.field} < date '${this.state.finalDate} 23:59:59'`;else if(i instanceof s.default){const t=n[0];for(let a=0;a<i.sublayers.length;a++){i.findSublayerById(0).definitionExpression=e?"":`${t.field} > date '${this.state.initialDate} 00:00:00' AND ${t.field} < date '${this.state.finalDate} 23:59:59'`}}}}},this.activeViewChangeHandler=e=>{null!=e?this.setState({currentJimuMapView:e}):this.setState({currentJimuMapView:null})},this.state={widgetId:t.id,currentJimuMapView:null,initialDate:null,finalDate:null,error:null}}loadLayers(){const e=this.state.currentJimuMapView.jimuLayerViews;for(const t of Object.values(e)){const e=t.layer;e.fields?e.fields.forEach((t=>{(t.name.toLowerCase().includes("fecha")||t.name.toLowerCase().includes("date"))&&console.log(`Capa: ${e.title} ${e.id}, Campo de Fecha: ${t.name}`)})):e.sublayers&&e.sublayers.items.forEach((e=>{e.fields&&e.fields.forEach((t=>{(t.name.toLowerCase().includes("fecha")||t.name.toLowerCase().includes("date"))&&console.log(`Subcapa: ${e.title} ${e.id}, Campo de Fecha: ${t.name}`)}))}))}}componentWillUnmount(){}handleOnAccept(e,t){"initial"===t?this.setState({initialDate:e}):this.setState({finalDate:e})}render(){var a;const{config:s}=this.props;return(0,e.jsx)("div",{css:(r=this.props.theme,r.surfaces[1].bg,e.css`
  .drawToolbarDiv {
    margin: 8px;
    text-align: center;
  }

  .drawToolbarBottomDiv {
    display: flex;
    justify-content: center;
    padding-top: 12px;
  }

  .drawToolbarDiv button,
  .drawToolbarBottomDiv button {
    margin: 4px;
  }

  .drawToolbarDiv>button>Img.jimu-icon,
  .drawToolbarBottomDiv>button>Img.jimu-icon {
    margin: 0;
  }

  .jimu-btn.btn.btn-default.btn-sm.active img,
  .jimu-btn.btn.btn-primary.btn-sm img {
    filter: invert(1);
  }
  .jimu-draw-symbol-divide-line {
    border-right: 1px solid rgb(182, 182, 182);
    height: 26px;
  }
  .color-presenter {
    inset: 2px;
  }
  .myss {
    width: 40px;
    margin: auto;
  }
  .symbol-wapper.outer-preview-btn {
    height: 26px;
    width: 26px;
  }
  .main-container {
     width: 100%;
     display: flex;
     flex-direction: column;
     padding: 16px;
  }
  .error {
    text-align: center;
    color: red;
    font-weight: 500;
    margin: 8px;
  }
  `)},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.activeViewChangeHandler}),(0,e.jsx)("div",{className:"main-container"},(0,e.jsx)("div",null,(0,e.jsx)(i.Label,null,"Fecha inicial"),(0,e.jsx)(i.TextInput,{onAcceptValue:e=>this.handleOnAccept(e,"initial"),size:"lg",type:"date"})),(0,e.jsx)("div",null,(0,e.jsx)(i.Label,null,"Fecha final"),(0,e.jsx)(i.TextInput,{onAcceptValue:e=>this.handleOnAccept(e,"final"),size:"lg",type:"date"})),this.state.error&&(0,e.jsx)("p",{className:"error"}," ",this.state.error),(0,e.jsx)("div",{className:"drawToolbarBottomDiv"},(0,e.jsx)(i.Button,{size:"default",type:"primary",onClick:this.queryBtnClick},"Consultar"),(0,e.jsx)(i.Button,{size:"default",type:"secondary",onClick:this.drawClearBtnClick},"Limpiar"))));var r}}function n(e){o.p=e}})(),l})())}}}));