import{_ as g,e as w,$ as U,r as n,o as C,p as A,w as t,b as e,a as P,d as r}from"./app.2a237a72.js";const h=P("span",{class:"text-gray-500"},"-",-1),B=r("Create"),N=r("Cancel"),S=w({name:"element-plus",setup(z){const l=U({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),c=()=>{console.log("submit!")};return(O,o)=>{const m=n("el-input"),d=n("el-form-item"),i=n("el-option"),f=n("el-select"),V=n("el-date-picker"),u=n("el-col"),b=n("el-time-picker"),y=n("el-switch"),s=n("el-checkbox"),v=n("el-checkbox-group"),p=n("el-radio"),x=n("el-radio-group"),_=n("el-button"),k=n("el-form");return C(),A(k,{model:l,"label-width":"120px"},{default:t(()=>[e(d,{label:"Activity name"},{default:t(()=>[e(m,{modelValue:l.name,"onUpdate:modelValue":o[0]||(o[0]=a=>l.name=a)},null,8,["modelValue"])]),_:1}),e(d,{label:"Activity zone"},{default:t(()=>[e(f,{modelValue:l.region,"onUpdate:modelValue":o[1]||(o[1]=a=>l.region=a),placeholder:"please select your zone"},{default:t(()=>[e(i,{label:"Zone one",value:"shanghai"}),e(i,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Activity time"},{default:t(()=>[e(u,{span:11},{default:t(()=>[e(V,{modelValue:l.date1,"onUpdate:modelValue":o[2]||(o[2]=a=>l.date1=a),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(u,{span:2,class:"text-center"},{default:t(()=>[h]),_:1}),e(u,{span:11},{default:t(()=>[e(b,{modelValue:l.date2,"onUpdate:modelValue":o[3]||(o[3]=a=>l.date2=a),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{label:"Instant delivery"},{default:t(()=>[e(y,{modelValue:l.delivery,"onUpdate:modelValue":o[4]||(o[4]=a=>l.delivery=a)},null,8,["modelValue"])]),_:1}),e(d,{label:"Activity type"},{default:t(()=>[e(v,{modelValue:l.type,"onUpdate:modelValue":o[5]||(o[5]=a=>l.type=a)},{default:t(()=>[e(s,{label:"Online activities",name:"type"}),e(s,{label:"Promotion activities",name:"type"}),e(s,{label:"Offline activities",name:"type"}),e(s,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Resources"},{default:t(()=>[e(x,{modelValue:l.resource,"onUpdate:modelValue":o[6]||(o[6]=a=>l.resource=a)},{default:t(()=>[e(p,{label:"Sponsor"}),e(p,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"Activity form"},{default:t(()=>[e(m,{modelValue:l.desc,"onUpdate:modelValue":o[7]||(o[7]=a=>l.desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(_,{type:"primary",onClick:c},{default:t(()=>[B]),_:1}),e(_,null,{default:t(()=>[N]),_:1})]),_:1})]),_:1},8,["model"])}}});var j=g(S,[["__file","element-plus.vue"]]);export{j as default};