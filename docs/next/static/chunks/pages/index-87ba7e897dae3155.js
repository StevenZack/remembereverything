(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(441)}])},441:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return g}});var t=n(5893),i=n(7294),a=n(5607),s=n(478),l=n(3680),o=n(3720),c=n(682),d=n(767),h=n(1676);function g(){var e=[];if("object"==typeof localStorage){var r=localStorage.getItem("data");if(r)try{e=JSON.parse(r)}catch(e){}}let[n,g]=(0,i.useState)(e),u=function(){"object"==typeof localStorage&&localStorage.setItem("data",JSON.stringify(n))},[x,j]=(0,i.useState)(-1),[m,Z]=(0,i.useState)(!1),[f,y]=(0,i.useState)(""),[p,v]=(0,i.useState)(""),C=function(e){g(n.filter((r,n)=>n!=e)),u()},E=function(e){j(e),console.log(x);let r=n[e];y(r.trigger),v(r.reaction),Z(!0)},N=n.map((e,r)=>(0,t.jsxs)(a.Z.Item,{eventKey:r.toString(),children:[(0,t.jsx)(a.Z.Header,{children:(0,t.jsxs)(s.Z,{direction:"horizontal",style:{width:"100%"},children:[(0,t.jsxs)("small",{style:{color:"grey",marginRight:16},children:[r+1,"."]}),(0,t.jsx)("b",{children:e.trigger}),(0,t.jsx)("div",{className:"ms-auto"}),(0,t.jsx)(l.Z,{size:"sm",variant:"secondary",onClick:()=>E(r),children:"Edit"}),(0,t.jsx)(l.Z,{size:"sm",variant:"danger",onClick:()=>C(r),children:"Delete"})]})}),(0,t.jsx)(a.Z.Body,{children:(0,t.jsx)("pre",{children:e.reaction})})]}));return(0,t.jsxs)("div",{children:[(0,t.jsxs)(o.Z,{bg:"dark",variant:"dark",expand:"lg",children:[(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(o.Z.Brand,{href:"#home",children:"Remember Everything"}),(0,t.jsx)(l.Z,{onClick:()=>Z(!0),children:"Add"})]}),(0,t.jsxs)(d.Z,{show:m,onHide:()=>Z(!1),children:[(0,t.jsx)(d.Z.Header,{closeButton:!0,children:(0,t.jsx)(d.Z.Title,{children:"ADD NEW CONNECTION"})}),(0,t.jsxs)(d.Z.Body,{children:[(0,t.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,t.jsx)(h.Z.Label,{children:"Trigger:"}),(0,t.jsx)(h.Z.Control,{type:"text",placeholder:"Enter a memory trigger",value:f,onChange:e=>y(e.target.value)})]}),(0,t.jsxs)(h.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:[(0,t.jsx)(h.Z.Label,{children:"Reaction:"}),(0,t.jsx)(h.Z.Control,{as:"textarea",placeholder:"Enter a memory reaction",value:p,style:{height:"200px"},onChange:e=>v(e.target.value)})]})]}),(0,t.jsxs)(d.Z.Footer,{children:[(0,t.jsx)(l.Z,{variant:"secondary",onClick:()=>Z(!1),children:"Close"}),(0,t.jsx)(l.Z,{variant:"primary",onClick:function(){x>-1?(n[x]={trigger:f,reaction:p},j(-1)):n.push({trigger:f,reaction:p}),g([...n]),Z(!1),y(""),v(""),u()},children:"Save Changes"})]})]})]}),n.length>0?(0,t.jsx)(a.Z,{children:N}):(0,t.jsx)("center",{style:{marginTop:80},children:(0,t.jsx)("span",{style:{color:"grey"},children:"Empty Here"})})]})}}},function(e){e.O(0,[291,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);