(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{63:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(22),r=n.n(c),s=(n(63),n(15)),l=n(16),o=n(18),d=n(17),j=n(6),h=n(54),p=n(25),b=n(89),x=n(71),u=n(91),g=n(92),m=n(72),f=n(93),O=n(104),v=n(94),y=n(2),k=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={languages:["Python","C++","C","JS","React","Java","SPiiPlus"],renderedLanguages:{}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.prepareChips()}},{key:"langShadowCycle",value:function(){}},{key:"prepareChips",value:function(){var e=this,t=6;Object.entries(this.state.languages).forEach((function(n){var a={renderedLanguages:e.state.renderedLanguages};a.renderedLanguages[n[1]]={},a.renderedLanguages[n[1]].delay=200*t+"ms",e.setState(a),console.log(e.state),t++}))}},{key:"render",value:function(){var e=this.props.classes;return Object(y.jsx)(b.a,{in:!0,style:{transitionDelay:"100ms"},children:Object(y.jsx)(x.a,{elevation:0,variant:"outlined",className:e.paper,children:Object(y.jsx)("div",{className:e.paperDiv,children:Object(y.jsxs)(u.a,{container:!0,direction:"row",className:e.mainGrid,children:[Object(y.jsx)(u.a,{item:!0,xs:5,style:{height:"100%"},children:Object(y.jsx)("div",{className:e.nameHolder,children:Object(y.jsx)(g.a,{variant:"h2",justify:"center",className:e.name,children:Object(y.jsx)("b",{children:"Colin Hartigan"})})})}),Object(y.jsx)(u.a,{item:!0,xs:7,className:e.rightSide,children:Object(y.jsxs)(u.a,{container:!0,direction:"column",children:[Object(y.jsxs)(u.a,{item:!0,xs:!0,children:[Object(y.jsx)(m.a,{in:!0,style:{transitionDelay:"800ms"},children:Object(y.jsx)(g.a,{variant:"h5",align:"center",style:{marginBottom:"5px"},children:"17 y/o full-stack developer"})}),Object(y.jsx)("div",{className:e.chips,children:Object.entries(this.state.renderedLanguages).map((function(t){var n=Object(h.a)(t,2),a=n[0],i=n[1];return console.log(a),Object(y.jsx)(f.a,{in:!0,timeout:500,style:{transitionDelay:i.delay},children:Object(y.jsx)(O.a,{size:"small",label:a,className:e.langChip})})}))})]}),Object(y.jsx)(u.a,{item:!0,xs:!0,children:Object(y.jsx)(m.a,{in:!0,style:{transitionDelay:"4000ms"},children:Object(y.jsx)("div",{className:e.buttonHolder,children:Object(y.jsx)(v.a,{color:"primary",size:"medium",className:e.goButton,component:p.c,to:"/explore",children:"explore projects"})})})})]})})]})})})})}}]),n}(i.a.Component),C=Object(j.a)((function(e){return{paper:{height:"275px",width:"625px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10,overflow:"hidden"},paperDiv:{width:"90%",height:"100%",display:"flex",justifyContent:"center",alignItems:"stretch"},mainGrid:{display:"flex",alignItems:"center",alignContent:"space-between"},nameHolder:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 5px",height:"100%"},name:{background:"linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",alignSelf:"center",justifyContent:"center"},socials:{display:"flex",flexDirection:"row",height:"47.97px"},chips:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(.4)}},langChip:{background:"linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)"},goButton:{height:40,padding:"0 20px",background:"linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",backgroundSize:"200% 200%",color:"white",animation:"$buttonAnim 6s linear infinite alternate","&:hover":{boxShadow:"0 3px 6px 3px rgba(255, 156, 116, .3)"}},"@keyframes buttonAnim":{"0%":{backgroundPosition:"0% 50%"},"100%":{backgroundPosition:"100% 50%"}},buttonHolder:{display:"flex",alignContent:"stretch",justifyContent:"center",marginTop:"40px"},rightSide:{paddingLeft:"20px"}}}))(k),w=n(95),N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){document.title="colinhartigan / home"}},{key:"render",value:function(){var e=this.props.classes;return Object(y.jsx)(w.a,{children:Object(y.jsxs)(u.a,{container:!0,justify:"center",alignItems:"center",children:[Object(y.jsx)(u.a,{item:!0,xs:!0}),Object(y.jsx)(u.a,{item:!0,xs:!0,className:e.row,children:Object(y.jsx)(C,{})}),Object(y.jsx)(u.a,{item:!0,xs:!0})]})})}}]),n}(i.a.Component),S=Object(j.a)((function(e){return{row:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}}))(N),B=n(35),D=n(96),z=n(97),L=n(98),T=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(y.jsxs)(D.a,{className:e.card,children:[Object(y.jsxs)(z.a,{children:[Object(y.jsx)(g.a,{variant:"h5",style:{wordBreak:"break-word"},children:this.props.data.name}),Object(y.jsx)(O.a,{size:"small",label:this.props.data.language,className:e.langChip}),Object(y.jsx)(g.a,{variant:"body2",className:e.descText,children:this.props.data.description})]}),Object(y.jsx)(L.a,{className:e.actions,children:Object(y.jsx)(v.a,{size:"small",variant:"outlined",children:"More"})})]})}}]),n}(i.a.Component),I=Object(j.a)((function(e){var t;return{card:{display:"flex",width:"95%",height:"220px",flexDirection:"column",justifyContent:"space-between"},descText:(t={overflow:"hidden",maxHeight:"8rem",WebkitBoxOrient:"vertical",display:"block"},Object(B.a)(t,"display"," -webkit-box"),Object(B.a)(t,"overflow","hidden"),Object(B.a)(t,"textOverflow","ellipsis"),Object(B.a)(t,"WebkitLineClamp",4),t),actions:{display:"flex",alignSelf:"flex-end",justifyContent:"flex-end"},langChip:{background:"linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)",maxHeight:"20px",marginTop:"5px",marginBottom:"5px"}}}))(T),P=n(99),W=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(y.jsx)(P.a,{className:e.backdrop,open:!1,children:Object(y.jsx)(x.a,{variant:"outlined",className:e.paper,children:"asdf"})})}}]),n}(i.a.Component),F=Object(j.a)((function(e){return{backdrop:{zIndex:10},paper:{width:"525px",height:"300px"}}}))(W),H=n(100),M=[343571477,350130669],R=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={repos:[]},a}return Object(l.a)(n,[{key:"fetchRepos",value:function(){var e=this;fetch("https://api.github.com/users/colinhartigan/repos").then((function(e){return e.json()})).then((function(t){e.setState({repos:t})}))}},{key:"componentDidMount",value:function(){this.fetchRepos(),document.title="colinhartigan / explore"}},{key:"render",value:function(){var e=this.props.classes;return Object(y.jsx)(w.a,{children:Object(y.jsxs)(u.a,{container:!0,children:[Object(y.jsx)(u.a,{column:!0,xs:2}),Object(y.jsx)(u.a,{column:!0,xs:8,children:Object(y.jsxs)(x.a,{elevation:0,variant:"outlined",className:e.paper,children:[Object(y.jsx)("div",{className:e.header,children:Object(y.jsxs)(u.a,{container:!0,children:[Object(y.jsx)(u.a,{column:!0,xs:5,className:e.title,children:Object(y.jsx)(g.a,{variant:"h3",children:Object(y.jsx)("b",{children:"Explore"})})}),Object(y.jsx)(u.a,{column:!0,xs:7,className:e.filter,children:"filter chip picker shall go hither"})]})}),Object(y.jsx)(H.a,{variant:"middle",orientation:"horizontal",style:{width:"95%"}}),Object(y.jsx)("br",{}),Object(y.jsx)(u.a,{container:!0,spacing:2,className:e.cardGrid,justify:"center",children:this.state.repos.map((function(e){return!1===e.private&&!1===M.includes(e.id)?Object(y.jsx)(u.a,{container:!0,item:!0,xs:4,justify:"center",children:Object(y.jsx)(I,{data:e})}):Object(y.jsx)("div",{})}))}),Object(y.jsx)(F,{}),Object(y.jsx)("div",{className:e.footer,children:"oh ouchie i hurt my foot on this here footer"})]})}),Object(y.jsx)(u.a,{column:!0,xs:2})]})})}}]),n}(i.a.Component),A=Object(j.a)((function(e){return{paper:{display:"flex",width:"100%",marginTop:"70px",marginBottom:"50px",height:"auto",flexWrap:"wrap",justifyContent:"center"},header:{margin:"15px 15px 10px 15px",width:"100%",height:"80px",display:"flex",padding:"0px 2% 0px 2%"},footer:{marginTop:"100px",marginBottom:"10px"},filter:{alignSelf:"center"},cardGrid:{display:"flex",alignItems:"center",alignContent:"center",width:"100%",padding:"5px 4% 0px 4%"},projectCard:{alignSelf:"center"},title:{background:"linear-gradient(45deg, #ffd335 0%, #ff5286 100%)",backgroundSize:"300% 100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",alignSelf:"center",animation:"$buttonAnim 6s linear infinite alternate",paddingLeft:"10px"},"@keyframes buttonAnim":{"0%":{backgroundPosition:"0% 50%"},"100%":{backgroundPosition:"100% 50%"}},langChip:{background:"linear-gradient(160deg, #24c6dc 0%, #514a9d 100%)"}}}))(R),G=n(53),J=n(102),E=n(103),$=n(101),q=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes;return Object(y.jsx)(x.a,{elevation:0,className:e.bar,children:Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:e.socials,children:[Object(y.jsx)("a",{href:"https://linkedin.com/in/colin-hartigan/",children:Object(y.jsx)($.a,{size:"medium",className:e.button,children:Object(y.jsx)("img",{src:"https://api.iconify.design/mdi-linkedin.svg",width:20,height:20,className:e.logo})})}),Object(y.jsx)("a",{href:"https://github.com/colinhartigan",children:Object(y.jsx)($.a,{size:"medium",className:e.button,children:Object(y.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,className:e.logo,viewBox:"0 0 24 24",children:Object(y.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})})]})})})}}]),n}(i.a.Component),K=Object(j.a)((function(e){return{bar:{position:"fixed",display:"flex",width:"100vw",height:"53px",alignItems:"center",justifyContent:"center",background:"#303030",borderRadius:0},nameText:{color:"#575757"},button:{margin:e.spacing(.5)},logo:{filter:"invert(70%)"}}}))(q),Q=n(9),U=Object(G.a)({palette:{type:"dark"}});var V=function(){return Object(y.jsx)(i.a.Fragment,{children:Object(y.jsxs)(J.a,{theme:U,children:[Object(y.jsx)(E.a,{}),Object(y.jsx)(K,{}),Object(y.jsx)(p.b,{children:Object(y.jsxs)(Q.d,{children:[Object(y.jsx)(Q.b,{exact:!0,path:"/",children:Object(y.jsx)(Q.a,{to:"/home"})}),Object(y.jsx)(Q.b,{path:"/home",children:Object(y.jsx)(S,{})}),Object(y.jsx)(p.a,{path:"/explore",children:Object(y.jsx)(A,{})})]})})]})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))};r.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(V,{})}),document.getElementById("root")),X()}},[[70,1,2]]]);
//# sourceMappingURL=main.7d187f4a.chunk.js.map