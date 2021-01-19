(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(11),i=n.n(o),s=n(13),l=n(5),u=n(6),b=n(8),m=n(7),d=n(21),p=n(12),h=n(2),j=n.n(h),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChangeInput=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.reset()},t}return Object(u.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:j.a.wrapper,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:j.a.field,children:[Object(a.jsx)("span",{className:j.a.label,children:"Name"}),Object(a.jsx)("input",{className:j.a.input,type:"text",name:"name",value:e,placeholder:"Enter name",onChange:this.handleChangeInput,required:!0})]}),Object(a.jsxs)("label",{className:j.a.field,children:[Object(a.jsx)("span",{className:j.a.label,children:"Number"}),Object(a.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:n,placeholder:"Enter number",onChange:this.handleChangeInput,required:!0})]}),Object(a.jsx)("button",{className:j.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),_=n(4),O=n.n(_);var v=function(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsx)("div",{className:O.a.wrapper,children:Object(a.jsxs)("label",{className:O.a.field,children:[Object(a.jsx)("span",{className:O.a.label,children:"Find contacts by name"}),Object(a.jsx)("input",{className:O.a.input,type:"text",name:"filter",value:e,placeholder:"Enter to find",onChange:n})]})})},x=n(3),C=n.n(x);var g=function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(a.jsxs)("li",{className:C.a.contactItem,children:[Object(a.jsxs)("span",{children:[e,": ",n]}),Object(a.jsx)("button",{className:C.a.button,type:"button",onClick:c,children:"Delete"})]})};var N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{className:C.a.wrapper,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)(g,{name:c,number:r,onDelete:function(){return n(e)}},e)}))})},y=n(9),w=n.n(y),F=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleAddContact=function(e,n){var a=t.state.contacts,c={id:Object(d.a)(),name:e,number:n};if(a.some((function(t){return t.name===e})))return alert("".concat(e," is already in contacts"));t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[c])}}))},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.setState({filter:""})},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"getFilteredContacts",value:function(){var t=this.state,e=t.filter;return t.contacts.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=this.getFilteredContacts();return Object(a.jsxs)("div",{className:w.a.container,children:[Object(a.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(a.jsx)(f,{onAddContact:this.handleAddContact}),Object(a.jsx)("h2",{className:w.a.title,children:"Contacts"}),n.length>1&&Object(a.jsx)(v,{value:e,onChangeFilter:this.handleFilterChange}),Object(a.jsx)(N,{contacts:c,onDeleteContact:this.handleDeleteContact})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={wrapper:"ContactForm_wrapper__2KUni",field:"ContactForm_field__3pXqi",label:"ContactForm_label__3_kxq",input:"ContactForm_input__3lt2x",button:"ContactForm_button__KEpl2"}},3:function(t,e,n){t.exports={wrapper:"Contact_wrapper__1pu7J",contactItem:"Contact_contactItem__2qisQ",button:"Contact_button__2L7x0"}},4:function(t,e,n){t.exports={wrapper:"Filter_wrapper__1EHII",field:"Filter_field__qXAoK",label:"Filter_label__391fN",input:"Filter_input__1xJOt"}},9:function(t,e,n){t.exports={container:"App_container__2Pjuj",title:"App_title__1_bgL"}}},[[19,1,2]]]);
//# sourceMappingURL=main.f2ceecf5.chunk.js.map