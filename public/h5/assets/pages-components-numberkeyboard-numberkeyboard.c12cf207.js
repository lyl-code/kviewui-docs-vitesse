import{r as t,o as e,c as o,w as a,a as s,b as n,$ as i,f as l,i as r}from"./index.6e0bac9a.js";import{_ as m}from"./kui-text.66024d1c.js";import{r as c,_ as d}from"./kui-page.9f67228f.js";import{_ as u}from"./kui-switch.2a261550.js";import{_ as k}from"./kui-cell.7dd07a03.js";import{_ as p}from"./kui-cell-group.96f4bfae.js";import{_ as h}from"./kui-space.b29851da.js";import{_ as C}from"./kui-numberkeyboard.3fba0542.js";import{_ as f}from"./kui-toast.17e4a5d8.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import"./kui-icons.87a80e4b.js";import"./kui-animation.118fdc33.js";import"./kui-popup.45005a92.js";import"./kui-overlay.8c99312b.js";var w=b({setup(){const e=t({mode:"light",modeChecked:!1}),o={state:t({show:!1,randomNumber:!1,title:"",idcard:!1,value:"",inputting:!1}),toast:t({show:!1,content:""}),methods:{onClick(t){o.state.randomNumber=!1,o.state.show=!0,o.state.idcard=!1,o.state.title="",o.state.inputting=!1},onClickRandom(t){o.state.randomNumber=!0,o.state.show=!0,o.state.idcard=!1,o.state.title="",o.state.inputting=!1},onClickTitle(){o.state.randomNumber=!1,o.state.title="键盘标题",o.state.show=!0,o.state.idcard=!1,o.state.inputting=!1},onClickIdcard(){o.state.idcard=!0,o.state.randomNumber=!1,o.state.title="",o.state.show=!0,o.state.inputting=!1},onClickInputting(){o.state.idcard=!1,o.state.randomNumber=!1,o.state.title="",o.state.show=!0,o.state.inputting=!0},onInput(t){o.toast.content=`数字按键：${t}`,o.toast.show=!0},onDelete(t){o.toast.content="当前按键：删除",o.toast.show=!0}}},a={state:t({show:!1,randomNumber:!1,confirmText:"完成",confirmBackgroundColor:"primary",title:""}),toast:t({show:!1,content:""}),methods:{onClick(t){a.state.confirmBackgroundColor="primary",a.state.confirmText="完成",a.state.randomNumber=!1,a.state.show=!0,a.state.title=""},onClickTitle(){a.state.confirmBackgroundColor="primary",a.state.confirmText="发送",a.state.randomNumber=!1,a.state.show=!0,a.state.title="键盘标题"},onClickRandom(t){a.state.confirmBackgroundColor="primary",a.state.confirmText="完成",a.state.randomNumber=!0,a.state.show=!0,a.state.title=""},onClickCustomConfirmBackgroundColor(){a.state.confirmBackgroundColor="info",a.state.randomNumber=!1,a.state.confirmText="完成",a.state.show=!0,a.state.title=""},onClickCustomConfirmText(){a.state.randomNumber=!1,a.state.confirmBackgroundColor="primary",a.state.confirmText="发送",a.state.show=!0,a.state.title=""},onInput(t){console.log(t),a.toast.content=`数字按键：${t}`,a.toast.show=!0},onDelete(t){a.toast.content="当前按键：删除",a.toast.show=!0}}};return{state:e,changeMode:()=>{e.mode="light"==e.mode?"dark":"light",i("changeMode",e.mode)},baseState:o,typeState:a}}},[["render",function(t,i,b,w,g,S){const y=c(l("kui-text"),m),_=c(l("kui-switch"),u),x=r,j=c(l("kui-cell"),k),N=c(l("kui-cell-group"),p),I=c(l("kui-space"),h),T=c(l("kui-page"),d),B=c(l("kui-numberkeyboard"),C),v=c(l("kui-toast"),f);return e(),o(x,{class:"kui-w-full kui-h-full"},{default:a((()=>[s(T,{"custom-header":!1},{body:a((()=>[s(x,{class:"kui-w-full kui-h-full"},{default:a((()=>[s(x,{class:"kui-my-3 kui-flex"},{default:a((()=>[s(y,null,{default:a((()=>[n("暗黑模式：")])),_:1}),s(_,{modelValue:w.state.modeChecked,"onUpdate:modelValue":i[0]||(i[0]=t=>w.state.modeChecked=t),onChange:w.changeMode},null,8,["modelValue","onChange"])])),_:1}),s(I,{gap:[30,0],direction:"column"},{default:a((()=>[s(N,{title:"非右边栏模式"},{default:a((()=>[s(j,{title:"基本用法",onClick:w.baseState.methods.onClick},null,8,["onClick"]),s(j,{title:"随机数键盘",onClick:w.baseState.methods.onClickRandom},null,8,["onClick"]),s(j,{title:"带标题键盘",onClick:w.baseState.methods.onClickTitle},null,8,["onClick"]),s(j,{title:"身份证号键盘",onClick:w.baseState.methods.onClickIdcard},null,8,["onClick"]),s(j,{title:"绑定值监听",onClick:w.baseState.methods.onClick,desc:w.baseState.state.value,center:""},null,8,["onClick","desc"]),s(j,{title:"输入监听显示",onClick:w.baseState.methods.onClickInputting},null,8,["onClick"])])),_:1}),s(N,{title:"右边栏模式"},{default:a((()=>[s(j,{title:"基本用法",onClick:w.typeState.methods.onClick},null,8,["onClick"]),s(j,{title:"随机数键盘",onClick:w.typeState.methods.onClickRandom},null,8,["onClick"]),s(j,{title:"自定义完成按钮背景色",onClick:w.typeState.methods.onClickCustomConfirmBackgroundColor},null,8,["onClick"]),s(j,{title:"自定义完成按钮文本",onClick:w.typeState.methods.onClickCustomConfirmText},null,8,["onClick"]),s(j,{title:"带标题键盘",onClick:w.typeState.methods.onClickTitle},null,8,["onClick"])])),_:1})])),_:1})])),_:1})])),_:1}),s(B,{mode:w.state.mode,"random-number":w.baseState.state.randomNumber,title:w.baseState.state.title,show:w.baseState.state.show,"onUpdate:show":i[1]||(i[1]=t=>w.baseState.state.show=t),modelValue:w.baseState.state.value,"onUpdate:modelValue":i[2]||(i[2]=t=>w.baseState.state.value=t),idcard:w.baseState.state.idcard,inputting:w.baseState.state.inputting,onInput:w.baseState.methods.onInput,onDelete:w.baseState.methods.onDelete},null,8,["mode","random-number","title","show","modelValue","idcard","inputting","onInput","onDelete"]),s(B,{"right-sidebar":"",mode:w.state.mode,"random-number":w.typeState.state.randomNumber,show:w.typeState.state.show,"onUpdate:show":i[3]||(i[3]=t=>w.typeState.state.show=t),"confirm-background-color":w.typeState.state.confirmBackgroundColor,"confirm-text":w.typeState.state.confirmText,title:w.typeState.state.title,onInput:w.typeState.methods.onInput,onDelete:w.typeState.methods.onDelete},null,8,["mode","random-number","show","confirm-background-color","confirm-text","title","onInput","onDelete"]),s(v,{show:w.baseState.toast.show,"onUpdate:show":i[4]||(i[4]=t=>w.baseState.toast.show=t),content:w.baseState.toast.content},null,8,["show","content"]),s(v,{show:w.typeState.toast.show,"onUpdate:show":i[5]||(i[5]=t=>w.typeState.toast.show=t),content:w.typeState.toast.content},null,8,["show","content"])])),_:1})}],["__scopeId","data-v-10f63124"]]);export{w as default};
