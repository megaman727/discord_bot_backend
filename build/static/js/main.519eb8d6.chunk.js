(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(14),s=c.n(n),i=c(38),o=c(8),l=c(6),d=c(1);function u(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-trueGray-900 opacity-75 flex flex-col items-center justify-center",children:[Object(d.jsx)("div",{className:"loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"}),Object(d.jsx)("h2",{className:"text-center text-white text-xl font-semibold",children:"Loading..."})]})})}var b=c(22),j=c.n(b),h="https://discord-bot-backend-app.herokuapp.com",x="Vexer";function m(){return j.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",j.a.get("".concat(h,"/api/auth"),{withCredentials:!0,credentials:"include"})}function p(e){var t=e.logo,c=e.userName,a=e.acces,r=Object(o.f)();return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:Object(d.jsx)("nav",{id:"header",className:"fixed w-full z-30 top-0 text-white",children:Object(d.jsxs)("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2",children:[Object(d.jsx)("div",{className:"pl-4 flex items-center",children:Object(d.jsx)("a",{className:"toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl",href:"/",children:x})}),Object(d.jsx)("div",{className:"mr-7 mt-3",children:"unauthorized"===a?Object(d.jsx)("button",{className:"flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 rounded-3xl",onClick:function(){return window.location.href="".concat(h,"/api/auth/discord/")},children:Object(d.jsx)("span",{className:"mx-1",children:"Login"})}):Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("img",{src:t,alt:"logo",className:"rounded-full w-11 border-gray-400 border-2 mr-5 cursor-pointer",onClick:function(){return r.push("/account")}}),Object(d.jsx)("p",{className:"mt-2 cursor-pointer",onClick:function(){return r.push("/account")},children:c})]})})]})})})})}var O=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(!0),s=Object(l.a)(n,2),i=s[0],o=s[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),h=j[0],O=j[1],f=Object(a.useState)(""),g=Object(l.a)(f,2),v=g[0],y=g[1];return Object(a.useEffect)((function(){m().then((function(e){r(e.data.msg),"authorized"===c&&(O(e.data.user.discordTag),y("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128"))),setTimeout((function(){o(!1)}),2e3)}))}),[c]),Object(d.jsx)(d.Fragment,{children:!0===i?Object(d.jsx)(u,{}):Object(d.jsx)("div",{className:"leading-normal tracking-normal text-white h-full bg-trueGray-900",style:{width:"100%",minHeight:"100vh"},children:Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{logo:v,userName:h,acces:c}),Object(d.jsx)("div",{className:"pt-72",children:Object(d.jsx)("div",{className:"container mx-auto flex flex-wrap flex-col md:flex-row",children:Object(d.jsxs)("div",{className:"flex flex-col w-full  items-center text-center md:text-left",children:[Object(d.jsxs)("h1",{className:"w-full my-5 text-5xl font-bold leading-tight text-center text-white",children:[x," | Discord Bot"]}),Object(d.jsxs)("p",{className:"leading-normal text-2xl mb-8",children:[x," is the best customizable bot for discord with a dashboard."]}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(d.jsx)("span",{className:"mx-1",children:"Invite Bot"})}),Object(d.jsx)("div",{className:"ml-5"}),Object(d.jsx)("button",{className:"flex items-center px-7 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-800 focus:outline-none focus:bg-indigo-800",children:Object(d.jsx)("span",{className:"mx-1",children:"Support Server"})})]})]})})})]})})})},f=c(63),g=c(65),v=c(45);c(100);function y(){var e=Object(g.a)(),t=e.register,c=e.handleSubmit,r=e.formState.errors,n=Object(o.g)().id,s=Object(a.useState)(!0),i=Object(l.a)(s,2),b=i[0],x=i[1],O=Object(a.useState)(""),y=Object(l.a)(O,2),w=y[0],N=y[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),C=k[0],z=k[1],F=Object(a.useState)(""),T=Object(l.a)(F,2),P=T[0],A=T[1],B=Object(a.useState)(""),H=Object(l.a)(B,2),q=H[0],E=H[1],R=Object(a.useState)(0),I=Object(l.a)(R,2),L=I[0],D=I[1],G=Object(a.useState)(0),M=Object(l.a)(G,2),_=M[0],J=M[1],$=Object(a.useState)(""),U=Object(l.a)($,2),V=U[0],W=U[1],Y=Object(a.useState)(0),K=Object(l.a)(Y,2),Q=K[0],X=K[1],Z=[];Object(a.useEffect)((function(){m().then((function(e){E(e.data.msg),"authorized"===q&&(z(e.data.user.discordTag),A("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[q]),Object(a.useEffect)((function(){setTimeout((function(){j.a.get("".concat(h,"/api/discord/guilds"),{withCredentials:!0}).then((function(e){e.data.comservs.map((function(e){return Z.push(e.id)})),Z.includes(n)||(window.location.href="".concat("https://discord-bot-backend-app.herokuapp.com","/account"))})),j.a.get("".concat(h,"/discord/prefixs?id=").concat(n)).then((function(e){N(e.data.prefix)}),(function(e){console.log(e)})),j.a.get("".concat(h,"/api/discord/getguildinfo?id=").concat(n)).then((function(e){D(e.data.members),J(e.data.channels),W(e.data.region),X(e.data.roles)}))}),1e3),setTimeout((function(){return x(!1)}),2500)}),[]);var ee=Object(a.useState)(0),te=Object(l.a)(ee,2),ce=te[0],ae=te[1];return Object(d.jsx)("div",{children:!0===b?Object(d.jsx)(u,{}):Object(d.jsxs)("div",{className:"leading-normal tracking-normal text-white h-full bg-gray-900",style:{width:"100%",minHeight:"100vh"},children:[Object(d.jsx)(p,{logo:P,userName:C,acces:q}),Object(d.jsx)(v.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(d.jsx)("div",{className:"pt-36",children:Object(d.jsxs)("section",{className:"max-w-3xl p-6 mx-auto bg-gray-800 rounded-md shadow-md text-center",children:[Object(d.jsx)("h2",{className:"text-lg font-semibold text-white capitalize",children:"Server settings"}),Object(d.jsx)("div",{className:"flex justify-center items-center h-64 mx-auto",children:Object(d.jsx)("ul",{className:"flex mb-52",children:["informations","Settings"].map((function(e,t){return Object(d.jsx)("li",{className:ce===t?"cursor-pointer py-2 px-4 text-gray-500 border-b-2":"cursor-pointer py-2 px-4 text-gray-500",onClick:function(){return ae(t)},children:e},t)}))})}),Object(d.jsx)("div",{className:"text-center mx-auto relative bottom-40",children:Object(d.jsxs)("div",{className:" text-gray-500 font-thin",children:[Object(d.jsxs)("div",{className:0===ce?"block":"hidden",children:[Object(d.jsxs)("p",{children:["Members: ",Object(d.jsx)("span",{className:"text-white",children:L})]}),Object(d.jsxs)("p",{children:["Total Channels:"," ",Object(d.jsx)("span",{className:"text-white",children:_})]}),Object(d.jsxs)("p",{children:["Roles: ",Object(d.jsx)("span",{className:"text-white",children:Q})]}),Object(d.jsxs)("p",{children:["Region: ",Object(d.jsx)("span",{className:"text-white",children:V})]})]}),Object(d.jsx)("div",{className:1===ce?"block":"hidden",children:Object(d.jsxs)("form",{onSubmit:c((function(e){j.a.post("".concat(h,"/api/discord/prefixs"),{id:n,prefix:e.prefix}).then((function(e){v.b.success("The settings have been changed.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){v.b.error("An error occurred.",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))})),children:[Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{className:"text-gray-200",htmlFor:"prefix",children:"Prefix"}),Object(d.jsx)("input",Object(f.a)({className:"block w-full px-4 py-2 mt-2 border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-500 focus:ring"},t("prefix",{required:!0,maxLength:5,minLength:1,pattern:/\S+/,value:w}))),Object(d.jsxs)("div",{className:"flex",children:[r.prefix&&"required"===r.prefix.type&&Object(d.jsx)("span",{className:"",children:"This is required"}),r.prefix&&"maxLength"===r.prefix.type&&Object(d.jsx)("span",{children:"Max length exceeded"}),r.prefix&&"pattern"===r.prefix.type&&Object(d.jsx)("span",{children:"Without white space"})]})]}),Object(d.jsx)("div",{})]}),Object(d.jsx)("div",{className:"flex justify-center mt-6",children:Object(d.jsx)("button",{className:"px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600",children:"Save"})})]})})]})})]})})]})})}function w(e){var t=e.guilds,c=e.text;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"flex justify-between hover:bg-gray-600 md:w-128 sm:w-128 p-1",children:[Object(d.jsxs)("div",{className:"flex mt-4",children:[null!==e.icon?Object(d.jsx)("img",{src:"https://cdn.discordapp.com/icons/".concat(e.id,"/").concat(e.icon,".png"),alt:"server-logo",className:"rounded-3xl w-10 mr-2 mb-3"}):Object(d.jsx)("div",{className:"mr-2 mb-3",children:Object(d.jsx)("div",{className:"rounded-3xl w-10 bg-gray-500 pb-2 border-white border-2",children:Object(d.jsx)("p",{className:"text-center pt-1",children:e.name.toUpperCase().charAt(0)})})}),Object(d.jsx)("li",{className:"cursor-pointer mx-auto mt-3 text-xs",children:e.name})]}),Object(d.jsx)("div",{className:"mt-4",children:Object(d.jsx)("button",{className:"px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700 ",onClick:function(){return window.location.href="Manage"===c?"http://localhost:3000/server/".concat(e.id):"http://discord.com/oauth2/authorize?client_id=905608828970729482&scope=bot%20applications.commands&guild_id=".concat(e.id,"&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:1337%2Fapi%2Fauth%2Fdiscord%2Fredirect")},children:c})})]},t)}))})})}c(101);function N(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),s=Object(l.a)(n,2),i=s[0],b=s[1],x=Object(a.useState)(!0),O=Object(l.a)(x,2),f=O[0],g=O[1],v=Object(a.useState)(""),y=Object(l.a)(v,2),N=y[0],S=y[1],k=Object(a.useState)(""),C=Object(l.a)(k,2),z=C[0],F=C[1],T=Object(a.useState)(""),P=Object(l.a)(T,2),A=P[0],B=P[1];Object(o.f)();return Object(a.useEffect)((function(){m().then((function(e){B(e.data.msg),"authorized"===A&&(S(e.data.user.discordTag),F("https://cdn.discordapp.com/avatars/".concat(e.data.user.discordId,"/").concat(e.data.user.avatar,".png?size=128")))}))}),[A]),Object(a.useEffect)((function(){"authorized"!=A&&(j.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",j.a.get("".concat(h,"/api/discord/guilds"),{withCredentials:!0,credentials:"include"})).then((function(e){if("unauthorized"===e.data.msg)return window.location.href="".concat(h,"/api/auth/discord/");r(e.data.permincom),b(e.data.comservs),setTimeout((function(){g(!1)}),2e3)}))}),[]),Object(d.jsx)(d.Fragment,{children:!0===f?Object(d.jsx)(u,{}):Object(d.jsxs)("div",{className:"leading-normal tracking-normal text-white h-full bg-gray-900",style:{width:"100%",minHeight:"100vh"},children:[Object(d.jsx)(p,{logo:z,userName:N,acces:A}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text-center pt-24",children:"Please select a server"}),Object(d.jsx)("div",{className:"pt-12",children:Object(d.jsx)("div",{className:"flex flex-col w-full justify-between items-center md:text-left pl-5",children:Object(d.jsxs)("ul",{className:"",children:[Object(d.jsx)(w,{guilds:i,text:"Manage"}),Object(d.jsx)(w,{guilds:c,text:"Invite"})]})})})]})]})})}var S=c(28),k=c(29),C=c(49),z=c(48),F=c(5),T=c(141),P=c(142),A=c(139),B=c(143),H=c(136),q=c(138),E=c(146),R=c(140),I=c(145),L=c(144),D=0;function G(e,t,c,a){return{id:D+=1,name:e,color:c,price:t,summary:a}}function M(e,t,c){return t[c]<e[c]?-1:t[c]>e[c]?1:0}function _(e,t){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,c){var a=t(e[0],c[0]);return 0!==a?a:e[1]-c[1]})),c.map((function(e){return e[0]}))}function J(e,t){return"desc"===e?function(e,c){return M(e,c,t)}:function(e,c){return-M(e,c,t)}}var $=[{id:"name",numeric:!1,disablePadding:!0,label:"Name"},{id:"price",numeric:!0,disablePadding:!1,label:"Price ($)"},{id:"colors",string:!0,disablePadding:!1,label:"Colors"},{id:"summary",string:!0,disablePadding:!1,label:"Summary"}],U=function(e){Object(C.a)(c,e);var t=Object(z.a)(c);function c(){var e;Object(S.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).createSortHandler=function(t){return function(c){e.props.onRequestSort(c,t)}},e}return Object(k.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.onSelectAllClick,a=t.order,r=t.orderBy,n=t.numSelected,s=t.rowCount,i=t.showstate;return Object(d.jsx)(H.a,{children:Object(d.jsxs)(q.a,{style:{display:i},children:[Object(d.jsx)(A.a,{padding:"checkbox",children:Object(d.jsx)(I.a,{indeterminate:n>0&&n<s,checked:n===s,onChange:c})}),$.map((function(t){return Object(d.jsx)(A.a,{align:"center",sortDirection:r===t.id&&a,children:Object(d.jsx)(L.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(d.jsx)(E.a,{active:r===t.id,direction:a,onClick:e.createSortHandler(t.id),children:t.label})})},t.id)}),this)]})})}}]),c}(r.a.Component),V=function(e){Object(C.a)(c,e);var t=Object(z.a)(c);function c(){var e;Object(S.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={order:"asc",orderBy:"calories",selected:[],data:[G("Cupcake",305,"red",67),G("Donut",452,"yellow",51),G("Eclair",262,"brown",24),G("Frozen yoghurt",262,"blue",24),G("Gingerbread",356,"green",49),G("Honeycomb",408,"white",87),G("Cupcake",305,"red",67),G("Donut",452,"yellow",51),G("Eclair",262,"brown",24),G("Frozen yoghurt",33,"blue",24),G("Gingerbread",356,"green",49),G("Honeycomb",408,"white",87)],page:0,rowsPerPage:5},e.handleRequestSort=function(t,c){var a=c,r="desc";e.state.orderBy===c&&"desc"===e.state.order&&(r="asc"),e.setState({order:r,orderBy:a})},e.handleSelectAllClick=function(t){t.target.checked?e.setState((function(e){return{selected:e.data.map((function(e){return e.id}))}})):e.setState({selected:[]})},e.handleClick=function(t,c){var a=e.state.selected,r=a.indexOf(c),n=[];-1===r?n=n.concat(a,c):0===r?n=n.concat(a.slice(1)):r===a.length-1?n=n.concat(a.slice(0,-1)):r>0&&(n=n.concat(a.slice(0,r),a.slice(r+1))),console.log(a),e.setState({selected:n})},e.isSelected=function(t){return-1!==e.state.selected.indexOf(t)},e}return Object(k.a)(c,[{key:"render",value:function(){var e=this,t=this.props.classes,c=this.state,a=c.data,r=c.order,n=c.orderBy,s=c.selected;c.rowsPerPage,c.page;return Object(d.jsxs)("div",{className:"buyrole-main-div",children:[Object(d.jsxs)(R.a,{className:"buyrole-root",style:{boxShadow:"none"},children:[Object(d.jsxs)("p",{className:"buyrole-p",children:[" Total price is ",Object(d.jsx)("strong",{}),"$"]}),Object(d.jsxs)("div",{className:"buyrole-tablewrapper-div",children:[Object(d.jsx)("div",{className:"buyrole-tablehead-div",children:Object(d.jsx)(T.a,{"aria-labelledby":"tableTitle",children:Object(d.jsx)(U,{numSelected:s.length,order:r,orderBy:n,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:a.length})})}),Object(d.jsx)("div",{className:"buyrole-tablewrapper",children:Object(d.jsxs)(T.a,{"aria-labelledby":"tableTitle",children:[Object(d.jsx)(U,{numSelected:s.length,order:r,orderBy:n,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:a.length}),Object(d.jsx)(P.a,{className:"buyrole-table",children:_(a,J(r,n)).map((function(t){var c=e.isSelected(t.id);return Object(d.jsxs)(q.a,{hover:!0,onClick:function(c){return e.handleClick(c,t.id)},role:"checkbox","aria-checked":c,tabIndex:-1,selected:c,children:[Object(d.jsx)(A.a,{padding:"checkbox",children:Object(d.jsx)(I.a,{checked:c})}),Object(d.jsx)(A.a,{align:"center",component:"th",scope:"row",padding:"none",children:t.name}),Object(d.jsx)(A.a,{align:"center",children:t.price}),Object(d.jsx)(A.a,{align:"center",children:Object(d.jsx)("button",{style:{background:t.color},className:"buyrole-colorbtn"})}),Object(d.jsx)(A.a,{align:"center",children:t.summary})]},t.id)}))})]})})]})]}),Object(d.jsx)("div",{className:"buyrole-paybtn-div",children:Object(d.jsx)(B.a,{variant:"extended",size:"large",align:"center",color:"primary","aria-label":"Add",className:t.margin,style:{alignSelf:"center",width:"150px"},children:Object(d.jsx)("p",{className:"buyrole-pay-p",children:"PAY"})})})]})}}]),c}(r.a.Component),W=Object(F.a)((function(e){return{}}))(V);function Y(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(O,{})}),Object(d.jsx)(o.a,{path:"/account",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{path:"/server/:id",children:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{path:"/buyrole",children:Object(d.jsx)(W,{})})]})})}var K=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(Y,{})})};c(103);s.a.render(Object(d.jsx)(K,{}),document.getElementById("root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.519eb8d6.chunk.js.map