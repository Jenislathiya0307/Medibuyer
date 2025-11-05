import{r as x,R as O,y as re,j as e}from"./index-n5lagw8Y.js";import{C as P}from"./CardBox-DP5V6wyZ.js";import{I as v}from"./iconify-VfOFnMl8.js";import{$ as ke,a as Pe}from"./useFocusRing-BQxkpHIn.js";import{w as Ee}from"./use-active-press-BchvfSUV.js";import{u as ge,Y as R,o as D,p as Be,a as ne,V as be,K as _,n as Z,A as ue,b as Te}from"./render-D9E-06xR.js";import{y as Ae,R as Le,T as Fe,w as Oe,A as Re,b as _e,F as Ge}from"./floating-Dkc68wZW.js";import{p as He,c as J,a as g,f as z,b as Ue,u as Ke,L as Qe,S as Y,s as Ve}from"./element-movement-BBURSpKm.js";import{y as We}from"./use-inert-others-0-7KICMh.js";import{T as qe,a as me,x as je,b as ze,c as Ye,S as A,u as pe,p as Ze,f as Je,t as Xe,k as en}from"./portal-Cdyr5OxY.js";import{e as nn}from"./use-resolve-button-type-B08ktXI3.js";import{y as te}from"./use-sync-refs-CefhOWeT.js";import{s as tn}from"./use-text-value-DPN_mgsa.js";import{u as rn,N as sn,i as X,x as on,c as an}from"./open-closed-0N_3BWp3.js";import{F as ln}from"./use-tree-walker-DdBzBlPK.js";import{n as dn}from"./dom-BlW_0b_t.js";import{G as cn,R as un,T as he,K as Ie,H as mn,I as pn}from"./focus-management-Ds-lPg9b.js";import{d as hn}from"./owner-CneWfzVc.js";import{H as xn}from"./description-CMFfDl8O.js";import{o as w}from"./keyboard-C1Wiwm26.js";import{V as we,C as fn}from"./label-9sDPupFE.js";import{C as F}from"./CodeDialog-BcgW2Qgx.js";import{A as gn,m as bn}from"./proxy-D5zimsvB.js";import{B as jn}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./bugs-BLuxiOOY.js";import"./with-selector-uup4H7fL.js";import"./disabled-CIuDn_DF.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";var In=Object.defineProperty,wn=(n,r,t)=>r in n?In(n,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[r]=t,xe=(n,r,t)=>(wn(n,typeof r!="symbol"?r+"":r,t),t),M=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(M||{}),ee=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(ee||{}),u=(n=>(n[n.OpenMenu=0]="OpenMenu",n[n.CloseMenu=1]="CloseMenu",n[n.GoToItem=2]="GoToItem",n[n.Search=3]="Search",n[n.ClearSearch=4]="ClearSearch",n[n.RegisterItems=5]="RegisterItems",n[n.UnregisterItems=6]="UnregisterItems",n[n.SetButtonElement=7]="SetButtonElement",n[n.SetItemsElement=8]="SetItemsElement",n[n.SortItems=9]="SortItems",n[n.MarkButtonAsMoved=10]="MarkButtonAsMoved",n))(u||{});function fe(n,r=t=>t){let t=n.activeItemIndex!==null?n.items[n.activeItemIndex]:null,s=cn(r(n.items.slice()),a=>a.dataRef.current.domRef.current),o=t?s.indexOf(t):null;return o===-1&&(o=null),{items:s,activeItemIndex:o}}let Mn={1(n){if(n.menuState===1)return n;let r=n.buttonElement?J.Tracked(Ue(n.buttonElement)):n.buttonPositionState;return{...n,activeItemIndex:null,pendingFocus:{focus:g.Nothing},menuState:1,buttonPositionState:r}},0(n,r){return n.menuState===0?n:{...n,__demoMode:!1,pendingFocus:r.focus,menuState:0,buttonPositionState:J.Idle}},2:(n,r)=>{var t,s,o,a,d;if(n.menuState===1)return n;let f={...n,searchQuery:"",activationTrigger:(t=r.trigger)!=null?t:1,__demoMode:!1};if(r.focus===g.Nothing)return{...f,activeItemIndex:null};if(r.focus===g.Specific)return{...f,activeItemIndex:n.items.findIndex(i=>i.id===r.id)};if(r.focus===g.Previous){let i=n.activeItemIndex;if(i!==null){let B=n.items[i].dataRef.current.domRef,j=z(r,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(j!==null){let p=n.items[j].dataRef.current.domRef;if(((s=B.current)==null?void 0:s.previousElementSibling)===p.current||((o=p.current)==null?void 0:o.previousElementSibling)===null)return{...f,activeItemIndex:j}}}}else if(r.focus===g.Next){let i=n.activeItemIndex;if(i!==null){let B=n.items[i].dataRef.current.domRef,j=z(r,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:p=>p.id,resolveDisabled:p=>p.dataRef.current.disabled});if(j!==null){let p=n.items[j].dataRef.current.domRef;if(((a=B.current)==null?void 0:a.nextElementSibling)===p.current||((d=p.current)==null?void 0:d.nextElementSibling)===null)return{...f,activeItemIndex:j}}}}let b=fe(n),k=z(r,{resolveItems:()=>b.items,resolveActiveIndex:()=>b.activeItemIndex,resolveId:i=>i.id,resolveDisabled:i=>i.dataRef.current.disabled});return{...f,...b,activeItemIndex:k}},3:(n,r)=>{let t=n.searchQuery!==""?0:1,s=n.searchQuery+r.value.toLowerCase(),o=(n.activeItemIndex!==null?n.items.slice(n.activeItemIndex+t).concat(n.items.slice(0,n.activeItemIndex+t)):n.items).find(d=>{var f;return((f=d.dataRef.current.textValue)==null?void 0:f.startsWith(s))&&!d.dataRef.current.disabled}),a=o?n.items.indexOf(o):-1;return a===-1||a===n.activeItemIndex?{...n,searchQuery:s}:{...n,searchQuery:s,activeItemIndex:a,activationTrigger:1}},4(n){return n.searchQuery===""?n:{...n,searchQuery:"",searchActiveItemIndex:null}},5:(n,r)=>{let t=n.items.concat(r.items.map(o=>o)),s=n.activeItemIndex;return n.pendingFocus.focus!==g.Nothing&&(s=z(n.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>n.activeItemIndex,resolveId:o=>o.id,resolveDisabled:o=>o.dataRef.current.disabled})),{...n,items:t,activeItemIndex:s,pendingFocus:{focus:g.Nothing},pendingShouldSort:!0}},6:(n,r)=>{let t=n.items,s=[],o=new Set(r.items);for(let[a,d]of t.entries())if(o.has(d.id)&&(s.push(a),o.delete(d.id),o.size===0))break;if(s.length>0){t=t.slice();for(let a of s.reverse())t.splice(a,1)}return{...n,items:t,activationTrigger:1}},7:(n,r)=>n.buttonElement===r.element?n:{...n,buttonElement:r.element},8:(n,r)=>n.itemsElement===r.element?n:{...n,itemsElement:r.element},9:n=>n.pendingShouldSort?{...n,...fe(n),pendingShouldSort:!1}:n,10(n){return n.buttonPositionState.kind!=="Tracked"?n:{...n,buttonPositionState:J.Moved}}};class ie extends qe{constructor(r){super(r),xe(this,"actions",{registerItem:me(()=>{let t=[],s=new Set;return[(o,a)=>{s.has(a)||(s.add(a),t.push({id:o,dataRef:a}))},()=>(s.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:me(()=>{let t=[];return[s=>t.push(s),()=>this.send({type:6,items:t.splice(0)})]})}),xe(this,"selectors",{activeDescendantId(t){var s;let o=t.activeItemIndex,a=t.items;return o===null||(s=a[o])==null?void 0:s.id},isActive(t,s){var o;let a=t.activeItemIndex,d=t.items;return a!==null?((o=d[a])==null?void 0:o.id)===s:!1},shouldScrollIntoView(t,s){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?!1:this.isActive(t,s)},didButtonMove(t){return t.buttonPositionState.kind==="Moved"}}),this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9})})});{let t=this.state.id,s=je.get(null);this.disposables.add(s.on(ze.Push,o=>{!s.selectors.isTop(o,t)&&this.state.menuState===0&&this.send({type:1})})),this.on(0,()=>s.actions.push(t)),this.on(1,()=>s.actions.pop(t))}this.disposables.group(t=>{this.on(1,s=>{s.buttonElement&&(t.dispose(),t.add(He(s.buttonElement,s.buttonPositionState,()=>{this.send({type:10})})))})})}static new({id:r,__demoMode:t=!1}){return new ie({id:r,__demoMode:t,menuState:t?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:!1,pendingFocus:{focus:g.Nothing},buttonPositionState:J.Idle})}reduce(r,t){return ge(t.type,Mn,r,t)}}const Me=x.createContext(null);function ae(n){let r=x.useContext(Me);if(r===null){let t=new Error(`<${n} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ve),t}return r}function ve({id:n,__demoMode:r=!1}){let t=x.useMemo(()=>ie.new({id:n,__demoMode:r}),[]);return Ye(()=>t.dispose()),t}let vn=x.Fragment;function Nn(n,r){let t=x.useId(),{__demoMode:s=!1,...o}=n,a=ve({id:t,__demoMode:s}),[d,f,b]=A(a,N=>[N.menuState,N.itemsElement,N.buttonElement]),k=te(r),i=je.get(null),B=A(i,x.useCallback(N=>i.selectors.isTop(N,t),[i,t]));en(B,[b,f],(N,y)=>{var S;a.send({type:u.CloseMenu}),mn(y,pn.Loose)||(N.preventDefault(),(S=a.state.buttonElement)==null||S.focus())});let j=D(()=>{a.send({type:u.CloseMenu})}),p=ne({open:d===M.Open,close:j}),I={ref:k},T=_();return O.createElement(Re,null,O.createElement(Me.Provider,{value:a},O.createElement(an,{value:ge(d,{[M.Open]:X.Open,[M.Closed]:X.Closed})},T({ourProps:I,theirProps:o,slot:p,defaultTag:vn,name:"Menu"}))))}let yn="button";function Sn(n,r){let t=ae("Menu.Button"),s=x.useId(),{id:o=`headlessui-menu-button-${s}`,disabled:a=!1,autoFocus:d=!1,...f}=n,b=x.useRef(null),k=_e(),i=te(r,b,Ge(),D(m=>t.send({type:u.SetButtonElement,element:m}))),B=D(m=>{switch(m.key){case w.Space:case w.Enter:case w.ArrowDown:m.preventDefault(),m.stopPropagation(),t.send({type:u.OpenMenu,focus:{focus:g.First}});break;case w.ArrowUp:m.preventDefault(),m.stopPropagation(),t.send({type:u.OpenMenu,focus:{focus:g.Last}});break}}),j=D(m=>{switch(m.key){case w.Space:m.preventDefault();break}}),[p,I,T]=A(t,m=>[m.menuState,m.buttonElement,m.itemsElement]),N=p===M.Open;Qe(N,{trigger:I,action:x.useCallback(m=>{if(I!=null&&I.contains(m.target))return Y.Ignore;let h=m.target.closest('[role="menuitem"]:not([data-disabled])');return dn(h)?Y.Select(h):T!=null&&T.contains(m.target)?Y.Ignore:Y.Close},[I,T]),close:x.useCallback(()=>t.send({type:u.CloseMenu}),[]),select:x.useCallback(m=>m.click(),[])});let y=Ve(m=>{var h;a||(p===M.Open?(re.flushSync(()=>t.send({type:u.CloseMenu})),(h=b.current)==null||h.focus({preventScroll:!0})):(m.preventDefault(),t.send({type:u.OpenMenu,focus:{focus:g.Nothing},trigger:ee.Pointer})))}),{isFocusVisible:S,focusProps:G}=ke({autoFocus:d}),{isHovered:K,hoverProps:H}=Pe({isDisabled:a}),{pressed:L,pressProps:Q}=Ee({disabled:a}),U=ne({open:p===M.Open,active:L||p===M.Open,disabled:a,hover:K,focus:S,autofocus:d}),V=be(k(),{ref:i,id:o,type:nn(n,b.current),"aria-haspopup":"menu","aria-controls":T?.id,"aria-expanded":p===M.Open,disabled:a||void 0,autoFocus:d,onKeyDown:B,onKeyUp:j},y,G,H,Q);return _()({ourProps:V,theirProps:f,slot:U,defaultTag:yn,name:"Menu.Button"})}let Dn="div",Cn=ue.RenderStrategy|ue.Static;function $n(n,r){let t=x.useId(),{id:s=`headlessui-menu-items-${t}`,anchor:o,portal:a=!1,modal:d=!0,transition:f=!1,...b}=n,k=Ae(o),i=ae("Menu.Items"),[B,j]=Le(k),p=Fe(),[I,T]=x.useState(null),N=te(r,k?B:null,D(l=>i.send({type:u.SetItemsElement,element:l})),T),[y,S]=A(i,l=>[l.menuState,l.buttonElement]),G=pe(S),K=pe(I);k&&(a=!0);let H=rn(),[L,Q]=sn(f,I,H!==null?(H&X.Open)===X.Open:y===M.Open);Ze(L,S,()=>{i.send({type:u.CloseMenu})});let U=A(i,l=>l.__demoMode),V=U?!1:d&&y===M.Open;Je(V,K);let m=U?!1:d&&y===M.Open;We(m,{allowed:x.useCallback(()=>[S,I],[S,I])});let h=A(i,i.selectors.didButtonMove)?!1:L;x.useEffect(()=>{let l=I;l&&y===M.Open&&(hn(l)||l.focus({preventScroll:!0}))},[y,I]),ln(y===M.Open,{container:I,accept(l){return l.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:l.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(l){l.setAttribute("role","none")}});let W=Be(),Ne=D(l=>{var q,de,ce;switch(W.dispose(),l.key){case w.Space:if(i.state.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),i.send({type:u.Search,value:l.key});case w.Enter:if(l.preventDefault(),l.stopPropagation(),i.state.activeItemIndex!==null){let{dataRef:$e}=i.state.items[i.state.activeItemIndex];(de=(q=$e.current)==null?void 0:q.domRef.current)==null||de.click()}i.send({type:u.CloseMenu}),Ie(i.state.buttonElement);break;case w.ArrowDown:return l.preventDefault(),l.stopPropagation(),i.send({type:u.GoToItem,focus:g.Next});case w.ArrowUp:return l.preventDefault(),l.stopPropagation(),i.send({type:u.GoToItem,focus:g.Previous});case w.Home:case w.PageUp:return l.preventDefault(),l.stopPropagation(),i.send({type:u.GoToItem,focus:g.First});case w.End:case w.PageDown:return l.preventDefault(),l.stopPropagation(),i.send({type:u.GoToItem,focus:g.Last});case w.Escape:l.preventDefault(),l.stopPropagation(),re.flushSync(()=>i.send({type:u.CloseMenu})),(ce=i.state.buttonElement)==null||ce.focus({preventScroll:!0});break;case w.Tab:l.preventDefault(),l.stopPropagation(),re.flushSync(()=>i.send({type:u.CloseMenu})),un(i.state.buttonElement,l.shiftKey?he.Previous:he.Next);break;default:l.key.length===1&&(i.send({type:u.Search,value:l.key}),W.setTimeout(()=>i.send({type:u.ClearSearch}),350));break}}),ye=D(l=>{switch(l.key){case w.Space:l.preventDefault();break}}),Se=ne({open:y===M.Open}),De=be(k?p():{},{"aria-activedescendant":A(i,i.selectors.activeDescendantId),"aria-labelledby":A(i,l=>{var q;return(q=l.buttonElement)==null?void 0:q.id}),id:s,onKeyDown:Ne,onKeyUp:ye,role:"menu",tabIndex:y===M.Open?0:void 0,ref:N,style:{...b.style,...j,"--button-width":Oe(L,S,!0).width},...on(Q)}),Ce=_();return O.createElement(Xe,{enabled:a?n.static||L:!1,ownerDocument:G},Ce({ourProps:De,theirProps:b,slot:Se,defaultTag:Dn,features:Cn,visible:h,name:"Menu.Items"}))}let kn=x.Fragment;function Pn(n,r){let t=x.useId(),{id:s=`headlessui-menu-item-${t}`,disabled:o=!1,...a}=n,d=ae("Menu.Item"),f=A(d,h=>d.selectors.isActive(h,s)),b=x.useRef(null),k=te(r,b),i=A(d,h=>d.selectors.shouldScrollIntoView(h,s));Z(()=>{if(i)return Te().requestAnimationFrame(()=>{var h,W;(W=(h=b.current)==null?void 0:h.scrollIntoView)==null||W.call(h,{block:"nearest"})})},[i,b]);let B=tn(b),j=x.useRef({disabled:o,domRef:b,get textValue(){return B()}});Z(()=>{j.current.disabled=o},[j,o]),Z(()=>(d.actions.registerItem(s,j),()=>d.actions.unregisterItem(s)),[j,s]);let p=D(()=>{d.send({type:u.CloseMenu})}),I=D(h=>{if(o)return h.preventDefault();d.send({type:u.CloseMenu}),Ie(d.state.buttonElement)}),T=D(()=>{if(o)return d.send({type:u.GoToItem,focus:g.Nothing});d.send({type:u.GoToItem,focus:g.Specific,id:s})}),N=Ke(),y=D(h=>N.update(h)),S=D(h=>{N.wasMoved(h)&&(o||f||d.send({type:u.GoToItem,focus:g.Specific,id:s,trigger:ee.Pointer}))}),G=D(h=>{N.wasMoved(h)&&(o||f&&d.state.activationTrigger===ee.Pointer&&d.send({type:u.GoToItem,focus:g.Nothing}))}),[K,H]=we(),[L,Q]=xn(),U=ne({active:f,focus:f,disabled:o,close:p}),V={id:s,ref:k,role:"menuitem",tabIndex:o===!0?void 0:-1,"aria-disabled":o===!0?!0:void 0,"aria-labelledby":K,"aria-describedby":L,disabled:void 0,onClick:I,onFocus:T,onPointerEnter:y,onMouseEnter:y,onPointerMove:S,onMouseMove:S,onPointerLeave:G,onMouseLeave:G},m=_();return O.createElement(H,null,O.createElement(Q,null,m({ourProps:V,theirProps:a,slot:U,defaultTag:kn,name:"Menu.Item"})))}let En="div";function Bn(n,r){let[t,s]=we(),o=n,a={ref:r,"aria-labelledby":t,role:"group"},d=_();return O.createElement(s,null,d({ourProps:a,theirProps:o,slot:{},defaultTag:En,name:"Menu.Section"}))}let Tn="header";function An(n,r){let t=x.useId(),{id:s=`headlessui-menu-heading-${t}`,...o}=n,a=fn();Z(()=>a.register(s),[s,a.register]);let d={id:s,ref:r,role:"presentation",...a.props};return _()({ourProps:d,theirProps:o,slot:{},defaultTag:Tn,name:"Menu.Heading"})}let Ln="div";function Fn(n,r){let t=n,s={ref:r,role:"separator"};return _()({ourProps:s,theirProps:t,slot:{},defaultTag:Ln,name:"Menu.Separator"})}let On=R(Nn),C=R(Sn),$=R($n),c=R(Pn),se=R(Bn),oe=R(An),le=R(Fn),E=Object.assign(On,{Button:C,Items:$,Item:c,Section:se,Heading:oe,Separator:le});const Rn=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-primary gap-2",children:["Options",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsxs("button",{className:"ui-dropdown-item group",children:[e.jsx(v,{icon:"solar:pen-new-square-outline",height:18}),"Edit",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-focus:inline ",children:"⌘ E"})]})}),e.jsx(c,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(v,{icon:"solar:copy-outline",height:18}),"Duplicate",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-focus:inline",children:"⌘ D"})]})}),e.jsx(c,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(v,{icon:"solar:archive-check-broken",height:18}),"Archive",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-focus:inline",children:"⌘ A"})]})}),e.jsx(c,{children:e.jsxs("button",{className:"ui-dropdown-item group ",children:[e.jsx(v,{icon:"solar:trash-bin-minimalistic-2-outline",height:18}),"Delete",e.jsx("kbd",{className:"ms-auto hidden text-xs text-bodytext group-data-focus:inline",children:"⌘ D"})]})})]})]})})}),_n=`import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
const BasicDropdownCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
        <Menu>\r
          <MenuButton className="ui-button bg-primary gap-2">\r
            Options\r
            <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">\r
            <MenuItem>\r
              <button className="ui-dropdown-item group">\r
                <Icon icon="solar:pen-new-square-outline" height={18} />\r
                Edit\r
                <kbd className="ms-auto hidden text-xs text-bodytext group-data-focus:inline ">\r
                  ⌘ E\r
                </kbd>\r
              </button>\r
            </MenuItem>\r
            <MenuItem>\r
              <button className="ui-dropdown-item group ">\r
                <Icon icon="solar:copy-outline" height={18} />\r
                Duplicate\r
                <kbd className="ms-auto hidden text-xs text-bodytext group-data-focus:inline">\r
                  ⌘ D\r
                </kbd>\r
              </button>\r
            </MenuItem>\r
            <MenuItem>\r
              <button className="ui-dropdown-item group ">\r
                <Icon icon="solar:archive-check-broken" height={18} />\r
                Archive\r
                <kbd className="ms-auto hidden text-xs text-bodytext group-data-focus:inline">\r
                  ⌘ A\r
                </kbd>\r
              </button>\r
            </MenuItem>\r
            <MenuItem>\r
              <button className="ui-dropdown-item group ">\r
                <Icon\r
                  icon="solar:trash-bin-minimalistic-2-outline"\r
                  height={18}\r
                />\r
                Delete\r
                <kbd className="ms-auto hidden text-xs text-bodytext group-data-focus:inline">\r
                  ⌘ D\r
                </kbd>\r
              </button>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default BasicDropdownCode;\r
`,Gn=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dropdown"}),e.jsx(Rn,{})]}),e.jsx(F,{children:_n})]})})}),Hn=()=>{function n(){alert("Open settings dialog!")}function r(){alert("Open Support dialog!")}function t(){alert("Open Logout dialog!")}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-success gap-2",children:["My Action ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsx("button",{onClick:n,className:"ui-dropdown-item",children:"Settings"})}),e.jsx(c,{children:e.jsx("button",{onClick:r,className:"ui-dropdown-item",children:"Support"})}),e.jsx(c,{children:e.jsx("button",{onClick:t,className:"ui-dropdown-item",children:"Logout"})})]})]})})})},Un=`import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
const ButtonActionCode = () => {\r
  function showSettingsDialog() {\r
    alert("Open settings dialog!");\r
  }\r
  function showSupportDialog() {\r
    alert("Open Support dialog!");\r
  }\r
  function showLogoutDialog() {\r
    alert("Open Logout dialog!");\r
  }\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-success gap-2">\r
            My Action <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">\r
            <MenuItem>\r
              <button onClick={showSettingsDialog} className="ui-dropdown-item">\r
                Settings\r
              </button>\r
            </MenuItem>\r
            <MenuItem>\r
              <button onClick={showSupportDialog} className="ui-dropdown-item">\r
                Support\r
              </button>\r
            </MenuItem>\r
            <MenuItem>\r
              <button onClick={showLogoutDialog} className="ui-dropdown-item">\r
                Logout\r
              </button>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ButtonActionCode;\r
`,Kn=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Button Action"}),e.jsx(Hn,{})]}),e.jsx(F,{children:Un})]})})}),Qn=({href:n,onClick:r,children:t})=>e.jsx("a",{className:"ui-dropdown-item",href:n,onClick:r,children:t}),Vn=()=>e.jsx("div",{children:e.jsxs(P,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Manually"})}),e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button  bg-primary gap-2 w-36",children:["Terms ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx($,{anchor:"bottom",className:"ui-dropdown",children:e.jsx(c,{children:({close:n})=>e.jsx(Qn,{href:"/",onClick:n,children:"Read and accept"})})})]})]})}),Wn=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-error gap-2",children:["My Profile ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{disabled:!0,children:e.jsx("a",{className:"ui-dropdown-item data-disabled:opacity-50",href:"/license",children:"License"})}),e.jsx(c,{disabled:!0,children:e.jsx("a",{className:"ui-dropdown-item data-disabled:opacity-50",href:"/logout",children:"Logout"})})]})]})})}),qn=`import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";\r
import { Icon } from "@iconify/react/dist/iconify.js";\r
\r
const DisableItemCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-error gap-2">\r
            My Profile <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/settings">\r
                Settings\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/support">\r
                Support\r
              </a>\r
            </MenuItem>\r
            <MenuItem disabled>\r
              <a\r
                className="ui-dropdown-item data-disabled:opacity-50"\r
                href="/license"\r
              >\r
                License\r
              </a>\r
            </MenuItem>\r
            <MenuItem disabled>\r
              <a\r
                className="ui-dropdown-item data-disabled:opacity-50"\r
                href="/logout"\r
              >\r
                Logout\r
              </a>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableItemCode\r
`,zn=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Items"}),e.jsx(Wn,{})]}),e.jsx(F,{children:qn})]})})}),Yn=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-secondary gap-2",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"top start",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})})}),Zn=`import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";\r
import { Icon } from "@iconify/react/dist/iconify.js";\r
\r
\r
const DropdownPositionCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-secondary gap-2">\r
            My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems\r
            transition\r
            anchor="top start"\r
            className="ui-dropdown ui-dropdown-animation"\r
          >\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/settings">\r
                Settings\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/support">\r
                Support\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/license">\r
                License\r
              </a>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DropdownPositionCode\r
`,Jn=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Position"}),e.jsx(Yn,{})]}),e.jsx(F,{children:Zn})]})})}),Xn=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button  bg-primary gap-2",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation w-80! max-w-80!",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})})}),et=`import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
\r
const DropdwonWidthCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button  bg-primary gap-2">\r
            My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation w-80! max-w-80!">\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/settings">\r
                Settings\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/support">\r
                Support\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/license">\r
                License\r
              </a>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DropdwonWidthCode\r
`,nt=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dropdown Width"}),e.jsx(Xn,{})]}),e.jsx(F,{children:et})]})})}),tt=()=>e.jsx("div",{children:e.jsxs(P,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion"})}),e.jsx(E,{children:({open:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(C,{className:"ui-button  bg-error gap-2 w-fit",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsx(gn,{children:n&&e.jsxs($,{static:!0,as:bn.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"origin-top ui-dropdown ",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})})]})})]})}),rt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-info gap-2",children:["My Groups",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsxs(se,{children:[e.jsx(oe,{className:"text-ld text-sm font-semibold px-4 py-1",children:"Settings"}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/profile",children:"My profile"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/notifications",children:"Notifications"})})]}),e.jsx(le,{className:"my-1 h-px bg-border dark:bg-darkborder"}),e.jsxs(se,{children:[e.jsx(oe,{className:"text-ld text-sm font-semibold px-4 py-1",children:"Support"}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Documentation"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})})}),st=`import {\r
  Menu,\r
  MenuButton,\r
  MenuItems,\r
  MenuSection,\r
  MenuHeading,\r
  MenuItem,\r
  MenuSeparator,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
\r
const GroupItemCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-info gap-2">\r
            My Groups\r
            <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems\r
            transition\r
            anchor="bottom"\r
            className="ui-dropdown ui-dropdown-animation"\r
          >\r
            <MenuSection>\r
              <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">\r
                Settings\r
              </MenuHeading>\r
              <MenuItem>\r
                <a className="ui-dropdown-item" href="/profile">\r
                  My profile\r
                </a>\r
              </MenuItem>\r
              <MenuItem>\r
                <a className="ui-dropdown-item" href="/notifications">\r
                  Notifications\r
                </a>\r
              </MenuItem>\r
            </MenuSection>\r
            <MenuSeparator className="my-1 h-px bg-border dark:bg-darkborder" />\r
            <MenuSection>\r
              <MenuHeading className="text-ld text-sm font-semibold px-4 py-1">\r
                Support\r
              </MenuHeading>\r
              <MenuItem>\r
                <a className="ui-dropdown-item" href="/support">\r
                  Documentation\r
                </a>\r
              </MenuItem>\r
              <MenuItem>\r
                <a className="ui-dropdown-item" href="/license">\r
                  License\r
                </a>\r
              </MenuItem>\r
            </MenuSection>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default GroupItemCode;\r
`,ot=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Grouping Items"}),e.jsx(rt,{})]}),e.jsx(F,{children:st})]})})}),it=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-secondary gap-2",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})})}),at=`import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
const LinkDropdownCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-secondary gap-2">\r
            My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/settings">\r
                Settings\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/support">\r
                Support\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/license">\r
                License\r
              </a>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default LinkDropdownCode;\r
`,lt=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Links Dropdown"}),e.jsx(it,{})]}),e.jsx(F,{children:at})]})})});let dt=x.forwardRef(function(n,r){return e.jsx("button",{className:"...",ref:r,...n})});const ct=()=>e.jsx("div",{children:e.jsxs(P,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering Elements"})}),e.jsxs(E,{children:[e.jsxs(C,{as:dt,className:"ui-button  bg-secondary gap-2 w-fit",children:["My account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{anchor:"bottom",as:"section",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{as:"a",className:"ui-dropdown-item",href:"/settings",children:"Settings"}),e.jsx(c,{as:"a",className:"ui-dropdown-item",href:"/support",children:"Support"}),e.jsx(c,{as:"a",className:"ui-dropdown-item",href:"/license",children:"License"})]})]})]})}),ut=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button bg-warning gap-2",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown ui-dropdown-animation",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(le,{className:"my-1 h-px bg-border dark:bg-darkborder"}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})})}),mt=`import {\r
  Menu,\r
  MenuButton,\r
  MenuItems,\r
  MenuItem,\r
  MenuSeparator,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
const SepratingItemsCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Menu>\r
          <MenuButton className="ui-button bg-warning gap-2">\r
            My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />\r
          </MenuButton>\r
          <MenuItems transition anchor="bottom" className="ui-dropdown ui-dropdown-animation">\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/settings">\r
                Settings\r
              </a>\r
            </MenuItem>\r
            <MenuSeparator className="my-1 h-px bg-border dark:bg-darkborder" />\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/support">\r
                Support\r
              </a>\r
            </MenuItem>\r
            <MenuItem>\r
              <a className="ui-dropdown-item" href="/license">\r
                License\r
              </a>\r
            </MenuItem>\r
          </MenuItems>\r
        </Menu>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default SepratingItemsCode;\r
`,pt=()=>e.jsx("div",{children:e.jsx(P,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Separating Items"}),e.jsx(ut,{})]}),e.jsx(F,{children:mt})]})})}),ht=()=>e.jsx("div",{children:e.jsxs(P,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions"})}),e.jsxs(E,{children:[e.jsxs(C,{className:"ui-button  bg-success gap-2 w-fit",children:["My Account ",e.jsx(v,{icon:"solar:alt-arrow-down-outline",height:18})]}),e.jsxs($,{transition:!0,anchor:"bottom",className:"ui-dropdown origin-top transition duration-500 ease-out data-closed:scale-95 data-closed:opacity-0",children:[e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/settings",children:"Settings"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/support",children:"Support"})}),e.jsx(c,{children:e.jsx("a",{className:"ui-dropdown-item",href:"/license",children:"License"})})]})]})]})}),xt=[{to:"/",title:"Home"},{title:"Dropdown"}],er=()=>e.jsxs(e.Fragment,{children:[e.jsx(jn,{title:"Dropdown",items:xt}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Gn,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(lt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Kn,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(zn,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(pt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ot,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Jn,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(nt,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(ht,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(tt,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(Vn,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(ct,{})})]})]});export{er as default};
