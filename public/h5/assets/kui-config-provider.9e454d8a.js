import{E as e,r as o,G as t,p as r,H as a}from"./index.6e0bac9a.js";import{c as i}from"./kui-page.9f67228f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";var p=s(e({name:"kui-config-provider",props:{mode:{type:String,default:"light"},color:{type:String,default:""},fontSize:{type:String,default:""}},emits:["update:mode"],setup(e,{slots:a,emit:s}){let p=o({mode:e.mode,color:e.color,fontSize:e.fontSize});r(i,p),t("changeMode",(e=>{p.mode=e,r(i,p)}))}}),[["render",function(e,o,t,r,i,s){return a(e.$slots,"default")}]]);export{p as _};