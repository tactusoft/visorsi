System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/layers/FeatureLayer","esri/layers/MapImageLayer"],(function(t,e){var i={},a={},r={},n={},s={};return{setters:[function(t){i.React=t.React,i.css=t.css,i.jsx=t.jsx},function(t){a.JimuMapViewComponent=t.JimuMapViewComponent},function(t){r.Button=t.Button,r.Label=t.Label,r.TextInput=t.TextInput},function(t){n.default=t.default},function(t){s.default=t.default}],execute:function(){t((()=>{var t={818:t=>{"use strict";t.exports=n},779:t=>{"use strict";t.exports=s},826:t=>{"use strict";t.exports=a},891:t=>{"use strict";t.exports=i},726:t=>{"use strict";t.exports=r}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,o),r.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{__set_webpack_public_path__:()=>s,default:()=>n});var t=o(891);var e=o(826),i=o(726),a=o(818),r=o(779);class n extends t.React.PureComponent{constructor(e){super(e),this.textPreviewSpan=t.React.createRef(),this.queryBtnClick=t=>{if(!this.state.initialDate||!this.state.finalDate)return void this.setState({error:"Ingrese una fecha por favor"});const e=new Date(this.state.initialDate);new Date(this.state.finalDate)<=e?this.setState({error:"Fecha final invalida, debe ser mayor a fecha inicial"}):(this.setState({error:null}),this.queryLayers(!1))},this.drawClearBtnClick=t=>{this.setState({error:""}),this.queryLayers(!0)},this.queryLayers=t=>{const e=this.props.config.query_filters,i=this.state.currentJimuMapView.jimuLayerViews;for(const n of Object.values(i)){const i=n.layer,s=e.filter((t=>t.layerId==n.layer.id));if(s.length>0){const e=s[0];if(i instanceof a.default)i.definitionExpression=t?"":`${e.field} > date '${this.state.initialDate} 00:00:00' AND ${e.field} < date '${this.state.finalDate} 23:59:59'`;else if(i instanceof r.default){const e=s[0];for(let a=0;a<i.sublayers.length;a++){i.findSublayerById(0).definitionExpression=t?"":`${e.field} > date '${this.state.initialDate} 00:00:00' AND ${e.field} < date '${this.state.finalDate} 23:59:59'`}}}}},this.activeViewChangeHandler=t=>{null!=t?this.setState({currentJimuMapView:t}):this.setState({currentJimuMapView:null})},this.state={widgetId:e.id,currentJimuMapView:null,initialDate:null,finalDate:null,error:null}}componentWillUnmount(){}handleOnAccept(t,e){"initial"===e?this.setState({initialDate:t}):this.setState({finalDate:t})}render(){var a;const{config:r}=this.props;return(0,t.jsx)("div",{css:(n=this.props.theme,n.surfaces[1].bg,t.css`
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
  `)},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,t.jsx)(e.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.activeViewChangeHandler}),(0,t.jsx)("div",{className:"main-container"},(0,t.jsx)("div",null,(0,t.jsx)(i.Label,null,"Fecha inicial"),(0,t.jsx)(i.TextInput,{onAcceptValue:t=>this.handleOnAccept(t,"initial"),size:"lg",type:"date"})),(0,t.jsx)("div",null,(0,t.jsx)(i.Label,null,"Fecha final"),(0,t.jsx)(i.TextInput,{onAcceptValue:t=>this.handleOnAccept(t,"final"),size:"lg",type:"date"})),this.state.error&&(0,t.jsx)("p",{className:"error"}," ",this.state.error),(0,t.jsx)("div",{className:"drawToolbarBottomDiv"},(0,t.jsx)(i.Button,{size:"default",type:"primary",onClick:this.queryBtnClick},"Consultar"),(0,t.jsx)(i.Button,{size:"default",type:"secondary",onClick:this.drawClearBtnClick},"Limpiar"))));var n}}function s(t){o.p=t}})(),l})())}}}));