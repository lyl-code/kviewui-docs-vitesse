import{_ as e}from"./kui-icons.3c452229.js";import{v as o,x as t,r as i,A as r,k as l,g as n,e as c,i as s,c as u,d as a,w as d,f as g,q as f,z as m,m as p,h,B as k,j as y,n as x,p as b,G as _,H as S,I as z}from"./index.4769b127.js";import{_ as C}from"./kui-text.d338fb2c.js";import{c as v,_ as T}from"./kui-page.12878643.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{_ as $}from"./kui-cell-group.bf65a318.js";import{_ as w}from"./kui-space.2c8c8efa.js";const R=B(t({name:"kui-grid-item",props:{text:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:Number,default:56},iconColor:{type:String,default:""},id:{type:String,default:""},contentMargin:{type:String,default:""},radiusSize:{type:String,default:"none"},backgroundColor:{type:String,default:"white"},backgroundColorLevel:{type:[String,Number],default:5},mode:{type:String,default:()=>{var e,t;return null!=(t=null==(e=o(v,void 0))?void 0:e.mode)?t:"light"}}},emits:["click","touchstart","touchend","touchmove"],setup(e,{emit:t}){const c=o("kui-grid");if(!c)return;const{proxy:s}=n(),u=s.$theme,a=i({iconSize:c.iconSize,iconColor:e.iconColor?e.iconColor:c.iconColor,showRightBorder:!0,showTopBorder:!1,fontSize:`${u.size.fonts.sm}rpx`,marginRight:"",marginBottom:""});e.iconSize>c.iconSize&&(a.iconSize=e.iconSize);const d=r((()=>{const o=i({}),t=u.colors[e.mode][e.backgroundColor]||uni.kviewUIColor.generate(e.backgroundColor,{dark:"dark"===e.mode,list:!0});o.backgroundColor=t[e.backgroundColorLevel],o.borderRadius=`${u.size.radiusSize[e.radiusSize]}rpx`;const r=`1rpx solid ${u.colors.light.grey[3]}`;return o.borderRight=a.showRightBorder?r:"",o.borderTop=a.showTopBorder?r:"",o.marginRight=a.marginRight,o.height="100%",o})),g=r((()=>{var o;const t=i({});return t.lineHeight=1,t.textAlign="center",t.margin=null!=(o=e.contentMargin)?o:"32rpx 0rpx",t.display="flex",t.flexDirection="column",c.reverse&&(t.flexDirection="column-reverse"),"horizontal"==c.direction&&(t.flexDirection="row",t.alignItems="center"),t}));l((()=>{c&&-1===c.childrens.indexOf(a)&&c.childrens.push(a)}));return{state:a,rootStyle:d,contentStyle:g,parent:c,onClick:o=>{c.clickable&&(o.detail.id=e.id,t("click",o))},onTouchstart:o=>{c.clickable&&(o.detail.id=e.id,t("touchstart",o))},onTouchend:o=>{c.clickable&&(o.detail.id=e.id,t("touchend",o))},onTouchmove:o=>{c.clickable&&(o.detail.id=e.id,t("touchmove",o))}}}}),[["render",function(o,t,i,r,l,n){const x=c(s("kui-icons"),e),b=y,_=c(s("kui-text"),C);return u(),a(b,{class:"kui-grid-item kui-flex kui-flex-col kui-items-center kui-box-border",style:f(o.rootStyle),onClick:o.onClick,onTouchstart:o.onTouchstart,onTouchend:o.onTouchend,onTouchmove:o.onTouchmove},{default:d((()=>[g(b,{style:f(o.contentStyle)},{default:d((()=>[m(o.$slots,"default",{},(()=>[g(b,null,{default:d((()=>[m(o.$slots,"icon",{},(()=>[g(x,{type:o.icon,color:o.state.iconColor,size:o.state.iconSize},null,8,["type","color","size"])]))])),_:3}),g(b,{class:p([o.parent.reverse?"kui-mb-2":"","horizontal"==o.parent.direction?"kui-ml-2":"kui-mt-2"])},{default:d((()=>[m(o.$slots,"text",{},(()=>[g(_,{size:o.state.fontSize},{default:d((()=>[h(k(o.text),1)])),_:1},8,["size"])]))])),_:3},8,["class"])]))])),_:3},8,["style"])])),_:3},8,["style","onClick","onTouchstart","onTouchend","onTouchmove"])}]]);const F=B(t({name:"kui-grid",props:{columns:{type:Number,default:4},iconSize:{type:Number,default:56},iconColor:{type:String,default:""},gutter:{type:Number,default:0},reverse:{type:Boolean,default:!1},direction:{type:String,default:"vertical"},border:{type:Boolean,default:!0},clickable:{type:Boolean,default:!1}},setup(e,o){const t=i({iconSize:e.iconSize,iconColor:e.iconColor,reverse:e.reverse,direction:e.direction,border:e.border,childrens:[],marginLeft:`${e.gutter}rpx`,clickable:e.clickable}),n=r((()=>{const o=i({}),r=100/e.columns+"%";return o.gridTemplateColumns=`repeat(${e.columns}, ${r})`,o.gridRowGap=`${e.gutter}rpx`,o.marginLeft=t.marginLeft,o}));return l((()=>{x((()=>{t.childrens&&(__f__("log","at components/kui-grid/kui-grid.vue:52",t.childrens),t.childrens.forEach(((o,t)=>{t>0&&(t+1)%e.columns==0&&(o.showRightBorder=!1),t>=e.columns&&(o.showTopBorder=!0),o.marginRight=`${e.gutter}rpx`,e.gutter>0&&(o.showRightBorder=o.showTopBorder=!1)})))}))})),b("kui-grid",t),{rootStyle:n}}}),[["render",function(e,o,t,i,r,l){const n=y;return u(),a(n,{class:"kui-grid kui-w-full kui-box-border kui-flex",style:f(e.rootStyle)},{default:d((()=>[m(e.$slots,"default")])),_:3},8,["style"])}]]);const j=B({setup(){const{proxy:e}=n(),o=e.$theme;__f__("log","at pages/components/grid/grid.vue:79",o.colors);return{rootStyle:r((()=>{const e=i({});return e.display="flex",e})),contentStyle:r((()=>{const e=i({});e.flexDirection="column",e.flexBasis="25%",e.boxSizing="border-box",e.paddingTop="25%",e.height="100%",e.backgroundColor="#FFFFFF";const t=o.colors.light.grey[2];return e.borderRight=e.borderBottom=`1rpx solid ${t}`,e}))}}},[["render",function(o,t,i,r,l,n){const f=c(s("kui-grid-item"),R),m=c(s("kui-grid"),F),p=c(s("kui-cell-group"),$),h=c(s("kui-icons"),e),k=c(s("kui-space"),w),y=c(s("kui-page"),T);return u(),a(y,{"custom-header":!1},{body:d((()=>[g(k,{gap:[30,0],direction:"column"},{default:d((()=>[g(p,{title:"基本用法"},{default:d((()=>[g(m,{columns:4},{default:d((()=>[(u(),_(z,null,S(8,(e=>g(f,{key:e,icon:"slideshare",text:"文本"}))),64))])),_:1})])),_:1}),g(p,{title:"自定义列数"},{default:d((()=>[g(m,{columns:3},{default:d((()=>[(u(),_(z,null,S(3,(e=>g(f,{key:e,icon:"slideshare",text:"文本"}))),64))])),_:1})])),_:1}),g(p,{title:"列间距"},{default:d((()=>[g(m,{columns:4,gutter:30},{default:d((()=>[(u(),_(z,null,S(4,(e=>g(f,{key:e,icon:"slideshare",text:"文本"}))),64))])),_:1})])),_:1}),g(p,{title:"内容反向"},{default:d((()=>[g(m,{columns:4,reverse:""},{default:d((()=>[(u(),_(z,null,S(4,(e=>g(f,{key:e,icon:"slideshare",text:"文本"}))),64))])),_:1})])),_:1}),g(p,{title:"内容横向"},{default:d((()=>[g(m,{columns:4,direction:"horizontal"},{default:d((()=>[(u(),_(z,null,S(4,(e=>g(f,{key:e,icon:"slideshare",text:"文本"}))),64))])),_:1})])),_:1}),g(p,{title:"图标颜色大小"},{default:d((()=>[g(m,{columns:3,iconColor:"#00BC79"},{default:d((()=>[(u(),_(z,null,S(3,(e=>g(f,{key:e,icon:"slideshare",iconColor:2==e?"#3491FA":"",iconSize:2==e?70:56,text:"文本"},null,8,["iconColor","iconSize"]))),64))])),_:1})])),_:1}),g(p,{title:"自定义内容"},{default:d((()=>[g(m,{columns:3,iconColor:"#00BC79"},{default:d((()=>[(u(),_(z,null,S(3,(e=>g(f,{key:e},{default:d((()=>[g(h,{type:"heart",color:"#F53F3F",size:70})])),_:1}))),64))])),_:1})])),_:1})])),_:1})])),_:1})}]]);export{j as default};
