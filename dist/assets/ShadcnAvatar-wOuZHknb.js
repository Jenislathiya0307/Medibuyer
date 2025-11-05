import{r as o,j as a,E as y,I as g,F as R,W as f,z as A}from"./index-n5lagw8Y.js";import{C as B}from"./CodeDialog-BcgW2Qgx.js";import{C as _}from"./CardBox-DP5V6wyZ.js";import{s as M}from"./index-DAr7p5OD.js";import{B as P}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";function $(){return M.useSyncExternalStore(H,()=>!0,()=>!1)}function H(){return()=>{}}var x="Avatar",[T]=y(x),[D,N]=T(x),C=o.forwardRef((r,e)=>{const{__scopeAvatar:t,...n}=r,[i,s]=o.useState("idle");return a.jsx(D,{scope:t,imageLoadingStatus:i,onImageLoadingStatusChange:s,children:a.jsx(g.span,{...n,ref:e})})});C.displayName=x;var b="AvatarImage",w=o.forwardRef((r,e)=>{const{__scopeAvatar:t,src:n,onLoadingStatusChange:i=()=>{},...s}=r,v=N(b,t),l=W(n,s),c=R(p=>{i(p),v.onImageLoadingStatusChange(p)});return f(()=>{l!=="idle"&&c(l)},[l,c]),l==="loaded"?a.jsx(g.img,{...s,ref:e,src:n}):null});w.displayName=b;var F="AvatarFallback",I=o.forwardRef((r,e)=>{const{__scopeAvatar:t,delayMs:n,...i}=r,s=N(F,t),[v,l]=o.useState(n===void 0);return o.useEffect(()=>{if(n!==void 0){const c=window.setTimeout(()=>l(!0),n);return()=>window.clearTimeout(c)}},[n]),v&&s.imageLoadingStatus!=="loaded"?a.jsx(g.span,{...i,ref:e}):null});I.displayName=F;function h(r,e){return r?e?(r.src!==e&&(r.src=e),r.complete&&r.naturalWidth>0?"loaded":"loading"):"error":"idle"}function W(r,{referrerPolicy:e,crossOrigin:t}){const n=$(),i=o.useRef(null),s=n?(i.current||(i.current=new window.Image),i.current):null,[v,l]=o.useState(()=>h(s,r));return f(()=>{l(h(s,r))},[s,r]),f(()=>{const c=E=>()=>{l(E)};if(!s)return;const p=c("loaded"),j=c("error");return s.addEventListener("load",p),s.addEventListener("error",j),e&&(s.referrerPolicy=e),typeof t=="string"&&(s.crossOrigin=t),()=>{s.removeEventListener("load",p),s.removeEventListener("error",j)}},[s,t,e]),v}var L=C,S=w,k=I;const d=o.forwardRef(({className:r,...e},t)=>a.jsx(L,{ref:t,className:A("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",r),...e}));d.displayName=L.displayName;const m=o.forwardRef(({className:r,...e},t)=>a.jsx(S,{ref:t,className:A("aspect-square h-full w-full",r),...e}));m.displayName=S.displayName;const u=o.forwardRef(({className:r,...e},t)=>a.jsx(k,{ref:t,className:A("flex h-full w-full items-center justify-center rounded-full bg-muted",r),...e}));u.displayName=k.displayName;const q=()=>a.jsx(a.Fragment,{children:a.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4",children:[a.jsxs(d,{children:[a.jsx(m,{src:"/src/assets/images/profile/user-3.jpg",alt:"user"}),a.jsx(u,{children:"CN"})]}),a.jsxs(d,{children:[a.jsx(m,{src:"/src/assets/images/profile/user-2.jpg"}),a.jsx(u,{children:"CN"})]}),a.jsxs(d,{children:[a.jsx(m,{src:"/src/assets/images/profile/user-4.jpg"}),a.jsx(u,{children:"CN"})]}),a.jsxs(d,{children:[a.jsx(m,{src:"/src/assets/images/profile/user-5.jpg"}),a.jsx(u,{children:"CN"})]}),a.jsxs(d,{children:[a.jsx(m,{src:"/src/assets/images/profile/user-6.jpg"}),a.jsx(u,{children:"CN"})]})]})}),z=`import { Avatar, AvatarFallback, AvatarImage } from "src/components/shadcn-ui/Default-Ui/avatar";\r
\r
const BasicAvatarCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center gap-3 mt-4">\r
                <Avatar>\r
                    <AvatarImage src="/src/assets/images/profile/user-3.jpg" alt="user" />\r
                    <AvatarFallback>CN</AvatarFallback>\r
                </Avatar> \r
                <Avatar>\r
                    <AvatarImage src="/src/assets/images/profile/user-2.jpg" />\r
                    <AvatarFallback>CN</AvatarFallback>\r
                </Avatar> \r
                <Avatar>\r
                    <AvatarImage src="/src/assets/images/profile/user-4.jpg" />\r
                    <AvatarFallback>CN</AvatarFallback>\r
                </Avatar>\r
                <Avatar>\r
                    <AvatarImage src="/src/assets/images/profile/user-5.jpg" />\r
                    <AvatarFallback>CN</AvatarFallback>\r
                </Avatar>\r
                <Avatar>\r
                    <AvatarImage src="/src/assets/images/profile/user-6.jpg" />\r
                    <AvatarFallback>CN</AvatarFallback>\r
                </Avatar>\r
            </div>\r
    </>\r
  )\r
}\r
\r
export default BasicAvatarCode`,G=()=>a.jsx(_,{className:"p-0",children:a.jsxs("div",{children:[a.jsxs("div",{className:"p-6",children:[a.jsx("h4",{className:"text-lg font-semibold",children:"Avatar"}),a.jsx(q,{})]}),a.jsx(B,{children:z})]})}),K=[{to:"/",title:"Home"},{title:"Avatar"}],ca=()=>a.jsxs(a.Fragment,{children:[a.jsx(P,{title:"Avatar",items:K}),a.jsx("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:a.jsx("div",{className:"col-span-12",children:a.jsx(G,{})})})]});export{ca as default};
