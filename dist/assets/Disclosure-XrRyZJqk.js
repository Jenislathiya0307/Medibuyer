import{R as w,r as a,j as e}from"./index-n5lagw8Y.js";import{C as B}from"./CardBox-DP5V6wyZ.js";import{I as p}from"./iconify-VfOFnMl8.js";import{$ as te,a as re}from"./useFocusRing-BQxkpHIn.js";import{w as se}from"./use-active-press-BchvfSUV.js";import{Y as T,o as b,a as F,V as U,K as M,d as ae,u as R,A as X}from"./render-D9E-06xR.js";import{e as ne}from"./use-resolve-button-type-B08ktXI3.js";import{y as A,T as ie}from"./use-sync-refs-CefhOWeT.js";import{u as oe,N as le,i as E,x as ce,s as de,c as me}from"./open-closed-0N_3BWp3.js";import{C as ue}from"./close-provider-C5BPq0tm.js";import{s as pe}from"./bugs-BLuxiOOY.js";import{i as Y}from"./dom-BlW_0b_t.js";import{l as xe}from"./owner-CneWfzVc.js";import{o as z}from"./keyboard-C1Wiwm26.js";import{C as k}from"./CodeDialog-BcgW2Qgx.js";import{y as he}from"./close-button-DL57TD92.js";import{A as $,m as L}from"./proxy-D5zimsvB.js";import{B as ye}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./button-BcCM4Hnr.js";import"./disabled-CIuDn_DF.js";import"./chevron-right-icon-BGQVsHY5.js";var _;let ge=(_=w.startTransition)!=null?_:function(t){t()};var fe=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(fe||{}),ve=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.SetButtonElement=4]="SetButtonElement",t[t.SetPanelElement=5]="SetPanelElement",t))(ve||{});let Ne={0:t=>({...t,disclosureState:R(t.disclosureState,{0:1,1:0})}),1:t=>t.disclosureState===1?t:{...t,disclosureState:1},2(t,r){return t.buttonId===r.buttonId?t:{...t,buttonId:r.buttonId}},3(t,r){return t.panelId===r.panelId?t:{...t,panelId:r.panelId}},4(t,r){return t.buttonElement===r.element?t:{...t,buttonElement:r.element}},5(t,r){return t.panelElement===r.element?t:{...t,panelElement:r.element}}},O=a.createContext(null);O.displayName="DisclosureContext";function W(t){let r=a.useContext(O);if(r===null){let m=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,W),m}return r}let H=a.createContext(null);H.displayName="DisclosureAPIContext";function q(t){let r=a.useContext(H);if(r===null){let m=new Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(m,q),m}return r}let K=a.createContext(null);K.displayName="DisclosurePanelContext";function we(){return a.useContext(K)}function je(t,r){return R(r.type,Ne,t,r)}let De=a.Fragment;function be(t,r){let{defaultOpen:m=!1,...h}=t,u=a.useRef(null),y=A(r,ie(o=>{u.current=o},t.as===void 0||ae(t.as))),g=a.useReducer(je,{disclosureState:m?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:s,buttonId:n},j]=g,i=b(o=>{j({type:1});let v=xe(u.current);if(!v||!n)return;let N=o?Y(o)?o:"current"in o&&Y(o.current)?o.current:v.getElementById(n):v.getElementById(n);N?.focus()}),I=a.useMemo(()=>({close:i}),[i]),f=F({open:s===0,close:i}),D={ref:y},C=M();return w.createElement(O.Provider,{value:g},w.createElement(H.Provider,{value:I},w.createElement(ue,{value:i},w.createElement(me,{value:R(s,{0:E.Open,1:E.Closed})},C({ourProps:D,theirProps:h,slot:f,defaultTag:De,name:"Disclosure"})))))}let Ie="button";function Ce(t,r){let m=a.useId(),{id:h=`headlessui-disclosure-button-${m}`,disabled:u=!1,autoFocus:y=!1,...g}=t,[s,n]=W("Disclosure.Button"),j=we(),i=j===null?!1:j===s.panelId,I=a.useRef(null),f=A(I,r,b(l=>{if(!i)return n({type:4,element:l})}));a.useEffect(()=>{if(!i)return n({type:2,buttonId:h}),()=>{n({type:2,buttonId:null})}},[h,n,i]);let D=b(l=>{var P;if(i){if(s.disclosureState===1)return;switch(l.key){case z.Space:case z.Enter:l.preventDefault(),l.stopPropagation(),n({type:0}),(P=s.buttonElement)==null||P.focus();break}}else switch(l.key){case z.Space:case z.Enter:l.preventDefault(),l.stopPropagation(),n({type:0});break}}),C=b(l=>{switch(l.key){case z.Space:l.preventDefault();break}}),o=b(l=>{var P;pe(l.currentTarget)||u||(i?(n({type:0}),(P=s.buttonElement)==null||P.focus()):n({type:0}))}),{isFocusVisible:v,focusProps:N}=te({autoFocus:y}),{isHovered:S,hoverProps:V}=re({isDisabled:u}),{pressed:Q,pressProps:G}=se({disabled:u}),Z=F({open:s.disclosureState===0,hover:S,active:Q,disabled:u,focus:v,autofocus:y}),J=ne(t,s.buttonElement),ee=i?U({ref:f,type:J,disabled:u||void 0,autoFocus:y,onKeyDown:D,onClick:o},N,V,G):U({ref:f,id:h,type:J,"aria-expanded":s.disclosureState===0,"aria-controls":s.panelElement?s.panelId:void 0,disabled:u||void 0,autoFocus:y,onKeyDown:D,onKeyUp:C,onClick:o},N,V,G);return M()({ourProps:ee,theirProps:g,slot:Z,defaultTag:Ie,name:"Disclosure.Button"})}let Pe="div",ze=X.RenderStrategy|X.Static;function Be(t,r){let m=a.useId(),{id:h=`headlessui-disclosure-panel-${m}`,transition:u=!1,...y}=t,[g,s]=W("Disclosure.Panel"),{close:n}=q("Disclosure.Panel"),[j,i]=a.useState(null),I=A(r,b(S=>{ge(()=>s({type:5,element:S}))}),i);a.useEffect(()=>(s({type:3,panelId:h}),()=>{s({type:3,panelId:null})}),[h,s]);let f=oe(),[D,C]=le(u,j,f!==null?(f&E.Open)===E.Open:g.disclosureState===0),o=F({open:g.disclosureState===0,close:n}),v={ref:I,id:h,...ce(C)},N=M();return w.createElement(de,null,w.createElement(K.Provider,{value:g.panelId},N({ourProps:v,theirProps:y,slot:o,defaultTag:Pe,features:ze,visible:D,name:"Disclosure.Panel"})))}let ke=T(be),c=T(Ce),d=T(Be),x=Object.assign(ke,{Button:c,Panel:d});const Ee=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"mx-auto w-full  divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsxs(x,{as:"div",className:"py-4 px-6",defaultOpen:!0,children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{className:"mt-2 text-xs text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]})]})})}),Se=`import {\r
  Disclosure,\r
  DisclosureButton,\r
  DisclosurePanel,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
\r
const BasicDisclosureCode = () => {\r
  return (\r
    \r
    <>\r
    <div className="mt-4">\r
        <div className="mx-auto w-full  divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">\r
          <Disclosure as="div" className="py-4 px-6" defaultOpen={true}>\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                What is your refund policy?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel className="mt-2 text-xs text-bodytext">\r
              Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                Can I reserve a magazine?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel className="mt-2 text-xs text-bodytext">\r
              Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                Do I have the right to return an item?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel className="mt-2 text-xs text-bodytext">\r
              Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicDisclosureCode\r
`,$e=()=>e.jsx("div",{children:e.jsx(B,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Disclosure"}),e.jsx(Ee,{})]}),e.jsx(k,{children:Se})]})})}),Le=({children:t})=>e.jsx("a",{href:"/samplepage",children:t}),Te=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(x,{children:[e.jsxs(c,{className:"group bg-primary ui-button",children:["Open mobile menu",e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{className:"px-4 py-1",children:e.jsx(he,{as:Le,children:"Go with your link"})})]})})}),Fe=`import MyCustomLink from "../MyLink";\r
import { Icon } from "@iconify/react";\r
import {\r
  Disclosure,\r
  DisclosureButton,\r
  DisclosurePanel,\r
  CloseButton,\r
} from "@headlessui/react";\r
\r
const ClosingDisclosureCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Disclosure>\r
          <DisclosureButton className="group bg-primary ui-button">\r
            Open mobile menu\r
            <Icon\r
              icon="solar:alt-arrow-down-outline"\r
              height={18}\r
              className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
            />\r
          </DisclosureButton>\r
          <DisclosurePanel className="px-4 py-1">\r
            <CloseButton as={MyCustomLink}>Go with your link</CloseButton>\r
          </DisclosurePanel>\r
        </Disclosure>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ClosingDisclosureCode\r
`,Me=()=>e.jsx("div",{children:e.jsx(B,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Closing Disclosures Manually"}),e.jsx(Te,{})]}),e.jsx(k,{children:Fe})]})})}),Re=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"mx-auto w-full  divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx($,{children:t&&e.jsx(d,{static:!0,as:L.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs mt-2 text-bodytext",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})}),e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx($,{children:t&&e.jsx(d,{static:!0,as:L.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs text-bodytext mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})}),e.jsx(x,{as:"div",className:"py-4 px-6",children:({open:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx("div",{className:"overflow-hidden",children:e.jsx($,{children:t&&e.jsx(d,{static:!0,as:L.div,initial:{opacity:0,y:-24},animate:{opacity:1,y:0},exit:{opacity:0,y:-24},className:"origin-top text-xs text-bodytext mt-2",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts,"})})})]})})]})})}),Ae=`import {\r
  Disclosure,\r
  DisclosureButton,\r
  DisclosurePanel,\r
} from "@headlessui/react";\r
import { AnimatePresence, motion } from "framer-motion";\r
import { Icon } from "@iconify/react";\r
\r
\r
const FramerMotionCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="mx-auto w-full  divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">\r
          <Disclosure as="div" className="py-4 px-6">\r
            {({ open }) => (\r
              <>\r
                <DisclosureButton className="group flex w-full items-center justify-between">\r
                  <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                    What is your refund policy?\r
                  </span>\r
                  <Icon\r
                    icon="solar:alt-arrow-down-outline"\r
                    height={18}\r
                    className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
                  />\r
                </DisclosureButton>\r
                <div className="overflow-hidden">\r
                  <AnimatePresence>\r
                    {open && (\r
                      <DisclosurePanel\r
                        static\r
                        as={motion.div}\r
                        initial={{ opacity: 0, y: -24 }}\r
                        animate={{ opacity: 1, y: 0 }}\r
                        exit={{ opacity: 0, y: -24 }}\r
                        className="origin-top text-xs mt-2 text-bodytext"\r
                      >\r
                        Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
                        (complete text) is dummy text that is not meant to mean\r
                        anything. It is used as a placeholder in magazine\r
                        layouts,Lorem ipsum dolor sit amet, consectetur\r
                        adipisici elit…’ (complete text) is dummy text that is\r
                        not meant to mean anything. It is used as a placeholder\r
                        in magazine layouts,\r
                      </DisclosurePanel>\r
                    )}\r
                  </AnimatePresence>\r
                </div>\r
              </>\r
            )}\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            {({ open }) => (\r
              <>\r
                <DisclosureButton className="group flex w-full items-center justify-between">\r
                  <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                    Can I reserve a magazine?\r
                  </span>\r
                  <Icon\r
                    icon="solar:alt-arrow-down-outline"\r
                    height={18}\r
                    className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
                  />\r
                </DisclosureButton>\r
                <div className="overflow-hidden">\r
                  <AnimatePresence>\r
                    {open && (\r
                      <DisclosurePanel\r
                        static\r
                        as={motion.div}\r
                        initial={{ opacity: 0, y: -24 }}\r
                        animate={{ opacity: 1, y: 0 }}\r
                        exit={{ opacity: 0, y: -24 }}\r
                        className="origin-top text-xs text-bodytext mt-2"\r
                      >\r
                        Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
                        (complete text) is dummy text that is not meant to mean\r
                        anything. It is used as a placeholder in magazine\r
                        layouts,Lorem ipsum dolor sit amet, consectetur\r
                        adipisici elit…’ (complete text) is dummy text that is\r
                        not meant to mean anything. It is used as a placeholder\r
                        in magazine layouts,\r
                      </DisclosurePanel>\r
                    )}\r
                  </AnimatePresence>\r
                </div>\r
              </>\r
            )}\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            {({ open }) => (\r
              <>\r
                <DisclosureButton className="group flex w-full items-center justify-between">\r
                  <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                    Do I have the right to return an item?\r
                  </span>\r
                  <Icon\r
                    icon="solar:alt-arrow-down-outline"\r
                    height={18}\r
                    className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
                  />\r
                </DisclosureButton>\r
                <div className="overflow-hidden">\r
                  <AnimatePresence>\r
                    {open && (\r
                      <DisclosurePanel\r
                        static\r
                        as={motion.div}\r
                        initial={{ opacity: 0, y: -24 }}\r
                        animate={{ opacity: 1, y: 0 }}\r
                        exit={{ opacity: 0, y: -24 }}\r
                        className="origin-top text-xs text-bodytext mt-2"\r
                      >\r
                        Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
                        (complete text) is dummy text that is not meant to mean\r
                        anything. It is used as a placeholder in magazine\r
                        layouts,Lorem ipsum dolor sit amet, consectetur\r
                        adipisici elit…’ (complete text) is dummy text that is\r
                        not meant to mean anything. It is used as a placeholder\r
                        in magazine layouts,\r
                      </DisclosurePanel>\r
                    )}\r
                  </AnimatePresence>\r
                </div>\r
              </>\r
            )}\r
          </Disclosure>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default FramerMotionCode;\r
`,Oe=()=>e.jsx("div",{children:e.jsx(B,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disclosure With Framer Motion"}),e.jsx(Re,{})]}),e.jsx(k,{children:Ae})]})})});let We=a.forwardRef(function(t,r){return e.jsx("button",{className:"...",ref:r,...t})});const He=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(x,{as:"div",children:[e.jsxs(c,{as:We,className:"group bg-secondary ui-button",children:["What languages do you support?",e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsxs(d,{as:"ul",className:"px-4 py-3",children:[e.jsx("li",{className:"py-1",children:"HTML"}),e.jsx("li",{className:"py-1",children:"CSS"}),e.jsx("li",{className:"py-1",children:"JavaScript"})]})]})})}),Ke=`import {\r
  Disclosure,\r
  DisclosureButton,\r
  DisclosurePanel,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
import { forwardRef } from "react";\r
let MyCustomButton = forwardRef(function (props: any, ref: any) {\r
  return <button className="..." ref={ref} {...props} />;\r
});\r
\r
\r
const RenderDiclosureCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <Disclosure as="div">\r
          <DisclosureButton\r
            as={MyCustomButton}\r
            className="group bg-secondary ui-button"\r
          >\r
            What languages do you support?\r
            <Icon\r
              icon="solar:alt-arrow-down-outline"\r
              height={18}\r
              className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
            />\r
          </DisclosureButton>\r
          <DisclosurePanel as="ul" className="px-4 py-3">\r
            <li className="py-1">HTML</li>\r
            <li className="py-1">CSS</li>\r
            <li className="py-1">JavaScript</li>\r
          </DisclosurePanel>\r
        </Disclosure>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default RenderDiclosureCode\r
`,Ve=()=>e.jsx("div",{children:e.jsx(B,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering As Different Elements"}),e.jsx(He,{})]}),e.jsx(k,{children:Ke})]})})}),Ge=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs("div",{className:"mx-auto w-full divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark",children:[e.jsxs(x,{as:"div",className:"py-4 px-6",defaultOpen:!0,children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"What is your refund policy?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Can I reserve a magazine?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]}),e.jsxs(x,{as:"div",className:"py-4 px-6",children:[e.jsxs(c,{className:"group flex w-full items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium text-ld group-data-hover:text-primary",children:"Do I have the right to return an item?"}),e.jsx(p,{icon:"solar:alt-arrow-down-outline",height:18,className:"size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"})]}),e.jsx(d,{transition:!0,className:"mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0",children:"Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine"})]})]})})}),Je=`import {\r
  Disclosure,\r
  DisclosureButton,\r
  DisclosurePanel,\r
} from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
\r
\r
const TransitionCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
        <div className="mx-auto w-full divide-y divide-border dark:divide-darkborder rounded-xl bg-lightgray dark:bg-dark">\r
          <Disclosure as="div" className="py-4 px-6" defaultOpen={true}>\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                What is your refund policy?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel\r
              transition\r
              className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"\r
            >\r
             Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                Can I reserve a magazine?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel\r
              transition\r
              className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"\r
            >\r
              Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
          <Disclosure as="div" className="py-4 px-6">\r
            <DisclosureButton className="group flex w-full items-center justify-between">\r
              <span className="text-sm font-medium text-ld group-data-hover:text-primary">\r
                Do I have the right to return an item?\r
              </span>\r
              <Icon\r
                icon="solar:alt-arrow-down-outline"\r
                height={18}\r
                className="size-5 fill-white/60 group-data-hover:fill-white/50 group-data-open:rotate-180"\r
              />\r
            </DisclosureButton>\r
            <DisclosurePanel\r
              transition\r
              className="mt-2 text-xs text-bodytext origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0"\r
            >\r
             Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete\r
              text) is dummy text that is not meant to mean anything. It is used\r
              as a placeholder in magazine\r
            </DisclosurePanel>\r
          </Disclosure>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default TransitionCode;\r
`,Ue=()=>e.jsx("div",{children:e.jsx(B,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Transitions Disclosure"}),e.jsx(Ge,{})]}),e.jsx(k,{children:Je})]})})}),Xe=[{to:"/",title:"Home"},{title:"Disclosure"}],Ct=()=>e.jsxs(e.Fragment,{children:[e.jsx(ye,{title:"Disclosure",items:Xe}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx($e,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ue,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Me,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ve,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Oe,{})})]})]});export{Ct as default};
