(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(73),l=t.n(c),s=(t(82),t(47)),i=t(8),o=t(9),u=t(11),h=t(10),d=t(12),b=(t(83),t(84),t(37)),m=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={chartData:e.chartData,chartOptions:e.chartOptions},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{classname:"chart"},r.a.createElement(b.a,{data:this.state.chartData,options:this.state.chartOptions}))}}]),a}(r.a.Component),v=t(13),p=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={lab:"DCL L416"},t.handleChange=t.handleChange.bind(Object(v.a)(Object(v.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(v.a)(Object(v.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({lab:e.target.value}),this.props.action(e.target.value)}},{key:"handleSubmit",value:function(e){}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Pick a lab to view daily trends for:",r.a.createElement("select",{value:this.state.lab,onChange:this.handleChange},r.a.createElement("option",{value:"DCL L416"},"DCL L416"),r.a.createElement("option",{value:"DCL L440"},"DCL L440"),r.a.createElement("option",{value:"EH 406B1"},"EH 406B1"),r.a.createElement("option",{value:"EH 406B8"},"EH 406B8"),r.a.createElement("option",{value:"GELIB 4C"},"GELIB 4C"),r.a.createElement("option",{value:"GELIB 4E"},"GELIB 4E"),r.a.createElement("option",{value:"MEL 1009"},"MEL 1009"),r.a.createElement("option",{value:"SIEBL 0218"},"SIEBL 0218"),r.a.createElement("option",{value:"SIEBL 0220"},"SIEBL 0220"),r.a.createElement("option",{value:"English"},"English"),r.a.createElement("option",{value:"Nevada"},"Nevada"),r.a.createElement("option",{value:"Oregon"},"Oregon"),r.a.createElement("option",{value:"Undergrad"},"Undergrad"),r.a.createElement("option",{value:"Illini Union"},"Illini Union"),r.a.createElement("option",{value:"Wohlers"},"Wohlers"))))}}]),a}(r.a.Component),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={chartData:e.chartData,chartOptions:{},currLab:"DCL L416",allData:e.allData},t.handler=t.handler.bind(Object(v.a)(Object(v.a)(t))),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handler",value:function(e){var a=[];this.state.allData.map(function(t){return a.push(t[e])}),this.setState({currLab:e,chartData:{labels:["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],datasets:[{label:"In Use",data:a,backgroundColor:"rgba(200, 150, 200,.6)"}]}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{classname:"chart"},r.a.createElement(p,{action:this.handler}),r.a.createElement(b.b,{data:this.state.chartData,options:{elements:{line:{tension:0}},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})))}}]),a}(r.a.Component),g=t(75),M=t(3),f=t(76);function O(){var e=Object(g.a)(["\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n"]);return O=function(){return e},e}var A=Object(M.css)(O()),k=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={loading:!0},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(f.ClipLoader,{css:A,sizeUnit:"px",size:150,color:"#333",loading:this.state.loading}))}}]),a}(r.a.Component),j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={ics:[],ews:[],isLoaded:!1,stackedICSData:{},stackedEWSData:{},currLab:"",labAverages:{},lineAvgs:{}},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="https://cors-anywhere.herokuapp.com/";Promise.all([fetch(a+"https://69smoo2dc6.execute-api.us-east-1.amazonaws.com/api/ics"),fetch(a+"https://69smoo2dc6.execute-api.us-east-1.amazonaws.com/api/ews"),fetch(a+"https://pzgw0wp7ch.execute-api.us-east-1.amazonaws.com/default/getAverageCompLab")]).then(function(e){var a=Object(s.a)(e,3),t=a[0],n=a[1],r=a[2];return Promise.all([t.json(),n.json(),r.json()])}).then(function(a){var t=Object(s.a)(a,3),n=t[0],r=t[1],c=t[2],l=[],i=[],o=[];n.map(function(e){return l.push(e.usage_active),i.push(e.usage_total-e.usage_active),o.push(e.site_displayname)});var u=[],h=[],d=[];r.map(function(e){return u.push(e.inusecount),h.push(e.machinecount-e.inusecount),d.push(e.strlabname)});var b=[];c.map(function(e){return b.push(e["DCL L416"])}),e.setState({labAverages:c,isLoaded:!0,ics:n,ews:r,stackedICSData:{labels:o,datasets:[{label:"In Use",data:l,backgroundColor:"rgba(200, 100, 100, .6)"},{label:"Available",data:i,backgroundColor:"rgba(100, 200, 100, .6)"}]},stackedEWSData:{labels:d,datasets:[{label:"In Use",data:u,backgroundColor:"rgba(200, 100, 100, .6)"},{label:"Available",data:h,backgroundColor:"rgba(100, 200, 100, .6)"}]},lineAvgs:{labels:["1:00 AM","2:00 AM","3:00 AM","4:00 AM","5:00 AM","6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 AM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM","12:00 AM"],datasets:[{label:"In Use",data:b,backgroundColor:"rgba(200, 150, 200,.6)"}]}})})}},{key:"render",value:function(){var e=this.state,a=(e.ics,e.ews,e.isLoaded),t=(e.stackedICSData,e.stackedEWSData,e.test,e.labAverages,{scales:{xAxes:[{stacked:!0,ticks:{display:!0,autoSkip:!1}}],yAxes:[{stacked:!0}]}});return a?r.a.createElement("div",{className:"App"},r.a.createElement("div",{class:"navbar_new"},r.a.createElement("div",null,"Lab Usage Data"),r.a.createElement("div",null,r.a.createElement("a",{href:"https://it.engineering.illinois.edu/ews",target:"_blank"},"EWS")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://techservices.illinois.edu/content/computer-lab-locations-and-hours",target:"_blank"},"ICS")),r.a.createElement("div",null,r.a.createElement("a",{href:"https://srtilab.techservices.illinois.edu/",target:"_blank"},"SRTI"))),r.a.createElement("div",{class:"chart_title"},"EWS (Engineering Workstations)"),r.a.createElement("div",{class:"chart_container"},r.a.createElement(m,{chartData:this.state.stackedEWSData,chartOptions:t})),r.a.createElement("div",{class:"chart_title"},"ICS (Instructional Computing Services)"),r.a.createElement("div",{class:"chart_container"},r.a.createElement(m,{chartData:this.state.stackedICSData,chartOptions:t})),r.a.createElement("div",{class:"chart_title"},"Hourly Lab Trends"),r.a.createElement("div",{class:"chart_container"},r.a.createElement(E,{chartData:this.state.lineAvgs,allData:this.state.labAverages}))):r.a.createElement("div",{class:"loading_box"},"Loading data...",r.a.createElement(k,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,a,t){e.exports=t(252)},82:function(e,a,t){},83:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},84:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.0b60df57.chunk.js.map