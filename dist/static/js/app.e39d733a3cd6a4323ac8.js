webpackJsonp([0],{"/Pzf":function(t,e){},"71XK":function(t,e){},ADNk:function(t,e){},E51W:function(t,e){},Fl9v:function(t,e){},NHnr:function(t,e,a){"use strict";function o(t){a("Fl9v")}function s(t){a("ZdwB")}function l(t){a("NKTd")}function n(t){a("naR6")}function r(t){a("apDc")}function i(t){a("oElI")}function u(t){a("/Pzf")}function c(t){a("ADNk")}function m(t){a("yZGc")}function d(t){a("71XK")}function v(t){a("UvsH")}Object.defineProperty(e,"__esModule",{value:!0});var h=a("7+uW"),b={name:"app"},_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},p=[],f={render:_,staticRenderFns:p},C=f,g=a("VU/8"),x=o,w=g(b,C,!1,x,null,null),N=w.exports,y=a("/ocq"),k={mounted:function(){this.scroller=this.$el,this.storageGetter("fontVal")&&(this.fontVal=this.storageGetter("fontVal")),this.storageGetter("controlColor")&&(this.controlColor=this.storageGetter("controlColor"))},data:function(){return{msg:"Welcome to Your Vue.js App",loading:!1,scroller:null,bottomSheet:!1,bottomNav:"",catalogOpen:!1,progressVal:"",fontVal:16,charpterNumber:100,nowCharpternum:20,showSet:"display:none;",showPro:"display:none",controlColor:"oneColor",controlColorChange:"oneColor"}},watch:{fontVal:function(t){this.storageSetter("fontVal",t)}},methods:{loadMore:function(){},closeBottomSheet:function(){this.bottomSheet=!1,this.bottomNav="",this.showPro="display:none",this.showSet="display:none"},openBottomSheet:function(){this.bottomSheet=!0,this.progressVal=this.nowCharpternum/this.charpterNumber*100},handleChange:function(t){this.bottomNav=t,"catalog"==t&&(this.catalogOpen=!0,this.bottomSheet=!1,this.showPro="display:none",this.showSet="display:none"),"progrss"==t&&(this.showPro="display:block",this.showSet="display:none"),"setting"==t&&(this.showSet="display:block",this.showPro="display:none"),"day"==t&&(this.controlColor=this.controlColorChange,this.storageSetter("controlColor",this.controlColor)),"night"==t&&(this.controlColor="nightStyle",this.storageSetter("controlColor",this.controlColor))},catalogToggle:function(){this.catalogOpen=!this.catalogOpen,this.bottomNav=""},changeColor:function(t){this.controlColor=t,this.controlColorChange=t,this.storageSetter("controlColor",t)},storageGetter:function(t){return localStorage.getItem("html5_reader_"+t)},storageSetter:function(t,e){localStorage.setItem("html5_reader_"+t,e)}}},S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[a("div",{staticClass:"header"},[a("div",{class:"title "+t.controlColor},[t._m(0),t._v("第一章 大闹天宫")])]),t._v(" "),a("div",{class:"content "+t.controlColor},[a("div",{staticClass:"charpterContent"},[a("div",[a("div",{staticClass:"showBottom",staticStyle:{width:"100%",height:"40%","background-color":"#AAA",position:"fixed",left:"0",top:"30%",opacity:"0"},on:{click:t.openBottomSheet}}),t._v(" "),a("h4",{staticClass:"charpterTitle"},[t._v("第一章 vue的使用文档")]),t._v(" "),a("div",{style:"fontSize:"+t.fontVal+"px"},[a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南熟悉 Vue本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")]),t._v(" "),a("p",[t._v("CLI 工具假定用户对 Node.js 和相关构建工具有一定程度的了解。如果你是新手，我们强烈建议先在不用构建工具的情况下通读指南，熟悉 Vue 本身之后再研究 CLI。")])])]),t._v(" "),a("mu-infinite-scroll",{attrs:{scroller:t.scroller,loading:t.loading},on:{load:t.loadMore}})],1),t._v(" "),a("div",[a("mu-drawer",{attrs:{right:"",open:t.catalogOpen,docked:!1,width:"80%"},on:{close:function(e){t.catalogToggle()}}},[a("mu-appbar",{attrs:{title:"目 录"}}),t._v(" "),a("mu-list",[a("mu-list-item",{attrs:{title:"Menu Item 1"}}),t._v(" "),a("mu-list-item",{attrs:{title:"Menu Item 2"}}),t._v(" "),a("mu-list-item",{attrs:{title:"Menu Item 3"}})],1)],1)],1)]),t._v(" "),a("div",{staticClass:"footer"},[a("mu-bottom-sheet",{attrs:{open:t.bottomSheet},on:{close:t.closeBottomSheet}},[a("div",{style:t.showSet},[a("span",{staticClass:"fontReduce"},[t._v("调整字体大小: "+t._s(t.fontVal))]),t._v(" "),a("mu-slider",{staticClass:"demo-slider",attrs:{step:1,max:22,min:12},model:{value:t.fontVal,callback:function(e){t.fontVal=e},expression:"fontVal"}}),t._v(" "),a("div",{staticClass:"adjustColor"},[a("mu-raised-button",{staticClass:"demo-raised-button adjustColBUto",attrs:{backgroundColor:"rgb(222,206,169)"},on:{click:function(e){t.changeColor("oneColor")}}}),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button adjustColBUto",attrs:{backgroundColor:"rgb(202,217,232)"},on:{click:function(e){t.changeColor("twoColor")}}}),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button adjustColBUto",attrs:{backgroundColor:"rgb(209,237,209)"},on:{click:function(e){t.changeColor("threeColor")}}}),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button adjustColBUto",attrs:{backgroundColor:"rgb(230,230,230)"},on:{click:function(e){t.changeColor("fourColor")}}})],1)],1),t._v(" "),a("div",{style:t.showPro},[a("span",{staticClass:"fontReduce"},[t._v("进度: "+t._s(t.progressVal)+"%")]),t._v(" "),a("mu-slider",{staticClass:"demo-slider",attrs:{step:1,max:t.charpterNumber,disabled:""},model:{value:t.nowCharpternum,callback:function(e){t.nowCharpternum=e},expression:"nowCharpternum"}})],1),t._v(" "),a("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.handleChange}},[a("mu-bottom-nav-item",{staticClass:"bottomNavIcon",attrs:{value:"catalog",title:"目录",icon:"format_list_bulleted"}}),t._v(" "),a("mu-bottom-nav-item",{staticClass:"bottomNavIcon",attrs:{value:"progrss",title:"进度",icon:"trending_flat"}}),t._v(" "),a("mu-bottom-nav-item",{staticClass:"bottomNavIcon",attrs:{value:"setting",title:"设置",icon:"text_format"}}),t._v(" "),a("mu-bottom-nav-item",{staticClass:"bottomNavIcon",attrs:{value:"day",title:"日间",icon:"wb_sunny"}}),t._v(" "),a("mu-bottom-nav-item",{staticClass:"bottomNavIcon",attrs:{value:"night",title:"夜间",icon:"timelapse"}})],1)],1)],1)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"#"}},[a("i",{staticClass:"material-icons arrow"},[t._v("keyboard_arrow_left")])])}],V={render:S,staticRenderFns:I},j=V,T=a("VU/8"),L=s,P=T(k,j,!1,L,null,null),F=P.exports,A={data:function(){return{activeTab:"tab1",activeList:"list1",userId:"a111",userName:"姜太磊",userType:"管理员"}},methods:{handleTabChange:function(t){this.activeTab=t},handleListChange:function(t){this.activeList=t}}},D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-left"},[a("mu-list",{attrs:{value:t.activeList},on:{change:t.handleListChange}},[a("mu-list-item",{attrs:{title:"学生信息",value:"list1",to:"/back/studentInfo/"}}),t._v(" "),a("mu-list-item",{attrs:{title:"教室信息",value:"list2",to:"/back/roomInfo/"}}),t._v(" "),a("mu-list-item",{attrs:{title:"添加试题",value:"list3",to:"/back/addProject/"}}),t._v(" "),a("mu-list-item",{attrs:{title:"试题信息",value:"list4"}}),t._v(" "),a("mu-list-item",{attrs:{title:"考试结果",value:"list5",to:"/back/testResult/"}}),t._v(" "),a("mu-list-item",{attrs:{title:"信息维护",value:"list6",to:"/back/changePassword/"}})],1)],1),t._v(" "),a("div",{staticClass:"content-right"},[a("div",{staticClass:"breadcrumb"},[a("mu-breadcrumb",[a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("用户ID： "+t._s(t.userId))]),t._v(" "),a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("用户姓名： "+t._s(t.userName))]),t._v(" "),a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("用户身份： "+t._s(t.userType))])],1)],1),t._v(" "),a("div",{staticClass:"body"},[a("router-view")],1)])]),t._v(" "),a("div",{staticClass:"footer"},[t._v("\n    数据库课设 ©2017 Created by Muse-UI\n  ")])])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[t._v("\n      网络在线考试后台\n    ")])])}],E={render:D,staticRenderFns:U},B=E,R=a("VU/8"),J=l,$=R(A,B,!1,J,"data-v-589a35f2",null),H=$.exports,M={data:function(){return{tableData:[{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"},{studentNumber:"1505120206",name:"John Smith",sexType:"男",phoneNumber:"15727242025",idNumber:"421381199709269852"}],fixedHeader:!0,fixedFooter:!1,selectable:!1,multiSelectable:!1,enableSelectAll:!1,showCheckbox:!1,height:"500px",value:"1"}},methods:{handleChange:function(t){this.value=t}}},G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-table",{attrs:{fixedFooter:t.fixedFooter,fixedHeader:t.fixedHeader,height:t.height,enableSelectAll:t.enableSelectAll,multiSelectable:t.multiSelectable,selectable:t.selectable,showCheckbox:t.showCheckbox}},[a("mu-thead",{attrs:{slot:"header"},slot:"header"},[a("mu-tr",[a("mu-th",{attrs:{tooltip:"考生号"}},[t._v("考生")]),t._v(" "),a("mu-th",{attrs:{tooltip:"姓名"}},[t._v("姓名")]),t._v(" "),a("mu-th",{attrs:{tooltip:"性别"}},[t._v("性别")]),t._v(" "),a("mu-th",{attrs:{tooltip:"联系方式"}},[t._v("联系方式")]),t._v(" "),a("mu-th",{attrs:{tooltip:"身份证"}},[t._v("身份证")]),t._v(" "),a("mu-th",[t._v("操作")])],1)],1),t._v(" "),a("mu-tbody",t._l(t.tableData,function(e,o){return a("mu-tr",{key:o,attrs:{selected:e.selected}},[a("mu-td",[t._v(t._s(e.studentNumber))]),t._v(" "),a("mu-td",[t._v(t._s(e.name))]),t._v(" "),a("mu-td",[t._v(t._s(e.sexType))]),t._v(" "),a("mu-td",[t._v(t._s(e.phoneNumber))]),t._v(" "),a("mu-td",[t._v(t._s(e.idNumber))]),t._v(" "),a("mu-td",[a("mu-dropDown-menu",{attrs:{value:t.value},on:{change:t.handleChange}},[a("mu-menu-item",{attrs:{value:"1",title:"编辑"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"2",title:"添加"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"3",title:"删除"}})],1)],1)],1)}))],1)],1)},O=[],K={render:G,staticRenderFns:O},W=K,Z=a("VU/8"),z=n,X=Z(M,W,!1,z,null,null),q=X.exports,Q={data:function(){return{tableData:[{roomNumber:"0001",teachername:"李晓林",teacherMain:"1106120203",subject:"数据库"},{roomNumber:"0001",teachername:"李晓林",teacherMain:"1106120203",subject:"数据库"},{roomNumber:"0001",teachername:"李晓林",teacherMain:"1106120203",subject:"数据库"}],fixedHeader:!0,fixedFooter:!1,selectable:!1,multiSelectable:!1,enableSelectAll:!1,showCheckbox:!1,height:"500px",value:"1"}},methods:{handleChange:function(t){this.value=t}}},Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-table",{attrs:{fixedFooter:t.fixedFooter,fixedHeader:t.fixedHeader,height:t.height,enableSelectAll:t.enableSelectAll,multiSelectable:t.multiSelectable,selectable:t.selectable,showCheckbox:t.showCheckbox}},[a("mu-thead",{attrs:{slot:"header"},slot:"header"},[a("mu-tr",[a("mu-th",[t._v("教室编号")]),t._v(" "),a("mu-th",[t._v("教师姓名")]),t._v(" "),a("mu-th",[t._v("教师主码")]),t._v(" "),a("mu-th",[t._v("科目")]),t._v(" "),a("mu-th",[t._v("操作")])],1)],1),t._v(" "),a("mu-tbody",t._l(t.tableData,function(e,o){return a("mu-tr",{key:o,attrs:{selected:e.selected}},[a("mu-td",[t._v(t._s(e.roomNumber))]),t._v(" "),a("mu-td",[t._v(t._s(e.teachername))]),t._v(" "),a("mu-td",[t._v(t._s(e.teacherMain))]),t._v(" "),a("mu-td",[t._v(t._s(e.subject))]),t._v(" "),a("mu-td",[a("mu-dropDown-menu",{attrs:{value:t.value},on:{change:t.handleChange}},[a("mu-menu-item",{attrs:{value:"1",title:"编辑"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"2",title:"添加"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"3",title:"删除"}})],1)],1)],1)}))],1)],1)},tt=[],et={render:Y,staticRenderFns:tt},at=et,ot=a("VU/8"),st=r,lt=ot(Q,at,!1,st,null,null),nt=lt.exports,rt={data:function(){return{tableData:[{studentNumber:"1505120206",name:"John Smith",sexType:"男",subject:"数据库",score:90},{studentNumber:"1505120206",name:"John Smith",sexType:"男",subject:"数据库",score:90},{studentNumber:"1505120206",name:"John Smith",sexType:"男",subject:"数据库",score:90}],fixedHeader:!0,fixedFooter:!1,selectable:!1,multiSelectable:!1,enableSelectAll:!1,showCheckbox:!1,height:"500px",value:"1"}},methods:{handleChange:function(t){this.value=t}}},it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-table",{attrs:{fixedFooter:t.fixedFooter,fixedHeader:t.fixedHeader,height:t.height,enableSelectAll:t.enableSelectAll,multiSelectable:t.multiSelectable,selectable:t.selectable,showCheckbox:t.showCheckbox}},[a("mu-thead",{attrs:{slot:"header"},slot:"header"},[a("mu-tr",[a("mu-th",{attrs:{tooltip:"考生号"}},[t._v("考生")]),t._v(" "),a("mu-th",{attrs:{tooltip:"姓名"}},[t._v("姓名")]),t._v(" "),a("mu-th",{attrs:{tooltip:"考试科目"}},[t._v("考试科目")]),t._v(" "),a("mu-th",{attrs:{tooltip:"分数"}},[t._v("分数")]),t._v(" "),a("mu-th",[t._v("操作")])],1)],1),t._v(" "),a("mu-tbody",t._l(t.tableData,function(e,o){return a("mu-tr",{key:o,attrs:{selected:e.selected}},[a("mu-td",[t._v(t._s(e.studentNumber))]),t._v(" "),a("mu-td",[t._v(t._s(e.name))]),t._v(" "),a("mu-td",[t._v(t._s(e.subject))]),t._v(" "),a("mu-td",[t._v(t._s(e.score))]),t._v(" "),a("mu-td",[a("mu-dropDown-menu",{attrs:{value:t.value},on:{change:t.handleChange}},[a("mu-menu-item",{attrs:{value:"1",title:"编辑"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"2",title:"添加"}}),t._v(" "),a("mu-menu-item",{attrs:{value:"3",title:"删除"}})],1)],1)],1)}))],1)],1)},ut=[],ct={render:it,staticRenderFns:ut},mt=ct,dt=a("VU/8"),vt=i,ht=dt(rt,mt,!1,vt,null,null),bt=ht.exports,_t={data:function(){return{oldPassword:"",newPassworld:"",aNewPassworld:"",topPopup:!1}},methods:{submitInfo:function(){var t=this;this.newPassworld!=this.aNewPassworld&&(this.topPopup=!0,setTimeout(function(){t.topPopup=!1},2e3))}}},pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-text-field",{attrs:{label:"请输入旧密码",hintText:"请输入密码",type:"password",labelFloat:""},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{label:"新密码",hintText:"请输入密码",type:"password",labelFloat:""},model:{value:t.newPassworld,callback:function(e){t.newPassworld=e},expression:"newPassworld"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{label:"确认新密码",hintText:"请输入密码",type:"password",labelFloat:""},model:{value:t.aNewPassworld,callback:function(e){t.aNewPassworld=e},expression:"aNewPassworld"}}),a("br"),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",staticStyle:{"margin-top":"50px"},attrs:{label:"确认修改",primary:""},on:{click:t.submitInfo}}),t._v(" "),a("mu-popup",{attrs:{position:"top",overlay:!1,popupClass:"demo-popup-top",open:t.topPopup}},[t._v("\r\n    两次输入不一致\r\n  ")])],1)},ft=[],Ct={render:pt,staticRenderFns:ft},gt=Ct,xt=a("VU/8"),wt=u,Nt=xt(_t,gt,!1,wt,null,null),yt=Nt.exports,kt={data:function(){return{activeTab:"tab1",userId:"1505120515",userName:"汤姆",sex:"男"}},methods:{handleTabChange:function(t){this.activeTab=t}}},St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"breadcrumb"},[a("mu-breadcrumb",[a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("考生号："+t._s(t.userId))]),t._v(" "),a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("姓名："+t._s(t.userName))]),t._v(" "),a("mu-breadcrumb-item",{attrs:{href:"#"}},[t._v("性别："+t._s(t.sex))])],1)],1),t._v(" "),a("div",{staticClass:"body"},[a("router-view")],1)]),t._v(" "),a("div",{staticClass:"footer"},[t._v("\n    数据库课设 ©2017 Created by Muse-UI\n  ")])])},It=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[t._v("\n      溜飞天在线考试网\n    ")])])}],Vt={render:St,staticRenderFns:It},jt=Vt,Tt=a("VU/8"),Lt=c,Pt=Tt(kt,jt,!1,Lt,"data-v-486ae4cb",null),Ft=Pt.exports,At={data:function(){return{checkselect:"",toNext:!0}},watch:{checkselect:function(){console.log(this.checkselect),1==this.checkselect?this.toNext=!1:this.toNext=!0}},methods:{checkbox:function(t){console.log(t)}}},Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-sub-header",[t._v("考场规则")]),t._v(" "),a("mu-content-block",[a("mu-list",[a("mu-list-item",{attrs:{title:"1.   考生应带好二代身份证件及准考证（外国籍考生可用护照籍）。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"2.   考生务必准时进入考场，迟到者按放弃考试不得入场。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"3.   考生进入考场后须将身份证件放于桌面上方，以便检查。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   4.   考生除身份证件和考试用品外，其它个人物品，应放置在考场内指定的位置。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   5.    严禁将手机等电子设备带入考场。违者按作弊处理。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   6.    考生应在答题纸上正确填写个人信息和答案，并承担填写错误的后果。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   7.    请考生在考场内保持安静，不得交谈和走动。违规者，考试成绩将被取消。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   8.    考试中途不得离开考场。否则考试成绩将被取消。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"   9.    在考试过程中有任何疑问等情况，请举手示意监考老师解决，不得大声喧哗。"}},[a("mu-icon",{attrs:{slot:"right",value:"info"},slot:"right"})],1)],1),t._v(" "),a("mu-checkbox",{staticClass:"demo-checkbox",attrs:{label:"我已阅读考场规则",nativeValue:"1"},model:{value:t.checkselect,callback:function(e){t.checkselect=e},expression:"checkselect"}}),t._v(" "),a("br")],1),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",attrs:{label:"同 意",disabled:t.toNext,primary:"",to:"/front/selectSub"}})],1)},Ut=[],Et={render:Dt,staticRenderFns:Ut},Bt=Et,Rt=a("VU/8"),Jt=m,$t=Rt(At,Bt,!1,Jt,null,null),Ht=$t.exports,Mt={data:function(){return{activeTab:"tab1",userId:"1505120515",userName:"汤姆",sex:"男"}},methods:{handleTabChange:function(t){this.activeTab=t}}},Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout"},[t._m(0),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"body"},[a("div",{staticStyle:{"padding-top":"80px"}},[a("mu-text-field",{attrs:{label:"考生号",labelFloat:""}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{label:"密码",hintText:"请输入密码",type:"password",labelFloat:""}}),a("br"),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",staticStyle:{"margin-top":"40px"},attrs:{label:"登 陆",disabled:t.toNext,primary:"",to:"/front/regular"}})],1)])]),t._v(" "),a("div",{staticClass:"footer"},[t._v("\n    数据库课设 ©2017 Created by Muse-UI\n  ")])])},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"logo"},[t._v("\n      溜飞天在线考试网\n    ")])])}],Kt={render:Gt,staticRenderFns:Ot},Wt=Kt,Zt=a("VU/8"),zt=d,Xt=Zt(Mt,Wt,!1,zt,"data-v-354aff2e",null),qt=Xt.exports,Qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{"padding-top":"40px"}},[t._v("考试科目选择：")]),t._v(" "),a("mu-paper",{staticClass:"demo-menu"},[a("mu-menu",[a("mu-menu-item",{attrs:{title:"数据库"}}),t._v(" "),a("mu-menu-item",{attrs:{title:"算法设计与分析"}}),t._v(" "),a("mu-menu-item",{attrs:{title:"无线传感器网络技术"}}),t._v(" "),a("mu-menu-item",{attrs:{title:"软件工程"}}),t._v(" "),a("mu-menu-item",{attrs:{title:"数字图像处理"}}),t._v(" "),a("mu-menu-item",{attrs:{title:"计算机操作系统"}})],1)],1)],1)},Yt=[],te={render:Qt,staticRenderFns:Yt},ee=te,ae=a("VU/8"),oe=v,se=ae(null,ee,!1,oe,null,null),le=se.exports,ne={data:function(){return{game1:0,game2:["1"],game3:"3",list:["计算机组成原理","数据库","算法设计与分析","无线传感器","计算机操作系统","软件工程"],answer:[],title:"",anA:"",anB:"",anC:"",anD:"",showSelect:"display:block;",showJudge:"display:none;",judgeVal:""}},methods:{selectProType:function(t){t?(this.showSelect="display:block;",this.showJudge="display:none;"):(this.showJudge="display:block;",this.showSelect="display:none;")}}},re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-select-field",{attrs:{labelFocusClass:["label-foucs"],label:"选择添加科目"},model:{value:t.game1,callback:function(e){t.game1=e},expression:"game1"}},t._l(t.list,function(t,e){return a("mu-menu-item",{key:e,attrs:{value:e,title:t}})})),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",staticStyle:{"margin-left":"40px"},attrs:{label:"选择题"},on:{click:function(e){t.selectProType(1)}}}),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",staticStyle:{"margin-left":"20px"},attrs:{label:"判断题"},on:{click:function(e){t.selectProType(0)}}}),t._v(" "),a("br"),t._v(" "),a("mu-text-field",{attrs:{hintText:"请输入题干"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("br"),t._v(" "),a("div",{style:t.showSelect},[a("mu-text-field",{attrs:{hintText:"A 选项"},model:{value:t.anA,callback:function(e){t.anA=e},expression:"anA"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{hintText:"B 选项"},model:{value:t.anB,callback:function(e){t.anB=e},expression:"anB"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{hintText:"C 选项"},model:{value:t.anC,callback:function(e){t.anC=e},expression:"anC"}}),a("br"),t._v(" "),a("mu-text-field",{attrs:{hintText:"D 选项"},model:{value:t.anD,callback:function(e){t.anD=e},expression:"anD"}}),a("br"),t._v(" "),a("mu-checkbox",{staticClass:"demo-checkbox",attrs:{name:"group",nativeValue:"A",label:"A"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),a("mu-checkbox",{staticClass:"demo-checkbox",attrs:{name:"group",nativeValue:"B",label:"B"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),a("mu-checkbox",{staticClass:"demo-checkbox",attrs:{name:"group",nativeValue:"C",label:"C"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),a("mu-checkbox",{staticClass:"demo-checkbox",attrs:{name:"group",nativeValue:"D",label:"D"},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),t._v(" "),a("div",{staticClass:"demo-checkbox"},[t._v("\r\n      正确答案："+t._s(t.answer)+"\r\n    ")])],1),t._v(" "),a("div",{style:t.showJudge},[a("mu-radio",{staticClass:"demo-radio",attrs:{label:"对",name:"group",nativeValue:"对"},model:{value:t.judgeVal,callback:function(e){t.judgeVal=e},expression:"judgeVal"}}),t._v(" "),a("br"),t._v(" "),a("mu-radio",{staticClass:"demo-radio",attrs:{label:"错",name:"group",nativeValue:"错"},model:{value:t.judgeVal,callback:function(e){t.judgeVal=e},expression:"judgeVal"}}),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"demo-checkbox",staticStyle:{"margin-top":"30px"}},[t._v("\r\n      正确答案："+t._s(t.judgeVal)+"\r\n    ")])],1),t._v(" "),a("mu-raised-button",{staticClass:"demo-raised-button",staticStyle:{"margin-top":"20px"},attrs:{label:"提交题目",primary:""}})],1)},ie=[],ue={render:re,staticRenderFns:ie},ce=ue,me=a("VU/8"),de=me(ne,ce,!1,null,null,null),ve=de.exports,he=a("VU/8"),be=he(null,null,!1,null,null,null),_e=be.exports;h.default.use(y.a);var pe=new y.a({routes:[{path:"/",name:"read",component:F},{path:"/back",component:H,children:[{path:"studentInfo",component:q},{path:"roomInfo",component:nt},{path:"testResult",component:bt},{path:"changePassword",component:yt},{path:"addProject",component:ve},{path:"projectInfo",component:_e}]},{path:"/front",component:Ft,children:[{path:"regular",component:Ht},{path:"selectSub",component:le}]},{path:"/login",component:qt}]}),fe=a("u64Q"),Ce=a.n(fe);a("E51W"),a("thDu");h.default.use(Ce.a),h.default.config.productionTip=!1,new h.default({el:"#app",router:pe,template:"<App/>",components:{App:N}})},NKTd:function(t,e){},UvsH:function(t,e){},ZdwB:function(t,e){},apDc:function(t,e){},naR6:function(t,e){},oElI:function(t,e){},thDu:function(t,e){},yZGc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e39d733a3cd6a4323ac8.js.map