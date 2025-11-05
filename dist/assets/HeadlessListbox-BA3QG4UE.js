import{r as c,R as K,y as je,j as t}from"./index-n5lagw8Y.js";import{C}from"./CardBox-DP5V6wyZ.js";import{I as F}from"./iconify-VfOFnMl8.js";import{$ as Ze,a as Je}from"./useFocusRing-BQxkpHIn.js";import{w as Xe}from"./use-active-press-BchvfSUV.js";import{u as et}from"./use-by-comparator-bDtqTRsZ.js";import{l as tt,b as nt}from"./use-default-value-5dcV75jC.js";import{u as Z,Y as ee,o as V,a as J,V as _e,K as te,p as st,c as ot,n as Le,A as Oe,b as it}from"./render-D9E-06xR.js";import{F as at,b as rt,y as lt,R as ct,T as dt,w as ut,A as mt}from"./floating-Dkc68wZW.js";import{p as pt,c as ce,a as v,f as re,b as xt,L as ht,S as le,s as bt,u as ft}from"./element-movement-BBURSpKm.js";import{y as vt}from"./use-inert-others-0-7KICMh.js";import{T as gt,a as ge,x as Ve,b as wt,c as jt,S as O,u as Pe,p as Lt,f as yt,t as Nt,k as St}from"./portal-Cdyr5OxY.js";import{e as Ot}from"./use-resolve-button-type-B08ktXI3.js";import{y as ne}from"./use-sync-refs-CefhOWeT.js";import{s as Pt}from"./use-text-value-DPN_mgsa.js";import{u as Rt,N as $t,x as Tt,c as It,i as ue}from"./open-closed-0N_3BWp3.js";import{a as Ct}from"./disabled-CIuDn_DF.js";import{j as Dt,g as Bt,W as se}from"./field-CkLRacoC.js";import{u as Et}from"./frozen-U8UN-oPw.js";import{Z as me,u as Kt,N as Ft,V as Mt}from"./label-9sDPupFE.js";import{n as kt}from"./dom-BlW_0b_t.js";import{G as At,R as Wt,T as Re,H as _t,I as Vt}from"./focus-management-Ds-lPg9b.js";import{d as Ht}from"./owner-CneWfzVc.js";import{w as zt,M as ye}from"./description-CMFfDl8O.js";import{o as j}from"./keyboard-C1Wiwm26.js";import{C as oe}from"./CodeDialog-BcgW2Qgx.js";import{A as Qt,m as Ut}from"./proxy-D5zimsvB.js";import{B as qt}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./bugs-BLuxiOOY.js";import"./with-selector-uup4H7fL.js";import"./hidden-C2xwWGhP.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";var Gt=Object.defineProperty,Yt=(e,s,n)=>s in e?Gt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,$e=(e,s,n)=>(Yt(e,typeof s!="symbol"?s+"":s,n),n),L=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(L||{}),U=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(U||{}),de=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(de||{}),He=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.SelectOption=5]="SelectOption",e[e.RegisterOptions=6]="RegisterOptions",e[e.UnregisterOptions=7]="UnregisterOptions",e[e.SetButtonElement=8]="SetButtonElement",e[e.SetOptionsElement=9]="SetOptionsElement",e[e.SortOptions=10]="SortOptions",e[e.MarkButtonAsMoved=11]="MarkButtonAsMoved",e))(He||{});function Te(e,s=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,o=At(s(e.options.slice()),a=>a.dataRef.current.domRef.current),i=n?o.indexOf(n):null;return i===-1&&(i=null),{options:o,activeOptionIndex:i}}let Zt={1(e){if(e.dataRef.current.disabled||e.listboxState===1)return e;let s=e.buttonElement?ce.Tracked(xt(e.buttonElement)):e.buttonPositionState;return{...e,activeOptionIndex:null,pendingFocus:{focus:v.Nothing},listboxState:1,__demoMode:!1,buttonPositionState:s}},0(e,s){if(e.dataRef.current.disabled||e.listboxState===0)return e;let n=e.activeOptionIndex,{isSelected:o}=e.dataRef.current,i=e.options.findIndex(a=>o(a.dataRef.current.value));return i!==-1&&(n=i),{...e,frozenValue:!1,pendingFocus:s.focus,listboxState:0,activeOptionIndex:n,__demoMode:!1,buttonPositionState:ce.Idle}},2(e,s){var n,o,i,a,p;if(e.dataRef.current.disabled||e.listboxState===1)return e;let m={...e,searchQuery:"",activationTrigger:(n=s.trigger)!=null?n:1,__demoMode:!1};if(s.focus===v.Nothing)return{...m,activeOptionIndex:null};if(s.focus===v.Specific)return{...m,activeOptionIndex:e.options.findIndex(b=>b.id===s.id)};if(s.focus===v.Previous){let b=e.activeOptionIndex;if(b!==null){let w=e.options[b].dataRef.current.domRef,u=re(s,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});if(u!==null){let r=e.options[u].dataRef.current.domRef;if(((o=w.current)==null?void 0:o.previousElementSibling)===r.current||((i=r.current)==null?void 0:i.previousElementSibling)===null)return{...m,activeOptionIndex:u}}}}else if(s.focus===v.Next){let b=e.activeOptionIndex;if(b!==null){let w=e.options[b].dataRef.current.domRef,u=re(s,{resolveItems:()=>e.options,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});if(u!==null){let r=e.options[u].dataRef.current.domRef;if(((a=w.current)==null?void 0:a.nextElementSibling)===r.current||((p=r.current)==null?void 0:p.nextElementSibling)===null)return{...m,activeOptionIndex:u}}}}let f=Te(e),d=re(s,{resolveItems:()=>f.options,resolveActiveIndex:()=>f.activeOptionIndex,resolveId:b=>b.id,resolveDisabled:b=>b.dataRef.current.disabled});return{...m,...f,activeOptionIndex:d}},3:(e,s)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,o=e.searchQuery+s.value.toLowerCase(),i=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(p=>{var m;return!p.dataRef.current.disabled&&((m=p.dataRef.current.textValue)==null?void 0:m.startsWith(o))}),a=i?e.options.indexOf(i):-1;return a===-1||a===e.activeOptionIndex?{...e,searchQuery:o}:{...e,searchQuery:o,activeOptionIndex:a,activationTrigger:1}},4(e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},5(e){return e.dataRef.current.mode===0?{...e,frozenValue:!0}:{...e}},6:(e,s)=>{let n=e.options.concat(s.options),o=e.activeOptionIndex;if(e.pendingFocus.focus!==v.Nothing&&(o=re(e.pendingFocus,{resolveItems:()=>n,resolveActiveIndex:()=>e.activeOptionIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled})),e.activeOptionIndex===null){let{isSelected:i}=e.dataRef.current;if(i){let a=n.findIndex(p=>i?.(p.dataRef.current.value));a!==-1&&(o=a)}}return{...e,options:n,activeOptionIndex:o,pendingFocus:{focus:v.Nothing},pendingShouldSort:!0}},7:(e,s)=>{let n=e.options,o=[],i=new Set(s.options);for(let[a,p]of n.entries())if(i.has(p.id)&&(o.push(a),i.delete(p.id),i.size===0))break;if(o.length>0){n=n.slice();for(let a of o.reverse())n.splice(a,1)}return{...e,options:n,activationTrigger:1}},8:(e,s)=>e.buttonElement===s.element?e:{...e,buttonElement:s.element},9:(e,s)=>e.optionsElement===s.element?e:{...e,optionsElement:s.element},10:e=>e.pendingShouldSort?{...e,...Te(e),pendingShouldSort:!1}:e,11(e){return e.buttonPositionState.kind!=="Tracked"?e:{...e,buttonPositionState:ce.Moved}}};class Ne extends gt{constructor(s){super(s),$e(this,"actions",{onChange:n=>{let{onChange:o,compare:i,mode:a,value:p}=this.state.dataRef.current;return Z(a,{0:()=>o?.(n),1:()=>{let m=p.slice(),f=m.findIndex(d=>i(d,n));return f===-1?m.push(n):m.splice(f,1),o?.(m)}})},registerOption:ge(()=>{let n=[],o=new Set;return[(i,a)=>{o.has(a)||(o.add(a),n.push({id:i,dataRef:a}))},()=>(o.clear(),this.send({type:6,options:n.splice(0)}))]}),unregisterOption:ge(()=>{let n=[];return[o=>n.push(o),()=>{this.send({type:7,options:n.splice(0)})}]}),goToOption:ge(()=>{let n=null;return[(o,i)=>{n={type:2,...o,trigger:i}},()=>n&&this.send(n)]}),closeListbox:()=>{this.send({type:1})},openListbox:n=>{this.send({type:0,focus:n})},selectActiveOption:()=>{var n;if(this.state.activeOptionIndex!==null){let{dataRef:o}=this.state.options[this.state.activeOptionIndex];this.actions.selectOption(o.current.value)}else this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(n=this.state.buttonElement)==null||n.focus({preventScroll:!0}))},selectOption:n=>{this.send({type:5,value:n})},search:n=>{this.send({type:3,value:n})},clearSearch:()=>{this.send({type:4})},setButtonElement:n=>{this.send({type:8,element:n})},setOptionsElement:n=>{this.send({type:9,element:n})}}),$e(this,"selectors",{activeDescendantId(n){var o;let i=n.activeOptionIndex,a=n.options;return i===null||(o=a[i])==null?void 0:o.id},isActive(n,o){var i;let a=n.activeOptionIndex,p=n.options;return a!==null?((i=p[a])==null?void 0:i.id)===o:!1},hasFrozenValue(n){return n.frozenValue},shouldScrollIntoView(n,o){return n.__demoMode||n.listboxState!==0||n.activationTrigger===0?!1:this.isActive(n,o)},didButtonMove(n){return n.buttonPositionState.kind==="Moved"}}),this.on(6,()=>{requestAnimationFrame(()=>{this.send({type:10})})});{let n=this.state.id,o=Ve.get(null);this.disposables.add(o.on(wt.Push,i=>{!o.selectors.isTop(i,n)&&this.state.listboxState===0&&this.actions.closeListbox()})),this.on(0,()=>o.actions.push(n)),this.on(1,()=>o.actions.pop(n))}this.disposables.group(n=>{this.on(1,o=>{o.buttonElement&&(n.dispose(),n.add(pt(o.buttonElement,o.buttonPositionState,()=>{this.send({type:11})})))})}),this.on(5,(n,o)=>{var i;this.actions.onChange(o.value),this.state.dataRef.current.mode===0&&(this.actions.closeListbox(),(i=this.state.buttonElement)==null||i.focus({preventScroll:!0}))})}static new({id:s,__demoMode:n=!1}){return new Ne({id:s,dataRef:{current:{}},listboxState:n?0:1,options:[],searchQuery:"",activeOptionIndex:null,activationTrigger:1,buttonElement:null,optionsElement:null,pendingShouldSort:!1,pendingFocus:{focus:v.Nothing},frozenValue:!1,__demoMode:n,buttonPositionState:ce.Idle})}reduce(s,n){return Z(n.type,Zt,s,n)}}const ze=c.createContext(null);function Se(e){let s=c.useContext(ze);if(s===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Qe),n}return s}function Qe({id:e,__demoMode:s=!1}){let n=c.useMemo(()=>Ne.new({id:e,__demoMode:s}),[]);return jt(()=>n.dispose()),n}let pe=c.createContext(null);pe.displayName="ListboxDataContext";function ie(e){let s=c.useContext(pe);if(s===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,ie),n}return s}let Jt=c.Fragment;function Xt(e,s){let n=c.useId(),o=Ct(),{value:i,defaultValue:a,form:p,name:m,onChange:f,by:d,invalid:b=!1,disabled:w=o||!1,horizontal:u=!1,multiple:r=!1,__demoMode:g=!1,...B}=e;const T=u?"horizontal":"vertical";let H=ne(s),M=tt(a),[y=r?[]:void 0,I]=nt(i,f,M),N=Qe({id:n,__demoMode:g}),z=c.useRef({static:!1,hold:!1}),q=c.useRef(new Map),k=et(d),G=c.useCallback(S=>Z(x.mode,{[U.Multi]:()=>y.some(X=>k(X,S)),[U.Single]:()=>k(y,S)}),[y]),x=J({value:y,disabled:w,invalid:b,mode:r?U.Multi:U.Single,orientation:T,onChange:I,compare:k,isSelected:G,optionsPropsRef:z,listRef:q});Le(()=>{N.state.dataRef.current=x},[x]);let E=O(N,S=>S.listboxState),A=Ve.get(null),Y=O(A,c.useCallback(S=>A.selectors.isTop(S,n),[A,n])),[W,h]=O(N,S=>[S.buttonElement,S.optionsElement]);St(Y,[W,h],(S,X)=>{N.send({type:He.CloseListbox}),_t(X,Vt.Loose)||(S.preventDefault(),W?.focus())});let _=J({open:E===L.Open,disabled:w,invalid:b,value:y}),[xe,he]=Mt({inherit:!0}),ae={ref:H},be=c.useCallback(()=>{if(M!==void 0)return I?.(M)},[I,M]),fe=te();return K.createElement(he,{value:xe,props:{htmlFor:W?.id},slot:{open:E===L.Open,disabled:w}},K.createElement(mt,null,K.createElement(ze.Provider,{value:N},K.createElement(pe.Provider,{value:x},K.createElement(It,{value:Z(E,{[L.Open]:ue.Open,[L.Closed]:ue.Closed})},m!=null&&y!=null&&K.createElement(Dt,{disabled:w,data:{[m]:y},form:p,onReset:be}),fe({ourProps:ae,theirProps:B,slot:_,defaultTag:Jt,name:"Listbox"}))))))}let en="button";function tn(e,s){let n=c.useId(),o=Kt(),i=ie("Listbox.Button"),a=Se("Listbox.Button"),{id:p=o||`headlessui-listbox-button-${n}`,disabled:m=i.disabled||!1,autoFocus:f=!1,...d}=e,b=ne(s,at(),a.actions.setButtonElement),w=rt(),[u,r,g]=O(a,h=>[h.listboxState,h.buttonElement,h.optionsElement]),B=u===L.Open;ht(B,{trigger:r,action:c.useCallback(h=>{if(r!=null&&r.contains(h.target))return le.Ignore;let _=h.target.closest('[role="option"]:not([data-disabled])');return kt(_)?le.Select(_):g!=null&&g.contains(h.target)?le.Ignore:le.Close},[r,g]),close:a.actions.closeListbox,select:a.actions.selectActiveOption});let T=V(h=>{switch(h.key){case j.Enter:Bt(h.currentTarget);break;case j.Space:case j.ArrowDown:h.preventDefault(),a.actions.openListbox({focus:i.value?v.Nothing:v.First});break;case j.ArrowUp:h.preventDefault(),a.actions.openListbox({focus:i.value?v.Nothing:v.Last});break}}),H=V(h=>{switch(h.key){case j.Space:h.preventDefault();break}}),M=bt(h=>{var _;a.state.listboxState===L.Open?(je.flushSync(()=>a.actions.closeListbox()),(_=a.state.buttonElement)==null||_.focus({preventScroll:!0})):(h.preventDefault(),a.actions.openListbox({focus:v.Nothing}))}),y=V(h=>h.preventDefault()),I=Ft([p]),N=zt(),{isFocusVisible:z,focusProps:q}=Ze({autoFocus:f}),{isHovered:k,hoverProps:G}=Je({isDisabled:m}),{pressed:x,pressProps:E}=Xe({disabled:m}),A=J({open:u===L.Open,active:x||u===L.Open,disabled:m,invalid:i.invalid,value:i.value,hover:k,focus:z,autofocus:f}),Y=O(a,h=>h.listboxState===L.Open),W=_e(w(),{ref:b,id:p,type:Ot(e,r),"aria-haspopup":"listbox","aria-controls":g?.id,"aria-expanded":Y,"aria-labelledby":I,"aria-describedby":N,disabled:m||void 0,autoFocus:f,onKeyDown:T,onKeyUp:H,onKeyPress:y},M,q,G,E);return te()({ourProps:W,theirProps:d,slot:A,defaultTag:en,name:"Listbox.Button"})}let Ue=c.createContext(!1),nn="div",sn=Oe.RenderStrategy|Oe.Static;function on(e,s){let n=c.useId(),{id:o=`headlessui-listbox-options-${n}`,anchor:i,portal:a=!1,modal:p=!0,transition:m=!1,...f}=e,d=lt(i),[b,w]=c.useState(null);d&&(a=!0);let u=ie("Listbox.Options"),r=Se("Listbox.Options"),[g,B,T,H]=O(r,l=>[l.listboxState,l.buttonElement,l.optionsElement,l.__demoMode]),M=Pe(B),y=Pe(T),I=Rt(),[N,z]=$t(m,b,I!==null?(I&ue.Open)===ue.Open:g===L.Open);Lt(N,B,r.actions.closeListbox);let q=H?!1:p&&g===L.Open;yt(q,y);let k=H?!1:p&&g===L.Open;vt(k,{allowed:c.useCallback(()=>[B,T],[B,T])});let G=O(r,r.selectors.didButtonMove)?!1:N,x=O(r,r.selectors.hasFrozenValue)&&!e.static,E=Et(x,u.value),A=c.useCallback(l=>u.compare(E,l),[u.compare,E]),Y=O(r,l=>{var Q;if(d==null||!((Q=d?.to)!=null&&Q.includes("selection")))return null;let ve=l.options.findIndex(Ye=>A(Ye.dataRef.current.value));return ve===-1&&(ve=0),ve}),W=(()=>{if(d==null)return;if(Y===null)return{...d,inner:void 0};let l=Array.from(u.listRef.current.values());return{...d,inner:{listRef:{current:l},index:Y}}})(),[h,_]=ct(W),xe=dt(),he=ne(s,d?h:null,r.actions.setOptionsElement,w),ae=st();c.useEffect(()=>{let l=T;l&&g===L.Open&&(Ht(l)||l==null||l.focus({preventScroll:!0}))},[g,T]);let be=V(l=>{var Q;switch(ae.dispose(),l.key){case j.Space:if(r.state.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),r.actions.search(l.key);case j.Enter:l.preventDefault(),l.stopPropagation(),r.actions.selectActiveOption();break;case Z(u.orientation,{vertical:j.ArrowDown,horizontal:j.ArrowRight}):return l.preventDefault(),l.stopPropagation(),r.actions.goToOption({focus:v.Next});case Z(u.orientation,{vertical:j.ArrowUp,horizontal:j.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),r.actions.goToOption({focus:v.Previous});case j.Home:case j.PageUp:return l.preventDefault(),l.stopPropagation(),r.actions.goToOption({focus:v.First});case j.End:case j.PageDown:return l.preventDefault(),l.stopPropagation(),r.actions.goToOption({focus:v.Last});case j.Escape:l.preventDefault(),l.stopPropagation(),je.flushSync(()=>r.actions.closeListbox()),(Q=r.state.buttonElement)==null||Q.focus({preventScroll:!0});return;case j.Tab:l.preventDefault(),l.stopPropagation(),je.flushSync(()=>r.actions.closeListbox()),Wt(r.state.buttonElement,l.shiftKey?Re.Previous:Re.Next);break;default:l.key.length===1&&(r.actions.search(l.key),ae.setTimeout(()=>r.actions.clearSearch(),350));break}}),fe=O(r,l=>{var Q;return(Q=l.buttonElement)==null?void 0:Q.id}),S=J({open:g===L.Open}),X=_e(d?xe():{},{id:o,ref:he,"aria-activedescendant":O(r,r.selectors.activeDescendantId),"aria-multiselectable":u.mode===U.Multi?!0:void 0,"aria-labelledby":fe,"aria-orientation":u.orientation,onKeyDown:be,role:"listbox",tabIndex:g===L.Open?0:void 0,style:{...f.style,..._,"--button-width":ut(N,B,!0).width},...Tt(z)}),qe=te(),Ge=c.useMemo(()=>u.mode===U.Multi?u:{...u,isSelected:A},[u,A]);return K.createElement(Nt,{enabled:a?e.static||N:!1,ownerDocument:M},K.createElement(pe.Provider,{value:Ge},qe({ourProps:X,theirProps:f,slot:S,defaultTag:nn,features:sn,visible:G,name:"Listbox.Options"})))}let an="div";function rn(e,s){let n=c.useId(),{id:o=`headlessui-listbox-option-${n}`,disabled:i=!1,value:a,...p}=e,m=c.useContext(Ue)===!0,f=ie("Listbox.Option"),d=Se("Listbox.Option"),b=O(d,x=>d.selectors.isActive(x,o)),w=f.isSelected(a),u=c.useRef(null),r=Pt(u),g=ot({disabled:i,value:a,domRef:u,get textValue(){return r()}}),B=ne(s,u,x=>{x?f.listRef.current.set(o,x):f.listRef.current.delete(o)}),T=O(d,x=>d.selectors.shouldScrollIntoView(x,o));Le(()=>{if(T)return it().requestAnimationFrame(()=>{var x,E;(E=(x=u.current)==null?void 0:x.scrollIntoView)==null||E.call(x,{block:"nearest"})})},[T,u]),Le(()=>{if(!m)return d.actions.registerOption(o,g),()=>d.actions.unregisterOption(o)},[g,o,m]);let H=V(x=>{if(i)return x.preventDefault();d.actions.selectOption(a)}),M=V(()=>{if(i)return d.actions.goToOption({focus:v.Nothing});d.actions.goToOption({focus:v.Specific,id:o})}),y=ft(),I=V(x=>y.update(x)),N=V(x=>{y.wasMoved(x)&&(i||b&&d.state.activationTrigger===de.Pointer||d.actions.goToOption({focus:v.Specific,id:o},de.Pointer))}),z=V(x=>{y.wasMoved(x)&&(i||b&&d.state.activationTrigger===de.Pointer&&d.actions.goToOption({focus:v.Nothing}))}),q=J({active:b,focus:b,selected:w,disabled:i,selectedOption:w&&m}),k=m?{}:{id:o,ref:B,role:"option",tabIndex:i===!0?void 0:-1,"aria-disabled":i===!0?!0:void 0,"aria-selected":w,disabled:void 0,onClick:H,onFocus:M,onPointerEnter:I,onMouseEnter:I,onPointerMove:N,onMouseMove:N,onPointerLeave:z,onMouseLeave:z},G=te();return!w&&m?null:G({ourProps:k,theirProps:p,slot:q,defaultTag:an,name:"Listbox.Option"})}let ln=c.Fragment;function cn(e,s){let{options:n,placeholder:o,...i}=e,a={ref:ne(s)},p=ie("ListboxSelectedOption"),m=J({}),f=p.value===void 0||p.value===null||p.mode===U.Multi&&Array.isArray(p.value)&&p.value.length===0,d=te();return K.createElement(Ue.Provider,{value:!0},d({ourProps:a,theirProps:{...i,children:K.createElement(K.Fragment,null,o&&f?o:n)},slot:m,defaultTag:ln,name:"ListboxSelectedOption"}))}let dn=ee(Xt),P=ee(tn),un=me,R=ee(on),$=ee(rn),mn=ee(cn),D=Object.assign(dn,{Button:P,Label:un,Options:R,Option:$,SelectedOption:mn});const Ie=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],pn=()=>{const[e,s]=c.useState(Ie[0]);return t.jsx(t.Fragment,{children:t.jsx("div",{className:"mt-4 max-w-sm",children:t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-primary justify-between items-center gap-3",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown ",children:Ie.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})})})},xn=`import {\r
  Listbox,\r
  ListboxButton,\r
  ListboxOption,\r
  ListboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
import { Icon } from "@iconify/react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const BasicListCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState(people[0]);\r
  return (\r
    <>\r
    <div className="mt-4 max-w-sm">\r
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>\r
          <ListboxButton className="ui-button bg-primary justify-between items-center gap-3">{selectedPerson.name} <Icon icon="solar:alt-arrow-down-outline" height={18} /></ListboxButton>\r
          <ListboxOptions anchor="bottom" className="ui-dropdown ">\r
            {people.map((person) => (\r
              <ListboxOption\r
                key={person.id}\r
                value={person}\r
                className="ui-dropdown-item"\r
              >\r
                {person.name}\r
              </ListboxOption>\r
            ))}\r
          </ListboxOptions>\r
        </Listbox>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicListCode\r
`,hn=()=>t.jsx("div",{children:t.jsx(C,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Basic Listbox"}),t.jsx(pn,{})]}),t.jsx(oe,{children:xn})]})})}),Ce=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!1},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],bn=()=>{const[e,s]=c.useState(Ce[0]);return t.jsx(t.Fragment,{children:t.jsx("div",{className:"mt-4 max-w-sm",children:t.jsxs(se,{className:"w-full",children:[t.jsx(me,{className:"text-sm mb-1 text-ld",children:"Assignee:"}),t.jsx(ye,{className:"text-xs mb-2",children:"This person will have full access to this project."}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-success  justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown",children:Ce.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item data-disabled:opacity-50 data-disabled:hover:text-bodytext",disabled:!n.available,children:n.name},n.id))})]})]})})})},fn=`import {\r
  Description,\r
  Field,\r
  Label,\r
  Listbox,\r
  ListboxButton,\r
  ListboxOption,\r
  ListboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
import { Icon } from "@iconify/react";\r
const people = [\r
  { id: 1, name: "Durward Reynolds", available: true },\r
  { id: 2, name: "Kenton Towne", available: true },\r
  { id: 3, name: "Therese Wunsch", available: false },\r
  { id: 4, name: "Benedict Kessler", available: false },\r
  { id: 5, name: "Katelyn Rohan", available: true },\r
];\r
\r
const DisableListboxCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState(people[0]);\r
  return (\r
    <>\r
    <div className="mt-4 max-w-sm">\r
      <Field className="w-full">\r
          <Label className="text-sm mb-1 text-ld">Assignee:</Label>\r
          <Description className="text-xs mb-2">\r
            This person will have full access to this project.\r
          </Description>\r
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>\r
            <ListboxButton className="ui-button bg-success  justify-between items-center gap-3 w-fit">\r
              {selectedPerson.name}{" "}\r
              <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
            </ListboxButton>\r
            <ListboxOptions anchor="bottom" className="ui-dropdown">\r
              {people.map((person) => (\r
                <ListboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="ui-dropdown-item data-disabled:opacity-50 data-disabled:hover:text-bodytext"\r
                  disabled={!person.available}\r
                >\r
                  {person.name}\r
                </ListboxOption>\r
              ))}\r
            </ListboxOptions>\r
          </Listbox>\r
        </Field>\r
    </div>\r
      </>\r
  );\r
};\r
\r
export default DisableListboxCode;\r
`,vn=()=>t.jsx("div",{children:t.jsx(C,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Disable Listbox Option"}),t.jsx(bn,{})]}),t.jsx(oe,{children:fn})]})})}),De=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],gn=()=>{const[e,s]=c.useState(De[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Disable Listbox"})}),t.jsx(se,{className:" max-w-sm flex gap-3 items-center w-full",disabled:!0,children:t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-slate-500 justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown",children:De.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})})]})})},Be=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],wn=()=>{const[e,s]=c.useState(Be[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Horizontal Listbox"})}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-info justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown w-80 max-w-80! flex flex-row",children:Be.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})},Ee=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],jn=()=>{const[e,s]=c.useState(Ee[0]);return t.jsx(t.Fragment,{children:t.jsx("div",{className:"mt-4 max-w-sm",children:t.jsxs(se,{className:"flex gap-3 items-center w-full",children:[t.jsx(me,{className:"block text-ld font-medium",children:"Assignee:"}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-secondary justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown",children:Ee.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})})},Ln=`import {\r
  Field,\r
  Label,\r
  Listbox,\r
  ListboxButton,\r
  ListboxOption,\r
  ListboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
import { Icon } from "@iconify/react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
\r
const LabelWithListcode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState(people[0]);\r
  return (\r
    <>\r
    <div className="mt-4 max-w-sm">\r
      <Field className="flex gap-3 items-center w-full">\r
          <Label className="block text-ld font-medium">Assignee:</Label>\r
          <Listbox value={selectedPerson} onChange={setSelectedPerson} >\r
            <ListboxButton className="ui-button bg-secondary justify-between items-center gap-3 w-fit">\r
              {selectedPerson.name}{" "}\r
              <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
            </ListboxButton>\r
            <ListboxOptions anchor="bottom" className="ui-dropdown">\r
              {people.map((person) => (\r
                <ListboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="ui-dropdown-item"\r
                >\r
                  {person.name}\r
                </ListboxOption>\r
              ))}\r
            </ListboxOptions>\r
          </Listbox>\r
        </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default LabelWithListcode\r
`,yn=()=>t.jsx("div",{children:t.jsx(C,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Label With Listbox"}),t.jsx(jn,{})]}),t.jsx(oe,{children:Ln})]})})}),Ke=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Nn=()=>{const[e,s]=c.useState(Ke[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Framer Motion "})}),t.jsx(D,{value:e,onChange:s,children:({open:n})=>t.jsxs(t.Fragment,{children:[t.jsxs(P,{className:"ui-button bg-secondary justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(Qt,{children:n&&t.jsx(R,{static:!0,as:Ut.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top ui-dropdown ",children:Ke.map(o=>t.jsx($,{value:o,className:"ui-dropdown-item",children:o.name},o.id))})})]})})]})})},Fe=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Sn=()=>{const[e,s]=c.useState(Fe[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Transitions"})}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-primary justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",transition:!0,className:"ui-dropdown origin-top transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0",children:Fe.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})},Me=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],On=()=>{const[e,s]=c.useState(Me[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Listbox Width"})}),t.jsx("div",{className:"max-w-sm",children:t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-error justify-between items-center gap-3",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown w-80",children:Me.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})})]})})},ke=[{id:1,name:"Durward Reynolds",available:!0},{id:2,name:"Kenton Towne",available:!0},{id:3,name:"Therese Wunsch",available:!1},{id:4,name:"Benedict Kessler",available:!1},{id:5,name:"Katelyn Rohan",available:!0}],Pn=()=>{const[e,s]=c.useState(ke[0]);return t.jsx(t.Fragment,{children:t.jsx("div",{className:"mt-4 ",children:t.jsxs(se,{className:"w-full",children:[t.jsx(ye,{className:"text-xs mb-2",children:"This person will have full access to this project. This person will have full access to this project."}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{className:"ui-button bg-warning  justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown",children:ke.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})})},Rn=`import {\r
  Description,\r
  Field,\r
  Listbox,\r
  ListboxButton,\r
  ListboxOption,\r
  ListboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
import { Icon } from "@iconify/react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds", available: true },\r
  { id: 2, name: "Kenton Towne", available: true },\r
  { id: 3, name: "Therese Wunsch", available: false },\r
  { id: 4, name: "Benedict Kessler", available: false },\r
  { id: 5, name: "Katelyn Rohan", available: true },\r
];\r
\r
const ListDescCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState(people[0]);\r
  return (\r
     \r
    <>\r
    <div className="mt-4 ">\r
      <Field className="w-full">\r
          <Description className="text-xs mb-2">\r
            This person will have full access to this project. This person will\r
            have full access to this project.\r
          </Description>\r
          <Listbox value={selectedPerson} onChange={setSelectedPerson}>\r
            <ListboxButton className="ui-button bg-warning  justify-between items-center gap-3 w-fit">\r
              {selectedPerson.name}{" "}\r
              <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
            </ListboxButton>\r
            <ListboxOptions anchor="bottom" className="ui-dropdown">\r
              {people.map((person) => (\r
                <ListboxOption\r
                  key={person.id}\r
                  value={person}\r
                  className="ui-dropdown-item"\r
                >\r
                  {person.name}\r
                </ListboxOption>\r
              ))}\r
            </ListboxOptions>\r
          </Listbox>\r
        </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ListDescCode\r
`,$n=()=>t.jsx("div",{children:t.jsx(C,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Listbox With Description"}),t.jsx(Pn,{})]}),t.jsx(oe,{children:Rn})]})})}),Ae=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Tn=()=>{const[e,s]=c.useState(Ae[0]);return t.jsx(t.Fragment,{children:t.jsx("div",{className:"mt-4 max-w-sm",children:t.jsx("form",{action:"/projects/1",method:"post ",className:"flex gap-3",children:t.jsxs(se,{className:"w-full max-w-sm",children:[t.jsx(me,{className:"text-sm mb-1 text-ld",children:"Assignee:"}),t.jsx(ye,{className:"text-xs mb-2",children:"This person will have full access to this project."}),t.jsxs(D,{name:"assignee",value:e,onChange:s,children:[t.jsxs("span",{className:"flex gap-3",children:[t.jsxs(P,{className:"ui-button bg-primary  justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx("button",{className:"ui-button bg-secondary",children:"Submit"})]}),t.jsx(R,{anchor:"bottom",className:"ui-dropdown",children:Ae.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})})})},In=`import {\r
  Description,\r
  Field,\r
  Label,\r
  Listbox,\r
  ListboxButton,\r
  ListboxOption,\r
  ListboxOptions,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
import { Icon } from "@iconify/react";\r
\r
const people = [\r
  { id: 1, name: "Durward Reynolds" },\r
  { id: 2, name: "Kenton Towne" },\r
  { id: 3, name: "Therese Wunsch" },\r
  { id: 4, name: "Benedict Kessler" },\r
  { id: 5, name: "Katelyn Rohan" },\r
];\r
const ListBoxWithHtmlCode = () => {\r
  const [selectedPerson, setSelectedPerson] = useState(people[0]);\r
  return (\r
    <>\r
    <div className="mt-4 max-w-sm">\r
      <form action="/projects/1" method="post " className="flex gap-3">\r
                <Field className="w-full max-w-sm">\r
                  <Label className="text-sm mb-1 text-ld">Assignee:</Label>\r
                  <Description className="text-xs mb-2">\r
                    This person will have full access to this project.\r
                  </Description>\r
                  <Listbox\r
                    name="assignee"\r
                    value={selectedPerson}\r
                    onChange={setSelectedPerson}\r
                  >\r
                      <span className="flex gap-3">\r
                    <ListboxButton className="ui-button bg-primary  justify-between items-center gap-3 w-fit">\r
                      {selectedPerson.name}{" "}\r
                      <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
                    </ListboxButton>\r
                    <button className="ui-button bg-secondary">Submit</button>\r
                    </span>\r
                    <ListboxOptions anchor="bottom" className="ui-dropdown">\r
                      {people.map((person) => (\r
                        <ListboxOption\r
                          key={person.id}\r
                          value={person}\r
                          className="ui-dropdown-item"\r
                        >\r
                          {person.name}\r
                        </ListboxOption>\r
                      ))}\r
                    </ListboxOptions>\r
                  </Listbox>\r
                </Field>\r
              </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ListBoxWithHtmlCode\r
`,Cn=()=>t.jsx("div",{children:t.jsx(C,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Using HTML forms"}),t.jsx(Tn,{})]}),t.jsx(oe,{children:In})]})})}),we=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}],Dn=()=>{const[e,s]=c.useState([we[0],we[1]]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Selecting Multiple Values"})}),t.jsxs(D,{value:e,onChange:s,multiple:!0,children:[t.jsx(P,{className:"ui-button bg-success justify-between items-center gap-3 w-fit",children:e.map(n=>n.name).join(", ")}),t.jsx(R,{anchor:"bottom",className:"origin-top ui-dropdown",children:we.map(n=>t.jsx($,{value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})},We=[{id:1,name:"Durward Reynolds"},{id:2,name:"Kenton Towne"},{id:3,name:"Therese Wunsch"},{id:4,name:"Benedict Kessler"},{id:5,name:"Katelyn Rohan"}];let Bn=c.forwardRef(function(s,n){return t.jsx("button",{ref:n,...s})});const En=()=>{const[e,s]=c.useState(We[0]);return t.jsx("div",{children:t.jsxs(C,{children:[t.jsx("div",{className:"flex items-center justify-between mb-2",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Rendering as Different Elements "})}),t.jsxs(D,{value:e,onChange:s,children:[t.jsxs(P,{as:Bn,className:"ui-button bg-error justify-between items-center gap-3 w-fit",children:[e.name," ",t.jsx(F,{icon:"solar:alt-arrow-down-outline",height:18})]}),t.jsx(R,{anchor:"bottom",as:"ul",className:"ui-dropdown",children:We.map(n=>t.jsx($,{as:"li",value:n,className:"ui-dropdown-item",children:n.name},n.id))})]})]})})},Kn=[{to:"/",title:"Home"},{title:"Listbox"}],Ss=()=>t.jsxs(t.Fragment,{children:[t.jsx(qt,{title:"Listbox",items:Kn}),t.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(hn,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(yn,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(gn,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(vn,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx($n,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(Cn,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(On,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(wn,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(Sn,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(Nn,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(Dn,{})}),t.jsx("div",{className:"lg:col-span-6 col-span-12",children:t.jsx(En,{})})]})]});export{Ss as default};
