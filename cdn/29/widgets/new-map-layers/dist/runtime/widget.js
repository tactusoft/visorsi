System.register(["jimu-core","jimu-arcgis","jimu-ui","esri/WebMap"],(function(e,t){var i={},s={},a={},o={};return{setters:[function(e){i.BaseVersionManager=e.BaseVersionManager,i.DataActionManager=e.DataActionManager,i.DataLevel=e.DataLevel,i.DataSourceComponent=e.DataSourceComponent,i.DataSourceManager=e.DataSourceManager,i.React=e.React,i.ReactRedux=e.ReactRedux,i.SessionManager=e.SessionManager,i.css=e.css,i.dataSourceUtils=e.dataSourceUtils,i.getAppStore=e.getAppStore,i.jsx=e.jsx,i.portalUrlUtils=e.portalUrlUtils},function(e){s.DataSourceTypes=e.DataSourceTypes,s.JimuMapViewComponent=e.JimuMapViewComponent,s.MapViewManager=e.MapViewManager,s.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,s.zoomToUtils=e.zoomToUtils},function(e){a.DataActionList=e.DataActionList,a.WidgetPlaceholder=e.WidgetPlaceholder},function(e){o.default=e.default}],execute:function(){e((()=>{var e={957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1 16 2.443Z" clip-rule="evenodd"></path></svg>'},469:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" fill-rule="evenodd" d="M10.226.054a.496.496 0 0 0-.451 0L.25 4.942a.446.446 0 0 0 .025.813L9.8 9.958a.497.497 0 0 0 .4 0l9.524-4.203a.446.446 0 0 0 .025-.813L10.226.054ZM10 9.044 1.542 5.313 10 .97l8.458 4.34L10 9.046Z" clip-rule="evenodd"></path><path fill="#000" d="M.676 10.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 15l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 14.029.676 10.041Z"></path><path fill="#000" fill-rule="evenodd" d="M.676 15.04a.493.493 0 0 0-.632.216c-.11.22-.006.482.232.585L10 20l9.724-4.16c.238-.102.342-.363.232-.584a.493.493 0 0 0-.632-.215L10 19.029.676 15.041ZM10 19.03l.2.085h-.4l.2-.086Z" clip-rule="evenodd"></path></svg>'},58:e=>{"use strict";e.exports=o},826:e=>{"use strict";e.exports=s},891:e=>{"use strict";e.exports=i},726:e=>{"use strict";e.exports=a}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var n={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(n),r.d(n,{LoadStatus:()=>y,Widget:()=>f,__set_webpack_public_path__:()=>b,default:()=>w});var e=r(891),t=r(826),i=r(726);function s(t,i){var s,a,o,n,l,d;let c,u;i.setVisibility&&i.useMapWidget?(c="block",u=""):(c="none",u="unset");const p=t.surfaces[1].bg,h=t.surfaces[1].bg,g=r(957),y=(null==i?void 0:i.setVisibility)&&(null==i?void 0:i.useTickBoxes)?`\n    .esri-icon-non-visible:before {\n      display: block;\n      content: '';\n      height: 16px;\n      width: 16px;\n      margin-bottom: -1px;\n      background-color: ${p};\n      border: 1px solid ${t.colors.palette.dark[600]};\n      border-radius: 3px;\n    }\n    .esri-icon-visible {\n      width: 16px;\n      height: 16px;\n      margin-bottom: -1px;\n      border-radius: 3px;\n      background-color: ${t.colors.primary};\n    }\n    .esri-icon-visible:before {\n      display: block;\n      content: '';\n      height: 10px;\n      width: 10px;\n      margin: 3px;\n      -webkit-mask-image: url('data:image/svg+xml;base64,${window.btoa(g)}');\n      background-color: ${p};\n      -webkit-mask-position: center center;\n    }\n    `:"";return e.css`
    overflow: auto;
    .widget-layerlist {
      width: 100%;
      height: 100%;
      min-height: 32px;
      /*background-color: ${t.arcgis.widgets.layerlist.root.bg};*/
      background-color: ${p};

      .data-action-list-loading {
        height: 32px;
        border: 1px solid rgba(0,0,0,0);
        border-top: 2px solid ${t.colors.palette.secondary[300]};
        padding-left: 16px;

        display: flex;
        align-items: center;
        @keyframes ball-fall {
          0%{
            opacity: 0;
            transform: translateY(-145%);
          }
          10%{
            opacity: .5;
          }
          20%{
            opacity: 1;
            transform: translateY(0);
          }
          80%{
            opacity: 1;
            transform: translateY(0);
          }
          90%{
            opacity: .5;
          }
          100%{
            opacity: 0;
            transform:translateY(145%);
          }
        }
        &:before,
        &:after,
        .dot-loading {
          width: 0.25rem;
          height: 0.25rem;
          border-radius: 0.25rem;
          box-sizing: border-box;
          opacity:0;
          animation: ball-fall 1s ease-in-out infinite;
        }
        &:before,
        &:after {
          content: '';
          display: inline-block;
        }
        &:before {
          left: -0.375rem;
          animation-delay: -200ms;
        }
        .dot-loading {
          display: inline-block;
          margin: 0 0.125rem;
          animation-delay: -100ms;
        }
        &:after {
          left: 0.375rem;
          animation-delay: 0ms;
        }
        .dot-loading, &:before, &:after {
          background: ${t.colors.palette.secondary[500]};
        }
      }

      .esri-layer-list__item-label:focus {
        outline: ${u};
      }

      .esri-layer-list__item-toggle {
        display: ${c};
      }

      .esri-layer-list {
        background-color: ${p};
      }

      .esri-layer-list__item {
        background-color: ${h};
        .data-action-list-wrapper {
          padding: 0;

          .jimu-dropdown, .jimu-dropdown-item {
            font-size: 12px;
            color: ${null===(l=null===(n=null===(o=null===(a=null===(s=null==t?void 0:t.arcgis)||void 0===s?void 0:s.widgets)||void 0===a?void 0:a.layerlist)||void 0===o?void 0:o.icon)||void 0===n?void 0:n.default)||void 0===l?void 0:l.color};
          }

          .jimu-dropdown-item {
            padding: 6px 15px;
            border: 1px solid rgba(0,0,0,0);
            border-top: 2px solid ${null===(d=null==t?void 0:t.border)||void 0===d?void 0:d.color};
          }

          .dropdown-item:hover {
            .jimu-icon-auto-color {
              color: ${t.colors.primary} !important;
            }
            background: transparent;
            color: ${t.colors.primary} !important;
          }
        }
        .ml-2 {
          margin-left: 5px !important;
        }
      }

      ${y}

      .esri-layer-list__item-action {
        outline-offset: -2px;
      }

      .invalid-ds-message {
        padding: 6px 15px;
        border: 1px solid rgba(0,0,0,0);
        border-top: 2px solid #d5d5d5;
        color: ${t.colors.palette.dark[600]};
      }

      /* .esri-layer-list {
        background-color: ${t.colors.palette.light[100]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item {
        background-color: ${t.colors.palette.light[100]};
      }

      .esri-layer-list__item--invisible-at-scale .esri-layer-list__item-title {
        color: ${t.colors.palette.light[800]}
      }

      .esri-layer-list__child-toggle{
        color: ${t.colors.black}
      }


      .esri-layer-list__item-actions-menu-item:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-menu-item--active, .esri-layer-list__item-actions-menu-item--active:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions {
        background-color: ${t.colors.palette.light[200]};
        color: ${t.colors.black}
      }

      .esri-layer-list__item-action:hover {
        background-color: ${t.colors.palette.light[300]};
      }

      .esri-layer-list__item-actions-list {
        border-color: ${t.colors.palette.light[500]};
      } */
    }
  `}class a{constructor(){this.id="id",this.title="title",this.className="esri-icon",this.group=0,this.widget=null,this.isValid=e=>!1,this.execute=e=>{}}hasActionWithMessage(e){return!1}useMapWidget(){return this.widget.props.config.useMapWidget}}class o extends a{constructor(e,i){super(),this.isValid=e=>!("esri.layers.GroupLayer"===e.layer.declaredClass||e.parent&&"esri.layers.GroupLayer"!==e.parent.layer.declaredClass||!this.useMapWidget()||!this.widget.props.config.goto),this.execute=e=>{this.widget.viewFromMapWidget&&t.zoomToUtils.zoomTo(this.widget.viewFromMapWidget,e.layer,{})},this.id="goto",this.title=i,this.className="esri-icon-zoom-out-fixed",this.group=0,this.widget=e}}class l extends a{constructor(e,t,i){super(),this.isValid=e=>{var t;return this.title=e.layer.labelsVisible?this.titleHide:this.titleShow,!!(this.useMapWidget()&&this.widget.props.config.label&&(null===(t=null==e?void 0:e.layer)||void 0===t?void 0:t.labelingInfo))},this.execute=e=>{e.layer.labelsVisible=!e.layer.labelsVisible,this.updateTitle(e.layer.labelsVisible)},this.updateTitle=e=>{var t,i,s,a;const o=document.querySelector(`.widget-layerlist_${null===(i=null===(t=this.widget)||void 0===t?void 0:t.props)||void 0===i?void 0:i.id} .esri-layer-list__item-action .label-action-title`),r=document.querySelector(`.widget-layerlist_${null===(a=null===(s=this.widget)||void 0===s?void 0:s.props)||void 0===a?void 0:a.id} .esri-layer-list__item-actions-menu .esri-layer-list__item-actions-menu-item`),n=null==o?void 0:o.parentElement;let l;if(null==n||n.childNodes.forEach((e=>{var t;(null===(t=e.className)||void 0===t?void 0:t.indexOf("esri-layer-list__item-action-title"))>-1&&(l=e)})),l){const t=e?this.titleHide:this.titleShow;l.innerHTML=t,n.title=t,n.ariaLabel=t}r.title!==this.titleShow&&r.title!==this.titleHide||(r.title=e?this.titleHide:this.titleShow,r.ariaLabel=e?this.titleHide:this.titleShow)},this.id="label",this.className="esri-icon-labels label-action-title",this.group=0,this.widget=e,this.titleShow=t,this.titleHide=i}}class d extends a{constructor(t,i){super(),this.isValid=e=>!(!e.layer.url||!this.widget.props.config.information),this.execute=t=>{var i;const s=t.layer,a=null==s?void 0:s.portalItem;if((null===(i=null==a?void 0:a.portal)||void 0===i?void 0:i.url)&&a.id){const t=e.portalUrlUtils.getStandardPortalUrl(a.portal.url)+`/home/item.html?id=${a.id}`;window.open(t)}else{const e="feature"===(null==s?void 0:s.type)?`${s.url}/${s.layerId}`:s.url;window.open(e)}},this.id="information",this.title=i,this.className="esri-icon-description",this.group=3,this.widget=t}}const c={_widgetLabel:"Map Layers",goto:"Zoom to",information:"Details",increaseOpacity:"Increase opacity",decreaseOpacity:"Decrease opacity",increaseTransparency:"Increase transparency",decreaseTransparency:"Decrease transparency",showLabels:"Show labels",hideLabels:"Hide labels",tranparency:"Transparencia"};var u=r(469),p=r.n(u);class h extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.12.0",description:"disable old app data-action, delete unused config prop selectedJimuLayerIds",upgrader:e=>{let t=e;return t=t.without("selectedJimuLayerIds"),t}}]}}const g=new h;var y,m=r(58),v=function(e,t,i,s){return new(i||(i=Promise))((function(a,o){function r(e){try{l(s.next(e))}catch(e){o(e)}}function n(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,n)}l((s=s.apply(e,t||[])).next())}))};!function(e){e.Pending="Pending",e.Fulfilled="Fulfilled",e.Rejected="Rejected"}(y||(y={}));class f extends e.React.PureComponent{constructor(s){super(s),this.observer=new MutationObserver((e=>{var t,i;const s=e.some((e=>{var t;return"esri-layer-list__item-actions-menu-item"===(null===(t=e.target)||void 0===t?void 0:t.className)})),a=e.some((e=>{var t;return"esri-layer-list__item"===(null===(t=e.target)||void 0===t?void 0:t.className)}));if((null===(t=this.props.enableDataAction)||void 0===t||t)&&s){const e=null===(i=this.layerList.container)||void 0===i?void 0:i.querySelectorAll(".esri-layer-list__item-actions-menu-item");for(const t of e)this.mountedOptionListenerSet.has(t)||"esri-icon-handle-horizontal"===(null==t?void 0:t.lastElementChild.className)&&(this.mountedOptionListenerSet.add(t),t.addEventListener("click",(()=>{for(const e of this.getAllVisibleItems())if(t.attributes["aria-controls"].value.includes(e.uid)){const t=this.getMapDataSource();if(this.addSpinToWidget(e),!t)return this.setState({currentExpandedLayer:e.layer}),this.mountDataActionList(),void this.hideLayersByDOM();t.createDataSourceByLayer(e.layer).catch((e=>{console.error("create data source by layer error:",e)})).finally((()=>{this.setState({currentExpandedLayer:e.layer}),this.mountDataActionList(),this.hideLayersByDOM()}))}})))}a&&this.hideLayersByDOM()})),this.getMapDataSource=()=>{var t;let i=null;return i=this.props.config.useMapWidget?e.DataSourceManager.getInstance().getDataSource(null===(t=this.jimuMapView)||void 0===t?void 0:t.dataSourceId):this.dataSource,i},this.createDataActionList=s=>{this.jimuMapView=t.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId);const a=this.getMapDataSource(),o=null==a?void 0:a.getDataSourceByLayer(s),r=e.dataSourceUtils.getJimuLayerIdByJSAPILayer(s);if(!o)return(0,e.jsx)("div",{ref:r,key:r,className:"invalid-ds-message"},this.translate("noActions"));const n={dataSource:o,records:[],name:null==o?void 0:o.getLabel()};return(0,e.jsx)("div",{ref:r,key:r,className:"data-action-list-wrapper"},(0,e.jsx)(i.DataActionList,{widgetId:this.props.id,dataSets:[n],hideGroupTitle:!0}))},this.getSupportedDataActions=t=>v(this,void 0,void 0,(function*(){const i=this.getMapDataSource(),s=null==i?void 0:i.getDataSourceByLayer(t);if(!s)return!1;const a={dataSource:s,records:[],name:null==s?void 0:s.getLabel()},o=e.DataActionManager.getInstance().getSupportedActions(this.props.id,[a],e.DataLevel.DataSource);return(yield o)||{}})),this.shouldPushEmptyActions=(e,t)=>v(this,void 0,void 0,(function*(){var e;return!(null!==(e=this.props.enableDataAction)&&void 0!==e&&!e)})),this.defineLayerListActions=e=>v(this,void 0,void 0,(function*(){var t,i,s;const a=e.item,o={};a.actionsSections=[],(null===(t=this.props.config)||void 0===t?void 0:t.useMapWidget)&&(null===(i=this.props.config)||void 0===i?void 0:i.enableLegend)&&a.layer.legendEnabled&&(a.panel={content:"legend",open:a.layer.visible&&(null===(s=this.props.config)||void 0===s?void 0:s.showAllLegend)}),this.layerListActions.forEach((e=>{if(e.isValid(a)){let t=o[e.group];t||(t=[],o[e.group]=t),t.push({id:e.id,title:e.title,className:e.className})}})),(yield this.shouldPushEmptyActions(a,o))&&(o[10]=[{id:"",title:"",className:""},{id:"",title:"",className:""}]),Object.entries(o).sort(((e,t)=>Number(e[0])-Number(t[0]))).forEach((([e,t])=>{a.actionsSections.push(t)}))})),this.onLayerListActionsTriggered=e=>{const t=e.action,i=e.item;this.layerListActions.find((e=>e.id===t.id)).execute(i)},this.getAllVisibleItems=()=>{var e;const t=[],i=e=>{t.push(e),e.children.forEach((e=>{i(e)}))};for(const t of(null===(e=this.layerList)||void 0===e?void 0:e.visibleItems.items)||[])i(t);return t},this.onActiveViewChange=e=>{const t=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0];e&&e.view||!t?(this.viewFromMapWidget=e&&e.view,this.loadSession(),this.setState({mapViewWidgetId:t,jimuMapViewId:e.id,loadStatus:y.Pending})):this.destroyLayerList()},this.onDataSourceCreated=e=>{this.dataSource=e,this.setState({mapDataSourceId:e.id,loadStatus:y.Pending})},this.onCreateDataSourceFailed=e=>{},this.state={mapViewWidgetId:null,mapDataSourceId:null,jimuMapViewId:null,loadStatus:y.Pending,visibleLayers:[],currentExpandedLayer:null},this.renderPromise=Promise.resolve(),this.registerLayerListActions(),this.mountedOptionListenerSet=new Set}addSpinToWidget(e){var t,i,s,a,o;const r=document.querySelector(`div[id*="${e.uid}_actions"]`);r.lastElementChild&&(""===(null===(s=null===(i=null===(t=r.lastElementChild)||void 0===t?void 0:t.lastElementChild)||void 0===i?void 0:i.attributes.getNamedItem("title"))||void 0===s?void 0:s.value)||["data-action-list-wrapper","data-action-list-loading","invalid-ds-message"].includes(r.lastElementChild.className))?r.lastChild.replaceWith(null===(a=this.refs)||void 0===a?void 0:a.loadingSpinContainer):r.append(null===(o=this.refs)||void 0===o?void 0:o.loadingSpinContainer)}translate(e){return this.props.intl.formatMessage({id:e,defaultMessage:c[e]})}componentDidMount(){}loadSession(){const t=e.SessionManager.getInstance().getSessions();if(t&&t.length>0)this.viewFromMapWidget.map=new m.default({portalItem:{id:"a40703df46d64b54a0f4b2a7677d7c49"}});else{const t=(0,e.getAppStore)().getState().appConfig,i=this.findWidgetIdByUri(t,"widgets/common/edit/");i&&this.removeWidgetFromLayout(t,i)}}removeWidgetFromLayout(e,t){const i=JSON.parse(JSON.stringify(e)),s=e.widgets.widget_5.layouts.controller.LARGE,a=e.layouts.layout_2.content,o=e.layouts.layout_2.order,r=Object.entries(a).find((([e,i])=>i.widgetId===t));if(r){const[e]=r;delete a[e],i.layouts[s].order=o.filter((t=>t!==e)),i.layouts[s].content=a}}findWidgetIdByUri(e,t){for(const i in e.widgets)if(e.widgets.hasOwnProperty(i)&&e.widgets[i].uri===t)return i;return null}componentDidUpdate(e,t){if(!this.needToPreventRefresh(e))return t.visibleLayers!==this.state.visibleLayers||t.currentExpandedLayer!==this.state.currentExpandedLayer?(this.mountDataActionList(),void this.hideLayersByDOM()):void this.updateRenderer()}updateRenderer(){this.props.config.useMapWidget?this.state.mapViewWidgetId===this.currentUseMapWidgetId&&this.syncRenderer(this.renderPromise):this.state.mapDataSourceId===this.currentUseDataSourceId&&this.syncRenderer(this.renderPromise)}needToPreventRefresh(e){if(this.props.appWidgets!==e.appWidgets){const t=Object.keys(this.props.appWidgets||{}).filter((e=>"widgets/common/table/"===this.props.appWidgets[e].uri)),i=Object.keys(e.appWidgets||{}).filter((t=>"widgets/common/table/"===e.appWidgets[t].uri));if(t.length===i.length&&this.props.appWidgets[this.props.id]===e.appWidgets[this.props.id])return!0}return!1}createView(){return v(this,void 0,void 0,(function*(){return this.props.config.useMapWidget?yield Promise.resolve(this.viewFromMapWidget):yield this.createViewByDatatSource()}))}createViewByDatatSource(){return v(this,void 0,void 0,(function*(){return yield this.loadViewModules(this.dataSource).then((()=>v(this,void 0,void 0,(function*(){return this.dataSource.type===t.DataSourceTypes.WebMap?yield new Promise(((e,t)=>{this.createWebMapView(this.MapView,e,t)})):this.dataSource.type===t.DataSourceTypes.WebScene?new Promise(((e,t)=>{this.createSceneView(this.SceneView,e,t)})):Promise.reject()}))))}))}createWebMapView(e,t,i){if(this.mapView)this.mapView.map=this.dataSource.map;else{const t={map:this.dataSource.map,container:this.refs.mapContainer};this.mapView=new e(t)}this.mapView.when((()=>{t(this.mapView)}),(e=>i(e)))}createSceneView(e,t,i){if(this.sceneView)this.sceneView.map=this.dataSource.map;else{const e={map:this.dataSource.map,container:this.refs.mapContainer};this.sceneView=new this.SceneView(e)}this.sceneView.when((()=>{t(this.sceneView)}),(e=>i(e)))}destroyView(){this.mapView&&!this.mapView.destroyed&&this.mapView.destroy(),this.sceneView&&!this.sceneView.destroyed&&this.sceneView.destroy()}loadViewModules(e){return v(this,void 0,void 0,(function*(){return e.type===t.DataSourceTypes.WebMap?this.MapView?yield Promise.resolve(this.MapView):yield(0,t.loadArcGISJSAPIModules)(["esri/views/MapView"]).then((e=>([this.MapView]=e,this.MapView))):e.type===t.DataSourceTypes.WebScene?this.SceneView?Promise.resolve(this.SceneView):(0,t.loadArcGISJSAPIModules)(["esri/views/SceneView"]).then((e=>([this.SceneView]=e,this.SceneView))):Promise.reject()}))}destroyLayerList(){this.layerList&&!this.layerList.destroyed&&this.layerList.destroy()}componentWillUnmount(){return v(this,void 0,void 0,(function*(){this.observer.disconnect()}))}createLayerList(e){let i;return i=this.LayerList?Promise.resolve():(0,t.loadArcGISJSAPIModules)(["esri/widgets/LayerList"]).then((e=>{[this.LayerList]=e})),i.then((()=>{var t;const i=document&&document.createElement("div");i.className="jimu-widget",this.refs.layerListContainer.appendChild(i),this.destroyLayerList(),(null===(t=this.props.enableDataAction)||void 0===t||t)&&this.mountedOptionListenerSet.clear(),this.observer.observe(this.refs.layerListContainer,{childList:!0,subtree:!0});const s=new this.LayerList({view:e,listItemCreatedFunction:this.defineLayerListActions,container:i});this.layerList=s,this.layerList.when((()=>{setTimeout((()=>{this.setState({visibleLayers:this.getAllVisibleItems().map((e=>e.layer))})}),300)})),this.configLayerList(),this.layerList.on("trigger-action",(e=>{this.onLayerListActionsTriggered(e)}))}))}registerLayerListActions(){this.layerListActions=[new o(this,this.translate("goto")),new l(this,this.translate("showLabels"),this.translate("hideLabels")),new d(this,this.translate("information"))]}configLayerList(){this.props.config.setVisibility&&this.props.config.useMapWidget||(this.layerList._toggleVisibility=function(){})}renderLayerList(){return v(this,void 0,void 0,(function*(){yield this.createView().then((e=>this.createLayerList(e))).then((()=>{this.setState({loadStatus:y.Fulfilled})})).catch((e=>{console.error(e)}))}))}syncRenderer(e){this.jimuMapView=t.MapViewManager.getInstance().getJimuMapViewById(this.state.jimuMapViewId),this.renderPromise=new Promise(((t,i)=>{e.then((()=>{this.refs.layerListContainer.style.display="none",this.renderLayerList().then((()=>{t(null)})).catch((()=>{i()}))}))}))}hideLayersByDOM(){var t,i,s;const a=null===(s=null===(i=null===(t=this.props)||void 0===t?void 0:t.config)||void 0===i?void 0:i.customizeLayerOptions)||void 0===s?void 0:s[this.state.jimuMapViewId];if(!this.state.mapViewWidgetId||!(null==a?void 0:a.isEnabled))return void(this.refs.layerListContainer.style.display="block");this.getAllVisibleItems().forEach((t=>v(this,void 0,void 0,(function*(){const i=e.dataSourceUtils.getJimuLayerIdByJSAPILayer(t.layer),s=new Set(null==a?void 0:a.hiddenJimuLayerViewIds);for(const e of s)if(e.endsWith(i)){const e=this.refs.layerListContainer.querySelector(`li[aria-labelledby*="${t.uid}"]`);e&&(e.style.display="none")}}))));let o=0;const r=this.refs.layerListContainer.querySelector('ul[data-group="root"]');if(r.childNodes.forEach((e=>{"none"===e.style.display&&o++})),o===r.childNodes.length){const e=document.createElement("div");e.textContent=this.translate("emptyListTip"),r.appendChild(e)}this.refs.layerListContainer.style.display="block"}mountDataActionList(){var t;(null===(t=this.props.enableDataAction)||void 0===t||t)&&this.state.currentExpandedLayer&&this.getAllVisibleItems().forEach((t=>v(this,void 0,void 0,(function*(){var i,s,a,o,r,n,l,d,c;const u=e.dataSourceUtils.getJimuLayerIdByJSAPILayer(this.state.currentExpandedLayer);if(u!==e.dataSourceUtils.getJimuLayerIdByJSAPILayer(t.layer))return;const p=document.querySelector(`div[id*="${t.uid}_actions"]`);this.addSpinToWidget(t),console.log(t.layer);const h=Object.keys(yield this.getSupportedDataActions(t.layer)).length,g=t.actionsSections.length-1,y=(null===(i=this.refs)||void 0===i?void 0:i[u])&&""===(null===(o=null===(a=null===(s=null==p?void 0:p.lastElementChild)||void 0===s?void 0:s.lastElementChild)||void 0===a?void 0:a.attributes.getNamedItem("title"))||void 0===o?void 0:o.value),m=(null===(r=this.refs)||void 0===r?void 0:r[u])&&"data-action-list-loading"===(null===(n=null==p?void 0:p.lastElementChild)||void 0===n?void 0:n.className);if((y||m)&&(g>0&&0===h?null===(l=p.lastChild)||void 0===l||l.remove():null===(d=p.lastChild)||void 0===d||d.replaceWith(null===(c=this.refs)||void 0===c?void 0:c[u])),this.props.config.opacity){let e=p.querySelector(".custom-slider-container");if(!e){e=document.createElement("div"),e.classList.add("custom-slider-container"),e.style.borderTopStyle="solid",e.style.borderTopColor="lightgray",e.style.borderTopWidth="2px",e.style.display="flex",e.style.alignItems="center";const i=document.createElement("calcite-icon");i.setAttribute("icon","transparency"),i.style.marginLeft="14px";const s=document.createElement("label");s.classList.add("transparency-label"),s.textContent=this.translate("tranparency"),s.style.fontSize="12px",s.style.marginLeft="2px",s.style.marginRight="20px",s.style.marginTop="8px";const a=document.createElement("input");a.setAttribute("type","range"),a.setAttribute("role","slider"),a.setAttribute("aria-orientation","horizontal"),a.setAttribute("aria-valuenow","0"),a.setAttribute("value","0"),a.classList.add("jimu-slider"),a.addEventListener("input",(e=>{const i=e.target.value;t.layer.opacity=1-Number(i)/100})),e.appendChild(i),e.appendChild(s),e.appendChild(a),p.insertBefore(e,p.lastChild)}}}))))}render(){var a;const o=this.props.useMapWidgetIds&&this.props.useMapWidgetIds[0],r=this.props.useDataSources&&this.props.useDataSources[0];this.currentUseMapWidgetId=o,this.currentUseDataSourceId=r&&r.dataSourceId;let n=null;this.props.config.useMapWidget?n=(0,e.jsx)(t.JimuMapViewComponent,{useMapWidgetId:null===(a=this.props.useMapWidgetIds)||void 0===a?void 0:a[0],onActiveViewChange:this.onActiveViewChange}):r&&(n=(0,e.jsx)(e.DataSourceComponent,{useDataSource:r,onDataSourceCreated:this.onDataSourceCreated,onCreateDataSourceFailed:this.onCreateDataSourceFailed}));let l=null;if(this.props.config.useMapWidget?o:r){let t=null;this.state.loadStatus===y.Pending&&(t=(0,e.jsx)("div",{className:"jimu-secondary-loading"})),l=(0,e.jsx)("div",{className:`widget-layerlist widget-layerlist_${this.props.id}`},t,(0,e.jsx)("div",{ref:"layerListContainer",style:{display:"none"}}),(0,e.jsx)("div",{style:{position:"absolute",opacity:0},ref:"mapContainer"},"mapContainer"),(0,e.jsx)("div",{style:{position:"absolute",display:"none"}},n))}else this.destroyLayerList(),l=(0,e.jsx)("div",{className:"widget-layerlist"},(0,e.jsx)(i.WidgetPlaceholder,{icon:p(),message:this.translate("_widgetLabel"),widgetId:this.props.id}));return(0,e.jsx)("div",{css:s(this.props.theme,this.props.config),className:"jimu-widget"},l,(0,e.jsx)("div",{key:Math.random(),style:{height:"0px",overflow:"hidden"}},this.state.currentExpandedLayer&&this.createDataActionList(this.state.currentExpandedLayer),(0,e.jsx)("div",{ref:"loadingSpinContainer",className:"data-action-list-loading"},(0,e.jsx)("div",{className:"dot-loading"}))))}}f.versionManager=g;const w=e.ReactRedux.connect((e=>{var t;const i=(null===(t=e.appStateInBuilder)||void 0===t?void 0:t.appConfig)||e.appConfig;return{dataSourcesConfig:null==i?void 0:i.dataSources,appWidgets:null==i?void 0:i.widgets}}))(f);function b(e){r.p=e}})(),n})())}}}));