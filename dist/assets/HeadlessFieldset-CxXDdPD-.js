import{r as x,R as m,j as e}from"./index-n5lagw8Y.js";import{C as u}from"./CardBox-DP5V6wyZ.js";import{M as d}from"./description-CMFfDl8O.js";import{W as l}from"./field-CkLRacoC.js";import{n as S}from"./dom-BlW_0b_t.js";import{Y as h,a as I,K as M}from"./render-D9E-06xR.js";import{y as $}from"./use-sync-refs-CefhOWeT.js";import{a as T,l as E}from"./disabled-CIuDn_DF.js";import{V as W,Z as i}from"./label-9sDPupFE.js";import{X as f}from"./input-BOElqEXg.js";import{k as b}from"./select-DtFdDBIH.js";import{M as N}from"./textarea-C2JnCnNh.js";import{C as j}from"./CodeDialog-BcgW2Qgx.js";import{B as A}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./hidden-C2xwWGhP.js";import"./useFocusRing-BQxkpHIn.js";import"./use-active-press-BchvfSUV.js";import"./owner-CneWfzVc.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";function B(r){let t=typeof r=="string"?r:void 0,[a,o]=x.useState(t);return[t??a,x.useCallback(s=>{t||S(s)&&o(s.tagName.toLowerCase())},[t])]}let p="fieldset";function U(r,t){var a;let o=T(),{disabled:s=o||!1,...F}=r,[v,k]=B((a=r.as)!=null?a:p),n=$(t,k),[c,D]=W(),C=I({disabled:s}),w=v==="fieldset"?{ref:n,"aria-labelledby":c,disabled:s||void 0}:{ref:n,role:"group","aria-labelledby":c,"aria-disabled":s||void 0},L=M();return m.createElement(E,{value:s},m.createElement(D,null,L({ourProps:w,theirProps:F,slot:C,defaultTag:p,name:"Fieldset"})))}let g=h(U);function R(r,t){return m.createElement(i,{as:"div",ref:t,...r})}let y=h(R);const H=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(g,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",disabled:!0,children:[e.jsx(y,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(f,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(d,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(b,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(d,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(N,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})})}),P=`import {\r
  Description,\r
  Field,\r
  Fieldset,\r
  Input,\r
  Label,\r
  Legend,\r
  Select,\r
  Textarea,\r
} from "@headlessui/react";\r
\r
\r
const DisabledFieldsetCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6" disabled>\r
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">\r
            Shipping Details\r
          </Legend>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Street address\r
            </Label>\r
            <Input className="w-full ui-form-control rounded-md py-2 px-3 mt-3" />\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">Country</Label>\r
            <Description className="text-bodytext text-xs mt-1">\r
              We currently only ship to North America.\r
            </Description>\r
\r
            <div className="relative">\r
              <Select className="ui-form-control  rounded-md mt-3">\r
                <option>Canada</option>\r
                <option>Mexico</option>\r
                <option>United States</option>\r
              </Select>\r
            </div>\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Delivery notes\r
            </Label>\r
            <Description className="text-xs text-bodytext mt-1">\r
              If you have a tiger, we'd like to know about it.\r
            </Description>\r
            <Textarea className="ui-form-control rounded-lg mt-3" rows={3} />\r
          </Field>\r
        </Fieldset>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisabledFieldsetCode\r
`,K=()=>e.jsx("div",{children:e.jsx(u,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Fieldset Form"}),e.jsx(H,{})]}),e.jsx(j,{children:P})]})})}),V=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(g,{className:"space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6",children:[e.jsx(y,{className:"text-base/7 font-semibold dark:text-white text-dark",children:"Shipping Details"}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Street address"}),e.jsx(f,{className:"w-full ui-form-control rounded-md py-2 px-3 mt-3"})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Country"}),e.jsx(d,{className:"text-bodytext text-xs mt-1",children:"We currently only ship to North America."}),e.jsx("div",{className:"relative",children:e.jsxs(b,{className:"ui-form-control  rounded-md mt-3",children:[e.jsx("option",{children:"Canada"}),e.jsx("option",{children:"Mexico"}),e.jsx("option",{children:"United States"})]})})]}),e.jsxs(l,{children:[e.jsx(i,{className:"text-ld font-medium text-sm",children:"Delivery notes"}),e.jsx(d,{className:"text-xs text-bodytext mt-1",children:"If you have a tiger, we'd like to know about it."}),e.jsx(N,{className:"ui-form-control rounded-lg mt-3",rows:3})]})]})})}),X=`import {\r
  Description,\r
  Field,\r
  Fieldset,\r
  Input,\r
  Label,\r
  Legend,\r
  Select,\r
  Textarea,\r
} from "@headlessui/react";\r
\r
\r
const FieldsetCode = () => {\r
  return (\r
   <>\r
   <div className="mt-4">\r
    <Fieldset className="space-y-6 rounded-xl bg-lightgray dark:bg-dark p-6">\r
          <Legend className="text-base/7 font-semibold dark:text-white text-dark">\r
            Shipping Details\r
          </Legend>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Street address\r
            </Label>\r
            <Input className="w-full ui-form-control rounded-md py-2 px-3 mt-3" />\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">Country</Label>\r
            <Description className="text-bodytext text-xs mt-1">\r
              We currently only ship to North America.\r
            </Description>\r
\r
            <div className="relative">\r
              <Select className="ui-form-control  rounded-md mt-3">\r
                <option>Canada</option>\r
                <option>Mexico</option>\r
                <option>United States</option>\r
              </Select>\r
            </div>\r
          </Field>\r
          <Field>\r
            <Label className="text-ld font-medium text-sm">\r
              Delivery notes\r
            </Label>\r
            <Description className="text-xs text-bodytext mt-1">\r
              If you have a tiger, we'd like to know about it.\r
            </Description>\r
            <Textarea className="ui-form-control rounded-lg mt-3" rows={3} />\r
          </Field>\r
        </Fieldset>\r
   </div>\r
   </>\r
  )\r
}\r
\r
export default FieldsetCode\r
`,Y=()=>e.jsx("div",{children:e.jsx(u,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Fieldset Form"}),e.jsx(V,{})]}),e.jsx(j,{children:X})]})})}),Z=[{to:"/",title:"Home"},{title:"Fieldset"}],ve=()=>e.jsxs(e.Fragment,{children:[e.jsx(A,{title:"Fieldset",items:Z}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Y,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(K,{})})]})]});export{ve as default};
