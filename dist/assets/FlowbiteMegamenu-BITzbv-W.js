import{n as O,p as n,r as l,o as T,j as r}from"./index-n5lagw8Y.js";import{C as u}from"./CardBox-DP5V6wyZ.js";import{F as v}from"./FullLogo-D6PRg_b9.js";import{u as D,g as h,r as F}from"./resolve-theme-BrLp9Ogr.js";import{n as L,N as E,a as f}from"./NavbarCollapse-DCrysgu_.js";import{d as c,D as U}from"./Dropdown-BiHFbrRM.js";import{B as H}from"./Button-BChG-RMT.js";import{N}from"./NavbarToggle-BTXWhVBe.js";import{N as e}from"./NavbarLink-amXOtTqi.js";import{C as S}from"./CodeDialog-BcgW2Qgx.js";import{w as R,h as P}from"./index-B3jNiIug.js";import{I as i}from"./iconify-VfOFnMl8.js";import{B as V}from"./BreadcrumbComp-BUvza-Rs.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./chevron-down-icon-enmfNaQ_.js";import"./chevron-left-icon-CnsRMBS9.js";import"./chevron-right-icon-BGQVsHY5.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-CU_7cgqW.js";const I=O({...L,dropdown:{base:"",toggle:{...c,floating:{...c.floating,base:n(c.floating.base,"mt-2 block"),content:n(c.floating.content,"text-gray-500 dark:text-gray-400"),style:{...c.floating.style,auto:n(c.floating.style.auto,"text-gray-500 dark:text-gray-400")}},inlineWrapper:n(c.inlineWrapper,"flex w-full items-center justify-between")}},dropdownToggle:{base:n(L.link.base,L.link.active.off,"flex w-full items-center justify-between")}}),x=l.forwardRef((a,o)=>{const t=T(),s=D([I,t.theme?.megaMenu,a.theme],[h(t.clearTheme,"megaMenu"),a.clearTheme],[h(t.applyTheme,"megaMenu"),a.applyTheme]),d=F(a,t.props?.megaMenu);return r.jsx(E,{ref:o,theme:s,fluid:!0,...d})});x.displayName="MegaMenu";function g(a){const[o,t]=l.useState(void 0),s=T(),d=D([I.dropdown,s.theme?.megaMenu?.dropdown,a.theme],[h(s.clearTheme,"megaMenu.dropdown"),a.clearTheme],[h(s.applyTheme,"megaMenu.dropdown"),a.applyTheme]),{children:j,className:p,toggle:y,...m}=F(a,s.props?.megaMenuDropdown);if(y)return r.jsx(U,{inline:!0,label:y,placement:"bottom",theme:d.toggle,className:n(d.base,p),children:j});const M=l.useId(),b=l.useRef(null);return l.useEffect(()=>{const w=b.current?.closest("nav")?.querySelector('[aria-haspopup="menu"]');t(w?.id)},[]),r.jsx("div",{"aria-labelledby":o,id:M,ref:b,role:"menu",className:n(d.base,p),...m,children:j})}g.displayName="MegaMenuDropdown";function q(a){return o=>{a.forEach(t=>{if(typeof t=="function")t(o);else if(t!=null){const s=t;s.current=o}})}}const k=l.forwardRef((a,o)=>{const t=l.useId(),s=l.useRef(null),[d,j]=l.useState(void 0),[p,y]=l.useState(void 0),m=T(),M=D([I.dropdownToggle,m.theme?.megaMenu?.dropdownToggle,a.theme],[h(m.clearTheme,"megaMenu.dropdownToggle"),a.clearTheme],[h(m.applyTheme,"megaMenu.dropdownToggle"),a.applyTheme]),{className:b,...w}=F(a,m.props?.megaMenuDropdownToggle);function B(){return s.current?.closest("nav")?.querySelector('[role="menu"]')}function W(){B()?.classList.toggle("hidden"),y(!p)}return l.useEffect(()=>{const C=B(),A=C?.classList.contains("hidden");j(C?.id),y(!A)},[]),r.jsx("button",{ref:q([o,s]),"aria-controls":d,"aria-expanded":p,"aria-haspopup":"menu",id:t,onClick:W,className:n(M.base,b),...w})});k.displayName="MegaMenuDropdownToggle";const G=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(x,{className:"rounded-md",children:r.jsxs("div",{className:"mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8",children:[r.jsx(v,{}),r.jsxs("div",{className:"order-2 hidden items-center md:flex",children:[r.jsx("a",{href:"#",className:"mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5",children:"Login"}),r.jsx(H,{href:"#",color:"primary",children:"Sign up"})]}),r.jsx(N,{}),r.jsxs(f,{children:[r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Home"}),r.jsx(e,{children:r.jsx(g,{toggle:r.jsx("div",{className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Company"}),children:r.jsxs("ul",{className:"grid grid-cols-3",children:[r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"About Us"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Library"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Resources"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Pro Version"})})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Contact Us"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Support Center"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Terms"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Blog"})})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Newsletter"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Playground"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"License"})})]})]})})}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Team"}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Contact"})]})]})})})}),_=`import {\r
  MegaMenu,\r
  Button,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
  MegaMenuDropdown,\r
} from 'flowbite-react';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const DefaultMegamenuCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8">\r
            <FullLogo />\r
            <div className="order-2 hidden items-center md:flex">\r
              <a\r
                href="#"\r
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"\r
              >\r
                Login\r
              </a>\r
              <Button href="#" color="primary">\r
                Sign up\r
              </Button>\r
            </div>\r
            <NavbarToggle />\r
            <NavbarCollapse>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Home\r
              </NavbarLink>\r
              <NavbarLink>\r
                <MegaMenuDropdown\r
                  toggle={\r
                    <div className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary">\r
                      Company\r
                    </div>\r
                  }\r
                >\r
                  <ul className="grid grid-cols-3">\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          About Us\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Library\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Resources\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Pro Version\r
                        </a>\r
                      </li>\r
                    </div>\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Contact Us\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Support Center\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Terms\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Blog\r
                        </a>\r
                      </li>\r
                    </div>\r
                    <div className="space-y-4 p-4">\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Newsletter\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          Playground\r
                        </a>\r
                      </li>\r
                      <li>\r
                        <a\r
                          href="#"\r
                          className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
                        >\r
                          License\r
                        </a>\r
                      </li>\r
                    </div>\r
                  </ul>\r
                </MegaMenuDropdown>\r
              </NavbarLink>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Team\r
              </NavbarLink>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Contact\r
              </NavbarLink>\r
            </NavbarCollapse>\r
          </div>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultMegamenuCode;\r
`,$=()=>r.jsx("div",{children:r.jsx(u,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Mega Menu"}),r.jsx(G,{})]}),r.jsx(S,{children:_})]})})}),z=()=>r.jsx("div",{children:r.jsxs(u,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Full Width With CTA"}),r.jsxs(x,{className:"rounded-md",children:[r.jsx(v,{}),r.jsx(N,{}),r.jsxs(f,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsxs(k,{children:["Company",r.jsx(R,{className:"ml-2"})]}),r.jsx(e,{href:"/",children:"Marketplace"}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(g,{children:r.jsxs("div",{className:"mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6",children:[r.jsxs("ul",{className:"space-y-4 sm:mb-4 md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Segmentation"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Marketing CRM"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})})]}),r.jsxs("ul",{className:"mb-4 hidden space-y-4 sm:block md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Our Blog"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms & Conditions"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})})]}),r.jsxs("div",{className:"mt-4 md:mt-0",children:[r.jsx("h2",{className:"mb-2 font-semibold text-gray-900 dark:text-white",children:"Our brands"}),r.jsx("p",{className:"mb-2 text-gray-500 dark:text-gray-400",children:"At Flowbite, we have a portfolio of brands that cater to a variety of preferences."}),r.jsxs("a",{href:"#",className:"inline-flex items-center text-sm font-medium text-primary hover:text-primaryemphasis dark:text-primary dark:hover:text-primaryemphasis",children:["Explore our brands",r.jsx("span",{className:"sr-only",children:"Explore our brands"}),r.jsx(P,{className:"ml-2"})]})]})]})})]})]})}),J=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsxs(x,{className:"rounded-md",children:[r.jsx(v,{}),r.jsx(N,{}),r.jsxs(f,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{children:r.jsxs(k,{children:["Company",r.jsx(R,{className:"ml-2"})]})}),r.jsx(e,{href:"/",children:"Marketplace"}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(g,{children:r.jsxs("ul",{className:"mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6",children:[r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Online Stores"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Segmentation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing CRM"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Online Stores"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Segmentation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing CRM"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Audience Management"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Creative Tools"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})}),r.jsx("li",{children:r.jsxs("a",{href:"#",className:"block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700",children:[r.jsx("div",{className:"font-semibold",children:"Marketing Automation"}),r.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:"Connect with third-party tools that you're already using."})]})})]})})]})})}),K=`import {\r
  MegaMenu,\r
  MegaMenuDropdown,\r
  MegaMenuDropdownToggle,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
} from 'flowbite-react';\r
import { HiChevronDown } from 'react-icons/hi';\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
\r
const FullWidthMegamenuCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <FullLogo />\r
          <NavbarToggle />\r
          <NavbarCollapse>\r
            <NavbarLink href="/">Home</NavbarLink>\r
            <NavbarLink>\r
              <MegaMenuDropdownToggle>\r
                Company\r
                <HiChevronDown className="ml-2" />\r
              </MegaMenuDropdownToggle>\r
            </NavbarLink>\r
            <NavbarLink href="/">Marketplace</NavbarLink>\r
            <NavbarLink href="/">Resources</NavbarLink>\r
            <NavbarLink href="/">Contact</NavbarLink>\r
          </NavbarCollapse>\r
          <MegaMenuDropdown>\r
            <ul className="mx-auto mt-6 grid max-w-(--breakpoint-xl) border-y border-border dark:border-darkborder px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Online Stores</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Segmentation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing CRM</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Online Stores</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Segmentation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing CRM</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Audience Management</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Creative Tools</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
              <li>\r
                <a\r
                  href="#"\r
                  className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"\r
                >\r
                  <div className="font-semibold">Marketing Automation</div>\r
                  <span className="text-sm text-gray-500 dark:text-gray-400">\r
                    Connect with third-party tools that you're already using.\r
                  </span>\r
                </a>\r
              </li>\r
            </ul>\r
          </MegaMenuDropdown>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default FullWidthMegamenuCode;\r
`,Q=()=>r.jsx("div",{children:r.jsx(u,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Full width dropdown"}),r.jsx(J,{})]}),r.jsx(S,{children:K})]})})}),X=()=>r.jsx("div",{children:r.jsxs(u,{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Full width with image"}),r.jsxs(x,{className:"rounded-md",children:[r.jsx(v,{}),r.jsx(N,{}),r.jsxs(f,{children:[r.jsx(e,{href:"/",children:"Home"}),r.jsx(e,{href:"/",children:"Company"}),r.jsxs(k,{children:["Marketplace",r.jsx(R,{className:"ml-2"})]}),r.jsx(e,{href:"/",children:"Resources"}),r.jsx(e,{href:"/",children:"Contact"})]}),r.jsx(g,{children:r.jsx("div",{className:"mt-6 border-y border-border dark:border-darkborder bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800",children:r.jsxs("div",{className:"mx-auto grid max-w-(--breakpoint-xl) px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6",children:[r.jsxs("ul",{className:"mb-4 hidden space-y-4 md:mb-0 md:block","aria-labelledby":"mega-menu-full-image-button",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Segmentation"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Marketing CRM"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Online Stores"})})]}),r.jsxs("ul",{className:"mb-4 space-y-4 md:mb-0",children:[r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Our Blog"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms & Conditions"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})}),r.jsx("li",{children:r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})})]}),r.jsx("a",{href:"#",className:"rounded-lg  p-8 text-left bg-cover bg-center bg-[url('/src/assets/images/backgrounds/login-bg.svg')]",children:r.jsxs("div",{className:"backdrop-blur-xs text-dark",children:[r.jsx("p",{className:"mb-5 max-w-xl font-extrabold leading-tight tracking-tight text-white",children:"Preview the new Flowbite dashboard navigation."}),r.jsxs("button",{type:"button",className:"inline-flex items-center rounded-lg border border-white px-2.5 py-1.5 text-center text-xs font-medium text-white hover:bg-white hover:text-gray-900 focus:outline-hidden focus:ring-4 focus:ring-gray-700",children:["Get started",r.jsx(P,{className:"ml-2"})]})]})})]})})})]})]})}),Y=()=>r.jsx(r.Fragment,{children:r.jsx("div",{children:r.jsx(x,{className:"rounded-md",children:r.jsxs("div",{className:"mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8",children:[r.jsx(v,{}),r.jsxs("div",{className:"order-2 hidden items-center md:flex",children:[r.jsx("a",{href:"#",className:"mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5",children:"Login"}),r.jsx(H,{href:"#",color:"primary",children:"Sign up"})]}),r.jsx(N,{}),r.jsxs(f,{children:[r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Home"}),r.jsx(g,{toggle:r.jsx("div",{className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Company"}),children:r.jsxs("ul",{className:"grid grid-cols-3",children:[r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"cuida:alert-outline",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"About Us"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"mdi:blog",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Library"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"lucide:contact-round",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Resources"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"ri:stack-fill",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Pro Version"})]})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"map:post-box",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Contact Us"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"lets-icons:setting-line",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Support Center"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"solar:box-linear",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Terms"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"solar:widget-2-broken",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Blog"})]})]}),r.jsxs("div",{className:"space-y-4 p-4",children:[r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"lucide:file-spreadsheet",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Newsletter"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"tdesign:rocket-filled",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"Playground"})]}),r.jsxs("li",{className:"flex items-center gap-2",children:[r.jsx(i,{icon:"carbon:license",height:16}),r.jsx("a",{href:"#",className:"hover:text-primary dark:hover:text-primary",children:"License"})]})]})]})}),r.jsx(e,{href:"#",className:"text-gray-700 dark:text-gray-400 text-sm hover:!text-primary",children:"Team"})]})]})})})}),Z=`import {\r
  MegaMenu,\r
  Button,\r
  MegaMenuDropdown,\r
  NavbarCollapse,\r
  NavbarLink,\r
  NavbarToggle,\r
} from 'flowbite-react';\r
\r
import FullLogo from 'src/layouts/full/shared/logo/FullLogo';\r
import { Icon } from '@iconify/react/dist/iconify.js';\r
\r
const MegamenuIconCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <MegaMenu className="rounded-md">\r
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between p-4 md:space-x-8">\r
            <FullLogo />\r
            <div className="order-2 hidden items-center md:flex">\r
              <a\r
                href="#"\r
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-hidden focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"\r
              >\r
                Login\r
              </a>\r
              <Button href="#" color="primary">\r
                Sign up\r
              </Button>\r
            </div>\r
            <NavbarToggle />\r
            <NavbarCollapse>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Home\r
              </NavbarLink>\r
              <MegaMenuDropdown\r
                toggle={\r
                  <div className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary">\r
                    Company\r
                  </div>\r
                }\r
              >\r
                <ul className="grid grid-cols-3">\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="cuida:alert-outline" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        About Us\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="mdi:blog" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Library\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lucide:contact-round" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Resources\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="ri:stack-fill" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Pro Version\r
                      </a>\r
                    </li>\r
                  </div>\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="map:post-box" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Contact Us\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lets-icons:setting-line" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Support Center\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="solar:box-linear" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Terms\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="solar:widget-2-broken" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Blog\r
                      </a>\r
                    </li>\r
                  </div>\r
                  <div className="space-y-4 p-4">\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="lucide:file-spreadsheet" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Newsletter\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="tdesign:rocket-filled" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        Playground\r
                      </a>\r
                    </li>\r
                    <li className="flex items-center gap-2">\r
                      <Icon icon="carbon:license" height={16} />\r
                      <a href="#" className="hover:text-primary dark:hover:text-primary">\r
                        License\r
                      </a>\r
                    </li>\r
                  </div>\r
                </ul>\r
              </MegaMenuDropdown>\r
              <NavbarLink\r
                href="#"\r
                className="text-gray-700 dark:text-gray-400 text-sm hover:!text-primary"\r
              >\r
                Team\r
              </NavbarLink>\r
            </NavbarCollapse>\r
          </div>\r
        </MegaMenu>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default MegamenuIconCode;\r
`,rr=()=>r.jsx("div",{children:r.jsx(u,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Mega Menu With Icons"}),r.jsx(Y,{})]}),r.jsx(S,{children:Z})]})})}),er=[{to:"/",title:"Home"},{title:"Mega Menu"}],Tr=()=>r.jsxs(r.Fragment,{children:[r.jsx(V,{title:"Mega Menu",items:er}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[r.jsx("div",{className:"col-span-12",children:r.jsx($,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(rr,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(Q,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(z,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(X,{})})]})]});export{Tr as default};
