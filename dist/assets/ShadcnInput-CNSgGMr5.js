import{B as _e,j as e,r as n,z as K,R as Ae,_ as Ge}from"./index-n5lagw8Y.js";import{C as U}from"./CodeDialog-BcgW2Qgx.js";import{C as N}from"./CardBox-DP5V6wyZ.js";import{I as f}from"./input-BhFEyE6l.js";import{L as I}from"./label-DSxQPywz.js";import{B as ee}from"./button-BnqkFln5.js";import{u as He,F as $e,a as Ue,b as ze,c as Ye,d as Ve,e as qe,f as Xe,t as Ze,o as Je,s as Qe}from"./form-DkIlE4ZK.js";import{B as Ke}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]],tt=_e("Dot",et),nt=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsx(f,{type:"text",placeholder:"Name"}),e.jsx(f,{type:"text",placeholder:"Comapny"}),e.jsx(f,{type:"email",placeholder:"Email"}),e.jsx(f,{type:"password",placeholder:"Password"})]})}),rt=`import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
\r
const SimpleInputcode = () => {\r
  return (\r
    <>\r
       <div className="flex flex-col gap-5 mt-4">\r
        <Input type="text" placeholder="Name" />\r
        <Input type="text" placeholder="Comapny" />\r
        <Input type="email" placeholder="Email" />\r
        <Input type="password" placeholder="Password" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default SimpleInputcode`,at=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"General Input"}),e.jsx(nt,{})]}),e.jsx(U,{children:rt})]})}),st=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(I,{htmlFor:"name",children:"Name"}),e.jsx(f,{type:"text"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(f,{type:"email"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"password",children:"Password"}),e.jsx(f,{type:"password"})]})]})}),lt=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
const InputLabelCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input type="password" />\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default InputLabelCode`,it=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Input With Label"}),e.jsx(st,{})]}),e.jsx(U,{children:lt})]})}),ot=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(I,{htmlFor:"name",children:"Name"}),e.jsx(f,{type:"text"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(f,{type:"email"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"password",children:"Password"}),e.jsx(f,{type:"password"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(ee,{children:"Submit"}),e.jsx(ee,{variant:"error",children:"Cancel"})]})]})}),ct=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
\r
const InputWithButtonCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input type="password" />\r
        </div>\r
        <div className="flex gap-3">\r
          <Button>Submit</Button>\r
          <Button variant={"error"}>Cancel</Button>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default InputWithButtonCode`,dt=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Input With Button"}),e.jsx(ot,{})]}),e.jsx(U,{children:ct})]})});var ut=Object.defineProperty,pt=Object.defineProperties,mt=Object.getOwnPropertyDescriptors,re=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Ne=(t,r,a)=>r in t?ut(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,xt=(t,r)=>{for(var a in r||(r={}))Se.call(r,a)&&Ne(t,a,r[a]);if(re)for(var a of re(r))Ce.call(r,a)&&Ne(t,a,r[a]);return t},ht=(t,r)=>pt(t,mt(r)),ft=(t,r)=>{var a={};for(var o in t)Se.call(t,o)&&r.indexOf(o)<0&&(a[o]=t[o]);if(t!=null&&re)for(var o of re(t))r.indexOf(o)<0&&Ce.call(t,o)&&(a[o]=t[o]);return a};function jt(t){let r=setTimeout(t,0),a=setTimeout(t,10),o=setTimeout(t,50);return[r,a,o]}function vt(t){let r=n.useRef();return n.useEffect(()=>{r.current=t}),r.current}var gt=18,Pe=40,bt=`${Pe}px`,yt=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function wt({containerRef:t,inputRef:r,pushPasswordManagerStrategy:a,isFocused:o}){let[S,m]=n.useState(!1),[D,C]=n.useState(!1),[W,z]=n.useState(!1),Y=n.useMemo(()=>a==="none"?!1:(a==="increase-width"||a==="experimental-no-flickering")&&S&&D,[S,D,a]),_=n.useCallback(()=>{let j=t.current,E=r.current;if(!j||!E||W||a==="none")return;let b=j,P=b.getBoundingClientRect().left+b.offsetWidth,A=b.getBoundingClientRect().top+b.offsetHeight/2,c=P-gt,V=A;document.querySelectorAll(yt).length===0&&document.elementFromPoint(c,V)===j||(m(!0),z(!0))},[t,r,W,a]);return n.useEffect(()=>{let j=t.current;if(!j||a==="none")return;function E(){let P=window.innerWidth-j.getBoundingClientRect().right;C(P>=Pe)}E();let b=setInterval(E,1e3);return()=>{clearInterval(b)}},[t,a]),n.useEffect(()=>{let j=o||document.activeElement===r.current;if(a==="none"||!j)return;let E=setTimeout(_,0),b=setTimeout(_,2e3),P=setTimeout(_,5e3),A=setTimeout(()=>{z(!0)},6e3);return()=>{clearTimeout(E),clearTimeout(b),clearTimeout(P),clearTimeout(A)}},[r,o,a,_]),{hasPWMBadge:S,willPushPWMBadge:Y,PWM_BADGE_SPACE_WIDTH:bt}}var Te=n.createContext({}),Ee=n.forwardRef((t,r)=>{var a=t,{value:o,onChange:S,maxLength:m,textAlign:D="left",pattern:C,placeholder:W,inputMode:z="numeric",onComplete:Y,pushPasswordManagerStrategy:_="increase-width",pasteTransformer:j,containerClassName:E,noScriptCSSFallback:b=It,render:P,children:A}=a,c=ft(a,["value","onChange","maxLength","textAlign","pattern","placeholder","inputMode","onComplete","pushPasswordManagerStrategy","pasteTransformer","containerClassName","noScriptCSSFallback","render","children"]),V,pe,me,xe,he;let[Fe,Oe]=n.useState(typeof c.defaultValue=="string"?c.defaultValue:""),d=o??Fe,L=vt(d),q=n.useCallback(s=>{S?.(s),Oe(s)},[S]),w=n.useMemo(()=>C?typeof C=="string"?new RegExp(C):C:null,[C]),u=n.useRef(null),le=n.useRef(null),ie=n.useRef({value:d,onChange:q,isIOS:typeof window<"u"&&((pe=(V=window?.CSS)==null?void 0:V.supports)==null?void 0:pe.call(V,"-webkit-touch-callout","none"))}),te=n.useRef({prev:[(me=u.current)==null?void 0:me.selectionStart,(xe=u.current)==null?void 0:xe.selectionEnd,(he=u.current)==null?void 0:he.selectionDirection]});n.useImperativeHandle(r,()=>u.current,[]),n.useEffect(()=>{let s=u.current,l=le.current;if(!s||!l)return;ie.current.value!==s.value&&ie.current.onChange(s.value),te.current.prev=[s.selectionStart,s.selectionEnd,s.selectionDirection];function x(){if(document.activeElement!==s){Z(null),J(null);return}let i=s.selectionStart,h=s.selectionEnd,ne=s.selectionDirection,y=s.maxLength,R=s.value,T=te.current.prev,F=-1,O=-1,k;if(R.length!==0&&i!==null&&h!==null){let ke=i===h,Me=i===R.length&&R.length<y;if(ke&&!Me){let M=i;if(M===0)F=0,O=1,k="forward";else if(M===y)F=M-1,O=M,k="backward";else if(y>1&&R.length>1){let de=0;if(T[0]!==null&&T[1]!==null){k=M<T[1]?"backward":"forward";let We=T[0]===T[1]&&T[0]<y;k==="backward"&&!We&&(de=-1)}F=de+M,O=de+M+1}}F!==-1&&O!==-1&&F!==O&&u.current.setSelectionRange(F,O,k)}let we=F!==-1?F:i,Ie=O!==-1?O:h,Re=k??ne;Z(we),J(Ie),te.current.prev=[we,Ie,Re]}if(document.addEventListener("selectionchange",x,{capture:!0}),x(),document.activeElement===s&&oe(!0),!document.getElementById("input-otp-style")){let i=document.createElement("style");if(i.id="input-otp-style",document.head.appendChild(i),i.sheet){let h="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";Q(i.sheet,"[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"),Q(i.sheet,`[data-input-otp]:autofill { ${h} }`),Q(i.sheet,`[data-input-otp]:-webkit-autofill { ${h} }`),Q(i.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),Q(i.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let v=()=>{l&&l.style.setProperty("--root-height",`${s.clientHeight}px`)};v();let g=new ResizeObserver(v);return g.observe(s),()=>{document.removeEventListener("selectionchange",x,{capture:!0}),g.disconnect()}},[]);let[fe,je]=n.useState(!1),[X,oe]=n.useState(!1),[B,Z]=n.useState(null),[G,J]=n.useState(null);n.useEffect(()=>{jt(()=>{var s,l,x,v;(s=u.current)==null||s.dispatchEvent(new Event("input"));let g=(l=u.current)==null?void 0:l.selectionStart,i=(x=u.current)==null?void 0:x.selectionEnd,h=(v=u.current)==null?void 0:v.selectionDirection;g!==null&&i!==null&&(Z(g),J(i),te.current.prev=[g,i,h])})},[d,X]),n.useEffect(()=>{L!==void 0&&d!==L&&L.length<m&&d.length===m&&Y?.(d)},[m,Y,L,d]);let H=wt({containerRef:le,inputRef:u,pushPasswordManagerStrategy:_,isFocused:X}),ve=n.useCallback(s=>{let l=s.currentTarget.value.slice(0,m);if(l.length>0&&w&&!w.test(l)){s.preventDefault();return}typeof L=="string"&&l.length<L.length&&document.dispatchEvent(new Event("selectionchange")),q(l)},[m,q,L,w]),ge=n.useCallback(()=>{var s;if(u.current){let l=Math.min(u.current.value.length,m-1),x=u.current.value.length;(s=u.current)==null||s.setSelectionRange(l,x),Z(l),J(x)}oe(!0)},[m]),be=n.useCallback(s=>{var l,x;let v=u.current;if(!j&&(!ie.current.isIOS||!s.clipboardData||!v))return;let g=s.clipboardData.getData("text/plain"),i=j?j(g):g;s.preventDefault();let h=(l=u.current)==null?void 0:l.selectionStart,ne=(x=u.current)==null?void 0:x.selectionEnd,y=(h!==ne?d.slice(0,h)+i+d.slice(ne):d.slice(0,h)+i+d.slice(h)).slice(0,m);if(y.length>0&&w&&!w.test(y))return;v.value=y,q(y);let R=Math.min(y.length,m-1),T=y.length;v.setSelectionRange(R,T),Z(R),J(T)},[m,q,w,d]),De=n.useMemo(()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[c.disabled]),ye=n.useMemo(()=>({position:"absolute",inset:0,width:H.willPushPWMBadge?`calc(100% + ${H.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:H.willPushPWMBadge?`inset(0 ${H.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:D,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[H.PWM_BADGE_SPACE_WIDTH,H.willPushPWMBadge,D]),Le=n.useMemo(()=>n.createElement("input",ht(xt({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-placeholder-shown":d.length===0||void 0,"data-input-otp-mss":B,"data-input-otp-mse":G,inputMode:z,pattern:w?.source,"aria-placeholder":W,style:ye,maxLength:m,value:d,ref:u,onPaste:s=>{var l;be(s),(l=c.onPaste)==null||l.call(c,s)},onChange:ve,onMouseOver:s=>{var l;je(!0),(l=c.onMouseOver)==null||l.call(c,s)},onMouseLeave:s=>{var l;je(!1),(l=c.onMouseLeave)==null||l.call(c,s)},onFocus:s=>{var l;ge(),(l=c.onFocus)==null||l.call(c,s)},onBlur:s=>{var l;oe(!1),(l=c.onBlur)==null||l.call(c,s)}})),[ve,ge,be,z,ye,m,G,B,c,w?.source,d]),ce=n.useMemo(()=>({slots:Array.from({length:m}).map((s,l)=>{var x;let v=X&&B!==null&&G!==null&&(B===G&&l===B||l>=B&&l<G),g=d[l]!==void 0?d[l]:null,i=d[0]!==void 0?null:(x=W?.[l])!=null?x:null;return{char:g,placeholderChar:i,isActive:v,hasFakeCaret:v&&g===null}}),isFocused:X,isHovering:!c.disabled&&fe}),[X,fe,m,G,B,c.disabled,d]),Be=n.useMemo(()=>P?P(ce):n.createElement(Te.Provider,{value:ce},A),[A,ce,P]);return n.createElement(n.Fragment,null,b!==null&&n.createElement("noscript",null,n.createElement("style",null,b)),n.createElement("div",{ref:le,"data-input-otp-container":!0,style:De,className:E},Be,n.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Le)))});Ee.displayName="Input";function Q(t,r){try{t.insertRule(r)}catch{console.error("input-otp could not insert CSS rule:",r)}}var It=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,Nt="^[a-zA-Z0-9]+$";const ae=n.forwardRef(({className:t,containerClassName:r,...a},o)=>e.jsx(Ee,{ref:o,containerClassName:K("flex items-center gap-2 has-disabled:opacity-50",r),className:K("disabled:cursor-not-allowed",t),...a}));ae.displayName="InputOTP";const $=n.forwardRef(({className:t,...r},a)=>e.jsx("div",{ref:a,className:K("flex items-center",t),...r}));$.displayName="InputOTPGroup";const p=n.forwardRef(({index:t,className:r,...a},o)=>{const S=n.useContext(Te),{char:m,hasFakeCaret:D,isActive:C}=S.slots[t];return e.jsxs("div",{ref:o,className:K("relative flex h-10 w-10 items-center justify-center border-y border-r border-ld text-ld text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md ",C&&"z-10 ring-1 ring-primary ring-offset-primary dark:ring-primary dark:ring-offset-primary",r),...a,children:[m,D&&e.jsx("div",{className:"pointer-events-none absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"h-4 w-px animate-caret-blink bg-neutral-950 duration-1000 dark:bg-neutral-50"})})]})});p.displayName="InputOTPSlot";const ue=n.forwardRef(({...t},r)=>e.jsx("div",{ref:r,role:"separator",...t,children:e.jsx(tt,{})}));ue.displayName="InputOTPSeparator";const St=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx(ae,{maxLength:6,pattern:Nt,children:e.jsxs($,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3}),e.jsx(p,{index:4}),e.jsx(p,{index:5})]})})})}),Ct=`import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";\r
import {\r
  InputOTP,\r
  InputOTPGroup,\r
  InputOTPSlot,\r
} from "src/components/shadcn-ui/Default-Ui/input-otp";\r
\r
\r
const OtpInputCode = () => {\r
  return (\r
    <>\r
      <div className='mt-4'>\r
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} >\r
        <InputOTPGroup>\r
          <InputOTPSlot index={0} />\r
          <InputOTPSlot index={1} />\r
          <InputOTPSlot index={2} />\r
          <InputOTPSlot index={3} />\r
          <InputOTPSlot index={4} />\r
          <InputOTPSlot index={5} />\r
        </InputOTPGroup>\r
      </InputOTP>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default OtpInputCode`,Pt=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"OTP Input"}),e.jsx(St,{})]}),e.jsx(U,{children:Ct})]})}),Tt=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col gap-5 mt-4",children:[e.jsxs("div",{children:[e.jsx(I,{htmlFor:"name",children:"Name"}),e.jsx(f,{disabled:!0,type:"text"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"email",children:"Email"}),e.jsx(f,{disabled:!0,type:"email"})]}),e.jsxs("div",{children:[e.jsx(I,{htmlFor:"password",children:"Password"}),e.jsx(f,{disabled:!0,type:"password"})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(ee,{disabled:!0,children:"Submit"}),e.jsx(ee,{disabled:!0,variant:"error",children:"Cancel"})]})]})}),Et=`import { Label } from "src/components/shadcn-ui/Default-Ui/label";\r
import { Button } from "src/components/shadcn-ui/Default-Ui/button";\r
import { Input } from "src/components/shadcn-ui/Default-Ui/input";\r
\r
const DisableInputWithButtonCode = () => {\r
  return (\r
    <>\r
      <div className="flex flex-col gap-5 mt-4">\r
        <div>\r
          <Label htmlFor="name">Name</Label>\r
          <Input disabled type="text" />\r
        </div>\r
        <div>\r
          <Label htmlFor="email">Email</Label>\r
          <Input disabled type="email" />\r
        </div>\r
        <div>\r
          <Label htmlFor="password">Password</Label>\r
          <Input disabled type="password" />\r
        </div>\r
        <div className="flex gap-3">\r
          <Button disabled>Submit</Button>\r
          <Button disabled variant={"error"}>\r
            Cancel\r
          </Button>\r
        </div>\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DisableInputWithButtonCode`,Ft=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Input"}),e.jsx(Tt,{})]}),e.jsx(U,{children:Et})]})}),Ot=()=>e.jsxs(N,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"OTP Input Seprator"})}),e.jsxs(ae,{maxLength:6,children:[e.jsxs($,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1})]}),e.jsx(ue,{}),e.jsxs($,{children:[e.jsx(p,{index:2}),e.jsx(p,{index:3})]}),e.jsx(ue,{}),e.jsxs($,{children:[e.jsx(p,{index:4}),e.jsx(p,{index:5})]})]})]}),Dt=()=>{const[t,r]=Ae.useState("");return e.jsxs(N,{children:[e.jsx("div",{className:"flex items-center justify-between ",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Controlled OTP Input"})}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(ae,{maxLength:6,value:t,onChange:a=>r(a),children:e.jsxs($,{children:[e.jsx(p,{index:0}),e.jsx(p,{index:1}),e.jsx(p,{index:2}),e.jsx(p,{index:3}),e.jsx(p,{index:4}),e.jsx(p,{index:5})]})}),e.jsx("div",{className:" text-sm text-ld",children:t===""?e.jsx(e.Fragment,{children:"Enter your one-time password."}):e.jsxs(e.Fragment,{children:["You entered: ",t]})})]})]})},se=n.forwardRef(({className:t,...r},a)=>e.jsx("textarea",{className:K("flex min-h-[80px] w-full rounded-md border border-ld focus:border-primary bg-transparent px-3 py-2 ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 text-ld text-sm focus:ring-0",t),ref:a,...r}));se.displayName="Textarea";const Lt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(se,{placeholder:"Type your message here.",className:"h-[130px] mt-4"})})}),Bt=`import { Textarea } from "src/components/shadcn-ui/Default-Ui/textarea";\r
\r
\r
const DafaultTextareacode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Textarea placeholder="Type your message here." className="h-[130px] mt-4" />\r
      </div>\r
    </>\r
  )\r
}\r
\r
export default DafaultTextareacode`,Rt=()=>e.jsx(N,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Default Textarea"}),e.jsx(Lt,{})]}),e.jsx(U,{children:Bt})]})}),kt=()=>e.jsxs(N,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Textarea with Label"})}),e.jsxs("div",{className:"grid w-full gap-1.5",children:[e.jsx(I,{htmlFor:"message-2",children:"Your Message"}),e.jsx(se,{placeholder:"Type your message here.",id:"message-2"}),e.jsx("p",{className:"text-sm text-bodytext",children:"Your message will be copied to the support team."})]})]}),Mt=Je({bio:Qe().min(10,{message:"Bio must be at least 10 characters."}).max(160,{message:"Bio must not be longer than 30 characters."})}),Wt=()=>{const t=He({resolver:Ze(Mt)});function r(a){Ge({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(a,null,2)})})})}return e.jsxs(N,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Form Textarea"})}),e.jsx($e,{...t,children:e.jsxs("form",{onSubmit:t.handleSubmit(r),className:"w-full space-y-6",children:[e.jsx(Ue,{control:t.control,name:"bio",render:({field:a})=>e.jsxs(ze,{children:[e.jsx(Ye,{children:"Bio"}),e.jsx(Ve,{children:e.jsx(se,{placeholder:"Tell us a little bit about yourself",className:"resize-none w-full h-[150px]",...a})}),e.jsxs(qe,{children:["You can ",e.jsx("span",{children:"@mention"})," other users and organizations."]}),e.jsx(Xe,{})]})}),e.jsx(ee,{type:"submit",children:"Submit"})]})})]})},_t=[{to:"/",title:"Home"},{title:"Input"}],ln=()=>e.jsxs(e.Fragment,{children:[e.jsx(Ke,{title:"Input",items:_t}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(at,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(it,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(dt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ft,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Rt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(kt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Wt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Pt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ot,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Dt,{})})]})]});export{ln as default};
