import{_ as e}from"./kui-icons.3c452229.js";import{v as o,x as t,r as l,k as i,g as r,e as s,i as a,c as d,d as u,w as c,f as n,m as f,z as k,s as g,q as m,h as p,B as h,j as y,C as b}from"./index.4769b127.js";import{c as C}from"./kui-page.12878643.js";import{_ as $}from"./_plugin-vue_export-helper.cdc0426e.js";const _=$(t({name:"kui-cell",props:{title:{type:String,default:""},titleSize:{type:Number,default:0},titleWeight:{type:Number,default:400},color:{type:String,default:""},subTitle:{type:String,default:""},subTitleColor:{type:String,default:""},desc:{type:String,default:""},descColor:{type:String,default:""},radius:{type:Number,default:10},clickStatus:{type:Boolean,default:!0},showRightIcon:{type:Boolean,default:!0},mode:{type:String,default:()=>{var e,t;return null!=(t=null==(e=o(C,void 0))?void 0:e.mode)?t:"light"}},url:{type:String,default:""},icon:{type:String,default:""},center:{type:Boolean,default:!1}},emits:["click"],setup(e,t){const s=`kUI_${Math.ceil(1e6*(new Date).getTime()).toString(36)}`,{proxy:a}=r(),d=a.$theme,u=l({id:s,topRadius:e.radius,bottomRadius:e.radius,isBorder:!1,marginBottom:0,titleSize:e.titleSize?e.titleSize:d.size.fonts.lg,titleWeight:e.titleWeight,color:e.color?e.color:d.colors[e.mode].grey[8],subTitleColor:e.subTitleColor?e.subTitleColor:d.colors[e.mode].grey[7],descColor:e.descColor?e.descColor:d.colors[e.mode].grey[4],mode:e.mode,backgroundColor:"#FFFFFF"}),c=o("cell-group"),n=(o=0)=>{u.color="light"===u.mode?e.color?e.color:d.colors[e.mode].grey[8]:e.color?uni.kviewUIColor.generate(e.color,{dark:!0,list:!1,index:6}):d.colors.dark.grey[9],u.backgroundColor="light"===u.mode?"#FFFFFF":d.colors.dark.grey[2],u.subTitleColor="light"===u.mode?e.color?e.color:d.colors[e.mode].grey[7]:e.color?uni.kviewUIColor.generate(e.color,{dark:!0,list:!1,index:7}):d.colors.dark.grey[7],u.descColor="light"===u.mode?e.descColor?e.descColor:d.colors[e.mode].grey[4]:e.descColor?`hsl(${d.colors.darken(e.descColor).color[0]},${d.colors.darken(e.descColor).color[1]}%,${d.colors.darken(e.descColor).color[2]}%)`:d.colors.dark.grey[4]};i((()=>{c&&-1===c.childrens.indexOf(u)&&c.childrens.push(u),n(),uni.$on("changeMode",(e=>{u.mode=e,n()}))}));return{theme:d,data:u,tapstart:()=>{e.clickStatus&&(u.backgroundColor="light"==u.mode?d.colors[u.mode].grey[2]:d.colors[u.mode].grey[3])},tapend:()=>{n()},onClick:()=>{e.url?e.url.indexOf("http")>-1?location.href=e.url:uni.navigateTo({url:e.url,fail:e=>{__f__("warn","at components/kui-cell/kui-cell.vue:193",`Cell Debug Info: ${e.errMsg}`)}}):t.emit("click")}}}}),[["render",function(o,t,l,i,r,C){const $=s(a("kui-icons"),e),_=y,x=b;return d(),u(_,{class:"kui-cell kui-bg-white kui-pt-3 kui-pr-3 kui-pl-3",id:o.data.id,style:m({borderTopLeftRadius:`${o.data.topRadius}rpx`,borderTopRightRadius:`${o.data.topRadius}rpx`,borderBottomLeftRadius:`${o.data.isBorder?0:o.data.bottomRadius}rpx`,borderBottomRightRadius:`${o.data.isBorder?0:o.data.bottomRadius}rpx`,backgroundColor:o.data.backgroundColor,marginBottom:`${o.data.marginBottom}rpx`}),onTouchstart:o.tapstart,onTouchend:o.tapend,onClick:o.onClick},{default:c((()=>[n(_,{class:f(["kui-flex kui-justify-between kui-w-full",o.center?"kui-items-center":""])},{default:c((()=>[n(_,{class:"kui-flex kui-items-center kui-w-full"},{default:c((()=>[k(o.$slots,"left-icon",{},(()=>[o.icon?(d(),u(_,{key:0,class:"kui-mr-1"},{default:c((()=>[n($,{type:o.icon,size:50,color:"#999"},null,8,["type"])])),_:1})):g("",!0)]),!0),k(o.$slots,"content",{},(()=>[n(_,{class:"kui-flex kui-flex-col kui-w-full"},{default:c((()=>[n(x,{class:"",style:m({fontSize:`${o.data.titleSize}${o.theme.size.fontUnit}`,fontWeight:o.data.titleWeight,lineHeight:`${o.theme.size.fonts.lg+o.theme.size.lineBase}${o.theme.size.fontUnit}`,color:o.data.color})},{default:c((()=>[p(h(o.title),1)])),_:1},8,["style"]),o.subTitle?(d(),u(x,{key:0,class:"kui-mt-1",style:m({fontSize:`${o.theme.size.fonts.base}${o.theme.size.fontUnit}`,lineHeight:`${o.theme.size.fonts.base+o.theme.size.lineBase}${o.theme.size.fontUnit}`,color:o.data.subTitleColor})},{default:c((()=>[p(h(o.subTitle),1)])),_:1},8,["style"])):g("",!0)])),_:1})]),!0)])),_:3}),n(_,{class:f(["kui-h-auto kui-leading-none kui-flex kui-flex kui-justify-end",o.center?"kui-items-center":""])},{default:c((()=>[n(x,{class:"kui-mr-1",style:m({fontSize:`${o.theme.size.fonts.lg}${o.theme.size.fontUnit}`,color:o.data.descColor})},{default:c((()=>[p(h(o.desc),1)])),_:1},8,["style"]),o.showRightIcon?(d(),u(_,{key:0,class:"kui-flex kui-flex-col kui-justify-center"},{default:c((()=>[k(o.$slots,"right-icon",{},(()=>[n($,{type:"keyboard_arrow_right",size:44,color:"#999",weight:100})]),!0)])),_:3})):g("",!0)])),_:3},8,["class"])])),_:3},8,["class"]),n(_,{class:"kui-pt-3"},{default:c((()=>[o.data.isBorder?(d(),u(_,{key:0,class:"kui-border-0 kui-border-solid kui-border-b-rpx kui-border-gray-200"})):g("",!0)])),_:1})])),_:3},8,["id","style","onTouchstart","onTouchend","onClick"])}],["__scopeId","data-v-fd65961f"]]);export{_};
