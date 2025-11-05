import{r as d,y as se,R as _,j as s,b as Ce}from"./index-n5lagw8Y.js";import{C as K}from"./CardBox-DP5V6wyZ.js";import{$ as lt,a as dt}from"./useFocusRing-BQxkpHIn.js";import{w as gt}from"./use-active-press-BchvfSUV.js";import{u as yt}from"./use-by-comparator-bDtqTRsZ.js";import{l as wt,b as Ct}from"./use-default-value-5dcV75jC.js";import{o as E,u as de,Y as ve,p as St,a as ge,V as Be,K as ye,n as ae,c as jt,A as Ue,b as Ot}from"./render-D9E-06xR.js";import{F as kt,y as Pt,R as Nt,T as Et,w as He,A as Tt}from"./floating-Dkc68wZW.js";import{a as M,p as It,c as fe,f as Ge,b as Rt,u as $t,L as Mt,S as be,s as Dt,g as Ft}from"./element-movement-BBURSpKm.js";import{y as zt}from"./use-inert-others-0-7KICMh.js";import{T as At,x as ct,b as Lt,c as Kt,S as D,u as Xe,p as Vt,f as Wt,t as Bt,k as _t,n as qt}from"./portal-Cdyr5OxY.js";import{l as Ye,n as Qt}from"./dom-BlW_0b_t.js";import{d as ut}from"./owner-CneWfzVc.js";import{E as Ut}from"./use-event-listener-BvgRGIId.js";import{e as Ht}from"./use-resolve-button-type-B08ktXI3.js";import{y as Oe}from"./use-sync-refs-CefhOWeT.js";import{u as Gt,N as Xt,x as Yt,c as Jt,i as je}from"./open-closed-0N_3BWp3.js";import{F as Zt}from"./use-tree-walker-DdBzBlPK.js";import{m as Je,n as Ze}from"./active-element-history-Bq8mrfFr.js";import{a as en}from"./disabled-CIuDn_DF.js";import{j as tn,W as ce}from"./field-CkLRacoC.js";import{u as et,s as nn}from"./frozen-U8UN-oPw.js";import{Z as ke,u as on,N as _e,V as rn}from"./label-9sDPupFE.js";import{w as sn}from"./description-CMFfDl8O.js";import{o as H}from"./keyboard-C1Wiwm26.js";import{G as an}from"./focus-management-Ds-lPg9b.js";import{C as ue}from"./CodeDialog-BcgW2Qgx.js";import{I as tt}from"./iconify-VfOFnMl8.js";import{A as ln,m as dn}from"./proxy-D5zimsvB.js";import{B as cn}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./bugs-BLuxiOOY.js";import"./with-selector-uup4H7fL.js";import"./hidden-C2xwWGhP.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";function le(n,a,e){let r=e.initialDeps??[],o;function t(){var i,l,m,c;let u;e.key&&((i=e.debug)!=null&&i.call(e))&&(u=Date.now());const v=n();if(!(v.length!==r.length||v.some((p,g)=>r[g]!==p)))return o;r=v;let h;if(e.key&&((l=e.debug)!=null&&l.call(e))&&(h=Date.now()),o=a(...v),e.key&&((m=e.debug)!=null&&m.call(e))){const p=Math.round((Date.now()-u)*100)/100,g=Math.round((Date.now()-h)*100)/100,w=g/16,P=(R,T)=>{for(R=String(R);R.length<T;)R=" "+R;return R};console.info(`%c⏱ ${P(g,5)} /${P(p,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*w,120))}deg 100% 31%);`,e?.key)}return(c=e?.onChange)==null||c.call(e,o),o}return t.updateDeps=i=>{r=i},t}function nt(n,a){if(n===void 0)throw new Error("Unexpected undefined");return n}const un=(n,a)=>Math.abs(n-a)<1.01,mn=(n,a,e)=>{let r;return function(...o){n.clearTimeout(r),r=n.setTimeout(()=>a.apply(this,o),e)}},ot=n=>{const{offsetWidth:a,offsetHeight:e}=n;return{width:a,height:e}},pn=n=>n,hn=n=>{const a=Math.max(n.startIndex-n.overscan,0),e=Math.min(n.endIndex+n.overscan,n.count-1),r=[];for(let o=a;o<=e;o++)r.push(o);return r},bn=(n,a)=>{const e=n.scrollElement;if(!e)return;const r=n.targetWindow;if(!r)return;const o=i=>{const{width:l,height:m}=i;a({width:Math.round(l),height:Math.round(m)})};if(o(ot(e)),!r.ResizeObserver)return()=>{};const t=new r.ResizeObserver(i=>{const l=()=>{const m=i[0];if(m?.borderBoxSize){const c=m.borderBoxSize[0];if(c){o({width:c.inlineSize,height:c.blockSize});return}}o(ot(e))};n.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(l):l()});return t.observe(e,{box:"border-box"}),()=>{t.unobserve(e)}},rt={passive:!0},st=typeof window>"u"?!0:"onscrollend"in window,fn=(n,a)=>{const e=n.scrollElement;if(!e)return;const r=n.targetWindow;if(!r)return;let o=0;const t=n.options.useScrollendEvent&&st?()=>{}:mn(r,()=>{a(o,!1)},n.options.isScrollingResetDelay),i=u=>()=>{const{horizontal:v,isRtl:f}=n.options;o=v?e.scrollLeft*(f&&-1||1):e.scrollTop,t(),a(o,u)},l=i(!0),m=i(!1);m(),e.addEventListener("scroll",l,rt);const c=n.options.useScrollendEvent&&st;return c&&e.addEventListener("scrollend",m,rt),()=>{e.removeEventListener("scroll",l),c&&e.removeEventListener("scrollend",m)}},xn=(n,a,e)=>{if(a?.borderBoxSize){const r=a.borderBoxSize[0];if(r)return Math.round(r[e.options.horizontal?"inlineSize":"blockSize"])}return n[e.options.horizontal?"offsetWidth":"offsetHeight"]},vn=(n,{adjustments:a=0,behavior:e},r)=>{var o,t;const i=n+a;(t=(o=r.scrollElement)==null?void 0:o.scrollTo)==null||t.call(o,{[r.options.horizontal?"left":"top"]:i,behavior:e})};class gn{constructor(a){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this.elementsCache=new Map,this.observer=(()=>{let e=null;const r=()=>e||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:e=new this.targetWindow.ResizeObserver(o=>{o.forEach(t=>{const i=()=>{this._measureElement(t.target,t)};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(i):i()})}));return{disconnect:()=>{var o;(o=r())==null||o.disconnect(),e=null},observe:o=>{var t;return(t=r())==null?void 0:t.observe(o,{box:"border-box"})},unobserve:o=>{var t;return(t=r())==null?void 0:t.unobserve(o)}}})(),this.range=null,this.setOptions=e=>{Object.entries(e).forEach(([r,o])=>{typeof o>"u"&&delete e[r]}),this.options={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:pn,rangeExtractor:hn,onChange:()=>{},measureElement:xn,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,...e}},this.notify=e=>{var r,o;(o=(r=this.options).onChange)==null||o.call(r,this,e)},this.maybeNotify=le(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;const r=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==r){if(this.cleanup(),!r){this.maybeNotify();return}this.scrollElement=r,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((e=this.scrollElement)==null?void 0:e.window)??null,this.elementsCache.forEach(o=>{this.observer.observe(o)}),this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0}),this.unsubs.push(this.options.observeElementRect(this,o=>{this.scrollRect=o,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(o,t)=>{this.scrollAdjustments=0,this.scrollDirection=t?this.getScrollOffset()<o?"forward":"backward":null,this.scrollOffset=o,this.isScrolling=t,this.maybeNotify()}))}},this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,r)=>{const o=new Map,t=new Map;for(let i=r-1;i>=0;i--){const l=e[i];if(o.has(l.lane))continue;const m=t.get(l.lane);if(m==null||l.end>m.end?t.set(l.lane,l):l.end<m.end&&o.set(l.lane,!0),o.size===this.options.lanes)break}return t.size===this.options.lanes?Array.from(t.values()).sort((i,l)=>i.end===l.end?i.index-l.index:i.end-l.end)[0]:void 0},this.getMeasurementOptions=le(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled],(e,r,o,t,i)=>(this.pendingMeasuredCacheIndexes=[],{count:e,paddingStart:r,scrollMargin:o,getItemKey:t,enabled:i}),{key:!1}),this.getMeasurements=le(()=>[this.getMeasurementOptions(),this.itemSizeCache],({count:e,paddingStart:r,scrollMargin:o,getItemKey:t,enabled:i},l)=>{if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),[];this.measurementsCache.length===0&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(u=>{this.itemSizeCache.set(u.key,u.size)}));const m=this.pendingMeasuredCacheIndexes.length>0?Math.min(...this.pendingMeasuredCacheIndexes):0;this.pendingMeasuredCacheIndexes=[];const c=this.measurementsCache.slice(0,m);for(let u=m;u<e;u++){const v=t(u),f=this.options.lanes===1?c[u-1]:this.getFurthestMeasurement(c,u),h=f?f.end+this.options.gap:r+o,p=l.get(v),g=typeof p=="number"?p:this.options.estimateSize(u),w=h+g,P=f?f.lane:u%this.options.lanes;c[u]={index:u,start:h,size:g,end:w,key:v,lane:P}}return this.measurementsCache=c,c},{key:!1,debug:()=>this.options.debug}),this.calculateRange=le(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,r,o,t)=>this.range=e.length>0&&r>0?yn({measurements:e,outerSize:r,scrollOffset:o,lanes:t}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=le(()=>{let e=null,r=null;const o=this.calculateRange();return o&&(e=o.startIndex,r=o.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,r]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,r]},(e,r,o,t,i)=>t===null||i===null?[]:e({startIndex:t,endIndex:i,overscan:r,count:o}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{const r=this.options.indexAttribute,o=e.getAttribute(r);return o?parseInt(o,10):(console.warn(`Missing attribute name '${r}={index}' on measured element.`),-1)},this._measureElement=(e,r)=>{const o=this.indexFromElement(e),t=this.measurementsCache[o];if(!t)return;const i=t.key,l=this.elementsCache.get(i);l!==e&&(l&&this.observer.unobserve(l),this.observer.observe(e),this.elementsCache.set(i,e)),e.isConnected&&this.resizeItem(o,this.options.measureElement(e,r,this))},this.resizeItem=(e,r)=>{const o=this.measurementsCache[e];if(!o)return;const t=this.itemSizeCache.get(o.key)??o.size,i=r-t;i!==0&&((this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(o,i,this):o.start<this.getScrollOffset()+this.scrollAdjustments)&&this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:void 0}),this.pendingMeasuredCacheIndexes.push(o.index),this.itemSizeCache=new Map(this.itemSizeCache.set(o.key,r)),this.notify(!1))},this.measureElement=e=>{if(!e){this.elementsCache.forEach((r,o)=>{r.isConnected||(this.observer.unobserve(r),this.elementsCache.delete(o))});return}this._measureElement(e,void 0)},this.getVirtualItems=le(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,r)=>{const o=[];for(let t=0,i=e.length;t<i;t++){const l=e[t],m=r[l];o.push(m)}return o},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{const r=this.getMeasurements();if(r.length!==0)return nt(r[mt(0,r.length-1,o=>nt(r[o]).start,e)])},this.getOffsetForAlignment=(e,r,o=0)=>{const t=this.getSize(),i=this.getScrollOffset();r==="auto"&&(r=e>=i+t?"end":"start"),r==="center"?e+=(o-t)/2:r==="end"&&(e-=t);const l=this.getTotalSize()+this.options.scrollMargin-t;return Math.max(Math.min(l,e),0)},this.getOffsetForIndex=(e,r="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));const o=this.measurementsCache[e];if(!o)return;const t=this.getSize(),i=this.getScrollOffset();if(r==="auto")if(o.end>=i+t-this.options.scrollPaddingEnd)r="end";else if(o.start<=i+this.options.scrollPaddingStart)r="start";else return[i,r];const l=r==="end"?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,r,o.size),r]},this.isDynamicMode=()=>this.elementsCache.size>0,this.scrollToOffset=(e,{align:r="start",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getOffsetForAlignment(e,r),{adjustments:void 0,behavior:o})},this.scrollToIndex=(e,{align:r="auto",behavior:o}={})=>{o==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e=Math.max(0,Math.min(e,this.options.count-1));let t=0;const i=10,l=c=>{if(!this.targetWindow)return;const u=this.getOffsetForIndex(e,c);if(!u){console.warn("Failed to get offset for index:",e);return}const[v,f]=u;this._scrollToOffset(v,{adjustments:void 0,behavior:o}),this.targetWindow.requestAnimationFrame(()=>{const h=this.getScrollOffset(),p=this.getOffsetForIndex(e,f);if(!p){console.warn("Failed to get offset for index:",e);return}un(p[0],h)||m(f)})},m=c=>{this.targetWindow&&(t++,t<i?this.targetWindow.requestAnimationFrame(()=>l(c)):console.warn(`Failed to scroll to index ${e} after ${i} attempts.`))};l(r)},this.scrollBy=(e,{behavior:r}={})=>{r==="smooth"&&this.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),this._scrollToOffset(this.getScrollOffset()+e,{adjustments:void 0,behavior:r})},this.getTotalSize=()=>{var e;const r=this.getMeasurements();let o;if(r.length===0)o=this.options.paddingStart;else if(this.options.lanes===1)o=((e=r[r.length-1])==null?void 0:e.end)??0;else{const t=Array(this.options.lanes).fill(null);let i=r.length-1;for(;i>=0&&t.some(l=>l===null);){const l=r[i];t[l.lane]===null&&(t[l.lane]=l.end),i--}o=Math.max(...t.filter(l=>l!==null))}return Math.max(o-this.options.scrollMargin+this.options.paddingEnd,0)},this._scrollToOffset=(e,{adjustments:r,behavior:o})=>{this.options.scrollToFn(e,{behavior:o,adjustments:r},this)},this.measure=()=>{this.itemSizeCache=new Map,this.notify(!1)},this.setOptions(a)}}const mt=(n,a,e,r)=>{for(;n<=a;){const o=(n+a)/2|0,t=e(o);if(t<r)n=o+1;else if(t>r)a=o-1;else return o}return n>0?n-1:0};function yn({measurements:n,outerSize:a,scrollOffset:e,lanes:r}){const o=n.length-1,t=m=>n[m].start;if(n.length<=r)return{startIndex:0,endIndex:o};let i=mt(0,o,t,e),l=i;if(r===1)for(;l<o&&n[l].end<e+a;)l++;else if(r>1){const m=Array(r).fill(0);for(;l<o&&m.some(u=>u<e+a);){const u=n[l];m[u.lane]=u.end,l++}const c=Array(r).fill(e+a);for(;i>=0&&c.some(u=>u>=e);){const u=n[i];c[u.lane]=u.start,i--}i=Math.max(0,i-i%r),l=Math.min(o,l+(r-1-l%r))}return{startIndex:i,endIndex:l}}const at=typeof document<"u"?d.useLayoutEffect:d.useEffect;function wn(n){const a=d.useReducer(()=>({}),{})[1],e={...n,onChange:(o,t)=>{var i;t?se.flushSync(a):a(),(i=n.onChange)==null||i.call(n,o,t)}},[r]=d.useState(()=>new gn(e));return r.setOptions(e),at(()=>r._didMount(),[]),at(()=>r._willUpdate()),r}function Cn(n){return wn({observeElementRect:bn,observeElementOffset:fn,scrollToFn:vn,...n})}function pt(n){let a=d.useRef({value:"",selectionStart:null,selectionEnd:null});return Ut(n,"blur",e=>{let r=e.target;Ye(r)&&(a.current={value:r.value,selectionStart:r.selectionStart,selectionEnd:r.selectionEnd})}),E(()=>{if(!ut(n)&&Ye(n)&&n.isConnected){if(n.focus({preventScroll:!0}),n.value!==a.current.value)n.setSelectionRange(n.value.length,n.value.length);else{let{selectionStart:e,selectionEnd:r}=a.current;e!==null&&r!==null&&n.setSelectionRange(e,r)}a.current={value:"",selectionStart:null,selectionEnd:null}}})}var Sn=Object.defineProperty,jn=(n,a,e)=>a in n?Sn(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e,it=(n,a,e)=>(jn(n,typeof a!="symbol"?a+"":a,e),e),x=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(x||{}),Y=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(Y||{}),te=(n=>(n[n.Pointer=0]="Pointer",n[n.Focus=1]="Focus",n[n.Other=2]="Other",n))(te||{}),ht=(n=>(n[n.OpenCombobox=0]="OpenCombobox",n[n.CloseCombobox=1]="CloseCombobox",n[n.GoToOption=2]="GoToOption",n[n.SetTyping=3]="SetTyping",n[n.RegisterOption=4]="RegisterOption",n[n.UnregisterOption=5]="UnregisterOption",n[n.DefaultToFirstOption=6]="DefaultToFirstOption",n[n.SetActivationTrigger=7]="SetActivationTrigger",n[n.UpdateVirtualConfiguration=8]="UpdateVirtualConfiguration",n[n.SetInputElement=9]="SetInputElement",n[n.SetButtonElement=10]="SetButtonElement",n[n.SetOptionsElement=11]="SetOptionsElement",n[n.MarkInputAsMoved=12]="MarkInputAsMoved",n))(ht||{});function Pe(n,a=e=>e){let e=n.activeOptionIndex!==null?n.options[n.activeOptionIndex]:null,r=a(n.options.slice()),o=r.length>0&&r[0].dataRef.current.order!==null?r.sort((i,l)=>i.dataRef.current.order-l.dataRef.current.order):an(r,i=>i.dataRef.current.domRef.current),t=e?o.indexOf(e):null;return t===-1&&(t=null),{options:o,activeOptionIndex:t}}let On={1(n){var a;if((a=n.dataRef.current)!=null&&a.disabled||n.comboboxState===1)return n;let e=n.inputElement?fe.Tracked(Rt(n.inputElement)):n.inputPositionState;return{...n,activeOptionIndex:null,comboboxState:1,isTyping:!1,activationTrigger:2,inputPositionState:e,__demoMode:!1}},0(n){var a,e;if((a=n.dataRef.current)!=null&&a.disabled||n.comboboxState===0)return n;if((e=n.dataRef.current)!=null&&e.value){let r=n.dataRef.current.calculateIndex(n.dataRef.current.value);if(r!==-1)return{...n,activeOptionIndex:r,comboboxState:0,__demoMode:!1,inputPositionState:fe.Idle}}return{...n,comboboxState:0,inputPositionState:fe.Idle,__demoMode:!1}},3(n,a){return n.isTyping===a.isTyping?n:{...n,isTyping:a.isTyping}},2(n,a){var e,r,o,t;if((e=n.dataRef.current)!=null&&e.disabled||n.optionsElement&&!((r=n.dataRef.current)!=null&&r.optionsPropsRef.current.static)&&n.comboboxState===1)return n;if(n.virtual){let{options:c,disabled:u}=n.virtual,v=a.focus===M.Specific?a.idx:Ge(a,{resolveItems:()=>c,resolveActiveIndex:()=>{var h,p;return(p=(h=n.activeOptionIndex)!=null?h:c.findIndex(g=>!u(g)))!=null?p:null},resolveDisabled:u,resolveId(){throw new Error("Function not implemented.")}}),f=(o=a.trigger)!=null?o:2;return n.activeOptionIndex===v&&n.activationTrigger===f?n:{...n,activeOptionIndex:v,activationTrigger:f,isTyping:!1,__demoMode:!1}}let i=Pe(n);if(i.activeOptionIndex===null){let c=i.options.findIndex(u=>!u.dataRef.current.disabled);c!==-1&&(i.activeOptionIndex=c)}let l=a.focus===M.Specific?a.idx:Ge(a,{resolveItems:()=>i.options,resolveActiveIndex:()=>i.activeOptionIndex,resolveId:c=>c.id,resolveDisabled:c=>c.dataRef.current.disabled}),m=(t=a.trigger)!=null?t:2;return n.activeOptionIndex===l&&n.activationTrigger===m?n:{...n,...i,isTyping:!1,activeOptionIndex:l,activationTrigger:m,__demoMode:!1}},4:(n,a)=>{var e,r,o,t;if((e=n.dataRef.current)!=null&&e.virtual)return{...n,options:[...n.options,a.payload]};let i=a.payload,l=Pe(n,c=>(c.push(i),c));n.activeOptionIndex===null&&(o=(r=n.dataRef.current).isSelected)!=null&&o.call(r,a.payload.dataRef.current.value)&&(l.activeOptionIndex=l.options.indexOf(i));let m={...n,...l,activationTrigger:2};return(t=n.dataRef.current)!=null&&t.__demoMode&&n.dataRef.current.value===void 0&&(m.activeOptionIndex=0),m},5:(n,a)=>{var e;if((e=n.dataRef.current)!=null&&e.virtual)return{...n,options:n.options.filter(o=>o.id!==a.id)};let r=Pe(n,o=>{let t=o.findIndex(i=>i.id===a.id);return t!==-1&&o.splice(t,1),o});return{...n,...r,activationTrigger:2}},6:(n,a)=>n.defaultToFirstOption===a.value?n:{...n,defaultToFirstOption:a.value},7:(n,a)=>n.activationTrigger===a.trigger?n:{...n,activationTrigger:a.trigger},8:(n,a)=>{var e,r;if(n.virtual===null)return{...n,virtual:{options:a.options,disabled:(e=a.disabled)!=null?e:()=>!1}};if(n.virtual.options===a.options&&n.virtual.disabled===a.disabled)return n;let o=n.activeOptionIndex;if(n.activeOptionIndex!==null){let t=a.options.indexOf(n.virtual.options[n.activeOptionIndex]);t!==-1?o=t:o=null}return{...n,activeOptionIndex:o,virtual:{options:a.options,disabled:(r=a.disabled)!=null?r:()=>!1}}},9:(n,a)=>n.inputElement===a.element?n:{...n,inputElement:a.element},10:(n,a)=>n.buttonElement===a.element?n:{...n,buttonElement:a.element},11:(n,a)=>n.optionsElement===a.element?n:{...n,optionsElement:a.element},12(n){return n.inputPositionState.kind!=="Tracked"?n:{...n,inputPositionState:fe.Moved}}};class qe extends At{constructor(a){super(a),it(this,"actions",{onChange:e=>{let{onChange:r,compare:o,mode:t,value:i}=this.state.dataRef.current;return de(t,{0:()=>r?.(e),1:()=>{let l=i.slice(),m=l.findIndex(c=>o(c,e));return m===-1?l.push(e):l.splice(m,1),r?.(l)}})},registerOption:(e,r)=>(this.send({type:4,payload:{id:e,dataRef:r}}),()=>{this.state.activeOptionIndex===this.state.dataRef.current.calculateIndex(r.current.value)&&this.send({type:6,value:!0}),this.send({type:5,id:e})}),goToOption:(e,r)=>(this.send({type:6,value:!1}),this.send({type:2,...e,trigger:r})),setIsTyping:e=>{this.send({type:3,isTyping:e})},closeCombobox:()=>{var e,r;this.send({type:1}),this.send({type:6,value:!1}),(r=(e=this.state.dataRef.current).onClose)==null||r.call(e)},openCombobox:()=>{this.send({type:0}),this.send({type:6,value:!0})},setActivationTrigger:e=>{this.send({type:7,trigger:e})},selectActiveOption:()=>{let e=this.selectors.activeOptionIndex(this.state);if(e!==null){if(this.actions.setIsTyping(!1),this.state.virtual)this.actions.onChange(this.state.virtual.options[e]);else{let{dataRef:r}=this.state.options[e];this.actions.onChange(r.current.value)}this.actions.goToOption({focus:M.Specific,idx:e})}},setInputElement:e=>{this.send({type:9,element:e})},setButtonElement:e=>{this.send({type:10,element:e})},setOptionsElement:e=>{this.send({type:11,element:e})}}),it(this,"selectors",{activeDescendantId:e=>{var r,o;let t=this.selectors.activeOptionIndex(e);if(t!==null)return e.virtual?(o=e.options.find(i=>!i.dataRef.current.disabled&&e.dataRef.current.compare(i.dataRef.current.value,e.virtual.options[t])))==null?void 0:o.id:(r=e.options[t])==null?void 0:r.id},activeOptionIndex:e=>{if(e.defaultToFirstOption&&e.activeOptionIndex===null&&(e.virtual?e.virtual.options.length>0:e.options.length>0)){if(e.virtual){let{options:o,disabled:t}=e.virtual,i=o.findIndex(l=>{var m;return!((m=t?.(l))!=null&&m)});if(i!==-1)return i}let r=e.options.findIndex(o=>!o.dataRef.current.disabled);if(r!==-1)return r}return e.activeOptionIndex},activeOption:e=>{var r,o;let t=this.selectors.activeOptionIndex(e);return t===null?null:e.virtual?e.virtual.options[t??0]:(o=(r=e.options[t])==null?void 0:r.dataRef.current.value)!=null?o:null},isActive:(e,r,o)=>{var t;let i=this.selectors.activeOptionIndex(e);return i===null?!1:e.virtual?i===e.dataRef.current.calculateIndex(r):((t=e.options[i])==null?void 0:t.id)===o},shouldScrollIntoView:(e,r,o)=>!(e.virtual||e.__demoMode||e.comboboxState!==0||e.activationTrigger===0||!this.selectors.isActive(e,r,o)),didInputMove(e){return e.inputPositionState.kind==="Moved"}});{let e=this.state.id,r=ct.get(null);this.disposables.add(r.on(Lt.Push,o=>{!r.selectors.isTop(o,e)&&this.state.comboboxState===0&&this.actions.closeCombobox()})),this.on(0,()=>r.actions.push(e)),this.on(1,()=>r.actions.pop(e))}this.disposables.group(e=>{this.on(1,r=>{r.inputElement&&(e.dispose(),e.add(It(r.inputElement,r.inputPositionState,()=>{this.send({type:12})})))})})}static new({id:a,virtual:e=null,__demoMode:r=!1}){var o;return new qe({id:a,dataRef:{current:{}},comboboxState:r?0:1,isTyping:!1,options:[],virtual:e?{options:e.options,disabled:(o=e.disabled)!=null?o:()=>!1}:null,activeOptionIndex:null,activationTrigger:2,inputElement:null,buttonElement:null,optionsElement:null,__demoMode:r,inputPositionState:fe.Idle})}reduce(a,e){return de(e.type,On,a,e)}}const bt=d.createContext(null);function we(n){let a=d.useContext(bt);if(a===null){let e=new Error(`<${n} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,ft),e}return a}function ft({id:n,virtual:a=null,__demoMode:e=!1}){let r=d.useMemo(()=>qe.new({id:n,virtual:a,__demoMode:e}),[]);return Kt(()=>r.dispose()),r}let xe=d.createContext(null);xe.displayName="ComboboxDataContext";function me(n){let a=d.useContext(xe);if(a===null){let e=new Error(`<${n} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,me),e}return a}let xt=d.createContext(null);function kn(n){let a=we("VirtualProvider"),e=me("VirtualProvider"),{options:r}=e.virtual,o=D(a,h=>h.optionsElement),[t,i]=d.useMemo(()=>{let h=o;if(!h)return[0,0];let p=window.getComputedStyle(h);return[parseFloat(p.paddingBlockStart||p.paddingTop),parseFloat(p.paddingBlockEnd||p.paddingBottom)]},[o]),l=Cn({enabled:r.length!==0,scrollPaddingStart:t,scrollPaddingEnd:i,count:r.length,estimateSize(){return 40},getScrollElement(){return a.state.optionsElement},overscan:12}),[m,c]=d.useState(0);ae(()=>{c(h=>h+1)},[r]);let u=l.getVirtualItems(),v=D(a,h=>h.activationTrigger===te.Pointer),f=D(a,a.selectors.activeOptionIndex);return u.length===0?null:_.createElement(xt.Provider,{value:l},_.createElement("div",{style:{position:"relative",width:"100%",height:`${l.getTotalSize()}px`},ref:h=>{h&&(v||f!==null&&r.length>f&&l.scrollToIndex(f))}},u.map(h=>{var p;return _.createElement(d.Fragment,{key:h.key},_.cloneElement((p=n.children)==null?void 0:p.call(n,{...n.slot,option:r[h.index]}),{key:`${m}-${h.key}`,"data-index":h.index,"aria-setsize":r.length,"aria-posinset":h.index+1,style:{position:"absolute",top:0,left:0,transform:`translateY(${h.start}px)`,overflowAnchor:"none"}}))})))}let Pn=d.Fragment;function Nn(n,a){let e=d.useId(),r=en(),{value:o,defaultValue:t,onChange:i,form:l,name:m,by:c,invalid:u=!1,disabled:v=r||!1,onClose:f,__demoMode:h=!1,multiple:p=!1,immediate:g=!1,virtual:w=null,nullable:P,...R}=n,T=wt(t),[I=p?[]:void 0,G]=Ct(o,i,T),C=ft({id:e,virtual:w,__demoMode:h}),q=d.useRef({static:!1,hold:!1}),N=yt(c),W=E(j=>w?c===null?w.options.indexOf(j):w.options.findIndex(re=>N(re,j)):C.state.options.findIndex(re=>N(re.dataRef.current.value,j))),Z=d.useCallback(j=>de(Q.mode,{[Y.Multi]:()=>I.some(re=>N(re,j)),[Y.Single]:()=>N(I,j)}),[I]),ee=D(C,j=>j.virtual),y=E(()=>f?.()),Q=d.useMemo(()=>({__demoMode:h,immediate:g,optionsPropsRef:q,value:I,defaultValue:T,disabled:v,invalid:u,mode:p?Y.Multi:Y.Single,virtual:w?ee:null,onChange:G,isSelected:Z,calculateIndex:W,compare:N,onClose:y}),[h,g,q,I,T,v,u,p,w,ee,G,Z,W,N,y]);ae(()=>{var j;w&&C.send({type:ht.UpdateVirtualConfiguration,options:w.options,disabled:(j=w.disabled)!=null?j:null})},[w,w?.options,w?.disabled]),ae(()=>{C.state.dataRef.current=Q},[Q]);let[U,S,J,pe]=D(C,j=>[j.comboboxState,j.buttonElement,j.inputElement,j.optionsElement]),ne=ct.get(null),ie=D(ne,d.useCallback(j=>ne.selectors.isTop(j,e),[ne,e]));_t(ie,[S,J,pe],()=>C.actions.closeCombobox());let oe=D(C,C.selectors.activeOptionIndex),he=D(C,C.selectors.activeOption),b=ge({open:U===x.Open,disabled:v,invalid:u,activeIndex:oe,activeOption:he,value:I}),[X,k]=rn(),L=a===null?{}:{ref:a},O=d.useCallback(()=>{if(T!==void 0)return G?.(T)},[G,T]),B=ye();return _.createElement(k,{value:X,props:{htmlFor:J?.id},slot:{open:U===x.Open,disabled:v}},_.createElement(Tt,null,_.createElement(xe.Provider,{value:Q},_.createElement(bt.Provider,{value:C},_.createElement(Jt,{value:de(U,{[x.Open]:je.Open,[x.Closed]:je.Closed})},m!=null&&_.createElement(tn,{disabled:v,data:I!=null?{[m]:I}:{},form:l,onReset:O}),B({ourProps:L,theirProps:R,slot:b,defaultTag:Pn,name:"Combobox"}))))))}let En="input";function Tn(n,a){var e,r;let o=we("Combobox.Input"),t=me("Combobox.Input"),i=d.useId(),l=on(),{id:m=l||`headlessui-combobox-input-${i}`,onChange:c,displayValue:u,disabled:v=t.disabled||!1,autoFocus:f=!1,type:h="text",...p}=n,g=d.useRef(null),w=Oe(g,a,kt(),o.actions.setInputElement),[P,R]=D(o,b=>[b.comboboxState,b.isTyping]),T=St(),I=E(()=>{o.actions.onChange(null),o.state.optionsElement&&(o.state.optionsElement.scrollTop=0),o.actions.goToOption({focus:M.Nothing})}),G=d.useMemo(()=>{var b;return typeof u=="function"&&t.value!==void 0?(b=u(t.value))!=null?b:"":typeof t.value=="string"?t.value:""},[t.value,u]);Je(([b,X],[k,L])=>{if(o.state.isTyping)return;let O=g.current;O&&((L===x.Open&&X===x.Closed||b!==k)&&(O.value=b),requestAnimationFrame(()=>{if(o.state.isTyping||!O||ut(O))return;let{selectionStart:B,selectionEnd:j}=O;Math.abs((j??0)-(B??0))===0&&B===0&&O.setSelectionRange(O.value.length,O.value.length)}))},[G,P,R]),Je(([b],[X])=>{if(b===x.Open&&X===x.Closed){if(o.state.isTyping)return;let k=g.current;if(!k)return;let L=k.value,{selectionStart:O,selectionEnd:B,selectionDirection:j}=k;k.value="",k.value=L,j!==null?k.setSelectionRange(O,B,j):k.setSelectionRange(O,B)}},[P]);let C=d.useRef(!1),q=E(()=>{C.current=!0}),N=E(()=>{T.nextFrame(()=>{C.current=!1})}),W=E(b=>{switch(o.actions.setIsTyping(!0),b.key){case H.Enter:if(o.state.comboboxState!==x.Open||C.current)return;if(b.preventDefault(),b.stopPropagation(),o.selectors.activeOptionIndex(o.state)===null){o.actions.closeCombobox();return}o.actions.selectActiveOption(),t.mode===Y.Single&&o.actions.closeCombobox();break;case H.ArrowDown:return b.preventDefault(),b.stopPropagation(),de(o.state.comboboxState,{[x.Open]:()=>o.actions.goToOption({focus:M.Next}),[x.Closed]:()=>o.actions.openCombobox()});case H.ArrowUp:return b.preventDefault(),b.stopPropagation(),de(o.state.comboboxState,{[x.Open]:()=>o.actions.goToOption({focus:M.Previous}),[x.Closed]:()=>{se.flushSync(()=>o.actions.openCombobox()),t.value||o.actions.goToOption({focus:M.Last})}});case H.Home:if(o.state.comboboxState===x.Closed||b.shiftKey)break;return b.preventDefault(),b.stopPropagation(),o.actions.goToOption({focus:M.First});case H.PageUp:return b.preventDefault(),b.stopPropagation(),o.actions.goToOption({focus:M.First});case H.End:if(o.state.comboboxState===x.Closed||b.shiftKey)break;return b.preventDefault(),b.stopPropagation(),o.actions.goToOption({focus:M.Last});case H.PageDown:return b.preventDefault(),b.stopPropagation(),o.actions.goToOption({focus:M.Last});case H.Escape:return o.state.comboboxState!==x.Open?void 0:(b.preventDefault(),o.state.optionsElement&&!t.optionsPropsRef.current.static&&b.stopPropagation(),t.mode===Y.Single&&t.value===null&&I(),o.actions.closeCombobox());case H.Tab:if(o.actions.setIsTyping(!1),o.state.comboboxState!==x.Open)return;t.mode===Y.Single&&o.state.activationTrigger!==te.Focus&&o.actions.selectActiveOption(),o.actions.closeCombobox();break}}),Z=E(b=>{c?.(b),t.mode===Y.Single&&b.target.value===""&&I(),o.actions.openCombobox()}),ee=E(b=>{var X,k,L;let O=(X=b.relatedTarget)!=null?X:Ze.find(B=>B!==b.currentTarget);if(!((k=o.state.optionsElement)!=null&&k.contains(O))&&!((L=o.state.buttonElement)!=null&&L.contains(O))&&o.state.comboboxState===x.Open)return b.preventDefault(),t.mode===Y.Single&&t.value===null&&I(),o.actions.closeCombobox()}),y=E(b=>{var X,k,L;let O=(X=b.relatedTarget)!=null?X:Ze.find(B=>B!==b.currentTarget);(k=o.state.buttonElement)!=null&&k.contains(O)||(L=o.state.optionsElement)!=null&&L.contains(O)||t.disabled||t.immediate&&o.state.comboboxState!==x.Open&&T.microTask(()=>{se.flushSync(()=>o.actions.openCombobox()),o.actions.setActivationTrigger(te.Focus)})}),Q=_e(),U=sn(),{isFocused:S,focusProps:J}=lt({autoFocus:f}),{isHovered:pe,hoverProps:ne}=dt({isDisabled:v}),ie=D(o,b=>b.optionsElement),oe=ge({open:P===x.Open,disabled:v,invalid:t.invalid,hover:pe,focus:S,autofocus:f}),he=Be({ref:w,id:m,role:"combobox",type:h,"aria-controls":ie?.id,"aria-expanded":P===x.Open,"aria-activedescendant":D(o,o.selectors.activeDescendantId),"aria-labelledby":Q,"aria-describedby":U,"aria-autocomplete":"list",defaultValue:(r=(e=n.defaultValue)!=null?e:t.defaultValue!==void 0?u?.(t.defaultValue):null)!=null?r:t.defaultValue,disabled:v||void 0,autoFocus:f,onCompositionStart:q,onCompositionEnd:N,onKeyDown:W,onChange:Z,onFocus:y,onBlur:ee},J,ne);return ye()({ourProps:he,theirProps:p,slot:oe,defaultTag:En,name:"Combobox.Input"})}let In="button";function Rn(n,a){let e=we("Combobox.Button"),r=me("Combobox.Button"),[o,t]=d.useState(null),i=Oe(a,t,e.actions.setButtonElement),l=d.useId(),{id:m=`headlessui-combobox-button-${l}`,disabled:c=r.disabled||!1,autoFocus:u=!1,...v}=n,[f,h,p]=D(e,y=>[y.comboboxState,y.inputElement,y.optionsElement]),g=pt(h),w=f===x.Open;Mt(w,{trigger:o,action:d.useCallback(y=>{if(o!=null&&o.contains(y.target))return be.Ignore;if(h!=null&&h.contains(y.target))return be.Ignore;let Q=y.target.closest('[role="option"]:not([data-disabled])');return Qt(Q)?be.Select(Q):p!=null&&p.contains(y.target)?be.Ignore:be.Close},[o,h,p]),close:e.actions.closeCombobox,select:e.actions.selectActiveOption});let P=E(y=>{switch(y.key){case H.Space:case H.Enter:y.preventDefault(),y.stopPropagation(),e.state.comboboxState===x.Closed&&se.flushSync(()=>e.actions.openCombobox()),g();return;case H.ArrowDown:y.preventDefault(),y.stopPropagation(),e.state.comboboxState===x.Closed&&(se.flushSync(()=>e.actions.openCombobox()),e.state.dataRef.current.value||e.actions.goToOption({focus:M.First})),g();return;case H.ArrowUp:y.preventDefault(),y.stopPropagation(),e.state.comboboxState===x.Closed&&(se.flushSync(()=>e.actions.openCombobox()),e.state.dataRef.current.value||e.actions.goToOption({focus:M.Last})),g();return;case H.Escape:if(e.state.comboboxState!==x.Open)return;y.preventDefault(),e.state.optionsElement&&!r.optionsPropsRef.current.static&&y.stopPropagation(),se.flushSync(()=>e.actions.closeCombobox()),g();return;default:return}}),R=Dt(()=>{e.state.comboboxState===x.Open?e.actions.closeCombobox():e.actions.openCombobox(),g()}),T=_e([m]),{isFocusVisible:I,focusProps:G}=lt({autoFocus:u}),{isHovered:C,hoverProps:q}=dt({isDisabled:c}),{pressed:N,pressProps:W}=gt({disabled:c}),Z=ge({open:f===x.Open,active:N||f===x.Open,disabled:c,invalid:r.invalid,value:r.value,hover:C,focus:I}),ee=Be({ref:i,id:m,type:Ht(n,o),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":p?.id,"aria-expanded":f===x.Open,"aria-labelledby":T,disabled:c||void 0,autoFocus:u,onKeyDown:P},R,G,q,W);return ye()({ourProps:ee,theirProps:v,slot:Z,defaultTag:In,name:"Combobox.Button"})}let $n="div",Mn=Ue.RenderStrategy|Ue.Static;function Dn(n,a){var e,r,o;let t=d.useId(),{id:i=`headlessui-combobox-options-${t}`,hold:l=!1,anchor:m,portal:c=!1,modal:u=!0,transition:v=!1,...f}=n,h=we("Combobox.Options"),p=me("Combobox.Options"),g=Pt(m);g&&(c=!0);let[w,P]=Nt(g),[R,T]=d.useState(null),I=Et(),G=Oe(a,g?w:null,h.actions.setOptionsElement,T),[C,q,N,W,Z]=D(h,$=>[$.comboboxState,$.inputElement,$.buttonElement,$.optionsElement,$.activationTrigger]),ee=Xe(q||N),y=Xe(W),Q=Gt(),[U,S]=Xt(v,R,Q!==null?(Q&je.Open)===je.Open:C===x.Open);Vt(U,q,h.actions.closeCombobox);let J=p.__demoMode?!1:u&&C===x.Open;Wt(J,y);let pe=p.__demoMode?!1:u&&C===x.Open;zt(pe,{allowed:d.useCallback(()=>[q,N,W],[q,N,W])});let ne=D(h,h.selectors.didInputMove)?!1:U;ae(()=>{var $;p.optionsPropsRef.current.static=($=n.static)!=null?$:!1},[p.optionsPropsRef,n.static]),ae(()=>{p.optionsPropsRef.current.hold=l},[p.optionsPropsRef,l]),Zt(C===x.Open,{container:W,accept($){return $.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:$.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk($){$.setAttribute("role","none")}});let ie=_e([N?.id]),oe=ge({open:C===x.Open,option:void 0}),he=E(()=>{h.actions.setActivationTrigger(te.Pointer)}),b=E($=>{$.preventDefault(),h.actions.setActivationTrigger(te.Pointer)}),X=Be(g?I():{},{"aria-labelledby":ie,role:"listbox","aria-multiselectable":p.mode===Y.Multi?!0:void 0,id:i,ref:G,style:{...f.style,...P,"--input-width":He(U,q,!0).width,"--button-width":He(U,N,!0).width},onWheel:Z===te.Pointer?void 0:he,onMouseDown:b,...Yt(S)}),k=U&&C===x.Closed&&!n.static,L=et(k,(e=p.virtual)==null?void 0:e.options),O=et(k,p.value),B=d.useCallback($=>p.compare(O,$),[p.compare,O]),j=d.useMemo(()=>{if(!p.virtual)return p;if(L===void 0)throw new Error("Missing `options` in virtual mode");return L!==p.virtual.options?{...p,virtual:{...p.virtual,options:L}}:p},[p,L,(r=p.virtual)==null?void 0:r.options]);p.virtual&&Object.assign(f,{children:_.createElement(xe.Provider,{value:j},_.createElement(kn,{slot:oe},f.children))});let re=ye(),vt=d.useMemo(()=>p.mode===Y.Multi?p:{...p,isSelected:B},[p,B]);return _.createElement(Bt,{enabled:c?n.static||U:!1,ownerDocument:ee},_.createElement(xe.Provider,{value:vt},re({ourProps:X,theirProps:{...f,children:_.createElement(nn,{freeze:k},typeof f.children=="function"?(o=f.children)==null?void 0:o.call(f,oe):f.children)},slot:oe,defaultTag:$n,features:Mn,visible:ne,name:"Combobox.Options"})))}let Fn="div";function zn(n,a){var e,r,o;let t=me("Combobox.Option"),i=we("Combobox.Option"),l=d.useId(),{id:m=`headlessui-combobox-option-${l}`,value:c,disabled:u=(o=(r=(e=t.virtual)==null?void 0:e.disabled)==null?void 0:r.call(e,c))!=null?o:!1,order:v=null,...f}=n,[h]=D(i,S=>[S.inputElement]),p=pt(h),g=D(i,d.useCallback(S=>i.selectors.isActive(S,c,m),[c,m])),w=t.isSelected(c),P=d.useRef(null),R=jt({disabled:u,value:c,domRef:P,order:v}),T=d.useContext(xt),I=Oe(a,P,T?T.measureElement:null),G=E(()=>{i.actions.setIsTyping(!1),i.actions.onChange(c)});ae(()=>i.actions.registerOption(m,R),[R,m]);let C=D(i,d.useCallback(S=>i.selectors.shouldScrollIntoView(S,c,m),[c,m]));ae(()=>{if(C)return Ot().requestAnimationFrame(()=>{var S,J;(J=(S=P.current)==null?void 0:S.scrollIntoView)==null||J.call(S,{block:"nearest"})})},[C,P]);let q=E(S=>{S.preventDefault(),S.button===Ft.Left&&(u||(G(),qt()||requestAnimationFrame(()=>p()),t.mode===Y.Single&&i.actions.closeCombobox()))}),N=E(()=>{if(u)return i.actions.goToOption({focus:M.Nothing});let S=t.calculateIndex(c);i.actions.goToOption({focus:M.Specific,idx:S})}),W=$t(),Z=E(S=>W.update(S)),ee=E(S=>{if(!W.wasMoved(S)||u||g&&i.state.activationTrigger===te.Pointer)return;let J=t.calculateIndex(c);i.actions.goToOption({focus:M.Specific,idx:J},te.Pointer)}),y=E(S=>{W.wasMoved(S)&&(u||g&&(t.optionsPropsRef.current.hold||i.state.activationTrigger===te.Pointer&&i.actions.goToOption({focus:M.Nothing})))}),Q=ge({active:g,focus:g,selected:w,disabled:u}),U={id:m,ref:I,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":w,disabled:void 0,onMouseDown:q,onFocus:N,onPointerEnter:Z,onMouseEnter:Z,onPointerMove:ee,onMouseMove:ee,onPointerLeave:y,onMouseLeave:y};return ye()({ourProps:U,theirProps:f,slot:Q,defaultTag:Fn,name:"Combobox.Option"})}let An=ve(Nn),Qe=ve(Rn),F=ve(Tn),Ln=ke,z=ve(Dn),A=ve(zn),V=Object.assign(An,{Input:F,Button:Qe,Label:Ln,Options:z,Option:A});const Ne=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Kn=()=>{const[n,a]=d.useState(Ne[0]),[e,r]=d.useState(""),o=e===""?Ne:Ne.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering Active Option Details"}),s.jsx("div",{className:"max-w-sm",children:s.jsx(V,{value:n,onChange:()=>a,onClose:()=>r(""),children:({activeOption:t})=>s.jsxs(s.Fragment,{children:[s.jsx(F,{"aria-label":"Assignee",displayValue:i=>i?.name,onChange:i=>r(i.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"top",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(i=>s.jsx(A,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i.name},i.id))}),t&&s.jsxs("p",{className:"text-ld",children:["The currently focused user is: ",s.jsx("b",{children:t.name})]})]})})})]})})},Ee=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Vn=()=>{const[n,a]=d.useState(Ee[0].name),[e,r]=d.useState(""),o=e===""?Ee:Ee.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-4",children:s.jsxs("form",{action:"/projects/1/assignee",method:"post",className:"flex gap-3",children:[s.jsxs(V,{name:"assignee",value:n,onChange:t=>a(t),onClose:()=>r(""),children:[s.jsx(F,{"aria-label":"Assignee",displayValue:()=>n,onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t.name,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]}),s.jsx("button",{type:"submit",className:"ui-button bg-primary",children:"Submit"})]})})})},Wn=`import {\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOption,\r
  ComboboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const HtmlFormsCodes = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<string>(people[0].name);\r
  const [query, setQuery] = useState("");\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) =>\r
          person.name.toLowerCase().includes(query.toLowerCase())\r
        );\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form\r
          action="/projects/1/assignee"\r
          method="post"\r
          className="flex gap-3"\r
        >\r
          <Combobox\r
            name="assignee"\r
            value={selectedPerson}\r
            onChange={(value) => setSelectedPerson(value as string)}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              aria-label="Assignee"\r
              displayValue={() => selectedPerson}\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person.name}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
          <button type="submit" className="ui-button bg-primary">\r
            Submit\r
          </button>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default HtmlFormsCodes\r
`,Bn=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"HTML Forms"}),s.jsx(Vn,{})]}),s.jsx(ue,{children:Wn})]})})}),Te=[{id:1,name:"Tom Cook"},{id:2,name:"Wade Cooper"},{id:3,name:"Tanya Fox"},{id:4,name:"Arlene Mccoy"},{id:5,name:"Devon Webb"}],_n=()=>{const[n,a]=d.useState(""),[e,r]=d.useState(Te[1]),o=n===""?Te:Te.filter(t=>t.name.toLowerCase().includes(n.toLowerCase()));return s.jsx("div",{className:"mt-4 relative w-64",children:s.jsxs(V,{value:e,onChange:r,children:[s.jsxs("div",{className:"relative",children:[s.jsx(F,{className:Ce("w-full border border-gray-300 rounded-md px-3 py-2","focus:outline-none focus:ring-2 focus:ring-primary"),displayValue:t=>t?.name||"",onChange:t=>a(t.target.value)}),s.jsx(Qe,{className:"absolute inset-y-0 right-0 flex items-center px-2",children:s.jsx(tt,{icon:"solar:alt-arrow-down-outline",height:20})})]}),s.jsx(z,{className:Ce("absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white","py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"),children:o.length===0&&n!==""?s.jsx("div",{className:"cursor-default select-none px-4 py-2 text-gray-500",children:"Nothing found."}):o.map(t=>s.jsx(A,{value:t,className:({active:i,selected:l})=>Ce("relative cursor-pointer select-none py-2 pl-8 pr-4",i?"bg-gray-100 text-primary":"text-gray-900",l&&"font-medium"),children:({selected:i})=>s.jsxs(s.Fragment,{children:[s.jsx("span",{className:Ce("block truncate",i?"font-medium":"font-normal"),children:t.name}),i&&s.jsx("span",{className:"absolute inset-y-0 left-2 flex items-center text-primary",children:s.jsx(tt,{icon:"solar:check-read-linear",height:18})})]})},t.id))})]})})},qn=`"use client";\r
\r
import {\r
  Combobox,\r
  ComboboxButton,\r
  ComboboxInput,\r
  ComboboxOption,\r
  ComboboxOptions,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
import clsx from "clsx";\r
import { useState } from "react";\r
\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Tom Cook" },\r
  { id: 2, name: "Wade Cooper" },\r
  { id: 3, name: "Tanya Fox" },\r
  { id: 4, name: "Arlene Mccoy" },\r
  { id: 5, name: "Devon Webb" },\r
];\r
\r
const BasicComboCode = () => {\r
  const [query, setQuery] = useState("");\r
  const [selected, setSelected] = useState<Person | null>(people[1]);\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) =>\r
          person.name.toLowerCase().includes(query.toLowerCase())\r
        );\r
\r
  return (\r
    <div className="mt-4 relative w-64">\r
      <Combobox value={selected} onChange={setSelected}>\r
        <div className="relative">\r
          <ComboboxInput\r
            className={clsx(\r
              "w-full border border-gray-300 rounded-md px-3 py-2",\r
              "focus:outline-none focus:ring-2 focus:ring-primary"\r
            )}\r
            displayValue={(person: Person | null) => person?.name || ""}\r
            onChange={(event) => setQuery(event.target.value)}\r
          />\r
          <ComboboxButton className="absolute inset-y-0 right-0 flex items-center px-2">\r
            <Icon icon="solar:alt-arrow-down-outline" height={20} />\r
          </ComboboxButton>\r
        </div>\r
\r
        <ComboboxOptions\r
          className={clsx(\r
            "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white",\r
            "py-1 text-base shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"\r
          )}\r
        >\r
          {filteredPeople.length === 0 && query !== "" ? (\r
            <div className="cursor-default select-none px-4 py-2 text-gray-500">\r
              Nothing found.\r
            </div>\r
          ) : (\r
            filteredPeople.map((person) => (\r
              <ComboboxOption\r
                key={person.id}\r
                value={person}\r
                className={({ active, selected }) =>\r
                  clsx(\r
                    "relative cursor-pointer select-none py-2 pl-8 pr-4",\r
                    active ? "bg-gray-100 text-primary" : "text-gray-900",\r
                    selected && "font-medium"\r
                  )\r
                }\r
              >\r
                {({ selected }) => (\r
                  <>\r
                    <span\r
                      className={clsx(\r
                        "block truncate",\r
                        selected ? "font-medium" : "font-normal"\r
                      )}\r
                    >\r
                      {person.name}\r
                    </span>\r
                    {selected && (\r
                      <span className="absolute inset-y-0 left-2 flex items-center text-primary">\r
                        <Icon icon="solar:check-read-linear" height={18} />\r
                      </span>\r
                    )}\r
                  </>\r
                )}\r
              </ComboboxOption>\r
            ))\r
          )}\r
        </ComboboxOptions>\r
      </Combobox>\r
    </div>\r
  );\r
};\r
\r
export default BasicComboCode;\r
`,Qn=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Basic"}),s.jsx(_n,{})]}),s.jsx(ue,{children:qn})]})})}),Ie=["Durward Reynolds","Kenton Towne","Therese Wunsch","Benedict Kessler","Katelyn Rohan"],Un=()=>{const[n,a]=d.useState(Ie[0]),[e,r]=d.useState(""),o=e===""?Ie:Ie.filter(i=>i.toLowerCase().includes(e.toLowerCase())),t=i=>{a(i),r("")};return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Binding Values"})}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{value:n,onChange:t,children:[s.jsx(F,{"aria-label":"Assignee",onChange:i=>r(i.target.value),value:e,className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(i=>s.jsx(A,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i},i))})]})})]})})},Re=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Hn=()=>{const[n,a]=d.useState(Re[0]),[e,r]=d.useState(""),o=e===""?Re:Re.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Binding Objects as Values"}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{value:n,onChange:()=>a,onClose:()=>r(""),children:[s.jsx(F,{"aria-label":"Assignee",displayValue:t=>t?.name,onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},$e=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Gn=()=>{const[n,a]=d.useState($e[0]),[e,r]=d.useState(""),o=e===""?$e:$e.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Open On Focus"})}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{immediate:!0,value:n,onChange:()=>a,onClose:()=>r(""),children:[s.jsx(F,{"aria-label":"Assignee",displayValue:t=>t?.name,onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},Me=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Xn=()=>{const[n,a]=d.useState(Me[0]),[e,r]=d.useState(""),o=e===""?Me:Me.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-4",children:s.jsx(ce,{children:s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"top start",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})})},Yn=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const ComboPositionCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
        people[0]\r
      );\r
      const [query, setQuery] = useState("");\r
    \r
      const filteredPeople =\r
        query === ""\r
          ? people\r
          : people.filter((person) => {\r
              return person.name.toLowerCase().includes(query.toLowerCase());\r
            });\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions anchor="top start" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible">\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ComboPositionCode;\r
`,Jn=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Position"}),s.jsx(Xn,{})]}),s.jsx(ue,{children:Yn})]})})}),De=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Zn=()=>{const[n,a]=d.useState(De[0]),[e,r]=d.useState(""),o=e===""?De:De.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Width"})}),s.jsx("div",{className:"max-w-sm",children:s.jsx(ce,{children:s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})]})})},Fe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],eo=()=>{const[n,a]=d.useState(Fe[0]),[e,r]=d.useState(""),o=e===""?Fe:Fe.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-4",children:s.jsxs(ce,{className:"flex gap-3  items-center",disabled:!0,children:[s.jsx(ke,{className:"text-ld",children:"Select:"}),s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})]})})})},to=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const DisabledCode = () => {\r
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
    people[0]\r
  );\r
  const [query, setQuery] = useState("");\r
\r
  const filteredPeople =\r
    query === ""\r
      ? people\r
      : people.filter((person) => {\r
          return person.name.toLowerCase().includes(query.toLowerCase());\r
        });\r
  return (\r
 <>\r
 <div className="mt-4">\r
    <Field className="flex gap-3  items-center" disabled>\r
          <Label className="text-ld">Select:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
 </div>\r
 </>\r
  )\r
}\r
\r
export default DisabledCode\r
`,no=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Disabled"}),s.jsx(eo,{})]}),s.jsx(ue,{children:to})]})})}),ze=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!0},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],oo=()=>{const[n,a]=d.useState(ze[0]),[e,r]=d.useState(""),o=e===""?ze:ze.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-4",children:s.jsxs(ce,{className:"flex gap-3  items-center",children:[s.jsx(ke,{className:"text-ld",children:"Assignee:"}),s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,disabled:!t.available,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary  data-disabled:opacity-50 data-disabled:hover:text-bodytext",children:t.name},t.id))})]})]})})})},ro=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
  available: boolean;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds", available: true },\r
  { id: 2, name: "Kenton Towne", available: true },\r
  { id: 3, name: "Therese Wunsch", available: true },\r
  { id: 4, name: "Benedict Kessler", available: false },\r
  { id: 5, name: "Katelyn Rohan", available: true },\r
];\r
\r
const DisableComboOptCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
      people[0]\r
    );\r
    const [query, setQuery] = useState("");\r
  \r
    const filteredPeople =\r
      query === ""\r
        ? people\r
        : people.filter((person) => {\r
            return person.name.toLowerCase().includes(query.toLowerCase());\r
          });\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field className="flex gap-3  items-center">\r
          <Label className="text-ld">Assignee:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions\r
              anchor="bottom"\r
              className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible"\r
            >\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  disabled={!person.available}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary  data-disabled:opacity-50 data-disabled:hover:text-bodytext"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableComboOptCode\r
`,so=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Combo Option"}),s.jsx(oo,{})]}),s.jsx(ue,{children:ro})]})})}),Se=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],ao=()=>{const[n,a]=d.useState([Se[0],Se[1]]),[e,r]=d.useState(""),o=e===""?Se:Se.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"Selecting Multiple Values"})}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{multiple:!0,value:n,onChange:a,onClose:()=>r(""),children:[n.length>0&&s.jsx("ul",{children:n.map(t=>s.jsx("li",{children:t.name},t.id))}),s.jsx(F,{"aria-label":"Assignees",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})})},Ae=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],io=d.forwardRef((n,a)=>s.jsx("button",{ref:a,...n})),lo=()=>{const[n,a]=d.useState(Ae[0]),[e,r]=d.useState(""),o=e===""?Ae:Ae.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Rendering As Different Elements"}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{value:n,onChange:()=>a,onClose:()=>r(""),children:[s.jsxs("span",{className:"flex gap-3",children:[s.jsx(F,{"aria-label":"Assignee",displayValue:t=>t?.name,onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(Qe,{as:io,className:"ui-button bg-primary text-white",children:"Open"})]}),s.jsx(z,{as:"ul",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{as:"li",value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})]})},Le=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],co=()=>{const[n,a]=d.useState(Le[0]),[e,r]=d.useState(""),o=e===""?Le:Le.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsxs(K,{children:[s.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Virtual Scrolling"}),s.jsx("div",{className:"max-w-sm",children:s.jsxs(V,{value:n,virtual:{options:o},onChange:()=>a,onClose:()=>r(""),children:[s.jsx(F,{"aria-label":"Assignee",displayValue:t=>t?.name,onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm",children:({option:t})=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name})})]})})]})})},Ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],uo=()=>{const[n,a]=d.useState(Ke[0]),[e,r]=d.useState(""),o=e===""?Ke:Ke.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"With FramerMotion"})}),s.jsx(V,{value:n,onChange:a,onClose:()=>r(""),children:({open:t})=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:"max-w-sm",children:[s.jsx(F,{displayValue:i=>i?i.name:"",onChange:i=>r(i.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(ln,{children:t&&s.jsx(z,{static:!0,as:dn.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",onAnimationComplete:()=>r(""),children:o.map(i=>s.jsx(A,{value:i,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:i.name},i.id))})})]})})})]})})},Ve=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],mo=()=>{const[n,a]=d.useState(Ve[0]),[e,r]=d.useState(""),o=e===""?Ve:Ve.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx(s.Fragment,{children:s.jsx("div",{className:"mt-4",children:s.jsxs(ce,{className:"flex gap-3  items-center",children:[s.jsx(ke,{className:"text-ld",children:"Assignee:"}),s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{anchor:"bottom",className:"absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})]})})})},po=`import {\r
  Field,\r
  Combobox,\r
  ComboboxInput,\r
  ComboboxOptions,\r
  ComboboxOption,\r
  Label,\r
} from "@headlessui/react";\r
import  { useState } from "react";\r
\r
// Define the type for the person object\r
interface Person {\r
  id: number;\r
  name: string;\r
}\r
\r
const people: Person[] = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const ComboWithLableCode = () => {\r
     const [selectedPerson, setSelectedPerson] = useState<Person | null>(\r
        people[0]\r
      );\r
      const [query, setQuery] = useState("");\r
    \r
      const filteredPeople =\r
        query === ""\r
          ? people\r
          : people.filter((person) => {\r
              return person.name.toLowerCase().includes(query.toLowerCase());\r
            });\r
  return (\r
   <>\r
   <div className="mt-4">\r
    <Field className="flex gap-3  items-center">\r
          <Label className="text-ld">Assignee:</Label>\r
          <Combobox\r
            value={selectedPerson}\r
            onChange={setSelectedPerson}\r
            onClose={() => setQuery("")}\r
          >\r
            <ComboboxInput\r
              displayValue={(person: Person | null) =>\r
                person ? person.name : ""\r
              }\r
              onChange={(event) => setQuery(event.target.value)}\r
              className="w-full ui-form-control rounded-md"\r
            />\r
            <ComboboxOptions anchor="bottom" className="absolute z-10 mt-1 max-h-60 w-[var(--input-width)] overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible">\r
              {filteredPeople.map((person) => (\r
                <ComboboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary"\r
                >\r
                  {person.name}\r
                </ComboboxOption>\r
              ))}\r
            </ComboboxOptions>\r
          </Combobox>\r
        </Field>\r
   </div>\r
   </>\r
  )\r
}\r
\r
export default ComboWithLableCode\r
`,ho=()=>s.jsx("div",{children:s.jsx(K,{className:"p-0",children:s.jsxs("div",{children:[s.jsxs("div",{className:"p-6 max-w-sm",children:[s.jsx("h4",{className:"text-lg font-semibold",children:"With Label"}),s.jsx(mo,{})]}),s.jsx(ue,{children:po})]})})}),We=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],bo=()=>{const[n,a]=d.useState(We[0]),[e,r]=d.useState(""),o=e===""?We:We.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return s.jsx("div",{children:s.jsxs(K,{children:[s.jsx("div",{className:"flex items-center justify-between mb-2",children:s.jsx("h4",{className:"text-lg font-semibold",children:"With Transitions"})}),s.jsx("div",{className:"max-w-sm",children:s.jsx(ce,{children:s.jsxs(V,{value:n,onChange:a,onClose:()=>r(""),children:[s.jsx(F,{displayValue:t=>t?t.name:"",onChange:t=>r(t.target.value),className:"w-full ui-form-control rounded-md"}),s.jsx(z,{transition:!0,anchor:"bottom",className:"origin-top border transition duration-200 ease-out empty:invisible data-closed:scale-95 data-closed:opacity-0 absolute z-10 mt-1 max-h-60 w-[var(--input-width)]  overflow-auto rounded-md bg-white dark:bg-dark py-1 text-base shadow-md dark:shadow-dark-md ring-1 ring-black ring-opacity-5 focus:outline-hidden sm:text-sm empty:invisible",children:o.map(t=>s.jsx(A,{value:t,className:"group flex cursor-pointer ui-dropdown-item bg-hover dark:bg-hover text-ld hover:text-primary dark:hover:text-primary  data-focus:bg-hover data-focus:text-primary",children:t.name},t.id))})]})})})]})})},ar=()=>{const n=[{to:"/",title:"Home"},{title:"Combobox"}];return s.jsxs(s.Fragment,{children:[s.jsx(cn,{title:"Combobox",items:n}),s.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[s.jsx("div",{className:"col-span-12",children:s.jsx(Qn,{})}),s.jsx("div",{className:"col-span-12",children:s.jsx(ho,{})}),s.jsx("div",{className:"col-span-12",children:s.jsx(no,{})}),s.jsx("div",{className:"col-span-12",children:s.jsx(so,{})}),s.jsx("div",{className:"col-span-12",children:s.jsx(Bn,{})}),s.jsx("div",{className:"col-span-12",children:s.jsx(Jn,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(Zn,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(bo,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(uo,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(Un,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(Gn,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(lo,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(Hn,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(Kn,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(co,{})}),s.jsx("div",{className:"lg:col-span-6 col-span-12",children:s.jsx(ao,{})})]})]})};export{ar as default};
