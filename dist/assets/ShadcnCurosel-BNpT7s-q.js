import{j as e}from"./index-n5lagw8Y.js";import{C as s}from"./CodeDialog-BcgW2Qgx.js";import{C as a}from"./CardBox-DP5V6wyZ.js";import{C as t,a as l}from"./card-CvI5KskL.js";import{C as n,a as o,b as i,c,d as m}from"./carousel-B9YTK_gc.js";import{B as x}from"./BreadcrumbComp-BUvza-Rs.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./resolve-theme-BrLp9Ogr.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./button-BnqkFln5.js";import"./chevron-right-icon-BGQVsHY5.js";const u=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3 mt-4",children:e.jsxs(n,{className:"w-full max-w-xs",children:[e.jsx(o,{children:Array.from({length:5}).map((d,r)=>e.jsx(i,{children:e.jsx("div",{className:"p-1",children:e.jsx(t,{className:"border-ld",children:e.jsx(l,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl text-ld font-semibold",children:r+1})})})})},r))}),e.jsx(c,{className:"text-primary"}),e.jsx(m,{})]})})}),C=`import { Card, CardContent } from "src/components/shadcn-ui/Default-Ui/card"\r
import {\r
    Carousel,\r
    CarouselContent,\r
    CarouselItem,\r
    CarouselNext,\r
    CarouselPrevious,\r
} from "src/components/shadcn-ui/Default-Ui/carousel"\r
\r
const BasicCarouselCode = () => {\r
  return (\r
   <>\r
   <div className="flex flex-wrap items-center justify-center gap-3 mt-4">\r
                <Carousel className="w-full max-w-xs">\r
                    <CarouselContent>\r
                        {Array.from({ length: 5 }).map((_, index) => (\r
                            <CarouselItem key={index}>\r
                                <div className="p-1">\r
                                    <Card className='border-ld'>\r
                                        <CardContent className="flex aspect-square items-center justify-center p-6">\r
                                            <span className="text-4xl text-ld font-semibold">{index + 1}</span>\r
                                        </CardContent>\r
                                    </Card>\r
                                </div>\r
                            </CarouselItem>\r
                        ))}\r
                    </CarouselContent>\r
                    <CarouselPrevious className='text-primary' />\r
                    <CarouselNext />\r
                </Carousel>\r
            </div>\r
   </>\r
  )\r
}\r
\r
export default BasicCarouselCode`,p=()=>e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Carousel"}),e.jsx(u,{})]}),e.jsx(s,{children:C})]})}),f=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3 mt-4",children:e.jsxs(n,{className:"w-full max-w-xs",children:[e.jsx(o,{children:Array.from({length:5}).map((d,r)=>e.jsx(i,{className:"md:basis-1/2 lg:basis-1/3",children:e.jsx("div",{className:"p-1",children:e.jsx(t,{className:"border-border",children:e.jsx(l,{className:"flex aspect-square items-center justify-center p-6",children:e.jsx("span",{className:"text-4xl text-ld font-semibold",children:r+1})})})})},r))}),e.jsx(c,{}),e.jsx(m,{})]})})}),j=`import { Card, CardContent } from "src/components/shadcn-ui/Default-Ui/card"\r
import {\r
    Carousel,\r
    CarouselContent,\r
    CarouselItem,\r
    CarouselNext,\r
    CarouselPrevious,\r
} from "src/components/shadcn-ui/Default-Ui/carousel"\r
const CarouselMultipleItemCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center justify-center gap-3 mt-4">\r
        <Carousel className="w-full max-w-xs" >\r
            <CarouselContent>\r
                {Array.from({ length: 5 }).map((_, index) => (\r
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">\r
                        <div className="p-1">\r
                            <Card className='border-border'>\r
                                <CardContent className="flex aspect-square items-center justify-center p-6">\r
                                    <span className="text-4xl text-ld font-semibold">{index + 1}</span>\r
                                </CardContent>\r
                            </Card>\r
                        </div>\r
                    </CarouselItem>\r
                ))}\r
            </CarouselContent>\r
            <CarouselPrevious />\r
            <CarouselNext />\r
        </Carousel>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default CarouselMultipleItemCode\r
`,h=()=>e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Carousel With Multiple Item"}),e.jsx(f,{})]}),e.jsx(s,{children:j})]})}),N=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-3 my-16",children:e.jsxs(n,{opts:{align:"start"},orientation:"vertical",className:"w-full max-w-xs",children:[e.jsx(o,{className:"-mt-1 h-[200px] border-border",children:Array.from({length:5}).map((d,r)=>e.jsx(i,{className:"pt-1 md:basis-1/2",children:e.jsx("div",{className:"p-1",children:e.jsx(t,{children:e.jsx(l,{className:"flex items-center justify-center p-6",children:e.jsx("span",{className:"text-3xl font-semibold text-ld",children:r+1})})})})},r))}),e.jsx(c,{}),e.jsx(m,{})]})})}),v=`import { Card, CardContent } from "src/components/shadcn-ui/Default-Ui/card"\r
import {\r
  Carousel,\r
  CarouselContent,\r
  CarouselItem,\r
  CarouselNext,\r
  CarouselPrevious,\r
} from "src/components/shadcn-ui/Default-Ui/carousel"\r
\r
const VerticalCarouselCode = () => {\r
  return (\r
    <>\r
    <div className="flex flex-wrap items-center justify-center gap-3 my-16">\r
    <Carousel\r
      opts={{\r
        align: "start",\r
      }}\r
      orientation="vertical"\r
      className="w-full max-w-xs"\r
    >\r
      <CarouselContent className="-mt-1 h-[200px] border-border">\r
        {Array.from({ length: 5 }).map((_, index) => (\r
          <CarouselItem key={index} className="pt-1 md:basis-1/2">\r
            <div className="p-1">\r
              <Card>\r
                <CardContent className="flex items-center justify-center p-6">\r
                  <span className="text-3xl font-semibold text-ld">{index + 1}</span>\r
                </CardContent>\r
              </Card>\r
            </div>\r
          </CarouselItem>\r
        ))}\r
      </CarouselContent>\r
      <CarouselPrevious />\r
      <CarouselNext />\r
    </Carousel>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default VerticalCarouselCode`;function g(){return e.jsx(a,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Vertical Carousel"}),e.jsx(N,{})]}),e.jsx(s,{children:v})]})})}const b=[{to:"/",title:"Home"},{title:"Curosel"}],z=()=>e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Curosel",items:b}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(p,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(g,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(h,{})})]})]});export{z as default};
