import{r as l,R as M,j as e}from"./index-n5lagw8Y.js";import{C as $}from"./CardBox-DP5V6wyZ.js";import{$ as le,a as je}from"./useFocusRing-BQxkpHIn.js";import{w as Ne}from"./use-active-press-BchvfSUV.js";import{Y as H,c as X,a as _,o as z,n as Z,K,V as me,u as W,A as ne,t as we}from"./render-D9E-06xR.js";import{e as Ce}from"./use-resolve-button-type-B08ktXI3.js";import{y as Y}from"./use-sync-refs-CefhOWeT.js";import{f as Pe}from"./use-is-mounted-Bfvr3D71.js";import{f as ce,s as Ie}from"./hidden-C2xwWGhP.js";import{v as F,T as j,A as Q,G as J}from"./focus-management-Ds-lPg9b.js";import{e as ke}from"./owner-CneWfzVc.js";import{o as N}from"./keyboard-C1Wiwm26.js";import{C as R}from"./CodeDialog-BcgW2Qgx.js";import{B as Le}from"./BreadcrumbComp-BUvza-Rs.js";import"./resolve-theme-BrLp9Ogr.js";import"./dom-BlW_0b_t.js";import"./iconify-VfOFnMl8.js";import"./index-DIAcSD30.js";import"./Tooltip-CDCKvG7n.js";import"./floating-ui.react-DP-UpT2K.js";import"./use-floating-DQGwidr_.js";import"./createReactComponent-CsMxoXbl.js";import"./index-D3bh7N2R.js";import"./index-Chjiymov.js";import"./toConsumableArray-BFVEN8Eh.js";import"./extends-CF3RwP-h.js";import"./chevron-right-icon-BGQVsHY5.js";function Ae({onFocus:t}){let[a,r]=l.useState(!0),s=Pe();return a?M.createElement(ce,{as:"button",type:"button",features:Ie.Focusable,onFocus:o=>{o.preventDefault();let i,n=50;function u(){if(n--<=0){i&&cancelAnimationFrame(i);return}if(t()){if(cancelAnimationFrame(i),!s.current)return;r(!1);return}i=requestAnimationFrame(u)}i=requestAnimationFrame(u)}}):null}const ue=l.createContext(null);function $e(){return{groups:new Map,get(t,a){var r;let s=this.groups.get(t);s||(s=new Map,this.groups.set(t,s));let o=(r=s.get(a))!=null?r:0;s.set(a,o+1);let i=Array.from(s.keys()).indexOf(a);function n(){let u=s.get(a);u>1?s.set(a,u-1):s.delete(a)}return[i,n]}}}function Se({children:t}){let a=l.useRef($e());return l.createElement(ue.Provider,{value:a},t)}function he(t){let a=l.useContext(ue);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let r=l.useId(),[s,o]=a.current.get(t,r);return l.useEffect(()=>o,[]),s}var ze=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(ze||{}),De=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(De||{}),Ee=(t=>(t[t.SetSelectedIndex=0]="SetSelectedIndex",t[t.RegisterTab=1]="RegisterTab",t[t.UnregisterTab=2]="UnregisterTab",t[t.RegisterPanel=3]="RegisterPanel",t[t.UnregisterPanel=4]="UnregisterPanel",t))(Ee||{});let Fe={0(t,a){var r;let s=J(t.tabs,h=>h.current),o=J(t.panels,h=>h.current),i=s.filter(h=>{var y;return!((y=h.current)!=null&&y.hasAttribute("disabled"))}),n={...t,tabs:s,panels:o};if(a.index<0||a.index>s.length-1){let h=W(Math.sign(a.index-t.selectedIndex),{[-1]:()=>1,0:()=>W(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(i.length===0)return n;let y=W(h,{0:()=>s.indexOf(i[0]),1:()=>s.indexOf(i[i.length-1])});return{...n,selectedIndex:y===-1?t.selectedIndex:y}}let u=s.slice(0,a.index),w=[...s.slice(a.index),...u].find(h=>i.includes(h));if(!w)return n;let g=(r=s.indexOf(w))!=null?r:t.selectedIndex;return g===-1&&(g=t.selectedIndex),{...n,selectedIndex:g}},1(t,a){if(t.tabs.includes(a.tab))return t;let r=t.tabs[t.selectedIndex],s=J([...t.tabs,a.tab],i=>i.current),o=t.selectedIndex;return t.info.current.isControlled||(o=s.indexOf(r),o===-1&&(o=t.selectedIndex)),{...t,tabs:s,selectedIndex:o}},2(t,a){return{...t,tabs:t.tabs.filter(r=>r!==a.tab)}},3(t,a){return t.panels.includes(a.panel)?t:{...t,panels:J([...t.panels,a.panel],r=>r.current)}},4(t,a){return{...t,panels:t.panels.filter(r=>r!==a.panel)}}},ae=l.createContext(null);ae.displayName="TabsDataContext";function G(t){let a=l.useContext(ae);if(a===null){let r=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,G),r}return a}let re=l.createContext(null);re.displayName="TabsActionsContext";function se(t){let a=l.useContext(re);if(a===null){let r=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,se),r}return a}function Me(t,a){return W(a.type,Fe,t,a)}let Ge="div";function Re(t,a){let{defaultIndex:r=0,vertical:s=!1,manual:o=!1,onChange:i,selectedIndex:n=null,...u}=t;const w=s?"vertical":"horizontal",g=o?"manual":"auto";let h=n!==null,y=X({isControlled:h}),D=Y(a),[b,p]=l.useReducer(Me,{info:y,selectedIndex:n??r,tabs:[],panels:[]}),O=_({selectedIndex:b.selectedIndex}),B=X(i||(()=>{})),L=X(b.tabs),f=l.useMemo(()=>({orientation:w,activation:g,...b}),[w,g,b]),V=z(x=>(p({type:1,tab:x}),()=>p({type:2,tab:x}))),q=z(x=>(p({type:3,panel:x}),()=>p({type:4,panel:x}))),v=z(x=>{T.current!==x&&B.current(x),h||p({type:0,index:x})}),T=X(h?t.selectedIndex:b.selectedIndex),S=l.useMemo(()=>({registerTab:V,registerPanel:q,change:v}),[]);Z(()=>{p({type:0,index:n??r})},[n]),Z(()=>{if(T.current===void 0||b.tabs.length<=0)return;let x=J(b.tabs,A=>A.current);x.some((A,E)=>b.tabs[E]!==A)&&v(x.indexOf(b.tabs[T.current]))});let ee={ref:D},U=K();return M.createElement(Se,null,M.createElement(re.Provider,{value:S},M.createElement(ae.Provider,{value:f},f.tabs.length<=0&&M.createElement(Ae,{onFocus:()=>{var x,A;for(let E of L.current)if(((x=E.current)==null?void 0:x.tabIndex)===0)return(A=E.current)==null||A.focus(),!0;return!1}}),U({ourProps:ee,theirProps:u,slot:O,defaultTag:Ge,name:"Tabs"}))))}let Oe="div";function Be(t,a){let{orientation:r,selectedIndex:s}=G("Tab.List"),o=Y(a),i=_({selectedIndex:s}),n=t,u={ref:o,role:"tablist","aria-orientation":r};return K()({ourProps:u,theirProps:n,slot:i,defaultTag:Oe,name:"Tabs.List"})}let Ve="button";function qe(t,a){var r,s;let o=l.useId(),{id:i=`headlessui-tabs-tab-${o}`,disabled:n=!1,autoFocus:u=!1,...w}=t,{orientation:g,activation:h,selectedIndex:y,tabs:D,panels:b}=G("Tab"),p=se("Tab"),O=G("Tab"),[B,L]=l.useState(null),f=l.useRef(null),V=Y(f,a,L);Z(()=>p.registerTab(f),[p,f]);let q=he("tabs"),v=D.indexOf(f);v===-1&&(v=q);let T=v===y,S=z(d=>{let C=d();if(C===Q.Success&&h==="auto"){let te=ke(f.current),ie=O.tabs.findIndex(Te=>Te.current===te);ie!==-1&&p.change(ie)}return C}),ee=z(d=>{let C=D.map(te=>te.current).filter(Boolean);if(d.key===N.Space||d.key===N.Enter){d.preventDefault(),d.stopPropagation(),p.change(v);return}switch(d.key){case N.Home:case N.PageUp:return d.preventDefault(),d.stopPropagation(),S(()=>F(C,j.First));case N.End:case N.PageDown:return d.preventDefault(),d.stopPropagation(),S(()=>F(C,j.Last))}if(S(()=>W(g,{vertical(){return d.key===N.ArrowUp?F(C,j.Previous|j.WrapAround):d.key===N.ArrowDown?F(C,j.Next|j.WrapAround):Q.Error},horizontal(){return d.key===N.ArrowLeft?F(C,j.Previous|j.WrapAround):d.key===N.ArrowRight?F(C,j.Next|j.WrapAround):Q.Error}}))===Q.Success)return d.preventDefault()}),U=l.useRef(!1),x=z(()=>{var d;U.current||(U.current=!0,(d=f.current)==null||d.focus({preventScroll:!0}),p.change(v),we(()=>{U.current=!1}))}),A=z(d=>{d.preventDefault()}),{isFocusVisible:E,focusProps:pe}=le({autoFocus:u}),{isHovered:xe,hoverProps:be}=je({isDisabled:n}),{pressed:fe,pressProps:ge}=Ne({disabled:n}),ye=_({selected:T,hover:xe,active:fe,focus:E,autofocus:u,disabled:n}),ve=me({ref:V,onKeyDown:ee,onMouseDown:A,onClick:x,id:i,role:"tab",type:Ce(t,B),"aria-controls":(s=(r=b[v])==null?void 0:r.current)==null?void 0:s.id,"aria-selected":T,tabIndex:T?0:-1,disabled:n||void 0,autoFocus:u},pe,be,ge);return K()({ourProps:ve,theirProps:w,slot:ye,defaultTag:Ve,name:"Tabs.Tab"})}let Ue="div";function Je(t,a){let{selectedIndex:r}=G("Tab.Panels"),s=Y(a),o=_({selectedIndex:r}),i=t,n={ref:s};return K()({ourProps:n,theirProps:i,slot:o,defaultTag:Ue,name:"Tabs.Panels"})}let We="div",He=ne.RenderStrategy|ne.Static;function _e(t,a){var r,s,o,i;let n=l.useId(),{id:u=`headlessui-tabs-panel-${n}`,tabIndex:w=0,...g}=t,{selectedIndex:h,tabs:y,panels:D}=G("Tab.Panel"),b=se("Tab.Panel"),p=l.useRef(null),O=Y(p,a);Z(()=>b.registerPanel(p),[b,p]);let B=he("panels"),L=D.indexOf(p);L===-1&&(L=B);let f=L===h,{isFocusVisible:V,focusProps:q}=le(),v=_({selected:f,focus:V}),T=me({ref:O,id:u,role:"tabpanel","aria-labelledby":(s=(r=y[L])==null?void 0:r.current)==null?void 0:s.id,tabIndex:f?w:-1},q),S=K();return!f&&((o=g.unmount)==null||o)&&!((i=g.static)!=null&&i)?M.createElement(ce,{"aria-hidden":"true",...T}):S({ourProps:T,theirProps:g,slot:v,defaultTag:We,features:He,visible:f,name:"Tabs.Panel"})}let Ke=H(qe),P=H(Re),I=H(Be),k=H(Je),m=H(_e),c=Object.assign(Ke,{Group:P,List:I,Panels:k,Panel:m});const oe=[{name:"Recent",posts:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}]},{name:"Popular",posts:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}]},{name:"Trending",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}],Ye=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"w-full",children:e.jsxs(P,{children:[e.jsx(I,{className:"flex gap-3",children:oe.map(({name:t})=>e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:t},t))}),e.jsx(k,{className:"mt-3",children:oe.map(({name:t,posts:a})=>e.jsx(m,{className:"rounded-xl bg-lightgray dark:bg-dark p-3",children:e.jsx("ul",{children:a.map(r=>e.jsxs("li",{className:"relative rounded-md p-3 text-sm transition hover:bg-white/5",children:[e.jsxs("a",{href:"#",className:"font-semibold text-ld ",children:[e.jsx("span",{className:"absolute inset-0"}),r.title]}),e.jsxs("ul",{className:"flex gap-2 text-bodytext","aria-hidden":"true",children:[e.jsx("li",{children:r.date}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[r.commentCount," comments"]}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[r.shareCount," shares"]})]})]},r.id))})},t))})]})})})}),Xe=`import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";\r
const categories = [\r
  {\r
    name: "Recent",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Does drinking coffee make you smarter?",\r
        date: "5h ago",\r
        commentCount: 5,\r
        shareCount: 2,\r
      },\r
      {\r
        id: 2,\r
        title: "So you've bought coffee... now what?",\r
        date: "2h ago",\r
        commentCount: 3,\r
        shareCount: 2,\r
      },\r
    ],\r
  },\r
  {\r
    name: "Popular",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Is tech making coffee better or worse?",\r
        date: "Jan 7",\r
        commentCount: 29,\r
        shareCount: 16,\r
      },\r
      {\r
        id: 2,\r
        title: "The most innovative things happening in coffee",\r
        date: "Mar 19",\r
        commentCount: 24,\r
        shareCount: 12,\r
      },\r
    ],\r
  },\r
  {\r
    name: "Trending",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Ask Me Anything: 10 answers to your questions about coffee",\r
        date: "2d ago",\r
        commentCount: 9,\r
        shareCount: 5,\r
      },\r
      {\r
        id: 2,\r
        title: "The worst advice we've ever heard about coffee",\r
        date: "4d ago",\r
        commentCount: 1,\r
        shareCount: 2,\r
      },\r
    ],\r
  },\r
];\r
\r
const BasicTabsCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="w-full">\r
          <TabGroup>\r
            <TabList className="flex gap-3">\r
              {categories.map(({ name }) => (\r
                <Tab\r
                  key={name}\r
                  className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary"\r
                >\r
                  {name}\r
                </Tab>\r
              ))}\r
            </TabList>\r
            <TabPanels className="mt-3">\r
              {categories.map(({ name, posts }) => (\r
                <TabPanel\r
                  key={name}\r
                  className="rounded-xl bg-lightgray dark:bg-dark p-3"\r
                >\r
                  <ul>\r
                    {posts.map((post) => (\r
                      <li\r
                        key={post.id}\r
                        className="relative rounded-md p-3 text-sm transition hover:bg-white/5"\r
                      >\r
                        <a href="#" className="font-semibold text-ld ">\r
                          <span className="absolute inset-0" />\r
                          {post.title}\r
                        </a>\r
                        <ul\r
                          className="flex gap-2 text-bodytext"\r
                          aria-hidden="true"\r
                        >\r
                          <li>{post.date}</li>\r
                          <li aria-hidden="true">&middot;</li>\r
                          <li>{post.commentCount} comments</li>\r
                          <li aria-hidden="true">&middot;</li>\r
                          <li>{post.shareCount} shares</li>\r
                        </ul>\r
                      </li>\r
                    ))}\r
                  </ul>\r
                </TabPanel>\r
              ))}\r
            </TabPanels>\r
          </TabGroup>\r
        </div>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default BasicTabsCode;\r
`,Qe=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Basic Tabs"}),e.jsx(Ye,{})]}),e.jsx(R,{children:Xe})]})})}),Ze=()=>{const[t,a]=l.useState(0);return e.jsx("div",{children:e.jsxs($,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Controlling Selected Tab"})}),e.jsxs(P,{selectedIndex:t,onChange:a,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})})},et=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(P,{children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{disabled:!0,className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary disabled:opacity-50",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})})}),tt=`import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";\r
\r
\r
const DisableTabCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <TabGroup>\r
          <TabList  className="flex gap-3">\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">Tab 1</Tab>\r
            <Tab disabled className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary disabled:opacity-50">\r
              Tab 2\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">Tab 3</Tab>\r
          </TabList>\r
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">\r
            <TabPanel className="text-bodytext">One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>\r
            <TabPanel className="text-bodytext">Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>\r
            <TabPanel className="text-bodytext">Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</TabPanel>\r
          </TabPanels>\r
        </TabGroup>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default DisableTabCode\r
`,at=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Disable Tab"}),e.jsx(et,{})]}),e.jsx(R,{children:tt})]})})}),rt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(P,{onChange:t=>{console.log("Changed selected tab to:",t)},children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})})}),st=`import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";\r
\r
\r
const ListingTabChangeCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <TabGroup\r
          onChange={(index) => {\r
            console.log("Changed selected tab to:", index);\r
          }}\r
        >\r
          <TabList className="flex gap-3">\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 1\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ">\r
              Tab 2\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 3\r
            </Tab>\r
          </TabList>\r
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">\r
            <TabPanel className="text-bodytext">\r
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
          </TabPanels>\r
        </TabGroup>\r
    </div>\r
    </>\r
  );\r
};\r
\r
export default ListingTabChangeCode;\r
`,it=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Listening For Changes Tab"}),e.jsx(rt,{})]}),e.jsx(R,{children:st})]})})}),nt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(P,{manual:!0,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})})}),ot=`import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";\r
\r
\r
const ManuallActiveTabCodes = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
       <TabGroup manual>\r
          <TabList className="flex gap-3">\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 1\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ">\r
              Tab 2\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 3\r
            </Tab>\r
          </TabList>\r
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">\r
            <TabPanel className="text-bodytext">\r
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
          </TabPanels>\r
        </TabGroup>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default ManuallActiveTabCodes\r
`,dt=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Manually Active Tab"}),e.jsx(nt,{})]}),e.jsx(R,{children:ot})]})})}),lt=()=>e.jsx("div",{children:e.jsxs($,{children:[e.jsx("div",{className:"flex items-center justify-between mb-2",children:e.jsx("h4",{className:"text-lg font-semibold",children:"Rendering As Different Elements"})}),e.jsxs(P,{manual:!0,children:[e.jsxs(I,{className:"flex gap-3",as:"aside",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",as:"section",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})]})}),mt=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsxs(P,{defaultIndex:1,children:[e.jsxs(I,{className:"flex gap-3",children:[e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 1"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ",children:"Tab 2"}),e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:"Tab 3"})]}),e.jsxs(k,{className:"rounded-xl bg-lightgray dark:bg-dark p-3 mt-3",children:[e.jsx(m,{className:"text-bodytext",children:"One Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."}),e.jsx(m,{className:"text-bodytext",children:"Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document."})]})]})})}),ct=`import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";\r
\r
\r
const SpecifiedDefaultCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <TabGroup defaultIndex={1}>\r
          <TabList className="flex gap-3">\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 1\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary ">\r
              Tab 2\r
            </Tab>\r
            <Tab className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary">\r
              Tab 3\r
            </Tab>\r
          </TabList>\r
          <TabPanels className="rounded-xl bg-lightgray dark:bg-dark p-3 mt-3">\r
            <TabPanel className="text-bodytext">\r
              One Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Two Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
            <TabPanel className="text-bodytext">\r
              Three Lorem ipsum dolor sit amet, consectetur adipisici elit…’\r
              (complete text) is dummy text that is not meant to mean anything.\r
              It is used as a placeholder in magazine layouts, for example, in\r
              order to give an impression of the finished document.\r
            </TabPanel>\r
          </TabPanels>\r
        </TabGroup>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default SpecifiedDefaultCode\r
`,ut=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Specifying The Default Tab"}),e.jsx(mt,{})]}),e.jsx(R,{children:ct})]})})}),de=[{name:"Recent",posts:[{id:1,title:"Does drinking coffee make you smarter?",date:"5h ago",commentCount:5,shareCount:2},{id:2,title:"So you've bought coffee... now what?",date:"2h ago",commentCount:3,shareCount:2}]},{name:"Popular",posts:[{id:1,title:"Is tech making coffee better or worse?",date:"Jan 7",commentCount:29,shareCount:16},{id:2,title:"The most innovative things happening in coffee",date:"Mar 19",commentCount:24,shareCount:12}]},{name:"Trending",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]},{name:"Extreme",posts:[{id:1,title:"Ask Me Anything: 10 answers to your questions about coffee",date:"2d ago",commentCount:9,shareCount:5},{id:2,title:"The worst advice we've ever heard about coffee",date:"4d ago",commentCount:1,shareCount:2}]}],ht=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"w-full pb-5",children:e.jsxs(P,{vertical:!0,className:"flex gap-3 ",children:[e.jsx(I,{className:"flex flex-col gap-3",children:de.map(({name:t})=>e.jsx(c,{className:"rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary",children:t},t))}),e.jsx(k,{className:"w-full",children:de.map(({name:t,posts:a})=>e.jsx(m,{className:"rounded-xl bg-lightgray dark:bg-dark p-3",children:e.jsx("ul",{children:a.map(r=>e.jsxs("li",{className:"relative rounded-md p-3 text-sm transition hover:bg-white/5",children:[e.jsxs("a",{href:"#",className:"font-semibold text-ld ",children:[e.jsx("span",{className:"absolute inset-0"}),r.title]}),e.jsxs("ul",{className:"flex gap-2 text-bodytext","aria-hidden":"true",children:[e.jsx("li",{children:r.date}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[r.commentCount," comments"]}),e.jsx("li",{"aria-hidden":"true",children:"·"}),e.jsxs("li",{children:[r.shareCount," shares"]})]})]},r.id))})},t))})]})})})}),pt=`import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";\r
const categories = [\r
  {\r
    name: "Recent",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Does drinking coffee make you smarter?",\r
        date: "5h ago",\r
        commentCount: 5,\r
        shareCount: 2,\r
      },\r
      {\r
        id: 2,\r
        title: "So you've bought coffee... now what?",\r
        date: "2h ago",\r
        commentCount: 3,\r
        shareCount: 2,\r
      },\r
    ],\r
  },\r
  {\r
    name: "Popular",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Is tech making coffee better or worse?",\r
        date: "Jan 7",\r
        commentCount: 29,\r
        shareCount: 16,\r
      },\r
      {\r
        id: 2,\r
        title: "The most innovative things happening in coffee",\r
        date: "Mar 19",\r
        commentCount: 24,\r
        shareCount: 12,\r
      },\r
    ],\r
  },\r
  {\r
    name: "Trending",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Ask Me Anything: 10 answers to your questions about coffee",\r
        date: "2d ago",\r
        commentCount: 9,\r
        shareCount: 5,\r
      },\r
      {\r
        id: 2,\r
        title: "The worst advice we've ever heard about coffee",\r
        date: "4d ago",\r
        commentCount: 1,\r
        shareCount: 2,\r
      },\r
    ],\r
  },\r
  {\r
    name: "Extreme",\r
    posts: [\r
      {\r
        id: 1,\r
        title: "Ask Me Anything: 10 answers to your questions about coffee",\r
        date: "2d ago",\r
        commentCount: 9,\r
        shareCount: 5,\r
      },\r
      {\r
        id: 2,\r
        title: "The worst advice we've ever heard about coffee",\r
        date: "4d ago",\r
        commentCount: 1,\r
        shareCount: 2,\r
      },\r
    ],\r
  },\r
];\r
\r
const VerticalTabsCode = () => {\r
  return (\r
    <>\r
    <div className="mt-4">\r
      <div className="w-full pb-5">\r
          <TabGroup vertical className="flex gap-3 ">\r
            <TabList className="flex flex-col gap-3">\r
              {categories.map(({ name }) => (\r
                <Tab\r
                  key={name}\r
                  className="rounded-md py-2 px-4 text-sm font-semibold text-ld focus:outline-hidden data-selected:bg-primary data-hover:text-white data-selected:text-white data-hover:bg-primary data-selected:data-hover:bg-primary data-focus:outline-1 data-focus:outline-primary"\r
                >\r
                  {name}\r
                </Tab>\r
              ))}\r
            </TabList>\r
            <TabPanels className="w-full">\r
              {categories.map(({ name, posts }) => (\r
                <TabPanel\r
                  key={name}\r
                  className="rounded-xl bg-lightgray dark:bg-dark p-3"\r
                >\r
                  <ul>\r
                    {posts.map((post) => (\r
                      <li\r
                        key={post.id}\r
                        className="relative rounded-md p-3 text-sm transition hover:bg-white/5"\r
                      >\r
                        <a href="#" className="font-semibold text-ld ">\r
                          <span className="absolute inset-0" />\r
                          {post.title}\r
                        </a>\r
                        <ul\r
                          className="flex gap-2 text-bodytext"\r
                          aria-hidden="true"\r
                        >\r
                          <li>{post.date}</li>\r
                          <li aria-hidden="true">&middot;</li>\r
                          <li>{post.commentCount} comments</li>\r
                          <li aria-hidden="true">&middot;</li>\r
                          <li>{post.shareCount} shares</li>\r
                        </ul>\r
                      </li>\r
                    ))}\r
                  </ul>\r
                </TabPanel>\r
              ))}\r
            </TabPanels>\r
          </TabGroup>\r
        </div>\r
    </div>\r
    </>\r
  )\r
}\r
\r
export default VerticalTabsCode\r
`,xt=()=>e.jsx("div",{children:e.jsx($,{className:"p-0",children:e.jsxs("div",{children:[e.jsxs("div",{className:"p-6",children:[e.jsx("h4",{className:"text-lg font-semibold",children:"Vertical Tabs"}),e.jsx(ht,{})]}),e.jsx(R,{children:pt})]})})}),bt=[{to:"/",title:"Home"},{title:"Tabs"}],Ut=()=>e.jsxs(e.Fragment,{children:[e.jsx(Le,{title:"Tabs",items:bt}),e.jsxs("div",{className:"grid grid-cols-12 gap-5 sm:gap-6",children:[e.jsx("div",{className:"col-span-12",children:e.jsx(Qe,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(xt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(at,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(dt,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(ut,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(it,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(Ze,{})}),e.jsx("div",{className:"col-span-12",children:e.jsx(lt,{})})]})]});export{Ut as default};
