(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d38e"],{f729:function(l,e,a){"use strict";a.r(e);var i=function(){var l=this,e=l.$createElement,a=l._self._c||e;return a("div",{staticClass:"app-container"},[a("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"关键词"},model:{value:l.filterText,callback:function(e){l.filterText=e},expression:"filterText"}}),a("el-tree",{ref:"tree2",staticClass:"filter-tree",attrs:{data:l.data,props:l.defaultProps,"filter-node-method":l.filterNode,"default-expand-all":""}})],1)},t=[],d=(a("4de4"),{data:function(){return{filterText:"",data:[{id:1,label:"系统功能",children:[{id:4,label:"1：交易表单",children:[{id:9,label:"· 所有交易记录：全部交易哈希，交易双方地址，交易额，交易状态，交易时间✅"},{id:10,label:"· 单条交易信息：交易哈希，状态，所在块编号，交易对象地址，交易额，可视化交易追踪✅"},{id:11,label:"· 地址信息：地址交易笔数，地址余额，地址角色，地址全部交易可视化追踪，地址交易记录表✅"},{id:12,label:"· 区块信息：区块编号，创建时间，大小，交易数量，确认数，相邻区块，总交易额，区块包含全部交易记录✅"}]},{id:8,label:"2：角色控制，分角色登录、查看信息✅"},{id:8,label:"3：所有交易记录，区块信息，地址信息可视化✅"},{id:8,label:"4：各行业征信指标可视化展示✅"},{id:8,label:"5：征信模型可视化展示（以台州为例）✅"}]},{id:1,label:"监管者———可信交易平台监管方",children:[{id:4,label:"1：单条交易信息状态可视化✅"},{id:8,label:"2：所有交易记录，区块信息，地址信息可视化✅"},{id:8,label:"3：各行业征信指标可视化展示✅"},{id:8,label:"4：征信模型的可视化图示✅"}]},{id:2,label:"消费者————可信交易平台的最广泛使用者",children:[{id:5,label:"1：浏览商品，购物，查看交易信息✅"},{id:6,label:"2：消费者视角的交易信息可视化⏳"}]},{id:3,label:"商家———可信交易平台服务提供方",children:[{id:7,label:"1：管理商品、库存、订单状态⏳"},{id:8,label:"2：商家视角的商品信息、交易信息可视化⏳"}]},{id:9,label:"银行———第三方交易服务提供方",children:[{id:10,label:"1：查看征信模型可视化图示✅"},{id:11,label:"2：银行视角的交易信息，转账记录⏳"}]}],defaultProps:{children:"children",label:"label"}}},watch:{filterText:function(l){this.$refs.tree2.filter(l)}},methods:{filterNode:function(l,e){return!l||-1!==e.label.indexOf(l)}}}),r=d,n=a("2877"),b=Object(n["a"])(r,i,t,!1,null,null,null);e["default"]=b.exports}}]);