import{r as i,R as S,j as e}from"./index-n5lagw8Y.js";import{C as M}from"./CodeDialog-BcgW2Qgx.js";import{I as Ge}from"./iconify-VfOFnMl8.js";import{$ as le,a as ce}from"./useFocusRing-BQxkpHIn.js";import{u as Ce}from"./use-by-comparator-bDtqTRsZ.js";import{l as De,b as we}from"./use-default-value-5dcV75jC.js";import{Y,c as pe,n as ue,o as L,V as me,a as q,K as Q,u as $e}from"./render-D9E-06xR.js";import{y as X}from"./use-sync-refs-CefhOWeT.js";import{a as he}from"./disabled-CIuDn_DF.js";import{j as Be,g as Fe,W as V}from"./field-CkLRacoC.js";import{Z as O,u as Pe,N as ze,V as xe}from"./label-9sDPupFE.js";import{s as fe}from"./bugs-BLuxiOOY.js";import{v as ae,T as H,A as se,G as Ee}from"./focus-management-Ds-lPg9b.js";import{d as K}from"./owner-CneWfzVc.js";import{M as ge,w as Te,H as be}from"./description-CMFfDl8O.js";import{o as B}from"./keyboard-C1Wiwm26.js";import{C as W}from"./CardBox-DP5V6wyZ.js";import{B as Ie}from"./BreadcrumbComp-BUvza-Rs.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./hidden-C2xwWGhP.js";import"./dom-BlW_0b_t.js";import"./chevron-right-icon-BGQVsHY5.js";var Ue=(a=>(a[a.RegisterOption=0]="RegisterOption",a[a.UnregisterOption=1]="UnregisterOption",a))(Ue||{});let Le={0(a,s){let r=[...a.options,{id:s.id,element:s.element,propsRef:s.propsRef}];return{...a,options:Ee(r,t=>t.element.current)}},1(a,s){let r=a.options.slice(),t=a.options.findIndex(m=>m.id===s.id);return t===-1?a:(r.splice(t,1),{...a,options:r})}},Z=i.createContext(null);Z.displayName="RadioGroupDataContext";function J(a){let s=i.useContext(Z);if(s===null){let r=new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,J),r}return s}let _=i.createContext(null);_.displayName="RadioGroupActionsContext";function ee(a){let s=i.useContext(_);if(s===null){let r=new Error(`<${a} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ee),r}return s}function Oe(a,s){return $e(s.type,Le,a,s)}let We="div";function Ae(a,s){let r=i.useId(),t=he(),{id:m=`headlessui-radiogroup-${r}`,value:P,form:b,name:v,onChange:l,by:f,disabled:c=t||!1,defaultValue:h,tabIndex:G=0,...j}=a,g=Ce(f),[R,C]=i.useReducer(Oe,{options:[]}),o=R.options,[z,E]=xe(),[D,T]=be(),w=i.useRef(null),I=X(w,s),p=De(h),[u,$]=we(P,l,p),N=i.useMemo(()=>o.find(n=>!n.propsRef.current.disabled),[o]),k=i.useMemo(()=>o.some(n=>g(n.propsRef.current.value,u)),[o,u]),x=L(n=>{var U;if(c||g(n,u))return!1;let d=(U=o.find(y=>g(y.propsRef.current.value,n)))==null?void 0:U.propsRef.current;return d!=null&&d.disabled?!1:($?.(n),!0)}),ve=L(n=>{if(!w.current)return;let U=o.filter(d=>d.propsRef.current.disabled===!1).map(d=>d.element.current);switch(n.key){case B.Enter:Fe(n.currentTarget);break;case B.ArrowLeft:case B.ArrowUp:if(n.preventDefault(),n.stopPropagation(),ae(U,H.Previous|H.WrapAround)===se.Success){let d=o.find(y=>K(y.element.current));d&&x(d.propsRef.current.value)}break;case B.ArrowRight:case B.ArrowDown:if(n.preventDefault(),n.stopPropagation(),ae(U,H.Next|H.WrapAround)===se.Success){let d=o.find(y=>K(y.element.current));d&&x(d.propsRef.current.value)}break;case B.Space:{n.preventDefault(),n.stopPropagation();let d=o.find(y=>K(y.element.current));d&&x(d.propsRef.current.value)}break}}),re=L(n=>(C({type:0,...n}),()=>C({type:1,id:n.id}))),je=i.useMemo(()=>({value:u,firstOption:N,containsCheckedOption:k,disabled:c,compare:g,tabIndex:G,...R}),[u,N,k,c,g,G,R]),ke=i.useMemo(()=>({registerOption:re,change:x}),[re,x]),Re={ref:I,id:m,role:"radiogroup","aria-labelledby":z,"aria-describedby":D,onKeyDown:ve},Ne=q({value:u}),ye=i.useCallback(()=>{if(p!==void 0)return x(p)},[x,p]),Se=Q();return S.createElement(T,{name:"RadioGroup.Description"},S.createElement(E,{name:"RadioGroup.Label"},S.createElement(_.Provider,{value:ke},S.createElement(Z.Provider,{value:je},v!=null&&S.createElement(Be,{disabled:c,data:{[v]:u||"on"},overrides:{type:"radio",checked:u!=null},form:b,onReset:ye}),Se({ourProps:Re,theirProps:j,slot:Ne,defaultTag:We,name:"RadioGroup"})))))}let He="div";function Me(a,s){var r;let t=J("RadioGroup.Option"),m=ee("RadioGroup.Option"),P=i.useId(),{id:b=`headlessui-radiogroup-option-${P}`,value:v,disabled:l=t.disabled||!1,autoFocus:f=!1,...c}=a,h=i.useRef(null),G=X(h,s),[j,g]=xe(),[R,C]=be(),o=pe({value:v,disabled:l});ue(()=>m.registerOption({id:b,element:h,propsRef:o}),[b,m,h,o]);let z=L(k=>{var x;if(fe(k.currentTarget))return k.preventDefault();m.change(v)&&((x=h.current)==null||x.focus())}),E=((r=t.firstOption)==null?void 0:r.id)===b,{isFocusVisible:D,focusProps:T}=le({autoFocus:f}),{isHovered:w,hoverProps:I}=ce({isDisabled:l}),p=t.compare(t.value,v),u=me({ref:G,id:b,role:"radio","aria-checked":p?"true":"false","aria-labelledby":j,"aria-describedby":R,"aria-disabled":l?!0:void 0,tabIndex:l?-1:p||!t.containsCheckedOption&&E?t.tabIndex:-1,onClick:l?void 0:z,autoFocus:f},T,I),$=q({checked:p,disabled:l,active:D,hover:w,focus:D,autofocus:f}),N=Q();return S.createElement(C,{name:"RadioGroup.Description"},S.createElement(g,{name:"RadioGroup.Label"},N({ourProps:u,theirProps:c,slot:$,defaultTag:He,name:"RadioGroup.Option"})))}let Ve="span";function Ke(a,s){var r;let t=J("Radio"),m=ee("Radio"),P=i.useId(),b=Pe(),v=he(),{id:l=b||`headlessui-radio-${P}`,value:f,disabled:c=t.disabled||v||!1,autoFocus:h=!1,...G}=a,j=i.useRef(null),g=X(j,s),R=ze(),C=Te(),o=pe({value:f,disabled:c});ue(()=>m.registerOption({id:l,element:j,propsRef:o}),[l,m,j,o]);let z=L(N=>{var k;if(fe(N.currentTarget))return N.preventDefault();m.change(f)&&((k=j.current)==null||k.focus())}),{isFocusVisible:E,focusProps:D}=le({autoFocus:h}),{isHovered:T,hoverProps:w}=ce({isDisabled:c}),I=((r=t.firstOption)==null?void 0:r.id)===l,p=t.compare(t.value,f),u=me({ref:g,id:l,role:"radio","aria-checked":p?"true":"false","aria-labelledby":R,"aria-describedby":C,"aria-disabled":c?!0:void 0,tabIndex:c?-1:p||!t.containsCheckedOption&&I?t.tabIndex:-1,autoFocus:h,onClick:c?void 0:z},D,w),$=q({checked:p,disabled:c,hover:T,focus:E,autofocus:h});return Q()({ourProps:u,theirProps:G,slot:$,defaultTag:Ve,name:"Radio"})}let Ye=Y(Ae),qe=Y(Me),F=Y(Ke),Qe=O,Xe=ge,A=Object.assign(Ye,{Option:qe,Radio:F,Label:Qe,Description:Xe});const ie=[{name:"Startup",ram:"12GB",cpus:"6 CPUs",disk:"256GB SSD disk"},{name:"Business",ram:"16GB",cpus:"8 CPUs",disk:"512GB SSD disk"},{name:"Enterprise",ram:"32GB",cpus:"12 CPUs",disk:"1TB SSD disk"}],Ze=()=>{const[a,s]=i.useState(ie[0]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"mx-auto w-full",children:e.jsx(A,{value:a,onChange:s,"aria-label":"Server size",className:"space-y-4",children:ie.map(r=>e.jsx(F,{value:r,className:"group relative flex cursor-pointer rounded-md bg-lightgray dark:bg-dark py-4 px-5 text-ld shadow-md transition focus:outline-hidden data-focus:outline-1 data-focus:outline-primary data-checked:bg-primary dark:data-checked:bg-primary",children:e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsxs("div",{className:"text-sm",children:[e.jsx("p",{className:"font-semibold text-ld text-base group-data-checked:text-white",children:r.name}),e.jsxs("div",{className:"flex gap-2 text-bodytext text-sm group-data-checked:text-white/50",children:[e.jsx("div",{children:r.ram}),e.jsx("div",{"aria-hidden":"true",children:"·"}),e.jsx("div",{children:r.cpus}),e.jsx("div",{"aria-hidden":"true",children:"·"}),e.jsx("div",{children:r.disk})]})]}),e.jsx(Ge,{icon:"solar:check-circle-linear",height:20,className:"opacity-0 transition group-data-checked:opacity-100 text-white"})]})},r.name))})})})})},Je=`import { useState } from 'react'\r
import { Icon } from "@iconify/react";\r
import { Radio, RadioGroup } from '@headlessui/react';\r
\r
const plans = [\r
  { name: 'Startup', ram: '12GB', cpus: '6 CPUs', disk: '256GB SSD disk' },\r
  { name: 'Business', ram: '16GB', cpus: '8 CPUs', disk: '512GB SSD disk' },\r
  { name: 'Enterprise', ram: '32GB', cpus: '12 CPUs', disk: '1TB SSD disk' },\r
]\r
\r
const BasicRadioGroupCode = () => {\r
  const [selected, setSelected] = useState(plans[0])\r
  return (\r
    <>\r
    <div className="mt-4">\r
        <div className="mx-auto w-full">\r
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-4" >\r
          {plans.map((plan) => (\r
            <Radio\r
              key={plan.name}\r
              value={plan}\r
              className="group relative flex cursor-pointer rounded-md bg-lightgray dark:bg-dark py-4 px-5 text-ld shadow-md transition focus:outline-hidden data-focus:outline-1 data-focus:outline-primary data-checked:bg-primary dark:data-checked:bg-primary"\r
            >\r
              <div className="flex w-full items-center justify-between">\r
                <div className="text-sm">\r
                  <p className="font-semibold text-ld text-base group-data-checked:text-white">{plan.name}</p>\r
                  <div className="flex gap-2 text-bodytext text-sm group-data-checked:text-white/50">\r
                    <div>{plan.ram}</div>\r
                    <div aria-hidden="true">&middot;</div>\r
                    <div>{plan.cpus}</div>\r
                    <div aria-hidden="true">&middot;</div>\r
                    <div>{plan.disk}</div>\r
                  </div>\r
                </div>\r
                \r
                <Icon icon="solar:check-circle-linear" height={20} className="opacity-0 transition group-data-checked:opacity-100 text-white"/>\r
              </div>\r
            </Radio>\r
          ))}\r
        </RadioGroup>\r
      </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default BasicRadioGroupCode;\r
`,_e=()=>e.jsx("div",{children:e.jsx(W,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Styling Radio Group"}),e.jsx(Ze,{})]}),e.jsx(M,{children:Je})]})})}),te=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend"],er=()=>{const[,a]=i.useState(te[0]);return e.jsx("div",{children:e.jsxs(W,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Disabled Radio Group "})}),e.jsx(A,{onChange:a,"aria-label":"Server size",className:"flex flex-col gap-3",children:te.map(s=>e.jsxs(V,{className:"flex items-center gap-3 ",children:[e.jsx(F,{disabled:!0,value:s,className:"group cursor-not-allowed flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-checked:visible"})}),e.jsx(O,{className:"text-sm text-ld cursor-pointer opacity-50",children:s})]},s))})]})})},ne=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend"],rr=()=>{const[a,s]=i.useState(ne[0]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx(A,{value:a,onChange:s,"aria-label":"Server size",className:"flex flex-col gap-3",children:ne.map(r=>e.jsxs(V,{className:"flex items-center gap-3",children:[e.jsx(F,{value:r,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-checked:visible"})}),e.jsx(O,{className:"text-sm text-ld cursor-pointer",children:r})]},r))})})})},ar=`import { Field, Label, Radio, RadioGroup } from "@headlessui/react";\r
import { useState } from "react";\r
const plans = [\r
  "Developing",\r
  "Designing",\r
  "Coding",\r
  "Graphics Design",\r
  "Accounting",\r
  "Frontend",\r
];\r
\r
const MainRadioGroupCode = () => {\r
   const [selected, setSelected] = useState(plans[0]);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <RadioGroup\r
          value={selected}\r
          onChange={setSelected}\r
          \r
          aria-label="Server size"\r
          className="flex flex-col gap-3"\r
        >\r
          {plans.map((plan) => (\r
            <Field key={plan} className="flex items-center gap-3">\r
              <Radio\r
                value={plan}\r
                className="group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0"\r
              >\r
                <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />\r
              </Radio>\r
              <Label className="text-sm text-ld cursor-pointer">{plan}</Label>\r
            </Field>\r
          ))}\r
        </RadioGroup>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default MainRadioGroupCode;\r
`,sr=()=>e.jsx("div",{children:e.jsx(W,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Simple Radio Group "}),e.jsx(rr,{})]}),e.jsx(M,{children:ar})]})})}),oe=[{name:"Startup",description:"12GB, 6 CPUs, 256GB SSD disk"},{name:"Business",description:"16GB, 8 CPUs, 512GB SSD disk"},{name:"Enterprise",description:"32GB, 12 CPUs, 1TB SSD disk"}],ir=()=>{const[a,s]=i.useState(oe[0]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx(A,{value:a,onChange:s,"aria-label":"Server size",className:"flex flex-col gap-3",children:oe.map(r=>e.jsxs(V,{className:"flex items-center gap-3 bg-lightgray dark:bg-dark py-2 px-4 rounded-md ",children:[e.jsx(F,{value:r,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-checked:visible "})}),e.jsxs("div",{children:[e.jsx(O,{className:"text-ld cursor-pointer",children:r.name}),e.jsx(ge,{className:"text-bodytext text-xs",children:r.description})]})]},r.name))})})})},tr=`import {\r
  Description,\r
  Field,\r
  Label,\r
  Radio,\r
  RadioGroup,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
const plans = [\r
  { name: "Startup", description: "12GB, 6 CPUs, 256GB SSD disk" },\r
  { name: "Business", description: "16GB, 8 CPUs, 512GB SSD disk" },\r
  { name: "Enterprise", description: "32GB, 12 CPUs, 1TB SSD disk" },\r
];\r
\r
const RadioGroupWithDescCode = () => {\r
  const [selected, setSelected] = useState(plans[0]);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <RadioGroup\r
          value={selected}\r
          onChange={setSelected}\r
          aria-label="Server size"\r
          className="flex flex-col gap-3"\r
        >\r
          {plans.map((plan) => (\r
            <Field key={plan.name} className="flex items-center gap-3 bg-lightgray dark:bg-dark py-2 px-4 rounded-md ">\r
              <Radio\r
                value={plan}\r
                className="group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0"\r
              >\r
                <span className="invisible size-2 rounded-full bg-white group-data-checked:visible " />\r
              </Radio>\r
              <div >\r
                <Label className="text-ld cursor-pointer">{plan.name}</Label>\r
                <Description className="text-bodytext text-xs">\r
                  {plan.description}\r
                </Description>\r
              </div>\r
            </Field>\r
          ))}\r
        </RadioGroup>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default RadioGroupWithDescCode\r
`,nr=()=>e.jsx("div",{children:e.jsx(W,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Description"}),e.jsx(ir,{})]}),e.jsx(M,{children:tr})]})})}),de=["Developing","Designing","Coding","Graphics Design","Accounting","Frontend","Seo"],or=()=>{const[a,s]=i.useState(de[0]);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("form",{action:"/plans",method:"post",children:[e.jsx(A,{value:a,onChange:s,"aria-label":"Server size",className:"flex flex-col gap-3",children:de.map(r=>e.jsxs(V,{className:"flex items-center gap-3",children:[e.jsx(F,{value:r,className:"group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0",children:e.jsx("span",{className:"invisible size-2 rounded-full bg-white group-data-checked:visible"})}),e.jsx(O,{className:"text-sm text-ld cursor-pointer",children:r})]},r))}),e.jsxs("div",{className:"flex gap-3 mt-4",children:[e.jsx("button",{className:"ui-button bg-primary",children:"Submit"}),e.jsx("button",{className:"ui-button bg-error",children:"Cancel"})]})]})})})},dr=`import {\r
  Field,\r
  Label,\r
  Radio,\r
  RadioGroup,\r
} from "@headlessui/react";\r
import { useState } from "react";\r
const plans = [\r
  "Developing",\r
  "Designing",\r
  "Coding",\r
  "Graphics Design",\r
  "Accounting",\r
  "Frontend",\r
  "Seo",\r
];\r
\r
\r
const WithHtmlRadioFormCode = () => {\r
  const [selected, setSelected] = useState(plans[0]);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <form action="/plans" method="post">\r
          <RadioGroup\r
            value={selected}\r
            onChange={setSelected}\r
            aria-label="Server size"\r
            className="flex flex-col gap-3"\r
          >\r
            {plans.map((plan) => (\r
              <Field key={plan} className="flex items-center gap-3">\r
                <Radio\r
                  value={plan}\r
                  className="group cursor-pointer flex size-5 items-center justify-center rounded-full border border-ld bg-white dark:bg-transparent data-checked:bg-primary dark:data-checked:bg-primary outline-0"\r
                >\r
                  <span className="invisible size-2 rounded-full bg-white group-data-checked:visible" />\r
                </Radio>\r
                <Label className="text-sm text-ld cursor-pointer">{plan}</Label>\r
              </Field>\r
            ))}\r
          </RadioGroup>\r
          <div className="flex gap-3 mt-4">\r
            <button className="ui-button bg-primary">Submit</button>\r
            <button className="ui-button bg-error">Cancel</button>\r
          </div>\r
        </form>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default WithHtmlRadioFormCode\r
`,lr=()=>e.jsx("div",{children:e.jsx(W,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With HTML forms"}),e.jsx(or,{})]}),e.jsx(M,{children:dr})]})})}),cr=[{to:"/",title:"Home"},{title:"RadioGRoup"}],Ar=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ie,{title:"Radio Group",items:cr}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(sr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(nr,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(er,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(_e,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(lr,{})})]})]});export{Ar as default};
