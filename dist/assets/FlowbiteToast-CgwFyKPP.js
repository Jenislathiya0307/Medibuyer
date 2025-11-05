import{n as A,r as a,o as N,j as e,p as b}from"./index-n5lagw8Y.js";import{C as c}from"./CardBox-DP5V6wyZ.js";import{A as y,f as E,i as P,B as X}from"./index-B3jNiIug.js";import{u as w,g as d,r as k}from"./resolve-theme-BrLp9Ogr.js";import{X as M}from"./x-icon-6miUmzgF.js";import{C}from"./CodeDialog-BcgW2Qgx.js";import{B as u}from"./Button-BChG-RMT.js";import{b as U}from"./index-BNZSTwAO.js";import{g as z}from"./index-DA4vpcKL.js";import{B as W}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconBase-CU_7cgqW.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";const I=A({root:{base:"flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",closed:"opacity-0 ease-out"},toggle:{base:"-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",icon:"h-5 w-5 shrink-0"}}),H=a.createContext(void 0);function L(){const s=a.useContext(H);if(!s)throw new Error("useToastContext should be used within the ToastContext provider!");return s}const $={75:"duration-75",100:"duration-100",150:"duration-150",200:"duration-200",300:"duration-300",500:"duration-500",700:"duration-700",1e3:"duration-1000"},t=a.forwardRef((s,o)=>{const[l,g]=a.useState(!1),[m,f]=a.useState(!1),i=N(),x=w([I,i.theme?.toast,s.theme],[d(i.clearTheme,"toast"),s.clearTheme],[d(i.applyTheme,"toast"),s.applyTheme]),{className:j,duration:h=300,...n}=k(s,i.props?.toast);return m?null:e.jsx(H.Provider,{value:{theme:s.theme,clearTheme:s.clearTheme,applyTheme:s.applyTheme,duration:h,isClosed:l,isRemoved:m,setIsClosed:g,setIsRemoved:f},children:e.jsx("div",{ref:o,"data-testid":"flowbite-toast",role:"alert",className:b(x.root.base,$[h],l&&x.root.closed,j),...n})})});t.displayName="Toast";const r=a.forwardRef((s,o)=>{const{theme:l,clearTheme:g,applyTheme:m,duration:f,isClosed:i,isRemoved:x,setIsClosed:j,setIsRemoved:h}=L(),n=N(),v=w([I.toggle,n.theme?.toast?.toggle,l?.toggle,s.theme],[d(n.clearTheme,"toast.toggle"),d(g,"toggle"),s.clearTheme],[d(n.applyTheme,"toast.toggle"),d(m,"toggle"),s.applyTheme]),{className:D,onClick:T,onDismiss:p,xIcon:F=M,...B}=k(s,n.props?.toastToggle);function R(S){if(T&&T(S),p){p();return}j(!i),setTimeout(()=>h(!x),f)}return e.jsx("button",{ref:o,"aria-label":"Close",onClick:R,type:"button",className:b(v.base,D),...B,children:e.jsx(F,{"aria-hidden":!0,className:v.icon})})});r.displayName="ToastToggle";const q=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(y,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(r,{})]})})}),G=`import { Toast, ToastToggle } from 'flowbite-react';\r
import { HiFire } from 'react-icons/hi';\r
\r
const DefaultToastCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">\r
            <HiFire className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Set yourself free.</div>\r
          <ToastToggle />\r
        </Toast>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultToastCode;\r
`,J=()=>e.jsx("div",{children:e.jsx(c,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Toast"}),e.jsx(q,{})]}),e.jsx(C,{children:G})]})})}),K=()=>{const[s,o]=a.useState(!1);return e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Dismissal Toast"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{onClick:()=>o(l=>!l),color:"primary",children:"Toggle toast"}),s&&e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200",children:e.jsx(y,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Set yourself free."}),e.jsx(r,{onDismiss:()=>o(!1)})]})]})]})})},O=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Feedback Toast"}),e.jsxs(t,{children:[e.jsx(U,{className:"h-5 w-5 text-primary dark:text-primary"}),e.jsx("div",{className:"pl-4 text-sm font-normal",children:"Message sent successfully."})]})]})}),Q=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Interactive Toast"}),e.jsx(t,{children:e.jsxs("div",{className:"flex items-start",children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300",children:e.jsx(z,{className:"h-5 w-5"})}),e.jsxs("div",{className:"ml-3 text-sm font-normal",children:[e.jsx("span",{className:"mb-1 text-sm font-semibold text-gray-900 dark:text-white",children:"Update available"}),e.jsx("div",{className:"mb-2 text-sm font-normal",children:"A new software version is available for download.A new software version is available for download.A new software version is available for download.A new software version is available for"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("div",{className:"w-auto",children:e.jsx(u,{size:"xs",color:"primary",children:"Update"})}),e.jsx("div",{className:"w-auto",children:e.jsx(u,{color:"light",size:"xs",children:"Not now"})})]})]}),e.jsx(r,{})]})})]})}),V=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200",children:e.jsx(E,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item moved successfully."}),e.jsx(r,{})]}),e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200",children:e.jsx(P,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Item has been deleted."}),e.jsx(r,{})]}),e.jsxs(t,{children:[e.jsx("div",{className:"inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200",children:e.jsx(X,{className:"h-5 w-5"})}),e.jsx("div",{className:"ml-3 text-sm font-normal",children:"Improve password difficulty."}),e.jsx(r,{})]})]})}),Y=`import { Toast, ToastToggle } from 'flowbite-react';\r
import { HiCheck, HiExclamation, HiX } from 'react-icons/hi';\r
\r
const ToastColorsCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-4">\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">\r
            <HiCheck className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Item moved successfully.</div>\r
          <ToastToggle />\r
        </Toast>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">\r
            <HiX className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>\r
          <ToastToggle />\r
        </Toast>\r
        <Toast>\r
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">\r
            <HiExclamation className="h-5 w-5" />\r
          </div>\r
          <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>\r
          <ToastToggle />\r
        </Toast>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ToastColorsCode;\r
`,Z=()=>e.jsx("div",{children:e.jsx(c,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast Colors"}),e.jsx(V,{})]}),e.jsx(C,{children:Y})]})})}),_=()=>e.jsx("div",{children:e.jsxs(c,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Toast With Button"}),e.jsxs(t,{children:[e.jsx("div",{className:"text-sm font-normal",children:"Conversation archived."}),e.jsxs("div",{className:"ml-auto flex items-center space-x-2",children:[e.jsx("a",{href:"#",className:"rounded-lg p-1.5 text-sm font-medium text-primary hover:bg-cyan-100 dark:text-primary dark:hover:bg-gray-700",children:"Undo"}),e.jsx(r,{})]})]})]})}),ee=[{to:"/",title:"Home"},{title:"Toast"}],ye=()=>e.jsxs(e.Fragment,{children:[e.jsx(W,{title:"Toast",items:ee}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(J,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(_,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Q,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(O,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(K,{})})]})]});export{ye as default};
