import{R as k,S as p,T as a,U as g}from"./scheduler.4fa60485.js";import{g as m,a as w,e as v,t as x}from"./index.2e4b29b2.js";const E=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function R(e,t){const n=t.token={};function c(r,s,d,_){if(t.token!==n)return;t.resolved=_;let u=t.ctx;d!==void 0&&(u=u.slice(),u[d]=_);const l=r&&(t.current=r)(u);let b=!1;t.block&&(t.blocks?t.blocks.forEach((h,o)=>{o!==s&&h&&(m(),w(h,1,1,()=>{t.blocks[o]===h&&(t.blocks[o]=null)}),v())}):t.block.d(1),l.c(),x(l,1),l.m(t.mount(),t.anchor),b=!0),t.block=l,t.blocks&&(t.blocks[s]=l),b&&g()}if(k(e)){const r=p();if(e.then(s=>{a(r),c(t.then,1,t.value,s),a(null)},s=>{if(a(r),c(t.catch,2,t.error,s),a(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function S(e,t,n){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,n)}export{E as g,R as h,S as u};
