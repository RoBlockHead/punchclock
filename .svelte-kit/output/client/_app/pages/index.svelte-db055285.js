import{S as Q,i as W,s as z,e as _,H as U,k as N,t as D,c as m,a as i,I as V,d as o,n as j,g as $,b as t,M as q,f as L,D as e,E as A,h as J,F as K,N as X,O as Y,P as Z,j as ee,Q as te,m as se,R as ae,o as re,x as le,u as oe,v as ne}from"../chunks/vendor-8b3525a6.js";function ce(f){let s,a,l,c,u,d,v,n,b=Math.floor(f[1]+1)+"",T,O,y,I=Math.floor(f[1])+"",w,R,p,g,k,E,B;return{c(){s=_("div"),a=_("button"),l=U("svg"),c=U("path"),u=N(),d=_("div"),v=_("div"),n=_("strong"),T=D(b),O=N(),y=_("strong"),w=D(I),R=N(),p=_("button"),g=U("svg"),k=U("path"),this.h()},l(r){s=m(r,"DIV",{class:!0});var h=i(s);a=m(h,"BUTTON",{"aria-label":!0,class:!0});var M=i(a);l=V(M,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var x=i(l);c=V(x,"path",{d:!0,class:!0}),i(c).forEach(o),x.forEach(o),M.forEach(o),u=j(h),d=m(h,"DIV",{class:!0});var G=i(d);v=m(G,"DIV",{class:!0,style:!0});var S=i(v);n=m(S,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var C=i(n);T=$(C,b),C.forEach(o),O=j(S),y=m(S,"STRONG",{class:!0});var H=i(y);w=$(H,I),H.forEach(o),S.forEach(o),G.forEach(o),R=j(h),p=m(h,"BUTTON",{"aria-label":!0,class:!0});var P=i(p);g=V(P,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var F=i(g);k=V(F,"path",{d:!0,class:!0}),i(k).forEach(o),F.forEach(o),P.forEach(o),h.forEach(o),this.h()},h(){t(c,"d","M0,0.5 L1,0.5"),t(c,"class","svelte-139m1ow"),t(l,"aria-hidden","true"),t(l,"viewBox","0 0 1 1"),t(l,"class","svelte-139m1ow"),t(a,"aria-label","Decrease the counter by one"),t(a,"class","svelte-139m1ow"),q(n,"top","-100%"),t(n,"aria-hidden","true"),t(n,"class","svelte-139m1ow"),t(y,"class","svelte-139m1ow"),t(v,"class","counter-digits svelte-139m1ow"),q(v,"transform","translate(0, "+100*f[2]+"%)"),t(d,"class","counter-viewport svelte-139m1ow"),t(k,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),t(k,"class","svelte-139m1ow"),t(g,"aria-hidden","true"),t(g,"viewBox","0 0 1 1"),t(g,"class","svelte-139m1ow"),t(p,"aria-label","Increase the counter by one"),t(p,"class","svelte-139m1ow"),t(s,"class","counter svelte-139m1ow")},m(r,h){L(r,s,h),e(s,a),e(a,l),e(l,c),e(s,u),e(s,d),e(d,v),e(v,n),e(n,T),e(v,O),e(v,y),e(y,w),e(s,R),e(s,p),e(p,g),e(g,k),E||(B=[A(a,"click",f[4]),A(p,"click",f[5])],E=!0)},p(r,[h]){h&2&&b!==(b=Math.floor(r[1]+1)+"")&&J(T,b),h&2&&I!==(I=Math.floor(r[1])+"")&&J(w,I),h&4&&q(v,"transform","translate(0, "+100*r[2]+"%)")},i:K,o:K,d(r){r&&o(s),E=!1,X(B)}}}function ie(f,s){return(f%s+s)%s}function ue(f,s,a){let l,c,u=0;const d=Y();Z(f,d,b=>a(1,c=b));const v=()=>a(0,u-=1),n=()=>a(0,u+=1);return f.$$.update=()=>{f.$$.dirty&1&&d.set(u),f.$$.dirty&2&&a(2,l=ie(c,1))},[u,c,l,d,v,n]}class de extends Q{constructor(s){super();W(this,s,ue,ce,z,{})}}function ve(f){let s,a,l,c,u,d,v,n,b,T,O,y,I,w,R,p,g,k,E,B;return E=new de({}),{c(){s=N(),a=_("section"),l=_("h1"),c=_("div"),u=_("picture"),d=_("source"),v=N(),n=_("img"),T=D(`

		to your new`),O=_("br"),y=D("SvelteKit app"),I=N(),w=_("h2"),R=D("try editing "),p=_("strong"),g=D("src/routes/index.svelte"),k=N(),ee(E.$$.fragment),this.h()},l(r){te('[data-svelte="svelte-1anpopb"]',document.head).forEach(o),s=j(r),a=m(r,"SECTION",{class:!0});var M=i(a);l=m(M,"H1",{class:!0});var x=i(l);c=m(x,"DIV",{class:!0});var G=i(c);u=m(G,"PICTURE",{});var S=i(u);d=m(S,"SOURCE",{srcset:!0,type:!0}),v=j(S),n=m(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(o),G.forEach(o),T=$(x,`

		to your new`),O=m(x,"BR",{}),y=$(x,"SvelteKit app"),x.forEach(o),I=j(M),w=m(M,"H2",{});var C=i(w);R=$(C,"try editing "),p=m(C,"STRONG",{});var H=i(p);g=$(H,"src/routes/index.svelte"),H.forEach(o),C.forEach(o),k=j(M),se(E.$$.fragment,M),M.forEach(o),this.h()},h(){document.title="Home",t(d,"srcset","svelte-welcome.webp"),t(d,"type","image/webp"),ae(n.src,b="svelte-welcome.png")||t(n,"src",b),t(n,"alt","Welcome"),t(n,"class","svelte-mjk9ig"),t(c,"class","welcome svelte-mjk9ig"),t(l,"class","svelte-mjk9ig"),t(a,"class","svelte-mjk9ig")},m(r,h){L(r,s,h),L(r,a,h),e(a,l),e(l,c),e(c,u),e(u,d),e(u,v),e(u,n),e(l,T),e(l,O),e(l,y),e(a,I),e(a,w),e(w,R),e(w,p),e(p,g),e(a,k),re(E,a,null),B=!0},p:K,i(r){B||(le(E.$$.fragment,r),B=!0)},o(r){oe(E.$$.fragment,r),B=!1},d(r){r&&o(s),r&&o(a),ne(E)}}}const _e=!0;class me extends Q{constructor(s){super();W(this,s,null,ve,z,{})}}export{me as default,_e as prerender};