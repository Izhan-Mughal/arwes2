(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4235],{60972:function(e,t,r){"use strict";var n=r(85169),s=r(11163),i=r(85893);t.Z=()=>{const{i18n:e}=(0,n.mV)(),t=(0,s.useRouter)();return(0,i.jsx)("div",{children:(0,i.jsxs)("a",{onClick:t.back,className:"flex items-center space-x-2 text-base text-center cursor-pointer font text-secondary hover:text-high-emphesis",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})}),(0,i.jsx)("span",{children:e._(e._("Go Back"))})]})})}},13752:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(59499),s=r(4730),i=r(36325),o=r(25675);var a=r(85893);const c=["src","width","height","layout"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=e=>{let{src:t,width:r,height:n,layout:l}=e,h=(0,s.Z)(e,c);const p=parseInt(String(n),10)>=40&&parseInt(String(r),10)>=40,u="string"===typeof t&&t.includes("http")?i.HT:void 0;return(0,a.jsx)("div",{style:{width:r,height:n},className:"overflow-hidden rounded",children:p?(0,a.jsx)(o.default,d({loader:u,src:t,width:r,height:n,layout:l,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((f=r,m=n,x='\n<svg width="'.concat(f,'" height="').concat(m,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(f,'" height="').concat(m,'" fill="#333" />\n  <rect id="r" width="').concat(f,'" height="').concat(m,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(f,'" to="').concat(f,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(x)))},h)):(0,a.jsx)(o.default,d({loader:u,src:t,width:r,height:n,layout:l,placeholder:"empty"},h))});var x,f,m}},79454:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return H}});var n=r(85169),s=r(60972),i=r(71862),o=r(72457),a=r(15097),c=r(56785),l=r(10552),d=r(13752),h=r(84293),p=r(12614),u=r(67294),x=r(46271),f=r(23939),m=r(85893);function v({transactions:e}){const{i18n:t}=(0,n.mV)(),{chainId:r}=(0,p.a)();return e?(0,m.jsx)("div",{className:"space-y-3",children:e.map((e=>(0,m.jsxs)("div",{className:"flex items-center justify-between px-3 py-1 rounded bg-dark-800",children:[(0,m.jsxs)("div",{className:"flex flex-row items-center pr-3 space-x-1",children:[(0,m.jsx)(d.Z,{src:e.token_0.logo_url,alt:e.token_0.symbol,width:"24px",height:"24px"}),(0,m.jsx)(d.Z,{src:e.token_1.logo_url,alt:e.token_1.symbol,width:"24px",height:"24px"})]}),r&&(0,m.jsxs)("a",{href:(0,h.E)(r,e.tx_hash,"transaction"),target:"_blank",rel:"noreferrer noopener",className:"flex items-center flex-1 px-3 py-2 text-sm rounded-lg text-primary text-bold bg-dark-900",children:[(0,m.jsx)("span",{className:"mr-1",children:e.description}),(0,m.jsx)(x.Z,{strokeWidth:2,size:14,className:"text-blue"})]}),(0,m.jsx)("div",{className:"ml-4 mr-1",children:(0,m.jsx)(f.Z,{strokeWidth:2,size:18,className:"text-green"})})]},e.tx_hash)))}):(0,m.jsx)("div",{className:"px-4 text-center text-gray-500 border border-dark-800 rounded py-14",children:(0,m.jsx)(a.Z,{children:t._(t._("Loading"))})})}var g=r(47448),j=r(29325),y=r(16339),w=r(22166),b=r(68411),k=r(98950),O=r(9008),N=r(45697),_=r.n(N);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var Z=(0,u.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,s=e.size,i=void 0===s?24:s,o=E(e,["color","size"]);return u.createElement("svg",S({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.createElement("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),u.createElement("circle",{cx:"12",cy:"7",r:"4"}))}));Z.propTypes={color:_().string,size:_().oneOfType([_().string,_().number])},Z.displayName="User";var P=Z,I=r(59046),T=r(8100);function z(e,t){return t.addedTime-e.addedTime}function H(){var e;const{i18n:t}=(0,n.mV)(),{chainId:r,account:d}=(0,p.a)(),x=null===(e=(0,k.AE)(d?[d]:[]))||void 0===e?void 0:e[null!==d&&void 0!==d?d:""],f=(0,y.T)(),{ENSName:N}=(0,j.Z)(null!==d&&void 0!==d?d:void 0),_=(0,b.kf)(),S=(0,u.useMemo)((()=>Object.values(_).filter(b.mH).sort(z)),[_]),E=(S.filter((e=>!e.receipt)).map((e=>e.hash)),S.filter((e=>e.receipt)).map((e=>e.hash)),(0,u.useCallback)((()=>{r&&f((0,w.fY)({chainId:r}))}),[f,r])),{data:Z,error:H}=(0,T.ZP)("https://api.covalenthq.com/v1/".concat(r,"/address/").concat(d,"/stacks/sushiswap/acts/?&key=ckey_cba3674f2ce5450f9d5dd290589&swaps=true&quote-currency=usd"),(e=>fetch(e).then((e=>e.json())).then((e=>e.data))));return H?(0,m.jsx)("div",{children:t._(t._("failed to load"))}):Z?(0,m.jsxs)(o.Z,{id:"user-page",className:"py-4 space-y-3 md:py-8 lg:py-12",maxWidth:"2xl",children:[(0,m.jsxs)(O.default,{children:[(0,m.jsx)("title",{children:"My SUSHI | NEXUSSwap"}),(0,m.jsx)("meta",{name:"description",content:"My SUSHI"},"description"),(0,m.jsx)("meta",{name:"twitter:description",content:"My SUSHI"},"twitter:description"),(0,m.jsx)("meta",{property:"og:description",content:"My SUSHI"},"og:description")]}),(0,m.jsxs)("div",{className:"p-4 mb-3 space-y-3",children:[(0,m.jsx)(s.Z,{}),(0,m.jsx)(c.Z,{component:"h1",variant:"h2",className:" text-high-emphesis",children:t._(t._("My SUSHI"))})]}),(0,m.jsx)("div",{className:"w-full max-w-2xl p-4 mb-3 rounded bg-dark-900",children:(0,m.jsxs)("div",{className:"flex justify-between",children:[(0,m.jsxs)("div",{className:"flex",children:[(0,m.jsx)("div",{className:"p-1.5 bg-dark-800 rounded",children:(0,m.jsx)(P,{strokeWidth:1,size:34,className:"text-white"})}),(0,m.jsxs)("div",{className:"ml-3",children:[(0,m.jsx)("div",{className:"font-semibold text-gray-300",children:d&&(0,g.Xn)(d)}),(0,m.jsx)("div",{className:"text-sm text-gray-500",children:d&&r&&(0,m.jsx)(m.Fragment,{children:x?(0,m.jsxs)("div",{children:[null===x||void 0===x?void 0:x.toSignificant(4)," ETH"]}):(0,m.jsx)(a.Z,{children:t._(t._("Loading"))})})})]})]}),(0,m.jsx)("div",{className:"text-sm font-semibold text-primary",children:(0,m.jsxs)("div",{className:"flex items-center",children:[(0,m.jsx)(I.Z,{strokeWidth:.5,size:14,className:"text-white"}),r&&d&&(0,m.jsx)("a",{href:(0,h.E)(r,d,"address"),children:(0,m.jsx)("span",{style:{marginLeft:"4px"},children:t._(t._("View on explorer"))})})]})})]})}),(0,m.jsxs)("div",{className:"w-full max-w-2xl p-4 rounded bg-dark-900",children:[(0,m.jsxs)("div",{className:"flex flex-col items-center justify-between mb-3 sm:flex-row",children:[(0,m.jsx)(c.Z,{component:"h2",variant:"lg",className:"font-medium text-high-emphesis",children:t._(t._("Transaction History {0}",{0:r&&l.z[r]}))}),(0,m.jsx)(i.ZP,{variant:"empty",color:"blue",onClick:E,children:(0,m.jsx)("span",{className:"text-sm",children:t._(t._("Clear History"))})})]}),(0,m.jsx)(v,{transactions:Z.items})]})]}):(0,m.jsx)("div",{children:t._(t._("loading..."))})}},12960:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user",function(){return r(79454)}])},46271:function(e,t,r){"use strict";var n=r(67294),s=r(45697),i=r.n(s);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=(0,n.forwardRef)((function(e,t){var r=e.color,s=void 0===r?"currentColor":r,i=e.size,c=void 0===i?24:i,l=a(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),n.createElement("polyline",{points:"7 7 17 7 17 17"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ArrowUpRight",t.Z=c}},function(e){e.O(0,[9774,2888,179],(function(){return t=12960,e(e.s=t);var t}));var t=e.O();_N_E=t}]);