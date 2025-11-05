import{r as o,R as u,j as e}from"./index-n5lagw8Y.js";import{C as B}from"./CodeDialog-BcgW2Qgx.js";import{o as Pe}from"./keyboard-C1Wiwm26.js";import{E as fe}from"./use-event-listener-BvgRGIId.js";import{I as _,u as xe,c as Se,e as Ae,x as Be,S as Re,k as ze,f as Me,p as We,l as se,t as Ye,X as Le}from"./portal-Cdyr5OxY.js";import{n as ge,Y as I,o as O,u as X,p as Ge,K as R,t as be,a as G,A as le}from"./render-D9E-06xR.js";import{y as Ke}from"./use-inert-others-0-7KICMh.js";import{u as He,a as W,j as oe,x as Ve,S as Ue}from"./use-tab-direction-CaXwQaRe.js";import{l as he,O as ve,K as qe}from"./transition-DogChs_E.js";import{y as K}from"./use-sync-refs-CefhOWeT.js";import{C as Qe}from"./close-provider-C5BPq0tm.js";import{u as ye,i as Y,s as Xe}from"./open-closed-0N_3BWp3.js";import{M as H,H as _e}from"./description-CMFfDl8O.js";import{f as Ne}from"./use-is-mounted-Bfvr3D71.js";import{m as J,n as Q}from"./active-element-history-Bq8mrfFr.js";import{f as ie,s as ce}from"./hidden-C2xwWGhP.js";import{n as L,i as ue,t as Je}from"./dom-BlW_0b_t.js";import{v as A,T as N,w as v,A as de}from"./focus-management-Ds-lPg9b.js";import{d as Ze}from"./owner-CneWfzVc.js";import{C as z}from"./CardBox-DP5V6wyZ.js";import{A as et,m as me}from"./proxy-D5zimsvB.js";import{B as tt}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./with-selector-uup4H7fL.js";import"./disabled-CIuDn_DF.js";import"./chevron-right-icon-BGQVsHY5.js";function nt(t,n=typeof document<"u"?document.defaultView:null,r){let a=_(t,"escape");fe(n,"keydown",s=>{a&&(s.defaultPrevented||s.key===Pe.Escape&&r(s))})}function rt(){var t;let[n]=o.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia("(pointer: coarse)"):null),[r,a]=o.useState((t=n?.matches)!=null?t:!1);return ge(()=>{if(!n)return;function s(i){a(i.matches)}return n.addEventListener("change",s),()=>n.removeEventListener("change",s)},[n]),r}function we(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let r of t.current)Je(r.current)&&n.add(r.current);return n}let at="div";var C=(t=>(t[t.None=0]="None",t[t.InitialFocus=1]="InitialFocus",t[t.TabLock=2]="TabLock",t[t.FocusLock=4]="FocusLock",t[t.RestoreFocus=8]="RestoreFocus",t[t.AutoFocus=16]="AutoFocus",t))(C||{});function st(t,n){let r=o.useRef(null),a=K(r,n),{initialFocus:s,initialFocusFallback:i,containers:d,features:l=15,...m}=t;he()||(l=0);let c=xe(r.current);ct(l,{ownerDocument:c});let f=ut(l,{ownerDocument:c,container:r,initialFocus:s,initialFocusFallback:i});dt(l,{ownerDocument:c,container:r,containers:d,previousActiveElement:f});let T=He(),w=O(x=>{if(!L(r.current))return;let k=r.current;(g=>g())(()=>{X(T.current,{[W.Forwards]:()=>{A(k,N.First,{skipElements:[x.relatedTarget,i]})},[W.Backwards]:()=>{A(k,N.Last,{skipElements:[x.relatedTarget,i]})}})})}),h=_(!!(l&2),"focus-trap#tab-lock"),b=Ge(),j=o.useRef(!1),D={ref:a,onKeyDown(x){x.key=="Tab"&&(j.current=!0,b.requestAnimationFrame(()=>{j.current=!1}))},onBlur(x){if(!(l&4))return;let k=we(d);L(r.current)&&k.add(r.current);let g=x.relatedTarget;ue(g)&&g.dataset.headlessuiFocusGuard!=="true"&&(je(k,g)||(j.current?A(r.current,X(T.current,{[W.Forwards]:()=>N.Next,[W.Backwards]:()=>N.Previous})|N.WrapAround,{relativeTo:x.target}):ue(x.target)&&v(x.target)))}},y=R();return u.createElement(u.Fragment,null,h&&u.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:w,features:ce.Focusable}),y({ourProps:D,theirProps:m,defaultTag:at,name:"FocusTrap"}),h&&u.createElement(ie,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:w,features:ce.Focusable}))}let lt=I(st),ot=Object.assign(lt,{features:C});function it(t=!0){let n=o.useRef(Q.slice());return J(([r],[a])=>{a===!0&&r===!1&&be(()=>{n.current.splice(0)}),a===!1&&r===!0&&(n.current=Q.slice())},[t,Q,n]),O(()=>{var r;return(r=n.current.find(a=>a!=null&&a.isConnected))!=null?r:null})}function ct(t,{ownerDocument:n}){let r=!!(t&8),a=it(r);J(()=>{r||Ze(n?.body)&&v(a())},[r]),Se(()=>{r&&v(a())})}function ut(t,{ownerDocument:n,container:r,initialFocus:a,initialFocusFallback:s}){let i=o.useRef(null),d=_(!!(t&1),"focus-trap#initial-focus"),l=Ne();return J(()=>{if(t===0)return;if(!d){s!=null&&s.current&&v(s.current);return}let m=r.current;m&&be(()=>{if(!l.current)return;let c=n?.activeElement;if(a!=null&&a.current){if(a?.current===c){i.current=c;return}}else if(m.contains(c)){i.current=c;return}if(a!=null&&a.current)v(a.current);else{if(t&16){if(A(m,N.First|N.AutoFocus)!==de.Error)return}else if(A(m,N.First)!==de.Error)return;if(s!=null&&s.current&&(v(s.current),n?.activeElement===s.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=n?.activeElement})},[s,d,t]),i}function dt(t,{ownerDocument:n,container:r,containers:a,previousActiveElement:s}){let i=Ne(),d=!!(t&4);fe(n?.defaultView,"focus",l=>{if(!d||!i.current)return;let m=we(a);L(r.current)&&m.add(r.current);let c=s.current;if(!c)return;let f=l.target;L(f)?je(m,f)?(s.current=f,v(f)):(l.preventDefault(),l.stopPropagation(),v(c)):v(s.current)},!0)}function je(t,n){for(let r of t)if(r.contains(n))return!0;return!1}var mt=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(mt||{}),pt=(t=>(t[t.SetTitleId=0]="SetTitleId",t))(pt||{});let ft={0(t,n){return t.titleId===n.id?t:{...t,titleId:n.id}}},Z=o.createContext(null);Z.displayName="DialogContext";function V(t){let n=o.useContext(Z);if(n===null){let r=new Error(`<${t} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,V),r}return n}function xt(t,n){return X(n.type,ft,t,n)}let pe=I(function(t,n){let r=o.useId(),{id:a=`headlessui-dialog-${r}`,open:s,onClose:i,initialFocus:d,role:l="dialog",autoFocus:m=!0,__demoMode:c=!1,unmount:f=!1,...T}=t,w=o.useRef(!1);l=(function(){return l==="dialog"||l==="alertdialog"?l:(w.current||(w.current=!0,console.warn(`Invalid role [${l}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")})();let h=ye();s===void 0&&h!==null&&(s=(h&Y.Open)===Y.Open);let b=o.useRef(null),j=K(b,n),D=xe(b.current),y=s?0:1,[x,k]=o.useReducer(xt,{titleId:null,descriptionId:null,panelRef:o.createRef()}),g=O(()=>i(!1)),ee=O(p=>k({type:0,id:p})),F=he()?y===0:!1,[De,ke]=Ae(),Ce={get current(){var p;return(p=x.panelRef.current)!=null?p:b.current}},U=Ve(),{resolveContainers:q}=Ue({mainTreeNode:U,portals:De,defaultContainers:[Ce]}),te=h!==null?(h&Y.Closing)===Y.Closing:!1;Ke(c||te?!1:F,{allowed:O(()=>{var p,ae;return[(ae=(p=b.current)==null?void 0:p.closest("[data-headlessui-portal]"))!=null?ae:null]}),disallowed:O(()=>{var p;return[(p=U?.closest("body > *:not(#headlessui-portal-root)"))!=null?p:null]})});let E=Be.get(null);ge(()=>{if(F)return E.actions.push(a),()=>E.actions.pop(a)},[E,a,F]);let ne=Re(E,o.useCallback(p=>E.selectors.isTop(p,a),[E,a]));ze(ne,q,p=>{p.preventDefault(),g()}),nt(ne,D?.defaultView,p=>{p.preventDefault(),p.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur(),g()}),Me(c||te?!1:F,D,q),We(F,b,g);let[Oe,Te]=_e(),Fe=o.useMemo(()=>[{dialogState:y,close:g,setTitleId:ee,unmount:f},x],[y,g,ee,f,x]),re=G({open:y===0}),Ee={ref:j,id:a,role:l,tabIndex:-1,"aria-modal":c?void 0:y===0?!0:void 0,"aria-labelledby":x.titleId,"aria-describedby":Oe,unmount:f},Ie=!rt(),S=C.None;F&&!c&&(S|=C.RestoreFocus,S|=C.TabLock,m&&(S|=C.AutoFocus),Ie&&(S|=C.InitialFocus));let $e=R();return u.createElement(Xe,null,u.createElement(se,{force:!0},u.createElement(Ye,null,u.createElement(Z.Provider,{value:Fe},u.createElement(Le,{target:b},u.createElement(se,{force:!1},u.createElement(Te,{slot:re},u.createElement(ke,null,u.createElement(ot,{initialFocus:d,initialFocusFallback:b,containers:q,features:S},u.createElement(Qe,{value:g},$e({ourProps:Ee,theirProps:T,slot:re,defaultTag:gt,features:bt,visible:y===0,name:"Dialog"})))))))))))}),gt="div",bt=le.RenderStrategy|le.Static;function ht(t,n){let{transition:r=!1,open:a,...s}=t,i=ye(),d=t.hasOwnProperty("open")||i!==null,l=t.hasOwnProperty("onClose");if(!d&&!l)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!d)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!l)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(!i&&typeof t.open!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t.open}`);if(typeof t.onClose!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${t.onClose}`);return(a!==void 0||r)&&!s.static?u.createElement(oe,null,u.createElement(qe,{show:a,transition:r,unmount:s.unmount},u.createElement(pe,{ref:n,...s}))):u.createElement(oe,null,u.createElement(pe,{ref:n,open:a,...s}))}let vt="div";function yt(t,n){let r=o.useId(),{id:a=`headlessui-dialog-panel-${r}`,transition:s=!1,...i}=t,[{dialogState:d,unmount:l},m]=V("Dialog.Panel"),c=K(n,m.panelRef),f=G({open:d===0}),T=O(D=>{D.stopPropagation()}),w={ref:c,id:a,onClick:T},h=s?ve:o.Fragment,b=s?{unmount:l}:{},j=R();return u.createElement(h,{...b},j({ourProps:w,theirProps:i,slot:f,defaultTag:vt,name:"Dialog.Panel"}))}let Nt="div";function wt(t,n){let{transition:r=!1,...a}=t,[{dialogState:s,unmount:i}]=V("Dialog.Backdrop"),d=G({open:s===0}),l={ref:n,"aria-hidden":!0},m=r?ve:o.Fragment,c=r?{unmount:i}:{},f=R();return u.createElement(m,{...c},f({ourProps:l,theirProps:a,slot:d,defaultTag:Nt,name:"Dialog.Backdrop"}))}let jt="h2";function Dt(t,n){let r=o.useId(),{id:a=`headlessui-dialog-title-${r}`,...s}=t,[{dialogState:i,setTitleId:d}]=V("Dialog.Title"),l=K(n);o.useEffect(()=>(d(a),()=>d(null)),[a,d]);let m=G({open:i===0}),c={ref:l,id:a};return R()({ourProps:c,theirProps:s,slot:m,defaultTag:jt,name:"Dialog.Title"})}let kt=I(ht),$=I(yt),Ct=I(wt),P=I(Dt),M=Object.assign(kt,{Panel:$,Title:P,Description:H});const Ot=()=>{let[t,n]=o.useState(!1);function r(){n(!0)}function a(){n(!1)}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:r,className:"ui-button bg-primary justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,as:"div",className:"relative z-10 focus:outline-hidden",onClose:a,children:e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsxs($,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0",children:[e.jsx(P,{as:"h3",className:"text-lg font-semibold text-ld",children:"Payment successful"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}),e.jsxs("div",{className:"mt-4 flex gap-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:a,children:"Got it, thanks!"}),e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small bg-error px-6",children:"Cancel"})]})]})})})})]})})},Tt=`import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";\r
import { useState } from "react";\r
\r
const BasicDialodCode = () => {\r
   let [isOpen, setIsOpen] = useState(false);\r
  \r
    function open() {\r
      setIsOpen(true);\r
    }\r
  \r
    function close() {\r
      setIsOpen(false);\r
    }\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button onClick={open} className="ui-button bg-primary justify-center">\r
                Open Dialog\r
              </button>\r
\r
      <Dialog\r
          open={isOpen}\r
          as="div"\r
          className="relative z-10 focus:outline-hidden"\r
          onClose={close}\r
        >\r
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">\r
            <div className="flex min-h-full items-center justify-center p-4">\r
              <DialogPanel\r
                transition\r
                className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"\r
              >\r
                <DialogTitle as="h3" className="text-lg font-semibold text-ld">\r
                  Payment successful\r
                </DialogTitle>\r
                <p className="mt-2 text-sm text-bodytext">\r
                  Your payment has been successfully submitted. We’ve sent you\r
                  an email with all of the details of your order.\r
                </p>\r
                <div className="mt-4 flex gap-3">\r
                  <button\r
                    className="ui-button-small px-6 bg-info"\r
                    onClick={close}\r
                  >\r
                    Got it, thanks!\r
                  </button>\r
                  <button\r
                    onClick={() => setIsOpen(false)}\r
                    className="ui-button-small bg-error px-6"\r
                  >\r
                    Cancel\r
                  </button>\r
                </div>\r
              </DialogPanel>\r
            </div>\r
          </div>\r
        </Dialog>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default BasicDialodCode;\r
`,Ft=()=>e.jsx("div",{children:e.jsx(z,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dialog"}),e.jsx(Ot,{})]}),e.jsx(B,{children:Tt})]})})}),Et=()=>{let[t,n]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:()=>n(!0),className:"ui-button bg-secondary justify-center",children:"Open Dialog"}),e.jsxs(M,{open:t,onClose:()=>n(!1),className:"relative z-50",children:[e.jsx(Ct,{className:"fixed inset-0 bg-black/30"}),e.jsx("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:e.jsxs($,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0",children:[e.jsx(P,{className:"text-lg font-semibold text-ld",children:"Deactivate account"}),e.jsx(H,{className:"mt-2 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small bg-error",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small bg-warning",children:"Deactivate"})]})]})})]})]})})},It=`import {\r
  Description,\r
  Dialog,\r
  DialogBackdrop,\r
  DialogPanel,\r
  DialogTitle,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const WithBackdropCode = () => {\r
  let [isOpen, setIsOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button onClick={() => setIsOpen(true)} className="ui-button bg-secondary justify-center">Open Dialog</button>\r
        <Dialog\r
          open={isOpen}\r
          onClose={() => setIsOpen(false)}\r
          className="relative z-50"\r
        >\r
          {/* The backdrop, rendered as a fixed sibling to the panel container */}\r
          <DialogBackdrop className="fixed inset-0 bg-black/30" />\r
\r
          {/* Full-screen container to center the panel */}\r
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">\r
            {/* The actual dialog panel  */}\r
            <DialogPanel\r
              transition\r
              className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"\r
            >\r
              <DialogTitle className="text-lg font-semibold text-ld">\r
                Deactivate account\r
              </DialogTitle>\r
              <Description className="mt-2 text-sm text-bodytext">\r
                This will permanently deactivate your account\r
              </Description>\r
              <p className="mt-2 text-sm text-bodytext">\r
                Are you sure you want to deactivate your account? All of your\r
                data will be permanently removed.\r
              </p>\r
              <div className="flex gap-3 mt-4">\r
                <button\r
                  onClick={() => setIsOpen(false)}\r
                  className="ui-button-small bg-error"\r
                >\r
                  Cancel\r
                </button>\r
                <button\r
                  onClick={() => setIsOpen(false)}\r
                  className="ui-button-small bg-warning"\r
                >\r
                  Deactivate\r
                </button>\r
              </div>\r
            </DialogPanel>\r
          </div>\r
        </Dialog>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default WithBackdropCode;\r
`,$t=()=>e.jsx("div",{children:e.jsx(z,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dialog With Backdrop"}),e.jsx(Et,{})]}),e.jsx(B,{children:It})]})})}),Pt=()=>{let[t,n]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:()=>n(!0),className:"ui-button bg-warning justify-center",children:"Open dialog"}),e.jsx(et,{children:t&&e.jsxs(M,{static:!0,open:t,onClose:()=>n(!1),className:"relative z-50",children:[e.jsx(me.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 bg-black/30"}),e.jsx("div",{className:"fixed inset-0 flex w-screen items-center justify-center p-4",children:e.jsxs($,{as:me.div,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md",children:[e.jsx(P,{className:"text-lg font-semibold text-ld",children:"Framer Motion Dialog"}),e.jsx(H,{className:"mt-2 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-5",children:[e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small px-6 bg-error",children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small px-6 bg-warning",children:"Deactivate"})]})]})})]})})]})})},St=`import {\r
  Description,\r
  Dialog,\r
  DialogPanel,\r
  DialogTitle,\r
} from "@headlessui/react";\r
import { AnimatePresence, motion } from "framer-motion";\r
import { useState } from "react";\r
\r
\r
const FramerMotionDialogCode = () => {\r
  let [isOpen, setIsOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button\r
          onClick={() => setIsOpen(true)}\r
          className="ui-button bg-warning justify-center"\r
        >\r
          Open dialog\r
        </button>\r
        <AnimatePresence>\r
          {isOpen && (\r
            <Dialog\r
              static\r
              open={isOpen}\r
              onClose={() => setIsOpen(false)}\r
              className="relative z-50"\r
            >\r
              <motion.div\r
                initial={{ opacity: 0 }}\r
                animate={{ opacity: 1 }}\r
                exit={{ opacity: 0 }}\r
                className="fixed inset-0 bg-black/30"\r
              />\r
              <div className="fixed inset-0 flex w-screen items-center justify-center p-4">\r
                <DialogPanel\r
                  as={motion.div}\r
                  initial={{ opacity: 0, scale: 0.95 }}\r
                  animate={{ opacity: 1, scale: 1 }}\r
                  exit={{ opacity: 0, scale: 0.95 }}\r
                  className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md"\r
                >\r
                  <DialogTitle className="text-lg font-semibold text-ld">\r
                    Framer Motion Dialog\r
                  </DialogTitle>\r
                  <Description className="mt-2 text-sm text-bodytext">\r
                    This will permanently deactivate your account\r
                  </Description>\r
                  <p className="mt-2 text-sm text-bodytext">\r
                    Are you sure you want to deactivate your account? All of\r
                    your data will be permanently removed.\r
                  </p>\r
                  <div className="flex gap-3 mt-5">\r
                    <button\r
                      onClick={() => setIsOpen(false)}\r
                      className="ui-button-small px-6 bg-error"\r
                    >\r
                      Cancel\r
                    </button>\r
                    <button\r
                      onClick={() => setIsOpen(false)}\r
                      className="ui-button-small px-6 bg-warning"\r
                    >\r
                      Deactivate\r
                    </button>\r
                  </div>\r
                </DialogPanel>\r
              </div>\r
            </Dialog>\r
          )}\r
        </AnimatePresence>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default FramerMotionDialogCode;\r
`,At=()=>e.jsx("div",{children:e.jsx(z,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Framer Motion Dialog"}),e.jsx(Pt,{})]}),e.jsx(B,{children:St})]})})}),Bt=()=>{let[t,n]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:()=>n(!0),className:"ui-button bg-success justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,onClose:()=>n(!1),className:"z-50 realtive",children:e.jsx("div",{className:"fixed inset-0 w-screen overflow-y-auto p-4",children:e.jsx("div",{className:"flex min-h-full items-center justify-center",children:e.jsxs($,{className:"max-w-lg space-y-4 rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0",children:[e.jsx(P,{className:"text-lg font-semibold text-ld ",children:"Deactivate account"}),e.jsx(H,{className:"mt-3 text-sm text-bodytext",children:"This will permanently deactivate your account"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Are you sure you want to deactivate your account? All of your data will be permanently removed."}),e.jsxs("div",{className:"flex gap-3 mt-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:()=>n(!1),children:"Cancel"}),e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small bg-error px-6",children:"Deactivate"})]})]})})})})]})})},Rt=`import {\r
  Description,\r
  Dialog,\r
  DialogPanel,\r
  DialogTitle,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const ScrollableDialogCode = () => {\r
  let [isOpen, setIsOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <button\r
          onClick={() => setIsOpen(true)}\r
          className="ui-button bg-success justify-center"\r
        >\r
          Open Dialog\r
        </button>\r
        <Dialog\r
          open={isOpen}\r
          onClose={() => setIsOpen(false)}\r
          className="z-50 realtive"\r
        >\r
          <div className="fixed inset-0 w-screen overflow-y-auto p-4">\r
            <div className="flex min-h-full items-center justify-center">\r
              <DialogPanel className="max-w-lg space-y-4 rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0">\r
                <DialogTitle className="text-lg font-semibold text-ld ">\r
                  Deactivate account\r
                </DialogTitle>\r
                <Description className="mt-3 text-sm text-bodytext">\r
                  This will permanently deactivate your account\r
                </Description>\r
                <p className="mt-2 text-sm text-bodytext">\r
                  Are you sure you want to deactivate your account? All of your\r
                  data will be permanently removed.\r
                </p>\r
                <div className="flex gap-3 mt-3">\r
                  <button\r
                    className="ui-button-small px-6 bg-info"\r
                    onClick={() => setIsOpen(false)}\r
                  >\r
                    Cancel\r
                  </button>\r
                  <button\r
                    onClick={() => setIsOpen(false)}\r
                    className="ui-button-small bg-error px-6"\r
                  >\r
                    Deactivate\r
                  </button>\r
                </div>\r
              </DialogPanel>\r
            </div>\r
          </div>\r
        </Dialog>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ScrollableDialogCode;\r
`,zt=()=>e.jsx("div",{children:e.jsx(z,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Scrollable Dialog"}),e.jsx(Bt,{})]}),e.jsx(B,{children:Rt})]})})}),Mt=()=>{let[t,n]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-4",children:[e.jsx("button",{onClick:()=>n(!0),className:"ui-button bg-error justify-center",children:"Open Dialog"}),e.jsx(M,{open:t,onClose:()=>n(!1),transition:!0,className:"fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0 z-50",children:e.jsx("div",{className:"fixed inset-0 z-50 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:e.jsxs($,{transition:!0,className:"w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md ",children:[e.jsx(P,{as:"h3",className:"text-lg font-semibold text-ld",children:"Transition Dialog"}),e.jsx("p",{className:"mt-2 text-sm text-bodytext",children:"Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."}),e.jsxs("div",{className:"mt-4 flex gap-3",children:[e.jsx("button",{className:"ui-button-small px-6 bg-info",onClick:()=>n(!1),children:"Got it, thanks!"}),e.jsx("button",{onClick:()=>n(!1),className:"ui-button-small bg-error px-6",children:"Cancel"})]})]})})})})]})})},Wt=`import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";\r
import  { useState } from "react";\r
\r
\r
const TransitionDialogCode = () => {\r
   let [isOpen, setIsOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
        <button\r
          onClick={() => setIsOpen(true)}\r
          className="ui-button bg-error justify-center"\r
        >\r
          Open Dialog\r
        </button>\r
\r
        <Dialog\r
          open={isOpen}\r
          onClose={() => setIsOpen(false)}\r
          transition\r
          className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-closed:opacity-0 z-50"\r
        >\r
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto">\r
            <div className="flex min-h-full items-center justify-center p-4">\r
              <DialogPanel\r
                transition\r
                className="w-full max-w-md rounded-lg bg-white dark:bg-darkgray p-6 shadow-md dark:dark-shadow-md "\r
              >\r
                <DialogTitle as="h3" className="text-lg font-semibold text-ld">\r
                  Transition Dialog\r
                </DialogTitle>\r
                <p className="mt-2 text-sm text-bodytext">\r
                  Your payment has been successfully submitted. We’ve sent you\r
                  an email with all of the details of your order.\r
                </p>\r
                <div className="mt-4 flex gap-3">\r
                  <button\r
                    className="ui-button-small px-6 bg-info"\r
                    onClick={() => setIsOpen(false)}\r
                  >\r
                    Got it, thanks!\r
                  </button>\r
                  <button\r
                    onClick={() => setIsOpen(false)}\r
                    className="ui-button-small bg-error px-6"\r
                  >\r
                    Cancel\r
                  </button>\r
                </div>\r
              </DialogPanel>\r
            </div>\r
          </div>\r
        </Dialog>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default TransitionDialogCode;\r
`,Yt=()=>e.jsx("div",{children:e.jsx(z,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Dialog"}),e.jsx(Mt,{})]}),e.jsx(B,{children:Wt})]})})}),Lt=[{to:"/",title:"Home"},{title:"Dialog"}],Cn=()=>e.jsxs(e.Fragment,{children:[e.jsx(tt,{title:"Dialog",items:Lt}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Ft,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx($t,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(zt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Yt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(At,{})})]})]});export{Cn as default};
