import{r as h,o as p,j as e,p as f}from"./index-n5lagw8Y.js";import{C as i}from"./CardBox-DP5V6wyZ.js";import{r as R,R as t,a as s}from"./RatingStar-BSnJt_GD.js";import{u as v,g as x,r as u}from"./resolve-theme-BrLp9Ogr.js";import{C as d}from"./CodeDialog-BcgW2Qgx.js";import{B as N}from"./BreadcrumbComp-BUvza-Rs.js";import{C as b}from"./ComponentApi-B3eoLsvt.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";import"./TableRow-DNxHhbic.js";const r=h.forwardRef((n,m)=>{const l=p(),a=v([R,l.theme?.ratingAdvanced,n.theme],[x(l.clearTheme,"ratingAdvanced"),n.clearTheme],[x(l.applyTheme,"ratingAdvanced"),n.applyTheme]),{children:o,className:j,percentFilled:c=0,...g}=u(n,l.props?.ratingAdvanced);return e.jsxs("div",{ref:m,className:f(a.base,j),...g,children:[e.jsx("span",{className:a.label,children:o}),e.jsx("div",{className:a.progress.base,children:e.jsx("div",{className:a.progress.fill,"data-testid":"flowbite-rating-fill",style:{width:`${c}%`}})}),e.jsx("span",{className:a.progress.label,children:`${c}%`})]})});r.displayName="RatingAdvanced";const C=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs(t,{className:"mb-2",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1}),e.jsx("p",{className:"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400",children:"4.95 out of 5"})]}),e.jsx("p",{className:"mb-4 text-sm font-medium text-gray-500 dark:text-gray-400",children:"1,745 global ratings"}),e.jsx(r,{percentFilled:70,className:"mb-2",children:"5 star"}),e.jsx(r,{percentFilled:17,className:"mb-2",children:"4 star"}),e.jsx(r,{percentFilled:8,className:"mb-2",children:"3 star"}),e.jsx(r,{percentFilled:4,className:"mb-2",children:"2 star"}),e.jsx(r,{percentFilled:1,children:"1 star"})]})}),y=`import { Rating, RatingAdvanced, RatingStar } from 'flowbite-react';\r
\r
const AdvanceRatingCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating className="mb-2">\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>\r
        </Rating>\r
        <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">\r
          1,745 global ratings\r
        </p>\r
        <RatingAdvanced percentFilled={70} className="mb-2">\r
          5 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={17} className="mb-2">\r
          4 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={8} className="mb-2">\r
          3 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={4} className="mb-2">\r
          2 star\r
        </RatingAdvanced>\r
        <RatingAdvanced percentFilled={1}>1 star</RatingAdvanced>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default AdvanceRatingCode;\r
`,A=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Advanced Rating"}),e.jsx(C,{})]}),e.jsx(d,{children:y})]})})}),S=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]})})}),w=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const DefaultRatingCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default DefaultRatingCode;\r
`,F=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default rating"}),e.jsx(S,{})]}),e.jsx(d,{children:w})]})})}),T=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx("p",{className:"ml-2 text-sm font-bold text-gray-900 dark:text-white",children:"4.95"}),e.jsx("span",{className:"mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white",children:"73 reviews"})]})})}),k=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const RatingCountCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>\r
          <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />\r
          <a\r
            href="#"\r
            className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"\r
          >\r
            73 reviews\r
          </a>\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default RatingCountCode;\r
`,z=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rating Count"}),e.jsx(T,{})]}),e.jsx(d,{children:k})]})})}),D=()=>e.jsx("div",{children:e.jsxs(i,{children:[e.jsx("h4",{className:"text-lg font-semibold mb-2",children:"Star sizing"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"md",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]}),e.jsxs(t,{size:"lg",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1})]})]})]})}),W=()=>e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(t,{children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{filled:!1}),e.jsx("p",{className:"ml-2 text-sm font-medium text-gray-500 dark:text-gray-400",children:"4.95 out of 5"})]})})}),B=`import { Rating, RatingStar } from 'flowbite-react';\r
\r
const WithTextRatingsCode = () => {\r
  return (\r
    <>\r
      <div>\r
        <Rating>\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar />\r
          <RatingStar filled={false} />\r
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>\r
        </Rating>\r
      </div>\r
    </>\r
  );\r
};\r
\r
export default WithTextRatingsCode;\r
`,P=()=>e.jsx("div",{children:e.jsx(i,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Rating With Text"}),e.jsx(W,{})]}),e.jsx(d,{children:B})]})})}),E=[{to:"/",title:"Home"},{title:"Rating"}],$=[{id:"1",prop:"size",description:"Sets the size of the stars.",type:'"sm" | "md" | "lg"',default:'"sm"'},{id:"2",prop:"filled",description:"If true, the star is filled otherwise, it is empty.",type:"boolean",default:"true"},{id:"3",prop:"percentFilled",description:"The percentage of the rating bar that is filled.",type:"1 to 100",default:"0"}],re=()=>e.jsxs(e.Fragment,{children:[e.jsx(N,{title:"Rating",items:E}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(F,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(P,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(z,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(D,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(A,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(b,{allApis:$,componentName:"Rating"})})]})]});export{re as default};
