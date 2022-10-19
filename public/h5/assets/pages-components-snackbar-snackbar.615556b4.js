import{_ as t}from"./kui-cell.7dd07a03.js";import{E as o,r as e,M as a,L as s,d as n,f as l,a7 as i,a8 as c,o as u,c as p,w as r,a as d,H as h,l as k,b as m,I as f,m as w,i as S}from"./index.6e0bac9a.js";import{r as y,_ as g}from"./kui-page.9f67228f.js";import{_ as C}from"./kui-cell-group.96f4bfae.js";import{_ as b}from"./kui-space.b29851da.js";import{_}from"./kui-text.66024d1c.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as v}from"./kui-button.09ff88a3.js";import"./kui-icons.87a80e4b.js";import"./kui-spin.741eeb84.js";var $=x(o({name:"kui-snackbar",props:{type:{type:String,default:"primary"},show:{type:Boolean,default:!1},position:{type:String,default:"top"},duration:{type:Number,default:3e3},content:{type:String,default:""},contentCenter:{type:Boolean,default:!0},className:{type:String,default:""},loadingType:{type:String,default:""},loadingSize:{type:String,default:"normal"},lockScroll:{type:Boolean,default:!1},forbidClick:{type:Boolean,default:!1},backgroundColor:{type:String,default:""},color:{type:String,default:"white"},plain:{type:Boolean,default:!1},top:{type:Number,default:0},bottom:{type:Number,default:0},full:{type:Boolean,default:!0},opacity:{type:Number,default:1},actionSlot:{type:Boolean,default:!1}},emits:["update:show","closed"],setup(t,o){let l=null;const{proxy:i}=n(),c=i.$theme,u=e({show:t.show,animationName:null,color:t.color,top:null,bottom:null,type:t.type,full:t.full,opacity:t.opacity}),p=a((()=>{const o=e({});return o.fontSize=`${c.size.fonts.md}px`,u.type=c.colors.light[t.type]?t.type:"primary",o.backgroundColor=c.colors.light[u.type][5],t.backgroundColor?o.backgroundColor=t.backgroundColor:o.backgroundImage=`linear-gradient(to right, ${c.colors.light[u.type][5]}, ${c.colors.light[u.type][4]})`,t.plain&&(o.backgroundImage="",o.backgroundColor=c.colors.light[u.type][1],u.color=c.colors.light[u.type][5]),u.full||(o.borderRadius="10rpx"),u.opacity&&(o.opacity=u.opacity),o})),r=(t,o)=>{u.animationName=`slide-${o}-${t}`},d=()=>{l&&(clearTimeout(l),l=null),r(t.position,"in"),t.duration&&(l=setTimeout((()=>{r(t.position,"out"),setTimeout((()=>{o.emit("update:show",!1),o.emit("closed"),r(t.position,"in")}),200)}),t.duration))};return s((()=>[t.show,t.top,t.full,t.position]),(o=>{o[0]&&d(),o[1]&&(u.top=o[1]),u.full=o[2],((o="top")=>{"bottom"===o&&(u.bottom=`${t.bottom}px`,u.top=null),"top"===o&&(u.top=`${t.top}px`,u.bottom=null)})(o[3])})),{rootStyle:p,state:u}}}),[["render",function(t,o,e,a,s,n){const g=y(l("kui-text"),_),C=S;return i((u(),p(C,{class:k(["kui-fixed kui-w-full kui-inset-l-0 kui-inset-r-0 kui-box-border",[t.state.animationName,t.state.full?"":"kui-py-8 kui-px-12"]]),style:w({top:t.state.top,bottom:t.state.bottom})},{default:r((()=>[d(C,{class:"kui-py-3 kui-w-full",style:w(t.rootStyle)},{default:r((()=>[h(t.$slots,"default",{},(()=>[d(C,{class:k(["kui-h-full kui-flex kui-flex-col kui-justify-center kui-px-3",[t.contentCenter?"kui-items-center":""]])},{default:r((()=>[d(C,null,{default:r((()=>[d(g,{color:t.state.color},{default:r((()=>[m(f(t.content),1)])),_:1},8,["color"])])),_:1}),d(C,{class:k(["kui-w-full kui-flex kui-justify-end",[t.$slots.action||t.actionSlot?"kui-mt-3":""]])},{default:r((()=>[h(t.$slots,"action",{},void 0,!0)])),_:3},8,["class"])])),_:3},8,["class"])]),!0)])),_:3},8,["style"])])),_:3},8,["class","style"])),[[c,t.show]])}],["__scopeId","data-v-1cc97954"]]);var j=x({setup(){const t={state:e({show:!1,content:"基本用法",top:0}),methods:{onClick(){t.state.top=44,t.state.show=!0}}},o={state:e({show:!1,content:"",type:"primary",top:0}),methods:{onClick(t,e){o.state.top=44,o.state.show=!0,o.state.content=e,o.state.type=t}}},a={state:e({show:!1,content:"",type:"primary",top:0}),methods:{onClick(t,o){a.state.top=44,a.state.show=!0,a.state.content=o,a.state.type=t}}},s={state:e({show:!1,content:"非通栏类型",top:0}),methods:{onClick(){s.state.top=44,s.state.show=!0}}},n={state:e({show:!1,content:"自定义背景色和字体颜色",top:0,backgroundColor:"rgba(0,0,0,0.2)",color:"rgba(0,0,0,1)"}),methods:{onClick(){n.state.top=44,n.state.show=!0}}},l={state:e({show:!1,content:"自定义动作按钮",top:0,backgroundColor:"rgba(0,0,0,1)",contentCenter:!1,full:!0}),methods:{onClick(t=!0,o="自定义动作按钮-通栏类型"){l.state.top=44,l.state.show=!0,l.state.full=t,l.state.content=o}}},i={state:e({show:!1,content:"自定义位置",bottom:0,top:0,position:"bottom",full:!0}),methods:{onClick(t="bottom",o="自定义动作按钮-通栏类型",e=0,a=!0){i.state.top=44,i.state.show=!0,i.state.position=t,i.state.bottom=0,i.state.content=o,i.state.full=a}}},c={state:e({show:!1,content:"自定义时长 5s",duration:5,durationS:5,top:0,timer:null}),methods:{onClick(){c.state.top=44,c.state.show=!0,c.state.timer=setInterval((()=>{c.state.durationS--,c.state.content=`自定义时长 ${c.state.durationS}s`}),1e3)},closed(){clearInterval(c.state.timer),c.state.durationS=5,c.state.content=`自定义时长 ${c.state.durationS}s`}}};return{baseState:t,typeState:o,plainState:a,noFullState:s,cusState:n,verState:l,positionState:i,durationState:c}}},[["render",function(o,e,a,s,n,i){const c=y(l("kui-cell"),t),h=y(l("kui-cell-group"),C),k=y(l("kui-space"),b),f=S,w=y(l("kui-page"),g),_=y(l("kui-snackbar"),$),x=y(l("kui-button"),v);return u(),p(f,{class:"kui-w-full kui-h-full"},{default:r((()=>[d(w,{"custom-header":!1},{body:r((()=>[d(f,{class:"kui-w-full kui-h-full kui-py-5"},{default:r((()=>[d(k,{gap:[30,0],direction:"column"},{default:r((()=>[d(h,{title:s.baseState.state.content},{default:r((()=>[d(c,{title:"基本用法","show-right-icon":!1,onClick:s.baseState.methods.onClick},null,8,["onClick"])])),_:1},8,["title"]),d(h,{title:"消息类型"},{default:r((()=>[d(c,{title:"主要通知","show-right-icon":!1,onClick:e[0]||(e[0]=t=>s.typeState.methods.onClick("info","主要通知"))}),d(c,{title:"成功通知","show-right-icon":!1,onClick:e[1]||(e[1]=t=>s.typeState.methods.onClick("success","成功通知"))}),d(c,{title:"警告通知","show-right-icon":!1,onClick:e[2]||(e[2]=t=>s.typeState.methods.onClick("warning","警告通知"))}),d(c,{title:"危险通知","show-right-icon":!1,onClick:e[3]||(e[3]=t=>s.typeState.methods.onClick("danger","危险通知"))})])),_:1}),d(h,{title:"朴素类型"},{default:r((()=>[d(c,{title:"主要通知","show-right-icon":!1,onClick:e[4]||(e[4]=t=>s.plainState.methods.onClick("info","主要通知"))}),d(c,{title:"成功通知","show-right-icon":!1,onClick:e[5]||(e[5]=t=>s.plainState.methods.onClick("success","成功通知"))}),d(c,{title:"警告通知","show-right-icon":!1,onClick:e[6]||(e[6]=t=>s.plainState.methods.onClick("warning","警告通知"))}),d(c,{title:"危险通知","show-right-icon":!1,onClick:e[7]||(e[7]=t=>s.plainState.methods.onClick("danger","危险通知"))})])),_:1}),d(h,{title:"非通栏类型"},{default:r((()=>[d(c,{title:"非通栏类型","show-right-icon":!1,onClick:s.noFullState.methods.onClick},null,8,["onClick"])])),_:1}),d(h,{title:"自定义样式"},{default:r((()=>[d(c,{title:"自定义背景色和字体颜色","show-right-icon":!1,onClick:s.cusState.methods.onClick},null,8,["onClick"])])),_:1}),d(h,{title:"垂直排列"},{default:r((()=>[d(c,{title:"自定义动作按钮-通栏类型","show-right-icon":!1,onClick:s.verState.methods.onClick},null,8,["onClick"]),d(c,{title:"自定义动作按钮-非通栏类型","show-right-icon":!1,onClick:e[8]||(e[8]=t=>s.verState.methods.onClick(!1,"自定义动作按钮-非通栏类型"))})])),_:1}),d(h,{title:"自定义位置"},{default:r((()=>[d(c,{title:"自定义位置-下-通栏","show-right-icon":!1,onClick:e[9]||(e[9]=t=>s.positionState.methods.onClick("bottom","自定义位置-下-通栏"))}),d(c,{title:"自定义位置-下-非通栏","show-right-icon":!1,onClick:e[10]||(e[10]=t=>s.positionState.methods.onClick("bottom","自定义位置-下-非通栏",0,!1))}),d(c,{title:"自定义位置-上-通栏","show-right-icon":!1,onClick:e[11]||(e[11]=t=>s.positionState.methods.onClick("top","自定义位置-上-通栏"))}),d(c,{title:"自定义位置-上-非通栏","show-right-icon":!1,onClick:e[12]||(e[12]=t=>s.positionState.methods.onClick("top","自定义位置-上-非通栏",0,!1))})])),_:1}),d(h,{title:"自定义时长"},{default:r((()=>[d(c,{title:"自定义时长","show-right-icon":!1,onClick:s.durationState.methods.onClick},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),d(_,{show:s.baseState.state.show,"onUpdate:show":e[13]||(e[13]=t=>s.baseState.state.show=t),content:s.baseState.state.content,top:s.baseState.state.top},null,8,["show","content","top"]),d(_,{show:s.typeState.state.show,"onUpdate:show":e[14]||(e[14]=t=>s.typeState.state.show=t),content:s.typeState.state.content,type:s.typeState.state.type,top:s.typeState.state.top},null,8,["show","content","type","top"]),d(_,{show:s.plainState.state.show,"onUpdate:show":e[15]||(e[15]=t=>s.plainState.state.show=t),content:s.plainState.state.content,type:s.plainState.state.type,top:s.plainState.state.top,plain:""},null,8,["show","content","type","top"]),d(_,{show:s.noFullState.state.show,"onUpdate:show":e[16]||(e[16]=t=>s.noFullState.state.show=t),content:s.noFullState.state.content,top:s.noFullState.state.top,"background-color":"#333333",full:!1,opacity:.8},null,8,["show","content","top","opacity"]),d(_,{show:s.cusState.state.show,"onUpdate:show":e[17]||(e[17]=t=>s.cusState.state.show=t),content:s.cusState.state.content,top:s.cusState.state.top,"background-color":s.cusState.state.backgroundColor,color:s.cusState.state.color},null,8,["show","content","top","background-color","color"]),d(_,{show:s.verState.state.show,"onUpdate:show":e[18]||(e[18]=t=>s.verState.state.show=t),content:s.verState.state.content,top:s.verState.state.top,"background-color":s.verState.state.backgroundColor,"content-center":!1,full:s.verState.state.full,"action-slot":""},{action:r((()=>[d(x,{type:"primary",shape:"square",size:"small"},{default:r((()=>[m("关闭")])),_:1})])),_:1},8,["show","content","top","background-color","full"]),d(_,{show:s.positionState.state.show,"onUpdate:show":e[19]||(e[19]=t=>s.positionState.state.show=t),content:s.positionState.state.content,bottom:s.positionState.state.bottom,top:s.positionState.state.top,position:s.positionState.state.position,full:s.positionState.state.full},null,8,["show","content","bottom","top","position","full"]),d(_,{show:s.durationState.state.show,"onUpdate:show":e[20]||(e[20]=t=>s.durationState.state.show=t),content:s.durationState.state.content,top:s.durationState.state.top,duration:1e3*s.durationState.state.duration,onClosed:s.durationState.methods.closed},null,8,["show","content","top","duration","onClosed"])])),_:1})}]]);export{j as default};
