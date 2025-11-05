import{r as s,R as f,j as e,b as y}from"./index-n5lagw8Y.js";import{C as h}from"./CardBox-DP5V6wyZ.js";import{$ as q,a as J}from"./useFocusRing-BQxkpHIn.js";import{w as Q}from"./use-active-press-BchvfSUV.js";import{l as ee,b as re}from"./use-default-value-5dcV75jC.js";import{Y as ne,p as se,o as g,V as ae,a as te,K as ie}from"./render-D9E-06xR.js";import{a as oe}from"./disabled-CIuDn_DF.js";import{j as ce,g as le,W as a}from"./field-CkLRacoC.js";import{u as de,N as he,Z as t}from"./label-9sDPupFE.js";import{s as xe}from"./bugs-BLuxiOOY.js";import{w as me,M as pe}from"./description-CMFfDl8O.js";import{o as w}from"./keyboard-C1Wiwm26.js";import{C as x}from"./CodeDialog-BcgW2Qgx.js";import{B as be}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./owner-CneWfzVc.js";import"./hidden-C2xwWGhP.js";import"./use-sync-refs-CefhOWeT.js";import"./dom-BlW_0b_t.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";let ue="span";function ke(r,n){let o=s.useId(),c=de(),m=oe(),{id:p=c||`headlessui-checkbox-${o}`,disabled:d=m||!1,autoFocus:v=!1,checked:W,defaultChecked:F,onChange:E,name:N,value:S,form:B,indeterminate:j=!1,tabIndex:M=0,...D}=r,b=ee(F),[k,u]=re(W,E,b??!1),T=he(),$=me(),U=se(),[H,L]=s.useState(!1),C=g(()=>{L(!0),u?.(!k),U.nextFrame(()=>{L(!1)})}),P=g(l=>{if(xe(l.currentTarget))return l.preventDefault();l.preventDefault(),C()}),R=g(l=>{l.key===w.Space?(l.preventDefault(),C()):l.key===w.Enter&&le(l.currentTarget)}),A=g(l=>l.preventDefault()),{isFocusVisible:K,focusProps:z}=q({autoFocus:v}),{isHovered:I,hoverProps:V}=J({isDisabled:d}),{pressed:G,pressProps:O}=Q({disabled:d}),X=ae({ref:n,id:p,role:"checkbox","aria-checked":j?"mixed":k?"true":"false","aria-labelledby":T,"aria-describedby":$,"aria-disabled":d?!0:void 0,indeterminate:j?"true":void 0,tabIndex:d?void 0:M,onKeyUp:d?void 0:R,onKeyPress:d?void 0:A,onClick:d?void 0:P},z,V,O),Y=te({checked:k,disabled:d,hover:I,focus:K,active:G,indeterminate:j,changing:H,autofocus:v}),Z=s.useCallback(()=>{if(b!==void 0)return u?.(b)},[u,b]),_=ie();return f.createElement(f.Fragment,null,N!=null&&f.createElement(ce,{disabled:d,data:{[N]:S||"on"},overrides:{type:"checkbox",checked:k},form:B,onReset:Z}),_({ourProps:X,theirProps:D,slot:Y,defaultTag:ue,name:"Checkbox"}))}let i=ne(ke);const ge=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"data-disabled:opacity-50",children:"Enable beta features"})]})}),e.jsx("div",{children:e.jsxs(a,{disabled:!0,className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"data-disabled:opacity-50",children:"Enable beta features"})]})})]})})})},je=`import { useState } from "react";\r
import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
const DisableCheckCode = () => {\r
    const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field disabled className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="data-disabled:opacity-50">\r
                Enable beta features\r
              </Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field disabled className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block size-4 rounded border bg-white data-checked:bg-blue-500 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-checked:data-disabled:bg-gray-500"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="data-disabled:opacity-50">\r
                Enable beta features\r
              </Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableCheckCode\r
 `,fe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Checkbox"}),e.jsx(ge,{})]}),e.jsx(x,{children:je})]})})}),ve=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1),[m,p]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render As a Div Elements"})}),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{as:"div",checked:m,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})]})})},Ne=()=>{const[r,n]=s.useState(!1);return e.jsx("div",{children:e.jsxs(h,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Render Props"})}),e.jsx("div",{className:"flex flex-col gap-3",children:e.jsx("div",{children:e.jsxs(a,{className:"flex gap-3",children:[e.jsx(i,{checked:r,onChange:n,as:s.Fragment,children:({checked:o,disabled:c})=>e.jsx("span",{className:y("group block h-[18px] w-[18px] rounded border border-bordergray dark:border-darkborder bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary",!o&&"bg-white",o&&!c&&"bg-primary",o&&c&&"bg-gray-500",c&&"cursor-not-allowed opacity-50"),children:e.jsx("svg",{className:y("stroke-white",o?"opacity-100":"opacity-0"),viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})})}),e.jsx(t,{children:"Each component also exposes information about its current state via render props that you can use to conditionally apply different styles or render different content."})]})})})]})})},Le=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1),[m,p]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:m,onChange:p,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 transition group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Transitoin"})]})})]})})})},Ce=`import { Checkbox, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const TransitionCheckCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  const [enabled1, setEnabled1] = useState(false);\r
  const [enabled2, setEnabled2] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled1}\r
                onChange={setEnabled1}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled2}\r
                onChange={setEnabled2}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 transition group-data-checked:opacity-100"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Transitoin</Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default TransitionCheckCode\r
`,ye=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Checkbox"}),e.jsx(Le,{})]}),e.jsx(x,{children:Ce})]})})}),we=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})})})},We=`import { Checkbox, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const UsingHtmlFormCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form action="/accounts" method="post">\r
          <Field className="flex items-center gap-3">\r
            <Checkbox\r
              checked={enabled}\r
              onChange={setEnabled}\r
              name="terms-of-service"\r
              className="group block ui-checkbox"\r
            >\r
              <svg\r
                className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                viewBox="0 0 14 14"\r
                fill="none"\r
                height={15}\r
              >\r
                <path\r
                  d="M3 8L6 11L11 3.5"\r
                  strokeWidth={2}\r
                  strokeLinecap="round"\r
                  strokeLinejoin="round"\r
                />\r
              </svg>\r
            </Checkbox>\r
            <Label className="cursor-pointer">Agree to terms and conditions</Label>\r
          </Field>\r
          <div className="flex gap-3 mt-4">\r
          <button className="ui-button bg-primary justify-center">Submit</button>\r
          <button className="ui-button bg-error justify-center">Cancel</button>\r
          </div>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default UsingHtmlFormCode\r
`,Fe=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With HTML Forms"}),e.jsx(we,{})]}),e.jsx(x,{children:We})]})})}),Ee=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("form",{action:"/accounts",method:"post",children:[e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{defaultChecked:!0,name:"terms-of-service",className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Agree to terms and conditions"})]}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary justify-center",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error justify-center",children:"Cancel"})]})]})})}),Se=`import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
\r
const UsingUncontrolledCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form action="/accounts" method="post">\r
          <Field className="flex items-center gap-3">\r
            <Checkbox\r
              defaultChecked={true}\r
              name="terms-of-service"\r
              className="group block ui-checkbox"\r
            >\r
              <svg\r
                className="stroke-white opacity-0 group-data-checked:opacity-100"\r
                viewBox="0 0 14 14"\r
                fill="none"\r
              >\r
                <path\r
                  d="M3 8L6 11L11 3.5"\r
                  strokeWidth={2}\r
                  strokeLinecap="round"\r
                  strokeLinejoin="round"\r
                />\r
              </svg>\r
            </Checkbox>\r
            <Label className="cursor-pointer">\r
              Agree to terms and conditions\r
            </Label>\r
          </Field>\r
          <div className="flex gap-3 mt-4">\r
            <button className="ui-button bg-primary justify-center">\r
              Submit\r
            </button>\r
            <button className="ui-button bg-error justify-center">\r
              Cancel\r
            </button>\r
          </div>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default UsingUncontrolledCode\r
`,Be=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Using as Uncontrolled "}),e.jsx(Ee,{})]}),e.jsx(x,{children:Se})]})})}),Me=()=>{const[r,n]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(a,{className:"flex gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{children:[e.jsx(t,{children:"Enable beta features"}),e.jsx(pe,{children:"This will give you early access to new features we're developing."})]})]})})})},De=`import { Checkbox, Description, Field, Label } from "@headlessui/react";\r
import { useState } from "react";\r
\r
\r
const WithDescriptionCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Field className="flex gap-3">\r
          <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
            <div>\r
              <Label>Enable beta features</Label>\r
              <Description>\r
                This will give you early access to new features we're\r
                developing.\r
              </Description>\r
            </div>\r
          </Field>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default WithDescriptionCode\r
`,Te=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Discription"}),e.jsx(Me,{})]}),e.jsx("div",{children:e.jsx(x,{children:De})})]})})}),$e=()=>{const[r,n]=s.useState(!1),[o,c]=s.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:r,onChange:n,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Label"})]})}),e.jsx("div",{children:e.jsxs(a,{className:"flex items-center gap-3",children:[e.jsx(i,{checked:o,onChange:c,className:"group block ui-checkbox",children:e.jsx("svg",{className:"stroke-white opacity-0 group-data-checked:opacity-100 rounded",viewBox:"0 0 14 14",fill:"none",height:15,children:e.jsx("path",{d:"M3 8L6 11L11 3.5",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx(t,{className:"cursor-pointer",children:"Checkbox With Label"})]})})]})})})},Ue=`import  { useState } from "react";\r
import { Checkbox, Field, Label } from "@headlessui/react";\r
\r
\r
const WithLabelCode = () => {\r
  const [enabled, setEnabled] = useState(false);\r
  const [enabled1, setEnabled1] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col gap-3">\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled}\r
                onChange={setEnabled}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Label</Label>\r
            </Field>\r
          </div>\r
          <div>\r
            <Field className="flex items-center gap-3">\r
              <Checkbox\r
                checked={enabled1}\r
                onChange={setEnabled1}\r
                className="group block ui-checkbox"\r
              >\r
                <svg\r
                  className="stroke-white opacity-0 group-data-checked:opacity-100 rounded"\r
                  viewBox="0 0 14 14"\r
                  fill="none"\r
                  height={15}\r
                >\r
                  <path\r
                    d="M3 8L6 11L11 3.5"\r
                    strokeWidth={2}\r
                    strokeLinecap="round"\r
                    strokeLinejoin="round"\r
                  />\r
                </svg>\r
              </Checkbox>\r
              <Label className="cursor-pointer">Checkbox With Label</Label>\r
            </Field>\r
          </div>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default WithLabelCode;\r
`,He=()=>e.jsx("div",{children:e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Checkbox Label"}),e.jsx($e,{})]}),e.jsx(x,{children:Ue})]})})}),Pe=[{to:"/",title:"Home"},{title:"Checkbox"}],br=()=>e.jsxs("div",{children:[e.jsx(be,{title:"Checkbox",items:Pe}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(He,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Te,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Be,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ye,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(ve,{})}),e.jsx("div",{className:"md:col-span-6 col-span-12",children:e.jsx(Ne,{})})]})]});export{br as default};
