import{F as q,S as O,i as S,s as j,e as p,t as y,k,c as m,a as b,h as w,d as c,m as A,b as f,g as E,G as d,E as I,H as B,I as C,J as M,w as U,x as F,y as G,K as J,L as K,M as z,q as D,o as H,B as P}from"../chunks/index-949137de.js";import{u as Q,s as R}from"../chunks/AuthStore-41696eed.js";import{b as L}from"../chunks/paths-396f020f.js";import"../chunks/index-3726ae03.js";const W=()=>{const r=q("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},X={subscribe(r){return W().page.subscribe(r)}};function Y(r){let t,e,s,n;return{c(){t=p("a"),e=p("button"),s=y("Login"),this.h()},l(a){t=m(a,"A",{href:!0});var o=b(t);e=m(o,"BUTTON",{class:!0});var i=b(e);s=w(i,"Login"),i.forEach(c),o.forEach(c),this.h()},h(){f(e,"class",n=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${r[1].routeId==="auth"?"hidden":""}`),f(t,"href",L+"/auth")},m(a,o){E(a,t,o),d(t,e),d(e,s)},p(a,o){o&2&&n!==(n=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${a[1].routeId==="auth"?"hidden":""}`)&&f(e,"class",n)},d(a){a&&c(t)}}}function Z(r){let t,e,s,n;return{c(){t=p("button"),e=y("Logout"),this.h()},l(a){t=m(a,"BUTTON",{class:!0});var o=b(t);e=w(o,"Logout"),o.forEach(c),this.h()},h(){f(t,"class","rounded shadow-sm py-2 px-4 text-white bg-teal-500 hover:bg-teal-700")},m(a,o){E(a,t,o),d(t,e),s||(n=C(t,"click",r[2]),s=!0)},p:I,d(a){a&&c(t),s=!1,n()}}}function tt(r){let t,e,s,n,a,o,i,l,u;function v(_,g){return _[0]?Z:Y}let $=v(r),h=$(r);return{c(){t=p("nav"),e=p("div"),s=p("a"),n=y("Home"),a=k(),o=p("a"),i=y("About"),l=k(),u=p("div"),h.c(),this.h()},l(_){t=m(_,"NAV",{class:!0});var g=b(t);e=m(g,"DIV",{class:!0});var x=b(e);s=m(x,"A",{href:!0,class:!0});var N=b(s);n=w(N,"Home"),N.forEach(c),a=A(x),o=m(x,"A",{href:!0,class:!0});var T=b(o);i=w(T,"About"),T.forEach(c),x.forEach(c),l=A(g),u=m(g,"DIV",{class:!0});var V=b(u);h.l(V),V.forEach(c),g.forEach(c),this.h()},h(){f(s,"href",L),f(s,"class","mx-4"),f(o,"href",L+"/about"),f(o,"class","mx-4"),f(e,"class","text-2xl font-bold my-4 flex-auto w-3/4"),f(u,"class","my-4 flex-auto w-1/4 justify-end text-right"),f(t,"class","flex flex-row justify-center")},m(_,g){E(_,t,g),d(t,e),d(e,s),d(s,n),d(e,a),d(e,o),d(o,i),d(t,l),d(t,u),h.m(u,null)},p(_,[g]){$===($=v(_))&&h?h.p(_,g):(h.d(1),h=$(_),h&&(h.c(),h.m(u,null)))},i:I,o:I,d(_){_&&c(t),h.d()}}}function et(r,t,e){let s,n;return B(r,Q,o=>e(0,s=o)),B(r,X,o=>e(1,n=o)),[s,n,()=>{R.auth.signOut()}]}class st extends O{constructor(t){super(),S(this,t,et,tt,j,{})}}function at(r){let t,e,s,n,a;s=new st({});const o=r[1].default,i=M(o,r,r[0],null);return{c(){t=p("main"),e=p("div"),U(s.$$.fragment),n=k(),i&&i.c(),this.h()},l(l){t=m(l,"MAIN",{});var u=b(t);e=m(u,"DIV",{class:!0});var v=b(e);F(s.$$.fragment,v),n=A(v),i&&i.l(v),v.forEach(c),u.forEach(c),this.h()},h(){f(e,"class","container max-w-7xl mx-auto py-8")},m(l,u){E(l,t,u),d(t,e),G(s,e,null),d(e,n),i&&i.m(e,null),a=!0},p(l,[u]){i&&i.p&&(!a||u&1)&&J(i,o,l,l[0],a?z(o,l[0],u,null):K(l[0]),null)},i(l){a||(D(s.$$.fragment,l),D(i,l),a=!0)},o(l){H(s.$$.fragment,l),H(i,l),a=!1},d(l){l&&c(t),P(s),i&&i.d(l)}}}function ot(r,t,e){let{$$slots:s={},$$scope:n}=t;return r.$$set=a=>{"$$scope"in a&&e(0,n=a.$$scope)},[n,s]}class ut extends O{constructor(t){super(),S(this,t,ot,at,j,{})}}export{ut as default};
