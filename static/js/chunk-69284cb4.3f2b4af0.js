(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69284cb4"],{"0e25":function(t,e,n){"use strict";n("1fd4")},"1fd4":function(t,e,n){},"629c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{span:22,offset:1}},[n("el-alert",{attrs:{title:"台州小微企业数字征信的模式特点：",type:"info",description:"1、数据融合。多部门数据融合，为金融机构提供了大数据查询接口，节省了金融机构的信息搜寻成本，有效降低了金融机构与小微企业之间的信息不对称问题。\n                    2、数据真实性。该数据平台将多部门的信用信息数据进行了自动融合，确保了数据的真实性、可靠性，以及完整性，规避了传统手段获取数据的质量不佳现象。\n                    3、数据的功能性。建立小微企业信用信息立方体，构建小微企业信用信息库，包含各个小微企业的正负面信息、不良小微企业信息库、小微企业风险评价报告，以及政府针对某些行业小微企业的培育支持情况等信息。","show-icon":""}}),n("br"),n("el-alert",{attrs:{title:"流程：",type:"info",description:"金融服务信用信息共享平台，征集信用信息数据。整合信息、自动评分、导入信用报告、建立信用立方，为金融机构提供查询接口","show-icon":""}})],1)],1),n("el-row",{attrs:{gutter:0}},[n("el-col",{attrs:{span:22,offset:1}},[n("br"),n("div",{attrs:{id:"mountNode"}})])],1)],1)},a=[],i=n("1da1"),u=(n("96cf"),n("a4d3"),n("e01a"),n("30d1")),o=n.n(u),c=n("e74e"),s={data:function(){return{}},mounted:function(){this.initG6()},methods:{initG6:function(){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o.a.registerEdge("circle-running",{afterDraw:function(t,e){var n=e.get("children")[0],r=n.getPoint(0),a=e.addShape("circle",{attrs:{x:r.x,y:r.y,fill:"#1890ff",r:3},name:"circle-shape"});a.animate((function(t){var e=n.getPoint(t);return{x:e.x,y:e.y}}),{repeat:!0,duration:3e3})}},"line"),Object(c["d"])().then((function(t){return t.data.items})).then((function(t){var e=document.getElementById("mountNode"),n=new o.a.Minimap({size:[100,100],className:"minimap",type:"delegate"}),r=new o.a.Graph({container:"mountNode",width:e.scrollWidth,height:e.scrollHeight||600,fitView:!0,fitCenter:!0,modes:{default:[{type:"tooltip",formatText:function(t){var e=t.description;return e}},"drag-canvas","drag-node","zoom-canvas"]},defaultNode:{style:{lineWidth:1,stroke:"#5B8FF9",fill:"#EBEEF5",radius:5}},defaultEdge:{type:"circle-running",size:2,color:"#F6BD16"},plugins:[n]});r.data(t),r.render(),r.fitView()}));case 2:case"end":return t.stop()}}),t)})))()}}},d=s,l=(n("0e25"),n("2877")),f=Object(l["a"])(d,r,a,!1,null,null,null);e["default"]=f.exports},e74e:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return d}));var r=n("b775");function a(t){return Object(r["a"])({url:"/vue-admin-template/visual/params",method:"get",params:t})}function i(t){return Object(r["a"])({url:"/vue-admin-template/visual/trade",method:"post",params:{data:t}})}function u(t){return Object(r["a"])({url:"/vue-admin-template/visual/address",method:"post",params:{data:t}})}function o(t){return Object(r["a"])({url:"/vue-admin-template/visual/node",method:"get",params:t})}function c(t){return Object(r["a"])({url:"/vue-admin-template/visual/chain",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/vue-admin-template/visual/taizhou",method:"get",params:t})}function d(t){return Object(r["a"])({url:"/vue-admin-template/visual/suzhou",method:"get",params:t})}}}]);