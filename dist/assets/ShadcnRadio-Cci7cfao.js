import{r as i,V as J,j as e,E as L,I as y,K as G,J as I,P as W,z as D,_ as X}from"./index-n5lagw8Y.js";import{C as E}from"./CodeDialog-BcgW2Qgx.js";import{C as k}from"./CardBox-DP5V6wyZ.js";import{L as j}from"./label-DSxQPywz.js";import{c as _,R as Q,I as Z}from"./index-j3ZgslDB.js";import{u as ee}from"./index-BF9WrqdZ.js";import{u as re}from"./index-BZ3HTsYl.js";import{u as oe}from"./index-lY_th_iT.js";import{C as ae}from"./circle-BHpdX8NN.js";import{o as se,h as ne,u as te,t as ie,F as le,a as ce,b as N,c as F,d as g,f as me}from"./form-DkIlE4ZK.js";import{B as de}from"./button-BnqkFln5.js";import{B as ue}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./index-BtMSilTf.js";import"./chevron-right-icon-BGQVsHY5.js";var w="Radio",[pe,P]=L(w),[fe,xe]=pe(w),A=i.forwardRef((o,a)=>{const{__scopeRadio:r,name:n,checked:s=!1,required:t,disabled:l,value:p="on",onCheck:f,form:x,...h}=o,[d,v]=i.useState(null),c=G(a,b=>v(b)),m=i.useRef(!1),R=d?x||!!d.closest("form"):!0;return e.jsxs(fe,{scope:r,checked:s,disabled:l,children:[e.jsx(y.button,{type:"button",role:"radio","aria-checked":s,"data-state":V(s),"data-disabled":l?"":void 0,disabled:l,value:p,...h,ref:c,onClick:I(o.onClick,b=>{s||f?.(),R&&(m.current=b.isPropagationStopped(),m.current||b.stopPropagation())})}),R&&e.jsx(B,{control:d,bubbles:!m.current,name:n,value:p,checked:s,required:t,disabled:l,form:x,style:{transform:"translateX(-100%)"}})]})});A.displayName=w;var z="RadioIndicator",M=i.forwardRef((o,a)=>{const{__scopeRadio:r,forceMount:n,...s}=o,t=xe(z,r);return e.jsx(W,{present:n||t.checked,children:e.jsx(y.span,{"data-state":V(t.checked),"data-disabled":t.disabled?"":void 0,...s,ref:a})})});M.displayName=z;var he="RadioBubbleInput",B=i.forwardRef(({__scopeRadio:o,control:a,checked:r,bubbles:n=!0,...s},t)=>{const l=i.useRef(null),p=G(l,t),f=oe(r),x=re(a);return i.useEffect(()=>{const h=l.current;if(!h)return;const d=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(d,"checked").set;if(f!==r&&c){const m=new Event("click",{bubbles:n});c.call(h,r),h.dispatchEvent(m)}},[f,r,n]),e.jsx(y.input,{type:"radio","aria-hidden":!0,defaultChecked:r,...s,tabIndex:-1,ref:p,style:{...s.style,...x,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});B.displayName=he;function V(o){return o?"checked":"unchecked"}var ve=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C="RadioGroup",[Re]=L(C,[_,P]),O=_(),U=P(),[be,je]=Re(C),q=i.forwardRef((o,a)=>{const{__scopeRadioGroup:r,name:n,defaultValue:s,value:t,required:l=!1,disabled:p=!1,orientation:f,dir:x,loop:h=!0,onValueChange:d,...v}=o,c=O(r),m=ee(x),[R,b]=J({prop:t,defaultProp:s??null,onChange:d,caller:C});return e.jsx(be,{scope:r,name:n,required:l,disabled:p,value:R,onValueChange:b,children:e.jsx(Q,{asChild:!0,...c,orientation:f,dir:m,loop:h,children:e.jsx(y.div,{role:"radiogroup","aria-required":l,"aria-orientation":f,"data-disabled":p?"":void 0,dir:m,...v,ref:a})})})});q.displayName=C;var T="RadioGroupItem",K=i.forwardRef((o,a)=>{const{__scopeRadioGroup:r,disabled:n,...s}=o,t=je(T,r),l=t.disabled||n,p=O(r),f=U(r),x=i.useRef(null),h=G(a,x),d=t.value===s.value,v=i.useRef(!1);return i.useEffect(()=>{const c=R=>{ve.includes(R.key)&&(v.current=!0)},m=()=>v.current=!1;return document.addEventListener("keydown",c),document.addEventListener("keyup",m),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",m)}},[]),e.jsx(Z,{asChild:!0,...p,focusable:!l,active:d,children:e.jsx(A,{disabled:l,required:t.required,checked:d,...f,...s,name:t.name,ref:h,onCheck:()=>t.onValueChange(s.value),onKeyDown:I(c=>{c.key==="Enter"&&c.preventDefault()}),onFocus:I(s.onFocus,()=>{v.current&&x.current?.click()})})})});K.displayName=T;var Ne="RadioGroupIndicator",Y=i.forwardRef((o,a)=>{const{__scopeRadioGroup:r,...n}=o,s=U(r);return e.jsx(M,{...s,...n,ref:a})});Y.displayName=Ne;var $=q,H=K,Fe=Y;const S=i.forwardRef(({className:o,...a},r)=>e.jsx($,{className:D("grid gap-2",o),...a,ref:r}));S.displayName=$.displayName;const u=i.forwardRef(({className:o,...a},r)=>e.jsx(H,{ref:r,className:D("aspect-square h-4 w-4 rounded-full border border-ld text-primary ring-offset-white focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50   dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",o),...a,children:e.jsx(Fe,{className:"flex items-center justify-center",children:e.jsx(ae,{className:"h-2.5 w-2.5 fill-current text-current"})})}));u.displayName=H.displayName;const ge=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(S,{defaultValue:"comfortable",children:[e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"default",id:"r1"}),e.jsx(j,{htmlFor:"r1",className:"font-normal",children:"Default"})]}),e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"comfortable",id:"r2"}),e.jsx(j,{htmlFor:"r2",className:"font-normal",children:" Comfortable"})]}),e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"compact",id:"r3"}),e.jsx(j,{htmlFor:"r3",className:"font-normal",children:"Compact"})]}),e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"digital",id:"r4"}),e.jsx(j,{htmlFor:"r4",className:"font-normal",children:"Digital"})]}),e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"Enlarge",id:"r5"}),e.jsx(j,{htmlFor:"r5",className:"font-normal",children:"Enlarge"})]}),e.jsxs("div",{className:"flex items-top space-x-2",children:[e.jsx(u,{value:"Maximize",id:"r6"}),e.jsx(j,{htmlFor:"r6",className:"font-normal",children:"Maximize"})]})]})})}),ye=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import {\r
  RadioGroup,\r
  RadioGroupItem,\r
} from "src/components/shadcn-ui/Default-Ui/radio-group";\r
\r
\r
const DefaultRadioCode = () => {\r
  return (\r
    <>\r
      <div className="mt-4">\r
        <RadioGroup defaultValue="comfortable">\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="default" id="r1" />\r
          <Label htmlFor="r1" className="font-normal">Default</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="comfortable" id="r2" />\r
          <Label htmlFor="r2" className="font-normal"> Comfortable</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="compact" id="r3" />\r
          <Label htmlFor="r3" className="font-normal">Compact</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="digital" id="r4" />\r
          <Label htmlFor="r4" className="font-normal">Digital</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="Enlarge" id="r5" />\r
          <Label htmlFor="r5" className="font-normal">Enlarge</Label>\r
        </div>\r
        <div className="flex items-top space-x-2">\r
          <RadioGroupItem value="Maximize" id="r6" />\r
          <Label htmlFor="r6" className="font-normal">Maximize</Label>\r
        </div>\r
      </RadioGroup>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DefaultRadioCode`,Ce=()=>e.jsx(k,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Radio Group"}),e.jsx(ge,{})]}),e.jsx(E,{children:ye})]})}),Ie=()=>{const o=se({type:ne(["all","mentions","none"],{required_error:"You need to select a notification type."})}),a=te({resolver:ie(o)});function r(n){X({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(n,null,2)})})})}return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(le,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(r),className:"space-y-6",children:[e.jsx(ce,{control:a.control,name:"type",render:({field:n})=>e.jsxs(N,{className:"space-y-3",children:[e.jsx(F,{children:"Notify me about..."}),e.jsx(g,{children:e.jsxs(S,{onValueChange:n.onChange,defaultValue:n.value,className:"flex flex-col space-y-1",children:[e.jsxs(N,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(g,{children:e.jsx(u,{value:"all"})}),e.jsx(F,{className:"font-normal",children:"All new messages"})]}),e.jsxs(N,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(g,{children:e.jsx(u,{value:"mentions"})}),e.jsx(F,{className:"font-normal",children:"Direct messages and mentions"})]}),e.jsxs(N,{className:"flex items-center space-x-3 space-y-0",children:[e.jsx(g,{children:e.jsx(u,{value:"none"})}),e.jsx(F,{className:"font-normal",children:"Nothing"})]})]})}),e.jsx(me,{})]})}),e.jsx(de,{type:"submit",children:"Submit"})]})})})})},Ge=`import { zodResolver } from "@hookform/resolvers/zod";\r
import { useForm } from "react-hook-form";\r
import { z } from "zod";\r
\r
import { toast } from "src/hooks/use-toast";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import {\r
  Form,\r
  FormControl,\r
  FormField,\r
  FormItem,\r
  FormLabel,\r
  FormMessage,\r
} from "src/components/shadcn-ui/Default-Ui/form";\r
import {\r
  RadioGroup,\r
  RadioGroupItem,\r
} from "src/components/shadcn-ui/Default-Ui/radio-group";\r
\r
\r
const FormRadioCode = () => {\r
  const FormSchema = z.object({\r
    type: z.enum(["all", "mentions", "none"], {\r
      required_error: "You need to select a notification type.",\r
    }),\r
  });\r
  const form = useForm<z.infer<typeof FormSchema>>({\r
    resolver: zodResolver(FormSchema),\r
  });\r
   function onSubmit(data: z.infer<typeof FormSchema>) {\r
    toast({\r
      title: "You submitted the following values:",\r
      description: (\r
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">\r
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>\r
        </pre>\r
      ),\r
    });\r
  }\r
  return (\r
    <>\r
      <div>\r
        <Form {...form}>\r
        <form\r
          onSubmit={form.handleSubmit(onSubmit)}\r
          className="space-y-6"\r
        >\r
          <FormField\r
            control={form.control}\r
            name="type"\r
            render={({ field }) => (\r
              <FormItem className="space-y-3">\r
                <FormLabel>Notify me about...</FormLabel>\r
                <FormControl>\r
                  <RadioGroup\r
                    onValueChange={field.onChange}\r
                    defaultValue={field.value}\r
                    className="flex flex-col space-y-1"\r
                  >\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="all" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">\r
                        All new messages\r
                      </FormLabel>\r
                    </FormItem>\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="mentions" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">\r
                        Direct messages and mentions\r
                      </FormLabel>\r
                    </FormItem>\r
                    <FormItem className="flex items-center space-x-3 space-y-0">\r
                      <FormControl>\r
                        <RadioGroupItem value="none" />\r
                      </FormControl>\r
                      <FormLabel className="font-normal">Nothing</FormLabel>\r
                    </FormItem>\r
                  </RadioGroup>\r
                </FormControl>\r
                <FormMessage />\r
              </FormItem>\r
            )}\r
          />\r
          <Button type="submit">Submit</Button>\r
        </form>\r
      </Form>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default FormRadioCode`,we=()=>e.jsx(k,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Form Radio Group"}),e.jsx(Ie,{})]}),e.jsx(E,{children:Ge})]})}),Se=[{to:"/",title:"Home"},{title:"Radio"}],rr=()=>e.jsxs(e.Fragment,{children:[e.jsx(ue,{title:"Radio",items:Se}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Ce,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(we,{})})]})]});export{rr as default};
