(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8383],{29246:function(e,i,n){var r=n(98612),t=n(37005);e.exports=function(e){return t(e)&&r(e)}},40690:function(e,i,n){var r=n(34963),t=n(29932),s=n(40371),l=n(22545),a=n(29246),o=Math.max;e.exports=function(e){if(!e||!e.length)return[];var i=0;return e=r(e,(function(e){if(a(e))return i=o(e.length,i),!0})),l(i,(function(i){return t(e,s(i))}))}},4788:function(e,i,n){var r=n(5976)(n(40690));e.exports=r},66223:function(e,i,n){"use strict";n.d(i,{Z:function(){return l}});var r=n(36325),t=(n(67294),n(41626)),s=n(85893);function l({currency0:e,currency1:i,className:n="",logoClassName:l="",size:a=16}){return(0,s.jsxs)("div",{className:(0,r.AK)("flex items-center space-x-2",n),children:[(0,s.jsx)(t.X,{className:l,currency:e,size:a.toString()+"px"}),(0,s.jsx)(t.X,{className:l,currency:i,size:a.toString()+"px"})]})}},40334:function(e,i,n){"use strict";n.d(i,{Z:function(){return o}});var r=n(67294),t=n(33295),s=n(36325),l=n(73803),a=n(85893);function o({header:e,subheader:i,figure:n,change:o,chart:d,defaultTimespan:c,timespans:u}){const{0:v,1:m}=(0,r.useState)(null===u||void 0===u?void 0:u.find((e=>e.text===c))),h=(0,r.useMemo)((()=>{const e=Math.round(Date.now()/1e3);return null===d||void 0===d?void 0:d.reduce(((i,n)=>{const r=n.x.getTime();return Math.round(r/1e3)>=e-(null===v||void 0===v?void 0:v.length)&&i.push({x:r,y:n.y}),i}),[])}),[d,null===v||void 0===v?void 0:v.length]),{0:x,1:p}=(0,r.useState)((null===h||void 0===h?void 0:h.length)-1),f=(0,r.useMemo)((()=>{var e;return null===h||void 0===h||null===(e=h[x])||void 0===e?void 0:e.y}),[h,x]),y=(0,r.useMemo)((()=>{var e;return null===h||void 0===h||null===(e=h[x])||void 0===e?void 0:e.x}),[h,x]);return(0,a.jsxs)("div",{className:"w-full p-5 space-y-4 font-bold border rounded bg-dark-900 border-dark-700",children:[(0,a.jsxs)("div",{className:"flex justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-xs text-secondary",children:i}),(0,a.jsx)("div",{className:"text-high-emphesis",children:e})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"flex justify-end text-2xl text-high-emphesis",children:(0,s.uf)(null!==f&&void 0!==f?f:n,!0,!1)}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-end",children:[x===(null===h||void 0===h?void 0:h.length)-1&&(0,a.jsx)(l.Z,{number:o,percent:!0}),(0,a.jsx)("div",{className:"ml-3 font-normal",children:y?(0,s.p6)(new Date(y)):"Past 24 Hours"})]})]})]}),(0,a.jsx)("div",{className:"py-4 h-36",children:h&&(0,a.jsx)(t.Z,{data:h,stroke:{gradient:{from:"#27B0E6",to:"#FA52A0"}},setSelectedIndex:p})}),(0,a.jsx)("div",{className:"flex flex-row justify-end space-x-4",children:u.map(((e,i)=>(0,a.jsx)("button",{className:(0,s.AK)(e===v?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:()=>m(e),children:e.text},i)))})]})}},34645:function(e,i,n){"use strict";n.d(i,{Z:function(){return m}});var r=n(66223),t=n(31820),s=n(36325),l=n(62483),a=n(25675),o=n(67294),d=n(73803),c=n(85893);function u({pair:e}){var i,n;const t=(0,l.U8)(null===e||void 0===e||null===(i=e.token0)||void 0===i?void 0:i.id),s=(0,l.U8)(null===e||void 0===e||null===(n=e.token1)||void 0===n?void 0:n.id);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(r.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:t,currency1:s,size:40}),(0,c.jsxs)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:[(0,c.jsx)("div",{className:"font-bold text-high-emphesis",children:null===e||void 0===e?void 0:e.name}),(0,c.jsx)("div",{className:"text-secondary",children:e.type})]})]})})}function v({rewards:e}){return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"inline-flex items-center space-x-4 flex-inline",children:[(0,c.jsx)("div",{className:"flex flex-col items-center space-y-2",children:null===e||void 0===e?void 0:e.map(((e,i)=>(0,c.jsx)("div",{className:"flex items-center",children:e.icon&&(0,c.jsx)(a.default,{src:e.icon,width:"30px",height:"30px",className:"rounded-full",layout:"fixed",alt:e.currency.symbol})},i)))}),(0,c.jsx)("div",{className:"flex flex-col space-y-1",children:null===e||void 0===e?void 0:e.map(((e,i)=>{var n,r;const t=6-String(null===e||void 0===e||null===(n=e.rewardPerDay)||void 0===n?void 0:n.toFixed(0)).length;return(0,c.jsxs)("div",{className:"text-base whitespace-nowrap",children:[null===e||void 0===e||null===(r=e.rewardPerDay)||void 0===r?void 0:r.toFixed(t>0?t:0)," ",e.currency.symbol]},i)}))})]})})}function m({pools:e}){const i=o.useMemo((()=>({id:"liquidity",desc:!0})),[]),n=o.useMemo((()=>[{Header:"Pool Name",accessor:"pair",Cell:e=>(0,c.jsx)(u,{pair:e.value}),disableSortBy:!0,align:"left"},{Header:"Annual / Monthly / Daily APR",accessor:"apr",Cell:e=>(0,c.jsxs)("div",{className:"inline-flex flex-row font-medium",children:[e.value.annual<1e4?(0,c.jsx)(d.Z,{number:e.value.annual,percent:!0}):(0,c.jsx)("div",{className:"font-normal text-green",children:">10,000%"}),"\xa0/ ",e.value.monthly>1e4?">10,000%":(0,s.T3)(e.value.monthly),"\xa0/ ",e.value.daily>1e4?">10,000%":(0,s.T3)(e.value.daily)]}),align:"right",sortType:(e,i)=>e.original.apr.annual>i.original.apr.annual?1:i.original.apr.annual>e.original.apr.annual?-1:0},{Header:"TVL",accessor:"liquidity",Cell:e=>(0,c.jsx)("div",{className:"text-base font-medium text-primary",children:(0,s.uf)(e.value,!0,!1)}),align:"right"},{Header:"Daily Rewards",accessor:"rewards",Cell:e=>(0,c.jsx)(v,{rewards:e.value}),disableSortBy:!0,align:"right"}]),[]);return(0,c.jsx)(c.Fragment,{children:e&&(0,c.jsx)(t.Z,{columns:n,data:e,defaultSortBy:i})})}},55759:function(e,i,n){"use strict";n.d(i,{Z:function(){return x}});var r=n(66223),t=n(31820),s=n(73803),l=n(36325),a=n(3410),o=n(62483),d=n(67294),c=n(85893);function u({pair:e}){var i,n,t,s;const l=(0,o.U8)(null===e||void 0===e||null===(i=e.token0)||void 0===i?void 0:i.id),a=(0,o.U8)(null===e||void 0===e||null===(n=e.token1)||void 0===n?void 0:n.id);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"flex items-center",children:[(0,c.jsx)(r.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:l,currency1:a,size:40}),(0,c.jsx)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:(0,c.jsxs)("div",{className:"font-bold text-high-emphesis",children:[null===e||void 0===e||null===(t=e.token0)||void 0===t?void 0:t.symbol,"-",null===e||void 0===e||null===(s=e.token1)||void 0===s?void 0:s.symbol]})})]})})}const v=(e,i)=>{const n=(0,a.O)(e/7*365*.0025/i*100,3650);return n>1e3?">10,000%":(0,l.T3)(n)},m=[{Header:"Pair",accessor:"pair",Cell:e=>(0,c.jsx)(u,{pair:e.value}),align:"left"},{Header:"TVL",accessor:"liquidity",Cell:e=>(0,l.nH)(e.value,!0),align:"right"},{Header:"Annual APY",accessor:e=>(0,c.jsx)("div",{className:"text-high-emphesis",children:v(e.volume1w,e.liquidity)}),align:"right",sortType:(e,i)=>e.original.volume1w/e.original.liquidity-i.original.volume1w/i.original.liquidity},{Header:"Daily / Weekly Volume",accessor:e=>(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.uf)(e.volume1d,!0,!1,2)}),(0,c.jsx)("div",{className:"font-normal text-primary",children:(0,l.uf)(e.volume1w,!0,!1,2)})]}),align:"right"},{Header:"Daily / Weekly Fees",accessor:e=>(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.uf)(.003*e.volume1d,!0,!1,2)}),(0,c.jsx)("div",{className:"font-normal text-primary",children:(0,l.uf)(.003*e.volume1w,!0,!1,2)})]}),align:"right"}],h=[{Header:"Pair",accessor:"pair",Cell:e=>(0,c.jsx)(u,{pair:e.value}),disableSortBy:!0,align:"left"},{Header:"Daily / Weekly Liquidity Change",id:"liquidity",accessor:e=>(0,c.jsxs)("div",{className:"inline-flex flex-col",children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,c.jsx)(s.Z,{number:e.liquidityChangeNumber1d,scaleNumber:!1})}),(0,c.jsx)("div",{children:(0,l.uf)(e.liquidityChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,i)=>e.original.liquidityChangeNumber1d-i.original.liquidityChangeNumber1d},{Header:"%",accessor:e=>(0,c.jsx)("div",{className:"inline-flex",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.T3)(e.liquidityChangePercent1d)}),(0,c.jsx)("div",{children:(0,l.T3)(e.liquidityChangePercent1w)})]})}),align:"right",sortType:(e,i)=>e.original.liquidityChangePercent1d-i.original.liquidityChangePercent1d},{Header:"Daily / Weekly Volume Change",accessor:e=>(0,c.jsxs)("div",{className:"inline-flex flex-col",children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,c.jsx)(s.Z,{number:e.volumeChangeNumber1d,scaleNumber:!1})}),(0,c.jsx)("div",{children:(0,l.uf)(e.volumeChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,i)=>e.original.volumeChangeNumber1d-i.original.volumeChangeNumber1d},{Header:" %",accessor:e=>(0,c.jsx)("div",{className:"inline-flex",children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,l.T3)(e.volumeChangePercent1d)}),(0,c.jsx)("div",{children:(0,l.T3)(e.volumeChangePercent1w)})]})}),align:"right",sortType:(e,i)=>e.original.volumeChangePercent1d-i.original.volumeChangePercent1d}];function x({pairs:e,type:i}){const n=d.useMemo((()=>{switch(i){case"all":case"gainers":return{id:"liquidity",desc:!0};case"losers":return{id:"liquidity",desc:!1}}}),[i]),r=d.useMemo((()=>{switch(i){case"all":return m;case"gainers":case"losers":return h}}),[i]);return(0,c.jsx)(c.Fragment,{children:e&&(0,c.jsx)(t.Z,{columns:r,data:e,defaultSortBy:n,link:{href:"/analytics/pairs/",id:"pair.id"}})})}},73299:function(e,i,n){"use strict";n.d(i,{Z:function(){return s}});var r=n(36325),t=n(85893);function s({tabs:e,currentType:i,setType:n}){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"border-t border-b border-gray-700",children:(0,t.jsx)("nav",{className:"grid items-center grid-flow-col -mb-px overflow-x-auto whitespace-nowrap","aria-label":"Tabs",children:e.map((e=>(0,t.jsx)("div",{className:(0,r.AK)(e.type!==i&&"opacity-40 hover:opacity-80","flex flex-col font-bold cursor-pointer text-high-emphesis"),onClick:()=>n(e.type),children:(0,t.jsx)("div",{className:"inline-flex items-center justify-center pt-4 pb-2",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"pb-2",children:e.name}),(0,t.jsx)("div",{className:(0,r.AK)(e.type===i&&"border-dark-700","-mb-2 border-4 border-transparent")})]})})},e.name)))})})})}},83304:function(e,i,n){"use strict";n.d(i,{UK:function(){return r.UK},qL:function(){return r.qL},x7:function(){return u},rO:function(){return c.rO},HW:function(){return c.HW},mX:function(){return c.mX},cq:function(){return c.cq},MQ:function(){return c.MQ},JY:function(){return c.JY},wq:function(){return c.wq},mi:function(){return c.mi},ou:function(){return c.ou},JE:function(){return c.JE},Ib:function(){return c.Ib},i7:function(){return c.i7},sL:function(){return c.sL},oF:function(){return v.ZP},lz:function(){return c.lz}});var r=n(27262),t=n(19485),s=n(9279),l=n(71923),a=n(12614),o=n(68411),d=n(67294),c=n(85926);var u=function(){const{account:e,chainId:i}=(0,a.a)(),n=(0,o.h7)(),r=(0,c.rO)();return{deposit:(0,d.useCallback)((async(a,o)=>{if(o&&i)try{const d=(0,t.Kn)(a);if(d===l.df[i]){const i=await(null===r||void 0===r?void 0:r.deposit(s.d,e,e,o,0,{value:o}));return n(i,{summary:"Deposit to Bentobox"})}{const i=await(null===r||void 0===r?void 0:r.deposit(d,e,e,o,0));return n(i,{summary:"Deposit to Bentobox"})}}catch(d){return console.error("bentobox deposit error:",d),d}}),[e,n,r,i]),withdraw:(0,d.useCallback)((async(s,a,o)=>{if(a&&i)try{const d=(0,t.Kn)(s),c=await(null===r||void 0===r?void 0:r.withdraw(d===l.df[i]?"0x0000000000000000000000000000000000000000":d,e,e,a,o?o.toString():0));return n(c,{summary:"Withdraw from Bentobox"})}catch(d){return console.error("bentobox withdraw error:",d),d}}),[e,n,r,i]),harvest:(0,d.useCallback)((async(e,t=!1)=>{if(i)try{const i=await(null===r||void 0===r?void 0:r.harvest(e,t,0));return n(i,{summary:t?"Harvest & Rebalance":"Harvest"})}catch(s){return console.error("bentobox harvest error:",s),s}}),[])}};n(89638),n(37601);n(82766),n(76294),n(80113);var v=n(90573)},82766:function(e,i,n){"use strict";n.d(i,{r:function(){return d}});var r=n(71923),t=(n(93036),n(1082)),s=n.n(t),l=n(83852),a=n(67294),o=n(75438);function d(e){const{0:i,1:n}=(0,a.useState)("#0094ec");return(0,a.useLayoutEffect)((()=>{let i=!1;return e&&async function(e){if(e.chainId===r.a_.RINKEBY&&"0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735"===e.address)return Promise.resolve("#FAAB14");const i="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/".concat(e.address,"/logo.png");return s().from(i).getPalette().then((e=>{if(null!==e&&void 0!==e&&e.Vibrant){let i=e.Vibrant.hex,n=(0,o.$v)(i,"#FFF");for(;n<3;)i=(0,l.wj)(.005,i),n=(0,o.$v)(i,"#FFF");return i}return null})).catch((()=>null))}(e).then((e=>{i||null===e||n(e)})),()=>{i=!0,n("#0094ec")}}),[e]),i}},80113:function(e,i,n){"use strict";var r=n(2593),t=n(67294);function s(e,i,n="."){try{return i.replace("[",n).replace("]","").split(n).reduce(((e,i)=>e[i]),e)}catch(r){return}}i.Z=(e,i=null)=>{const{0:n,1:l}=(0,t.useState)(i);return{items:(0,t.useMemo)((()=>{if(e&&e.length>0){const i=[...e];return null!==n&&i.sort(((e,i)=>{const t=s(e,n.key),l=s(i,n.key);if(t instanceof r.O$&&l instanceof r.O$){if(t.lt(l))return"ascending"===n.direction?-1:1;if(t.gt(l))return"ascending"===n.direction?1:-1}else{if(t===1/0)return"ascending"===n.direction?-1:1;if(l===1/0)return"ascending"===n.direction?1:-1;if(t<l)return"ascending"===n.direction?-1:1;if(t>l)return"ascending"===n.direction?1:-1}return 0})),i}return[]}),[e,n]),requestSort:(e,i="ascending")=>{n&&n.key===e&&"ascending"===n.direction?i="descending":n&&n.key===e&&"descending"===n.direction&&(i="ascending"),l({key:e,direction:i})},sortConfig:n}}},63425:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return b}});var r=n(67320),t=n(74665),s=n(30860),l=n(40334),a=n(73299),o=n(85893);const d=[{name:"Top Farms",type:"pools"},{name:"Top Pairs",type:"pairs"},{name:"Top Tokens",type:"tokens"}];function c({currentType:e,setType:i}){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Z,{tabs:d,currentType:e,setType:i})})}var u=n(34645),v=n(55759),m=n(42665),h=n(4725),x=n(76294),p=n(22339),f=n(12614),y=n(67294);const g=[{text:"1W",length:604800},{text:"1M",length:2629746},{text:"1Y",length:31556952},{text:"ALL",length:1/0}];function b(){const{0:e,1:i}=(0,y.useState)("pools"),{chainId:n}=(0,f.a)(),a=(0,p.ZU)({chainId:n,shouldFetch:!!n}),d=(0,p.G9)({chainId:n,shouldFetch:!!n}),b=(0,p.T5)({chainId:n,shouldFetch:!!n}),j=(0,p.rv)({chainId:n}),N=(0,p.rv)({chainId:n,variables:{block:a}}),k=(0,p.rv)({chainId:n,variables:{block:d}}),w=(0,p.Yg)({chainId:n}),C=(0,y.useMemo)((()=>({liquidity:null===j||void 0===j?void 0:j.liquidityUSD,liquidityChange:(null===N||void 0===N?void 0:N.liquidityUSD)/(null===k||void 0===k?void 0:k.liquidityUSD)*100-100,liquidityChart:null===w||void 0===w?void 0:w.sort(((e,i)=>e.date-i.date)).map((e=>({x:new Date(1e3*e.date),y:Number(e.liquidityUSD)}))),volume1d:(null===j||void 0===j?void 0:j.volumeUSD)-(null===N||void 0===N?void 0:N.volumeUSD),volume1dChange:((null===j||void 0===j?void 0:j.volumeUSD)-(null===N||void 0===N?void 0:N.volumeUSD))/((null===N||void 0===N?void 0:N.volumeUSD)-(null===k||void 0===k?void 0:k.volumeUSD))*100-100,volumeChart:null===w||void 0===w?void 0:w.sort(((e,i)=>e.date-i.date)).map((e=>({x:new Date(1e3*e.date),y:Number(e.volumeUSD)})))})),[j,N,k,w]),S=(0,p.__)({chainId:n}),T=(0,p.__)({chainId:n,variables:{block:a},shouldFetch:!!a}),q=(0,p.__)({chainId:n,variables:{block:b},shouldFetch:!!b}),D=(0,y.useMemo)((()=>null===S||void 0===S?void 0:S.map((e=>{var i,n;const r=null!==(i=null===T||void 0===T?void 0:T.find((i=>e.id===i.id)))&&void 0!==i?i:e,t=null!==(n=null===q||void 0===q?void 0:q.find((i=>e.id===i.id)))&&void 0!==n?n:r;return{pair:{token0:e.token0,token1:e.token1,id:e.id},liquidity:e.reserveUSD,volume1d:e.volumeUSD-(null===r||void 0===r?void 0:r.volumeUSD),volume1w:e.volumeUSD-(null===t||void 0===t?void 0:t.volumeUSD)}}))),[S,T,q]),U=(0,h.ZP)(),H=(0,p.k$)({chainId:n}),Z=(0,y.useMemo)((()=>null===U||void 0===U?void 0:U.map((e=>{var i;return{pair:{token0:e.pair.token0,token1:e.pair.token1,id:e.pair.id,name:null!==(i=e.pair.symbol)&&void 0!==i?i:"".concat(e.pair.token0.symbol,"-").concat(e.pair.token1.symbol),type:e.pair.symbol?"Kashi Farm":"Nexus Generator"},rewards:e.rewards,liquidity:e.tvl,apr:{daily:100*e.roiPerDay,monthly:100*e.roiPerMonth,annual:100*e.roiPerYear}}})).filter((e=>!!e))),[U]),F=(0,p.k$)({chainId:n,variables:{block:a}}),P=(0,p.k$)({chainId:n,variables:{block:b}}),I=(0,p.rU)({chainId:n}),M=(0,p.rU)({chainId:n,variables:{block:a},shouldFetch:!!a}),A=(0,p.rU)({chainId:n,variables:{block:b},shouldFetch:!!b}),_=(0,y.useMemo)((()=>I&&M&&A&&H&&F&&P?I.map((e=>{var i,n;const r=null!==(i=M.find((i=>e.id===i.id)))&&void 0!==i?i:e,t=null!==(n=A.find((i=>e.id===i.id)))&&void 0!==n?n:e;return{token:{id:e.id,symbol:e.symbol,name:e.name},liquidity:e.liquidity*e.derivedETH*H,volume1d:e.volumeUSD-r.volumeUSD,volume1w:e.volumeUSD-t.volumeUSD,price:e.derivedETH*H,change1d:e.derivedETH*H/(r.derivedETH*F)*100-100,change1w:e.derivedETH*H/(t.derivedETH*P)*100-100,graph:e.dayData.slice(0).reverse().map(((e,i)=>({x:i,y:Number(e.priceUSD)})))}})):[]),[H,F,P,I,M,A]),{options:E,data:B}=(0,y.useMemo)((()=>{switch(e){case"pools":return{options:{keys:["pair.token0.id","pair.token0.symbol","pair.token0.name","pair.token1.id","pair.token1.symbol","pair.token1.name"],threshold:.4},data:Z};case"pairs":return{options:{keys:["pair.token0.id","pair.token0.symbol","pair.token0.name","pair.token1.id","pair.token1.symbol","pair.token1.name"],threshold:.4},data:D};case"tokens":return{options:{keys:["token.id","token.symbol","token.name"],threshold:.4},data:_}}}),[e,Z,D,_]),{result:L,term:K,search:W}=(0,x.Z)({data:B,options:E});return(0,o.jsxs)(t.Z,{children:[(0,o.jsx)(s.Z,{background:"dashboard",children:(0,o.jsxs)("div",{className:"grid items-center justify-between grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"text-3xl font-bold text-high-emphesis",children:"NEXUSSwap Analytics"}),(0,o.jsxs)("div",{className:"",children:["Dive deeper in the analytics of sushi bar,",(0,o.jsx)("br",{})," pools, pairs and tokens."]})]}),(0,o.jsx)(r.Z,{term:K,search:W})]})}),(0,o.jsxs)("div",{className:"px-4 py-6 space-y-4 lg:px-14",children:[(0,o.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Overview"}),(0,o.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,o.jsx)(l.Z,{header:"TVL",subheader:"SUSHI AMM",figure:C.liquidity,change:C.liquidityChange,chart:C.liquidityChart,defaultTimespan:"1W",timespans:g}),(0,o.jsx)(l.Z,{header:"Volume",subheader:"SUSHI AMM",figure:C.volume1d,change:C.volume1dChange,chart:C.volumeChart,defaultTimespan:"1W",timespans:g})]})]}),(0,o.jsx)(c,{currentType:e,setType:i}),(0,o.jsxs)("div",{className:"px-4 pt-4 lg:px-14",children:["pools"===e&&(0,o.jsx)(u.Z,{pools:L}),"pairs"===e&&(0,o.jsx)(v.Z,{pairs:L,type:"all"}),"tokens"===e&&(0,o.jsx)(m.Z,{tokens:L})]})]})}},148:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/dashboard",function(){return n(63425)}])}},function(e){e.O(0,[7440,4221,9521,5963,1626,8199,4725,9774,2888,179],(function(){return i=148,e(e.s=i);var i}));var i=e.O();_N_E=i}]);