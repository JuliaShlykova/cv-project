(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(4),l=a.n(i),r=a(5),s=a(6),d=a(2),o=a(8),j=a(7),u=(a(13),a.p+"static/media/photo.5dbe74d4.svg"),h=a(0);var p=function(e){var t=e.item,a=t.id,n=t.type,c=(t.value,a.replace(/-/g," ").replace(/(^|\s)\S/g,(function(e){return e.toUpperCase()})));return Object(h.jsxs)("label",{htmlFor:a,children:[c,":",Object(h.jsx)("input",{type:n,id:a,onChange:function(t){var n=t.target.value;e.handleChange(a,n)}})]})},x={generalInfo:[{id:"first-name",type:"text",value:""},{id:"last-name",type:"text",value:""},{id:"email",type:"email",value:""},{id:"phone-number",type:"tel",value:""}],educationalExp:[{id:"school-name",type:"text",value:""},{id:"title-of-study",type:"text",value:""},{id:"start-date",type:"month",value:""},{id:"end-date",type:"month",value:""}],practicalExp:[{id:"company-name",type:"text",value:""},{id:"position-title",type:"text",value:""},{id:"main-tasks-of-the-job",type:"textarea",value:""},{id:"start-date",type:"month",value:""},{id:"end-date",type:"month",value:""}]};var b=function(e){var t=e.props,a=t.generalInfo,n=t.educationalExp,c=t.practicalExp;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"present-gen-info",children:[Object(h.jsxs)("h1",{children:[a[1].value," ",a[0].value]}),Object(h.jsxs)("div",{className:"contact-info",children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:a[2].value}),Object(h.jsx)("li",{children:a[3].value})]}),Object(h.jsx)("img",{src:u,alt:"person"})]})]}),Object(h.jsxs)("div",{className:"present-educ-info",children:[Object(h.jsx)("h2",{children:"Education"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:n[0].value}),Object(h.jsx)("li",{children:n[1].value}),Object(h.jsxs)("li",{children:[n[2].value," : ",n[3].value]})]})]}),Object(h.jsxs)("div",{className:"present-work-info",children:[Object(h.jsx)("h2",{children:"Work experience"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:c[0].value}),Object(h.jsx)("li",{children:c[1].value}),Object(h.jsx)("li",{children:c[2].value}),Object(h.jsxs)("li",{children:[c[3].value," : ",c[4].value]})]})]})]})},v=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={data:x},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e}return Object(s.a)(a,[{key:"handleChange",value:function(e,t){this.setState((function(a){var n={data:{}};for(var c in a.data)n.data[c]=a.data[c].map((function(a){return a.id===e&&(a.value=t),a}));return n}))}},{key:"resetState",value:function(){document.querySelectorAll("input").forEach((function(e){e.value=""})),this.setState((function(e){var t={data:{}};for(var a in e.data)t.data[a]=e.data[a].map((function(e){return e.value="",e}));return t})),console.log(this.state.data.generalInfo)}},{key:"render",value:function(){var e=this,t=this.state.data.generalInfo.map((function(t){return Object(h.jsx)(p,{item:t,handleChange:e.handleChange},t.id)})),a=this.state.data.educationalExp.map((function(t){return Object(h.jsx)(p,{item:t,handleChange:e.handleChange},t.id)})),n=this.state.data.practicalExp.map((function(t){return Object(h.jsx)(p,{item:t,handleChange:e.handleChange},t.id)}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"cv-builder",children:[Object(h.jsx)("h1",{children:"CV builder"}),Object(h.jsxs)("section",{id:"general-info",children:[Object(h.jsx)("h2",{children:"General Information"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:u,alt:"person"}),Object(h.jsx)("form",{autoComplete:"off",children:t})]})]}),Object(h.jsxs)("section",{id:"education",children:[Object(h.jsx)("h2",{children:"Educational Experience"}),Object(h.jsx)("form",{autoComplete:"off",children:a})]}),Object(h.jsxs)("section",{id:"work",children:[Object(h.jsx)("h2",{children:"Work Experience"}),Object(h.jsx)("form",{autoComplete:"off",children:n})]}),Object(h.jsx)("button",{onClick:function(){console.log(e.state),e.resetState()},children:"Reset"})]}),Object(h.jsx)("div",{className:"present-cv",children:Object(h.jsx)(b,{props:this.state.data})})]})}}]),a}(n.Component);a(15);l.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.064902e6.chunk.js.map