import{r as n,R as o,j as e}from"./index-n5lagw8Y.js";import{C as h}from"./CardBox-DP5V6wyZ.js";import{$ as re,a as te}from"./useFocusRing-BQxkpHIn.js";import{w as ne}from"./use-active-press-BchvfSUV.js";import{l as se,b as le}from"./use-default-value-5dcV75jC.js";import{Y as ie,K as L,p as de,o as k,a as ce,V as oe}from"./render-D9E-06xR.js";import{e as he}from"./use-resolve-button-type-B08ktXI3.js";import{y as ue}from"./use-sync-refs-CefhOWeT.js";import{a as ge}from"./disabled-CIuDn_DF.js";import{g as be,j as xe,W as d}from"./field-CkLRacoC.js";import{Z as c,V as me,u as pe,N as fe}from"./label-9sDPupFE.js";import{s as we}from"./bugs-BLuxiOOY.js";import{m as ke}from"./dom-BlW_0b_t.js";import{M as Ne,H as je,w as Se}from"./description-CMFfDl8O.js";import{o as D}from"./keyboard-C1Wiwm26.js";import{C as u}from"./CodeDialog-BcgW2Qgx.js";import{B as ye}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./owner-CneWfzVc.js";import"./hidden-C2xwWGhP.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";let E=n.createContext(null);E.displayName="GroupContext";let Ce=n.Fragment;function ve(a){var r;let[l,x]=n.useState(null),[N,j]=me(),[S,i]=je(),m=n.useMemo(()=>({switch:l,setSwitch:x}),[l,x]),y={},C=a,p=L();return o.createElement(i,{name:"Switch.Description",value:S},o.createElement(j,{name:"Switch.Label",value:N,props:{htmlFor:(r=m.switch)==null?void 0:r.id,onClick(f){l&&(ke(f.currentTarget)&&f.preventDefault(),l.click(),l.focus({preventScroll:!0}))}}},o.createElement(E.Provider,{value:m},p({ourProps:y,theirProps:C,slot:{},defaultTag:Ce,name:"Switch.Group"}))))}let Ee="button";function ze(a,r){var l;let x=n.useId(),N=pe(),j=ge(),{id:S=N||`headlessui-switch-${x}`,disabled:i=j||!1,checked:m,defaultChecked:y,onChange:C,name:p,value:f,form:R,autoFocus:v=!1,...T}=a,z=n.useContext(E),[W,B]=n.useState(null),P=n.useRef(null),A=ue(P,r,z===null?null:z.setSwitch,B),g=se(y),[w,b]=le(m,C,g??!1),O=de(),[G,F]=n.useState(!1),$=k(()=>{F(!0),b?.(!w),O.nextFrame(()=>{F(!1)})}),H=k(s=>{if(we(s.currentTarget))return s.preventDefault();s.preventDefault(),$()}),I=k(s=>{s.key===D.Space?(s.preventDefault(),$()):s.key===D.Enter&&be(s.currentTarget)}),V=k(s=>s.preventDefault()),K=fe(),M=Se(),{isFocusVisible:U,focusProps:q}=re({autoFocus:v}),{isHovered:J,hoverProps:X}=te({isDisabled:i}),{pressed:Y,pressProps:Z}=ne({disabled:i}),_=ce({checked:w,disabled:i,hover:J,focus:U,active:Y,autofocus:v,changing:G}),Q=oe({id:S,ref:A,role:"switch",type:he(a,W),tabIndex:a.tabIndex===-1?0:(l=a.tabIndex)!=null?l:0,"aria-checked":w,"aria-labelledby":K,"aria-describedby":M,disabled:i||void 0,autoFocus:v,onClick:H,onKeyUp:I,onKeyPress:V},q,X,Z),ee=n.useCallback(()=>{if(g!==void 0)return b?.(g)},[b,g]),ae=L();return o.createElement(o.Fragment,null,p!=null&&o.createElement(xe,{disabled:i,data:{[p]:f||"on"},overrides:{type:"checkbox",checked:w},form:R,onReset:ee}),ae({ourProps:Q,theirProps:T,slot:_,defaultTag:Ee,name:"Switch"}))}let Fe=ie(ze),$e=ve,De=c,Le=Ne,t=Object.assign(Fe,{Group:$e,Label:De,Description:Le});const Re=()=>{const[a,r]=n.useState(!1);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]})})},Te=`import { Switch } from '@headlessui/react';\r
import { useState } from 'react';\r
\r
const BasicSwitchCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
\r
  return (\r
    <div>\r
      <div className="flex flex-wrap gap-3">\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default BasicSwitchCode;\r
`,We=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Basic Switches"}),e.jsx(Re,{})]}),e.jsx(u,{children:Te})]})})}),Be=()=>{const[a,r]=n.useState(!0);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]})})},Pe=`import { Switch } from '@headlessui/react';\r
import { useState } from 'react';\r
\r
const DefaultOnCode = () => {\r
  const [enabled, setEnabled] = useState(true);\r
\r
  return (\r
    <div>\r
      <div className="flex flex-wrap gap-3">\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default DefaultOnCode;\r
`,Ae=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default On Switches"}),e.jsx(Be,{})]}),e.jsx(u,{children:Pe})]})})}),Oe=()=>{const[a,r]=n.useState(!0);return e.jsx("div",{children:e.jsxs(d,{className:"flex flex-wrap gap-3",disabled:!0,children:[e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]})})},Ge=`import { Switch, Field } from '@headlessui/react';\r
import { useState } from 'react';\r
\r
const DisableSwitchesCode = () => {\r
  const [enabled, setEnabled] = useState(true);\r
\r
  return (\r
    <div>\r
      <Field className="flex flex-wrap gap-3" disabled>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-primary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-secondary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-success"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-error"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-warning"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:bg-info"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
      </Field>\r
    </div>\r
  );\r
};\r
\r
export default DisableSwitchesCode;\r
`,He=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Disabled Switches"}),e.jsx(Oe,{})]}),e.jsx(u,{children:Ge})]})})}),Ie=()=>{const[a,r]=n.useState(!1);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})}),e.jsx(t,{as:"div",checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]})})},Ve=`import { useState } from 'react';\r
import { Switch } from '@headlessui/react';\r
\r
const RenderAsElements = () => {\r
  const [enabled, setEnabled] = useState(false);\r
\r
  return (\r
    <div>\r
      <div className="flex flex-wrap gap-3">\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-success"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          as="div"\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
        </Switch>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default RenderAsElements;\r
`,Ke=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rendering as Element"}),e.jsx(Ie,{})]}),e.jsx(u,{children:Ve})]})})}),Me=()=>{const[a,r]=n.useState(!0);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]}),e.jsxs(d,{children:[e.jsx(c,{className:"block text-ld mb-2",children:"Enable"}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6"})})]})]})})},Ue=`import { useState } from 'react';\r
import { Switch, Field, Label } from '@headlessui/react';\r
\r
const WithLabelSwitchCode = () => {\r
  const [enabled, setEnabled] = useState(true);\r
\r
  return (\r
    <div>\r
      <div className="flex flex-wrap gap-3">\r
        <Field>\r
          <Label className="block text-ld mb-2">Enable</Label>\r
          <Switch\r
            checked={enabled}\r
            onChange={setEnabled}\r
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-primary"\r
          >\r
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
          </Switch>\r
        </Field>\r
        <Field>\r
          <Label className="block text-ld mb-2">Enable</Label>\r
          <Switch\r
            checked={enabled}\r
            onChange={setEnabled}\r
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-secondary"\r
          >\r
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
          </Switch>\r
        </Field>\r
        <Field>\r
          <Label className="block text-ld mb-2">Enable</Label>\r
          <Switch\r
            checked={enabled}\r
            onChange={setEnabled}\r
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-error"\r
          >\r
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
          </Switch>\r
        </Field>\r
        <Field>\r
          <Label className="block text-ld mb-2">Enable</Label>\r
          <Switch\r
            checked={enabled}\r
            onChange={setEnabled}\r
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-warning"\r
          >\r
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
          </Switch>\r
        </Field>\r
        <Field>\r
          <Label className="block text-ld mb-2">Enable</Label>\r
          <Switch\r
            checked={enabled}\r
            onChange={setEnabled}\r
            className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-info"\r
          >\r
            <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />\r
          </Switch>\r
        </Field>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default WithLabelSwitchCode;\r
`,qe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Adding a Label"}),e.jsx(Me,{})]}),e.jsx(u,{children:Ue})]})})}),Je=()=>{const[a,r]=n.useState(!0);return e.jsx("div",{children:e.jsxs("div",{className:"flex flex-wrap gap-3",children:[e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-primary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-secondary",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-success",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-error",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-warning",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})}),e.jsx(t,{checked:a,onChange:r,className:"group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-info",children:e.jsx("span",{className:"size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6"})})]})})},Xe=`import { Switch } from '@headlessui/react';\r
import { useState } from 'react';\r
\r
const WithTransitionCode = () => {\r
  const [enabled, setEnabled] = useState(true);\r
\r
  return (\r
    <div>\r
      <div className="flex flex-wrap gap-3">\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-primary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-secondary"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-success"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-error"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-warning"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
        <Switch\r
          checked={enabled}\r
          onChange={setEnabled}\r
          className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition duration-700 data-checked:bg-info"\r
        >\r
          <span className="size-4 translate-x-1 rounded-full bg-white transition duration-700 group-data-checked:translate-x-6" />\r
        </Switch>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default WithTransitionCode;\r
`,Ye=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Adding Transitions"}),e.jsx(Je,{})]}),e.jsx(u,{children:Xe})]})})}),za=()=>{const a=[{to:"/",title:"Home"},{title:"Switch"}];return e.jsxs(e.Fragment,{children:[e.jsx(ye,{title:"Switch",items:a}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(We,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ae,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(He,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(qe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ye,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ke,{})})]})]})};export{za as default};
