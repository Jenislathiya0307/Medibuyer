import{B as f,r as t,j as r,z as d,S as g}from"./index-n5lagw8Y.js";import{C as p}from"./CodeDialog-BcgW2Qgx.js";import{C as b}from"./CardBox-DP5V6wyZ.js";import{C as w}from"./chevron-right-5Z9EAf_j.js";import{E as N}from"./ellipsis-6Heqh0i6.js";import{D as C,a as I,b as D,e as B}from"./dropdown-menu-DG_-WkbK.js";import{C as L}from"./chevron-down-DKv7O7MN.js";import{B as S}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./index-BF9WrqdZ.js";import"./Combination-tUhB1mfi.js";import"./index-BtMSilTf.js";import"./index-BRgOPuky.js";import"./index-BZ3HTsYl.js";import"./index-j3ZgslDB.js";import"./check-B0zkRfLc.js";import"./circle-BHpdX8NN.js";import"./chevron-right-icon-BGQVsHY5.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M22 2 2 22",key:"y4kqgn"}]],l=f("Slash",v),i=t.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));i.displayName="Breadcrumb";const o=t.forwardRef(({className:e,...a},m)=>r.jsx("ol",{ref:m,className:d("flex flex-wrap items-center gap-1.5 break-words text-sm text-darklink dark:text-bodytext sm:gap-2.5",e),...a}));o.displayName="BreadcrumbList";const n=t.forwardRef(({className:e,...a},m)=>r.jsx("li",{ref:m,className:d("inline-flex items-center gap-1.5",e),...a}));n.displayName="BreadcrumbItem";const c=t.forwardRef(({asChild:e,className:a,...m},h)=>{const j=e?g:"a";return r.jsx(j,{ref:h,className:d("transition-colors hover:text-foreground",a),...m})});c.displayName="BreadcrumbLink";const u=t.forwardRef(({className:e,...a},m)=>r.jsx("span",{ref:m,role:"link","aria-disabled":"true","aria-current":"page",className:d("font-normal text-foreground",e),...a}));u.displayName="BreadcrumbPage";const s=({children:e,className:a,...m})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:d("[&>svg]:w-3.5 [&>svg]:h-3.5",a),...m,children:e??r.jsx(w,{})});s.displayName="BreadcrumbSeparator";const x=({className:e,...a})=>r.jsxs("span",{role:"presentation","aria-hidden":"true",className:d("flex h-9 w-9 items-center justify-center",e),...a,children:[r.jsx(N,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"More"})]});x.displayName="BreadcrumbElipssis";const k=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:r.jsx(i,{children:r.jsxs(o,{children:[r.jsx(n,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(u,{children:"Breadcrumb"})})]})})})}),M=`import {\r
    Breadcrumb,\r
    BreadcrumbItem,\r
    BreadcrumbLink,\r
    BreadcrumbList,\r
    BreadcrumbPage,\r
    BreadcrumbSeparator,\r
} from "src/components/shadcn-ui/Default-Ui/breadcrumb"\r
\r
const BasicBreadcrumbCode = () => {\r
    return (\r
        <>\r
        <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Breadcrumb>\r
                    <BreadcrumbList>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator />\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator />\r
                        <BreadcrumbItem>\r
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\r
                        </BreadcrumbItem>\r
                    </BreadcrumbList>\r
                </Breadcrumb>\r
            </div>\r
        </>\r
    )\r
}\r
\r
export default BasicBreadcrumbCode`,W=()=>r.jsx(b,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Basic Breadcrumb"}),r.jsx(k,{})]}),r.jsx(p,{children:M})]})}),E=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:r.jsx(i,{children:r.jsxs(o,{children:[r.jsx(n,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{children:r.jsx(l,{})}),r.jsx(n,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(s,{children:r.jsx(l,{})}),r.jsx(n,{children:r.jsx(u,{children:"Breadcrumb"})})]})})})}),P=`import {\r
    Breadcrumb,\r
    BreadcrumbItem,\r
    BreadcrumbLink,\r
    BreadcrumbList,\r
    BreadcrumbPage,\r
    BreadcrumbSeparator,\r
} from "src/components/shadcn-ui/Default-Ui/breadcrumb"\r
import { Slash } from "lucide-react"\r
\r
const BreadcrumbWithSeparatorCode = () => {\r
  return (\r
    <>\r
     <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Breadcrumb>\r
                    <BreadcrumbList>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator>\r
                            <Slash />\r
                        </BreadcrumbSeparator>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator>\r
                            <Slash />\r
                        </BreadcrumbSeparator>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\r
                        </BreadcrumbItem>\r
                    </BreadcrumbList>\r
                </Breadcrumb>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbWithSeparatorCode`,y=()=>r.jsx(b,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Breadcrumb With Custom Separator"}),r.jsx(E,{})]}),r.jsx(p,{children:P})]})}),H=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:r.jsx(i,{children:r.jsxs(o,{children:[r.jsx(n,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{children:r.jsx(l,{})}),r.jsxs(C,{children:[r.jsxs(I,{className:"flex items-center gap-1",children:["Components",r.jsx(L,{size:18})]}),r.jsxs(D,{align:"start",children:[r.jsx(B,{children:"Documentation"}),r.jsx(B,{children:"Themes"}),r.jsx(B,{children:"GitHub"})]})]}),r.jsx(s,{children:r.jsx(l,{})}),r.jsx(n,{children:r.jsx(u,{children:"Breadcrumb"})})]})})})}),R=`import {\r
    Breadcrumb,\r
    BreadcrumbItem,\r
    BreadcrumbLink,\r
    BreadcrumbList,\r
    BreadcrumbPage,\r
    BreadcrumbSeparator,\r
} from "src/components/shadcn-ui/Default-Ui/breadcrumb"\r
import { ChevronDownIcon, Slash } from "lucide-react"\r
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'src/components/shadcn-ui/Default-Ui/dropdown-menu'\r
\r
const BreadcrumbWithDropdownCode = () => {\r
  return (\r
    <>\r
     <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Breadcrumb>\r
                    <BreadcrumbList>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator>\r
                            <Slash />\r
                        </BreadcrumbSeparator>\r
                        <DropdownMenu>\r
                            <DropdownMenuTrigger className="flex items-center gap-1">\r
                                Components\r
                                <ChevronDownIcon size={18} />\r
                            </DropdownMenuTrigger>\r
                            <DropdownMenuContent align="start" >\r
                                <DropdownMenuItem >Documentation</DropdownMenuItem>\r
                                <DropdownMenuItem >Themes</DropdownMenuItem>\r
                                <DropdownMenuItem >GitHub</DropdownMenuItem>\r
                            </DropdownMenuContent>\r
                        </DropdownMenu>\r
                        <BreadcrumbSeparator>\r
                            <Slash />\r
                        </BreadcrumbSeparator>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\r
                        </BreadcrumbItem>\r
                    </BreadcrumbList>\r
                </Breadcrumb>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbWithDropdownCode`,T=()=>r.jsx(b,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semiboldmb-4",children:"Breadcrumb With Dropdown"}),r.jsx(H,{})]}),r.jsx(p,{children:R})]})}),U=()=>r.jsx(r.Fragment,{children:r.jsx("div",{className:"flex flex-wrap items-center gap-3",children:r.jsx(i,{children:r.jsxs(o,{children:[r.jsx(n,{children:r.jsx(c,{href:"/",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(x,{})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"/components",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(u,{children:"Breadcrumb"})})]})})})}),F=`import {\r
    Breadcrumb,\r
    BreadcrumbItem,\r
    BreadcrumbLink,\r
    BreadcrumbList,\r
    BreadcrumbPage,\r
    BreadcrumbSeparator,\r
} from "src/components/shadcn-ui/Default-Ui/breadcrumb"\r
import { BreadcrumbEllipsis } from "src/components/shadcn-ui/Default-Ui/breadcrumb"\r
\r
const BreadcrumbWithEllipsisCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3">\r
                <Breadcrumb>\r
                    <BreadcrumbList>\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator />\r
                        <BreadcrumbItem>\r
                            <BreadcrumbEllipsis />\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator />\r
                        <BreadcrumbItem>\r
                            <BreadcrumbLink href="/components">Components</BreadcrumbLink>\r
                        </BreadcrumbItem>\r
                        <BreadcrumbSeparator />\r
                        <BreadcrumbItem>\r
                            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>\r
                        </BreadcrumbItem>\r
                    </BreadcrumbList>\r
                </Breadcrumb>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BreadcrumbWithEllipsisCode`,$=()=>r.jsx(b,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Breadcrumb Ellipsis"}),r.jsx(U,{})]}),r.jsx(p,{children:F})]})}),z=[{to:"/",title:"Home"},{title:"Breadcrumb"}],xr=()=>r.jsxs(r.Fragment,{children:[r.jsx(S,{title:"Breadcrumb",items:z}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(W,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(y,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(T,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx($,{})})]})]});export{xr as default};
