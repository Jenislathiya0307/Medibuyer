import{j as o}from"./index-n5lagw8Y.js";import{C as l}from"./CardBox-DP5V6wyZ.js";import{T as t}from"./Tooltip-CDCKvG7n.js";import{B as i}from"./Button-BChG-RMT.js";import{C as r}from"./CodeDialog-BcgW2Qgx.js";import{B as e}from"./BreadcrumbComp-BUvza-Rs.js";import{C as n}from"./ComponentApi-B3eoLsvt.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const s=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"grid grid-cols-12 items-center gap-5",children:[o.jsx("div",{className:"lg:col-span-3  md:col-span-6 col-span-12",children:o.jsx(t,{content:"Tooltip content",animation:!1,children:o.jsx(i,{color:"primary",className:"w-full",children:"Not animated tooltip"})})}),o.jsx("div",{className:"lg:col-span-3  md:col-span-6 col-span-12",children:o.jsx(t,{content:"Tooltip content",animation:"duration-150",children:o.jsx(i,{color:"secondary",className:"w-full",children:"Fast animation"})})}),o.jsx("div",{className:"lg:col-span-3  md:col-span-6 col-span-12",children:o.jsx(t,{content:"Tooltip content",animation:"duration-300",children:o.jsx(i,{color:"info",className:"w-full",children:"Normal speed animation"})})}),o.jsx("div",{className:"lg:col-span-3  md:col-span-6 col-span-12",children:o.jsx(t,{content:"Tooltip content",animation:"duration-500",children:o.jsx(i,{color:"success",className:"w-full",children:"Slow animation"})})}),o.jsx("div",{className:"lg:col-span-3  md:col-span-6 col-span-12",children:o.jsx(t,{content:"Tooltip content",animation:"duration-1000",children:o.jsx(i,{color:"error",className:"w-full",children:"Really slow animation"})})})]})}),c=`import { Tooltip, Button } from 'flowbite-react';\r
\r
const AnimationTooltipCode = () => {\r
  return (\r
    <>\r
      <div className="grid grid-cols-12 items-center gap-5">\r
        <div className="lg:col-span-3  md:col-span-6 col-span-12">\r
          <Tooltip content="Tooltip content" animation={false}>\r
            <Button color="primary" className="w-full">\r
              Not animated tooltip\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="lg:col-span-3  md:col-span-6 col-span-12">\r
          <Tooltip content="Tooltip content" animation="duration-150">\r
            <Button color="secondary" className="w-full">\r
              Fast animation\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="lg:col-span-3  md:col-span-6 col-span-12">\r
          <Tooltip content="Tooltip content" animation="duration-300">\r
            <Button color="info" className="w-full">\r
              Normal speed animation\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="lg:col-span-3  md:col-span-6 col-span-12">\r
          <Tooltip content="Tooltip content" animation="duration-500">\r
            <Button color="success" className="w-full">\r
              Slow animation\r
            </Button>\r
          </Tooltip>\r
        </div>\r
        <div className="lg:col-span-3  md:col-span-6 col-span-12">\r
          <Tooltip content="Tooltip content" animation="duration-1000">\r
            <Button color="error" className="w-full">\r
              Really slow animation\r
            </Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default AnimationTooltipCode;\r
`,a=()=>o.jsx("div",{children:o.jsx(l,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Animation Tooltip"}),o.jsx(s,{})]}),o.jsx(r,{children:c})]})})}),p=()=>o.jsx(o.Fragment,{children:o.jsx("div",{children:o.jsx(t,{content:"Tooltip content",arrow:!1,children:o.jsx(i,{color:"info",children:"Default Tooltip"})})})}),d=`import { Button, Tooltip } from 'flowbite-react';\r
\r
const DisableTooltipCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Tooltip content="Tooltip content" arrow={false}>\r
          <Button color="info">Default Tooltip</Button>\r
        </Tooltip>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DisableTooltipCode;\r
`,m=()=>o.jsx("div",{children:o.jsx(l,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Disable Arrow Tooltip"}),o.jsx(p,{})]}),o.jsx(r,{children:d})]})})}),x=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex flex-wrap items-center gap-5",children:[o.jsx("div",{children:o.jsx(t,{content:"Tooltip content",placement:"top",children:o.jsx(i,{color:"primary",children:"Tooltip top"})})}),o.jsx("div",{children:o.jsx(t,{content:"Tooltip content",placement:"right",children:o.jsx(i,{color:"secondary",children:"Tooltip right"})})}),o.jsx("div",{children:o.jsx(t,{content:"Tooltip content",placement:"bottom",children:o.jsx(i,{color:"info",children:"Tooltip bottom"})})}),o.jsx("div",{children:o.jsx(t,{content:"Tooltip content",placement:"left",children:o.jsx(i,{color:"success",children:"Tooltip left"})})})]})}),T=`import { Tooltip, Button } from 'flowbite-react';\r
\r
const PlacementTooltipCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-wrap items-center gap-5">\r
        <div>\r
          <Tooltip content="Tooltip content" placement="top">\r
            <Button color={'primary'}>Tooltip top</Button>\r
          </Tooltip>\r
        </div>\r
        <div>\r
          <Tooltip content="Tooltip content" placement="right">\r
            <Button color="secondary">Tooltip right</Button>\r
          </Tooltip>\r
        </div>\r
        <div>\r
          <Tooltip content="Tooltip content" placement="bottom">\r
            <Button color="info">Tooltip bottom</Button>\r
          </Tooltip>\r
        </div>\r
        <div>\r
          <Tooltip content="Tooltip content" placement="left">\r
            <Button color="success">Tooltip left</Button>\r
          </Tooltip>\r
        </div>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default PlacementTooltipCode;\r
`,h=()=>o.jsx("div",{children:o.jsx(l,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Tooltip Placement"}),o.jsx(x,{})]}),o.jsx(r,{children:T})]})})}),j=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-2",children:[o.jsx(t,{content:"Tooltip content",style:"light",children:o.jsx(i,{color:"primary",children:"Light Tooltip"})}),o.jsx(t,{content:"Tooltip content",style:"dark",children:o.jsx(i,{color:"secondary",children:"Dark Tooltip"})})]})}),u=`import { Button, Tooltip } from 'flowbite-react';\r
\r
const TooltipStyleCode = () => {\r
  return (\r
    <>\r
      <div className="flex gap-2">\r
        <Tooltip content="Tooltip content" style="light">\r
          <Button color="primary">Light Tooltip</Button>\r
        </Tooltip>\r
        <Tooltip content="Tooltip content" style="dark">\r
          <Button color="secondary">Dark Tooltip</Button>\r
        </Tooltip>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default TooltipStyleCode;\r
`,g=()=>o.jsx("div",{children:o.jsx(l,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Tooltip Styles"}),o.jsx(j,{})]}),o.jsx(r,{children:u})]})})}),v=()=>o.jsx(o.Fragment,{children:o.jsxs("div",{className:"flex gap-2",children:[o.jsx(t,{content:"Tooltip content",trigger:"hover",children:o.jsx(i,{color:"primary",children:"Tooltip Hover"})}),o.jsx(t,{content:"Tooltip content",trigger:"click",children:o.jsx(i,{color:"secondary",children:"Tooltip Click"})})]})}),f=`import { Button, Tooltip } from 'flowbite-react';\r
\r
const TooltipTriggerCode = () => {\r
  return (\r
    <>\r
      <div className="flex gap-2">\r
        <Tooltip content="Tooltip content" trigger="hover">\r
          <Button color="primary">Tooltip Hover</Button>\r
        </Tooltip>\r
        <Tooltip content="Tooltip content" trigger="click">\r
          <Button color="secondary">Tooltip Click</Button>\r
        </Tooltip>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default TooltipTriggerCode;\r
`,N=()=>o.jsx("div",{children:o.jsx(l,{className:"p-0",children:o.jsxs("div",{children:[o.jsxs("div",{className:"p-6",children:[o.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Trigger Type"}),o.jsx(v,{})]}),o.jsx(r,{children:f})]})})}),B=[{to:"/",title:"Home"},{title:"Tooltips"}],y=[{id:"1",prop:"style",description:"Determines the visual style of the tooltip.",type:"'light' | 'dark'",default:"'light'"},{id:"2",prop:"placement",description:"Defines the position of the tooltip relative to the trigger element.",type:"'top' | 'right' | 'bottom' | 'left'",default:"'top'"},{id:"3",prop:"trigger",description:"Sets the event that triggers the tooltip visibility.",type:"'hover' | 'click'",default:"'hover'"},{id:"4",prop:"animation",description:"Controls the duration of the tooltip animation.",type:"'duration-150' | 'duration-300' | 'duration-500'",default:"'duration-300'"},{id:"5",prop:"arrow",description:"Toggles the visibility of the tooltip arrow.",type:"boolean",default:"true"}],K=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{title:"Tooltips",items:B}),o.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[o.jsx("div",{className:"col-span-12",children:o.jsx(g,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(N,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(m,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(a,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(h,{})}),o.jsx("div",{className:"col-span-12",children:o.jsx(n,{allApis:y,componentName:"Tooltips"})})]})]});export{K as default};
