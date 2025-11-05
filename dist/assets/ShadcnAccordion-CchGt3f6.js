import{R as d,j as e,G as re,V,E as te,I as H,K as ce,J as ne,r as k,z as D}from"./index-n5lagw8Y.js";import{C as ie}from"./CardBox-DP5V6wyZ.js";import{C as ae}from"./CodeDialog-BcgW2Qgx.js";import{c as Y,R as se,T as de,b as le}from"./index-Cu6YJtGU.js";import{u as me}from"./index-BtMSilTf.js";import{u as pe}from"./index-BF9WrqdZ.js";import{C as ue}from"./chevron-down-DKv7O7MN.js";import{B as fe}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";var l="Accordion",xe=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[S,Ae,he]=re(l),[I]=te(l,[he,Y]),O=Y(),K=d.forwardRef((r,n)=>{const{type:o,...c}=r,i=c,t=c;return e.jsx(S.Provider,{scope:r.__scopeAccordion,children:o==="multiple"?e.jsx(Ce,{...t,ref:n}):e.jsx(be,{...i,ref:n})})});K.displayName=l;var[$,ve]=I(l),[z,ge]=I(l,{collapsible:!1}),be=d.forwardRef((r,n)=>{const{value:o,defaultValue:c,onValueChange:i=()=>{},collapsible:t=!1,...s}=r,[a,m]=V({prop:o,defaultProp:c??"",onChange:i,caller:l});return e.jsx($,{scope:r.__scopeAccordion,value:d.useMemo(()=>a?[a]:[],[a]),onItemOpen:m,onItemClose:d.useCallback(()=>t&&m(""),[t,m]),children:e.jsx(z,{scope:r.__scopeAccordion,collapsible:t,children:e.jsx(G,{...s,ref:n})})})}),Ce=d.forwardRef((r,n)=>{const{value:o,defaultValue:c,onValueChange:i=()=>{},...t}=r,[s,a]=V({prop:o,defaultProp:c??[],onChange:i,caller:l}),m=d.useCallback(x=>a((u=[])=>[...u,x]),[a]),f=d.useCallback(x=>a((u=[])=>u.filter(N=>N!==x)),[a]);return e.jsx($,{scope:r.__scopeAccordion,value:s,onItemOpen:m,onItemClose:f,children:e.jsx(z,{scope:r.__scopeAccordion,collapsible:!0,children:e.jsx(G,{...t,ref:n})})})}),[Ie,j]=I(l),G=d.forwardRef((r,n)=>{const{__scopeAccordion:o,disabled:c,dir:i,orientation:t="vertical",...s}=r,a=d.useRef(null),m=ce(a,n),f=Ae(o),u=pe(i)==="ltr",N=ne(r.onKeyDown,A=>{if(!xe.includes(A.key))return;const ee=A.target,w=f().filter(T=>!T.ref.current?.disabled),h=w.findIndex(T=>T.ref.current===ee),M=w.length;if(h===-1)return;A.preventDefault();let p=h;const y=0,R=M-1,_=()=>{p=h+1,p>R&&(p=y)},P=()=>{p=h-1,p<y&&(p=R)};switch(A.key){case"Home":p=y;break;case"End":p=R;break;case"ArrowRight":t==="horizontal"&&(u?_():P());break;case"ArrowDown":t==="vertical"&&_();break;case"ArrowLeft":t==="horizontal"&&(u?P():_());break;case"ArrowUp":t==="vertical"&&P();break}const oe=p%M;w[oe].ref.current?.focus()});return e.jsx(Ie,{scope:o,disabled:c,direction:i,orientation:t,children:e.jsx(S.Slot,{scope:o,children:e.jsx(H.div,{...s,"data-orientation":t,ref:m,onKeyDown:c?void 0:N})})})}),C="AccordionItem",[je,B]=I(C),L=d.forwardRef((r,n)=>{const{__scopeAccordion:o,value:c,...i}=r,t=j(C,o),s=ve(C,o),a=O(o),m=me(),f=c&&s.value.includes(c)||!1,x=t.disabled||r.disabled;return e.jsx(je,{scope:o,open:f,disabled:x,triggerId:m,children:e.jsx(se,{"data-orientation":t.orientation,"data-state":Q(f),...a,...i,ref:n,disabled:x,open:f,onOpenChange:u=>{u?s.onItemOpen(c):s.onItemClose(c)}})})});L.displayName=C;var U="AccordionHeader",F=d.forwardRef((r,n)=>{const{__scopeAccordion:o,...c}=r,i=j(l,o),t=B(U,o);return e.jsx(H.h3,{"data-orientation":i.orientation,"data-state":Q(t.open),"data-disabled":t.disabled?"":void 0,...c,ref:n})});F.displayName=U;var E="AccordionTrigger",W=d.forwardRef((r,n)=>{const{__scopeAccordion:o,...c}=r,i=j(l,o),t=B(E,o),s=ge(E,o),a=O(o);return e.jsx(S.ItemSlot,{scope:o,children:e.jsx(de,{"aria-disabled":t.open&&!s.collapsible||void 0,"data-orientation":i.orientation,id:t.triggerId,...a,...c,ref:n})})});W.displayName=E;var J="AccordionContent",q=d.forwardRef((r,n)=>{const{__scopeAccordion:o,...c}=r,i=j(l,o),t=B(J,o),s=O(o);return e.jsx(le,{role:"region","aria-labelledby":t.triggerId,"data-orientation":i.orientation,...s,...c,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...r.style}})});q.displayName=J;function Q(r){return r?"open":"closed"}var Ne=K,we=L,ye=F,X=W,Z=q;const Re=Ne,v=k.forwardRef(({className:r,...n},o)=>e.jsx(we,{ref:o,className:D("border-b border-ld",r),...n}));v.displayName="AccordionItem";const g=k.forwardRef(({className:r,children:n,...o},c)=>e.jsx(ye,{className:"flex",children:e.jsxs(X,{ref:c,className:D("flex flex-1 items-center dark:text-white justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",r),...o,children:[n,e.jsx(ue,{className:"h-5 w-5 shrink-0 transition-transform duration-200"})]})}));g.displayName=X.displayName;const b=k.forwardRef(({className:r,children:n,...o},c)=>e.jsx(Z,{ref:c,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-darklink dark:text-bodytext",...o,children:e.jsx("div",{className:D("pb-4 pt-0",r),children:n})}));b.displayName=Z.displayName;const _e=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(Re,{type:"single",collapsible:!0,className:"w-full",children:[e.jsxs(v,{value:"item-1",children:[e.jsx(g,{className:"text-base font-semibold",children:"Is it accessible?"}),e.jsx(b,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),e.jsxs(v,{value:"item-2",children:[e.jsx(g,{className:"text-base font-semibold",children:"Is it styled?"}),e.jsx(b,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),e.jsxs(v,{value:"item-3",children:[e.jsx(g,{className:"text-base font-semibold",children:"Is it animated?"}),e.jsx(b,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})})}),Pe=`import {\r
    Accordion,\r
    AccordionContent,\r
    AccordionItem,\r
    AccordionTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/accordion"\r
\r
\r
const BasicAccordiancode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Accordion type="single" collapsible className="w-full">\r
                <AccordionItem value="item-1">\r
                    <AccordionTrigger className='text-base font-semibold' >Is it accessible?</AccordionTrigger>\r
                    <AccordionContent>\r
                        Yes. It adheres to the WAI-ARIA design pattern.\r
                    </AccordionContent>\r
                </AccordionItem>\r
                <AccordionItem value="item-2">\r
                    <AccordionTrigger className='text-base font-semibold'>Is it styled?</AccordionTrigger>\r
                    <AccordionContent>\r
                        Yes. It comes with default styles that matches the other\r
                        components&apos; aesthetic.\r
                    </AccordionContent>\r
                </AccordionItem>\r
                <AccordionItem value="item-3">\r
                    <AccordionTrigger className='text-base font-semibold'>Is it animated?</AccordionTrigger>\r
                    <AccordionContent>\r
                        Yes. It&apos;s animated by default, but you can disable it if you\r
                        prefer.\r
                    </AccordionContent>\r
                </AccordionItem>\r
            </Accordion>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default BasicAccordiancode`,Te=()=>e.jsx(ie,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Accordion"}),e.jsx(_e,{})]}),e.jsx(ae,{children:Pe})]})}),Ee=[{to:"/",title:"Home"},{title:"Accordion"}],Xe=()=>e.jsxs(e.Fragment,{children:[e.jsx(fe,{title:"Accordion",items:Ee}),e.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:e.jsx("div",{className:"col-span-12",children:e.jsx(Te,{})})})]});export{Xe as default};
