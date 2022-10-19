import{_ as e}from"./kui-spin.40ca1a3c.js";import{v as t,x as o,r,g as a,e as n,i as s,c as i,d as l,w as d,f as p,m as u,q as g,s as c,z as h,j as y,K as f}from"./index.4769b127.js";import{_ as m}from"./kui-icons.3c452229.js";import{c as b}from"./kui-page.12878643.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";const S=(e,t=150,o=1)=>{if(1===o)var r=0;else var a;return function(){var n=arguments,s=this;if(1===o){var i=Date.now();i-r>t&&(e.apply(s,n),r=Date.now())}else a||(a=setTimeout((()=>{a=null,e.apply(s,n)}),t))}};const v=k(o({name:"kui-button",props:{type:{type:String,default:""},mode:{type:String,default:()=>{var e,o;return null!=(o=null==(e=t(b,void 0))?void 0:e.mode)?o:"light"}},full:{type:Boolean,default:!1},marginY:{type:Number,default:0},size:{type:String,default:"normal"},shape:{type:String,default:"capsule"},radius:{type:Number,default:10},text:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},backgroundColor:{type:String,default:""},gradient:{type:Boolean,default:!0},textColor:{type:String,default:""},borderColor:{type:String,default:""},ripple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingType:{type:String,default:"square-dot"},icon:{type:String,default:""},block:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},shadowSize:{type:String,default:""},throttle:{type:Number,default:0},throttleWait:{type:Number,default:500},formType:{type:String,default:""},openType:{type:String,default:""},hoverClass:{type:String,default:"button-hover"},hoverStartTime:{type:Number,default:20},hoverStayTime:{type:Number,default:70},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1}},emits:["click","getphonenumber","getuserinfo","error","opensetting","launchapp"],options:{virtualHost:!0},setup(e,t){const{proxy:o}=a(),n=o.$theme;uni.getSystemInfoSync();const s=r({type:e.type,btnBorderWidth:0,backgroundColor:"",backgroundImage:"",color:"",width:"max-content",height:"",padding:"",opacity:e.disabled?.6:1,longClick:0,timeOutEvent:0,btnBorderStyle:"solid",btnBorderColor:"",setMode:e.mode,size:e.size,radius:"square"!==e.shape?9999:e.radius,fontSize:`${n.size.fonts.base}${n.size.fontUnit}`}),i=(t=0)=>{switch(e.full&&(s.btnWidth=uni.getSystemInfoSync().windowWidth-30+"px"),e.text?(s.backgroundColor=t?n.colors[s.setMode].grey[2+t]:"",s.color=s.type?n.colors[s.setMode][s.type][5+t]:s.color):(s.backgroundColor=s.type?n.colors[s.setMode][s.type][5+t]:"light"===s.setMode?"#FFFFFF":n.colors.dark.grey[2],s.color="light"===s.setMode?"#FFFFFF":n.colors.dark.grey[9],s.color=s.type?"#FFFFFF":n.colors[s.setMode].grey[7+t],s.btnBorderColor=s.type?"":n.colors[s.setMode].grey[3+t],s.btnBorderWidth=s.type?"0rpx":"1rpx",!s.type&&t&&(s.backgroundColor=n.colors[s.setMode].grey[3]),s.type&&e.gradient&&(s.backgroundImage=`linear-gradient(to right, ${n.colors[s.setMode][s.type][5+t]}, ${n.colors[s.setMode][s.type][4+t]})`)),e.outline&&(s.btnBorderColor=s.color=n.colors[s.setMode][s.type][3],s.btnBorderWidth="1rpx"),s.backgroundColor=e.backgroundColor?e.backgroundColor:s.backgroundColor,s.color=e.textColor?e.textColor:s.color,s.btnBorderColor=e.borderColor?e.borderColor:s.btnBorderColor,e.size){case"normal":s.padding="0 30rpx",s.height="72rpx";break;case"small":s.padding="0 22rpx",s.fontSize=`${n.size.fonts.sm}${n.size.fontUnit}`,s.height="56rpx";break;case"mini":s.padding="0 20rpx",s.fontSize=`${n.size.fonts.sm}${n.size.fontUnit}`,s.height="48rpx";break;case"large":s.fontSize=`${n.size.fonts.lg}${n.size.fontUnit}`,s.padding="0 40rpx",s.height="96rpx"}s.width="round"===e.shape?s.height:s.width,e.block&&(s.width="100%")};uni.$on("changeMode",(e=>{s.setMode=e,i()})),i();let l=()=>{e.disabled};l=0!==e.throttle?S((function(e){t.emit("click")}),e.throttleWait,e.throttle):()=>{e.disabled||t.emit("click")};return{throttle:S,data:s,start:()=>{if(!e.disabled)return setTimeout((()=>{i(1)}),e.hoverStartTime),!0},end:()=>{if(!e.disabled)return setTimeout((()=>{i()}),e.hoverStayTime),!0},beforeStart:l,onGetphonenumber:e=>{t.emit("getphonenumber",e)},onGetuserinfo:e=>{t.emit("getuserinfo",e)},onError:e=>{t.emit("error",e)},onOpensetting:e=>{t.emit("opensetting",e)},onLaunchapp:e=>{t.emit("launchapp",e)}}}}),[["render",function(t,o,r,a,b,k){const S=n(s("kui-spin"),e),v=y,C=n(s("kui-icons"),m),x=f;return i(),l(v,{class:u(t.block?"kui-w-full":""),onTouchstart:t.start,onTouchend:t.end,onClick:t.beforeStart},{default:d((()=>[p(x,{class:u(["",t.shadow?`kui-shadow-${t.shadowSize}`:""]),plain:!0,disabled:t.disabled,style:g({borderWidth:t.data.btnBorderWidth,borderStyle:t.data.btnBorderStyle,borderColor:t.data.btnBorderColor,backgroundColor:t.data.backgroundColor,backgroundImage:t.data.backgroundImage,color:t.data.color,width:t.data.width,height:t.data.height,padding:t.data.padding,opacity:t.data.opacity,margin:0,marginTop:`${t.marginY}px`,borderRadius:`${t.data.radius}rpx`,lineHeight:1,flexGrow:"large"===t.size||t.block?1:""}),"form-type":t.formType,"open-type":t.openType,"hover-class":t.hoverClass,"hover-start-time":t.hoverStartTime,"hover-stay-time":t.hoverStayTime,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,lang:t.lang,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,onGetphonenumber:t.onGetphonenumber,onGetuserinfo:t.onGetuserinfo,onError:t.onError,onOpensetting:t.onOpensetting,onLaunchapp:t.onLaunchapp},{default:d((()=>[p(v,{style:g({fontSize:t.data.fontSize}),class:"kui-flex kui-justify-center kui-items-center kui-h-full"},{default:d((()=>[t.loading?(i(),l(v,{key:0,class:"kui-relative",style:g({right:(t.$slots.default?10:0)+"rpx"})},{default:d((()=>[p(S,{width:55,height:55,type:t.loadingType,scale:.7,"background-color":t.data.color},null,8,["type","scale","background-color"])])),_:1},8,["style"])):c("",!0),t.icon?(i(),l(v,{key:1,class:u(t.$slots.default?"kui-mr-1":"")},{default:d((()=>[p(C,{type:t.icon,color:t.data.color,weight:800,size:40},null,8,["type","color"])])),_:1},8,["class"])):c("",!0),p(v,null,{default:d((()=>[h(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","disabled","style","form-type","open-type","hover-class","hover-start-time","hover-stay-time","app-parameter","hover-stop-propagation","lang","session-from","send-message-title","send-message-path","send-message-img","show-message-card","onGetphonenumber","onGetuserinfo","onError","onOpensetting","onLaunchapp"])])),_:3},8,["class","onTouchstart","onTouchend","onClick"])}],["__scopeId","data-v-937dcf17"]]);export{v as _};
