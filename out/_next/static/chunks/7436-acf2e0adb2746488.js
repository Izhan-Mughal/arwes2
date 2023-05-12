"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7436],{97436:function(e,s,t){var l=t(59499),r=t(4730),n=t(63801),i=t(63153),a=t(85169),c=t(134),o=t(71862),d=t(17141),h=t(41626),x=t(42144),m=t(48410),u=t(573),g=t(56785),p=t(42802),f=t(36325),j=t(15423),v=t(76866),w=t(90573),b=t(79067),N=t(12614),y=t(69260),Z=t.n(y),_=t(67294),k=t(85893);const C=["spendFromWallet","currencyLogo","className","size","balance","showMax"];function O(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,l)}return t}function S(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?O(Object(t),!0).forEach((function(s){(0,l.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}const A=(0,_.createContext)(!1),P=()=>(0,_.useContext)(A),K=e=>{var s,t;let{spendFromWallet:l=!0,currencyLogo:n=!0,className:c,size:o="md",balance:h,showMax:x=!0}=e,m=(0,r.Z)(e,C);const u=(0,v.Z)(),{i18n:p}=(0,a.mV)(),{account:w}=(0,N.a)(),{0:y,1:Z}=(0,_.useState)(!1),O=(0,j.C)(w&&!h?w:void 0,m.currency,l),P=h||O,K=null===(s=(0,f.iN)(P))||void 0===s?void 0:s.toExact(),B=null===(t=(0,f.iN)(P))||void 0===t?void 0:t.asFraction,F=(0,f.eo)(m.value,m.currency),z=!!P&&(null===F||void 0===F?void 0:F.greaterThan(P));let W=(0,k.jsx)(g.Z,{variant:"h3",weight:700,className:"text-high-emphesis",children:m.title?m.title:p._(p._("Choose an Asset"))});return m.currency&&(W=(0,k.jsxs)("div",{className:(0,f.AK)(m.onSelect?"cursor-pointer ":"","flex gap-2.5 items-center"),onClick:()=>Z(!0),children:[(0,k.jsxs)("div",{className:"flex gap-0.5 items-center",children:[(0,k.jsx)(g.Z,{id:m.id,variant:"h3",weight:700,className:"text-high-emphesis",children:m.currency.symbol}),m.onSelect&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.v4q,{width:24,height:24,className:"text-secondary"}),(0,k.jsx)(b.Z.Controlled,{open:y,selectedCurrency:m.currency,onCurrencySelect:m.onSelect,onDismiss:()=>Z(!1),currencyList:m.currencies})]})]}),m.chip&&(0,k.jsx)(d.Z,{color:"white",label:m.chip})]})),(0,k.jsx)(A.Provider,{value:(0,_.useMemo)((()=>z||!1),[z]),children:(0,k.jsxs)("div",{className:(0,f.AK)(c,"flex flex-col gap-4 mt-4 lg:mt-0"),children:[(m.title||m.headerRight)&&(0,k.jsxs)("div",{className:"flex justify-between px-2",children:[""!==m.title&&W,!u&&m.headerRight&&m.headerRight]}),(0,k.jsxs)("div",{className:"flex flex-col gap-4 lg:flex-row lg:gap-0",children:[(0,k.jsx)(M,S(S({},m),{},{size:o,currencyLogo:n,spendFromWallet:l,onMax:()=>m.onChange(K,!0),showMax:!!(x&&P&&B&&P.greaterThan("0"))&&!(null!==F&&void 0!==F&&F.equalTo(B)),footer:(0,k.jsx)(M.Balance,{balance:P,onClick:()=>m.onChange(K,!0),spendFromWallet:l,id:m.id+"-balance"})})),u&&m.headerRight]})]})})},M=({value:e,currency:s,onChange:t,onSelect:l,onMax:r,footer:d,disabled:x,showMax:u=!0,currencies:p=[],headerRight:j,currencyLogo:N,size:y})=>{const C=P(),O=(0,v.Z)(),{i18n:S}=(0,a.mV)(),A=(0,w.NF)((0,f.eo)(0===Number(e)?"1":e,s)),K=(0,_.useRef)(null),{0:M,1:B}=(0,_.useState)(0);(0,_.useEffect)((()=>{var s;O&&K.current&&B(e?(null===K||void 0===K||null===(s=K.current)||void 0===s?void 0:s.clientWidth)+6:60)}),[O,e]);let F=(0,k.jsxs)("div",{className:"flex flex-row gap-3 py-2.5 px-2 flex-grow items-center",children:[(0,k.jsx)("div",{className:"w-12 h-12 rounded-full",children:(0,k.jsx)(Z(),{animationData:c,autoplay:!0,loop:!0})}),l&&(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(b.Z,{trigger:(0,k.jsx)("div",{className:"inline-flex items-center",children:(0,k.jsx)(o.ZP,{disabled:x,color:"blue",size:"sm",variant:"filled",className:"!rounded-full",endIcon:(0,k.jsx)(i.v4q,{width:24,height:24}),children:S._(S._("Select a Token"))})}),selectedCurrency:s,onCurrencySelect:l,currencyList:p})})]});return s&&(F=(0,k.jsxs)("div",{className:(0,f.AK)(C?"border-red border-opacity-40":"border-dark-800","md"===y?"py-4":"py-2","flex gap-2 py-4 px-3 items-center border-b justify-between flex-row"),children:[(0,k.jsxs)("div",{className:"flex flex-row flex-1",children:[N&&(0,k.jsx)("div",{className:(0,f.AK)("md"===y?"w-[48px]  min-w-[48px]":"w-40px min-w-[40px]"),children:(0,k.jsx)(h.X,{currency:s,size:"md"===y?48:40,className:"!rounded-full"})}),(0,k.jsxs)("div",{className:"flex flex-col justify-between flex-1 ml-2 ",children:[(0,k.jsxs)(g.Z,{variant:"h3",weight:700,className:"relative flex flex-row items-baseline overflow-hidden",children:[(0,k.jsx)(m.Z,{disabled:x,value:e||"",onUserInput:t,placeholder:"0.00",className:"bg-transparent w-content ",autoFocus:!0}),O&&(0,k.jsx)("span",{className:"hidden pointer-events-none md:flex text-low-emphesis",children:null===s||void 0===s?void 0:s.symbol})]}),(0,k.jsxs)(g.Z,{id:s.symbol+"-usdc-value",variant:"xs",className:C?"text-red":A&&e?"text-green":"text-low-emphesis",children:["\u2248$",A?A.toSignificant(6):"0.00"]})]})]}),C?(0,k.jsx)("div",{className:"w-8 h-8 mr-1 min-w-8 min-h-8",children:(0,k.jsx)(n.$Ow,{className:"w-8 h-8 min-w-8 min-h-8 text-red"})}):u&&(0,k.jsx)(o.ZP,{size:"xs",variant:"outlined",color:"gray",className:"!border",onClick:()=>r(),children:"Max"})]})),(0,k.jsxs)("div",{className:(0,f.AK)("border",C?"border-red border-opacity-40":"border-dark-800",j?"lg:rounded-l lg:rounded-r-[0px]":"lg:rounded","flex-1 rounded bg-dark-900 flex flex-col overflow-hidden"),children:[(0,k.jsx)(g.Z,{variant:"h3",weight:700,className:"relative flex flex-row items-baseline",children:(0,k.jsx)("span",{ref:K,className:"opacity-0 absolute pointer-events-none tracking-[0]",children:"".concat(e||"0.00")})}),F,d&&d]})};M.Balance=({balance:e,onClick:s,spendFromWallet:t=!0,id:l})=>{const{i18n:r}=(0,a.mV)(),n=P();let i=(0,k.jsx)(x.o,{width:16,height:14,className:(0,f.AK)(e?"text-high-emphesis":"text-low-emphesis")});return t||(i=(0,k.jsx)(x.OP,{width:16,height:16,className:(0,f.AK)(e?"text-high-emphesis":"text-low-emphesis","truncate")})),(0,k.jsxs)("div",{className:(0,f.AK)(n?"bg-red/10":"","flex justify-between py-2 px-3"),children:[(0,k.jsxs)("div",{className:"flex items-center gap-1.5 mr-1",children:[i,(0,k.jsx)(g.Z,{variant:"sm",className:(0,f.AK)(e?"text-high-emphesis":"text-low-emphesis"),children:r._(r._("Balance:"))})]}),(0,k.jsx)(g.Z,{variant:"sm",weight:700,className:(0,f.AK)(e?"text-high-emphesis":"text-low-emphesis","truncate"),onClick:()=>s(e),id:l,children:e?"".concat(e.toSignificant(6)," ").concat(e.currency.symbol):"0.0000"})]})},K.Panel=M,K.WalletSwitch=({checked:e,onChange:s,label:t,id:l})=>{const r=P(),n=(0,v.Z)(),{i18n:i}=(0,a.mV)(),c=(0,k.jsx)(p.Z,{});return(0,k.jsxs)("div",{className:(0,f.AK)(r?"lg:border-red/40":"lg:border-dark-800","lg:p-4 flex gap-1.5 items-center lg:border-r lg:border-t lg:border-b lg:bg-dark-900 lg:rounded-r lg:justify-center lg:min-w-[120px]"),children:[(0,k.jsxs)("div",{className:"flex items-center gap-3 lg:flex-col",children:[(0,k.jsxs)("div",{className:"flex flex-col order-1 lg:order-2",children:[(0,k.jsx)(g.Z,{variant:"xxs",weight:700,className:"text-right text-secondary lg:text-center",children:t||i._(i._("Funding source:"))}),(0,k.jsxs)(g.Z,{variant:"sm",weight:700,className:"text-right text-high-emphesis lg:text-center lg:flex lg:gap-1 lg:items-center lg:justify-center",children:[e?i._(i._("Wallet")):i._(i._("BentoBox"))," ",n&&c]})]}),(0,k.jsx)("div",{className:"order-2 lg:order-1",children:(0,k.jsx)(u.Z,{id:l,checked:e,onChange:s,checkedIcon:(0,k.jsx)("div",{className:"flex items-center justify-center w-full h-full text-dark-700",children:(0,k.jsx)(x.o,{width:16,height:14})}),uncheckedIcon:(0,k.jsx)("div",{className:"flex items-center justify-center w-full h-full text-dark-700",children:(0,k.jsx)(x.OP,{width:16,height:16})})})})]}),!n&&c]})},s.Z=K},42802:function(e,s,t){var l=t(63153),r=t(85169),n=t(42144),i=t(13752),a=t(63929),c=t(573),o=t(56785),d=t(36325),h=t(67294),x=t(85893);s.Z=()=>{const{i18n:e}=(0,r.mV)(),{0:s,1:t}=(0,h.useState)(!1);return(0,x.jsx)(a.Z,{trigger:(0,x.jsx)("div",{className:"flex items-center justify-center rounded cursor-pointer lg:w-4 lg:h-4",children:(0,x.jsx)(l.zqj,{className:"w-4 h-4 text-high-emphesis"})}),children:({setOpen:l})=>(0,x.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,x.jsx)(a.Z.Header,{header:e._(e._("Bentobox")),onClose:()=>l(!1)}),(0,x.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,x.jsx)("div",{className:"relative shadow-pink-glow",children:(0,x.jsx)(i.Z,{src:"https://app.sushi.com/images/bentobox/logo.png",width:160,height:120,alt:"BentoBox Logo"})}),(0,x.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,x.jsx)(o.Z,{variant:"lg",weight:700,className:"text-center text-high-emphesis",children:e._(e._("NEXUSSwap utilizes a token vault called BentoBox that has balances separate from your wallet."))}),(0,x.jsx)(o.Z,{variant:"sm",className:"text-center text-secondary",children:e._(e._('You can think of this as having "account balances" for each asset within sushi.com'))})]})]}),(0,x.jsxs)(a.Z.BorderedContent,{className:"flex flex-col",children:[(0,x.jsxs)("div",{className:"grid grid-cols-2 gap-10 flex-grow min-h-[160px]",children:[(0,x.jsxs)("div",{className:"flex flex-col justify-center gap-3",children:[(0,x.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,x.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",s?"text-low-emphesis":"text-high-emphesis"),children:[(0,x.jsx)(n.OP,{width:48}),(0,x.jsx)(o.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Bentobox"))})]}),(0,x.jsxs)("div",{className:(0,d.AK)("flex flex-col gap-1",s?"text-high-emphesis":"text-low-emphesis"),children:[(0,x.jsx)(n.o,{width:48}),(0,x.jsx)(o.Z,{variant:"xs",className:"text-secondary",children:e._(e._("Wallet"))})]})]}),(0,x.jsx)(o.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("You\u2019ll see these icons next to your balance in various input fields."))})]}),(0,x.jsx)("div",{className:"h-full bg-right bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot.png')"}})]}),(0,x.jsx)("div",{className:"flex flex-col flex-grow min-h-[160px]",children:(0,x.jsxs)("div",{className:"grid flex-grow grid-cols-2",children:[(0,x.jsx)("div",{className:"h-full bg-no-repeat bg-contain",style:{backgroundImage:"url('/images/trident/AssetInputScreenshot2.png')"}}),(0,x.jsxs)("div",{className:"flex flex-col items-center justify-center gap-2 p-3 px-8",children:[(0,x.jsx)(c.Z,{checked:s,onChange:t}),(0,x.jsx)(o.Z,{weight:700,variant:"sm",className:"text-center text-high-emphesis",children:e._(e._("Use the toggle to switch between balances when interacting with our platform."))})]})]})})]})]})})}},15423:function(e,s,t){t.d(s,{L:function(){return a},C:function(){return c}});var l=t(71923),r=t(15393),n=t(98950),i=t(67294);const a=(e,s,t)=>{const a=(0,i.useMemo)((()=>s.every((e=>e))?s.map((e=>e.wrapped.address)):void 0),[s]),c=(0,n.K5)(e,s),{data:o}=(0,r.wu)(a);return(0,i.useMemo)((()=>s.every((e=>!!e))&&o?s.map(((e,s)=>{if(!e)return;let r;return r=!1===(null===t||void 0===t?void 0:t[s])?o.find((s=>(null===s||void 0===s?void 0:s.currency.wrapped.address)===e.wrapped.address)):c.find((s=>(null===s||void 0===s?void 0:s.currency.wrapped.address)===e.wrapped.address)),r||(r=l.ih.fromRawAmount(e.wrapped,"0")),r}),[]):[]),[s,o,t,c])},c=(e,s,t)=>{const l=(0,i.useMemo)((()=>[s]),[s]),r=(0,i.useMemo)((()=>[t]),[t]),n=a(e,l,r);return(0,i.useMemo)((()=>n?n[0]:void 0),[n])}}}]);