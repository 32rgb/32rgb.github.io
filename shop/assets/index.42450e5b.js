import{M as a,O as e,Q as s,U as t,V as o,W as n,X as r,r as l,o as d,c,Y as u,Z as i,_ as p,$ as m,a0 as w,a1 as f,a2 as g,a3 as h}from"./vendor.e5c0db2e.js";import{l as b,a as y,g as x,b as V}from"./user.c5b086de.js";/* empty css              */import{g as v}from"./index.ea8c89d5.js";import"./index.ff69f4d4.js";a("data-v-52dc3fe6");const _=["src"],k={style:{margin:"16px"}},U=f(" 登录 "),S=["textContent"];e();const j={setup(a){const e=s(),j=t(),P=o(),C=n({loginMode:"password",isPassword:r((()=>"password"===C.loginMode)),changeText:r((()=>C.isPassword?"快速登录":"密码登录")),username:"17201234567",password:"qwer1234",captcha:"",isSend:!1,countDown:null,currentText:r((()=>C.isSend?C.countDown.seconds:"发送验证码")),logoUrl:""}),M=()=>{C.loginMode=C.isPassword?"captcha":"password",C.password="",C.captcha=""},T=async()=>{if(!/^1\d{10}$/.test(C.username))return i("请检查用户名");const{data:a}=await x();if(200!==a.status)return;const{data:e}=await V({type:"login",phone:C.username,key:a.data.key});200!==e.status&&i("网络开小差了，请稍后再试");const s=h({time:1e4,onFinish(){C.isSend=!1}});s.start(),C.countDown=s.current,C.isSend=!0},D=async()=>{var a;const s=C.username.trim();if(""===s)return i("请检测用户名");let t="";if(C.isPassword){const a=C.password.trim();if(""===a)return i("请检查密码");({data:t}=await b({account:s,password:a}))}else{const a=C.captcha.trim();if(""===a)return i("请检查验证码");({data:t}=await y({phone:s,captcha:a}))}if(200!==t.status)return i("用户名或密码错误");e.commit("user/setUser",t.data.token),j.push(null!=(a=P.query.redirect)?a:"/user")};return(async()=>{const{data:a}=await v();200===a.status&&(C.logoUrl=a.data.logo_url)})(),(a,e)=>{const s=l("van-field"),t=l("VanButton"),o=l("van-cell-group"),n=l("van-form");return d(),c(n,{onSubmit:D},{default:u((()=>[p("img",{class:"logo",src:m(C).logoUrl,alt:""},null,8,_),w(o,{inset:""},{default:u((()=>[w(s,{modelValue:m(C).username,"onUpdate:modelValue":e[0]||(e[0]=a=>m(C).username=a),clearable:"",name:"用户名",label:"用户名",placeholder:"用户名"},null,8,["modelValue"]),m(C).isPassword?(d(),c(s,{key:0,modelValue:m(C).password,"onUpdate:modelValue":e[1]||(e[1]=a=>m(C).password=a),type:"password",clearable:"",name:"密码",label:"密码",placeholder:"密码"},null,8,["modelValue"])):(d(),c(s,{key:1,modelValue:m(C).captcha,"onUpdate:modelValue":e[2]||(e[2]=a=>m(C).captcha=a),center:"",clearable:"",name:"验证码",label:"短信验证码",placeholder:"短信验证码"},{button:u((()=>[w(t,{size:"small",type:"primary",onClick:T,disabled:m(C).isSend},{default:u((()=>[f(g(m(C).currentText),1)])),_:1},8,["disabled"])])),_:1},8,["modelValue"]))])),_:1}),p("div",k,[w(t,{round:"",block:"",type:"primary","native-type":"submit"},{default:u((()=>[U])),_:1}),p("span",{class:"change-button",textContent:g(m(C).changeText),onClick:M},null,8,S)])])),_:1})}},__scopeId:"data-v-52dc3fe6"};export{j as default};