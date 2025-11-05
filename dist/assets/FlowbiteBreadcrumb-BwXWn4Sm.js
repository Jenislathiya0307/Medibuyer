import{j as r}from"./index-n5lagw8Y.js";import{C as a}from"./CardBox-DP5V6wyZ.js";import{j as m}from"./index-B3jNiIug.js";import{a as t,b as e,B as d}from"./BreadcrumbComp-BUvza-Rs.js";import{C as o}from"./CodeDialog-BcgW2Qgx.js";import{C as s}from"./ComponentApi-B3eoLsvt.js";import"./resolve-theme-BrLp9Ogr.js";import"./iconBase-CU_7cgqW.js";import"./chevron-right-icon-BGQVsHY5.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./TableRow-DNxHhbic.js";const i=()=>r.jsx("div",{children:r.jsxs(t,{"aria-label":"Solid background breadcrumb example",className:"bg-muted px-5 py-3 dark:bg-darkmuted rounded-md",children:[r.jsx(e,{href:"#",icon:m,children:"Home"}),r.jsx(e,{href:"#",children:"Projects"}),r.jsx(e,{children:"matdash IM"})]})}),c=`import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';\r
import { HiHome } from 'react-icons/hi';\r
\r
const BbgColor = () => {\r
  return (\r
    <div>\r
      <Breadcrumb\r
        aria-label="Solid background breadcrumb example"\r
        className="bg-muted px-5 py-3 dark:bg-darkmuted rounded-md"\r
      >\r
        <BreadcrumbItem href="#" icon={HiHome}>\r
          Home\r
        </BreadcrumbItem>\r
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\r
        <BreadcrumbItem>matdash IM</BreadcrumbItem>\r
      </Breadcrumb>\r
    </div>\r
  );\r
};\r
\r
export default BbgColor;\r
`,l=()=>r.jsx("div",{children:r.jsx(a,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Background Color"}),r.jsx(i,{})]}),r.jsx(o,{children:c})]})})}),n=()=>r.jsx("div",{children:r.jsxs(t,{"aria-label":"Default breadcrumb example",className:"justify-start! w-auto!",children:[r.jsx(e,{href:"#",icon:m,children:"Home"}),r.jsx(e,{href:"#",children:"Projects"}),r.jsx(e,{children:"matdash IM"})]})}),u=`import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';\r
import { HiHome } from 'react-icons/hi';\r
\r
const BDefaultCode = () => {\r
  return (\r
    <div>\r
      <Breadcrumb aria-label="Default breadcrumb example" className="justify-start! w-auto!">\r
        <BreadcrumbItem href="#" icon={HiHome}>\r
          Home\r
        </BreadcrumbItem>\r
        <BreadcrumbItem href="#">Projects</BreadcrumbItem>\r
        <BreadcrumbItem>matdash IM</BreadcrumbItem>\r
      </Breadcrumb>\r
    </div>\r
  );\r
};\r
\r
export default BDefaultCode;\r
`,b=()=>r.jsx("div",{children:r.jsx(a,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Breadcrumb"}),r.jsx(n,{})]}),r.jsx(o,{children:u})]})})}),p=[{to:"/",title:"Home"},{title:"Breadcrumb"}],x=[{id:"1",prop:"icon",description:"An optional icon to display alongside the breadcrumb item.",type:"'HiHome'",default:"-"}],R=()=>r.jsxs(r.Fragment,{children:[r.jsx(d,{title:"Breadcrumb",items:p}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(b,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(l,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(s,{allApis:x,componentName:"Breadcrumb"})})]})]});export{R as default};
