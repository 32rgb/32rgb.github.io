import{_ as t}from"./CommentItem.305053ae.js";import{M as a,O as e,U as l,a7 as n,X as o,ab as s,W as u,Q as r,r as i,o as c,a4 as d,a0 as p,Y as v,a6 as m,a5 as f,c as _,_ as b,$ as h,a2 as y,aa as C,a8 as w,Z as x}from"./vendor.e5c0db2e.js";import{a as g}from"./product.fb9b7eb9.js";import{a as k}from"./index.ff69f4d4.js";/* empty css              */a("data-v-e5b6c604");const I=["src"],j={class:"price"},q=["textContent"],T=["src"],V={class:"info"},H=["textContent"],M={class:"price"},U={class:"stock"},A=["textContent"],L=["textContent","onClick"],S=b("p",{class:"title"},"推荐商品",-1),$=["textContent"],z=["innerHTML"];e();const B={props:{productId:{type:String,required:!0}},setup(a){const{productId:e}=a,B=l(),E=n({}),F=async t=>{const{data:a}=await g(t);if(200!==a.status)return B.push({name:"home"});E.value=a.data,at(a.data.productAttr)};F(e);const N=o((()=>E.value.storeInfo)),O=o((()=>{var t;return null==(t=N.value)?void 0:t.slider_image})),P=o((()=>E.value.replyCount||0)),Q=o((()=>`用户评价(${P.value})`)),R=o((()=>E.value.replyChance||0)),W=o((()=>R.value+"%好评率")),X=o((()=>E.value.reply)),Y=o((()=>E.value.good_list));s((t=>{E.value={},document.body.scrollTop=0,document.documentElement.scrollTop=0,F(t.params.productId)}));const Z=u({show:!1,spec:[],buyCount:0}),D=o((()=>E.value.productAttr)),G=o((()=>E.value.productValue)),J=o((()=>Z.spec.toString())),K=o((()=>{var t;return null==(t=G.value)?void 0:t[J.value]})),tt=()=>{Z.show=!Z.show},at=t=>{Z.spec=t.map((t=>t.attr_values[0]))},et=r(),lt=async()=>{if(!et.state.user)return B.push({name:"login",query:{redirect:B.currentRoute.value.fullPath}});if(!Z.show)return Z.show=!0;const{data:t}=await k({new:0,productId:e,uniqueId:K.value.unique,cartNum:Z.buyCount});200===t.status&&(Z.show=!1,x("加入购物车成功~"))};return(a,e)=>{const l=i("van-nav-bar"),n=i("van-swipe-item"),o=i("van-swipe"),s=i("van-icon"),u=i("van-cell"),r=i("van-stepper"),x=i("van-cell-group"),g=i("van-popup"),k=i("van-tab"),B=i("van-image"),E=i("van-grid-item"),F=i("van-grid"),R=i("van-tabs"),G=i("van-action-bar-icon"),at=i("van-action-bar-button"),et=i("van-action-bar");return c(),d(m,null,[p(l,{"left-arrow":"",fixed:""}),p(R,{scrollspy:"",color:"#FBC546"},{default:v((()=>[p(k,{title:"商品"},{default:v((()=>[p(o,{autoplay:3e3,width:"375",height:"375"},{default:v((()=>[(c(!0),d(m,null,f(h(O),((t,a)=>(c(),_(n,{key:a},{default:v((()=>[b("img",{src:t,alt:""},null,8,I)])),_:2},1024)))),128))])),_:1}),p(u,{class:"productHeader",border:!1},{title:v((()=>{var t,a;return[b("div",j,[b("span",null,"￥"+y(null==(t=h(N))?void 0:t.price),1),p(s,{name:"share-o",size:"20",class:"share"})]),b("div",{class:"title",textContent:y(null==(a=h(N))?void 0:a.store_name)},null,8,q)]})),label:v((()=>{var t,a,e,l;return[b("span",null,"原价：￥"+y(null==(t=h(N))?void 0:t.ot_price),1),b("span",null,"库存："+y((null==(a=h(N))?void 0:a.stock)+(null==(e=h(N))?void 0:e.unit_name)),1),b("span",null,"销量："+y(null==(l=h(N))?void 0:l.fsales),1)]})),_:1}),p(u,{class:"sku_window","is-link":"",onClick:tt},{title:v((()=>[b("span",null,"已选择："+y(h(J)),1)])),_:1}),p(g,{show:h(Z).show,"onUpdate:show":e[1]||(e[1]=t=>h(Z).show=t),position:"bottom",class:"popup"},{default:v((()=>[p(x,null,{default:v((()=>[p(u,{class:"popup-header"},{default:v((()=>{var t,a,e,l;return[b("img",{src:null==(t=h(K))?void 0:t.image,alt:""},null,8,T),b("div",V,[b("p",{class:"title",textContent:y(null==(a=h(N))?void 0:a.store_name)},null,8,H),b("p",M,"￥"+y(null==(e=h(K))?void 0:e.price),1),b("p",U,"库存："+y(null==(l=h(K))?void 0:l.stock),1)])]})),_:1}),(c(!0),d(m,null,f(h(D),((t,a)=>(c(),_(u,{class:"spec",key:t.id},{default:v((()=>[b("p",{textContent:y(t.attr_name)},null,8,A),(c(!0),d(m,null,f(t.attr_values,(t=>(c(),d("span",{class:C(["tag",{active:h(Z).spec[a]===t}]),key:t,textContent:y(t),onClick:e=>((t,a)=>{Z.spec[a]=t})(t,a)},null,10,L)))),128))])),_:2},1024)))),128)),p(u,{title:"数量"},{default:v((()=>{var t;return[p(r,{modelValue:h(Z).buyCount,"onUpdate:modelValue":e[0]||(e[0]=t=>h(Z).buyCount=t),max:null==(t=h(K))?void 0:t.stock},null,8,["modelValue","max"])]})),_:1})])),_:1})])),_:1},8,["show"])])),_:1}),p(k,{title:"评价",class:"comment"},{default:v((()=>[p(x,null,{default:v((()=>{var a;return[p(u,{"is-link":"",title:h(Q),value:h(W),to:{name:"comment",params:{productId:null==(a=h(N))?void 0:a.id}}},null,8,["title","value","to"]),0!==h(P)?(c(),_(t,{key:0,reply:h(X)},null,8,["reply"])):w("",!0)]})),_:1})])),_:1}),p(k,{title:"推荐"},{default:v((()=>[p(u,{class:"recommend"},{default:v((()=>[S,p(F,{border:!1,"column-num":3},{default:v((()=>[(c(!0),d(m,null,f(h(Y),(t=>(c(),_(E,{key:t.id,to:{name:"product",params:{productId:t.id}}},{default:v((()=>[p(B,{src:t.image},null,8,["src"]),b("p",{textContent:y(t.store_name)},null,8,$),b("span",null,"￥"+y(t.price),1)])),_:2},1032,["to"])))),128))])),_:1})])),_:1})])),_:1}),p(k,{title:"详情"},{default:v((()=>{var t;return[b("div",{class:"description",innerHTML:null==(t=h(N))?void 0:t.description},null,8,z)]})),_:1})])),_:1}),p(et,null,{default:v((()=>[p(G,{icon:"chat-o",text:"客服",color:"#ee0a24"}),p(G,{icon:"cart-o",text:"购物车",to:"/cart"}),p(G,{icon:"star",text:"已收藏",color:"#ff5000"}),p(at,{type:"warning",text:"加入购物车",onClick:lt}),p(at,{type:"danger",text:"立即购买"})])),_:1})],64)}},__scopeId:"data-v-e5b6c604"};export{B as default};