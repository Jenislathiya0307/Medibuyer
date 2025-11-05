import{r as s,j as n,b as d,D as c}from"./index-n5lagw8Y.js";import{C as a}from"./CardBox-DP5V6wyZ.js";import{K as o}from"./transition-DogChs_E.js";import{C as i}from"./CodeDialog-BcgW2Qgx.js";import{I as m}from"./iconify-VfOFnMl8.js";import{L as l}from"./button-BcCM4Hnr.js";import{B as u}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./render-D9E-06xR.js";import"./use-is-mounted-Bfvr3D71.js";import"./use-sync-refs-CefhOWeT.js";import"./open-closed-0N_3BWp3.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./useFocusRing-BQxkpHIn.js";import"./use-active-press-BchvfSUV.js";import"./owner-CneWfzVc.js";import"./disabled-CIuDn_DF.js";import"./chevron-right-icon-BGQVsHY5.js";const h=()=>{const[e,r]=s.useState(!1);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:"mt-4",children:[n.jsx("button",{onClick:()=>r(t=>!t),className:"ui-button bg-primary justify-center",children:"Toggle Transition"}),n.jsx(o,{show:e,children:n.jsx("div",{className:"transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 ",children:"I will fade in and out"})})]})})},p=`import { useState } from "react";\r
import { Transition } from '@headlessui/react'\r
\r
const BasicTransactionCode = () => {\r
  const [open, setOpen] = useState(false)\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button onClick={() => setOpen((open) => !open)} className="ui-button bg-primary justify-center">Toggle Transition</button>\r
        <Transition show={open}>\r
            <div className="transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 ">I will fade in and out</div>\r
        </Transition>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicTransactionCode\r
`,x=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Basic Transition"}),n.jsx(h,{})]}),n.jsx(i,{children:p})]})})}),j=()=>{let[e,r]=s.useState(!0);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx("div",{className:"size-[6.25rem]",children:n.jsx(o,{show:e,children:n.jsx("div",{className:d("size-full rounded-xl bg-primary shadow-lg transition duration-400","data-closed:scale-50 data-closed:rotate-[-120deg] data-closed:opacity-0","data-leave:duration-200 data-leave:ease-in-out","data-leave:data-closed:scale-95 data-leave:data-closed:rotate-[0deg]")})})}),n.jsxs(l,{onClick:()=>{r(!1),setTimeout(()=>r(!0),500)},className:" transition data-hover:scale-105 ui-button justify-center bg-secondary gap-3 mt-4",children:[n.jsx(m,{icon:"solar:refresh-bold",height:20}),n.jsx("span",{children:"Click to transition"})]})]})})})},v=`import  { useState } from "react";\r
import { Button, Transition } from "@headlessui/react";\r
import { Icon } from "@iconify/react";\r
import clsx from "clsx";\r
\r
\r
const ClickTransitionCode = () => {\r
   let [isShowing, setIsShowing] = useState(true);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col items-center">\r
          <div className="size-[6.25rem]">\r
            <Transition show={isShowing}>\r
              <div\r
                className={clsx(\r
                  "size-full rounded-xl bg-primary shadow-lg transition duration-400",\r
                  "data-closed:scale-50 data-closed:rotate-[-120deg] data-closed:opacity-0",\r
                  "data-leave:duration-200 data-leave:ease-in-out",\r
                  "data-leave:data-closed:scale-95 data-leave:data-closed:rotate-[0deg]"\r
                )}\r
              />\r
            </Transition>\r
          </div>\r
\r
          <Button\r
            onClick={() => {\r
              setIsShowing(false);\r
              setTimeout(() => setIsShowing(true), 500);\r
            }}\r
            className=" transition data-hover:scale-105 ui-button justify-center bg-secondary gap-3 mt-4"\r
          >\r
            <Icon icon="solar:refresh-bold" height={20} />\r
            <span>Click to transition</span>\r
          </Button>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ClickTransitionCode;\r
`,g=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Click To Transition"}),n.jsx(j,{})]}),n.jsx(i,{children:v})]})})}),f=()=>{const{setIsSidebarOpen:e}=s.useContext(c);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsx("button",{onClick:()=>e(!0),className:"ui-button bg-success justify-center",children:"Coordinating Transition"})})})},b=`import  { useContext,  } from "react";\r
import { DashboardContext } from "src/context/DashboardContext/DashboardContext";\r
\r
\r
const CoordinationCode = () => {\r
  const {setIsSidebarOpen} = useContext(DashboardContext);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <button\r
          onClick={() => setIsSidebarOpen(true)}\r
          className="ui-button bg-success justify-center"\r
        >\r
          Coordinating Transition\r
        </button>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default CoordinationCode;\r
`,C=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Coordinating Transition"}),n.jsx(f,{})]}),n.jsx(i,{children:b})]})})}),N=()=>{const[e,r]=s.useState(!1);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"relative",children:[n.jsx("button",{onClick:()=>r(t=>!t),className:"ui-button bg-secondary justify-center",children:"Enter Leave Transition"}),n.jsx(o,{show:e,children:n.jsx("div",{className:d(["absolute z-50 transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1","data-closed:opacity-0 ","data-enter:duration-100 data-enter:data-closed:-translate-x-full","data-leave:duration-300 data-leave:data-closed:translate-x-full"]),children:"I will enter from the left and leave to the right"})})]})})})},T=`import { Transition } from "@headlessui/react";\r
import clsx from "clsx";\r
import  { useState } from "react";\r
\r
\r
const EnterLeaveTransitionCode = () => {\r
  const [open, setOpen] = useState(false);\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <div className="relative">\r
          <button onClick={() => setOpen((open) => !open)} className="ui-button bg-secondary justify-center">Enter Leave Transition</button>\r
          <Transition show={open}>\r
            <div\r
              className={clsx([\r
                // Base styles\r
                "absolute z-50 transition ease-in-out bg-white dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72 mt-1",\r
                // Shared closed styles\r
                "data-closed:opacity-0 ",\r
                // Entering styles\r
                "data-enter:duration-100 data-enter:data-closed:-translate-x-full",\r
                // Leaving styles\r
                "data-leave:duration-300 data-leave:data-closed:translate-x-full",\r
              ])}\r
            >\r
              I will enter from the left and leave to the right\r
            </div>\r
          </Transition>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default EnterLeaveTransitionCode\r
`,w=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Different Transition"}),n.jsx(N,{})]}),n.jsx(i,{children:T})]})})}),y=()=>{const[e,r]=s.useState(!0);return n.jsx(n.Fragment,{children:n.jsx("div",{className:"mt-4",children:n.jsxs("div",{className:"flex flex-col items-center",children:[n.jsx(o,{show:e,appear:!0,children:n.jsx("div",{className:"transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72",children:"I will fade in on initial render Lorem Ipsum is simply dummy text of the printing and typesetting industry."})}),n.jsx(l,{onClick:()=>r(t=>!t),className:"transition data-hover:scale-105 ui-button justify-center bg-info gap-3 mt-5  ",children:"On Intial Transition"})]})})})},k=`import { useState } from "react";\r
import { Transition, Button } from "@headlessui/react";\r
\r
\r
const IntialTransitionCode = () => {\r
  const [open, setOpen] = useState(true);\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="flex flex-col items-center">\r
          <Transition show={open} appear={true}>\r
            <div className="transition duration-300 ease-in data-closed:opacity-0 bg-lightgray dark:bg-dark rounded-sm shadow-md dark:shadow-dark-md p-4 w-72">\r
              I will fade in on initial render\r
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\r
            </div>\r
          </Transition>\r
          <Button\r
            onClick={() => setOpen((open) => !open)}\r
            className="transition data-hover:scale-105 ui-button justify-center bg-info gap-3 mt-5  "\r
          >\r
           On Intial Transition\r
          </Button>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default IntialTransitionCode\r
`,I=()=>n.jsx("div",{children:n.jsx(a,{className:"p-0",children:n.jsxs("div",{children:[n.jsxs("div",{className:"p-6",children:[n.jsx("h4",{className:"text-lg font-semibold",children:"Transitioning On Initial Mount"}),n.jsx(y,{})]}),n.jsx(i,{children:k})]})})}),S=[{to:"/",title:"Home"},{title:"Transition"}],en=()=>n.jsxs(n.Fragment,{children:[n.jsx(u,{title:"Transition",items:S}),n.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[n.jsx("div",{className:"col-span-12",children:n.jsx(x,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(w,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(C,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(g,{})}),n.jsx("div",{className:"col-span-12",children:n.jsx(I,{})})]})]});export{en as default};
