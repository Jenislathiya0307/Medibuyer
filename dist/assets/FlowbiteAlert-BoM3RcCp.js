import{j as r}from"./index-n5lagw8Y.js";import{C as l}from"./CardBox-DP5V6wyZ.js";import{d as s,e as o}from"./index-B3jNiIug.js";import{A as e}from"./Alert-gpJFEXQ7.js";import{B as n}from"./Button-BChG-RMT.js";import{C as a}from"./CodeDialog-BcgW2Qgx.js";import{B as t}from"./BreadcrumbComp-BUvza-Rs.js";import{C as c}from"./ComponentApi-B3eoLsvt.js";import"./resolve-theme-BrLp9Ogr.js";import"./iconBase-CU_7cgqW.js";import"./x-icon-6miUmzgF.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const d=()=>{function i(){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800",children:"More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsxs(n,{color:"primary",className:"flex gap-2 items-center",size:"sm",children:[r.jsx(o,{size:15}),"View more"]}),r.jsx(n,{color:"error",className:"flex gap-2 items-center",size:"sm",children:"Dismiss"})]})]})}return r.jsx("div",{children:r.jsxs(e,{additionalContent:r.jsx(i,{}),color:"lightprimary",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info alert!"})," Change a few things up and try submitting again."]})})},m=`import { Alert, Button } from 'flowbite-react';\r
import { HiInformationCircle, HiEye } from 'react-icons/hi';\r
\r
const AdditionalAlertCode = () => {\r
  function ExampleAdditionalContent() {\r
    return (\r
      <>\r
        <div className="mb-4 mt-2 text-sm text-cyan-700 dark:text-cyan-800">\r
          More info about this info alert goes here. This example text is going to run a bit longer\r
          so that you can see how spacing within an alert works with this kind of content.\r
        </div>\r
        <div className="flex gap-3">\r
          <Button color={'primary'} className="flex gap-2 items-center" size={'sm'}>\r
            <HiEye size={15} />\r
            View more\r
          </Button>\r
          <Button color={'error'} className="flex gap-2 items-center" size={'sm'}>\r
            Dismiss\r
          </Button>\r
        </div>\r
      </>\r
    );\r
  }\r
\r
  return (\r
    <div>\r
      <Alert\r
        additionalContent={<ExampleAdditionalContent />}\r
        color="lightprimary"\r
        icon={HiInformationCircle}\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting\r
        again.\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default AdditionalAlertCode;\r
`,p=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Additional Content"}),r.jsx(d,{})]}),r.jsx(a,{children:m})]})})}),u=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"primary",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple primary alert"]}),r.jsxs(e,{color:"secondary",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple secondary alert"]}),r.jsxs(e,{color:"success",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple success alert"]}),r.jsxs(e,{color:"info",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"warning",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple warning alert"]}),r.jsxs(e,{color:"error",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Danger"})," - A simple Danger alert"]}),r.jsxs(e,{color:"dark",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Dark"})," - A simple Dark alert"]})]}),h=`import { Alert } from 'flowbite-react';\r
import { HiInformationCircle } from 'react-icons/hi';\r
\r
const AlertWithIconCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="primary" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Primary</span> - A simple primary alert\r
      </Alert>\r
\r
      <Alert color="secondary" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Secondary</span> - A simple secondary alert\r
      </Alert>\r
\r
      <Alert color="success" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Success</span> - A simple success alert\r
      </Alert>\r
\r
      <Alert color="info" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert color="warning" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Warning</span> - A simple warning alert\r
      </Alert>\r
\r
      <Alert color="error" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Danger</span> - A simple Danger alert\r
      </Alert>\r
\r
      <Alert color="dark" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Dark</span> - A simple Dark alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default AlertWithIconCode;\r
`,A=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Alert With Icon"}),r.jsx(u,{})]}),r.jsx(a,{children:h})]})})}),x=()=>{function i(){return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"mb-4 mt-2 text-success",children:"More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),r.jsxs("div",{className:"flex gap-3",children:[r.jsxs(n,{color:"success",className:"flex gap-2 items-center",size:"sm",children:[r.jsx(o,{size:15}),"View more"]}),r.jsx(n,{color:"error",className:"flex gap-2 items-center",size:"sm",children:"Dismiss"})]})]})}return r.jsx("div",{children:r.jsxs(e,{additionalContent:r.jsx(i,{}),color:"lightsuccess",icon:s,onDismiss:()=>alert("Alert dismissed!"),rounded:!0,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info alert!"})," Change a few things up and try submitting again."]})})},f=`import { Alert, Button } from 'flowbite-react';\r
import { HiInformationCircle, HiEye } from 'react-icons/hi';\r
\r
const AllOptionscode = () => {\r
  function ExampleAdditionalContent() {\r
    return (\r
      <>\r
        <div className="mb-4 mt-2 text-success">\r
          More info about this info alert goes here. This example text is going to run a bit longer\r
          so that you can see how spacing within an alert works with this kind of content.\r
        </div>\r
        <div className="flex gap-3">\r
          <Button color={'success'} className="flex gap-2 items-center" size={'sm'}>\r
            <HiEye size={15} />\r
            View more\r
          </Button>\r
          <Button color={'error'} className="flex gap-2 items-center" size={'sm'}>\r
            Dismiss\r
          </Button>\r
        </div>\r
      </>\r
    );\r
  }\r
\r
  return (\r
    <div>\r
      <Alert\r
        additionalContent={<ExampleAdditionalContent />}\r
        color="lightsuccess"\r
        icon={HiInformationCircle}\r
        onDismiss={() => alert('Alert dismissed!')}\r
        rounded\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Info alert!</span> Change a few things up and try submitting\r
        again.\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default AllOptionscode;\r
`,N=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"All Options"}),r.jsx(x,{})]}),r.jsx(a,{children:f})]})})}),g=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"primary",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple primary alert"]}),r.jsxs(e,{color:"secondary",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," A simple Secondary alert"]}),r.jsxs(e,{color:"success",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," A simple Success alert"]}),r.jsxs(e,{color:"info",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," A simple Info alert"]}),r.jsxs(e,{color:"warning",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," A simple Warning alert"]}),r.jsxs(e,{color:"error",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Error"})," A simple Error alert"]}),r.jsxs(e,{color:"dark",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Dark"})," A simple Dark alert"]})]}),j=`import { Alert } from 'flowbite-react';\r
\r
const DefaultAlertCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="primary" className="rounded-md">\r
        <span className="font-medium">Primary</span> - A simple primary alert\r
      </Alert>\r
\r
      <Alert color="secondary" className="rounded-md">\r
        <span className="font-medium">Secondary</span> A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="success" className="rounded-md">\r
        <span className="font-medium">Success</span> A simple Success alert\r
      </Alert>\r
\r
      <Alert color="info" className="rounded-md">\r
        <span className="font-medium">Info</span> A simple Info alert\r
      </Alert>\r
\r
      <Alert color="warning" className="rounded-md">\r
        <span className="font-medium">Warning</span> A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="error" className="rounded-md">\r
        <span className="font-medium">Error</span> A simple Error alert\r
      </Alert>\r
\r
      <Alert color="dark" className="rounded-md">\r
        <span className="font-medium">Dark</span> A simple Dark alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default DefaultAlertCode;\r
`,y=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Alert"}),r.jsx(g,{})]}),r.jsx(a,{children:j})]})})}),v=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"primary",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]}),r.jsxs(e,{color:"secondary",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]}),r.jsxs(e,{color:"success",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]}),r.jsxs(e,{color:"info",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"warning",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]}),r.jsxs(e,{color:"error",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]}),r.jsxs(e,{color:"dark",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Dark"})," - A simple Dark alert"]})]}),C=`import { Alert } from 'flowbite-react';\r
\r
const DissmisableAlertCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="primary" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Primary</span> - A simple Primary alert\r
      </Alert>\r
\r
      <Alert color="secondary" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Secondary</span> - A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="success" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Success</span> - A simple Success alert\r
      </Alert>\r
\r
      <Alert color="info" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert color="warning" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Warning</span> - A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="error" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Error</span> - A simple Error alert\r
      </Alert>\r
\r
      <Alert color="dark" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Dark</span> - A simple Dark alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default DissmisableAlertCode;\r
`,D=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Dismissible Alert"}),r.jsx(v,{})]}),r.jsx(a,{children:C})]})})}),b=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"lightprimary",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple primary alert"]}),r.jsxs(e,{color:"lightsecondary",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," A simple Secondary alert"]}),r.jsxs(e,{color:"lightsuccess",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," A simple Success alert"]}),r.jsxs(e,{color:"lightinfo",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," A simple Info alert"]}),r.jsxs(e,{color:"lightwarning",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," A simple Warning alert"]}),r.jsxs(e,{color:"lighterror",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Error"})," A simple Error alert"]}),r.jsxs(e,{color:"lightgray",className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Light"})," A simple Light alert"]})]}),I=`import { Alert } from 'flowbite-react';\r
\r
const LightDefaultAlertCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="lightprimary" className="rounded-md">\r
        <span className="font-medium">Primary</span> - A simple primary alert\r
      </Alert>\r
\r
      <Alert color="lightsecondary" className="rounded-md">\r
        <span className="font-medium">Secondary</span> A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="lightsuccess" className="rounded-md">\r
        <span className="font-medium">Success</span> A simple Success alert\r
      </Alert>\r
\r
      <Alert color="lightinfo" className="rounded-md">\r
        <span className="font-medium">Info</span> A simple Info alert\r
      </Alert>\r
\r
      <Alert color="lightwarning" className="rounded-md">\r
        <span className="font-medium">Warning</span> A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="lighterror" className="rounded-md">\r
        <span className="font-medium">Error</span> A simple Error alert\r
      </Alert>\r
\r
      <Alert color="lightgray" className="rounded-md">\r
        <span className="font-medium">Light</span> A simple Light alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default LightDefaultAlertCode;\r
`,w=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Light Default Alert"}),r.jsx(b,{})]}),r.jsx(a,{children:I})]})})}),S=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"lightprimary",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]}),r.jsxs(e,{color:"lightsecondary",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]}),r.jsxs(e,{color:"lightsuccess",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]}),r.jsxs(e,{color:"lightinfo",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"lightwarning",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]}),r.jsxs(e,{color:"lighterror",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]}),r.jsxs(e,{color:"lightgray",icon:s,className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Light"})," A simple Light alert"]})]}),E=`import { Alert } from 'flowbite-react';\r
import { HiInformationCircle } from 'react-icons/hi';\r
\r
const LightAlertIconCode = () => {\r
  return (\r
    <div className='flex flex-col gap-2'>\r
      <Alert color="lightprimary" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Primary</span> - A simple Primary alert\r
      </Alert>\r
\r
      <Alert color="lightsecondary" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Secondary</span> - A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="lightsuccess" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Success</span> - A simple Success alert\r
      </Alert>\r
\r
      <Alert color="lightinfo" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert color="lightwarning" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Warning</span> - A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="lighterror" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Error</span> - A simple Error alert\r
      </Alert>\r
\r
      <Alert color="lightgray" icon={HiInformationCircle} className="rounded-md">\r
        <span className="font-medium">Light</span> A simple Light alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default LightAlertIconCode;\r
`,L=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Light Alert With Icon"}),r.jsx(S,{})]}),r.jsx(a,{children:E})]})})}),W=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx(e,{color:"lightprimary",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]})}),r.jsx(e,{color:"lightsecondary",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]})}),r.jsx(e,{color:"lightsuccess",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]})}),r.jsx(e,{color:"lightinfo",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]})}),r.jsx(e,{color:"lightwarning",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]})}),r.jsx(e,{color:"lighterror",withBorderAccent:!0,children:r.jsxs("span",{children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]})})]}),k=`import { Alert } from 'flowbite-react';\r
\r
const LightBorderAcccentCode = () => {\r
  return (\r
    <div className='flex flex-col gap-2'>\r
      <Alert color="lightprimary" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Primary</span> - A simple Primary alert\r
        </span>\r
      </Alert>\r
\r
      <Alert color="lightsecondary" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Secondary</span> - A simple Secondary alert\r
        </span>\r
      </Alert>\r
\r
      <Alert color="lightsuccess" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Success</span> - A simple Success alert\r
        </span>\r
      </Alert>\r
\r
      <Alert color="lightinfo" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Info</span> - A simple Info alert\r
        </span>\r
      </Alert>\r
\r
      <Alert color="lightwarning" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Warning</span> - A simple Warning alert\r
        </span>\r
      </Alert>\r
\r
      <Alert color="lighterror" withBorderAccent>\r
        <span>\r
          <span className="font-medium">Error</span> - A simple Error alert\r
        </span>\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default LightBorderAcccentCode;\r
`,B=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Light Border Accent"}),r.jsx(W,{})]}),r.jsx(a,{children:k})]})})}),P=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"lightprimary",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]}),r.jsxs(e,{color:"lightsecondary",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]}),r.jsxs(e,{color:"lightsuccess",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]}),r.jsxs(e,{color:"lightinfo",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"lightwarning",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]}),r.jsxs(e,{color:"lighterror",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]}),r.jsxs(e,{color:"lightgray",onDismiss:()=>alert("Alert dismissed!"),className:"rounded-md",children:[r.jsx("span",{className:"font-medium",children:"Dark"})," - A simple Dark alert"]})]}),H=`import { Alert } from 'flowbite-react';\r
\r
const LightDissmisableCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert\r
        color="lightprimary"\r
        onDismiss={() => alert('Alert dismissed!')}\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Primary</span> - A simple Primary alert\r
      </Alert>\r
\r
      <Alert\r
        color="lightsecondary"\r
        onDismiss={() => alert('Alert dismissed!')}\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Secondary</span> - A simple Secondary alert\r
      </Alert>\r
\r
      <Alert\r
        color="lightsuccess"\r
        onDismiss={() => alert('Alert dismissed!')}\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Success</span> - A simple Success alert\r
      </Alert>\r
\r
      <Alert color="lightinfo" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert\r
        color="lightwarning"\r
        onDismiss={() => alert('Alert dismissed!')}\r
        className="rounded-md"\r
      >\r
        <span className="font-medium">Warning</span> - A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="lighterror" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Error</span> - A simple Error alert\r
      </Alert>\r
\r
      <Alert color="lightgray" onDismiss={() => alert('Alert dismissed!')} className="rounded-md">\r
        <span className="font-medium">Dark</span> - A simple Dark alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default LightDissmisableCode;\r
`,R=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Light Dismissible Alert"}),r.jsx(P,{})]}),r.jsx(a,{children:H})]})})}),z=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"lightprimary",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]}),r.jsxs(e,{color:"lightsecondary",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]}),r.jsxs(e,{color:"lightsuccess",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]}),r.jsxs(e,{color:"lightinfo",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"lightwarning",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]}),r.jsxs(e,{color:"lighterror",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]}),r.jsxs(e,{color:"lightgray",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Light"})," - A simple Light alert"]})]}),O=`import { Alert } from 'flowbite-react';\r
\r
const LightRoundedCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="lightprimary" rounded>\r
        <span className="font-medium">Primary</span> - A simple Primary alert\r
      </Alert>\r
\r
      <Alert color="lightsecondary" rounded>\r
        <span className="font-medium">Secondary</span> - A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="lightsuccess" rounded>\r
        <span className="font-medium">Success</span> - A simple Success alert\r
      </Alert>\r
\r
      <Alert color="lightinfo" rounded>\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert color="lightwarning" rounded>\r
        <span className="font-medium">Warning</span> - A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="lighterror" rounded>\r
        <span className="font-medium">Error</span> - A simple Error alert\r
      </Alert>\r
\r
      <Alert color="lightgray" rounded>\r
        <span className="font-medium">Light</span> - A simple Light alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default LightRoundedCode;\r
`,$=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Light Rounded Alert"}),r.jsx(z,{})]}),r.jsx(a,{children:O})]})})}),F=()=>r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsxs(e,{color:"primary",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Primary"})," - A simple Primary alert"]}),r.jsxs(e,{color:"secondary",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Secondary"})," - A simple Secondary alert"]}),r.jsxs(e,{color:"success",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Success"})," - A simple Success alert"]}),r.jsxs(e,{color:"info",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Info"})," - A simple Info alert"]}),r.jsxs(e,{color:"warning",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Warning"})," - A simple Warning alert"]}),r.jsxs(e,{color:"error",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Error"})," - A simple Error alert"]}),r.jsxs(e,{color:"dark",rounded:!0,children:[r.jsx("span",{className:"font-medium",children:"Dark"})," - A simple Dark alert"]})]}),M=`import { Alert } from 'flowbite-react';\r
\r
const RoundedAlertCode = () => {\r
  return (\r
    <div className="flex flex-col gap-2">\r
      <Alert color="primary" rounded>\r
        <span className="font-medium">Primary</span> - A simple Primary alert\r
      </Alert>\r
\r
      <Alert color="secondary" rounded>\r
        <span className="font-medium">Secondary</span> - A simple Secondary alert\r
      </Alert>\r
\r
      <Alert color="success" rounded>\r
        <span className="font-medium">Success</span> - A simple Success alert\r
      </Alert>\r
\r
      <Alert color="info" rounded>\r
        <span className="font-medium">Info</span> - A simple Info alert\r
      </Alert>\r
\r
      <Alert color="warning" rounded>\r
        <span className="font-medium">Warning</span> - A simple Warning alert\r
      </Alert>\r
\r
      <Alert color="error" rounded>\r
        <span className="font-medium">Error</span> - A simple Error alert\r
      </Alert>\r
\r
      <Alert color="dark" rounded>\r
        <span className="font-medium">Dark</span> - A simple Dark alert\r
      </Alert>\r
    </div>\r
  );\r
};\r
\r
export default RoundedAlertCode;\r
`,T=()=>r.jsx("div",{children:r.jsx(l,{className:"p-0",children:r.jsxs("div",{children:[r.jsxs("div",{className:"p-6",children:[r.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rounded Alert"}),r.jsx(F,{})]}),r.jsx(a,{children:M})]})})}),V=[{to:"/",title:"Home"},{title:"Alert"}],q=[{id:"1",prop:"color",description:"Sets the color scheme of the alert box.",type:"'primary' | 'success' | 'warning' | 'green'",default:"'info'"},{id:"2",prop:"icon",description:"Adds a custom icon to the alert box.",type:"'HiInformationCircle'",default:"-"},{id:"3",prop:"onDismiss",description:"Callback function triggered when the dismiss button is clicked.",type:"onDismiss={() => alert('Alert dismissed!')}",default:"-"},{id:"4",prop:"rounded",description:"Applies rounded corners to the alert box.",type:"boolean",default:"false"},{id:"5",prop:"withBorderAccent",description:"Adds a border accent to the alert box.",type:"boolean",default:"false"},{id:"6",prop:"additionalContent",description:"Allows additional content to be added inside the alert box.",type:"React.ReactNode",default:"null"}],hr=()=>r.jsxs(r.Fragment,{children:[r.jsx(t,{title:"Alert",items:V}),r.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[r.jsx("div",{className:"col-span-12",children:r.jsx(y,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(w,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(A,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(L,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(D,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(R,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(T,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx($,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(B,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(p,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(N,{})}),r.jsx("div",{className:"col-span-12",children:r.jsx(c,{allApis:q,componentName:"Alert"})})]})]});export{hr as default};
