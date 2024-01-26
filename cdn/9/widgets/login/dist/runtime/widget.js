System.register(["jimu-core","jimu-arcgis","jimu-ui"],(function(t,e){var i={},n={},r={};return{setters:[function(t){i.React=t.React,i.SessionManager=t.SessionManager,i.css=t.css,i.jsx=t.jsx},function(t){n.JimuMapViewComponent=t.JimuMapViewComponent},function(t){r.Button=t.Button}],execute:function(){t((()=>{var t={826:t=>{"use strict";t.exports=n},891:t=>{"use strict";t.exports=i},726:t=>{"use strict";t.exports=r}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,o),r.exports}o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="";var s={};return o.p=window.jimuConfig.baseUrl,(()=>{"use strict";o.r(s),o.d(s,{__set_webpack_public_path__:()=>a,default:()=>r});var t=o(891);var e=o(826),i=o(726),n=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}c((n=n.apply(t,e||[])).next())}))};class r extends t.React.PureComponent{constructor(e){super(e),this.textPreviewSpan=t.React.createRef(),this.startSessionBtnClick=e=>n(this,void 0,void 0,(function*(){try{yield t.SessionManager.getInstance().signIn("https://visorsi.onrender.com/",!0,"https://movilidadbogota.maps.arcgis.com/","MY0LHa0u8Z1Udh9S"),this.setState({isSignedIn:!0}),window.location.reload()}catch(t){console.error("Error en el inicio de sesión:",t)}})),this.closeSessionBtnClick=e=>n(this,void 0,void 0,(function*(){try{yield t.SessionManager.getInstance().signOut(),this.setState({isSignedIn:!1}),window.location.replace("https://visorsi.onrender.com/")}catch(t){console.error("Error al cerrar sesión:",t)}})),this.activeViewChangeHandler=t=>{null!=t?this.setState({currentJimuMapView:t}):this.setState({currentJimuMapView:null})},this.state={widgetId:e.id,currentJimuMapView:null,error:null,isSignedIn:!1}}componentDidMount(){return n(this,void 0,void 0,(function*(){const e=t.SessionManager.getInstance().getSessions();this.setState({isSignedIn:e&&e.length>0})}))}componentWillUnmount(){}render(){var n;const{config:r}=this.props;return(0,t.jsx)("div",{css:(o=this.props.theme,o.surfaces[1].bg,t.css`
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
  `)},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,t.jsx)(e.JimuMapViewComponent,{useMapWidgetId:null===(n=this.props.useMapWidgetIds)||void 0===n?void 0:n[0],onActiveViewChange:this.activeViewChangeHandler}),(0,t.jsx)("div",{className:"main-container"},this.state.error&&(0,t.jsx)("p",{className:"error"}," ",this.state.error),(0,t.jsx)("div",{className:"drawToolbarBottomDiv"},!this.state.isSignedIn&&(0,t.jsx)(i.Button,{size:"default",type:"primary",onClick:this.startSessionBtnClick},"Iniciar Sesión"),this.state.isSignedIn&&(0,t.jsx)(i.Button,{size:"default",type:"secondary",onClick:this.closeSessionBtnClick},"Cerrar Sesión"))));var o}}function a(t){o.p=t}})(),s})())}}}));