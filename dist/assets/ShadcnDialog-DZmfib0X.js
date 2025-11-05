import{B as p,j as e}from"./index-n5lagw8Y.js";import{C as h}from"./CardBox-DP5V6wyZ.js";import{D as i,a,b as s,c as l,d as o,e as t,f as d,g as m}from"./dialog-C3FRnXx1.js";import{B as r}from"./button-BnqkFln5.js";import{C as u}from"./CodeDialog-BcgW2Qgx.js";import{L as n}from"./label-DSxQPywz.js";import{I as c}from"./input-BhFEyE6l.js";import{B as D}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./index-DnokdofL.js";import"./index-BtMSilTf.js";import"./Combination-tUhB1mfi.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],g=p("Copy",x),j=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Open Dialog"})}),e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(o,{children:"Are you absolutely sure?"}),e.jsx(t,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"secondary",children:"Open Dialog"})}),e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(o,{children:"Are you absolutely sure?"}),e.jsx(t,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"warning",children:"Open Dialog"})}),e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(o,{children:"Are you absolutely sure?"}),e.jsx(t,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"error",children:"Open Dialog"})}),e.jsx(s,{children:e.jsxs(l,{children:[e.jsx(o,{children:"Are you absolutely sure?"}),e.jsx(t,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]})})]})]})}),y=`import {\r
    Dialog,\r
    DialogContent,\r
    DialogDescription,\r
    DialogHeader,\r
    DialogTitle,\r
    DialogTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/dialog"\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
\r
const BasicDialogCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Dialog>\r
                    <DialogTrigger asChild><Button>Open Dialog</Button></DialogTrigger>\r
                    <DialogContent >\r
                        <DialogHeader>\r
                            <DialogTitle>Are you absolutely sure?</DialogTitle> \r
                            <DialogDescription>\r
                                This action cannot be undone. This will permanently delete your account\r
                                and remove your data from our servers.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild><Button variant="secondary" >Open Dialog</Button></DialogTrigger>\r
                    <DialogContent >\r
                        <DialogHeader>\r
                            <DialogTitle>Are you absolutely sure?</DialogTitle>\r
                            <DialogDescription>\r
                                This action cannot be undone. This will permanently delete your account\r
                                and remove your data from our servers.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild><Button variant="warning" >Open Dialog</Button></DialogTrigger>\r
                    <DialogContent >\r
                        <DialogHeader>\r
                            <DialogTitle>Are you absolutely sure?</DialogTitle>\r
                            <DialogDescription>\r
                                This action cannot be undone. This will permanently delete your account\r
                                and remove your data from our servers.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild><Button variant="error" >Open Dialog</Button></DialogTrigger>\r
                    <DialogContent >\r
                        <DialogHeader>\r
                            <DialogTitle>Are you absolutely sure?</DialogTitle>\r
                            <DialogDescription>\r
                                This action cannot be undone. This will permanently delete your account\r
                                and remove your data from our servers.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                    </DialogContent>\r
                </Dialog>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicDialogCode`,C=()=>e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Dialog"}),e.jsx(j,{})]}),e.jsx(u,{children:y})]})}),v=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{className:"sm:max-w-md ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Share link"}),e.jsx(t,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(n,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(c,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(r,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(g,{})]})]}),e.jsx(d,{className:"sm:justify-start",children:e.jsx(m,{asChild:!0,children:e.jsx(r,{type:"button",variant:"error",children:"Close"})})})]})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outlinesecondary",children:"Open Dialog"})}),e.jsxs(s,{className:"sm:max-w-md ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Share link"}),e.jsx(t,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(n,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(c,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(r,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(g,{})]})]}),e.jsx(d,{className:"sm:justify-start",children:e.jsx(m,{asChild:!0,children:e.jsx(r,{type:"button",variant:"warning",children:"Close"})})})]})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outlinewarning",children:"Open Dialog"})}),e.jsxs(s,{className:"sm:max-w-md ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Share link"}),e.jsx(t,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(n,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(c,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(r,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(g,{})]})]}),e.jsx(d,{className:"sm:justify-start",children:e.jsx(m,{asChild:!0,children:e.jsx(r,{type:"button",variant:"error",children:"Close"})})})]})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"outlineerror",children:"Open Dialog"})}),e.jsxs(s,{className:"sm:max-w-md ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Share link"}),e.jsx(t,{children:"Anyone who has this link will be able to view this."})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("div",{className:"grid flex-1 gap-2",children:[e.jsx(n,{htmlFor:"link",className:"sr-only",children:"Link"}),e.jsx(c,{id:"link",defaultValue:"https://ui.shadcn.com/docs/installation",readOnly:!0})]}),e.jsxs(r,{type:"submit",size:"sm",className:"px-3",children:[e.jsx("span",{className:"sr-only",children:"Copy"}),e.jsx(g,{})]})]}),e.jsx(d,{className:"sm:justify-start",children:e.jsx(m,{asChild:!0,children:e.jsx(r,{type:"button",variant:"warning",children:"Close"})})})]})]})]})}),N=`import {\r
    Dialog,\r
    DialogClose,\r
    DialogContent,\r
    DialogDescription,\r
    DialogFooter,\r
    DialogHeader,\r
    DialogTitle,\r
    DialogTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/dialog"\r
import { Button } from 'src/components/shadcn-ui/Default-Ui/button'\r
import { Label } from 'src/components/shadcn-ui/Default-Ui/label'\r
import { Input } from 'src/components/shadcn-ui/Default-Ui/input'\r
import { Copy } from 'lucide-react'\r
\r
const DialogWithCustomCloseCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Dialog>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outline">Open Dialog</Button>\r
                    </DialogTrigger>\r
                    <DialogContent className="sm:max-w-md ">\r
                        <DialogHeader>\r
                            <DialogTitle>Share link</DialogTitle>\r
                            <DialogDescription>\r
                                Anyone who has this link will be able to view this.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                        <div className="flex items-center space-x-2">\r
                            <div className="grid flex-1 gap-2">\r
                                <Label htmlFor="link" className="sr-only">\r
                                    Link\r
                                </Label>\r
                                <Input\r
                                    id="link"\r
                                    defaultValue="https://ui.shadcn.com/docs/installation"\r
                                    readOnly\r
                                />\r
                            </div>\r
                            <Button type="submit" size="sm" className="px-3">\r
                                <span className="sr-only">Copy</span>\r
                                <Copy />\r
                            </Button>\r
                        </div>\r
                        <DialogFooter className="sm:justify-start">\r
                            <DialogClose asChild>\r
                                <Button type="button" variant="error">\r
                                    Close\r
                                </Button>\r
                            </DialogClose>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outlinesecondary">Open Dialog</Button>\r
                    </DialogTrigger>\r
                    <DialogContent className="sm:max-w-md ">\r
                        <DialogHeader>\r
                            <DialogTitle>Share link</DialogTitle>\r
                            <DialogDescription>\r
                                Anyone who has this link will be able to view this.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                        <div className="flex items-center space-x-2">\r
                            <div className="grid flex-1 gap-2">\r
                                <Label htmlFor="link" className="sr-only">\r
                                    Link\r
                                </Label>\r
                                <Input\r
                                    id="link"\r
                                    defaultValue="https://ui.shadcn.com/docs/installation"\r
                                    readOnly\r
                                />\r
                            </div>\r
                            <Button type="submit" size="sm" className="px-3">\r
                                <span className="sr-only">Copy</span>\r
                                <Copy />\r
                            </Button>\r
                        </div>\r
                        <DialogFooter className="sm:justify-start">\r
                            <DialogClose asChild>\r
                                <Button type="button" variant="warning">\r
                                    Close\r
                                </Button>\r
                            </DialogClose>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outlinewarning">Open Dialog</Button>\r
                    </DialogTrigger>\r
                    <DialogContent className="sm:max-w-md ">\r
                        <DialogHeader>\r
                            <DialogTitle>Share link</DialogTitle>\r
                            <DialogDescription>\r
                                Anyone who has this link will be able to view this.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                        <div className="flex items-center space-x-2">\r
                            <div className="grid flex-1 gap-2">\r
                                <Label htmlFor="link" className="sr-only">\r
                                    Link\r
                                </Label>\r
                                <Input\r
                                    id="link"\r
                                    defaultValue="https://ui.shadcn.com/docs/installation"\r
                                    readOnly\r
                                />\r
                            </div>\r
                            <Button type="submit" size="sm" className="px-3">\r
                                <span className="sr-only">Copy</span>\r
                                <Copy />\r
                            </Button>\r
                        </div>\r
                        <DialogFooter className="sm:justify-start">\r
                            <DialogClose asChild>\r
                                <Button type="button" variant="error">\r
                                    Close\r
                                </Button>\r
                            </DialogClose>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
                <Dialog>\r
                    <DialogTrigger asChild>\r
                        <Button variant="outlineerror">Open Dialog</Button>\r
                    </DialogTrigger>\r
                    <DialogContent className="sm:max-w-md ">\r
                        <DialogHeader>\r
                            <DialogTitle>Share link</DialogTitle>\r
                            <DialogDescription>\r
                                Anyone who has this link will be able to view this.\r
                            </DialogDescription>\r
                        </DialogHeader>\r
                        <div className="flex items-center space-x-2">\r
                            <div className="grid flex-1 gap-2">\r
                                <Label htmlFor="link" className="sr-only">\r
                                    Link\r
                                </Label>\r
                                <Input\r
                                    id="link"\r
                                    defaultValue="https://ui.shadcn.com/docs/installation"\r
                                    readOnly\r
                                />\r
                            </div>\r
                            <Button type="submit" size="sm" className="px-3">\r
                                <span className="sr-only">Copy</span>\r
                                <Copy />\r
                            </Button>\r
                        </div>\r
                        <DialogFooter className="sm:justify-start">\r
                            <DialogClose asChild>\r
                                <Button type="button" variant="warning">\r
                                    Close\r
                                </Button>\r
                            </DialogClose>\r
                        </DialogFooter>\r
                    </DialogContent>\r
                </Dialog>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default DialogWithCustomCloseCode`,f=()=>e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dialog With Custom Close"}),e.jsx(v,{})]}),e.jsx(u,{children:N})]})}),b=()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{children:"Edit Profile"})}),e.jsxs(s,{className:"sm:max-w-[425px] ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Edit profile"}),e.jsx(t,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(n,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(c,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(n,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(c,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(d,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]}),e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(r,{variant:"secondary",children:"Edit Profile"})}),e.jsxs(s,{className:"sm:max-w-[425px] ",children:[e.jsxs(l,{children:[e.jsx(o,{children:"Edit profile"}),e.jsx(t,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(n,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(c,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(n,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(c,{id:"username",defaultValue:"@peduarte",className:"col-span-3"})]})]}),e.jsx(d,{children:e.jsx(r,{type:"submit",children:"Save changes"})})]})]})]}),T=`import { Button } from 'src/components/shadcn-ui/Default-Ui/button';\r
import {\r
  Dialog,\r
  DialogContent,\r
  DialogDescription,\r
  DialogFooter,\r
  DialogHeader,\r
  DialogTitle,\r
  DialogTrigger,\r
} from 'src/components/shadcn-ui/Default-Ui/dialog';\r
import { Input } from 'src/components/shadcn-ui/Default-Ui/input';\r
import { Label } from 'src/components/shadcn-ui/Default-Ui/label';\r
\r
const DialogWithFormCode = () => {\r
  return (\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button>Edit Profile</Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-[425px] ">\r
            <DialogHeader>\r
              <DialogTitle>Edit profile</DialogTitle>\r
              <DialogDescription>\r
                Make changes to your profile here. Click save when you're done.\r
              </DialogDescription>\r
            </DialogHeader>\r
            <div className="grid gap-4 py-4">\r
              <div className="grid grid-cols-4 items-center gap-4">\r
                <Label htmlFor="name" className="text-right">\r
                  Name\r
                </Label>\r
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />\r
              </div>\r
              <div className="grid grid-cols-4 items-center gap-4">\r
                <Label htmlFor="username" className="text-right">\r
                  Username\r
                </Label>\r
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />\r
              </div>\r
            </div>\r
            <DialogFooter>\r
              <Button type="submit">Save changes</Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
        <Dialog>\r
          <DialogTrigger asChild>\r
            <Button variant="secondary">Edit Profile</Button>\r
          </DialogTrigger>\r
          <DialogContent className="sm:max-w-[425px] ">\r
            <DialogHeader>\r
              <DialogTitle>Edit profile</DialogTitle>\r
              <DialogDescription>\r
                Make changes to your profile here. Click save when you're done.\r
              </DialogDescription>\r
            </DialogHeader>\r
            <div className="grid gap-4 py-4">\r
              <div className="grid grid-cols-4 items-center gap-4">\r
                <Label htmlFor="name" className="text-right">\r
                  Name\r
                </Label>\r
                <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />\r
              </div>\r
              <div className="grid grid-cols-4 items-center gap-4">\r
                <Label htmlFor="username" className="text-right">\r
                  Username\r
                </Label>\r
                <Input id="username" defaultValue="@peduarte" className="col-span-3" />\r
              </div>\r
            </div>\r
            <DialogFooter>\r
              <Button type="submit">Save changes</Button>\r
            </DialogFooter>\r
          </DialogContent>\r
        </Dialog>\r
      </div>\r
  )\r
}\r
\r
export default DialogWithFormCode`,w=()=>e.jsx(h,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Dialog With Form"}),e.jsx(b,{})]}),e.jsx(u,{children:T})]})}),B=[{to:"/",title:"Home"},{title:"Dialog"}],X=()=>e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Dialog",items:B}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(C,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(f,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(w,{})})]})]});export{X as default};
