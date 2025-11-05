import{r as n,j as e}from"./index-n5lagw8Y.js";import{C as s}from"./CardBox-DP5V6wyZ.js";import{P as i}from"./Pagination-o5gws3eL.js";import{C as l}from"./CodeDialog-BcgW2Qgx.js";import{B as c}from"./BreadcrumbComp-BUvza-Rs.js";import{C as d}from"./ComponentApi-B3eoLsvt.js";import"./resolve-theme-BrLp9Ogr.js";import"./chevron-left-icon-CnsRMBS9.js";import"./chevron-right-icon-BGQVsHY5.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./TableRow-DNxHhbic.js";const g=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx(i,{currentPage:t,totalPages:100,onPageChange:a})})})},u=`import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const DefaultPaginationCode = () => {\r
  const [currentPage, setCurrentPage] = useState(1);\r
  const onPageChange = (page: number) => setCurrentPage(page);\r
\r
  return (\r
    <div>\r
      <div className="overflow-x-auto">\r
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default DefaultPaginationCode;\r
`,x=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Pagination"}),e.jsx(g,{})]}),e.jsx(l,{children:u})]})})}),P=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx(i,{layout:"pagination",currentPage:t,totalPages:1e3,onPageChange:a,previousLabel:"Go back",nextLabel:"Go forward",showIcons:!0})})})},m=`import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const ControlTextCode = () => {\r
  const [controltextPage, setControltextPage] = useState(1);\r
  const onControtextChange = (page: number) => setControltextPage(page);\r
\r
  return (\r
    <div>\r
      <div className="overflow-x-auto">\r
        <Pagination\r
          layout="pagination"\r
          currentPage={controltextPage}\r
          totalPages={1000}\r
          onPageChange={onControtextChange}\r
          previousLabel="Go back"\r
          nextLabel="Go forward"\r
          showIcons\r
        />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default ControlTextCode;\r
`,p=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Pagination Control Button Text"}),e.jsx(P,{})]}),e.jsx(l,{children:m})]})})}),h=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx(i,{currentPage:t,totalPages:100,onPageChange:a,showIcons:!0})})})},v=`import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const WithIconCode = () => {\r
  const [currentPages, setCurrentPages] = useState(1);\r
  const onPageChanges = (page: number) => setCurrentPages(page);\r
\r
  return (\r
    <div>\r
      <div className="overflow-x-auto">\r
        <Pagination\r
          currentPage={currentPages}\r
          totalPages={100}\r
          onPageChange={onPageChanges}\r
          showIcons\r
        />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default WithIconCode;\r
`,C=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Pagination With Icons"}),e.jsx(h,{})]}),e.jsx(l,{children:v})]})})}),j=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx("div",{className:"overflow-x-auto",children:e.jsx(i,{layout:"navigation",currentPage:t,totalPages:100,onPageChange:a})})})},f=`import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const PrevNextbuttonCode = () => {\r
  const [flowPagin, setFlowPagin] = useState(1);\r
  const onFlowChange = (page: number) => setFlowPagin(page);\r
\r
  return (\r
    <div>\r
      <div className="overflow-x-auto">\r
        <Pagination\r
          layout="navigation"\r
          currentPage={flowPagin}\r
          totalPages={100}\r
          onPageChange={onFlowChange}\r
        />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default PrevNextbuttonCode;\r
`,b=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Previous And Next Button"}),e.jsx(j,{})]}),e.jsx(l,{children:f})]})})}),N=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx("div",{children:e.jsx(i,{layout:"navigation",currentPage:t,totalPages:100,onPageChange:a,showIcons:!0})})})},w=`import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const PrevNextIconCode = () => {\r
  const [currentPage, setCurrentPage] = useState(1);\r
  const onPageChange = (page: number) => setCurrentPage(page);\r
\r
  return (\r
    <div>\r
      <div>\r
        <Pagination\r
          layout="navigation"\r
          currentPage={currentPage}\r
          totalPages={100}\r
          onPageChange={onPageChange}\r
          showIcons\r
        />\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default PrevNextIconCode;\r
`,I=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"With Icon"}),e.jsx(N,{})]}),e.jsx(l,{children:w})]})})}),T=()=>{const[t,r]=n.useState(1),a=o=>r(o);return e.jsx("div",{children:e.jsx(i,{currentPage:t,totalPages:100,onPageChange:a,showIcons:!0})})},S=`"use client";\r
import { useState } from 'react';\r
import { Pagination } from 'flowbite-react';\r
\r
const TableDataCode = () => {\r
  const [tablePage, setTablePage] = useState(1);\r
\r
  const onTableChange = (page: number) => setTablePage(page);\r
\r
  return (\r
    <div>\r
      <Pagination\r
        currentPage={tablePage}\r
        totalPages={100}\r
        onPageChange={onTableChange}\r
        showIcons\r
      />\r
    </div>\r
  );\r
};\r
\r
export default TableDataCode;\r
`,y=()=>e.jsx("div",{children:e.jsx(s,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Table Data Navigation"}),e.jsx(T,{})]}),e.jsx(l,{children:S})]})})}),D=[{to:"/",title:"Home"},{title:"Pagination"}],F=[{id:"1",prop:"currentPage",description:"The current active page.",type:"number",default:"1"},{id:"2",prop:"totalPages",description:"The total number of pages.",type:"number",default:"1"},{id:"3",prop:"showIcons",description:"If `true`, next and previous buttons will be shown with icons.",type:"boolean",default:"false"},{id:"4",prop:"layout",description:"The layout style of the pagination.",type:"'pagination' | 'navigation' | 'table'",default:"'pagination'"},{id:"5",prop:"previousLabel",description:"Label for the previous button.",type:"'Previous' | 'Go back' | '<' | '‹'",default:"'Previous'"},{id:"6",prop:"nextLabel",description:"Label for the next button.",type:"'Next' | 'Go forward' | '>' | '›'",default:"'Next'"}],Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Pagination",items:D}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(x,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(C,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(b,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(I,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(y,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(d,{allApis:F,componentName:"Pagination"})})]})]});export{Y as default};
