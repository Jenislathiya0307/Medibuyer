import{a1 as r,j as t,a2 as i}from"./index-n5lagw8Y.js";import{C as e}from"./CodeDialog-BcgW2Qgx.js";import{C as n}from"./CardBox-DP5V6wyZ.js";import{B as o}from"./button-BnqkFln5.js";import{B as a}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";const c=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({title:"Uh oh! Something went wrong.",description:"There was a problem with your request."})},children:"Show Toast"})})})},l=`import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { useToast } from 'src/hooks/use-toast';\r
const TitleToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default TitleToastCode`,d=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast With Title"}),t.jsx(c,{})]}),t.jsx(e,{children:l})]})})}),m=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:t.jsx(i,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})})},h=`import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";\r
import { useToast } from "src/hooks/use-toast";\r
\r
const ActionToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
              action: <ToastAction altText="Try again">Try again</ToastAction>,\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ActionToastCode`,u=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Toast With Action"}),t.jsx(m,{})]}),t.jsx(e,{children:h})]})})}),p=()=>{const{toast:s}=r();return t.jsx(t.Fragment,{children:t.jsx("div",{children:t.jsx(o,{variant:"outline",onClick:()=>{s({variant:"destructive",title:"Uh oh! Something went wrong.",description:"There was a problem with your request.",action:t.jsx(i,{altText:"Try again",children:"Try again"})})},children:"Show Toast"})})})},x=`import { useToast } from "src/hooks/use-toast";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { ToastAction } from "src/components/shadcn-ui/Default-Ui/toast";\r
\r
const DestrictiveToastCode = () => {\r
  const { toast } = useToast();\r
  return (\r
    <>\r
    <div>\r
      <Button\r
          variant="outline"\r
          onClick={() => {\r
            toast({\r
              variant: "destructive",\r
              title: "Uh oh! Something went wrong.",\r
              description: "There was a problem with your request.",\r
              action: <ToastAction altText="Try again">Try again</ToastAction>,\r
            });\r
          }}\r
        >\r
          Show Toast\r
        </Button>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DestrictiveToastCode`,T=()=>t.jsx("div",{children:t.jsx(n,{className:"p-0",children:t.jsxs("div",{children:[t.jsxs("div",{className:"p-6",children:[t.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Destructive Toast"}),t.jsx(p,{})]}),t.jsx(e,{children:x})]})})}),j=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Primary Toast"})}),t.jsx(o,{onClick:()=>{s({variant:"primary",title:"This is primary toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},v=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Secondary Toast"})}),t.jsx(o,{variant:"secondary",onClick:()=>{s({variant:"secondary",title:"This is secondary toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},g=()=>{const{toast:s}=r();return t.jsx("div",{children:t.jsxs(n,{children:[t.jsx("div",{className:"flex items-center justify-between mb-4",children:t.jsx("h4",{className:"text-lg font-semibold",children:"Warning Toast"})}),t.jsx(o,{variant:"warning",onClick:()=>{s({variant:"warning",title:"This is warning toast.",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "})},children:"Show Toast"})]})})},w=[{to:"/",title:"Home"},{title:"Toast"}],P=()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{title:"Toast",items:w}),t.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[t.jsx("div",{className:"col-span-12",children:t.jsx(d,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(u,{})}),t.jsx("div",{className:"col-span-12",children:t.jsx(T,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(j,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(v,{})}),t.jsx("div",{className:"lg:col-span-4 md:col-span-6 col-span-12",children:t.jsx(g,{})})]})]});export{P as default};
