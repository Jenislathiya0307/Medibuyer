import{j as e,R as o}from"./index-n5lagw8Y.js";import{C as s}from"./CodeDialog-BcgW2Qgx.js";import{C as r}from"./CardBox-DP5V6wyZ.js";import{R as d,C as p,a as m}from"./index-Cu6YJtGU.js";import{B as c}from"./button-BnqkFln5.js";import{C as x}from"./chevrons-up-down-xmSC9ouA.js";import{B as u}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./index-BtMSilTf.js";import"./chevron-right-icon-BGQVsHY5.js";const t=d,n=p,a=m,h=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(n,{className:"text-ld text-15 font-medium",children:"Can I use this in my project?"}),e.jsx(a,{className:"mt-2 text-darklink dark:text-bodytext",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})]})})}),C=`import {\r
  Collapsible,\r
  CollapsibleContent,\r
  CollapsibleTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/collapsible";\r
\r
const BasicCollapseCode = () => {\r
  return (\r
    <>\r
    <div>\r
      <Collapsible>\r
        <CollapsibleTrigger className="text-ld text-15 font-medium">\r
          Can I use this in my project?\r
        </CollapsibleTrigger>\r
        <CollapsibleContent className="mt-2 text-darklink dark:text-bodytext">\r
          Lorem Ipsum is simply dummy text of the printing and typesetting\r
          industry. Lorem Ipsum has been the industry's standard dummy text ever\r
          since the 1500s, when an unknown printer took a galley of type and\r
          scrambled it to make a type specimen book. It has survived not only\r
          five centuries, but also the leap into electronic typesetting,\r
          remaining essentially unchanged. It was popularised in the 1960s with\r
          the release of Letraset sheets containing Lorem Ipsum passages, and\r
          more recently with desktop publishing software like Aldus PageMaker\r
          including versions of Lorem Ipsum.\r
        </CollapsibleContent>\r
      </Collapsible>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicCollapseCode`,b=()=>e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Collapse"}),e.jsx(h,{})]}),e.jsx(s,{children:C})]})}),g=()=>{const[i,l]=o.useState(!1);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{open:i,onOpenChange:l,className:"w-full space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4 ",children:[e.jsx("h4",{className:"text-ld text-15 font-medium",children:"@peduarte starred 3 repositories"}),e.jsx(n,{asChild:!0,children:e.jsxs(c,{variant:"ghost",size:"sm",className:"w-9 p-0",children:[e.jsx(x,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})})]}),e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@radix-ui/primitives"}),e.jsxs(a,{className:"space-y-2",children:[e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext",children:"@stitches/react"})]})]})})})},y=`import {\r
  Collapsible,\r
  CollapsibleContent,\r
  CollapsibleTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/collapsible";\r
import { ChevronsUpDown } from "lucide-react";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import React from "react";\r
\r
const BasicCollapseCode = () => {\r
    const [isOpen, setIsOpen] = React.useState(false);\r
  return (\r
    <>\r
    <div>\r
      <Collapsible\r
        open={isOpen}\r
        onOpenChange={setIsOpen}\r
        className="w-full space-y-2"\r
      >\r
        <div className="flex items-center justify-between space-x-4 ">\r
          <h4 className="text-ld text-15 font-medium">\r
            @peduarte starred 3 repositories\r
          </h4>\r
          <CollapsibleTrigger asChild>\r
            <Button variant="ghost" size="sm" className="w-9 p-0">\r
              <ChevronsUpDown className="h-4 w-4" />\r
              <span className="sr-only">Toggle</span>\r
            </Button>\r
          </CollapsibleTrigger>\r
        </div>\r
        <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
          @radix-ui/primitives\r
        </div>\r
        <CollapsibleContent className="space-y-2">\r
          <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
            @radix-ui/colors\r
          </div>\r
          <div className="rounded-md border border-ld px-4 py-3 text-sm text-darklink dark:text-bodytext">\r
            @stitches/react\r
          </div>\r
        </CollapsibleContent>\r
      </Collapsible>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default BasicCollapseCode`,v=()=>e.jsx(r,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Advance Collapse"}),e.jsx(g,{})]}),e.jsx(s,{children:y})]})}),f=[{to:"/",title:"Home"},{title:"Collapsible"}],H=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"Collapsible",items:f}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(b,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(v,{})})]})]});export{H as default};
