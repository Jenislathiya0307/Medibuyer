import{B as d,r as c,j as r,z as o,A}from"./index-n5lagw8Y.js";import{C as m}from"./CodeDialog-BcgW2Qgx.js";import{C as h}from"./CardBox-DP5V6wyZ.js";import{B as p}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],l=d("Terminal",g),u=A("relative w-full rounded-lg  p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",primary:"bg-primary text-white",secondary:"bg-secondary text-white",success:"bg-success text-white",error:"bg-error text-white",warning:"bg-warning text-white",info:"bg-info text-white",lightprimary:"bg-lightprimary text-primary",lightsecondary:"bg-lightsecondary text-secondary",lightsuccess:"bg-lightsuccess text-success",lightwarning:"bg-lightwarning text-warning",lighterror:"bg-lighterror text-error",lightinfo:"bg-lightinfo text-info",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),e=c.forwardRef(({className:n,variant:i,...a},x)=>r.jsx("div",{ref:x,role:"alert",className:o(u({variant:i}),n),...a}));e.displayName="Alert";const t=c.forwardRef(({className:n,...i},a)=>r.jsx("h5",{ref:a,className:o("mb-1 font-medium leading-none tracking-tight",n),...i}));t.displayName="AlertTitle";const s=c.forwardRef(({className:n,...i},a)=>r.jsx("div",{ref:a,className:o("text-sm [&_p]:leading-relaxed",n),...i}));s.displayName="AlertDescription";const j=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-col gap-3 mt-4",children:[r.jsxs(e,{variant:"primary",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Primary Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"secondary",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Secondary Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"success",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Success Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"warning",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Warning Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"error",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Error Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"info",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-white",children:"Info Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]})]})}),N=`import {\r
    Alert,\r
    AlertDescription,\r
    AlertTitle,\r
  } from "src/components/shadcn-ui/Default-Ui/alert"\r
  import { Terminal } from "lucide-react"\r
\r
const BasicAlertCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-col gap-3 mt-4">\r
                <Alert variant="primary">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Primary Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="secondary">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Secondary Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="success">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Success Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="warning">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Warning Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="error">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Error Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="info">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-white">Info Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicAlertCode`,y=()=>r.jsx(h,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Basic Alert"}),r.jsx(j,{})]}),r.jsx(m,{children:N})]})}),w=()=>r.jsx(r.Fragment,{children:r.jsxs("div",{className:"flex flex-col gap-3 mt-4",children:[r.jsxs(e,{variant:"lightprimary",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-primary",children:"Primary Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"lightsecondary",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-secondary",children:"Secondary Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"lightsuccess",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-success",children:"Success Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"lightwarning",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-warning",children:"Warning Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"lighterror",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-error",children:"Error Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]}),r.jsxs(e,{variant:"lightinfo",children:[r.jsx(l,{className:"h-4 w-4"}),r.jsx(t,{className:"text-info",children:"Info Alert!"}),r.jsx(s,{children:"Use our highly customizable component"})]})]})}),v=`import {\r
    Alert,\r
    AlertDescription,\r
    AlertTitle,\r
  } from "src/components/shadcn-ui/Default-Ui/alert"\r
  import { Terminal } from "lucide-react"\r
\r
const BasicAlertCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-col gap-3 mt-4">\r
                <Alert variant="lightprimary">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-primary">Primary Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="lightsecondary">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-secondary">Secondary Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="lightsuccess">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-success">Success Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="lightwarning">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-warning">Warning Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="lighterror">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-error">Error Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
                <Alert variant="lightinfo">\r
                    <Terminal className="h-4 w-4" />\r
                    <AlertTitle className="text-info">Info Alert!</AlertTitle>\r
                    <AlertDescription>\r
                        Use our highly customizable component\r
                    </AlertDescription>\r
                </Alert>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicAlertCode`,f=()=>r.jsx(h,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Light Alert"}),r.jsx(w,{})]}),r.jsx(m,{children:v})]})}),b=[{to:"/",title:"Home"},{title:"Alert"}],_=()=>r.jsxs(r.Fragment,{children:[r.jsx(p,{title:"Alerts",items:b}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(y,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(f,{})})]})]});export{_ as default};
