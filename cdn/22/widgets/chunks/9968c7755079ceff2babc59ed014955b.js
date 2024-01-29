/*! For license information please see 9968c7755079ceff2babc59ed014955b.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[81867],{81867:(t,i,e)=>{e.r(i),e.d(i,{arcgis_xy_slider:()=>h});var s=e(28384);const h=class{constructor(t){(0,s.r)(this,t),this.arcgisXYSliderChange=(0,s.c)(this,"arcgisXYSliderChange",7),this.arcgisXYSliderInput=(0,s.c)(this,"arcgisXYSliderInput",7),this.snapKeyDown=!1,this.dragging=!1,this.width=100,this.height=100,this.gridMouseDownHandler=t=>{const{offsetX:i,offsetY:e}=t;this.dragging=!0,this.captureValue(i,e),t.preventDefault(),document.addEventListener("pointermove",this.globalMouseMoveHandler),document.addEventListener("pointerup",this.globalMouseUpHandler,{once:!0}),this.activeGridRect=this.context.canvas.getBoundingClientRect(),this.setFocus(),this.drawGrid()},this.globalMouseMoveHandler=t=>{const{el:i,activeGridRect:e}=this;if(!i.isConnected)return;let s,h;const n=e,{clientX:a,clientY:r}=t;if(this.gridHovered)s=a-n.x,h=r-n.y;else{const t=n.width,i=n.height;s=a<n.x+t&&a>n.x?a-n.x:a<n.x?0:t,h=r<n.y+i&&r>n.y?r-n.y:r<n.y?0:i}this.captureValue(s,h),this.drawGrid()},this.globalMouseUpHandler=()=>{this.dragging=!1,this.arcgisXYSliderChange.emit(),document.removeEventListener("mousemove",this.globalMouseMoveHandler),document.removeEventListener("pointermove",this.globalMouseMoveHandler)},this.gridMouseEnter=()=>{this.gridHovered=!0},this.gridMouseLeave=()=>{this.gridHovered=!1},this.handleThumbKeyDown=({key:t})=>{let i,e;e="ArrowDown"===t?this.clamp(this.y+this.step,this.maxY,this.minY):"ArrowUp"===t?this.clamp(this.y-this.step,this.maxY,this.minY):this.y,i="ArrowLeft"===t?this.clamp(this.x-this.step,this.maxX,this.minX):"ArrowRight"===t?this.clamp(this.x+this.step,this.maxX,this.minX):this.x,this.userSetXY(i,e),this.drawGrid()},this.handleKeyUp=({shiftKey:t})=>{this.snapKeyDown=t},this.handleKeyDown=({shiftKey:t})=>{this.snapKeyDown=t},this.initGrid=t=>{this.context=t.getContext("2d"),this.setCanvasContextSize(t,{width:this.width,height:this.height}),this.drawGrid()},this.maxX=10,this.minX=-10,this.maxY=10,this.minY=-10,this.snappable=!1,this.step=1,this.x=0,this.y=0}disconnectedCallback(){document.removeEventListener("pointermove",this.globalMouseMoveHandler),document.removeEventListener("pointerup",this.globalMouseUpHandler)}handleXChange(t){this.x=this.clampX(t),this.drawGrid()}handleYChange(t){this.y=this.clampY(t),this.drawGrid()}clamp(t,i,e){return Math.min(i,Math.max(e,t))}clampX(t){return this.clamp(t,this.maxX,this.minX)}clampY(t){return this.clamp(t,this.maxY,this.minY)}userSetXY(t,i){t=this.normalize(t),i=this.normalize(i),this.x===t&&this.y===i||(this.x=t,this.y=i,this.arcgisXYSliderInput.emit(),this.dragging||this.arcgisXYSliderChange.emit())}mapToRange(t,i,e,s,h){return s+(t-i)*(h-s)/(e-i)}setCanvasContextSize(t,{height:i,width:e}){const s=window.devicePixelRatio||1;t.width=e*s,t.height=i*s,t.style.height=`${i}px`,t.style.width=`${e}px`,t.getContext("2d").scale(s,s)}normalize(t){return this.snappable||this.snapKeyDown?Math.floor(t/this.step):t}captureValue(t,i){this.userSetXY(this.mapToRange(t,0,this.width,this.minX,this.maxX),this.mapToRange(i,0,this.height,this.minY,this.maxY))}drawGrid(){const{context:t,height:i,width:e}=this;t.fillStyle="#ffffff",t.strokeStyle="#d4d4d4",t.lineWidth=2,t.setLineDash([2]),t.fillRect(0,0,e,i),t.strokeRect(0,0,e,i),t.beginPath(),t.moveTo(0,i/2),t.lineTo(e,i/2),t.stroke(),t.beginPath(),t.moveTo(e/2,0),t.lineTo(e/2,i),t.stroke(),t.setLineDash([]);const s=this.mapToRange(this.x,this.minX,this.maxX,0,this.width),h=this.mapToRange(this.y,this.minY,this.maxY,0,this.height);t.strokeStyle="rgba(0, 97, 155, 0.4)",t.lineWidth=2,t.beginPath(),t.moveTo(e/2,i/2),t.lineTo(s,h),t.stroke()}async setFocus(){this.thumbEl.focus()}render(){const t=`${this.mapToRange(this.x,this.minX,this.maxX,0,this.width)}%`,i=`${this.mapToRange(this.y,this.minY,this.maxY,0,this.height)}%`;return(0,s.h)(s.H,{onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown},(0,s.h)("div",{class:"container"},(0,s.h)("canvas",{class:"grid",onPointerDown:this.gridMouseDownHandler,onPointerEnter:this.gridMouseEnter,onPointerLeave:this.gridMouseLeave,ref:this.initGrid}),(0,s.h)("div",{class:"thumb",ref:t=>this.thumbEl=t,style:{left:t,top:i},tabIndex:0,onKeyDown:this.handleThumbKeyDown})))}get el(){return(0,s.d)(this)}static get watchers(){return{x:["handleXChange"],y:["handleYChange"]}}};h.style=":host{display:inline-flex}.container{position:relative;width:100px;height:100px}.grid{width:100px;height:100px}.thumb{position:absolute;background-color:var(--calcite-ui-brand);width:12px;height:12px;display:inline-block;border-radius:50%;margin-left:-6px;margin-top:-6px;pointer-events:none}"}}]);