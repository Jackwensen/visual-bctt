(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-244c155b"],{"41fb":function(t,e,n){"use strict";n("fb93")},e9b9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"","highlight-current-row":"","max-height":"800"}},[n("el-table-column",{attrs:{width:"80",align:"center",label:"区块高度"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:{path:"/getfromchain/getOneBlock",query:{height:e.row.Height}}}},[n("el-link",{attrs:{type:"primary"}},[t._v(" "+t._s(e.row.Height)+" ")])],1)]}}])}),n("el-table-column",{attrs:{width:"380",align:"center",label:"前一区块hash"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.PrevHash))])]}}])}),n("el-table-column",{attrs:{width:"210",align:"center",label:"Merkle根"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.MerkleRoot)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",width:"200",align:"center",label:"签名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Signature)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"区块hash"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.Hash))])]}}])}),n("el-table-column",{attrs:{width:"220",align:"center",label:"时间戳"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.Timestamp))])]}}])})],1)],1)},l=[],r=n("1da1"),o=(n("96cf"),n("d3b7"),{data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.listLoading=!0,fetch("http://localhost:9999/getBlockChain",{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){return{data:t}})).then((function(e){e.data.json().then((function(e){console.log("getBlockChain:",e),t.list=e.Data,t.listLoading=!1}))}));case 2:case"end":return e.stop()}}),e)})))()}}}),i=o,s=(n("41fb"),n("2877")),c=Object(s["a"])(i,a,l,!1,null,null,null);e["default"]=c.exports},fb93:function(t,e,n){}}]);