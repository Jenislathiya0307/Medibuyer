import{r as d,j as e,E as z,P as K,I as P,V as G,K as T,J as I,z as R,_ as J}from"./index-n5lagw8Y.js";import{C as w}from"./CodeDialog-BcgW2Qgx.js";import{C as y}from"./CardBox-DP5V6wyZ.js";import{u as V}from"./index-lY_th_iT.js";import{u as X}from"./index-BZ3HTsYl.js";import{C as Q}from"./check-B0zkRfLc.js";import{u as Z,F as ee,a as _,b as B,e as se,d as te,c as re,f as ce,t as ne,o as ae,g as le,s as ie}from"./form-DkIlE4ZK.js";import{B as oe}from"./button-BnqkFln5.js";import{B as de}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./label-DSxQPywz.js";import"./chevron-right-icon-BGQVsHY5.js";var g="Checkbox",[me]=z(g),[xe,S]=me(g);function he(s){const{__scopeCheckbox:c,checked:t,children:n,defaultChecked:l,disabled:r,form:p,name:u,onCheckedChange:m,required:f,value:v="on",internal_do_not_use_render:x}=s,[h,N]=G({prop:t,defaultProp:l??!1,onChange:m,caller:g}),[j,C]=d.useState(null),[k,i]=d.useState(null),o=d.useRef(!1),F=j?!!p||!!j.closest("form"):!0,D={checked:h,disabled:r,setChecked:N,control:j,setControl:C,name:u,form:p,value:v,hasConsumerStoppedPropagationRef:o,required:f,defaultChecked:b(l)?!1:l,isFormControl:F,bubbleInput:k,setBubbleInput:i};return e.jsx(xe,{scope:c,...D,children:pe(x)?x(D):n})}var L="CheckboxTrigger",M=d.forwardRef(({__scopeCheckbox:s,onKeyDown:c,onClick:t,...n},l)=>{const{control:r,value:p,disabled:u,checked:m,required:f,setControl:v,setChecked:x,hasConsumerStoppedPropagationRef:h,isFormControl:N,bubbleInput:j}=S(L,s),C=T(l,v),k=d.useRef(m);return d.useEffect(()=>{const i=r?.form;if(i){const o=()=>x(k.current);return i.addEventListener("reset",o),()=>i.removeEventListener("reset",o)}},[r,x]),e.jsx(P.button,{type:"button",role:"checkbox","aria-checked":b(m)?"mixed":m,"aria-required":f,"data-state":W(m),"data-disabled":u?"":void 0,disabled:u,value:p,...n,ref:C,onKeyDown:I(c,i=>{i.key==="Enter"&&i.preventDefault()}),onClick:I(t,i=>{x(o=>b(o)?!0:!o),j&&N&&(h.current=i.isPropagationStopped(),h.current||i.stopPropagation())})})});M.displayName=L;var A=d.forwardRef((s,c)=>{const{__scopeCheckbox:t,name:n,checked:l,defaultChecked:r,required:p,disabled:u,value:m,onCheckedChange:f,form:v,...x}=s;return e.jsx(he,{__scopeCheckbox:t,checked:l,defaultChecked:r,disabled:u,required:p,onCheckedChange:f,name:n,form:v,value:m,internal_do_not_use_render:({isFormControl:h})=>e.jsxs(e.Fragment,{children:[e.jsx(M,{...x,ref:c,__scopeCheckbox:t}),h&&e.jsx(U,{__scopeCheckbox:t})]})})});A.displayName=g;var q="CheckboxIndicator",H=d.forwardRef((s,c)=>{const{__scopeCheckbox:t,forceMount:n,...l}=s,r=S(q,t);return e.jsx(K,{present:n||b(r.checked)||r.checked===!0,children:e.jsx(P.span,{"data-state":W(r.checked),"data-disabled":r.disabled?"":void 0,...l,ref:c,style:{pointerEvents:"none",...s.style}})})});H.displayName=q;var O="CheckboxBubbleInput",U=d.forwardRef(({__scopeCheckbox:s,...c},t)=>{const{control:n,hasConsumerStoppedPropagationRef:l,checked:r,defaultChecked:p,required:u,disabled:m,name:f,value:v,form:x,bubbleInput:h,setBubbleInput:N}=S(O,s),j=T(t,N),C=V(r),k=X(n);d.useEffect(()=>{const o=h;if(!o)return;const F=window.HTMLInputElement.prototype,E=Object.getOwnPropertyDescriptor(F,"checked").set,Y=!l.current;if(C!==r&&E){const $=new Event("click",{bubbles:Y});o.indeterminate=b(r),E.call(o,b(r)?!1:r),o.dispatchEvent($)}},[h,C,r,l]);const i=d.useRef(b(r)?!1:r);return e.jsx(P.input,{type:"checkbox","aria-hidden":!0,defaultChecked:p??i.current,required:u,disabled:m,name:f,value:v,form:x,...c,tabIndex:-1,ref:j,style:{...c.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});U.displayName=O;function pe(s){return typeof s=="function"}function b(s){return s==="indeterminate"}function W(s){return b(s)?"indeterminate":s?"checked":"unchecked"}const a=d.forwardRef(({className:s,...c},t)=>e.jsx(A,{ref:t,className:R("peer h-[18px] w-[18px] shrink-0 rounded-[4px] border-[1.5px] border-ld  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-white",s),...c,children:e.jsx(H,{className:R("flex items-center justify-center text-current"),children:e.jsx(Q,{className:"h-4 w-4"})})}));a.displayName=A.displayName;const ue=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-3 m-4",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms"}),e.jsx("label",{htmlFor:"terms",className:"text-ld",children:"Accept terms and conditions"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"privacy"}),e.jsx("label",{htmlFor:"privacy",className:"text-ld",children:"Accept privacy policy"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"continue"}),e.jsx("label",{htmlFor:"continue",className:"text-ld",children:"Continue to process?"})]})]})}),be=`import { Checkbox } from "src/components/shadcn-ui/Default-Ui/checkbox";\r
\r
\r
const CheckboxLabelCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-3 m-4">\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="terms" />\r
          <label htmlFor="terms" className="text-ld">\r
            Accept terms and conditions\r
          </label>\r
        </div>\r
\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="privacy" />\r
          <label htmlFor="privacy" className="text-ld">\r
            Accept privacy policy\r
          </label>\r
        </div>\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="continue" />\r
          <label htmlFor="continue" className="text-ld">\r
             Continue to process?\r
          </label>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default CheckboxLabelCode`,fe=()=>e.jsx(y,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"With Label"}),e.jsx(ue,{})]}),e.jsx(w,{children:be})]})}),ve=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms11",checked:!0}),e.jsx("label",{htmlFor:"terms11",className:"text-ld",children:"Accept terms and conditions"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"privacy22",checked:!0}),e.jsx("label",{htmlFor:"privacy22",className:"text-ld",children:"Accept privacy policy"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"continue33",checked:!0}),e.jsx("label",{htmlFor:"continue33",className:"text-ld",children:"Continue to process?"})]})]})})}),je=`import { Checkbox } from "src/components/shadcn-ui/Default-Ui/checkbox";\r
\r
\r
const DefaultCheckCode = () => {\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <div className="flex flex-col gap-3">\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="terms11" checked />\r
          <label htmlFor="terms11" className="text-ld">\r
            Accept terms and conditions\r
          </label>\r
        </div>\r
\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="privacy22" checked />\r
          <label htmlFor="privacy22" className="text-ld">\r
            Accept privacy policy\r
          </label>\r
        </div>\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="continue33" checked />\r
          <label htmlFor="continue33" className="text-ld">\r
             Continue to process?\r
          </label>\r
        </div>\r
      </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DefaultCheckCode`,Ce=()=>e.jsx(y,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Checked"}),e.jsx(ve,{})]}),e.jsx(w,{children:je})]})}),Ne=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"terms1",disabled:!0}),e.jsx("label",{htmlFor:"terms1",className:"text-ld",children:"Accept terms and conditions"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"privacy2",disabled:!0}),e.jsx("label",{htmlFor:"privacy2",className:"text-ld",children:"Accept privacy policy"})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(a,{id:"continue3",disabled:!0}),e.jsx("label",{htmlFor:"continue3",className:"text-ld",children:"Continue to process?"})]})]})})}),ke=`import { Checkbox } from "src/components/shadcn-ui/Default-Ui/checkbox";\r
\r
\r
const DisabledCheckCode = () => {\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <div className="flex flex-col gap-3">\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="terms1" disabled />\r
          <label htmlFor="terms1" className="text-ld">\r
            Accept terms and conditions\r
          </label>\r
        </div>\r
\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="privacy2" disabled />\r
          <label htmlFor="privacy2" className="text-ld">\r
            Accept privacy policy\r
          </label>\r
        </div>\r
        <div className="flex items-center space-x-2">\r
          <Checkbox id="continue3" disabled />\r
          <label htmlFor="continue3" className="text-ld">\r
            Continue to process?\r
          </label>\r
        </div>\r
      </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DisabledCheckCode`,ye=()=>e.jsx(y,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disables"}),e.jsx(Ne,{})]}),e.jsx(w,{children:ke})]})}),ge=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],Fe=ae({items:le(ie()).refine(s=>s.some(c=>c),{message:"You have to select at least one item."})}),De=()=>{const s=Z({resolver:ne(Fe),defaultValues:{items:["recents","home"]}});function c(t){J({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(t,null,2)})})})}return e.jsxs(y,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"With Form"})}),e.jsx(ee,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(c),className:"space-y-8",children:[e.jsx(_,{control:s.control,name:"items",render:()=>e.jsxs(B,{children:[e.jsx("div",{className:"mb-4",children:e.jsx(se,{children:"Select the items you want to display in the sidebar."})}),ge.map(t=>e.jsx(_,{control:s.control,name:"items",render:({field:n})=>e.jsxs(B,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(te,{children:e.jsx(a,{checked:n.value?.includes(t.id),onCheckedChange:l=>l?n.onChange([...n.value,t.id]):n.onChange(n.value?.filter(r=>r!==t.id))})}),e.jsx(re,{className:"font-normal",children:t.label})]},t.id)},t.id)),e.jsx(ce,{})]})}),e.jsx(oe,{type:"submit",children:"Submit"})]})})]})},Pe=()=>e.jsxs(y,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"With Text"})}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(a,{id:"term"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"term",className:"text-ld",children:"Accept terms and conditions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]}),e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(a,{id:"privacy2"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"privacy2",className:"text-ld",children:"Accept privacy policy"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]}),e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(a,{id:"continue3"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"continue3",className:"text-ld",children:"Continue to process?"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"You agree to our Terms of Service and Privacy Policy."})]})]}),e.jsxs("div",{className:"items-top flex space-x-2",children:[e.jsx(a,{id:"act3"}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"act3",className:"text-ld",children:"Accept terms"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"})]})]})]})]}),we=[{to:"/",title:"Home"},{title:"Checkbox"}],Xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(de,{title:"Checkbox",items:we}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ce,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ye,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(De,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Pe,{})})]})]});export{Xe as default};
