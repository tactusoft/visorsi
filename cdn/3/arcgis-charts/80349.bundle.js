"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[80349],{39100:(t,e,r)=>{function s(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function i(t,e){return new Float64Array(t,e,16)}r.d(e,{I:()=>o,a:()=>i,b:()=>n,c:()=>s});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:n,create:s,createView:i,fromValues:function(t,e,r,s,n,i,o,a,u,c,l,p,h,f,d,m){return[t,e,r,s,n,i,o,a,u,c,l,p,h,f,d,m]}},Symbol.toStringTag,{value:"Module"}))},45612:(t,e,r)=>{r.d(e,{a:()=>g,c:()=>_,g:()=>I,h:()=>y,j:()=>M,l:()=>R}),r(39994);var s,n,i=r(13802),o=r(19431),a=r(24455),u=r(6766),c=r(8909),l=r(88589),p=r(1983);(n=s||(s={}))[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z";var h=r(97537),f=r(5700),d=r(68817);const m=_();function _(){return(0,p.c)()}function y(t,e=_()){return(0,l.c)(e,t)}function g(t){return t[3]}function I(t){return t}function S(t,e,r){if(null==e)return!1;const{origin:s,direction:n}=e,i=E;i[0]=s[0]-t[0],i[1]=s[1]-t[1],i[2]=s[2]-t[2];const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===o)return!1;const a=2*(n[0]*i[0]+n[1]*i[1]+n[2]*i[2]),u=a*a-4*o*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const c=Math.sqrt(u);let l=(-a-c)/(2*o);const p=(-a+c)/(2*o);return(l<0||p<l&&p>0)&&(l=p),!(l<0||(r&&(r[0]=s[0]+n[0]*l,r[1]=s[1]+n[1]*l,r[2]=s[2]+n[2]*l),0))}const E=(0,c.c)();function M(t,e){return S(t,e,null)}function P(t,e,r){const s=d.WM.get(),n=d.MP.get();(0,u.f)(s,e.origin,e.direction);const i=g(t);(0,u.f)(r,s,e.origin),(0,u.g)(r,r,1/(0,u.l)(r)*i);const o=w(t,e.origin),c=(0,f.EU)(e.origin,r);return(0,a.d)(n,c+o,s),(0,u.m)(r,r,n),r}function T(t,e,r){const s=(0,u.b)(d.WM.get(),e,t),n=(0,u.g)(d.WM.get(),s,t[3]/(0,u.l)(s));return(0,u.a)(r,n,t)}function w(t,e){const r=(0,u.b)(d.WM.get(),e,t),s=(0,u.l)(r),n=g(t),i=n+Math.abs(n-s);return(0,o.ZF)(n/i)}const A=(0,c.c)();function v(t,e,r,n){const i=(0,u.b)(A,e,t);switch(r){case s.X:{const t=(0,o.jE)(i,A)[2];return(0,u.s)(n,-Math.sin(t),Math.cos(t),0)}case s.Y:{const t=(0,o.jE)(i,A),e=t[1],r=t[2],s=Math.sin(e);return(0,u.s)(n,-s*Math.cos(r),-s*Math.sin(r),Math.cos(e))}case s.Z:return(0,u.n)(n,i);default:return}}function N(t,e){const r=(0,u.b)(b,e,t);return(0,u.l)(r)-t[3]}function R(t,e){const r=(0,u.d)(t,e),s=g(t);return r<=s*s}const b=(0,c.c)(),C=_();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:m,altitudeAt:N,angleToSilhouette:w,axisAt:v,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,e,r){return S(t,e,r)?r:((0,h.JI)(e,t,r),T(t,r,r))},closestPointOnSilhouette:P,containsPoint:R,copy:y,create:_,distanceToSilhouette:function(t,e){const r=(0,u.b)(d.WM.get(),e,t),s=(0,u.p)(r),n=t[3]*t[3];return Math.sqrt(Math.abs(s-n))},elevate:function(t,e,r){return t!==r&&(0,u.c)(r,t),r[3]=t[3]+e,r},fromCenterAndRadius:function(t,e){return(0,p.f)(t[0],t[1],t[2],e)},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},fromValues:function(t,e,r,s){return(0,p.f)(t,e,r,s)},getCenter:I,getRadius:g,intersectRay:S,intersectRayClosestSilhouette:function(t,e,r){if(S(t,e,r))return r;const s=P(t,e,d.WM.get());return(0,u.a)(r,e.origin,(0,u.g)(d.WM.get(),e.direction,(0,u.i)(e.origin,s)/(0,u.l)(e.direction))),r},intersectsRay:M,projectPoint:T,setAltitudeAt:function(t,e,r,n){const i=N(t,e),o=v(t,e,s.Z,b),a=(0,u.g)(b,o,r-i);return(0,u.a)(n,e,a)},setExtent:function(t,e,r){return i.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===r?r:y(t,r)},tmpSphere:C,union:function(t,e,r=_()){const s=(0,u.i)(t,e),n=t[3],i=e[3];return s+i<n?((0,l.c)(r,t),r):s+n<i?((0,l.c)(r,e),r):((0,u.h)(r,t,e,(s+i-n)/(2*s)),r[3]=(s+n+i)/2,r)},wrap:function(t){return t}},Symbol.toStringTag,{value:"Module"}))},25015:(t,e,r)=>{var s;r.d(e,{Y:()=>s}),function(t){t[t.KILOBYTES=1024]="KILOBYTES",t[t.MEGABYTES=1048576]="MEGABYTES",t[t.GIGABYTES=1073741824]="GIGABYTES"}(s||(s={}))},19480:(t,e,r)=>{r.d(e,{x:()=>n});var s=r(66581);class n{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,s.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024},61170:(t,e,r)=>{r.d(e,{rS:()=>c});var s=r(69442),n=r(14685),i=r(35925);const o=new n.Z(s.kU),a=new n.Z(s.JL),u=new n.Z(s.mM);function c(t){return t&&((0,i.BZ)(t)||(0,i.fS)(t,a))?a:t&&((0,i.V2)(t)||(0,i.fS)(t,u))?u:o}new n.Z(s.pn)},39050:(t,e,r)=>{r(19431),r(6766);var s,n,i=r(8909);r(45612),r(5700),r(68817),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(n=s||(s={}))[n.NONE=0]="NONE",n[n.CLAMP=1]="CLAMP",n[n.INFINITE_MIN=4]="INFINITE_MIN",n[n.INFINITE_MAX=8]="INFINITE_MAX",s.INFINITE_MIN,s.INFINITE_MAX,s.INFINITE_MAX},97537:(t,e,r)=>{r.d(e,{JI:()=>c,Ue:()=>o,re:()=>u}),r(7753);var s=r(19480),n=r(6766),i=r(8909);function o(t){return t?a((0,i.a)(t.origin),(0,i.a)(t.direction)):a((0,i.c)(),(0,i.c)())}function a(t,e){return{origin:t,direction:e}}function u(t,e){const r=l.get();return r.origin=t,r.direction=e,r}function c(t,e,r){const s=(0,n.e)(t.direction,(0,n.b)(r,e,t.origin));return(0,n.a)(r,t.origin,(0,n.g)(r,t.direction,s)),r}r(68817);const l=new s.x((()=>o()))},5700:(t,e,r)=>{r.d(e,{EU:()=>o});var s=r(19431),n=r(6766),i=r(8909);function o(t,e){const r=(0,n.e)(t,e)/((0,n.l)(t)*(0,n.l)(e));return-(0,s.ZF)(r)}(0,i.c)(),(0,i.c)()},68817:(t,e,r)=>{r.d(e,{MP:()=>d,WM:()=>f});var s=r(25015),n=r(66581),i=r(34344),o=r(39100),a=r(61044),u=r(69666),c=r(8909),l=r(1983);class p{constructor(t,e,r){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,n.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=h){return new p(16,u.c,t)}static createVec3f64(t=h){return new p(24,c.b,t)}static createVec4f64(t=h){return new p(32,l.a,t)}static createMat3f64(t=h){return new p(72,i.a,t)}static createMat4f64(t=h){return new p(128,o.a,t)}static createQuatf64(t=h){return new p(32,a.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*s.Y.KILOBYTES,f=(p.createVec2f64(),p.createVec3f64()),d=(p.createVec4f64(),p.createMat3f64(),p.createMat4f64());p.createQuatf64()},31906:(t,e,r)=>{r.d(e,{W:()=>c});var s=r(88256),n=r(66341),i=r(78668),o=r(12926),a=r(93968),u=r(53110);class c{constructor(t,e,r,s){this._parsedUrl=t,this._portalItem=e,this._apiKey=r,this.signal=s,this._rootDocument=null;const n=this._parsedUrl?.path.match(/^(.*)\/SceneServer\/layers\/([\d]*)\/?$/i);n&&(this._urlParts={root:n[1],layerId:parseInt(n[2],10)})}async fetch(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();if(null==t)return this._loadFromUrl();const e=await this._findAndLoadRelatedPortalItem(t);return null==e?null:this._loadFeatureLayerFromPortalItem(e)}async fetchPortalItem(){if(!this._urlParts)return null;const t=this._portalItem??await this._portalItemFromServiceItemId();return null==t?null:this._findAndLoadRelatedPortalItem(t)}async _fetchRootDocument(){if(null!=this._rootDocument)return this._rootDocument;if(null==this._urlParts)return this._rootDocument={},{};const t={query:{f:"json",token:this._apiKey},responseType:"json",signal:this.signal},e=`${this._urlParts.root}/SceneServer`;try{const r=await(0,n.default)(e,t);this._rootDocument=r.data}catch{this._rootDocument={}}return this._rootDocument}async _fetchServiceOwningPortalUrl(){const t=this._parsedUrl?.path,e=t?s.id?.findServerInfo(t):null;if(e?.owningSystemUrl)return e.owningSystemUrl;const r=t?t.replace(/(.*\/rest)\/.*/i,"$1")+"/info":null;try{const t=(await(0,n.default)(r,{query:{f:"json"},responseType:"json",signal:this.signal})).data.owningSystemUrl;if(t)return t}catch(t){(0,i.r9)(t)}return null}async _findAndLoadRelatedPortalItem(t){try{return(await t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:this.signal})).find((t=>"Feature Service"===t.type))||null}catch(t){return(0,i.r9)(t),null}}async _loadFeatureLayerFromPortalItem(t){await t.load({signal:this.signal});const e=await this._findMatchingAssociatedSublayerUrl(t.url??"");return new o.default({url:e,portalItem:t}).load({signal:this.signal})}async _loadFromUrl(){const t=await this._findMatchingAssociatedSublayerUrl(`${this._urlParts?.root}/FeatureServer`);return new o.default({url:t}).load({signal:this.signal})}async _findMatchingAssociatedSublayerUrl(t){const e=t.replace(/^(.*FeatureServer)(\/[\d]*\/?)?$/i,"$1"),r=this._urlParts?.layerId,s=this._fetchRootDocument(),i=t=>{const r={query:{f:"json"},responseType:"json",authMode:t,signal:this.signal};return(0,n.default)(e,r)},o=i("anonymous").catch((()=>i("no-prompt"))),[a,u]=await Promise.all([o,s]),c=u&&u.layers,l=a.data&&a.data.layers;if(!Array.isArray(l))throw new Error("expected layers array");if(Array.isArray(c)){for(let t=0;t<Math.min(c.length,l.length);t++)if(c[t].id===r)return`${e}/${l[t].id}`}else if(null!=r&&r<l.length)return`${e}/${l[r].id}`;throw new Error("could not find matching associated sublayer")}async _portalItemFromServiceItemId(){const t=(await this._fetchRootDocument()).serviceItemId;if(!t)return null;const e=new u.default({id:t,apiKey:this._apiKey}),r=await this._fetchServiceOwningPortalUrl();null!=r&&(e.portal=new a.Z({url:r}));try{return e.load({signal:this.signal})}catch(t){return(0,i.r9)(t),null}}}},31484:(t,e,r)=>{r.d(e,{C:()=>s});const s={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsResize:!1},data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},query:{maxRecordCount:0,maxRecordCountFactor:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}}},11530:(t,e,r)=>{r.d(e,{xe:()=>S});var s=r(66341),n=(r(7753),r(70375),r(39994),r(78668)),i=r(86098),o=(r(1662),r(34344)),a=(r(24455),r(39100)),u=(r(10663),r(70347)),c=(r(6766),r(8909)),l=(r(69442),r(92376),r(14685),r(61170),r(24568)),p=(r(35925),r(14626),r(9512));r(30936);var h,f,d=r(1983);(f=h||(h={}))[f.INVISIBLE=0]="INVISIBLE",f[f.TRANSPARENT=1]="TRANSPARENT",f[f.OPAQUE=2]="OPAQUE";(0,d.f)(0,0,0,.2),h.OPAQUE;(0,d.f)(0,0,0,.2),h.OPAQUE,r(66352);var m=r(61044),_=r(79912);r(88589),r(37116),r(39050),r(65684),(0,m.a)(),(0,c.c)(),(0,c.c)(),(0,d.c)(),(0,o.c)(),(()=>{const t=new Int8Array(162);let e=0;const r=r=>{for(let s=0;s<r.length;s++)t[e+s]=r[s];e+=6};r([6,2,3,1,5,4]),r([0,2,3,1,5,4]),r([0,2,3,7,5,4]),r([0,1,3,2,6,4]),r([0,1,3,2,0,0]),r([0,1,5,7,3,2]),r([0,1,3,7,6,4]),r([0,1,3,7,6,2]),r([0,1,5,7,6,2]),r([0,1,5,4,6,2]),r([0,1,5,4,0,0]),r([0,1,3,7,5,4]),r([0,2,6,4,0,0]),r([0,0,0,0,0,0]),r([1,3,7,5,0,0]),r([2,3,7,6,4,0]),r([2,3,7,6,0,0]),r([2,3,1,5,7,6]),r([0,1,5,7,6,2]),r([0,1,5,7,6,4]),r([0,1,3,7,6,4]),r([4,5,7,6,2,0]),r([4,5,7,6,0,0]),r([4,5,1,3,7,6]),r([0,2,3,7,5,4]),r([6,2,3,7,5,4]),r([6,2,3,1,5,4])})(),(0,c.c)(),(0,c.c)(),(0,c.c)(),(0,m.a)();var y,g,I=r(85799);function S(t,e,r,i,o){const a=[];for(const s of e)if(s&&o.includes(s.name)){const e=`${t}/nodes/${r}/attributes/${s.key}/0`;a.push({url:e,storageInfo:s})}return(0,n.as)(a.map((t=>(0,s.default)(t.url,{responseType:"array-buffer"}).then((e=>(0,p.qM)(t.storageInfo,e.data)))))).then((t=>{const e=[];for(const r of i){const s={};for(let e=0;e<t.length;e++){const n=t[e].value;null!=n&&(s[a[e].storageInfo.name]=P(n,r))}e.push(s)}return e}))}(0,l.Ue)(),(g=y||(y={}))[g.OUTSIDE=0]="OUTSIDE",g[g.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",g[g.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",g[g.INSIDE=3]="INSIDE";const E=-32768,M=-(2**31);function P(t,e){if(!t)return null;const r=t[e];return(0,i.z3)(t)?r===E?null:r:(0,i.Hx)(t)?r===M?null:r:r!=r?null:r}const T=new Array(24);new I.a(T,3,!0),(0,c.c)(),(0,c.c)(),(0,o.c)(),(0,a.c)(),(0,u.c)(),(0,l.Ue)(),(0,l.Ue)(),function(t=[0,0,0],e=[-1,-1,-1],r=(0,m.a)()){(0,c.a)(t),(0,_.b)(e),(0,u.b)(r)}(),(0,c.c)(),new Array(72),(0,a.c)()},66352:(t,e,r)=>{var s,n;r.d(e,{a9:()=>s}),r(19431),(n=s||(s={}))[n.Multiply=1]="Multiply",n[n.Ignore=2]="Ignore",n[n.Replace=3]="Replace",n[n.Tint=4]="Tint"},85799:(t,e,r)=>{r.d(e,{a:()=>s});class s{constructor(t,e,r=!1,s=e){this.data=t,this.size=e,this.exclusive=r,this.stride=s}}},59439:(t,e,r)=>{r.d(e,{V5:()=>i,e7:()=>n});var s=r(14845);async function n(t,e=t.popupTemplate){if(null==e)return[];const r=await e.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=e,{objectIdField:i,typeIdField:o,globalIdField:a,relationships:u}=t;if(r.includes("*"))return["*"];const c=n?await(0,s.CH)(t):[],l=(0,s.Q0)(t.fieldsIndex,[...r,...c]);return o&&l.push(o),l&&i&&t.fieldsIndex?.has(i)&&!l.includes(i)&&l.push(i),l&&a&&t.fieldsIndex?.has(a)&&!l.includes(a)&&l.push(a),u&&u.forEach((e=>{const{keyField:r}=e;l&&r&&t.fieldsIndex?.has(r)&&!l.includes(r)&&l.push(r)})),l}function i(t,e){return t.popupTemplate?t.popupTemplate:null!=e&&e.defaultPopupTemplateEnabled&&null!=t.defaultPopupTemplate?t.defaultPopupTemplate:null}}}]);