(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6357],{63067:function(t,e,n){"use strict";n.r(e);var r=n(67294),u=n(13791),a=n(85893);e.default=({text:t,time:e,hidden:n=!1})=>{var i=Date.now();const c=(0,r.useMemo)((()=>e&&1e3*e>i?1e3*e-i:0),[i,e]),[s,{start:o,pause:l,resume:d,reset:m}]=(0,u.Z)(c),f=(t=>{if(0===t||isNaN(t))return"";const e=new Date(Math.round(t)),n=null===e||void 0===e?void 0:e.toISOString().substring(11,19),r=Math.floor(t/1e3/3600/24);return String(r)+" days :"+n})(s);return(0,r.useEffect)((()=>{c&&o&&o(c)}),[c,o]),n?null:(0,a.jsxs)("div",{className:"text-lg font-normal text-left text-primary",children:[t,(0,a.jsx)("span",{className:"ml-1 font-medium text-white",children:0===s?"Now":f})]})}},87569:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/multistaking/CountDown",function(){return n(63067)}])},13791:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(67294);function u(t,e){void 0===t&&(t=6e4),void 0===e&&(e=1e3);var n=r.useState(0),u=n[0],a=n[1],i=r.useRef({}),c=function t(n){i.current.started||(i.current.started=n,i.current.lastInterval=n);var r=Math.min(e,i.current.timeLeft||1/0);n-i.current.lastInterval>=r&&(i.current.lastInterval+=r,a((function(t){return i.current.timeLeft=t-r,i.current.timeLeft}))),n-i.current.started<i.current.timeToCount?i.current.requestId=window.requestAnimationFrame(t):(i.current={},a(0))},s=r.useCallback((function(e){window.cancelAnimationFrame(i.current.requestId);var n=void 0!==e?e:t;i.current.started=null,i.current.lastInterval=null,i.current.timeToCount=n,i.current.requestId=window.requestAnimationFrame(c),a(n)}),[]),o=r.useCallback((function(){window.cancelAnimationFrame(i.current.requestId),i.current.started=null,i.current.lastInterval=null,i.current.timeToCount=i.current.timeLeft}),[]),l=r.useCallback((function(){!i.current.started&&i.current.timeLeft>0&&(window.cancelAnimationFrame(i.current.requestId),i.current.requestId=window.requestAnimationFrame(c))}),[]),d=r.useCallback((function(){i.current.timeLeft&&(window.cancelAnimationFrame(i.current.requestId),i.current={},a(0))}),[]),m=r.useMemo((function(){return{start:s,pause:o,resume:l,reset:d}}),[]);return r.useEffect((function(){return function(){return window.cancelAnimationFrame(i.current.requestId)}}),[]),[u,m]}}},function(t){t.O(0,[9774,2888,179],(function(){return e=87569,t(t.s=e);var e}));var e=t.O();_N_E=e}]);