(this["webpackJsonphey-react"]=this["webpackJsonphey-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(8),r=n.n(i),s=(n(14),n(3)),a=n(4),o=n(2),d=n(6),l=n(5),j=(n(15),n(0)),h=(c.Component,c.Component,function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))}),b=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"nav-bar",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"43px",backgroundColor:"rgb(66, 103, 178)",display:"flex",alignItems:"center"},children:[Object(j.jsx)("div",{className:"icon",style:{marginLeft:"10%",height:"25px",width:"25px",borderRadius:"1px",backgroundColor:"white"}}),Object(j.jsx)("input",{placeholder:"\u641c\u5c0b",style:{marginLeft:"5px",padding:"0px 7px",height:"25px",width:"28%",borderRadius:"2px",border:"none",backgroundPosition:"97% 50%",backgroundSize:"auto 80%",backgroundRepeat:"no-repeat"}})]}),Object(j.jsx)("div",{className:"index-container",style:{marginTop:"43px"},children:e.children})]})},u=n(9),p=30,x="",O=0,m=["","Buy","Bitcoin","Now!"],g=function(){var e=Object(c.useState)("30%"),t=Object(u.a)(e,2),n=t[0],i=t[1];return console.log(Object(c.useState)("\u521d\u59cb\u503c")),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"progress-back",style:{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"},children:[Object(j.jsx)("div",{className:"progress-bar",style:{backgroundColor:"#fe5196",width:n,height:"100%",borderRadius:"10px"}}),Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"\u8840\u91cf : "})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){(p+=10)>=100&&(p=100),x=p+"%",++O>=4&&(O=0);var e=m[O];document.getElementById("character-poster").innerHTML=e,i(x)},children:"\u8f49\u63db\u767e\u5206\u6bd4\u4e26\u505a\u4e00\u4e9b\u9177\u9177\u7684\u4e8b\u60c5"}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{style:{backgroundColor:"rgb(255,215,0)",width:"200px",height:"70px",borderRadius:"5px"},children:Object(j.jsx)("h1",{style:{marginLeft:"25%",marginTop:"20%"},id:"character-poster"})})]})},v=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={repoBane:null},c.handleClick=c.handleClick.bind(Object(o.a)(c)),c}return Object(a.a)(n,[{key:"handleClick",value:function(){var e=this;fetch("https://api.github.com/users/jserv/repos",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({repoName:t[0].id}),e.setState({repoName2:t[0].node_id}),e.setState({repoName3:t[0].name}),e.setState({repoName4:t[0].full_name}),e.setState({repoName5:t[0].private})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"data-display"}),Object(j.jsx)("button",{onClick:this.handleClick,children:"\u53d6\u5f97JserV\u4ee5\u82f1\u6587\u5b57\u6bcd\u6392\u5e8f\u7684\u7b2c\u4e00\u500bRepo"}),Object(j.jsx)("h1",{children:null===this.state.repoName?"\u76ee\u524d\u9084\u6c92\u6709\u8cc7\u6599":this.state.repoName}),Object(j.jsx)("h1",{children:null===this.state.repoName?"\u76ee\u524d\u9084\u6c92\u6709\u8cc7\u6599":this.state.repoName2}),Object(j.jsx)("h1",{children:null===this.state.repoName?"\u76ee\u524d\u9084\u6c92\u6709\u8cc7\u6599":this.state.repoName3}),Object(j.jsx)("h1",{children:null===this.state.repoName?"\u76ee\u524d\u9084\u6c92\u6709\u8cc7\u6599":this.state.repoName4}),Object(j.jsx)("h1",{children:null===this.state.repoName?"\u76ee\u524d\u9084\u6c92\u6709\u8cc7\u6599":this.state.repoName5})]})}}]),n}(c.Component);function f(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{style:{marginTop:"5%"},onClick:e.handleClick,children:e.name}),Object(j.jsx)("br",{})]})}var N=0;r.a.render(Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{name:"\u8a08\u7b97\u6578\u5b57+1",handleClick:function(){N+=1,document.getElementById("show-area").innerHTML="\u88ab\u6211\u6309\u5230\u4e86",document.getElementById("count-area").innerHTML=N}}),Object(j.jsx)(b,{}),Object(j.jsx)("div",{id:"show-area"}),Object(j.jsx)("div",{id:"count-area"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("h1",{id:"Button-66",children:"\u6309\u9215666"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(g,{})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{children:Object(j.jsx)(v,{})}),Object(j.jsx)("div",{})]}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.97d08016.chunk.js.map