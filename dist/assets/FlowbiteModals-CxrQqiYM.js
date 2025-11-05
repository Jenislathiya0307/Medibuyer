import{r as t,j as e}from"./index-n5lagw8Y.js";import{C as i}from"./CardBox-DP5V6wyZ.js";import{B as r}from"./Button-BChG-RMT.js";import{M as d,a as c,b as u}from"./ModalFooter-h4dtzp6W.js";import{M as m}from"./ModalHeader-CD9DSApg.js";import{C as p}from"./CodeDialog-BcgW2Qgx.js";import{L as x}from"./Label-fniU0OUx.js";import{T as h}from"./TextInput-BqV0c51w.js";import{C as j}from"./Checkbox-DjM3E0bB.js";import{S as f}from"./Select-Dhx4EgIQ.js";import{x as v}from"./index-B3jNiIug.js";import{B as M}from"./BreadcrumbComp-BUvza-Rs.js";import{C as y}from"./ComponentApi-B3eoLsvt.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./iconBase-CU_7cgqW.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const b=()=>{const[a,o]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(r,{onClick:()=>o(!0),className:"px-10",color:"primary",children:"Default Modal"}),e.jsxs(d,{show:a,onClose:()=>o(!1),children:[e.jsx(m,{className:"rounded-t-md pb-0",children:"Terms of Service"}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(u,{children:[e.jsx(r,{onClick:()=>o(!1),className:" bg-primary",children:"I accept"}),e.jsx(r,{color:"gray",onClick:()=>o(!1),children:"Decline"})]})]})]})})},N=`import { useState } from 'react';\r
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';\r
\r
const DefaultModalCode = () => {\r
  const [openModal, setOpenModal] = useState(false);\r
  return (\r
    <>\r
      <div>\r
        <Button onClick={() => setOpenModal(true)} className="px-10" color="primary">\r
          Default Modal\r
        </Button>\r
        <Modal show={openModal} onClose={() => setOpenModal(false)}>\r
          <ModalHeader className="rounded-t-md pb-0">Terms of Service</ModalHeader>\r
          <ModalBody>\r
            <div className="space-y-6">\r
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">\r
                With less than a month to go before the European Union enacts new consumer privacy\r
                laws for its citizens, companies around the world are updating their terms of\r
                service agreements to comply.\r
              </p>\r
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">\r
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect\r
                on May 25 and is meant to ensure a common set of data rights in the European Union.\r
                It requires organizations to notify users as soon as possible of high-risk data\r
                breaches that could personally affect them.\r
              </p>\r
            </div>\r
          </ModalBody>\r
          <ModalFooter>\r
            <Button onClick={() => setOpenModal(false)} className=" bg-primary">\r
              I accept\r
            </Button>\r
            <Button color="gray" onClick={() => setOpenModal(false)}>\r
              Decline\r
            </Button>\r
          </ModalFooter>\r
        </Modal>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultModalCode;\r
`,C=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Modal"}),e.jsx(b,{})]}),e.jsx(p,{children:N})]})})}),w=()=>{const[a,o]=t.useState(!1),[l,s]=t.useState("");function n(){o(!1),s("")}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mt-2",children:[e.jsx(r,{onClick:()=>o(!0),className:"px-10",color:"info",children:"Modal with form elements"}),e.jsxs(d,{show:a,size:"md",onClose:n,popup:!0,children:[e.jsx(m,{className:"p-6",children:"Sign in to our platform"}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(x,{htmlFor:"email",children:"Your email"})}),e.jsx(h,{id:"email",placeholder:"name@company.com",value:l,onChange:g=>s(g.target.value),required:!0})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 block",children:e.jsx(x,{htmlFor:"password",children:"Your password"})}),e.jsx(h,{id:"password",type:"password",required:!0})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(j,{id:"remember"}),e.jsx(x,{htmlFor:"remember",children:"Remember me"})]}),e.jsx("a",{href:"#",className:"text-sm text-cyan-700 hover:underline dark:text-cyan-500",children:"Lost Password?"})]}),e.jsx("div",{className:"w-full",children:e.jsx(r,{className:" bg-primary",children:"Log in to your account"})}),e.jsxs("div",{className:"flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered? ",e.jsx("a",{href:"#",className:"text-cyan-700 hover:underline dark:text-cyan-500",children:"Create account"})]})]})})]})]})})},k=`import { useState } from 'react';\r
import { Button, Checkbox, Label, Modal, ModalBody, ModalHeader, TextInput } from 'flowbite-react';\r
\r
const FormModalCode = () => {\r
  const [formModal, setFormModal] = useState(false);\r
  const [email, setEmail] = useState('');\r
  function onCloseModal() {\r
    setFormModal(false);\r
    setEmail('');\r
  }\r
\r
  return (\r
    <>\r
      <div className="mt-2">\r
        <Button onClick={() => setFormModal(true)} className="px-10" color="info">\r
          Modal with form elements\r
        </Button>\r
        <Modal show={formModal} size="md" onClose={onCloseModal} popup>\r
          <ModalHeader className="p-6">Sign in to our platform</ModalHeader>\r
          <ModalBody>\r
            <div className="space-y-6">\r
              <div>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="email">Your email</Label>\r
                </div>\r
                <TextInput\r
                  id="email"\r
                  placeholder="name@company.com"\r
                  value={email}\r
                  onChange={(event) => setEmail(event.target.value)}\r
                  required\r
                />\r
              </div>\r
              <div>\r
                <div className="mb-2 block">\r
                  <Label htmlFor="password">Your password</Label>\r
                </div>\r
                <TextInput id="password" type="password" required />\r
              </div>\r
              <div className="flex justify-between">\r
                <div className="flex items-center gap-2">\r
                  <Checkbox id="remember" />\r
                  <Label htmlFor="remember">Remember me</Label>\r
                </div>\r
                <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">\r
                  Lost Password?\r
                </a>\r
              </div>\r
              <div className="w-full">\r
                <Button className=" bg-primary">Log in to your account</Button>\r
              </div>\r
              <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">\r
                Not registered?&nbsp;\r
                <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">\r
                  Create account\r
                </a>\r
              </div>\r
            </div>\r
          </ModalBody>\r
        </Modal>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default FormModalCode;\r
`,B=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Modal with form elements"}),e.jsx(w,{})]}),e.jsx(p,{children:k})]})})}),P=()=>{const[a,o]=t.useState(!1),[l,s]=t.useState("center");return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx("div",{className:"w-40",children:e.jsxs(f,{defaultValue:"center",onChange:n=>s(n.target.value),children:[e.jsx("option",{value:"center",children:"Center"}),e.jsx("option",{value:"top-left",children:"Top left"}),e.jsx("option",{value:"top-center",children:"Top center"}),e.jsx("option",{value:"top-right",children:"Top right"}),e.jsx("option",{value:"center-left",children:"Center left"}),e.jsx("option",{value:"center-right",children:"Center right"}),e.jsx("option",{value:"bottom-right",children:"Bottom right"}),e.jsx("option",{value:"bottom-center",children:"Bottom center"}),e.jsx("option",{value:"bottom-left",children:"Bottom left"})]})}),e.jsx(r,{onClick:()=>o(!0),className:"w-fit",color:"error",children:"Toggle Modal"})]}),e.jsxs(d,{show:a,position:l,onClose:()=>o(!1),children:[e.jsx(m,{className:"pb-0",children:"Small modal"}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(u,{children:[e.jsx(r,{onClick:()=>o(!1),className:"bg-primary ",children:"I accept"}),e.jsx(r,{color:"gray",onClick:()=>o(!1),children:"Decline"})]})]})]})})},S=`import { useState } from 'react';\r
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Select } from 'flowbite-react';\r
\r
const PlacementModalCode = () => {\r
  const [placeModal, setPlaceModal] = useState(false);\r
  const [modalPlacement, setModalPlacement] = useState('center');\r
\r
  return (\r
    <>\r
      <div>\r
        <div className="flex flex-wrap gap-4">\r
          <div className="w-40">\r
            <Select\r
              defaultValue="center"\r
              onChange={(event) => setModalPlacement(event.target.value)}\r
            >\r
              <option value="center">Center</option>\r
              <option value="top-left">Top left</option>\r
              <option value="top-center">Top center</option>\r
              <option value="top-right">Top right</option>\r
              <option value="center-left">Center left</option>\r
              <option value="center-right">Center right</option>\r
              <option value="bottom-right">Bottom right</option>\r
              <option value="bottom-center">Bottom center</option>\r
              <option value="bottom-left">Bottom left</option>\r
            </Select>\r
          </div>\r
          <Button onClick={() => setPlaceModal(true)} className="w-fit" color="error">\r
            Toggle Modal\r
          </Button>\r
        </div>\r
        <Modal show={placeModal} position={modalPlacement} onClose={() => setPlaceModal(false)}>\r
          <ModalHeader className="pb-0">Small modal</ModalHeader>\r
          <ModalBody>\r
            <div className="space-y-6">\r
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">\r
                With less than a month to go before the European Union enacts new consumer privacy\r
                laws for its citizens, companies around the world are updating their terms of\r
                service agreements to comply.\r
              </p>\r
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">\r
                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect\r
                on May 25 and is meant to ensure a common set of data rights in the European Union.\r
                It requires organizations to notify users as soon as possible of high-risk data\r
                breaches that could personally affect them.\r
              </p>\r
            </div>\r
          </ModalBody>\r
          <ModalFooter>\r
            <Button onClick={() => setPlaceModal(false)} className="bg-primary ">\r
              I accept\r
            </Button>\r
            <Button color="gray" onClick={() => setPlaceModal(false)}>\r
              Decline\r
            </Button>\r
          </ModalFooter>\r
        </Modal>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default PlacementModalCode;\r
`,F=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Placement options"}),e.jsx(P,{})]}),e.jsx(p,{children:S})]})})}),E=()=>{const[a,o]=t.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsx(r,{onClick:()=>o(!0),className:"px-10",color:"secondary",children:"Pop-up Modal"}),e.jsxs(d,{show:a,size:"md",onClose:()=>o(!1),popup:!0,className:"rounded-t-md",children:[e.jsx(m,{}),e.jsx(c,{children:e.jsxs("div",{className:"text-center",children:[e.jsx(v,{className:"mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"}),e.jsx("h3",{className:"mb-5 text-lg font-normal text-gray-500 dark:text-gray-400",children:"Are you sure you want to delete this product?"}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(r,{color:"error",onClick:()=>o(!1),children:"Yes, I'm sure"}),e.jsx(r,{color:"gray",onClick:()=>o(!1),children:"No, cancel"})]})]})})]})]})})},D=`import { useState } from 'react';\r
import { Button, Modal, ModalBody, ModalHeader } from 'flowbite-react';\r
import { HiOutlineExclamationCircle } from 'react-icons/hi';\r
\r
const PopupModalCode = () => {\r
  const [popupModal, setPopupModal] = useState(false);\r
  return (\r
    <>\r
      <div>\r
        <Button onClick={() => setPopupModal(true)} className="px-10" color="secondary">\r
          Pop-up Modal\r
        </Button>\r
        <Modal\r
          show={popupModal}\r
          size="md"\r
          onClose={() => setPopupModal(false)}\r
          popup\r
          className="rounded-t-md"\r
        >\r
          <ModalHeader />\r
          <ModalBody>\r
            <div className="text-center">\r
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />\r
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">\r
                Are you sure you want to delete this product?\r
              </h3>\r
              <div className="flex justify-center gap-4">\r
                <Button color="error" onClick={() => setPopupModal(false)}>\r
                  {"Yes, I'm sure"}\r
                </Button>\r
                <Button color="gray" onClick={() => setPopupModal(false)}>\r
                  No, cancel\r
                </Button>\r
              </div>\r
            </div>\r
          </ModalBody>\r
        </Modal>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default PopupModalCode;\r
`,z=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Pop-up Modal"}),e.jsx(E,{})]}),e.jsx(p,{children:D})]})})}),T=()=>{const[a,o]=t.useState(!1),[l,s]=t.useState("md");return e.jsx("div",{children:e.jsx(i,{children:e.jsxs("div",{children:[e.jsx("h4",{className:"text-lg font-semibold ",children:"Sizing options"}),e.jsxs("div",{className:"flex flex-wrap gap-4 mt-4",children:[e.jsx("div",{className:"w-40",children:e.jsxs(f,{defaultValue:"md",onChange:n=>s(n.target.value),children:[e.jsx("option",{value:"sm",children:"sm"}),e.jsx("option",{value:"md",children:"md"}),e.jsx("option",{value:"lg",children:"lg"}),e.jsx("option",{value:"xl",children:"xl"}),e.jsx("option",{value:"2xl",children:"2xl"}),e.jsx("option",{value:"3xl",children:"3xl"}),e.jsx("option",{value:"4xl",children:"4xl"}),e.jsx("option",{value:"5xl",children:"5xl"}),e.jsx("option",{value:"6xl",children:"6xl"}),e.jsx("option",{value:"7xl",children:"7xl"})]})}),e.jsx(r,{onClick:()=>o(!0),className:"w-fit",color:"success",children:"Toggle Modal"})]}),e.jsxs(d,{show:a,size:l,onClose:()=>o(!1),children:[e.jsx(m,{className:"pb-0",children:"Small modal"}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-6 ",children:[e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply."}),e.jsx("p",{className:"text-base leading-relaxed text-gray-500 dark:text-gray-400",children:"The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them."})]})}),e.jsxs(u,{children:[e.jsx(r,{onClick:()=>o(!1),className:"bg-primary ",children:"I accept"}),e.jsx(r,{color:"gray",onClick:()=>o(!1),children:"Decline"})]})]})]})})})},I=[{to:"/",title:"Home"},{title:"Modals"}],H=[{id:"1",prop:"show",description:"Controls the visibility of the modal.",type:"boolean",default:"false"},{id:"2",prop:"onClose",description:"Function to call when the modal is requested to be closed.",type:"() => void",default:"-"},{id:"3",prop:"size",description:"Sets the size of the modal (e.g., sm, md, lg, xl, 2xl).",type:"'sm' | 'md' | 'lg' | 'xl' | '2xl'",default:"'2xl'"},{id:"4",prop:"popup",description:"Enables popup-style modal (with centered layout).",type:"boolean",default:"false"},{id:"5",prop:"dismissible",description:"If true, adds a close (X) button to the top-right corner.",type:"boolean",default:"true"},{id:"6",prop:"position",description:"Sets the position of the modal on the screen.",type:"'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",default:"'center'"}],ce=()=>e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Modals",items:I}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(C,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(B,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(F,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(T,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(y,{allApis:H,componentName:"Modals"})})]})]});export{ce as default};
