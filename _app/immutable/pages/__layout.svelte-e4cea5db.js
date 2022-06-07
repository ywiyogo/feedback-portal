import{S as V,i as D,s as H,e as v,t as x,k as I,c as g,a as y,h as w,d as f,m as A,b as d,g as $,F as h,E as N,G as B,H as j,I as q,w as C,x as F,y as G,J,K,L as M,q as O,o as S,B as z}from"../chunks/index-63c9f7c4.js";import{s as P}from"../chunks/supabase-13ad4d92.js";import{u as Q}from"../chunks/AuthStore-a6c7f761.js";import{p as R}from"../chunks/stores-e2824863.js";import{b as k}from"../chunks/paths-396f020f.js";import"../chunks/index-9a48d5e2.js";function W(c){let t,e,a,u,o,s,r,l,i;return{c(){t=v("a"),e=v("button"),a=x("Login"),o=I(),s=v("a"),r=v("button"),l=x("Sign Up"),this.h()},l(n){t=g(n,"A",{href:!0});var m=y(t);e=g(m,"BUTTON",{class:!0});var p=y(e);a=w(p,"Login"),p.forEach(f),m.forEach(f),o=A(n),s=g(n,"A",{href:!0});var _=y(s);r=g(_,"BUTTON",{class:!0});var b=y(r);l=w(b,"Sign Up"),b.forEach(f),_.forEach(f),this.h()},h(){d(e,"class",u=`rounded shadow-sm my-2 py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${c[1].routeId==="auth"?"hidden":""}`),d(t,"href",k+"/login"),d(r,"class",i=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${c[1].routeId==="auth"?"hidden":""}`),d(s,"href",k+"/signup")},m(n,m){$(n,t,m),h(t,e),h(e,a),$(n,o,m),$(n,s,m),h(s,r),h(r,l)},p(n,m){m&2&&u!==(u=`rounded shadow-sm my-2 py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${n[1].routeId==="auth"?"hidden":""}`)&&d(e,"class",u),m&2&&i!==(i=`rounded shadow-sm py-2 px-4  text-white bg-teal-500 hover:bg-teal-700 ${n[1].routeId==="auth"?"hidden":""}`)&&d(r,"class",i)},d(n){n&&f(t),n&&f(o),n&&f(s)}}}function X(c){let t,e,a,u;return{c(){t=v("button"),e=x("Logout"),this.h()},l(o){t=g(o,"BUTTON",{class:!0});var s=y(t);e=w(s,"Logout"),s.forEach(f),this.h()},h(){d(t,"class","rounded shadow-sm my-2 py-2 px-4 text-white bg-teal-500 hover:bg-teal-700")},m(o,s){$(o,t,s),h(t,e),a||(u=j(t,"click",c[2]),a=!0)},p:N,d(o){o&&f(t),a=!1,u()}}}function Y(c){let t,e,a,u,o,s,r,l,i;function n(_,b){return _[0]?X:W}let m=n(c),p=m(c);return{c(){t=v("nav"),e=v("div"),a=v("a"),u=x("Home"),o=I(),s=v("a"),r=x("About"),l=I(),i=v("div"),p.c(),this.h()},l(_){t=g(_,"NAV",{class:!0});var b=y(t);e=g(b,"DIV",{class:!0});var E=y(e);a=g(E,"A",{href:!0,class:!0});var T=y(a);u=w(T,"Home"),T.forEach(f),o=A(E),s=g(E,"A",{href:!0,class:!0});var L=y(s);r=w(L,"About"),L.forEach(f),E.forEach(f),l=A(b),i=g(b,"DIV",{class:!0});var U=y(i);p.l(U),U.forEach(f),b.forEach(f),this.h()},h(){d(a,"href",k),d(a,"class","mx-4 my-4 py-2"),d(s,"href",k+"/about"),d(s,"class","mx-4 my-4 py-2"),d(e,"class","text-2xl font-bold my-3 flex-auto"),d(i,"class","flex-auto justify-end text-right"),d(t,"class","flex flex-row justify-center")},m(_,b){$(_,t,b),h(t,e),h(e,a),h(a,u),h(e,o),h(e,s),h(s,r),h(t,l),h(t,i),p.m(i,null)},p(_,[b]){m===(m=n(_))&&p?p.p(_,b):(p.d(1),p=m(_),p&&(p.c(),p.m(i,null)))},i:N,o:N,d(_){_&&f(t),p.d()}}}function Z(c,t,e){let a,u;return B(c,Q,s=>e(0,a=s)),B(c,R,s=>e(1,u=s)),[a,u,()=>{P.auth.signOut()}]}class tt extends V{constructor(t){super(),D(this,t,Z,Y,H,{})}}function et(c){let t,e,a,u,o;a=new tt({});const s=c[1].default,r=q(s,c,c[0],null);return{c(){t=v("main"),e=v("div"),C(a.$$.fragment),u=I(),r&&r.c(),this.h()},l(l){t=g(l,"MAIN",{});var i=y(t);e=g(i,"DIV",{class:!0});var n=y(e);F(a.$$.fragment,n),u=A(n),r&&r.l(n),n.forEach(f),i.forEach(f),this.h()},h(){d(e,"class","container max-w-7xl mx-auto py-8 px-3")},m(l,i){$(l,t,i),h(t,e),G(a,e,null),h(e,u),r&&r.m(e,null),o=!0},p(l,[i]){r&&r.p&&(!o||i&1)&&J(r,s,l,l[0],o?M(s,l[0],i,null):K(l[0]),null)},i(l){o||(O(a.$$.fragment,l),O(r,l),o=!0)},o(l){S(a.$$.fragment,l),S(r,l),o=!1},d(l){l&&f(t),z(a),r&&r.d(l)}}}function at(c,t,e){let{$$slots:a={},$$scope:u}=t;return c.$$set=o=>{"$$scope"in o&&e(0,u=o.$$scope)},[u,a]}class it extends V{constructor(t){super(),D(this,t,at,et,H,{})}}export{it as default};
