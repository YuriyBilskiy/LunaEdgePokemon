import{j as c}from"./jsx-runtime-D_zvdyIk.js";const _=({errors:n,register:w,value:A,isDisabled:d,autoFocus:N,hover:$})=>c.jsxs("div",{children:[c.jsx("input",{autoFocus:N,className:`border 
        ${n?"border-red-500":"border-gray-400"} 
        ${$?"hover:border-yellow-400":""}
        outline-none w-full p-2 rounded-md mb-2  
        ${d?"bg-gray-100":"bg-transparent"} focus:border-yellow-400`,placeholder:"Write your name",type:"text",value:A,disabled:d,...w}),n&&c.jsx("p",{className:"text-red-500",children:n})]});_.__docgenInfo={description:"",methods:[],displayName:"Input"};const L={title:"App/Input",component:_,tags:["autodocs"]},e={args:{isDisabled:!1}},s={args:{isDisabled:!1,hover:!0}},r={args:{autoFocus:!0,isDisabled:!1}},a={args:{isDisabled:!1,value:"Luna Edge"}},o={args:{isDisabled:!1,value:"",errors:"At least 2 characters"}},t={args:{...e.args,isDisabled:!0}};var l,i,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    isDisabled: false
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,m,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    hover: true
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,f,D;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    autoFocus: true,
    isDisabled: false
  }
}`,...(D=(f=r.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var v,h,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    value: "Luna Edge"
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,E,F;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: false,
    value: "",
    errors: "At least 2 characters"
  }
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var S,j,I;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...(I=(j=t.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const V=["Default","Hover","Focus","Filled","ValidationError","Disabled"];export{e as Default,t as Disabled,a as Filled,r as Focus,s as Hover,o as ValidationError,V as __namedExportsOrder,L as default};
