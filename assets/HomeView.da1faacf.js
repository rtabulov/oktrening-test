import{d as n,m as a,u as o,n as l}from"./index.81bcdcba.js";const i=n({name:"UserSelect",computed:{...a(o)}});var c=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"grid grid-cols-5 gap-4"},e._l(e.userStore.availableUsers,function(r){return t("article",{key:r.id,staticClass:"group relative overflow-hidden rounded-full border-4 border-slate-800 leading-none transition-colors hover:border-slate-500"},[t("button",{on:{click:function(h){return e.userStore.selectUser(r.id)}}},[t("div",{},[t("img",{staticClass:"scale-105 transition group-hover:scale-100",attrs:{src:r.avatar,alt:"avatar",width:"400"}})]),t("header",{staticClass:"absolute inset-0 z-10 flex items-center justify-center text-2xl text-transparent transition-colors group-hover:bg-slate-950/85 group-hover:text-inherit"},[e._v(" "+e._s(r.name)+" ")])])])}),0)},u=[],_=l(i,c,u,!1,null,null,null,null);const d=_.exports,m=n({name:"HomeView",components:{UserSelect:d},computed:{...a(o)},watch:{"userStore.selectedUserId":{immediate:!0,handler(s){s&&this.$router.push("/chats")}}}});var f=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"container"},[t("UserSelect")],1)},v=[],p=l(m,f,v,!1,null,null,null,null);const x=p.exports;export{x as default};