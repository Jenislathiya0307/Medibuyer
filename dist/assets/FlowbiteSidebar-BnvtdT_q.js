import{r as I,o as F,j as e,p as z,t as Y}from"./index-n5lagw8Y.js";import{C as l}from"./CardBox-DP5V6wyZ.js";import{u as R,s as W,d as V,c,a as h,b as n,S as r}from"./SidebarItems-DAAqr0-y.js";import{I as b,d as J,c as S,a as C,b as y}from"./IconUserPlus-BtV5bIU2.js";import{c as f}from"./createReactComponent-CsMxoXbl.js";import{C as m}from"./CodeDialog-BcgW2Qgx.js";import{y as Q,c as X}from"./index-B3jNiIug.js";import{u as H,g as s,r as A}from"./resolve-theme-BrLp9Ogr.js";import{C as Z}from"./chevron-down-icon-enmfNaQ_.js";import{T as _}from"./Tooltip-CDCKvG7n.js";import{I as u}from"./IconUser-Bhmwcg66.js";import{B as ee}from"./Badge-zDQe1ecK.js";import{F as re}from"./FullLogo-D6PRg_b9.js";import{B as ie}from"./BreadcrumbComp-BUvza-Rs.js";import{C as ae}from"./ComponentApi-B3eoLsvt.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-CU_7cgqW.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const L=I.forwardRef((a,d)=>{const{theme:x,clearTheme:N,applyTheme:U,isCollapsed:j}=R(),o=F(),i=H([W.collapse,o.theme?.sidebar?.collapse,x?.collapse,a.theme],[s(o.clearTheme,"sidebar.collapse"),s(N,"collapse"),a.clearTheme],[s(o.applyTheme,"sidebar.collapse"),s(U,"collapse"),a.applyTheme]),{children:T,className:D,icon:g,label:v,chevronIcon:E=Z,renderChevronIcon:P,open:B=!1,...q}=A(a,o.props?.sidebarCollapse),k=I.useId(),[t,M]=I.useState(B);I.useEffect(()=>M(B),[B]);function $({children:G}){return j&&!t?e.jsx(_,{content:v,placement:"right",children:G}):G}return e.jsx("li",{ref:d,children:e.jsxs($,{children:[e.jsxs("button",{id:`flowbite-sidebar-collapse-${k}`,onClick:()=>M(!t),title:v,type:"button",className:z(i.button,D),...q,children:[g&&e.jsx(g,{"aria-hidden":!0,"data-testid":"flowbite-sidebar-collapse-icon",className:z(i.icon.base,i.icon.open[t?"on":"off"])}),j?e.jsx("span",{className:i.label.title,children:v}):e.jsxs(e.Fragment,{children:[e.jsx("span",{"data-testid":"flowbite-sidebar-collapse-label",className:i.label.base,children:v}),P?P(i,t):e.jsx(E,{"aria-hidden":!0,className:z(i.label.icon.base,i.label.icon.open[t?"on":"off"])})]})]}),e.jsx("ul",{"aria-labelledby":`flowbite-sidebar-collapse-${k}`,hidden:!t,className:i.list,children:e.jsx(V.Provider,{value:{isInsideCollapse:!0},children:T})})]})})});L.displayName="SidebarCollapse";const K=I.forwardRef((a,d)=>{const{theme:x,clearTheme:N,applyTheme:U,isCollapsed:j}=R(),o=F(),i=H([W.cta,o.theme?.sidebar?.cta,x?.cta,a.theme],[s(o.clearTheme,"sidebar.cta"),s(N,"cta"),a.clearTheme],[s(o.applyTheme,"sidebar.cta"),s(U,"cta"),a.applyTheme]),{color:T="info",className:D,...g}=A(a,o.props?.sidebarCTA);return e.jsx("div",{ref:d,"data-testid":"sidebar-cta",hidden:j,className:z(i.base,i.color[T],D),...g})});K.displayName="SidebarCTA";var O=f("brand-shopee","IconBrandShopee",[["path",{d:"M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z",key:"svg-0"}],["path",{d:"M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4",key:"svg-1"}],["path",{d:"M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1",key:"svg-2"}]]),w=f("brand-trello","IconBrandTrello",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M7 7h3v10h-3z",key:"svg-1"}],["path",{d:"M14 7h3v6h-3z",key:"svg-2"}]]),oe=f("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),p=f("inbox","IconInbox",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M4 13h3l3 3h4l3 -3h3",key:"svg-1"}]]),se=f("world-upload","IconWorldUpload",[["path",{d:"M21 12a9 9 0 1 0 -9 9",key:"svg-0"}],["path",{d:"M3.6 9h16.8",key:"svg-1"}],["path",{d:"M3.6 15h8.4",key:"svg-2"}],["path",{d:"M11.578 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3c1.719 2.755 2.5 5.876 2.5 9",key:"svg-4"}],["path",{d:"M18 21v-7m3 3l-3 -3l-3 3",key:"svg-5"}]]);const ne=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(c,{"aria-label":"Sidebar with content separator example",children:e.jsxs(h,{children:[e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Inbox"})]}),e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(se,{size:20}),children:"Upgrade to Pro"}),e.jsx(r,{href:"#",icon:()=>e.jsx(oe,{size:20}),children:"Documentation"}),e.jsx(r,{href:"#",icon:()=>e.jsx(J,{size:20}),children:"Help"}),e.jsx(r,{href:"#",icon:()=>e.jsx(S,{size:20}),children:"Sign Up"})]})]})})})}),de=`import {\r
  IconLayoutDashboard,\r
  IconBrandTrello,\r
  IconInbox,\r
  IconWorldUpload,\r
  IconFileText,\r
  IconInfoSquareRounded,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
\r
const ContentSeparatorCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with content separator example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconWorldUpload size={20} />}>\r
                Upgrade to Pro\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconFileText size={20} />}>\r
                Documentation\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInfoSquareRounded size={20} />}>\r
                Help\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default ContentSeparatorCode;\r
`,te=()=>e.jsx("div",{children:e.jsx(l,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Content Separator"}),e.jsx(ne,{})]}),e.jsx(m,{children:de})]})})}),le=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(c,{"aria-label":"Sidebar with multi-level dropdown example",children:e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsxs(L,{icon:()=>e.jsx(O,{size:20}),label:"E-commerce",renderChevronIcon:(a,d)=>{const x=d?Q:X;return e.jsx(x,{"aria-hidden":!0,className:Y(a.label.icon.open[d?"on":"off"])})},children:[e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Sales"}),e.jsx(r,{href:"#",children:"Refunds"}),e.jsx(r,{href:"#",children:"Shipping"}),e.jsx(r,{href:"#",children:"User"})]}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(C,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(y,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(S,{size:20}),children:"Sign Up"})]})})})})}),ce=`import {\r
  IconLayoutDashboard,\r
  IconBrandShopee,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  SidebarCollapse,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi';\r
import { twMerge } from 'tailwind-merge';\r
\r
const CustomDropdownIconCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with multi-level dropdown example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarCollapse\r
                icon={() => <IconBrandShopee size={20} />}\r
                label="E-commerce"\r
                renderChevronIcon={(theme, open) => {\r
                  const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;\r
\r
                  return (\r
                    <IconComponent\r
                      aria-hidden\r
                      className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])}\r
                    />\r
                  );\r
                }}\r
              >\r
                <SidebarItem href="#">Products</SidebarItem>\r
                <SidebarItem href="#">Sales</SidebarItem>\r
                <SidebarItem href="#">Refunds</SidebarItem>\r
                <SidebarItem href="#">Shipping</SidebarItem>\r
                <SidebarItem href="#">User</SidebarItem>\r
              </SidebarCollapse>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default CustomDropdownIconCode;\r
`,he=()=>e.jsx("div",{children:e.jsx(l,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Custom Dropdown Icon"}),e.jsx(le,{})]}),e.jsx(m,{children:ce})]})})}),be=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(c,{"aria-label":"Default sidebar example",children:e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),label:"Pro",labelColor:"dark",children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),label:"3",children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(C,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(y,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(S,{size:20}),children:"Sign Up"})]})})})})}),me=`import {\r
  IconBrandTrello,\r
  IconInbox,\r
  IconLayoutDashboard,\r
  IconLogin2,\r
  IconShoppingBag,\r
  IconUser,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
\r
const DefaultSidebarCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Default sidebar example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem\r
                href="#"\r
                icon={() => <IconBrandTrello size={20} />}\r
                label="Pro"\r
                labelColor="dark"\r
              >\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />} label="3">\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultSidebarCode;\r
`,pe=()=>e.jsx("div",{children:e.jsx(l,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Sidebar"}),e.jsx(be,{})]}),e.jsx(m,{children:me})]})})}),xe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsx(c,{"aria-label":"Sidebar with multi-level dropdown example",children:e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsxs(L,{icon:()=>e.jsx(O,{size:20}),label:"E-commerce",children:[e.jsx(r,{href:"#",children:"Products"}),e.jsx(r,{href:"#",children:"Sales"}),e.jsx(r,{href:"#",children:"Refunds"}),e.jsx(r,{href:"#",children:"Shipping"})]}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(C,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(y,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(S,{size:20}),children:"Sign Up"})]})})})})}),Ie=`import {\r
  IconLayoutDashboard,\r
  IconBrandShopee,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  SidebarCollapse,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
const MultilevelDropdownCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with multi-level dropdown example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarCollapse icon={() => <IconBrandShopee size={20} />} label="E-commerce">\r
                <SidebarItem href="#">Products</SidebarItem>\r
                <SidebarItem href="#">Sales</SidebarItem>\r
                <SidebarItem href="#">Refunds</SidebarItem>\r
                <SidebarItem href="#">Shipping</SidebarItem>\r
              </SidebarCollapse>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default MultilevelDropdownCode;\r
`,Se=()=>e.jsx("div",{children:e.jsxs(l,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Multi-level dropdown"}),e.jsx(xe,{})]}),e.jsx(m,{children:Ie})]})}),fe=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(c,{"aria-label":"Sidebar with call to action button example",children:[e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Users"})]})}),e.jsxs(K,{children:[e.jsxs("div",{className:"mb-3 flex items-center",children:[e.jsx(ee,{color:"warning",children:"Beta"}),e.jsx("button",{"aria-label":"Close",className:"-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",type:"button",children:e.jsx("svg",{"aria-hidden":!0,className:"h-4 w-4",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),e.jsx("div",{className:"mb-3 text-sm text-cyan-900 dark:text-gray-400",children:"Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile."}),e.jsx("a",{className:"text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300",href:"#",children:"Turn new navigation off"})]})]})})}),ue=`import { IconLayoutDashboard, IconBrandTrello, IconInbox, IconUser } from '@tabler/icons-react';\r
import {\r
  Sidebar,\r
  Badge,\r
  SidebarCTA,\r
  SidebarItem,\r
  SidebarItemGroup,\r
  SidebarItems,\r
} from 'flowbite-react';\r
\r
const SidebarWithButtonCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with call to action button example">\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
          <SidebarCTA>\r
            <div className="mb-3 flex items-center">\r
              <Badge color="warning">Beta</Badge>\r
              <button\r
                aria-label="Close"\r
                className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"\r
                type="button"\r
              >\r
                <svg\r
                  aria-hidden\r
                  className="h-4 w-4"\r
                  fill="currentColor"\r
                  viewBox="0 0 20 20"\r
                  xmlns="http://www.w3.org/2000/svg"\r
                >\r
                  <path\r
                    fillRule="evenodd"\r
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"\r
                    clipRule="evenodd"\r
                  />\r
                </svg>\r
              </button>\r
            </div>\r
            <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">\r
              Preview the new Flowbite dashboard navigation! You can turn the new navigation off for\r
              a limited time in your profile.\r
            </div>\r
            <a\r
              className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"\r
              href="#"\r
            >\r
              Turn new navigation off\r
            </a>\r
          </SidebarCTA>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default SidebarWithButtonCode;\r
`,je=()=>e.jsx("div",{children:e.jsx(l,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sidebar with button"}),e.jsx(fe,{})]}),e.jsx(m,{children:ue})]})})}),ge=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(c,{"aria-label":"Sidebar with logo branding example",children:[e.jsx("div",{className:"pb-5",children:e.jsx(re,{})}),e.jsx(h,{children:e.jsxs(n,{children:[e.jsx(r,{href:"#",icon:()=>e.jsx(b,{size:20}),children:"Dashboard"}),e.jsx(r,{href:"#",icon:()=>e.jsx(w,{size:20}),children:"Kanban"}),e.jsx(r,{href:"#",icon:()=>e.jsx(p,{size:20}),children:"Inbox"}),e.jsx(r,{href:"#",icon:()=>e.jsx(u,{size:20}),children:"Users"}),e.jsx(r,{href:"#",icon:()=>e.jsx(C,{size:20}),children:"Products"}),e.jsx(r,{href:"#",icon:()=>e.jsx(y,{size:20}),children:"Sign In"}),e.jsx(r,{href:"#",icon:()=>e.jsx(S,{size:20}),children:"Sign Up"})]})})]})})}),ve=`import {\r
  IconLayoutDashboard,\r
  IconBrandTrello,\r
  IconInbox,\r
  IconUser,\r
  IconShoppingBag,\r
  IconLogin2,\r
  IconUserPlus,\r
} from '@tabler/icons-react';\r
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from 'flowbite-react';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const SidebarWithLogoCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Sidebar aria-label="Sidebar with logo branding example">\r
          <div className="pb-5">\r
            <FullLogo />\r
          </div>\r
          <SidebarItems>\r
            <SidebarItemGroup>\r
              <SidebarItem href="#" icon={() => <IconLayoutDashboard size={20} />}>\r
                Dashboard\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconBrandTrello size={20} />}>\r
                Kanban\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconInbox size={20} />}>\r
                Inbox\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUser size={20} />}>\r
                Users\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconShoppingBag size={20} />}>\r
                Products\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconLogin2 size={20} />}>\r
                Sign In\r
              </SidebarItem>\r
              <SidebarItem href="#" icon={() => <IconUserPlus size={20} />}>\r
                Sign Up\r
              </SidebarItem>\r
            </SidebarItemGroup>\r
          </SidebarItems>\r
        </Sidebar>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default SidebarWithLogoCode;\r
`,ze=()=>e.jsx("div",{children:e.jsxs(l,{className:"p-0",children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sidebar with logo"}),e.jsx(ge,{})]}),e.jsx(m,{children:ve})]})}),Ce=[{to:"/",title:"Home"},{title:"Sidebar"}],ye=[{id:"1",prop:"href",description:"The URL to navigate to when the item is clicked.",type:"#",default:"-"},{id:"2",prop:"icon",description:"The icon to display alongside the item text.",type:'"HiChartPie" | "HiViewBoards"',default:"-"},{id:"3",prop:"label",description:"The label to display as a badge on the item.",type:'"Pro"',default:"-"},{id:"4",prop:"labelColor",description:"The background color of the label badge.",type:'"dark"',default:"default"}],Ze=()=>e.jsxs(e.Fragment,{children:[e.jsx(ie,{title:"Sidebar",items:Ce}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(pe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Se,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(he,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(te,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(je,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ze,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ae,{allApis:ye,componentName:"Sidebar"})})]})]});export{Ze as default};
