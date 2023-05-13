(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3453],{78999:function(e,r,t){"use strict";t.d(r,{_:function(){return u},b:function(){return d}});var n=t(19642),i=t(67294),a=t(58529),o=t(60852),s=t(92506),c=(0,i.createContext)(null);function l(){var e=(0,i.useContext)(c);if(null===e){var r=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,l),r}return e}function d(){var e=(0,i.useState)([]),r=e[0],t=e[1];return[r.length>0?r.join(" "):void 0,(0,i.useMemo)((function(){return function(e){var r=(0,i.useCallback)((function(e){return t((function(r){return[].concat(r,[e])})),function(){return t((function(r){var t=r.slice(),n=t.indexOf(e);return-1!==n&&t.splice(n,1),t}))}}),[]),n=(0,i.useMemo)((function(){return{register:r,slot:e.slot,name:e.name,props:e.props}}),[r,e.slot,e.name,e.props]);return i.createElement(c.Provider,{value:n},e.children)}}),[t])]}function u(e){var r=e.passive,t=void 0!==r&&r,i=(0,n.gK)(e,["passive"]),c=l(),d="headlessui-label-"+(0,s.M)();(0,o.e)((function(){return c.register(d)}),[d,c.register]);var u=(0,n.gY)({},c.props,{id:d}),p=(0,n.gY)({},i,u);return t&&delete p.onClick,(0,a.sY)({props:p,slot:c.slot||{},defaultTag:"label",name:c.name||"Label"})}},18261:function(e,r,t){"use strict";t.d(r,{E:function(){return j}});var n=t(19642),i=t(67294),a=t(133),o=t(58529),s=t(62659),c=t(60852),l=t(92506),d=t(35057),u=t(87587),p=t(61145);var h,m,f=t(78999);!function(e){e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption"}(m||(m={}));var v=((h={})[m.RegisterOption]=function(e,r){return(0,n.gY)({},e,{options:[].concat(e.options,[{id:r.id,element:r.element,propsRef:r.propsRef}])})},h[m.UnregisterOption]=function(e,r){var t=e.options.slice(),i=e.options.findIndex((function(e){return e.id===r.id}));return-1===i?e:(t.splice(i,1),(0,n.gY)({},e,{options:t}))},h),b=(0,i.createContext)(null);function g(e){var r=(0,i.useContext)(b);if(null===r){var t=new Error("<"+e+" /> is missing a parent <"+j.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,g),t}return r}function y(e,r){return(0,a.E)(r.type,v,e,r)}b.displayName="RadioGroupContext";var x;function j(e){var r=e.value,t=e.onChange,a=e.disabled,c=void 0!==a&&a,h=(0,n.gK)(e,["value","onChange","disabled"]),v=(0,i.useReducer)(y,{options:[]}),g=v[0].options,x=v[1],j=(0,f.b)(),w=j[0],k=j[1],O=(0,u.f)(),_=O[0],P=O[1],L="headlessui-radiogroup-"+(0,l.M)(),C=(0,i.useRef)(null),Z=(0,i.useMemo)((function(){return g.find((function(e){return!e.propsRef.current.disabled}))}),[g]),A=(0,i.useMemo)((function(){return g.some((function(e){return e.propsRef.current.value===r}))}),[g,r]),N=(0,i.useCallback)((function(e){var n;if(c)return!1;if(e===r)return!1;var i=null==(n=g.find((function(r){return r.propsRef.current.value===e})))?void 0:n.propsRef.current;return!(null==i?void 0:i.disabled)&&(t(e),!0)}),[t,r,c,g]);(0,p.B)({container:C.current,accept:function(e){return"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}});var E=(0,i.useCallback)((function(e){if(C.current){var r=g.filter((function(e){return!1===e.propsRef.current.disabled})).map((function(e){return e.element.current}));switch(e.key){case s.R.ArrowLeft:case s.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Previous|d.TO.WrapAround)===d.fE.Success){var t=g.find((function(e){return e.element.current===document.activeElement}));t&&N(t.propsRef.current.value)}break;case s.R.ArrowRight:case s.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,d.jA)(r,d.TO.Next|d.TO.WrapAround)===d.fE.Success){var n=g.find((function(e){return e.element.current===document.activeElement}));n&&N(n.propsRef.current.value)}break;case s.R.Space:e.preventDefault(),e.stopPropagation();var i=g.find((function(e){return e.element.current===document.activeElement}));i&&N(i.propsRef.current.value)}}}),[C,g,N]),T=(0,i.useCallback)((function(e){return x((0,n.gY)({type:m.RegisterOption},e)),function(){return x({type:m.UnregisterOption,id:e.id})}}),[x]),S=(0,i.useMemo)((function(){return{registerOption:T,firstOption:Z,containsCheckedOption:A,change:N,disabled:c,value:r}}),[T,Z,A,N,c,r]),q={ref:C,id:L,role:"radiogroup","aria-labelledby":w,"aria-describedby":_,onKeyDown:E};return i.createElement(P,{name:"RadioGroup.Description"},i.createElement(k,{name:"RadioGroup.Label"},i.createElement(b.Provider,{value:S},(0,o.sY)({props:(0,n.gY)({},h,q),defaultTag:"div",name:"RadioGroup"}))))}!function(e){e[e.Empty=1]="Empty",e[e.Active=2]="Active"}(x||(x={}));j.Option=function e(r){var t=(0,i.useRef)(null),a="headlessui-radiogroup-option-"+(0,l.M)(),s=(0,f.b)(),d=s[0],p=s[1],h=(0,u.f)(),m=h[0],v=h[1],b=function(e){void 0===e&&(e=0);var r=(0,i.useState)(e),t=r[0],n=r[1];return{addFlag:(0,i.useCallback)((function(e){return n((function(r){return r|e}))}),[n]),hasFlag:(0,i.useCallback)((function(e){return Boolean(t&e)}),[t]),removeFlag:(0,i.useCallback)((function(e){return n((function(r){return r&~e}))}),[n]),toggleFlag:(0,i.useCallback)((function(e){return n((function(r){return r^e}))}),[n])}}(x.Empty),y=b.addFlag,w=b.removeFlag,k=b.hasFlag,O=r.value,_=r.disabled,P=void 0!==_&&_,L=(0,n.gK)(r,["value","disabled"]),C=(0,i.useRef)({value:O,disabled:P});(0,c.e)((function(){C.current.value=O}),[O,C]),(0,c.e)((function(){C.current.disabled=P}),[P,C]);var Z=g([j.name,e.name].join(".")),A=Z.registerOption,N=Z.disabled,E=Z.change,T=Z.firstOption,S=Z.containsCheckedOption,q=Z.value;(0,c.e)((function(){return A({id:a,element:t,propsRef:C})}),[a,A,t,r]);var R=(0,i.useCallback)((function(){var e;E(O)&&(y(x.Active),null==(e=t.current)||e.focus())}),[y,E,O]),D=(0,i.useCallback)((function(){return y(x.Active)}),[y]),F=(0,i.useCallback)((function(){return w(x.Active)}),[w]),I=(null==T?void 0:T.id)===a,M=N||P,G=q===O,V={ref:t,id:a,role:"radio","aria-checked":G?"true":"false","aria-labelledby":d,"aria-describedby":m,"aria-disabled":!!M||void 0,tabIndex:M?-1:G||!S&&I?0:-1,onClick:M?void 0:R,onFocus:M?void 0:D,onBlur:M?void 0:F},Y=(0,i.useMemo)((function(){return{checked:G,disabled:M,active:k(x.Active)}}),[G,M,k]);return i.createElement(v,{name:"RadioGroup.Description"},i.createElement(p,{name:"RadioGroup.Label"},(0,o.sY)({props:(0,n.gY)({},L,V),slot:Y,defaultTag:"div",name:"RadioGroup.Option"})))},j.Label=f._,j.Description=u.d},13752:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(59499),i=t(4730),a=t(36325),o=t(25675);var s=t(85893);const c=["src","width","height","layout"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=e=>{let{src:r,width:t,height:n,layout:l}=e,u=(0,i.Z)(e,c);const p=parseInt(String(n),10)>=40&&parseInt(String(t),10)>=40,h="string"===typeof r&&r.includes("http")?a.HT:void 0;return(0,s.jsx)("div",{style:{width:t,height:n},className:"overflow-hidden rounded",children:p?(0,s.jsx)(o.default,d({loader:h,src:r,width:t,height:n,layout:l,placeholder:"blur",blurDataURL:"data:image/svg+xml;base64,".concat((f=t,v=n,m='\n<svg width="'.concat(f,'" height="').concat(v,'" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop stop-color="#333" offset="20%" />\n      <stop stop-color="#222" offset="50%" />\n      <stop stop-color="#333" offset="70%" />\n    </linearGradient>\n  </defs>\n  <rect width="').concat(f,'" height="').concat(v,'" fill="#333" />\n  <rect id="r" width="').concat(f,'" height="').concat(v,'" fill="url(#g)" />\n  <animate xlink:href="#r" attributeName="x" from="-').concat(f,'" to="').concat(f,'" dur="1s" repeatCount="indefinite"  />\n</svg>'),window.btoa(m)))},u)):(0,s.jsx)(o.default,d({loader:h,src:r,width:t,height:n,layout:l,placeholder:"empty"},u))});var m,f,v}},95203:function(e,r,t){"use strict";var n=t(59499),i=t(4730),a=t(18261),o=t(71862),s=t(67294),c=t(36325),l=t(85893);const d=["children","size","className","variant"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const h={filled:{group:"border border-dark-800 rounded p-0.5 bg-dark-900",option:{checked:e=>e?"border-transparent border-gradient-r-blue-pink-dark-900":"border-transparent",default:"py-1 rounded-lg border"}},outlined:{group:"gap-2",option:{checked:e=>e?"border-dark-700 bg-gradient-to-r from-blue to-pink":"border-dark-700",default:"py-3 rounded border"}}},m=e=>{let{children:r,size:t,className:n="",variant:o="filled"}=e,u=(0,i.Z)(e,d);return(0,l.jsx)(a.E,p(p({},u),{},{className:(0,c.AK)(n,"flex bg-dark-1000/40",h[o].group),children:s.Children.map(r,(e=>(0,s.isValidElement)(e)?(0,s.cloneElement)(e,{variant:o,size:t,style:{width:"calc(100% / ".concat(s.Children.toArray(r).length,")")}}):e))}))};m.Button=({value:e,children:r,size:t,style:n,className:i})=>(0,l.jsx)(a.E.Option,{value:e,as:s.Fragment,children:({checked:a})=>(0,l.jsx)(o.ZP,{style:n,size:t,id:"radio-option-".concat(e),variant:a?"filled":"empty",color:a?"blue":"gray",className:i,type:"button",children:r})}),r.Z=m},65856:function(e,r,t){"use strict";t.d(r,{y:function(){return l}});var n=t(85169),i=t(71923),a=t(25401),o=t(64527),s=t(12614),c=t(67294);const l=()=>{const{i18n:e}=(0,n.mV)(),{chainId:r}=(0,s.a)(),t=(0,c.useCallback)((r=>({[o.sg.PostAuctionLauncher]:e._(e._("Post Auction Launcher"))}[r])),[e]);return{map:(0,c.useMemo)((()=>{var e,t,n,s;if(r)return{[null===(e=a[r])||void 0===e||null===(t=e[i.bk[r]])||void 0===t?void 0:t.contracts.PostAuctionLauncher.address]:o.sg.PostAuctionLauncher,[o.sg.PostAuctionLauncher]:null===(n=a[r])||void 0===n||null===(s=n[i.bk[r]])||void 0===s?void 0:s.contracts.PostAuctionLauncher}}),[r]),templateIdToLabel:t}}},12281:function(e,r,t){"use strict";t.d(r,{q:function(){return i}});var n=t(19485);const i=t(74231).Z_().test("is-address","${value} is not a valid address",(e=>{if(0===(null===e||void 0===e?void 0:e.length))return!0;try{return!(!e||!(0,n.Kn)(e))}catch{return!1}}))},48195:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return W}});var n=t(63153),i=t(85169),a=t(71862),o=t(56785),s=t(38239),c=t(59499),l=t(95496),d=t(10145),u=t(80121),p=t(22244),h=t(7423),m=t(12614),f=t(69260),v=t.n(f),b=t(67294),g=t(87536),y=t(85893);var x=({})=>{const{account:e}=(0,m.a)(),{i18n:r}=(0,i.mV)(),{setValue:t,formState:{errors:n}}=(0,g.Gc)(),[a]=(0,g.qo)({name:["auctionAddress"]}),{auction:s,loading:c}=(0,u.ZP)(a);return(0,y.jsxs)(d.Z.Section,{columns:4,header:(0,y.jsx)(d.Z.Section.Header,{header:r._(r._("General Details")),subheader:r._(r._("Automatically lock liquidity post-auction"))}),children:[(0,y.jsx)("div",{className:"col-span-4",children:(0,y.jsx)(d.Z.TextField,{name:"adminAddress",label:r._(r._("Token Creator Address*")),placeholder:"0x...",helperText:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h.Z,{children:r._(r._("Enter the wallet address used to create the auction token on MISO."))}),(0,y.jsx)(h.Z,{className:"underline cursor-pointer",onClick:()=>t("adminAddress",e||""),children:r._(r._("Use my address"))})]})})}),(0,y.jsx)("div",{className:"col-span-4",children:(0,y.jsx)(d.Z.TextField,{name:"auctionAddress",label:r._(r._("Auction Address*")),placeholder:"0x...",helperText:c?(0,y.jsx)("div",{className:"w-4 h-4",children:(0,y.jsx)(v(),{animationData:p,autoplay:!0,loop:!0})}):s?(0,y.jsx)(h.Z,{className:"!text-green",children:r._(r._("Auction found!"))}):r._(r._("Address of the auction you held for your token")),error:!n.auctionAddress&&!c&&!s&&(null===a||void 0===a?void 0:a.length)>0?r._(r._("Auction not found or you do not admin rights")):void 0})}),s&&(0,y.jsxs)("div",{className:"col-span-4 md:col-span-2",children:[(0,y.jsx)(o.Z,{weight:700,children:r._(r._("Liquidity Pair"))}),(0,y.jsxs)(o.Z,{className:"mt-2",children:[null===s||void 0===s?void 0:s.auctionToken.symbol," + ",null===s||void 0===s?void 0:s.paymentToken.symbol]}),(0,y.jsx)(h.Z,{children:r._(r._("Liquidity pair token is set to the payment currency from your auction."))})]})]})},j=t(71923),w=t(95203);var k=({})=>{const{chainId:e}=(0,m.a)(),{i18n:r}=(0,i.mV)(),{getValues:t,setValue:n}=(0,g.Gc)();return e?(0,y.jsxs)("div",{className:"flex flex-col",children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(o.Z,{weight:700,children:r._(r._("Liquidity Lockup Time"))}),(0,y.jsxs)(w.Z,{variant:"outlined",value:t("liqLockTime"),onChange:e=>n("liqLockTime",e,{shouldValidate:!0}),className:"mt-2 !flex",children:[(0,y.jsx)(w.Z.Button,{value:180,activeClassName:"border-purple",className:"!bg-none px-5 !py-2.5",children:r._(r._("{0} days",{0:180}))}),(0,y.jsx)(w.Z.Button,{value:90,activeClassName:"border-purple",className:"!bg-none px-5 !py-2.5",children:r._(r._("{0} days",{0:90}))})]})]}),(0,y.jsx)("div",{className:"flex flex-col flex-grow",children:(0,y.jsx)(d.Z.TextField,{name:"liqLockTime",helperText:r._(r._("Custom amount of days")),placeholder:"",endIcon:(0,y.jsx)(o.Z,{variant:"sm",weight:700,className:"text-secondary",children:r._(r._("Days"))})})})]}):(0,y.jsx)(y.Fragment,{})};var O=({})=>{var e;const{i18n:r}=(0,i.mV)(),[t,n]=(0,g.qo)({name:["auctionAddress","liqPercentage"]}),{auction:a}=(0,u.ZP)(t);return(0,y.jsxs)(d.Z.Section,{className:"pt-8",columns:4,header:(0,y.jsx)(d.Z.Section.Header,{header:r._(r._("Liquidity Options"))}),children:[(0,y.jsx)("div",{className:"col-span-4",children:(0,y.jsx)(k,{})}),(0,y.jsx)("div",{className:"col-span-4",children:(0,y.jsx)(d.Z.TextField,{endIcon:(0,y.jsx)(o.Z,{variant:"sm",weight:700,className:"text-secondary",children:"%"}),name:"liqPercentage",label:r._(r._("Liquidity Launch Percentage*")),placeholder:"50",helperText:r._(r._("The amount raised from the auction, pairing with tokens to be launched on NEXUSSwap with equal weighting in the liquidity pool."))})}),a&&(0,y.jsxs)("div",{className:"col-span-4",children:[(0,y.jsx)(o.Z,{weight:700,children:r._(r._("Liquidity Pair"))}),(0,y.jsxs)(o.Z,{className:"mt-2",children:[null===(e=a.totalTokens)||void 0===e?void 0:e.multiply(new j.gG(n,"100")).toSignificant(6)," ",a.auctionToken.symbol," + ",new j.gG(n,"100").toSignificant(6),"% of auction proceeds in"," ",a.paymentToken.symbol]}),(0,y.jsx)(h.Z,{children:r._(r._("Liquidity pair token is set to the payment currency from your auction."))})]})]})},_=t(63929),P=t(84243),L=t(9279),C=t(25401),Z=t(65856),A=t(64527),N=t(83304),E=t(68411);var T=t(36325),S=t(49680),q=t(70028);var R=({txHash:e,onDismiss:r,liqLauncherAddress:t})=>{const{i18n:n}=(0,i.mV)();return(0,y.jsx)(q.S.SubmittedModalContent,{txHash:e,header:n._(n._("Success!")),subheader:n._(n._("Permission list creation transaction successfully submitted. Your newly created point list address will appear here once we receive the event from the blockchain")),onDismiss:r,children:(0,y.jsxs)("div",{className:"flex flex-col px-4 py-3 bg-dark-900 rounded border border-dark-700 mt-4",children:[(0,y.jsx)(o.Z,{variant:"sm",className:"text-secondary",children:n._(n._("Liquidity Launcher Address"))}),t?(0,y.jsx)(o.Z,{variant:"sm",className:"text-high-emphesis",weight:700,children:(0,y.jsx)(S.Z,{toCopy:t,className:"text-high-emphesis opacity-100",children:t})}):(0,y.jsx)("div",{className:"w-4 h-4",children:(0,y.jsx)(v(),{animationData:p,autoplay:!0,loop:!0})})]})})};function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I=({open:e,onDismiss:r,data:t})=>{var n;const{chainId:a}=(0,m.a)(),{i18n:s}=(0,i.mV)(),{init:c,unsubscribe:l,subscribe:d}=(()=>{var e,r,t,n;const{account:i,chainId:a}=(0,m.a)(),o=(0,E.h7)(),s=(0,N.MQ)(),c=(0,N.cq)(a?null===(e=C[a])||void 0===e||null===(r=e[j.bk[a]])||void 0===r?void 0:r.contracts.MISOLauncher.address:void 0,a?null===(t=C[a])||void 0===t||null===(n=t[j.bk[a]])||void 0===n?void 0:n.contracts.MISOLauncher.abi:void 0),{map:l}=(0,Z.y)(),d=(0,b.useCallback)(((e,r)=>{c&&c.on(e,r)}),[c]),u=(0,b.useCallback)(((e,r)=>{c&&c.off(e,r)}),[c]);return{init:(0,b.useCallback)((async e=>{if(!c)throw new Error("Contract not initialized");if(!s)throw new Error("Factory contract not initialized");if(!l)throw new Error("Template map not initialized");if(!i)throw new Error("Wallet not connected");if(!e.tokenSupply)throw new Error("Token supply not defined");const r=await c.getTemplateId(l[A.sg.PostAuctionLauncher].address),t=await c.createLauncher(r,e.tokenAddress,e.tokenSupply.quotient.toString(),L.d,P.$.encode(["address","address","address","address","uint256","uint256"],[e.auctionAddress,s.address,e.adminAddress,i,e.liqPercentage,e.liqLockTime]));return o(t,{summary:"Initialize Liquidity Launcher"}),t}),[i,o,c,s,l]),subscribe:d,unsubscribe:u}})(),{auction:h}=(0,u.ZP)(null===t||void 0===t?void 0:t.auctionAddress),{0:f,1:g}=(0,b.useState)(),{0:x,1:w}=(0,b.useState)(),{0:k,1:O}=(0,b.useState)(!1),{0:S,1:q}=(0,b.useState)(),D=(0,b.useCallback)((()=>{k||(g(void 0),w(void 0),q(void 0))}),[k]),I=(0,b.useCallback)((()=>{D(),r()}),[r,D]),M=(0,b.useCallback)((async e=>{O(!0);try{const r=await c(e);null!==r&&void 0!==r&&r.hash&&(w(r.hash),await r.wait())}catch(t){var r;q(null===(r=t.error)||void 0===r?void 0:r.message)}finally{O(!1)}}),[c]);return(0,b.useEffect)((()=>(d("LauncherCreated",((e,r,t,{transactionHash:n})=>{(null===n||void 0===n?void 0:n.toLowerCase())===(null===x||void 0===x?void 0:x.toLowerCase())&&g(r)})),()=>{l("LauncherCreated",(()=>console.log("unsubscribed")))})),[d,x,l]),t&&a?(0,y.jsx)(_.Z.Controlled,{isOpen:e,onDismiss:I,afterLeave:()=>w(void 0),children:x?(0,y.jsx)(R,{txHash:x,liqLauncherAddress:f,onDismiss:I}):(0,y.jsxs)(_.Z.Body,{children:[(0,y.jsx)(_.Z.Header,{onClose:I,header:s._(s._("Create Liquidity Launcher")),subheader:s._(s._("Please review your entered details thoroughly."))}),(0,y.jsx)(_.Z.Content,{children:(0,y.jsxs)("div",{className:"grid grid-cols-2 items-center",children:[(0,y.jsx)(o.Z,{variant:"sm",className:"text-secondary py-2 border-b border-dark-700",children:s._(s._("Auction Address"))}),(0,y.jsx)(o.Z,{weight:700,variant:"sm",className:"text-purple py-2 border-b border-dark-700",children:(0,y.jsx)("a",{target:"_blank",rel:"noreferrer",href:(0,T.E8)(a,t.auctionAddress,"address"),children:(0,T.Sy)(t.auctionAddress,12)})}),(0,y.jsx)(o.Z,{variant:"sm",className:"text-secondary py-2 border-b border-dark-700",children:s._(s._("Lock period"))}),(0,y.jsx)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis py-2 border-b border-dark-700",children:s._(s._("{0} days",{0:t.liqLockTime}))}),h&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.Z,{variant:"sm",className:"text-secondary py-2 border-b border-dark-700 h-full flex items-center",children:s._(s._("Liquidity"))}),(0,y.jsxs)(o.Z,{weight:700,variant:"sm",className:"text-high-emphesis py-2 border-b border-dark-700",children:[null===(n=h.totalTokens)||void 0===n?void 0:n.multiply(new j.gG(t.liqPercentage,"100")).toSignificant(6)," ",h.auctionToken.symbol," + ",new j.gG(t.liqPercentage,"100").toSignificant(6),"% of auction proceeds in ",h.paymentToken.symbol]})]})]})}),(0,y.jsxs)(_.Z.Actions,{children:[(0,y.jsx)(_.Z.Action,{onClick:I,children:s._(s._("Cancel"))}),(0,y.jsx)(_.Z.Action,F(F({main:!0},k&&{startIcon:(0,y.jsx)("div",{className:"w-4 h-4 mr-1",children:(0,y.jsx)(v(),{animationData:p,autoplay:!0,loop:!0})})}),{},{disabled:k,onClick:()=>M(t),children:s._(s._("Create Liquidity Launcher"))}))]}),(0,y.jsx)(_.Z.Error,{children:S})]})}):(0,y.jsx)(y.Fragment,{})};var M=t(12281),G=t(74231);function V(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?V(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const z=G.Ry({auctionAddress:M.q.required("Target must be a valid address"),adminAddress:M.q.required("Target must be a valid address"),liqPercentage:G.Rx().typeError("Target must be a percentage").min(0,"Must be greater than zero").max(100,"Can be at most 100%"),liqLockTime:G.Rx().required("Target must be a number").min(30,"Lockup period must be at least 30 days")});var H=()=>{const{i18n:e}=(0,i.mV)(),{0:r,1:t}=(0,b.useState)(!1),n=(0,g.cI)({defaultValues:{liqPercentage:100},resolver:(0,l.X)(z),reValidateMode:"onChange",mode:"onChange"}),{watch:o,formState:{errors:s,isValid:c,isValidating:p}}=n,h=o(),{auction:m}=(0,u.ZP)(h.auctionAddress),f=!p&&c&&m?((e,r)=>({auctionAddress:r.auctionInfo.addr,adminAddress:e.adminAddress,liqPercentage:e.liqPercentage,liqLockTime:3600*e.liqLockTime*24,tokenAddress:r.auctionToken.address,tokenSupply:r.totalTokens}))(h,m):void 0;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.Z,Y(Y({},n),{},{onSubmit:n.handleSubmit((()=>t(!0))),children:(0,y.jsxs)(d.Z.Card,{children:[(0,y.jsx)(x,{}),(0,y.jsx)(O,{}),(0,y.jsx)(d.Z.Submit,{children:(0,y.jsx)("div",{children:(0,y.jsx)(a.ZP,{disabled:Object.keys(s).length>0,color:"blue",type:"submit",children:e._(e._("Review"))})})})]})})),(0,y.jsx)(I,{open:r,onDismiss:()=>t(!1),data:f})]})},U=t(87433),B=t(95497),K=t(41664);const X=()=>{const{i18n:e}=(0,i.mV)(),r=(0,y.jsx)("a",{href:"https://instantmiso.gitbook.io/miso/dev/pool-liquidity-smart-contract/pool-liquidity-contract",target:"_blank",rel:"noreferrer",className:"text-blue",children:"documentation"});return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(B.Zo,{className:"bg-miso-bowl bg-cover",children:(0,y.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,y.jsx)("div",{children:(0,y.jsx)(a.ZP,{color:"blue",size:"sm",className:"rounded-full !pl-2 !py-1.5",startIcon:(0,y.jsx)(n.wyc,{width:24,height:24}),children:(0,y.jsx)(K.default,{href:"/miso",children:e._(e._("All Auctions"))})})}),(0,y.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,y.jsx)(o.Z,{variant:"h2",className:"text-high-emphesis",weight:700,children:e._(e._("New Liquidity Launcher"))}),(0,y.jsx)(o.Z,{variant:"sm",weight:400,children:(0,y.jsx)(i.cC,{id:"Create your own Liquidity Launcher at the LiquidityLauncher Factory. For details on all current LiquidityLauncher types, please visit our {link}",values:{link:r},components:b.Fragment})})]})]})}),(0,y.jsx)(B.SX,{children:(0,y.jsx)(H,{})})]})};X.Layout=B.ZP,X.Guard=(0,U.Z)(s.L.MISO);var W=X},8085:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/miso/launcher",function(){return t(48195)}])}},function(e){e.O(0,[7440,4221,3978,3588,145,121,9774,2888,179],(function(){return r=8085,e(e.s=r);var r}));var r=e.O();_N_E=r}]);