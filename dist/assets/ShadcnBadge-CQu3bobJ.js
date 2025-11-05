import{j as e,L as s}from"./index-n5lagw8Y.js";import{C as i}from"./CardBox-DP5V6wyZ.js";import{B as a,b as n}from"./badge-BsvBrmA_.js";import{C as t}from"./CodeDialog-BcgW2Qgx.js";import{I as r}from"./iconify-VfOFnMl8.js";import{B as c}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";const d=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(a,{children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"error",children:"Error"})]})}),o=`import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge';\r
\r
const DefaultBadgeCode = () => {\r
  return (\r
    <>\r
      <div className="flex items-center gap-3 flex-wrap">\r
        <Badge>Primary</Badge>\r
        <Badge variant="secondary">Secondary</Badge>\r
        <Badge variant="success">Success</Badge>\r
        <Badge variant="warning">Warning</Badge>\r
        <Badge variant="info">Info</Badge>\r
        <Badge variant="error">Error</Badge>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultBadgeCode;\r
`,l=()=>e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Badge"}),e.jsx(d,{})]}),e.jsx(t,{children:o})]})}),m=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(a,{variant:"outline",children:"Primary"}),e.jsx(a,{variant:"outlineSecondary",children:"Secondary"}),e.jsx(a,{variant:"outlineSuccess",children:"Success"}),e.jsx(a,{variant:"outlineWarning",children:"Warning"}),e.jsx(a,{variant:"outlineInfo",children:"Info"}),e.jsx(a,{variant:"outlineError",children:"Error"})]})}),g=`import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge'\r
\r
const OutlineBadgeCode = () => {\r
  return (\r
    <>\r
    <div className='flex items-center gap-3 flex-wrap'>\r
      <Badge variant="outline">Primary</Badge>\r
      <Badge variant="outlineSecondary" >Secondary</Badge>\r
      <Badge variant="outlineSuccess" >Success</Badge>\r
      <Badge variant="outlineWarning" >Warning</Badge>\r
      <Badge variant="outlineInfo" >Info</Badge>\r
      <Badge variant="outlineError" >Error</Badge>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default OutlineBadgeCode`,x=()=>e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Outline Badge"}),e.jsx(m,{})]}),e.jsx(t,{children:g})]})}),j=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center flex-wrap gap-3 mt-4",children:[e.jsx(s,{to:"/ui-components/badge",className:n({variant:"default"}),children:"Badge Link 1"}),e.jsx(s,{to:"/ui-components/badge",className:n({variant:"secondary"}),children:"Badge Link 2"}),e.jsx(s,{to:"/ui-components/badge",className:n({variant:"success"}),children:"Badge Link 3"}),e.jsx(s,{to:"/ui-components/badge",className:n({variant:"warning"}),children:"Badge Link 4"}),e.jsx(s,{to:"/ui-components/badge",className:n({variant:"error"}),children:"Badge Link 5"}),e.jsx(s,{to:"/ui-components/badge",className:n({variant:"info"}),children:"Badge Link 6"})]})}),u=`\r
import { badgeVariants } from 'src/components/shadcn-ui/Default-Ui/badge'\r
import { Link } from 'react-router'\r
\r
const LinkBadgeCode = () => {\r
  return (\r
    <>\r
    <div className="flex items-center flex-wrap gap-3 mt-4">\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "default" })}>Badge Link 1</Link>\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "secondary" })}>Badge Link 2</Link>\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "success" })}>Badge Link 3</Link>\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "warning" })}>Badge Link 4</Link>\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "error" })}>Badge Link 5</Link>\r
            <Link to="/ui-components/badge" className={badgeVariants({ variant: "info" })}>Badge Link 6</Link>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default LinkBadgeCode`,h=()=>e.jsx(e.Fragment,{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Badge as Link"}),e.jsx(j,{})]}),e.jsx(t,{children:u})]})})}),p=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center flex-wrap gap-3 mt-4",children:[e.jsx(a,{children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{icon:"tabler:check",className:"text-base"}),"2 minutes ago"]})}),e.jsx(a,{variant:"secondary",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{icon:"tabler:time-duration-30",className:"text-base"}),"3 days ago"]})}),e.jsx(a,{variant:"success",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{icon:"tabler:time-duration-60",className:"text-base"}),"4 minutes dago"]})}),e.jsx(a,{variant:"error",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{icon:"tabler:calendar-time",className:"text-base"}),"6 days ago"]})}),e.jsx(a,{variant:"info",children:e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(r,{icon:"tabler:file-time",className:"text-base"}),"10 days ago"]})})]})}),v=`import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge'\r
import { Icon } from '@iconify/react/dist/iconify.js'\r
\r
const BadgeWithIconCode = () => {\r
  return (\r
     <>\r
     <div className="flex items-center flex-wrap gap-3 mt-4">\r
             <Badge><div className="flex items-center gap-1"><Icon icon="tabler:check" className='text-base' />2 minutes ago</div></Badge>\r
             <Badge variant="secondary" ><div className="flex items-center gap-1"><Icon icon="tabler:time-duration-30" className='text-base' />3 days ago</div></Badge>\r
             <Badge variant="success" ><div className="flex items-center gap-1"><Icon icon="tabler:time-duration-60" className='text-base' />4 minutes dago</div></Badge>\r
             <Badge variant="error" ><div className="flex items-center gap-1"><Icon icon="tabler:calendar-time" className='text-base' />6 days ago</div></Badge>\r
             <Badge variant="info" ><div className="flex items-center gap-1"><Icon icon="tabler:file-time" className='text-base' />10 days ago</div></Badge>\r
      </div>\r
     </>\r
  )\r
}\r
\r
export default BadgeWithIconCode`,B=()=>e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Badge With Icon Text"}),e.jsx(p,{})]}),e.jsx(t,{children:v})]})}),f=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx(a,{children:e.jsx(r,{icon:"tabler:check",className:"text-base"})}),e.jsx(a,{variant:"secondary",children:e.jsx(r,{icon:"tabler:time-duration-30",className:"text-base"})}),e.jsx(a,{variant:"success",children:e.jsx(r,{icon:"tabler:time-duration-60",className:"text-base"})}),e.jsx(a,{variant:"error",children:e.jsx(r,{icon:"tabler:calendar-time",className:"text-base"})}),e.jsx(a,{variant:"info",children:e.jsx(r,{icon:"tabler:file-time",className:"text-base"})})]})}),b=`import { Badge } from 'src/components/shadcn-ui/Default-Ui/badge';\r
import { Icon } from '@iconify/react/dist/iconify.js';\r
\r
const IconBadgeCode = () => {\r
  return (\r
    <>\r
      <div className="flex items-center gap-3 flex-wrap">\r
        <Badge>\r
          <Icon icon="tabler:check" className="text-base" />\r
        </Badge>\r
        <Badge variant="secondary">\r
          <Icon icon="tabler:time-duration-30" className="text-base" />\r
        </Badge>\r
        <Badge variant="success">\r
          <Icon icon="tabler:time-duration-60" className="text-base" />\r
        </Badge>\r
        <Badge variant="error">\r
          <Icon icon="tabler:calendar-time" className="text-base" />\r
        </Badge>\r
        <Badge variant="info">\r
          <Icon icon="tabler:file-time" className="text-base" />\r
        </Badge>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default IconBadgeCode;\r
`,N=()=>e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Icon Badge"}),e.jsx(f,{})]}),e.jsx(t,{children:b})]})}),k=[{to:"/",title:"Home"},{title:"Badge"}],$=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Badges",items:k}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(l,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(x,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(h,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(B,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(N,{})})]})]});export{$ as default};
