import{_ as e}from"./kui-image.7f08b25c.js";import{x as a,r as t,c as o,d as i,w as l,G as n,H as r,I as u,m as c,q as s,f as d,h as k,B as g,s as m,g as f,C as p,j as _,a as h,b as C,n as v,p as b,e as x,i as y,J as w}from"./index.4769b127.js";import{_ as j}from"./kui-button.fcbf8c10.js";import{_ as T}from"./kui-text.d338fb2c.js";import{_ as B,a as M}from"./kui-collapse.1f837ac4.js";import{_ as R}from"./kui-popup.6cc4c5f3.js";import{_ as I}from"./kui-page.12878643.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";import"./kui-icons.3c452229.js";import"./element.bd39bbbe.js";import"./kui-spin.40ca1a3c.js";import"./kui-overlay.4319bfe8.js";const $=a({__name:"kui-tabs",props:{list:{default:[]},circle:{type:Boolean,default:!1},backgroundColor:{default:""},inactiveColor:{default:""},activeColor:{default:""},activeBackgroundColor:{default:""},duration:{default:400},mode:{default:"light"}},setup(e,{expose:a}){const h=e,{proxy:C}=f(),v=C.$theme,b=t({data:[],animationData:{},animation:{},active:!1,index:0,selectRect:[],currentTab:null,mode:h.mode,backgroundColor:h.backgroundColor?h.backgroundColor:v.colors.light.grey[2],activeBackgroundColor:h.activeBackgroundColor?h.activeBackgroundColor:v.colors.light.grey[2],activeColor:h.activeColor?h.activeColor:v.colors.light.grey[9],inactiveColor:h.inactiveColor?h.inactiveColor:v.colors.light.grey[5]}),x=()=>{b.backgroundColor="light"==b.mode?h.backgroundColor:h.backgroundColor?uni.kviewUIColor.generate(h.backgroundColor,{dark:!0,list:!1,index:6}):v.colors.dark.grey[3],b.activeBackgroundColor="light"==b.mode?h.activeBackgroundColor:h.activeBackgroundColor?uni.kviewUIColor.generate(h.activeBackgroundColor,{dark:!0,list:!1,index:6}):v.colors.dark.grey[2],b.activeColor="light"==b.mode?h.activeColor:h.activeColor?uni.kviewUIColor.generate(h.activeColor,{dark:!0,list:!1,index:6}):v.colors.dark.grey[8],b.inactiveColor="light"==b.mode?h.inactiveColor:h.inactiveColor?uni.kviewUIColor.generate(h.inactiveColor,{dark:!0,list:!1,index:6}):v.colors.dark.grey[6]};h.list.forEach(((e,a)=>{let t=0==a;b.data.push({id:a,txt:e,active:t,left:0,right:0}),setTimeout((()=>{__f__("log","at components/kui-tabs/kui-tabs.vue:146",b.selectRect[a],2222),b.data[a].left=b.selectRect[a].left,b.data[a].right=b.selectRect[a].right}),600),t&&(b.currentTab={id:a,txt:e,active:t,left:0,right:0}),x()}));const y=uni.createSelectorQuery().in(C);setTimeout((()=>{y.selectAll(".tabs-item").boundingClientRect((e=>{b.selectRect=e,b.selectRect=[...b.selectRect]})).exec()}),300),uni.$on("changeMode",(e=>{b.mode=e,x()}));return a({wxsUpdateData:e=>{let a=e.index;b.data.forEach(((e,t)=>{e.active=t==a}))}}),(a,t)=>{const f=p,C=_;return o(),i(C,{class:c(["kui-w-120 kui-h-8 kui-bg-gray-200 kui-flex kui-justify-between kui-p-2 kui-rounded kui-flex kui-items-center",e.circle?"kui-rounded-full":""]),style:s({backgroundColor:b.backgroundColor})},{default:l((()=>[(o(!0),n(u,null,r(b.data,((a,t)=>(o(),i(C,{key:t,class:c(["kui-p-2 kui-m-px kui-rounded tabs-item kui-z-10",e.circle?"kui-rounded-full":""]),onClick:e=>{var t;(t=a).active||(b.data.forEach(((e,a)=>{e.active=e.id==t.id})),b.active=!0,b.animation=uni.createAnimation({duration:h.duration,timingFunction:"ease"}),b.animation.translateX(t.left-23).step(),b.animationData=b.animation.export(),b.index=t.id,setTimeout((()=>{b.active=!1,b.currentTab=t}),200))}},{default:l((()=>[d(f,{class:c(a.active?"":"kui-text-gray-500"),style:s({color:a.active?b.activeColor:b.inactiveColor})},{default:l((()=>[k(g(a.txt),1)])),_:2},1032,["class","style"])])),_:2},1032,["class","onClick"])))),128)),b.currentTab?(o(),i(C,{key:0,animation:b.animationData,class:c(["kui-bg-white kui-shadow-md kui-p-2 kui-rounded tabs-item kui-absolute",e.circle?"kui-rounded-full":""]),style:s({backgroundColor:b.activeBackgroundColor})},{default:l((()=>[d(f,{class:"kui-text-transparent"},{default:l((()=>[k(g(b.currentTab.txt),1)])),_:1})])),_:1},8,["animation","class","style"])):m("",!0)])),_:1},8,["class","style"])}}});const D={change:function(e,a){a.selectComponent(".tabs-item").setStyle({transform:"translateX("+(e.currentTarget.offsetLeft-23)+"px)","transition-duration":e.currentTarget.dataset.duration+"ms"}),a.callMethod("wxsUpdateData",{index:e.currentTarget.dataset.id})}},S=e=>{e.$wxs||(e.$wxs=[]),e.$wxs.push("tabs"),e.mixins||(e.mixins=[]),e.mixins.push({beforeCreate(){this.tabs=D}})};S($);const E=U({setup(){const{proxy:e}=f(),a=t({title:"Hello",mode:"light",accordion:!1,popupShow:!1});h((e=>{__f__("log","at pages/test/index.vue:100",uni.kviewUIColor.generate("#00BC79",{dark:!0,list:!1,index:0}))}));let o=!1;C((()=>{o&&b("changeMode",a.mode)}));return{data:a,changeMode:()=>{a.mode="light"==a.mode?"dark":"light",o=!0,uni.$emit("changeMode",a.mode)},changeShade:()=>{v((()=>{__f__("log","at pages/test/index.vue:124",e.$refs.popup.open())}))},changeMode1:()=>{a.accordion=!a.accordion},onTaped:()=>{__f__("log","at pages/test/index.vue:140",22222),uni.navigateTo({url:"/pages/theme/theme"})},onChange:e=>{__f__("log","at pages/test/index.vue:147",e)}}}},[["render",function(a,t,n,r,u,c){const s=x(y("kui-image"),e),g=x(y("kui-button"),j),m=x(y("kui-text"),T),f=w,h=_,C=x(y("kui-tabs"),$),v=p,b=x(y("kui-collapse-panel"),B),U=x(y("kui-collapse"),M),D=x(y("kui-popup"),R),S=x(y("kui-page"),I);return o(),i(S,{ref:"pageL",customHeader:!0,mode:r.data.mode},{body:l((()=>[d(h,{class:"kui-flex kui-flex-col kui-items-center kui-justify-center kui-pt-10 kui-pb-10"},{default:l((()=>[d(s,{src:"/static/kviewui.png",radius:10,width:440,height:110}),d(h,{class:"kui-mt-12"},{default:l((()=>[d(g,{mode:r.data.mode},{default:l((()=>[k("主要按钮")])),_:1},8,["mode"]),d(g,{mode:r.data.mode,type:"secondary"},{default:l((()=>[k("次要按钮")])),_:1},8,["mode"]),d(g,{mode:r.data.mode,type:"dashed"},{default:l((()=>[k("虚线按钮")])),_:1},8,["mode"]),d(g,{mode:r.data.mode,type:"outline"},{default:l((()=>[k("线形按钮")])),_:1},8,["mode"]),d(h,{class:"kui-mt-12"},{default:l((()=>[d(m,null,{default:l((()=>[k("暗黑模式：")])),_:1}),d(f,{checked:!1,onChange:r.changeMode},null,8,["onChange"])])),_:1}),d(h,{class:"kui-mt-12"},{default:l((()=>[d(m,null,{default:l((()=>[k("打开遮罩：")])),_:1}),d(f,{checked:!1,onChange:r.changeShade},null,8,["onChange"])])),_:1}),d(h,{class:"kui-mt-12"},{default:l((()=>[d(h,{onClick:r.onTaped},{default:l((()=>[d(g,null,{default:l((()=>[k("自定义主题生成器")])),_:1})])),_:1},8,["onClick"])])),_:1}),d(h,{class:"kui-mt-12"},{default:l((()=>[d(C,{list:["分类1","分类2"]})])),_:1})])),_:1})])),_:1}),d(h,{class:"kui-mt-12"},{default:l((()=>[d(h,{class:"kui-mt-12 kui-p-2"},{default:l((()=>[d(m,null,{default:l((()=>[k("手风琴效果：")])),_:1}),d(f,{checked:!1,onChange:r.changeMode1},null,8,["onChange"])])),_:1}),d(U,{accordion:r.data.accordion,onChange:r.onChange},{default:l((()=>[d(b,{name:"a",disabled:!1,"custom-arrow-icon":!0},{default:l((()=>[d(h,{class:""},{default:l((()=>[d(v,null,{default:l((()=>[k("自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容")])),_:1})])),_:1})])),_:1}),d(b,{name:"b"},{default:l((()=>[d(h,{class:""},{default:l((()=>[d(v,null,{default:l((()=>[k("自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容自定义内容")])),_:1})])),_:1})])),_:1})])),_:1},8,["accordion","onChange"])])),_:1}),d(h,{class:"kui-mt-10"})])),default:l((()=>[d(D,{ref:"popup"},null,512)])),_:1},8,["mode"])}],["__scopeId","data-v-a3d683f7"]]);export{E as default};
