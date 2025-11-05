import{n as M,o as S,r as i,j as e}from"./index-n5lagw8Y.js";import{C as a}from"./CardBox-DP5V6wyZ.js";import{u as E}from"./user-3-CsXE8Cqq.js";import{k as z,F as W}from"./floating-ui.react-DP-UpT2K.js";import{u as J,g as u,r as Y}from"./resolve-theme-BrLp9Ogr.js";import{u as G,a as U,g as H}from"./use-floating-DQGwidr_.js";import{B as s}from"./Button-BChG-RMT.js";import{C as m}from"./CodeDialog-BcgW2Qgx.js";import{G as V}from"./iconBase-CU_7cgqW.js";import{L as d}from"./Label-fniU0OUx.js";import{T as c}from"./TextInput-BqV0c51w.js";import{C as X}from"./Checkbox-DjM3E0bB.js";import{B as $}from"./BreadcrumbComp-BUvza-Rs.js";import{C as K}from"./ComponentApi-B3eoLsvt.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const Q=M({base:"absolute z-20 inline-block w-max max-w-[100vw] rounded-lg border border-gray-200 bg-white shadow-sm outline-none dark:border-gray-600 dark:bg-gray-800",inner:"relative",content:"z-10 overflow-hidden rounded-[7px]",arrow:{base:"absolute z-0 h-2 w-2 rotate-45 border border-gray-200 bg-white mix-blend-lighten dark:border-gray-600 dark:bg-gray-800 dark:mix-blend-color",placement:"-4px"}});function t(r){const o=S(),l=J([Q,o.theme?.popover,r.theme],[u(o.clearTheme,"popover"),r.clearTheme],[u(o.applyTheme,"popover"),r.applyTheme]),{children:n,content:b,arrow:f=!0,trigger:j="click",initialOpen:y,open:N,onOpenChange:w,placement:k="bottom",...P}=Y(r,o.props?.popover),[C,I]=i.useState(!!y),h=i.useRef(null),x=N??C,B=G({open:x,placement:k,arrowRef:h,setOpen:w??I}),{floatingStyles:F,context:p,placement:A,middlewareData:{arrow:{x:D,y:L}={}},refs:O}=B,{getFloatingProps:R,getReferenceProps:g}=U({context:p,role:"dialog",trigger:j}),T=n.ref,v=z([p.refs.setReference,T]);if(!i.isValidElement(n))throw Error("Invalid target element");const q=i.useMemo(()=>i.cloneElement(n,g({ref:v,"data-testid":"flowbite-popover-target",...n?.props})),[n,v,g]);return e.jsxs(e.Fragment,{children:[q,x&&e.jsx(W,{context:p,modal:!0,children:e.jsx("div",{className:l.base,ref:O.setFloating,"data-testid":"flowbite-popover",...P,style:F,...R(),children:e.jsxs("div",{className:l.inner,children:[f&&e.jsx("div",{className:l.arrow.base,"data-testid":"flowbite-popover-arrow",ref:h,style:{top:L??" ",left:D??" ",right:" ",bottom:" ",[H({placement:A})]:l.arrow.placement},children:" "}),e.jsx("div",{className:l.content,children:b})]})})})]})}t.displayName="Popover";const Z=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"profile-popover",content:e.jsxs("div",{className:"w-64 p-3 ",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"h-10 w-10 rounded-full",src:E,alt:"Jese Leos"})}),e.jsx("div",{children:e.jsx("button",{type:"button",className:"rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 ",children:"Follow"})})]}),e.jsx("p",{id:"profile-popover",className:"text-base font-semibold leading-none text-gray-900 dark:text-white",children:e.jsx("a",{href:"#",children:"Jese Leos"})}),e.jsx("p",{className:"mb-3 text-sm font-normal",children:e.jsx("a",{href:"#",className:"hover:underline",children:"@jeseleos"})}),e.jsxs("p",{className:"mb-4 text-sm",children:["Open-source contributor. Building"," ",e.jsx("a",{href:"#",className:"text-primary hover:underline dark:text-primary",children:"matdash IM"}),"."]}),e.jsxs("ul",{className:"flex text-sm",children:[e.jsx("li",{className:"me-2",children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"799"}),e.jsx("span",{children:"Following"})]})}),e.jsx("li",{children:e.jsxs("a",{href:"#",className:"hover:underline",children:[e.jsx("span",{className:"font-semibold text-gray-900 dark:text-white",children:"3,758"}),e.jsx("span",{children:"Followers"})]})})]})]}),children:e.jsx(s,{color:"primary",children:"Company profile"})})})}),_=`import { Popover, Button } from 'flowbite-react';\r
import user3 from '/src/assets/images/profile/user-3.jpg';\r
\r
const CompanyProfileCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="profile-popover"\r
          content={\r
            <div className="w-64 p-3 ">\r
              <div className="mb-2 flex items-center justify-between">\r
                <a href="#">\r
                  <img className="h-10 w-10 rounded-full" src={user3} alt="Jese Leos" />\r
                </a>\r
                <div>\r
                  <button\r
                    type="button"\r
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:bg-primary dark:hover:bg-primaryemphasis dark:focus:ring-blue-600 "\r
                  >\r
                    Follow\r
                  </button>\r
                </div>\r
              </div>\r
              <p\r
                id="profile-popover"\r
                className="text-base font-semibold leading-none text-gray-900 dark:text-white"\r
              >\r
                <a href="#">Jese Leos</a>\r
              </p>\r
              <p className="mb-3 text-sm font-normal">\r
                <a href="#" className="hover:underline">\r
                  @jeseleos\r
                </a>\r
              </p>\r
              <p className="mb-4 text-sm">\r
                Open-source contributor. Building{' '}\r
                <a href="#" className="text-primary hover:underline dark:text-primary">\r
                  matdash IM\r
                </a>\r
                .\r
              </p>\r
              <ul className="flex text-sm">\r
                <li className="me-2">\r
                  <a href="#" className="hover:underline">\r
                    <span className="font-semibold text-gray-900 dark:text-white">799</span>\r
                    <span>Following</span>\r
                  </a>\r
                </li>\r
                <li>\r
                  <a href="#" className="hover:underline">\r
                    <span className="font-semibold text-gray-900 dark:text-white">3,758</span>\r
                    <span>Followers</span>\r
                  </a>\r
                </li>\r
              </ul>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">Company profile</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default CompanyProfileCode;\r
`,ee=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Company Profile"}),e.jsx(Z,{})]}),e.jsx(m,{children:_})]})})});function re(r){return V({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m11.998 17 7-8h-14z"},child:[]}]})(r)}const se=()=>{const[r,o]=i.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"area-popover",open:r,onOpenChange:o,content:e.jsxs("div",{className:"flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsxs("div",{children:[e.jsx("h2",{id:"area-popover",className:"text-base text-gray-500",children:"Area (sqft)"}),e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"minsqft",children:"Minimum sqft"})}),e.jsx(c,{id:"minsqft",type:"number"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"maxsqft",children:"Maximum sqft"})}),e.jsx(c,{id:"maxsqft",type:"number"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(s,{color:"gray",children:"Reset"}),e.jsx(s,{color:"primary",onClick:()=>o(!1),children:"Save"})]})]}),children:e.jsxs(s,{color:"primary",children:["Area ",e.jsx(re,{className:"ml-2"})]})})})})},te=`import { useState } from 'react';\r
import { Popover, Label, TextInput, Button } from 'flowbite-react';\r
import { BiCaretDown } from 'react-icons/bi';\r
\r
const ControlledPopoverCode = () => {\r
  const [open, setOpen] = useState(false);\r
\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="area-popover"\r
          open={open}\r
          onOpenChange={setOpen}\r
          content={\r
            <div className="flex w-64 flex-col gap-4 p-4 text-sm text-gray-500 dark:text-gray-400 ">\r
              <div>\r
                <h2 id="area-popover" className="text-base text-gray-500">\r
                  Area (sqft)\r
                </h2>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="minsqft">Minimum sqft</Label>\r
                </div>\r
                <TextInput id="minsqft" type="number" />\r
              </div>\r
              <div>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="maxsqft">Maximum sqft</Label>\r
                </div>\r
                <TextInput id="maxsqft" type="number" />\r
              </div>\r
              <div className="flex gap-2">\r
                <Button color="gray">Reset</Button>\r
                <Button color="primary" onClick={() => setOpen(false)}>\r
                  Save\r
                </Button>\r
              </div>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">\r
            Area <BiCaretDown className="ml-2" />\r
          </Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ControlledPopoverCode;\r
`,ae=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Controlled"}),e.jsx(se,{})]}),e.jsx(m,{children:te})]})})}),oe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),children:e.jsx(s,{color:"primary",children:"Default popover"})})})}),ie=`import { Popover, Button } from 'flowbite-react';\r
\r
const DefaultPopoverCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="default-popover"\r
          content={\r
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400">\r
              <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">\r
                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">\r
                  Popover title\r
                </h3>\r
              </div>\r
              <div className="px-3 py-2">\r
                <p>And here's some amazing content. It's very engaging. Right?</p>\r
              </div>\r
            </div>\r
          }\r
        >\r
          <Button color="primary">Default popover</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultPopoverCode;\r
`,le=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default popover"}),e.jsx(oe,{})]}),e.jsx(m,{children:ie})]})})}),ne=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(t,{"aria-labelledby":"default-popover",content:e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400 ",children:[e.jsx("div",{className:"border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{id:"default-popover",className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]}),arrow:!1,children:e.jsx(s,{color:"primary",children:"No Arrow Popover"})})})}),de=`import { Popover, Button } from 'flowbite-react';\r
\r
const DisableArrowCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Popover\r
          aria-labelledby="default-popover"\r
          content={\r
            <div className="w-64 text-sm text-gray-500 dark:text-gray-400 ">\r
              <div className="border-b rounded-t-3xl border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">\r
                <h3 id="default-popover" className="font-semibold text-gray-900 dark:text-white">\r
                  Popover title\r
                </h3>\r
              </div>\r
              <div className="px-3 py-2">\r
                <p>And here's some amazing content. It's very engaging. Right?</p>\r
              </div>\r
            </div>\r
          }\r
          arrow={false}\r
        >\r
          <Button color="primary">No Arrow Popover</Button>\r
        </Popover>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DisableArrowCode;\r
`,ce=()=>e.jsx("div",{children:e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Disable arrow"}),e.jsx(ne,{})]}),e.jsx(m,{children:de})]})})}),me=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Image popover"}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-400",children:["Due to its central geographic location in Southern Europe,"," ",e.jsx(t,{trigger:"hover",content:e.jsx("div",{className:"w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",children:e.jsxs("div",{className:"grid grid-cols-5",children:[e.jsx("div",{className:"col-span-3 p-3",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"About Italy"}),e.jsx("p",{children:"Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city."}),e.jsxs("a",{href:"#",className:"flex items-center font-medium text-primary hover:text-primary hover:underline dark:text-primary dark:hover:text-primary",children:["Read more"," ",e.jsx("svg",{className:"ms-1.5 h-2 w-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 9 4-4-4-4"})})]})]})}),e.jsx("img",{src:"https://flowbite.com/docs/images/popovers/italy.png",className:"col-span-2 h-full",alt:"Italy map"})]})}),children:e.jsx("a",{href:"#",className:"text-primary underline hover:no-underline dark:text-primary",children:"Italy"})})," ","has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy Phoenicians and Carthaginians founded colonies mostly in insular Italy"]})]})}),pe=()=>e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Password Strength"}),e.jsxs("form",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"email1",children:"Your email"})}),e.jsx(c,{id:"email1",type:"email",placeholder:"info@matdash.com",className:"form-control",required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(d,{htmlFor:"password1",children:"Your password"})}),e.jsx(t,{trigger:"hover",content:e.jsxs("div",{className:"space-y-2 p-3",children:[e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Must have at least 6 characters"}),e.jsxs("div",{className:"grid grid-cols-4 gap-2",children:[e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-orange-300 dark:bg-orange-400"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"}),e.jsx("div",{className:"h-1 bg-gray-200 dark:bg-gray-600"})]}),e.jsx("p",{children:"It’s better to have:"}),e.jsxs("ul",{children:[e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 12",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5.917 5.724 10.5 15 1.5"})}),"Upper & lower case letters"]}),e.jsxs("li",{className:"mb-1 flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A symbol (#$&)"]}),e.jsxs("li",{className:"flex items-center",children:[e.jsx("svg",{className:"me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),"A longer password (min. 12 chars.)"]})]})]}),children:e.jsx(c,{id:"password1",type:"password",required:!0,className:"form-control"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(X,{id:"remember",className:"checkbox"}),e.jsx(d,{htmlFor:"remember",children:"Remember me"})]}),e.jsx(s,{type:"submit",color:"primary",children:"Submit"})]})]})}),he=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Placement"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(t,{content:r,placement:"top",children:e.jsx(s,{color:"primary",children:"Popover top"})}),e.jsx(t,{content:r,placement:"right",children:e.jsx(s,{color:"primary",children:"Popover right"})}),e.jsx(t,{content:r,placement:"bottom",children:e.jsx(s,{color:"primary",children:"Popover bottom"})}),e.jsx(t,{content:r,placement:"left",children:e.jsx(s,{color:"primary",children:"Popover left"})})]})]})})},xe=()=>{const r=e.jsxs("div",{className:"w-64 text-sm text-gray-500 dark:text-gray-400",children:[e.jsx("div",{className:"border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700",children:e.jsx("h3",{className:"font-semibold text-gray-900 dark:text-white",children:"Popover title"})}),e.jsx("div",{className:"px-3 py-2",children:e.jsx("p",{children:"And here's some amazing content. It's very engaging. Right?"})})]});return e.jsx("div",{children:e.jsxs(a,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Trigger Type"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{content:r,trigger:"hover",children:e.jsx(s,{color:"primary",children:"Popover hover"})}),e.jsx(t,{content:r,trigger:"click",children:e.jsx(s,{color:"primary",children:"Popover click"})})]})]})})},ge=[{to:"/",title:"Home"},{title:"Popover"}],ve=[{id:"1",prop:"content",description:"The content to display inside the popover.",type:'"<h3>PopOver Title</h3>"',default:"-"},{id:"2",prop:"trigger",description:"Specifies how the popover is triggered.",type:'"hover" | "click"',default:'"hover"'},{id:"3",prop:"placement",description:"Determines the position of the popover relative to the trigger element.",type:'"top" | "right" | "bottom" | "left"',default:'"bottom"'},{id:"4",prop:"arrow",description:"If true, displays an arrow pointing to the trigger element.",type:"boolean",default:"true"},{id:"5",prop:"open",description:"Controls the visibility of the popover. When true, the popover is visible.",type:"boolean",default:"false"},{id:"6",prop:"onOpenChange",description:"Callback function that is called when the popover visibility changes.",type:"setOpen",default:"-"}],Je=()=>e.jsxs(e.Fragment,{children:[e.jsx($,{title:"Popover",items:ge}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(le,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ee,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ae,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ce,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(me,{})}),e.jsx("div",{className:"lg:col-span-6 col-span-12",children:e.jsx(pe,{})}),e.jsx("div",{className:"lg:col-span-8 col-span-12",children:e.jsx(he,{})}),e.jsx("div",{className:"lg:col-span-4 col-span-12",children:e.jsx(xe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(K,{allApis:ve,componentName:"Popover"})})]})]});export{Je as default};
