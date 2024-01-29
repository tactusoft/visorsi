System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/WebMap"],(function(t,e){var o={},i={},n={},r={};return{setters:[function(t){o.React=t.React,o.SessionManager=t.SessionManager,o.css=t.css,o.getAppStore=t.getAppStore,o.jsx=t.jsx},function(t){i.JimuMapViewComponent=t.JimuMapViewComponent},function(t){n.Button=t.Button},function(t){r.default=t.default}],execute:function(){t((()=>{var t={58:t=>{"use strict";t.exports=r},826:t=>{"use strict";t.exports=i},891:t=>{"use strict";t.exports=o},726:t=>{"use strict";t.exports=n}},e={};function s(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,s),n.exports}s.d=(t,e)=>{for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.p="";var a={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(a),s.d(a,{__set_webpack_public_path__:()=>c,default:()=>r});var t=s(891);var e=s(826),o=s(726),i=s(58),n=function(t,e,o,i){return new(o||(o=Promise))((function(n,r){function s(t){try{c(i.next(t))}catch(t){r(t)}}function a(t){try{c(i.throw(t))}catch(t){r(t)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(t){t(e)}))).then(s,a)}c((i=i.apply(t,e||[])).next())}))};class r extends t.React.PureComponent{constructor(e){super(e),this.textPreviewSpan=t.React.createRef(),this.startSessionBtnClick=e=>n(this,void 0,void 0,(function*(){try{const o=t.SessionManager.getInstance();yield o.signIn("https://visorsi.onrender.com/",!0,"https://movilidadbogota.maps.arcgis.com/","MY0LHa0u8Z1Udh9S"),this.setState({isSignedIn:!0}),this.storeTokenInLocalStorage(e),this.restoreWidgetToLayout(),this.state.currentJimuMapView.view.map=new i.default({portalItem:{id:"a40703df46d64b54a0f4b2a7677d7c49"}})}catch(t){console.error("Error en el inicio de sesión:",t)}})),this.storeTokenInLocalStorage=t=>n(this,void 0,void 0,(function*(){const t="token_"+Math.random().toString(36).substr(2)+Date.now().toString(36),e=Date.now()+864e5;localStorage.setItem("myUniqueToken",t),localStorage.setItem("myUniqueTokenExpiry",e.toString())})),this.restoreWidgetToLayout=()=>n(this,void 0,void 0,(function*(){const e=(0,t.getAppStore)().getState().appStateInBuilder.appConfig,o=e.widgets.widget_5.layouts.controller.LARGE,i=JSON.parse(JSON.stringify(e)),n=JSON.parse(localStorage.getItem("contentWidget")),r=JSON.parse(localStorage.getItem("contentOrder"));return n&&r?(i.layouts[o].content=n,i.layouts[o].order=r):console.error("No se encontraron los datos guardados en localStorage."),i})),this.closeSessionBtnClick=e=>n(this,void 0,void 0,(function*(){try{yield t.SessionManager.getInstance().signOut(),this.setState({isSignedIn:!1}),localStorage.removeItem("myUniqueToken"),localStorage.removeItem("myUniqueTokenExpiry"),window.location.replace("https://visorsi.onrender.com/")}catch(t){console.error("Error al cerrar sesión:",t)}})),this.activeViewChangeHandler=t=>{null!=t?this.setState({currentJimuMapView:t}):this.setState({currentJimuMapView:null})},this.state={widgetId:e.id,currentJimuMapView:null,error:null,isSignedIn:!1}}componentDidMount(){return n(this,void 0,void 0,(function*(){const e=t.SessionManager.getInstance().getSessions();this.setState({isSignedIn:e&&e.length>0})}))}componentWillUnmount(){}render(){var i;const{config:n}=this.props;return(0,t.jsx)("div",{css:(r=this.props.theme,r.surfaces[1].bg,t.css`
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
  `)},this.props.useMapWidgetIds&&1===this.props.useMapWidgetIds.length&&(0,t.jsx)(e.JimuMapViewComponent,{useMapWidgetId:null===(i=this.props.useMapWidgetIds)||void 0===i?void 0:i[0],onActiveViewChange:this.activeViewChangeHandler}),(0,t.jsx)("div",{className:"main-container"},this.state.error&&(0,t.jsx)("p",{className:"error"}," ",this.state.error),(0,t.jsx)("div",{className:"drawToolbarBottomDiv"},!this.state.isSignedIn&&(0,t.jsx)(o.Button,{size:"default",type:"primary",onClick:this.startSessionBtnClick},"Iniciar Sesión"),this.state.isSignedIn&&(0,t.jsx)(o.Button,{size:"default",type:"secondary",onClick:this.closeSessionBtnClick},"Cerrar Sesión"))));var r}}function c(t){s.p=t}})(),a})())}}}));