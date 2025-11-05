import{r as v,o as g,j as e,p as m}from"./index-n5lagw8Y.js";import{C as o}from"./CardBox-DP5V6wyZ.js";import{l as b,L as n}from"./ListGroup-yR1pndfF.js";import{u as C,g as u,r as w}from"./resolve-theme-BrLp9Ogr.js";import{C as l}from"./CodeDialog-BcgW2Qgx.js";import{k as N,u as k,v as D,m as H}from"./index-B3jNiIug.js";import{B as P}from"./BreadcrumbComp-BUvza-Rs.js";import{C as y}from"./ComponentApi-B3eoLsvt.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-CU_7cgqW.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const i=v.forwardRef((s,h)=>{const r=g(),t=C([b.item,r.theme?.listGroup?.item,s.theme],[u(r.clearTheme,"listGroup.item"),s.clearTheme],[u(r.applyTheme,"listGroup.item"),s.applyTheme]),{active:x,children:L,className:f,href:d,icon:a,onClick:j,disabled:p,...G}=w(s,r.props?.listGroupItem),c=typeof d<"u",I=c?"a":"button";return e.jsx("li",{ref:h,className:m(t.base,f),children:e.jsxs(I,{href:d,onClick:j,type:c?void 0:"button",disabled:p,className:m(t.link.active[x?"on":"off"],t.link.disabled[p?"on":"off"],t.link.base,t.link.href[c?"on":"off"]),...G,children:[a&&e.jsx(a,{"aria-hidden":!0,"data-testid":"flowbite-list-group-item-icon",className:t.link.icon}),L]})})});i.displayName="ListGroupItem";const M=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{children:"Profile"}),e.jsx(i,{children:"Settings"}),e.jsx(i,{children:"Messages"}),e.jsx(i,{disabled:!0,children:"Download"})]})}),B=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const DefaultListcode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem>Profile</ListGroupItem>\r
        <ListGroupItem>Settings</ListGroupItem>\r
        <ListGroupItem>Messages</ListGroupItem>\r
        <ListGroupItem disabled>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default DefaultListcode;\r
`,S=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default list group"}),e.jsx(M,{})]}),e.jsx(l,{children:B})]})})}),T=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{href:"#",active:!0,children:"Profile"}),e.jsx(i,{href:"#",children:"Settings"}),e.jsx(i,{href:"#",children:"Messages"}),e.jsx(i,{href:"#",children:"Download"})]})}),A=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const LinkListCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem href="#" active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem href="#">Settings</ListGroupItem>\r
        <ListGroupItem href="#">Messages</ListGroupItem>\r
        <ListGroupItem href="#">Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default LinkListCode;\r
`,U=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List items as links"}),e.jsx(T,{})]}),e.jsx(l,{children:A})]})})}),R=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{onClick:()=>alert("Profile clicked!"),active:!0,children:"Profile"}),e.jsx(i,{children:"Settings"}),e.jsx(i,{children:"Messages"}),e.jsx(i,{children:"Download"})]})}),O=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
\r
const ListButtonCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem onClick={() => alert('Profile clicked!')} active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem>Settings</ListGroupItem>\r
        <ListGroupItem>Messages</ListGroupItem>\r
        <ListGroupItem>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default ListButtonCode;\r
`,E=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List group with buttons"}),e.jsx(R,{})]}),e.jsx(l,{children:O})]})})}),F=()=>e.jsx("div",{children:e.jsxs(n,{children:[e.jsx(i,{icon:N,active:!0,children:"Profile"}),e.jsx(i,{icon:k,children:"Settings"}),e.jsx(i,{icon:D,children:"Messages"}),e.jsx(i,{icon:H,children:"Download"})]})}),q=`import { ListGroup, ListGroupItem } from 'flowbite-react';\r
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';\r
\r
const ListIconCode = () => {\r
  return (\r
    <div>\r
      <ListGroup>\r
        <ListGroupItem icon={HiUserCircle} active>\r
          Profile\r
        </ListGroupItem>\r
        <ListGroupItem icon={HiOutlineAdjustments}>Settings</ListGroupItem>\r
        <ListGroupItem icon={HiInbox}>Messages</ListGroupItem>\r
        <ListGroupItem icon={HiCloudDownload}>Download</ListGroupItem>\r
      </ListGroup>\r
    </div>\r
  );\r
};\r
\r
export default ListIconCode;\r
`,z=()=>e.jsx("div",{children:e.jsx(o,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"List group with icons"}),e.jsx(F,{})]}),e.jsx(l,{children:q})]})})}),J=[{to:"/",title:"Home"},{title:"List Group"}],K=[{id:"1",prop:"href",description:"The URL to link to for this list group item.",type:"'#'",default:"-"},{id:"2",prop:"active",description:"Indicates whether the list group item is active.",type:"boolean",default:"false"},{id:"3",prop:"disabled",description:"Indicates whether the list group item is disabled.",type:"boolean",default:"false"},{id:"4",prop:"onClick",description:"Callback function triggered when the list group item is clicked.",type:`'() => alert("Profile clicked!")'`,default:"-"},{id:"5",prop:"icon",description:"An optional icon to display alongside the list group item.",type:"'HiUserCircle' | 'HiInbox'",default:"-"}],ue=()=>e.jsxs(e.Fragment,{children:[e.jsx(P,{title:"List Group",items:J}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(S,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(U,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(E,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(y,{allApis:K,componentName:"List Group"})})]})]});export{ue as default};
