import{B as i,j as t}from"./index-n5lagw8Y.js";import{B as o}from"./BreadcrumbComp-BUvza-Rs.js";import{C as a}from"./CardBox-DP5V6wyZ.js";import{B as r}from"./button-BnqkFln5.js";import{C as s}from"./CodeDialog-BcgW2Qgx.js";import{I as n}from"./iconify-VfOFnMl8.js";import"./resolve-theme-BrLp9Ogr.js";import"./chevron-right-icon-BGQVsHY5.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],e=i("LoaderCircle",c),l=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[t.jsx(r,{children:"Primary"}),t.jsx(r,{variant:"secondary",children:"Secondary"}),t.jsx(r,{variant:"success",children:"Success"}),t.jsx(r,{variant:"warning",children:"Warning"}),t.jsx(r,{variant:"error",children:"Error"}),t.jsx(r,{variant:"info",children:"Info"})]})}),d=`import { Button } from 'src/components/shadcn-ui/Default-Ui/button';\r
\r
const BasicButtonCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-wrap items-center gap-3 mt-4">\r
        <Button>Primary</Button>\r
        <Button variant="secondary">Secondary</Button>\r
        <Button variant="success">Success</Button>\r
        <Button variant="warning">Warning</Button>\r
        <Button variant="error">Error</Button>\r
        <Button variant="info">Info</Button>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default BasicButtonCode;\r
`,u=()=>t.jsx(a,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Basic Button"}),t.jsx(l,{})]}),t.jsx(s,{children:d})]})}),m=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[t.jsx(r,{variant:"outline",children:"Primary"}),t.jsx(r,{variant:"outlinesecondary",children:"Secondary"}),t.jsx(r,{variant:"outlinesuccess",children:"Success"}),t.jsx(r,{variant:"outlinewarning",children:"Warning"}),t.jsx(r,{variant:"outlineerror",children:"Error"}),t.jsx(r,{variant:"outlineinfo",children:"Info"})]})}),x=`\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
\r
const OutlineButtonCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
               <Button variant="outline">Primary</Button>\r
               <Button variant="outlinesecondary">Secondary</Button>\r
               <Button variant="outlinesuccess">Success</Button>\r
               <Button variant="outlinewarning">Warning</Button>\r
               <Button variant="outlineerror">Error</Button>\r
               <Button variant="outlineinfo">Info</Button>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default OutlineButtonCode`,h=()=>t.jsx(a,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Outline Button"}),t.jsx(m,{})]}),t.jsx(s,{children:x})]})}),B=()=>t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[t.jsx(r,{variant:"ghostprimary",children:"Primary"}),t.jsx(r,{variant:"ghostsecondary",children:"Secondary"}),t.jsx(r,{variant:"ghostsuccess",children:"Success"}),t.jsx(r,{variant:"ghostwarning",children:"Warning"}),t.jsx(r,{variant:"ghosterror",children:"Error"}),t.jsx(r,{variant:"ghostinfo",children:"Info"})]}),j=`\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
\r
\r
const GhostButtonCode = () => {\r
  return (\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
               <Button variant="ghostprimary" >Primary</Button>\r
               <Button variant="ghostsecondary" >Secondary</Button>\r
               <Button variant="ghostsuccess" >Success</Button>\r
               <Button variant="ghostwarning" >Warning</Button>\r
               <Button variant="ghosterror" >Error</Button>\r
               <Button variant="ghostinfo" >Info</Button>\r
            </div>\r
  )\r
}\r
\r
export default GhostButtonCode`,p=()=>t.jsx(a,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Ghost Button"}),t.jsx(B,{})]}),t.jsx(s,{children:j})]})}),v=()=>t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[t.jsxs(r,{children:[" ",t.jsx(n,{icon:"tabler:mail",className:"text-lg"})," Login with email"]}),t.jsxs(r,{variant:"secondary",children:[t.jsx(n,{icon:"tabler:garden-cart",className:"text-lg"})," Shop now"]}),t.jsxs(r,{variant:"success",children:[t.jsx(n,{icon:"tabler:user-circle",className:"text-lg"})," Signup now"]}),t.jsxs(r,{variant:"warning",children:[t.jsx(n,{icon:"tabler:calendar-event",className:"text-lg"})," Live event"]}),t.jsxs(r,{variant:"info",children:[t.jsx(n,{icon:"tabler:align-box-left-bottom",className:"text-lg"}),"Create project"]}),t.jsxs(r,{variant:"error",children:[t.jsx(n,{icon:"tabler:user-shield",className:"text-lg"})," Login now"]})]}),g=`import { Button } from 'src/components/shadcn-ui/Default-Ui/button';\r
import { Icon } from '@iconify/react/dist/iconify.js';\r
\r
const ButtonWithIconCode = () => {\r
  return (\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
      <Button>\r
        {' '}\r
        <Icon icon="tabler:mail" className="text-lg" /> Login with email\r
      </Button>\r
      <Button variant="secondary">\r
        <Icon icon="tabler:garden-cart" className="text-lg" /> Shop now\r
      </Button>\r
      <Button variant="success">\r
        <Icon icon="tabler:user-circle" className="text-lg" /> Signup now\r
      </Button>\r
      <Button variant="warning">\r
        <Icon icon="tabler:calendar-event" className="text-lg" /> Live event\r
      </Button>\r
      <Button variant="info">\r
        <Icon icon="tabler:align-box-left-bottom" className="text-lg" />\r
        Create project\r
      </Button>\r
      <Button variant="error">\r
        <Icon icon="tabler:user-shield" className="text-lg" /> Login now\r
      </Button>\r
    </div>\r
  );\r
};\r
\r
export default ButtonWithIconCode;\r
`,f=()=>t.jsx(a,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:" Button With Icon"}),t.jsx(v,{})]}),t.jsx(s,{children:g})]})}),N=()=>t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[t.jsxs(r,{disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]}),t.jsxs(r,{variant:"secondary",disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]}),t.jsxs(r,{variant:"success",disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]}),t.jsxs(r,{variant:"warning",disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]}),t.jsxs(r,{variant:"error",disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]}),t.jsxs(r,{variant:"info",disabled:!0,children:[t.jsx(e,{className:"animate-spin"})," Please wait"]})]})}),b=`import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
import { Loader2 } from 'lucide-react'\r
\r
const LoadingButtonCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
               <Button disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
               <Button variant="secondary" disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
               <Button variant="success" disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
               <Button variant="warning" disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
               <Button variant="error" disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
               <Button variant="info" disabled ><Loader2 className="animate-spin" /> Please wait</Button>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default LoadingButtonCode`,w=()=>t.jsx(a,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold",children:"Loading Button"}),t.jsx(N,{})]}),t.jsx(s,{children:b})]})}),C=[{to:"/",title:"Home"},{title:"Button"}],M=()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{title:"Button",items:C}),t.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(u,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(h,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(p,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(f,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(w,{})})]})]});export{M as default};
