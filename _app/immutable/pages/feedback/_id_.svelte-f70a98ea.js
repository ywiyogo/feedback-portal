import{S as z,i as A,s as J,k as I,e as h,t as v,N as K,d as u,m as L,c as g,a as C,h as b,b as E,O as Q,g as U,F as a,j as N,E as V,G as w}from"../../chunks/index-63c9f7c4.js";import{f as W}from"../../chunks/FeedbackStore-d2d57be7.js";import{p as X}from"../../chunks/stores-e2824863.js";import"../../chunks/index-9a48d5e2.js";import"../../chunks/supabase-13ad4d92.js";function Y(s){let m,i,e,l,d=s[0][0].title+"",c,o,r,O,k,y=s[0][0].date+"",F,P,D=s[0][0].city+"",G,j,_,H,B,f,q=s[0][0].description+"",S;return document.title=m="Feedback - "+s[0][0].title,{c(){i=I(),e=h("div"),l=h("h1"),c=v(d),o=I(),r=h("p"),O=v("Date: "),k=h("strong"),F=v(y),P=v(`
    | City: `),G=v(D),j=I(),_=h("img"),B=I(),f=h("p"),S=v(q),this.h()},l(t){K('[data-svelte="svelte-r2eei7"]',document.head).forEach(u),i=L(t),e=g(t,"DIV",{class:!0});var p=C(e);l=g(p,"H1",{class:!0});var M=C(l);c=b(M,d),M.forEach(u),o=L(p),r=g(p,"P",{});var x=C(r);O=b(x,"Date: "),k=g(x,"STRONG",{});var R=C(k);F=b(R,y),R.forEach(u),P=b(x,`
    | City: `),G=b(x,D),x.forEach(u),j=L(p),_=g(p,"IMG",{class:!0,src:!0,alt:!0}),B=L(p),f=g(p,"P",{class:!0});var T=C(f);S=b(T,q),T.forEach(u),p.forEach(u),this.h()},h(){E(l,"class","text-4xl text-center my-8 uppercase"),E(_,"class","card-image"),Q(_.src,H="")||E(_,"src",H),E(_,"alt",""),E(f,"class","mx-3 lg:mx-10 bg-transparent mt-8"),E(e,"class","flex flex-col items-center")},m(t,n){U(t,i,n),U(t,e,n),a(e,l),a(l,c),a(e,o),a(e,r),a(r,O),a(r,k),a(k,F),a(r,P),a(r,G),a(e,j),a(e,_),a(e,B),a(e,f),a(f,S)},p(t,[n]){n&1&&m!==(m="Feedback - "+t[0][0].title)&&(document.title=m),n&1&&d!==(d=t[0][0].title+"")&&N(c,d),n&1&&y!==(y=t[0][0].date+"")&&N(F,y),n&1&&D!==(D=t[0][0].city+"")&&N(G,D),n&1&&q!==(q=t[0][0].description+"")&&N(S,q)},i:V,o:V,d(t){t&&u(i),t&&u(e)}}}function Z(s,m,i){let e,l;w(s,W,o=>i(2,e=o)),w(s,X,o=>i(3,l=o));let d=[],c="";return s.$$.update=()=>{if(s.$$.dirty&14&&(i(1,c=l.params.id.substring(1)),c)){const o=e.filter(r=>r.id.includes(c));i(0,d=[...o])}},[d,c,e,l]}class le extends z{constructor(m){super(),A(this,m,Z,Y,J,{})}}export{le as default};