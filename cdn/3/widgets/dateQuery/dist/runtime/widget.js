System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/layers/FeatureLayer","esri/layers/MapImageLayer"],(function(t,e){var i={},a={},n={},r={},s={};return{setters:[function(t){i.React=t.React,i.css=t.css,i.jsx=t.jsx},function(t){a.JimuMapViewComponent=t.JimuMapViewComponent},function(t){n.Button=t.Button,n.Label=t.Label,n.TextInput=t.TextInput},function(t){r.default=t.default},function(t){s.default=t.default}],execute:function(){t((()=>{var t={818:t=>{"use strict";t.exports=r},779:t=>{"use strict";t.exports=s},826:t=>{"use strict";t.exports=a},891:t=>{"use strict";t.exports=i},726:t=>{"use strict";t.exports=n}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="";var l={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(l),o.d(l,{__set_webpack_public_path__:()=>s,default:()=>r});var t=o(891);var e=o(826),i=o(726),a=o(818),n=o(779);class r extends t.React.PureComponent{constructor(e){super(e),this.textPreviewSpan=t.React.createRef(),this.handleOnSubmit=t=>{if(t.preventDefault(),!this.state.initialDate||!this.state.finalDate)return void this.setState({error:"Ingrese una fecha por favor"});const e=new Date(this.state.initialDate);if(new Date(this.state.finalDate)<=e)return void this.setState({error:"Fecha final invalida, debe ser mayor a fecha inicial"});this.setState({error:null});const i=this.props.config.query_filters,r=this.state.currentJimuMapView.jimuLayerViews;for(const t of Object.values(r)){const e=t.layer,r=i.filter((e=>e.layerId==t.layer.id));if(r.length>0){const t=r[0];if(e instanceof a.default)e.definitionExpression=`${t.field} > date '${this.state.initialDate} 00:00:00' AND ${t.field} < date '${this.state.finalDate} 23:59:59'`;else if(e instanceof n.default){const t=r[0];for(let i=0;i<e.sublayers.length;i++)e.findSublayerById(0).definitionExpression=`${t.field} > date '${this.state.initialDate} 00:00:00' AND ${t.field} < date '${this.state.finalDate} 23:59:59'`}}}},this.activeViewChangeHandler=t=>{null!=t?this.setState({currentJimuMapView:t}):this.setState({currentJimuMapView:null})},this.state={widgetId:e.id,currentJimuMapView:null,initialDate:null,finalDate:null,error:null}}componentWillUnmount(){}handleOnAccept(t,e){"initial"===e?this.setState({initialDate:t}):this.setState({finalDate:t})}render(){var a;const{config:n}=this.props;return(0,t.jsx)("div",{css:(r=this.props.theme,r.surfaces[1].bg,t.css`
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
  `)},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,t.jsx)(e.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.activeViewChangeHandler}),(0,t.jsx)("div",{className:"main-container"},(0,t.jsx)("form",{onSubmit:this.handleOnSubmit},(0,t.jsx)("div",null,(0,t.jsx)(i.Label,null,"Fecha inicial"),(0,t.jsx)(i.TextInput,{onAcceptValue:t=>this.handleOnAccept(t,"initial"),size:"lg",type:"date"})),(0,t.jsx)("div",null,(0,t.jsx)(i.Label,null,"Fecha final"),(0,t.jsx)(i.TextInput,{onAcceptValue:t=>this.handleOnAccept(t,"final"),size:"lg",type:"date"})),this.state.error&&(0,t.jsx)("p",{className:"error"}," ",this.state.error),(0,t.jsx)("div",{className:"drawToolbarBottomDiv"},(0,t.jsx)(i.Button,{size:"default",type:"primary"},"Exportar")))));var r}}function s(t){o.p=t}})(),l})())}}}));