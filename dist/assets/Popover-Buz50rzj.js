import{r as l,R as N,j as e}from"./index-n5lagw8Y.js";import{C as _}from"./CardBox-DP5V6wyZ.js";import{$ as Le,a as ze}from"./useFocusRing-BQxkpHIn.js";import{w as Ve}from"./use-active-press-BchvfSUV.js";import{F as He,y as Ye,R as Qe,T as Ze,w as qe,A as Ue}from"./floating-Dkc68wZW.js";import{u as ee,Y as ne,o as j,a as ce,V as be,K as me,n as Je,c as Se,A as xe}from"./render-D9E-06xR.js";import{E as Xe}from"./use-event-listener-BvgRGIId.js";import{T as et,x as tt,c as rt,S as te,u as Ie,p as at,f as nt,t as ot,d as st,e as dt,k as it}from"./portal-Cdyr5OxY.js";import{e as lt}from"./use-resolve-button-type-B08ktXI3.js";import{u as Ee,x as ct,S as mt,j as Ae,a as L}from"./use-tab-direction-CaXwQaRe.js";import{y as re,T as ut}from"./use-sync-refs-CefhOWeT.js";import{u as Me,N as Oe,i as ae,x as Re,s as pt,c as xt}from"./open-closed-0N_3BWp3.js";import{C as De}from"./close-provider-C5BPq0tm.js";import{f as ye,s as Ne}from"./hidden-C2xwWGhP.js";import{s as Te}from"./bugs-BLuxiOOY.js";import{n as ke,i as ht}from"./dom-BlW_0b_t.js";import{x as je,v as Q,T as z,H as vt,A as Pe,I as ft}from"./focus-management-Ds-lPg9b.js";import{l as gt,e as le,r as we}from"./owner-CneWfzVc.js";import{o as Y}from"./keyboard-C1Wiwm26.js";import{C as G}from"./CodeDialog-BcgW2Qgx.js";import{y as bt}from"./close-button-DL57TD92.js";import{A as yt,m as Nt}from"./proxy-D5zimsvB.js";import{B as kt}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./with-selector-uup4H7fL.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./button-BcCM4Hnr.js";import"./disabled-CIuDn_DF.js";import"./chevron-right-icon-BGQVsHY5.js";var Pt=Object.defineProperty,jt=(t,n,r)=>n in t?Pt(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,Fe=(t,n,r)=>(jt(t,typeof n!="symbol"?n+"":n,r),r),g=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(g||{}),wt=(t=>(t[t.OpenPopover=0]="OpenPopover",t[t.ClosePopover=1]="ClosePopover",t[t.SetButton=2]="SetButton",t[t.SetButtonId=3]="SetButtonId",t[t.SetPanel=4]="SetPanel",t[t.SetPanelId=5]="SetPanelId",t))(wt||{});let Ct={0:t=>t.popoverState===0?t:{...t,popoverState:0,__demoMode:!1},1(t){return t.popoverState===1?t:{...t,popoverState:1,__demoMode:!1}},2(t,n){return t.button===n.button?t:{...t,button:n.button}},3(t,n){return t.buttonId===n.buttonId?t:{...t,buttonId:n.buttonId}},4(t,n){return t.panel===n.panel?t:{...t,panel:n.panel}},5(t,n){return t.panelId===n.panelId?t:{...t,panelId:n.panelId}}};class Ce extends et{constructor(n){super(n),Fe(this,"actions",{close:()=>this.send({type:1}),refocusableClose:r=>{this.actions.close();let x=r?ke(r)?r:"current"in r&&ke(r.current)?r.current:this.state.button:this.state.button;x?.focus()},open:()=>this.send({type:0}),setButtonId:r=>this.send({type:3,buttonId:r}),setButton:r=>this.send({type:2,button:r}),setPanelId:r=>this.send({type:5,panelId:r}),setPanel:r=>this.send({type:4,panel:r})}),Fe(this,"selectors",{isPortalled:r=>{var x;if(!r.button||!r.panel)return!1;let v=(x=gt(r.button))!=null?x:document;for(let k of v.querySelectorAll("body > *"))if(Number(k?.contains(r.button))^Number(k?.contains(r.panel)))return!0;let f=je(v),d=f.indexOf(r.button),a=(d+f.length-1)%f.length,C=(d+1)%f.length,w=f[a],s=f[C];return!r.panel.contains(w)&&!r.panel.contains(s)}});{let r=this.state.id,x=tt.get(null);this.on(0,()=>x.actions.push(r)),this.on(1,()=>x.actions.pop(r))}}static new({id:n,__demoMode:r=!1}){return new Ce({id:n,__demoMode:r,popoverState:r?0:1,buttons:{current:[]},button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:{current:null},afterPanelSentinel:{current:null},afterButtonSentinel:{current:null}})}reduce(n,r){return ee(r.type,Ct,n,r)}}const _e=l.createContext(null);function he(t){let n=l.useContext(_e);if(n===null){let r=new Error(`<${t} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,he),r}return n}function Bt({id:t,__demoMode:n=!1}){let r=l.useMemo(()=>Ce.new({id:t,__demoMode:n}),[]);return rt(()=>r.dispose()),r}let Be=l.createContext(null);Be.displayName="PopoverGroupContext";function Ge(){return l.useContext(Be)}let ve=l.createContext(null);ve.displayName="PopoverPanelContext";function $t(){return l.useContext(ve)}let St="div";function It(t,n){var r;let x=l.useId(),{__demoMode:v=!1,...f}=t,d=Bt({id:x,__demoMode:v}),a=l.useRef(null),C=re(n,ut(i=>{a.current=i})),[w,s,k,P,E]=te(d,l.useCallback(i=>[i.popoverState,i.button,i.panel,i.buttonId,i.panelId],[])),A=st((r=a.current)!=null?r:s),p=Se(P),h=Se(E),b=l.useMemo(()=>({buttonId:p,panelId:h,close:d.actions.close}),[p,h,d]),y=Ge(),c=y?.registerPopover,B=j(()=>{var i,$;let M=le((i=a.current)!=null?i:s);return($=y?.isFocusWithinPopoverGroup())!=null?$:M&&(s?.contains(M)||k?.contains(M))});l.useEffect(()=>c?.(b),[c,b]);let[oe,se]=dt(),V=ct(s),K=mt({mainTreeNode:V,portals:oe,defaultContainers:[{get current(){return d.state.button}},{get current(){return d.state.panel}}]});Xe(A,"focus",i=>{var $,M,D,J,T,X;i.target!==window&&ht(i.target)&&d.state.popoverState===g.Open&&(B()||d.state.button&&d.state.panel&&(K.contains(i.target)||(M=($=d.state.beforePanelSentinel.current)==null?void 0:$.contains)!=null&&M.call($,i.target)||(J=(D=d.state.afterPanelSentinel.current)==null?void 0:D.contains)!=null&&J.call(D,i.target)||(X=(T=d.state.afterButtonSentinel.current)==null?void 0:T.contains)!=null&&X.call(T,i.target)||d.actions.close()))},!0);let Z=w===g.Open;it(Z,K.resolveContainers,(i,$)=>{d.actions.close(),vt($,ft.Loose)||(i.preventDefault(),s?.focus())});let de=ce({open:w===g.Open,close:d.actions.refocusableClose}),ie=te(d,l.useCallback(i=>ee(i.popoverState,{[g.Open]:ae.Open,[g.Closed]:ae.Closed}),[])),q={ref:C},U=me();return N.createElement(Ae,{node:V},N.createElement(Ue,null,N.createElement(ve.Provider,{value:null},N.createElement(_e.Provider,{value:d},N.createElement(De,{value:d.actions.refocusableClose},N.createElement(xt,{value:ie},N.createElement(se,null,U({ourProps:q,theirProps:f,slot:de,defaultTag:St,name:"Popover"}))))))))}let Ft="button";function Et(t,n){let r=l.useId(),{id:x=`headlessui-popover-button-${r}`,disabled:v=!1,autoFocus:f=!1,...d}=t,a=he("Popover.Button"),[C,w,s,k,P,E,A]=te(a,l.useCallback(o=>[o.popoverState,a.selectors.isPortalled(o),o.button,o.buttonId,o.panel,o.panelId,o.afterButtonSentinel],[])),p=l.useRef(null),h=`headlessui-focus-sentinel-${l.useId()}`,b=Ge(),y=b?.closeOthers,c=$t()!==null;l.useEffect(()=>{if(!c)return a.actions.setButtonId(x),()=>a.actions.setButtonId(null)},[c,x,a]);let[B]=l.useState(()=>Symbol()),oe=re(p,n,He(),j(o=>{if(!c){if(o)a.state.buttons.current.push(B);else{let m=a.state.buttons.current.indexOf(B);m!==-1&&a.state.buttons.current.splice(m,1)}a.state.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),o&&a.actions.setButton(o)}})),se=re(p,n),V=j(o=>{var m,S,R;if(c){if(a.state.popoverState===g.Closed)return;switch(o.key){case Y.Space:case Y.Enter:o.preventDefault(),(S=(m=o.target).click)==null||S.call(m),a.actions.close(),(R=a.state.button)==null||R.focus();break}}else switch(o.key){case Y.Space:case Y.Enter:o.preventDefault(),o.stopPropagation(),a.state.popoverState===g.Closed?(y?.(a.state.buttonId),a.actions.open()):a.actions.close();break;case Y.Escape:if(a.state.popoverState!==g.Open)return y?.(a.state.buttonId);if(!p.current)return;let W=le(p.current);if(W&&!p.current.contains(W))return;o.preventDefault(),o.stopPropagation(),a.actions.close();break}}),K=j(o=>{c||o.key===Y.Space&&o.preventDefault()}),Z=j(o=>{var m,S;Te(o.currentTarget)||v||(c?(a.actions.close(),(m=a.state.button)==null||m.focus()):(o.preventDefault(),o.stopPropagation(),a.state.popoverState===g.Closed?(y?.(a.state.buttonId),a.actions.open()):a.actions.close(),(S=a.state.button)==null||S.focus()))}),de=j(o=>{o.preventDefault(),o.stopPropagation()}),{isFocusVisible:ie,focusProps:q}=Le({autoFocus:f}),{isHovered:U,hoverProps:i}=ze({isDisabled:v}),{pressed:$,pressProps:M}=Ve({disabled:v}),D=C===g.Open,J=ce({open:D,active:$||D,disabled:v,hover:U,focus:ie,autofocus:f}),T=lt(t,s),X=c?be({ref:se,type:T,onKeyDown:V,onClick:Z,disabled:v||void 0,autoFocus:f},q,i,M):be({ref:oe,id:k,type:T,"aria-expanded":C===g.Open,"aria-controls":P?E:void 0,disabled:v||void 0,autoFocus:f,onKeyDown:V,onKeyUp:K,onClick:Z,onMouseDown:de},q,i,M),ue=Ee(),fe=j(()=>{if(!ke(a.state.panel))return;let o=a.state.panel;function m(){ee(ue.current,{[L.Forwards]:()=>Q(o,z.First),[L.Backwards]:()=>Q(o,z.Last)})===Pe.Error&&Q(je(we(a.state.button)).filter(S=>S.dataset.headlessuiFocusGuard!=="true"),ee(ue.current,{[L.Forwards]:z.Next,[L.Backwards]:z.Previous}),{relativeTo:a.state.button})}m()}),u=me();return N.createElement(N.Fragment,null,u({ourProps:X,theirProps:d,slot:J,defaultTag:Ft,name:"Popover.Button"}),D&&!c&&w&&N.createElement(ye,{id:h,ref:A,features:Ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:fe}))}let At="div",Mt=xe.RenderStrategy|xe.Static;function Ke(t,n){let r=l.useId(),{id:x=`headlessui-popover-backdrop-${r}`,transition:v=!1,...f}=t,d=he("Popover.Backdrop"),a=te(d,l.useCallback(b=>b.popoverState,[])),[C,w]=l.useState(null),s=re(n,w),k=Me(),[P,E]=Oe(v,C,k!==null?(k&ae.Open)===ae.Open:a===g.Open),A=j(b=>{if(Te(b.currentTarget))return b.preventDefault();d.actions.close()}),p=ce({open:a===g.Open}),h={ref:s,id:x,"aria-hidden":!0,onClick:A,...Re(E)};return me()({ourProps:h,theirProps:f,slot:p,defaultTag:At,features:Mt,visible:P,name:"Popover.Backdrop"})}let Ot="div",Rt=xe.RenderStrategy|xe.Static;function Dt(t,n){let r=l.useId(),{id:x=`headlessui-popover-panel-${r}`,focus:v=!1,anchor:f,portal:d=!1,modal:a=!1,transition:C=!1,...w}=t,s=he("Popover.Panel"),k=te(s,s.selectors.isPortalled),[P,E,A,p,h]=te(s,l.useCallback(u=>[u.popoverState,u.button,u.__demoMode,u.beforePanelSentinel,u.afterPanelSentinel],[])),b=`headlessui-focus-sentinel-before-${r}`,y=`headlessui-focus-sentinel-after-${r}`,c=l.useRef(null),B=Ye(f),[oe,se]=Qe(B),V=Ze();B&&(d=!0);let[K,Z]=l.useState(null),de=re(c,n,B?oe:null,s.actions.setPanel,Z),ie=Ie(E),q=Ie(c.current);Je(()=>(s.actions.setPanelId(x),()=>s.actions.setPanelId(null)),[x,s]);let U=Me(),[i,$]=Oe(C,K,U!==null?(U&ae.Open)===ae.Open:P===g.Open);at(i,E,s.actions.close),nt(A?!1:a&&i,q);let M=j(u=>{var o;switch(u.key){case Y.Escape:if(s.state.popoverState!==g.Open||!c.current)return;let m=le(c.current);if(m&&!c.current.contains(m))return;u.preventDefault(),u.stopPropagation(),s.actions.close(),(o=s.state.button)==null||o.focus();break}});l.useEffect(()=>{var u;t.static||P===g.Closed&&((u=t.unmount)==null||u)&&s.actions.setPanel(null)},[P,t.unmount,t.static,s]),l.useEffect(()=>{if(A||!v||P!==g.Open||!c.current)return;let u=le(c.current);c.current.contains(u)||Q(c.current,z.First)},[A,v,c.current,P]);let D=ce({open:P===g.Open,close:s.actions.refocusableClose}),J=be(B?V():{},{ref:de,id:x,onKeyDown:M,onBlur:v&&P===g.Open?u=>{var o,m,S,R,W;let H=u.relatedTarget;H&&c.current&&((o=c.current)!=null&&o.contains(H)||(s.actions.close(),((S=(m=p.current)==null?void 0:m.contains)!=null&&S.call(m,H)||(W=(R=h.current)==null?void 0:R.contains)!=null&&W.call(R,H))&&H.focus({preventScroll:!0})))}:void 0,tabIndex:-1,style:{...w.style,...se,"--button-width":qe(i,E,!0).width},...Re($)}),T=Ee(),X=j(()=>{let u=c.current;if(!u)return;function o(){ee(T.current,{[L.Forwards]:()=>{var m;Q(u,z.First)===Pe.Error&&((m=s.state.afterPanelSentinel.current)==null||m.focus())},[L.Backwards]:()=>{var m;(m=s.state.button)==null||m.focus({preventScroll:!0})}})}o()}),ue=j(()=>{let u=c.current;if(!u)return;function o(){ee(T.current,{[L.Forwards]:()=>{var m;if(!s.state.button)return;let S=(m=we(s.state.button))!=null?m:document.body,R=je(S),W=R.indexOf(s.state.button),H=R.slice(0,W+1),pe=[...R.slice(W+1),...H];for(let ge of pe.slice())if(ge.dataset.headlessuiFocusGuard==="true"||K!=null&&K.contains(ge)){let $e=pe.indexOf(ge);$e!==-1&&pe.splice($e,1)}Q(pe,z.First,{sorted:!1})},[L.Backwards]:()=>{var m;Q(u,z.Previous)===Pe.Error&&((m=s.state.button)==null||m.focus())}})}o()}),fe=me();return N.createElement(pt,null,N.createElement(ve.Provider,{value:x},N.createElement(De,{value:s.actions.refocusableClose},N.createElement(ot,{enabled:d?t.static||i:!1,ownerDocument:ie},i&&k&&N.createElement(ye,{id:b,ref:p,features:Ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:X}),fe({ourProps:J,theirProps:w,slot:D,defaultTag:Ot,features:Rt,visible:i,name:"Popover.Panel"}),i&&k&&N.createElement(ye,{id:y,ref:h,features:Ne.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:ue})))))}let Tt="div";function _t(t,n){let r=l.useRef(null),x=re(r,n),[v,f]=l.useState([]),d=j(p=>{f(h=>{let b=h.indexOf(p);if(b!==-1){let y=h.slice();return y.splice(b,1),y}return h})}),a=j(p=>(f(h=>[...h,p]),()=>d(p))),C=j(()=>{var p;let h=we(r.current);if(!h)return!1;let b=le(r.current);return(p=r.current)!=null&&p.contains(b)?!0:v.some(y=>{var c,B;return((c=h.getElementById(y.buttonId.current))==null?void 0:c.contains(b))||((B=h.getElementById(y.panelId.current))==null?void 0:B.contains(b))})}),w=j(p=>{for(let h of v)h.buttonId.current!==p&&h.close()}),s=l.useMemo(()=>({registerPopover:a,unregisterPopover:d,isFocusWithinPopoverGroup:C,closeOthers:w}),[a,d,C,w]),k=ce({}),P=t,E={ref:x},A=me();return N.createElement(Ae,null,N.createElement(Be.Provider,{value:s},A({ourProps:E,theirProps:P,slot:k,defaultTag:Tt,name:"Popover.Group"})))}let Gt=ne(It),I=ne(Et),Kt=ne(Ke),We=ne(Ke),F=ne(Dt),Wt=ne(_t),O=Object.assign(Gt,{Button:I,Backdrop:We,Overlay:Kt,Panel:F,Group:Wt});const Lt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full",children:[e.jsx("div",{className:"text-sm font-semibold text-ld",children:"Products"}),e.jsxs(O,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Solutions"}),e.jsxs(F,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsx("div",{className:"text-sm font-semibold text-ld",children:"Pricing"})]})})})}),zt=`import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";\r
\r
\r
const BasicPopoverCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex w-full">\r
          <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">\r
            <div className="text-sm font-semibold text-ld">Products</div>\r
            <Popover>\r
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
                Solutions\r
              </PopoverButton>\r
              <PopoverPanel\r
                transition\r
                anchor="bottom"\r
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
              >\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted"\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Insights</p>\r
                    <p className="text-bodytext text-sm">\r
                      Measure actions your users take\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Automations</p>\r
                    <p className="text-bodytext text-sm">\r
                      Create your own targeted content\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Reports</p>\r
                    <p className="text-bodytext text-sm">\r
                      Keep track of your growth\r
                    </p>\r
                  </a>\r
                </div>\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">\r
                      Documentation\r
                    </p>\r
                    <p className="text-bodytext text-sm">\r
                      Start integrating products and tools\r
                    </p>\r
                  </a>\r
                </div>\r
              </PopoverPanel>\r
            </Popover>\r
            <div className="text-sm font-semibold text-ld">Pricing</div>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicPopoverCode\r
`,Vt=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Popover"}),e.jsx(Lt,{})]}),e.jsx(G,{children:zt})]})})}),Ht=({children:t})=>e.jsx("a",{className:"ui-dropdown-item",href:"/samplepage",children:t}),Yt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(O,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Open Popover"}),e.jsx(F,{anchor:"bottom",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:e.jsx(bt,{as:Ht,children:"Insights"})})]})})})}),Qt=`import {\r
  CloseButton,\r
  Popover,\r
  PopoverButton,\r
  PopoverPanel,\r
} from "@headlessui/react";\r
import MyLink from "../MyLink";\r
\r
const ClosingManuallyCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">\r
          <Popover>\r
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
              Open Popover\r
            </PopoverButton>\r
            <PopoverPanel\r
              anchor="bottom"\r
              className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
            >\r
              <CloseButton as={MyLink}>Insights</CloseButton>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ClosingManuallyCode\r
`,Zt=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Popovers Manually"}),e.jsx(Yt,{})]}),e.jsx(G,{children:Qt})]})})}),qt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsx(O,{children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Framer Motion"}),e.jsx(yt,{children:t&&e.jsxs(F,{static:!0,as:Nt.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},anchor:"bottom",className:"flex origin-top flex-col w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})})}),Ut=`import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";\r
import { AnimatePresence, motion } from "framer-motion";\r
\r
\r
const FramerPopoverCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">\r
          <Popover>\r
            {({ open }) => (\r
              <>\r
                <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
                  Framer Motion\r
                </PopoverButton>\r
                <AnimatePresence>\r
                  {open && (\r
                    <PopoverPanel\r
                      static\r
                      as={motion.div}\r
                      initial={{ opacity: 0, scale: 0.95 }}\r
                      animate={{ opacity: 1, scale: 1 }}\r
                      exit={{ opacity: 0, scale: 0.95 }}\r
                      anchor="bottom"\r
                      className="flex origin-top flex-col w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md"\r
                    >\r
                      <a href="/analytics" className="ui-dropdown-item">\r
                        Analytics\r
                      </a>\r
                      <a href="/engagement" className="ui-dropdown-item">\r
                        Engagement\r
                      </a>\r
                      <a href="/security" className="ui-dropdown-item">\r
                        Security\r
                      </a>\r
                      <a href="/integrations" className="ui-dropdown-item">\r
                        Integrations\r
                      </a>\r
                    </PopoverPanel>\r
                  )}\r
                </AnimatePresence>\r
              </>\r
            )}\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default FramerPopoverCode\r
`,Jt=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion Popover"}),e.jsx(qt,{})]}),e.jsx(G,{children:Ut})]})})}),Xt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full",children:[e.jsxs(O,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Products"}),e.jsxs(F,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsxs(O,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Solutions"}),e.jsxs(F,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]}),e.jsxs(O,{children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Pricing"}),e.jsxs(F,{transition:!0,anchor:"bottom",className:"divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:[e.jsxs("div",{className:"p-3",children:[e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Insights"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Measure actions your users take"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Automations"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Create your own targeted content"})]}),e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Reports"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Keep track of your growth"})]})]}),e.jsx("div",{className:"p-3",children:e.jsxs("a",{className:"block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted ",href:"#",children:[e.jsx("p",{className:"text-sm font-semibold text-ld",children:"Documentation"}),e.jsx("p",{className:"text-bodytext text-sm",children:"Start integrating products and tools"})]})})]})]})]})})})}),er=`import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";\r
\r
\r
const GroupingPopoverCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex w-full">\r
          <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full">\r
            <Popover>\r
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
                Products\r
              </PopoverButton>\r
              <PopoverPanel\r
                transition\r
                anchor="bottom"\r
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
              >\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted"\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Insights</p>\r
                    <p className="text-bodytext text-sm">\r
                      Measure actions your users take\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Automations</p>\r
                    <p className="text-bodytext text-sm">\r
                      Create your own targeted content\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Reports</p>\r
                    <p className="text-bodytext text-sm">\r
                      Keep track of your growth\r
                    </p>\r
                  </a>\r
                </div>\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">\r
                      Documentation\r
                    </p>\r
                    <p className="text-bodytext text-sm">\r
                      Start integrating products and tools\r
                    </p>\r
                  </a>\r
                </div>\r
              </PopoverPanel>\r
            </Popover>\r
            <Popover>\r
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
                Solutions\r
              </PopoverButton>\r
              <PopoverPanel\r
                transition\r
                anchor="bottom"\r
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
              >\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted"\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Insights</p>\r
                    <p className="text-bodytext text-sm">\r
                      Measure actions your users take\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Automations</p>\r
                    <p className="text-bodytext text-sm">\r
                      Create your own targeted content\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Reports</p>\r
                    <p className="text-bodytext text-sm">\r
                      Keep track of your growth\r
                    </p>\r
                  </a>\r
                </div>\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">\r
                      Documentation\r
                    </p>\r
                    <p className="text-bodytext text-sm">\r
                      Start integrating products and tools\r
                    </p>\r
                  </a>\r
                </div>\r
              </PopoverPanel>\r
            </Popover>\r
            <Popover>\r
              <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
                Pricing\r
              </PopoverButton>\r
              <PopoverPanel\r
                transition\r
                anchor="bottom"\r
                className="divide-y divide-border dark:divide-darkborder rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
              >\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted"\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Insights</p>\r
                    <p className="text-bodytext text-sm">\r
                      Measure actions your users take\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Automations</p>\r
                    <p className="text-bodytext text-sm">\r
                      Create your own targeted content\r
                    </p>\r
                  </a>\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">Reports</p>\r
                    <p className="text-bodytext text-sm">\r
                      Keep track of your growth\r
                    </p>\r
                  </a>\r
                </div>\r
                <div className="p-3">\r
                  <a\r
                    className="block rounded-sm py-2 px-3 transition hover:bg-lightgray dark:hover:bg-darkmuted "\r
                    href="#"\r
                  >\r
                    <p className="text-sm font-semibold text-ld">\r
                      Documentation\r
                    </p>\r
                    <p className="text-bodytext text-sm">\r
                      Start integrating products and tools\r
                    </p>\r
                  </a>\r
                </div>\r
              </PopoverPanel>\r
            </Popover>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default GroupingPopoverCode\r
`,tr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Grouping Related Popover"}),e.jsx(Xt,{})]}),e.jsx(G,{children:er})]})})}),rr=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(O,{className:"relative ",children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Open Popover"}),e.jsx(We,{className:"fixed inset-0 bg-black/15 z-50"}),e.jsx(F,{transition:!0,anchor:"bottom",className:"w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})}),ar=`import {\r
  Popover,\r
  PopoverButton,\r
  PopoverPanel,\r
  PopoverBackdrop,\r
} from "@headlessui/react";\r
\r
\r
const PopoverBgDropcode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">\r
          <Popover className="relative ">\r
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
              Open Popover\r
            </PopoverButton>\r
            <PopoverBackdrop className="fixed inset-0 bg-black/15 z-50" />\r
            <PopoverPanel\r
              transition\r
              anchor="bottom"\r
              className="w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
            >\r
              <div className="flex flex-col gap-1">\r
                <a href="/analytics" className="ui-dropdown-item">\r
                  Analytics\r
                </a>\r
                <a href="/engagement" className="ui-dropdown-item">\r
                  Engagement\r
                </a>\r
                <a href="/security" className="ui-dropdown-item">\r
                  Security\r
                </a>\r
                <a href="/integrations" className="ui-dropdown-item">\r
                  Integrations\r
                </a>\r
              </div>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default PopoverBgDropcode\r
`,nr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Backdrop"}),e.jsx(rr,{})]}),e.jsx(G,{children:ar})]})})}),or=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(O,{className:"relative flex justify-center",children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Top Popover"}),e.jsx(F,{transition:!0,anchor:"top start",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})}),sr=`import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";\r
\r
\r
const PopoverPositionCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">\r
          <Popover className="relative flex justify-center">\r
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
              Top Popover\r
            </PopoverButton>\r
            <PopoverPanel\r
              transition\r
              anchor="top start"\r
              className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
            >\r
              <div className="flex flex-col gap-1">\r
                <a href="/analytics" className="ui-dropdown-item">\r
                  Analytics\r
                </a>\r
                <a href="/engagement" className="ui-dropdown-item">\r
                  Engagement\r
                </a>\r
                <a href="/security" className="ui-dropdown-item">\r
                  Security\r
                </a>\r
                <a href="/integrations" className="ui-dropdown-item">\r
                  Integrations\r
                </a>\r
              </div>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default PopoverPositionCode\r
`,dr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Positioning"}),e.jsx(or,{})]}),e.jsx(G,{children:sr})]})})}),ir=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center",children:e.jsxs(O,{className:"relative ",children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Open Popover"}),e.jsx(F,{transition:!0,anchor:"bottom",className:"w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})}),lr=`import { PopoverButton, PopoverPanel, Popover } from "@headlessui/react";\r
\r
\r
const PopoverTransitionCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">\r
          <Popover className="relative ">\r
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">\r
              Open Popover\r
            </PopoverButton>\r
            <PopoverPanel\r
              transition\r
              anchor="bottom"\r
              className="w-52 z-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0"\r
            >\r
              <div className="flex flex-col gap-1">\r
                <a href="/analytics" className="ui-dropdown-item">\r
                  Analytics\r
                </a>\r
                <a href="/engagement" className="ui-dropdown-item">\r
                  Engagement\r
                </a>\r
                <a href="/security" className="ui-dropdown-item">\r
                  Security\r
                </a>\r
                <a href="/integrations" className="ui-dropdown-item">\r
                  Integrations\r
                </a>\r
              </div>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default PopoverTransitionCode\r
`,cr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Transitions"}),e.jsx(ir,{})]}),e.jsx(G,{children:lr})]})})}),mr=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full justify-center",children:e.jsxs(O,{className:"relative ",children:[e.jsx(I,{className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Open Popover"}),e.jsx(F,{transition:!0,anchor:"bottom",className:"w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})}),ur=`import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";\r
\r
\r
const PopoverWidthCode = () => {\r
  return (\r
  <>\r
  <div className="mt-4">\r
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full justify-center">\r
          <Popover className="relative ">\r
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white">Open Popover</PopoverButton>\r
            <PopoverPanel\r
            transition\r
              anchor="bottom"\r
              className="w-52 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
            >\r
              <div className="flex flex-col gap-1">\r
                <a href="/analytics" className="ui-dropdown-item">\r
                  Analytics\r
                </a>\r
                <a href="/engagement" className="ui-dropdown-item">\r
                  Engagement\r
                </a>\r
                <a href="/security" className="ui-dropdown-item">\r
                  Security\r
                </a>\r
                <a href="/integrations" className="ui-dropdown-item">\r
                  Integrations\r
                </a>\r
              </div>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
  </div>\r
  </>  )\r
}\r
\r
export default PopoverWidthCode\r
`,pr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Popover Width"}),e.jsx(mr,{})]}),e.jsx(G,{children:ur})]})})}),xr=()=>{let t=l.forwardRef(function(n,r){return e.jsx("button",{className:"...",ref:r,...n})});return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full ",children:e.jsxs(O,{as:"nav",children:[e.jsx(I,{as:t,className:"block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white",children:"Render As Form View"}),e.jsx(F,{as:"form",className:"w-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0",children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("a",{href:"/analytics",className:"ui-dropdown-item",children:"Analytics"}),e.jsx("a",{href:"/engagement",className:"ui-dropdown-item",children:"Engagement"}),e.jsx("a",{href:"/security",className:"ui-dropdown-item",children:"Security"}),e.jsx("a",{href:"/integrations",className:"ui-dropdown-item",children:"Integrations"})]})})]})})})})},hr=`import {\r
  Popover,\r
  PopoverButton,\r
  PopoverPanel,\r
} from "@headlessui/react";\r
import { forwardRef } from "react";\r
\r
\r
const RenderPopoverCode = () => {\r
  let MyCustomButton = forwardRef(function (props: any, ref: any) {\r
  return <button className="..." ref={ref} {...props} />;\r
});\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full ">\r
          <Popover as="nav">\r
            <PopoverButton\r
              as={MyCustomButton}\r
              className="block text-sm font-semibold text-ld focus:outline-hidden data-active:text-primary data-hover:text-primary data-focus:outline-1 data-focus:outline-white"\r
            >\r
              Render As Form View\r
            </PopoverButton>\r
            <PopoverPanel\r
              as="form"\r
              className="w-60 py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-closed:-translate-y-1 data-closed:opacity-0"\r
            >\r
              <div className="flex flex-col gap-1">\r
                <a href="/analytics" className="ui-dropdown-item">\r
                  Analytics\r
                </a>\r
                <a href="/engagement" className="ui-dropdown-item">\r
                  Engagement\r
                </a>\r
                <a href="/security" className="ui-dropdown-item">\r
                  Security\r
                </a>\r
                <a href="/integrations" className="ui-dropdown-item">\r
                  Integrations\r
                </a>\r
              </div>\r
            </PopoverPanel>\r
          </Popover>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default RenderPopoverCode;\r
`,vr=()=>e.jsx("div",{children:e.jsx(_,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6 max-w-sm",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering Different Elements"}),e.jsx(xr,{})]}),e.jsx(G,{children:hr})]})})}),fr=[{to:"/",title:"Home"},{title:"Popover"}],ra=()=>e.jsxs(e.Fragment,{children:[e.jsx(kt,{title:"Popover",items:fr}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Vt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(tr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(pr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(dr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(nr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(cr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Jt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Zt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(vr,{})})]})]});export{ra as default};
