import{r as l,V as z,j as e,E as q,I as h,J as g,P as J,z as j}from"./index-n5lagw8Y.js";import{C as O}from"./CodeDialog-BcgW2Qgx.js";import{C as W}from"./CardBox-DP5V6wyZ.js";import{B as N}from"./button-BnqkFln5.js";import{C as w,b as F,c as I,d as D,a as L,e as A}from"./card-CvI5KskL.js";import{I as v}from"./input-BhFEyE6l.js";import{L as f}from"./label-DSxQPywz.js";import{c as B,R as Q,I as X}from"./index-j3ZgslDB.js";import{u as Y}from"./index-BF9WrqdZ.js";import{u as Z}from"./index-BtMSilTf.js";import{B as ee}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";var x="Tabs",[ae]=q(x,[B]),P=B(),[re,y]=ae(x),R=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:t,onValueChange:i,defaultValue:c,orientation:o="horizontal",dir:u,activationMode:p="automatic",...b}=a,d=Y(u),[n,m]=z({prop:t,onChange:i,defaultProp:c??"",caller:x});return e.jsx(re,{scope:s,baseId:Z(),value:n,onValueChange:m,orientation:o,dir:d,activationMode:p,children:e.jsx(h.div,{dir:d,"data-orientation":o,...b,ref:r})})});R.displayName=x;var S="TabsList",V=l.forwardRef((a,r)=>{const{__scopeTabs:s,loop:t=!0,...i}=a,c=y(S,s),o=P(s);return e.jsx(Q,{asChild:!0,...o,orientation:c.orientation,dir:c.dir,loop:t,children:e.jsx(h.div,{role:"tablist","aria-orientation":c.orientation,...i,ref:r})})});V.displayName=S;var _="TabsTrigger",E=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:t,disabled:i=!1,...c}=a,o=y(_,s),u=P(s),p=$(o.baseId,t),b=H(o.baseId,t),d=t===o.value;return e.jsx(X,{asChild:!0,...u,focusable:!i,active:d,children:e.jsx(h.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":b,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:p,...c,ref:r,onMouseDown:g(a.onMouseDown,n=>{!i&&n.button===0&&n.ctrlKey===!1?o.onValueChange(t):n.preventDefault()}),onKeyDown:g(a.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&o.onValueChange(t)}),onFocus:g(a.onFocus,()=>{const n=o.activationMode!=="manual";!d&&!i&&n&&o.onValueChange(t)})})})});E.displayName=_;var M="TabsContent",k=l.forwardRef((a,r)=>{const{__scopeTabs:s,value:t,forceMount:i,children:c,...o}=a,u=y(M,s),p=$(u.baseId,t),b=H(u.baseId,t),d=t===u.value,n=l.useRef(d);return l.useEffect(()=>{const m=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(J,{present:i||d,children:({present:m})=>e.jsx(h.div,{"data-state":d?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":p,hidden:!m,id:b,tabIndex:0,...o,ref:r,style:{...a.style,animationDuration:n.current?"0s":void 0},children:m&&c})})});k.displayName=M;function $(a,r){return`${a}-trigger-${r}`}function H(a,r){return`${a}-content-${r}`}var se=R,te=V,U=E,G=k;const oe=se,K=l.forwardRef(({className:a,...r},s)=>e.jsx(te,{ref:s,className:j("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-ld",a),...r}));K.displayName=void 0;const C=l.forwardRef(({className:a,...r},s)=>e.jsx(U,{ref:s,className:j("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...r}));C.displayName=U.displayName;const T=l.forwardRef(({className:a,...r},s)=>e.jsx(G,{ref:s,className:j("mt-2 ring-offset-border dark:ring-offset-darkborder border focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-none",a),...r}));T.displayName=G.displayName;const ne=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex items-center gap-3 mt-4",children:e.jsxs(oe,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(K,{className:"grid w-full grid-cols-2 bg-card h-12",children:[e.jsx(C,{value:"account",className:"data-[state=active]:bg-primary data-[state=active]:text-white py-2",children:"Account"}),e.jsx(C,{value:"password",className:"data-[state=active]:bg-primary data-[state=active]:text-white py-2",children:"Password"})]}),e.jsx(T,{value:"account",children:e.jsxs(w,{className:"px-3",children:[e.jsxs(F,{children:[e.jsx(I,{children:"Account"}),e.jsx(D,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(L,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"name",children:"Name"}),e.jsx(v,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"username",children:"Username"}),e.jsx(v,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(A,{children:e.jsx(N,{children:"Save changes"})})]})}),e.jsx(T,{value:"password",children:e.jsxs(w,{className:"px-3",children:[e.jsxs(F,{children:[e.jsx(I,{children:"Password"}),e.jsx(D,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(L,{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"current",children:"Current password"}),e.jsx(v,{id:"current",type:"password"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(f,{htmlFor:"new",children:"New password"}),e.jsx(v,{id:"new",type:"password"})]})]}),e.jsx(A,{children:e.jsx(N,{children:"Save password"})})]})})]})})}),ie=`import { Button } from "src/components/shadcn-ui/Default-Ui/button"\r
import {\r
    Card,\r
    CardContent,\r
    CardDescription,\r
    CardFooter,\r
    CardHeader,\r
    CardTitle,\r
} from "src/components/shadcn-ui/Default-Ui/card"\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input"\r
import { Label } from "src/components/shadcn-ui/Default-Ui/label"\r
import {\r
    Tabs,\r
    TabsContent,\r
    TabsList,\r
    TabsTrigger,\r
} from "src/components/shadcn-ui/Default-Ui/tabs"\r
\r
const BasicTabCode = () => {\r
  return (\r
    <>\r
     <div className="flex items-center gap-3 mt-4">\r
                <Tabs defaultValue="account" className="w-[400px]">\r
                    <TabsList className="grid w-full grid-cols-2 bg-card h-12">\r
                        <TabsTrigger value="account" className='data-[state=active]:bg-primary data-[state=active]:text-white py-2'>Account</TabsTrigger>\r
                        <TabsTrigger value="password" className='data-[state=active]:bg-primary data-[state=active]:text-white py-2'>Password</TabsTrigger>\r
                    </TabsList>\r
                    <TabsContent value="account"  >\r
                        <Card className='px-3'>\r
                            <CardHeader>\r
                                <CardTitle>Account</CardTitle>\r
                                <CardDescription>\r
                                    Make changes to your account here. Click save when you're done.\r
                                </CardDescription>\r
                            </CardHeader>\r
                            <CardContent className="space-y-2">\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="name">Name</Label>\r
                                    <Input id="name" defaultValue="Pedro Duarte" />\r
                                </div>\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="username">Username</Label>\r
                                    <Input id="username" defaultValue="@peduarte" />\r
                                </div>\r
                            </CardContent>\r
                            <CardFooter>\r
                                <Button>Save changes</Button>\r
                            </CardFooter>\r
                        </Card>\r
                    </TabsContent>\r
                    <TabsContent value="password" >\r
                        <Card className='px-3' >\r
                            <CardHeader>\r
                                <CardTitle >Password</CardTitle>\r
                                <CardDescription>\r
                                    Change your password here. After saving, you'll be logged out.\r
                                </CardDescription>\r
                            </CardHeader>\r
                            <CardContent className="space-y-2">\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="current">Current password</Label>\r
                                    <Input id="current" type="password" />\r
                                </div>\r
                                <div className="space-y-1">\r
                                    <Label htmlFor="new">New password</Label>\r
                                    <Input id="new" type="password" />\r
                                </div>\r
                            </CardContent>\r
                            <CardFooter>\r
                                <Button>Save password</Button>\r
                            </CardFooter>\r
                        </Card>\r
                    </TabsContent>\r
                </Tabs>\r
\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicTabCode`,de=()=>e.jsx(W,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Tab With Form"}),e.jsx(ne,{})]}),e.jsx(O,{children:ie})]})}),ce=[{to:"/",title:"Home"},{title:"Tab"}],Re=()=>e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Tab",items:ce}),e.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:e.jsx("div",{className:"col-span-12",children:e.jsx(de,{})})})]});export{Re as default};
