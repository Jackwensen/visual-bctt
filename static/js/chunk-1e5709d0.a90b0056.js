(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5709d0"],{"3de2":function(e,t,a){},"4cb8":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:0}},[a("el-col",{attrs:{span:22,offset:1,xs:24}},[a("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"发起地址"}},[a("el-input",{model:{value:e.user.account_address,callback:function(t){e.$set(e.user,"account_address",t)},expression:"user.account_address"}})],1),a("el-form-item",{attrs:{label:"接收地址"}},[a("el-input",{model:{value:e.to,callback:function(t){e.to=t},expression:"to"}})],1),a("el-form-item",{attrs:{label:"私钥"}},[a("el-input",{model:{value:e.user.private_key,callback:function(t){e.$set(e.user,"private_key",t)},expression:"user.private_key"}})],1),a("el-form-item",{attrs:{label:"公钥"}},[a("el-input",{model:{value:e.user.public_key,callback:function(t){e.$set(e.user,"public_key",t)},expression:"user.public_key"}})],1),a("el-form-item",{attrs:{label:"金额"}},[a("el-input",{model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("el-form-item",{attrs:{label:"合约"}},[a("el-input",{model:{value:e.contract,callback:function(t){e.contract=t},expression:"contract"}})],1),a("el-form-item",{attrs:{label:"方法"}},[a("el-input",{model:{value:e.method,callback:function(t){e.method=t},expression:"method"}})],1),a("el-form-item",{attrs:{label:"dest"}},[a("el-input",{model:{value:e.dest,callback:function(t){e.dest=t},expression:"dest"}})],1)],1),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.args}},[a("el-form-item",{attrs:{label:"合约参数："}}),a("el-form-item",{attrs:{label:"name"}},[a("el-input",{model:{value:e.args.name,callback:function(t){e.$set(e.args,"name",t)},expression:"args.name"}})],1),a("el-form-item",{attrs:{label:"year"}},[a("el-input",{model:{value:e.args.year,callback:function(t){e.$set(e.args,"year",t)},expression:"args.year"}})],1)],1),a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("发起交易")])],1)],1)],1)},l=[],o=a("5530"),n=(a("d3b7"),a("2f62")),r={data:function(){return{labelPosition:"left",user:{},to:"",contract:"",value:"",method:"",dest:"",args:{name:"",year:""}}},computed:Object(o["a"])({},Object(n["b"])(["private_key","public_key","account_address"])),created:function(){this.getParams()},methods:{onSubmit:function(){var e=this;fetch("http://localhost:9999/postTran",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:this.user.account_address,private_key:this.user.private_key,public_key:this.user.public_key,to:this.to,contract:this.contract,value:this.value,method:this.method,dest:this.dest,args:this.args})}).then((function(e){return{data:e}})).then((function(t){t.data.json().then((function(e){console.log("postContract:",e)})),e.$message({message:"发起成功",type:"success"})}))},getParams:function(){this.user={private_key:this.private_key,public_key:this.public_key,account_address:this.account_address}}}},i=r,c=(a("d204"),a("2877")),u=Object(c["a"])(i,s,l,!1,null,null,null);t["default"]=u.exports},d204:function(e,t,a){"use strict";a("3de2")}}]);