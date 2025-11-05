import{i as W,r as n,R as G,j as e,n as J,o as K,p as L}from"./index-n5lagw8Y.js";import{C as x}from"./CardBox-DP5V6wyZ.js";import{s as w}from"./blog-img1-CrD5D_jY.js";import{s as I,a as N}from"./blog-img3-UFWwLaVC.js";import{s as S}from"./blog-img4-BxyG7UYW.js";import{s as k}from"./blog-img5-BYefSY4E.js";import{r as Q}from"./index-C7CL5OQ7.js";import{u as V,g as Y,r as Z}from"./resolve-theme-BrLp9Ogr.js";import{C as ee}from"./chevron-left-icon-CnsRMBS9.js";import{C as se}from"./chevron-right-icon-BGQVsHY5.js";import{C as v}from"./CodeDialog-BcgW2Qgx.js";import{B as re}from"./BreadcrumbComp-BUvza-Rs.js";import{C as te}from"./ComponentApi-B3eoLsvt.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./TableRow-DNxHhbic.js";var oe=Q();const ie=W(oe);var R={exports:{}},B;function le(){if(B)return R.exports;B=1;function o(r,s=100,t={}){if(typeof r!="function")throw new TypeError(`Expected the first parameter to be a function, got \`${typeof r}\`.`);if(s<0)throw new RangeError("`wait` must not be negative.");const{immediate:a}=typeof t=="boolean"?{immediate:t}:t;let c,p,l,y,m;function E(){const h=c,M=p;return c=void 0,p=void 0,m=r.apply(h,M),m}function P(){const h=Date.now()-y;h<s&&h>=0?l=setTimeout(P,s-h):(l=void 0,a||(m=E()))}const g=function(...h){if(c&&this!==c&&Object.getPrototypeOf(this)===Object.getPrototypeOf(c))throw new Error("Debounced method called with different contexts of the same prototype.");c=this,p=h,y=Date.now();const M=a&&!l;return l||(l=setTimeout(P,s)),M&&(m=E()),m};return Object.defineProperty(g,"isPending",{get(){return l!==void 0}}),g.clear=()=>{l&&(clearTimeout(l),l=void 0)},g.flush=()=>{l&&g.trigger()},g.trigger=()=>{m=E(),g.clear()},g}return R.exports.debounce=o,R.exports=o,R.exports}var ae=le();const ne=W(ae);var ce=Object.defineProperty,de=(o,r,s)=>r in o?ce(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s,i=(o,r,s)=>de(o,typeof r!="symbol"?r+"":r,s);const me=300,ge=0;class $ extends n.PureComponent{constructor(r){super(r),i(this,"container"),i(this,"scrolling"),i(this,"started"),i(this,"pressed"),i(this,"isMobile",!1),i(this,"internal"),i(this,"scrollLeft"),i(this,"scrollTop"),i(this,"clientX"),i(this,"clientY"),i(this,"onEndScroll",()=>{this.scrolling=!1,!this.pressed&&this.started&&this.processEnd()}),i(this,"onScroll",()=>{const s=this.container.current;(s.scrollLeft!==this.scrollLeft||s.scrollTop!==this.scrollTop)&&(this.scrolling=!0,this.processScroll(),this.onEndScroll())}),i(this,"onTouchStart",s=>{const{nativeMobileScroll:t}=this.props;if(this.isDraggable(s.target))if(this.internal=!0,t&&this.scrolling)this.pressed=!0;else{const a=s.touches[0];this.processClick(a.clientX,a.clientY),!t&&this.props.stopPropagation&&s.stopPropagation()}}),i(this,"onTouchEnd",()=>{const{nativeMobileScroll:s}=this.props;this.pressed&&(this.started&&(!this.scrolling||!s)?this.processEnd():this.pressed=!1,this.forceUpdate())}),i(this,"onTouchMove",s=>{const{nativeMobileScroll:t}=this.props;if(this.pressed&&(!t||!this.isMobile)){const a=s.touches[0];a&&this.processMove(a.clientX,a.clientY),s.preventDefault(),this.props.stopPropagation&&s.stopPropagation()}}),i(this,"onMouseDown",s=>{this.isDraggable(s.target)&&this.isScrollable()&&(this.internal=!0,this.props?.buttons?.indexOf(s.button)!==-1&&(this.processClick(s.clientX,s.clientY),s.preventDefault(),this.props.stopPropagation&&s.stopPropagation()))}),i(this,"onMouseMove",s=>{this.pressed&&(this.processMove(s.clientX,s.clientY),s.preventDefault(),this.props.stopPropagation&&s.stopPropagation())}),i(this,"onMouseUp",s=>{this.pressed&&(this.started?this.processEnd():(this.internal=!1,this.pressed=!1,this.forceUpdate(),this.props.onClick&&this.props.onClick(s)),s.preventDefault(),this.props.stopPropagation&&s.stopPropagation())}),this.container=G.createRef(),this.onEndScroll=ne(this.onEndScroll,me),this.scrolling=!1,this.started=!1,this.pressed=!1,this.internal=!1,this.getRef=this.getRef.bind(this)}componentDidMount(){const{nativeMobileScroll:r}=this.props,s=this.container.current;window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!1}),window.addEventListener("touchend",this.onTouchEnd),s.addEventListener("touchstart",this.onTouchStart,{passive:!1}),s.addEventListener("mousedown",this.onMouseDown,{passive:!1}),r&&(this.isMobile=this.isMobileDevice(),this.isMobile&&this.forceUpdate())}componentWillUnmount(){window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd)}getElement(){return this.container.current}isMobileDevice(){return typeof window.orientation<"u"||navigator.userAgent.indexOf("IEMobile")!==-1}isDraggable(r){const s=this.props.ignoreElements;if(s){const t=r.closest(s);return t===null||t.contains(this.getElement())}else return!0}isScrollable(){const r=this.container.current;return r&&(r.scrollWidth>r.clientWidth||r.scrollHeight>r.clientHeight)}processClick(r,s){const t=this.container.current;this.scrollLeft=t?.scrollLeft,this.scrollTop=t?.scrollTop,this.clientX=r,this.clientY=s,this.pressed=!0}processStart(r=!0){const{onStartScroll:s}=this.props;this.started=!0,r&&document.body.classList.add("cursor-grab"),s&&s({external:!this.internal}),this.forceUpdate()}processScroll(){if(this.started){const{onScroll:r}=this.props;r&&r({external:!this.internal})}else this.processStart(!1)}processMove(r,s){const{horizontal:t,vertical:a,activationDistance:c,onScroll:p}=this.props,l=this.container.current;this.started?(t&&(l.scrollLeft-=r-this.clientX),a&&(l.scrollTop-=s-this.clientY),p&&p({external:!this.internal}),this.clientX=r,this.clientY=s,this.scrollLeft=l.scrollLeft,this.scrollTop=l.scrollTop):(t&&Math.abs(r-this.clientX)>c||a&&Math.abs(s-this.clientY)>c)&&(this.clientX=r,this.clientY=s,this.processStart())}processEnd(){const{onEndScroll:r}=this.props;this.container.current&&r&&r({external:!this.internal}),this.pressed=!1,this.started=!1,this.scrolling=!1,this.internal=!1,document.body.classList.remove("cursor-grab"),this.forceUpdate()}getRef(r){[this.container,this.props.innerRef].forEach(s=>{s&&(typeof s=="function"?s(r):s.current=r)})}render(){const{children:r,draggingClassName:s,className:t,style:a,hideScrollbars:c}=this.props;return e.jsx("div",{className:ie(t,this.pressed&&s,{"!scroll-auto [&>*]:pointer-events-none [&>*]:cursor-grab":this.pressed,"overflow-auto":this.isMobile,"overflow-hidden !overflow-x-hidden [scrollbar-width:none]":c,"[&::-webkit-scrollbar]:[-webkit-appearance:none !important] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!bg-transparent":c}),style:a,ref:this.getRef,onScroll:this.onScroll,children:r})}}i($,"defaultProps",{nativeMobileScroll:!0,hideScrollbars:!0,activationDistance:10,vertical:!0,horizontal:!0,stopPropagation:!1,style:{},buttons:[ge]});function he(){return typeof window<"u"}const ue=J({root:{base:"relative h-full w-full",leftControl:"absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",rightControl:"absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"},indicators:{active:{off:"bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",on:"bg-white dark:bg-gray-800"},base:"h-3 w-3 rounded-full",wrapper:"absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"},item:{base:"absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",wrapper:{off:"w-full shrink-0 transform cursor-default snap-center",on:"w-full shrink-0 transform cursor-grab snap-center"}},control:{base:"inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70",icon:"h-5 w-5 text-white sm:h-6 sm:w-6 dark:text-gray-800"},scrollContainer:{base:"flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",snap:"snap-x"}}),u=n.forwardRef((o,r)=>{const s=K(),t=V([ue,s.theme?.carousel,o.theme],[Y(s.clearTheme,"carousel"),o.clearTheme],[Y(s.applyTheme,"carousel"),o.applyTheme]),{children:a,indicators:c=!0,leftControl:p,rightControl:l,slide:y=!0,draggable:m=!0,slideInterval:E,className:P,onSlideChange:g,pauseOnHover:h=!1,...M}=Z(o,s.props?.carousel),q=he()&&navigator.userAgent.indexOf("IEMobile")!==-1,f=n.useRef(null),[b,H]=n.useState(0),[T,z]=n.useState(!1),[O,U]=n.useState(!1),_=n.useRef(!1),j=n.useMemo(()=>n.Children.map(a,d=>n.cloneElement(d,{className:L(t.item.base,d.props.className)})),[a,t.item.base]),D=n.useCallback(d=>()=>{j&&(d=(d+j.length)%j.length,f.current&&(f.current.scrollLeft=f.current.clientWidth*d),H(d))},[j]);n.useEffect(()=>{f.current&&!T&&f.current.scrollLeft!==0&&H(Math.round(f.current.scrollLeft/f.current.clientWidth))},[T]),n.useEffect(()=>{if(y&&!(h&&O)){const d=setInterval(()=>!T&&D(b+1)(),E??3e3);return()=>clearInterval(d)}},[b,T,D,y,E,h,O]),n.useEffect(()=>{_.current?g?.(b):_.current=!0},[g,b]);const A=d=>()=>z(d),F=n.useCallback(()=>U(!0),[]),X=n.useCallback(()=>U(!1),[]);return e.jsxs("div",{ref:r,className:L(t.root.base,P),"data-testid":"carousel",onMouseEnter:F,onMouseLeave:X,onTouchStart:F,onTouchEnd:X,...M,children:[e.jsx($,{className:L(t.scrollContainer.base,(q||!T)&&t.scrollContainer.snap),draggingClassName:"cursor-grab",innerRef:f,onEndScroll:A(!1),onStartScroll:A(m),vertical:!1,horizontal:m,children:j?.map((d,C)=>e.jsx("div",{className:t.item.wrapper[m?"on":"off"],"data-active":b===C,"data-testid":"carousel-item",children:d},C))}),c&&e.jsx("div",{className:t.indicators.wrapper,children:j?.map((d,C)=>e.jsx("button",{className:L(t.indicators.base,t.indicators.active[C===b?"on":"off"]),onClick:D(C),"data-testid":"carousel-indicator","aria-label":`Slide ${C+1}`},C))}),j&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:t.root.leftControl,children:e.jsx("button",{className:"group","data-testid":"carousel-left-control",onClick:D(b-1),type:"button","aria-label":"Previous slide",children:p||e.jsx(pe,{theme:t.control})})}),e.jsx("div",{className:t.root.rightControl,children:e.jsx("button",{className:"group","data-testid":"carousel-right-control",onClick:D(b+1),type:"button","aria-label":"Next slide",children:l||e.jsx(fe,{theme:t.control})})})]})]})});u.displayName="Carousel";function pe({theme:o}){return e.jsx("span",{className:o.base,children:e.jsx(ee,{className:o.icon})})}function fe({theme:o}){return e.jsx("span",{className:o.base,children:e.jsx(se,{className:o.icon})})}const be=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden",children:e.jsxs(u,{leftControl:"left",rightControl:"Right",children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})}),xe=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const CustomControlCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">\r
      <Carousel leftControl="left" rightControl="Right">\r
        <img src={blogImg1} alt="..." />\r
        <img src={blogImg2} alt="..." />\r
        <img src={blogImg3} alt="..." />\r
        <img src={blogImg4} alt="..." />\r
        <img src={blogImg5} alt="..." />\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default CustomControlCode;\r
`,ve=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Custom controls"}),e.jsx(be,{})]}),e.jsx(v,{children:xe})]})})}),je=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden",children:e.jsxs(u,{children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})}),Ce=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const DefaultCurouselCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">\r
      <Carousel>\r
        <img src={blogImg1} alt="..." />\r
        <img src={blogImg2} alt="..." />\r
        <img src={blogImg3} alt="..." />\r
        <img src={blogImg4} alt="..." />\r
        <img src={blogImg5} alt="..." />\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default DefaultCurouselCode;\r
`,we=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Default Carousel"}),e.jsx(je,{})]}),e.jsx(v,{children:Ce})]})})}),Ie=()=>e.jsx("div",{children:e.jsxs("div",{className:"grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96",children:[e.jsxs(u,{children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]}),e.jsxs(u,{indicators:!1,children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})]})}),Ne=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const IndicatorsCode = () => {\r
  return (\r
    <div>\r
      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">\r
        <Carousel>\r
          <img src={blogImg1} alt="..." />\r
          <img src={blogImg2} alt="..." />\r
          <img src={blogImg3} alt="..." />\r
          <img src={blogImg4} alt="..." />\r
          <img src={blogImg5} alt="..." />\r
        </Carousel>\r
        <Carousel indicators={false}>\r
          <img src={blogImg1} alt="..." />\r
          <img src={blogImg2} alt="..." />\r
          <img src={blogImg3} alt="..." />\r
          <img src={blogImg4} alt="..." />\r
          <img src={blogImg5} alt="..." />\r
        </Carousel>\r
      </div>\r
    </div>\r
  );\r
};\r
\r
export default IndicatorsCode;\r
`,Se=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Indicators"}),e.jsx(Ie,{})]}),e.jsx(v,{children:Ne})]})})}),ke=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden",children:e.jsxs(u,{pauseOnHover:!0,children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})}),Ee=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const PauseHoverCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">\r
      <Carousel pauseOnHover>\r
        <img src={blogImg1} alt="..." />\r
        <img src={blogImg2} alt="..." />\r
        <img src={blogImg3} alt="..." />\r
        <img src={blogImg4} alt="..." />\r
        <img src={blogImg5} alt="..." />\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default PauseHoverCode;\r
`,ye=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Pause On Hover"}),e.jsx(ke,{})]}),e.jsx(v,{children:Ee})]})})}),Me=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-60",children:e.jsxs(u,{onSlideChange:o=>console.log("onSlideChange()",o),children:[e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 1"}),e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 2"}),e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 3"})]})}),Te=`import { Carousel } from 'flowbite-react';\r
\r
const SlideEventCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-60">\r
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 1\r
        </div>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 2\r
        </div>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 3\r
        </div>\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default SlideEventCode;\r
`,De=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Handle Event"}),e.jsx(Me,{})]}),e.jsx(v,{children:Te})]})})}),Pe=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-60",children:e.jsxs(u,{children:[e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 1"}),e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 2"}),e.jsx("div",{className:"flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white",children:"Slide 3"})]})}),Le=`import { Carousel } from 'flowbite-react';\r
\r
const SliderContentCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-60">\r
      <Carousel>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 1\r
        </div>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 2\r
        </div>\r
        <div className="flex h-full items-center justify-center bg-muted text-lg font-semibold text-dark dark:bg-dark dark:text-white">\r
          Slide 3\r
        </div>\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default SliderContentCode;\r
`,Re=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Slider Content"}),e.jsx(Pe,{})]}),e.jsx(v,{children:Le})]})})}),He=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden",children:e.jsxs(u,{slideInterval:5e3,children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})}),Oe=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const SlidingCuroselCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">\r
      <Carousel slideInterval={5000}>\r
        <img src={blogImg1} alt="..." />\r
        <img src={blogImg2} alt="..." />\r
        <img src={blogImg3} alt="..." />\r
        <img src={blogImg4} alt="..." />\r
        <img src={blogImg5} alt="..." />\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default SlidingCuroselCode;\r
`,Ue=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Sliding Interval"}),e.jsx(He,{})]}),e.jsx(v,{children:Oe})]})})}),_e=()=>e.jsx("div",{className:"h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden",children:e.jsxs(u,{slide:!1,children:[e.jsx("img",{src:w,alt:"..."}),e.jsx("img",{src:I,alt:"..."}),e.jsx("img",{src:N,alt:"..."}),e.jsx("img",{src:S,alt:"..."}),e.jsx("img",{src:k,alt:"..."})]})}),Ae=`import { Carousel } from 'flowbite-react';\r
import blogImg1 from '/src/assets/images/blog/blog-img1.jpg';\r
import blogImg2 from '/src/assets/images/blog/blog-img2.jpg';\r
import blogImg3 from '/src/assets/images/blog/blog-img3.jpg';\r
import blogImg4 from '/src/assets/images/blog/blog-img4.jpg';\r
import blogImg5 from '/src/assets/images/blog/blog-img5.jpg';\r
\r
const StaticCuroselCode = () => {\r
  return (\r
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">\r
      <Carousel slide={false}>\r
        <img src={blogImg1} alt="..." />\r
        <img src={blogImg2} alt="..." />\r
        <img src={blogImg3} alt="..." />\r
        <img src={blogImg4} alt="..." />\r
        <img src={blogImg5} alt="..." />\r
      </Carousel>\r
    </div>\r
  );\r
};\r
\r
export default StaticCuroselCode;\r
`,Fe=()=>e.jsx("div",{children:e.jsx(x,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold mb-4",children:"Static Carousel"}),e.jsx(_e,{})]}),e.jsx(v,{children:Ae})]})})}),Xe=[{to:"/",title:"Home"},{title:"Carousel"}],Ye=[{id:"1",prop:"slide",description:"Enable or disable sliding transitions.",type:"boolean",default:"true"},{id:"2",prop:"indicators",description:"Show navigation indicators below the carousel.",type:"boolean",default:"true"},{id:"3",prop:"pauseOnHover",description:"Pause the carousel on mouse hover (desktop) or touch and hold (mobile).",type:"boolean",default:"false"},{id:"4",prop:"slideInterval",description:"Time interval between slides in milliseconds.",type:"number",default:"5000"},{id:"6",prop:"leftControl",description:"Custom left navigation control.",type:"'<' | 'left' ",default:"-"},{id:"7",prop:"rightControl",description:"Custom right navigation control.",type:"'>' | 'right'",default:"-"},{id:"8",prop:"onSlideChange",description:"Callback function when the slide changes.",type:`'(index) => console.log("onSlideChange()", index)'`,default:"-"},{id:"9",prop:"activeIndex",description:"Manually control the active slide index.",type:"number",default:"-"}],hs=()=>e.jsxs(e.Fragment,{children:[e.jsx(re,{title:"Carousel",items:Xe}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(we,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Fe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ue,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ve,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Se,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ye,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Re,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(De,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(te,{allApis:Ye,componentName:"Carousel"})})]})]});export{hs as default};
