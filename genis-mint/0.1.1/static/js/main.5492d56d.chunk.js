(this["webpackJsonpgenis-mint"]=this["webpackJsonpgenis-mint"]||[]).push([[0],{307:function(e,t,n){},309:function(e,t,n){},323:function(e,t){},326:function(e,t){},329:function(e,t){},333:function(e,t){},359:function(e,t){},361:function(e,t){},370:function(e,t){},372:function(e,t){},382:function(e,t){},384:function(e,t){},427:function(e,t){},428:function(e,t){},502:function(e,t){},504:function(e,t){},511:function(e,t){},512:function(e,t){},682:function(e,t,n){"use strict";n.r(t);var a,i=n(0),o=n.n(i),s=n(288),r=n.n(s),c=(n(307),n(308),n.p,n(309),n(691)),l=n(35),u=n(64),p=n(4),d=n(130),y=n.n(d),m=n(297),b=n(689),j=n(7),h=Object(i.createContext)({contract:null}),f=new y.a(null===(a=window.web3)||void 0===a?void 0:a.currentProvider);f.eth.handleRevert=!0;var x=f,O=function(){var e=Object(i.useContext)(h);return{contract:e.contract,updateContractIns:e.updateContractIns}},T=function(e){var t=Object(i.useState)(null),n=Object(p.a)(t,2),a=n[0],o=n[1];return Object(j.jsx)(h.Provider,{value:{contract:a,updateContractIns:o},children:e.children})},w=[{inputs:[{internalType:"contract IERC721",name:"_nft",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"maxNum",type:"uint256"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"uint256",name:"limitPerAccount",type:"uint256"}],name:"ChangePoolMaxAndLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"tokenId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"payAmount",type:"uint256"}],name:"MintNFT",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"uint256",name:"maxNum",type:"uint256"},{indexed:!1,internalType:"bool",name:"paused",type:"bool"},{indexed:!1,internalType:"uint256",name:"price",type:"uint256"},{indexed:!1,internalType:"bytes32",name:"root",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"limitPerAccount",type:"uint256"}],name:"NewPool",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"previousAdminRole",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"newAdminRole",type:"bytes32"}],name:"RoleAdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleGranted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"role",type:"bytes32"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"}],name:"RoleRevoked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"},{indexed:!1,internalType:"bytes32",name:"root",type:"bytes32"}],name:"SetPoolRoot",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"pid",type:"uint256"}],name:"Unpaused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[],name:"DEFAULT_ADMIN_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"OPERATOR_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"TREASURY_ROLE",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_maxNum",type:"uint256"},{internalType:"bool",name:"_paused",type:"bool"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_limitPerAccount",type:"uint256"},{internalType:"bytes32",name:"_root",type:"bytes32"}],name:"addPool",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleAdmin",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"uint256",name:"index",type:"uint256"}],name:"getRoleMember",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"}],name:"getRoleMemberCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"grantRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"hasRole",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"address[]",name:"_accounts",type:"address[]"}],name:"mintAirdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_num",type:"uint256"},{internalType:"bytes32[]",name:"_proof",type:"bytes32[]"}],name:"mintNFT",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"nft",outputs:[{internalType:"contract IERC721",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"poolInfo",outputs:[{components:[{internalType:"uint256",name:"maxNum",type:"uint256"},{internalType:"uint256",name:"supply",type:"uint256"},{internalType:"bool",name:"paused",type:"bool"},{internalType:"uint256",name:"price",type:"uint256"},{internalType:"bytes32",name:"root",type:"bytes32"},{internalType:"uint256",name:"limitPerAccount",type:"uint256"}],internalType:"struct NFTFactory.PoolInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"poolLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"renounceRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"role",type:"bytes32"},{internalType:"address",name:"account",type:"address"}],name:"revokeRole",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"uint256",name:"_maxNum",type:"uint256"},{internalType:"uint256",name:"_price",type:"uint256"},{internalType:"uint256",name:"_limitPerAccount",type:"uint256"}],name:"setPoolMaxNumAndLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"bytes32",name:"_root",type:"bytes32"}],name:"setPoolRoot",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalMaxNum",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"}],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_pid",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"userInfo",outputs:[{components:[{internalType:"uint256",name:"claimedNum",type:"uint256"}],internalType:"struct NFTFactory.UserInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdrawETH",outputs:[],stateMutability:"nonpayable",type:"function"}],v=function(){var e=Object(i.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)(null),s=Object(p.a)(o,2),r=s[0],c=s[1],d=Object(i.useState)(localStorage.getItem("contractAddress")),h=Object(p.a)(d,2),f=h[0],T=h[1],v=O(),g=v.updateContractIns;console.log("context",v);var A=function(){var e=new x.eth.Contract(w,f,{handleRevert:function(e){console.log(e)}});g(e)};Object(i.useEffect)((function(){window.ethereum.request({method:"eth_requestAccounts"}).then((function(e){e&&e[0]&&(c(e[0]),a(!0),f&&A())})).catch((function(e){4001===e.code?console.log("Please connect to MetaMask."):console.error(e)}));var e=window.localStorage.getItem("contractAddress");e&&(window.contractAddress=e,T(e))}),[]);var _=function(){var e=Object(u.a)(Object(l.a)().mark((function e(){return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=7;break}return e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:return window.web3=new y.a(window.ethereum),a(!0),c(window.ethereum.selectedAddress),e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=Object(i.useCallback)((function(){_()}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px",marginTop:"20px",justifyContent:"center"},children:n?Object(j.jsxs)("span",{children:["\u5f53\u524d\u8d26\u53f7\uff1a ",r]}):Object(j.jsx)(m.a,{onClick:I,children:"\u94fe\u63a5\u94b1\u5305"})}),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"20px",marginTop:"20px",justifyContent:"center"},children:["mint \u5408\u7ea6\u5730\u5740:",Object(j.jsx)("div",{style:{width:"500px",marginLeft:"10px"},children:Object(j.jsx)(b.a,{width:"100px",defaultValue:f,onChange:function(e){window.contractAddress=e.target.value,window.localStorage.setItem("contractAddress",e.target.value),T(e.target.value)},addonAfter:Object(j.jsx)("span",{style:{cursor:"pointer"},onClick:A,children:"\u786e\u8ba4"})},f)})]})]})},g=n(2),A=n(688),_=n(692),I={labelCol:{span:6},wrapperCol:{span:14}},C=function(){var e=O().contract;return Object(j.jsxs)(A.a,Object(g.a)(Object(g.a)({name:"add_pool"},I),{},{onFinish:function(t){console.log("Received values of form: ",t),console.log("price",x.utils.toWei(t._price,"ether")),x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.addPool(t._maxNum,"true"===t._pause,x.utils.toWei(t._price,"ether"),t._limitPerAccount,t._root).encodeABI()})},initialValues:{_pause:"true"},children:[Object(j.jsx)(A.a.Item,{name:"_maxNum",label:"\u6c60\u5b50\u53efmint NFT\u603b\u6570\u91cf",hasFeedback:!0,rules:[{required:!0,message:"\u8f93\u5165\u672c\u8f6e\u53efmint NFT \u603b\u6570"}],children:Object(j.jsx)(b.a,{placeholder:"\u8f93\u5165\u672c\u8f6e\u53efmint NFT \u603b\u6570"})}),Object(j.jsx)(A.a.Item,{label:"\u4ef7\u683c",name:"_price",children:Object(j.jsx)(b.a,{addonAfter:"eth",placeholder:"\u8f93\u5165eth\u4ef7\u683c"})}),Object(j.jsx)(A.a.Item,{name:"_limitPerAccount",label:"\u5355\u4eba\u53efmint\u6570\u91cf",children:Object(j.jsx)(b.a,{placeholder:"\u5355\u4eba\u53efmint\u6570\u91cf"})}),Object(j.jsx)(A.a.Item,{name:"_root",label:"\u9ed8\u514b\u5c14\u6811 root hash",children:Object(j.jsx)(b.a,{placeholder:"\u9ed8\u514b\u5c14\u6811 root hash"})}),Object(j.jsx)(A.a.Item,{name:"_pause",label:"\u521b\u5efa\u540e\u7acb\u5373\u5f00\u542f",children:Object(j.jsxs)(_.a.Group,{children:[Object(j.jsx)(_.a,{value:"true",children:"\u5426"}),Object(j.jsx)(_.a,{value:"false",children:"\u662f"})]})}),Object(j.jsx)(A.a.Item,{wrapperCol:{span:12,offset:6},children:Object(j.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u521b\u5efa"})})]}))},M=n(690),R=(M.a.Option,{labelCol:{span:6},wrapperCol:{span:14}}),P=function(){var e=O().contract,t=Object(i.useState)(),n=Object(p.a)(t,2),a=n[0],o=n[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)(A.a,Object(g.a)(Object(g.a)({name:"add_pool"},R),{},{onFinish:function(t){console.log("Received values of form: ",t),x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.setPoolRoot(t._pid,t._root).encodeABI()})},children:[Object(j.jsx)(A.a.Item,{name:"_pid",label:"\u6c60\u5b50id",children:Object(j.jsx)(b.a,{onChange:function(e){return o(e.target.value)},placeholder:"\u8981\u64cd\u4f5c\u7684\u6c60\u5b50id"})}),Object(j.jsx)(A.a.Item,{wrapperCol:{span:12,offset:6}})]})),Object(j.jsxs)("div",{children:[Object(j.jsx)(m.a,{type:"primary",onClick:function(){x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.pause(a).encodeABI()})},children:"\u6682\u505c"}),Object(j.jsx)("span",{children:"\xa0\xa0\xa0\xa0\xa0\xa0"}),Object(j.jsx)(m.a,{type:"danger",onClick:function(){console.log("unpause"),x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.unpause(a).encodeABI()})},children:"\u5f00\u542f"})]})]})},N=(M.a.Option,{labelCol:{span:6},wrapperCol:{span:14}}),k=function(){var e=O().contract;return Object(j.jsxs)(A.a,Object(g.a)(Object(g.a)({name:"add_pool"},N),{},{onFinish:function(t){console.log("Received values of form: ",t),x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.setPoolRoot(t._pid,t._root).encodeABI()})},children:[Object(j.jsx)(A.a.Item,{name:"_pid",label:"\u6c60\u5b50id",children:Object(j.jsx)(b.a,{placeholder:"\u8981\u64cd\u4f5c\u7684\u6c60\u5b50id"})}),Object(j.jsx)(A.a.Item,{name:"_root",label:"\u9ed8\u514b\u5c14\u6811root hash",children:Object(j.jsx)(b.a,{placeholder:"\u9ed8\u514b\u5c14\u6811root hash"})}),Object(j.jsx)(A.a.Item,{wrapperCol:{span:12,offset:6},children:Object(j.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u4fee\u6539"})})]}))},S=n(8),F=n(182),E=(M.a.Option,{labelCol:{span:6},wrapperCol:{span:14}}),B=function(){var e=O().contract,t=Object(i.useState)([]),n=Object(p.a)(t,2),a=n[0],o=n[1],s=Object(i.useCallback)((function(e){var t=e.target.files[0],n=new FileReader;n.onload=function(e){var t=[],n=Object(F.a)(e.target.result,{type:"binary"});for(var a in console.log(n),n.Sheets)n.Sheets.hasOwnProperty(a)&&t.push.apply(t,Object(S.a)(F.b.sheet_to_json(n.Sheets[a])));var i=t.slice(1).map((function(e){return e["\u94b1\u5305\u8f6c\u8d26"]}));o(i)},n.readAsArrayBuffer(t)}),[]);return Object(j.jsxs)(A.a,Object(g.a)(Object(g.a)({name:"add_pool"},E),{},{onFinish:function(t){console.log("Received values of form: ",t),x.eth.sendTransaction({from:window.ethereum.selectedAddress,to:window.contractAddress,data:e.methods.mintAirdrop(t._pid,a).encodeABI()})},children:[Object(j.jsx)(A.a.Item,{name:"_pid",label:"\u6c60\u5b50id",children:Object(j.jsx)(b.a,{placeholder:"\u8981\u64cd\u4f5c\u7684\u6c60\u5b50id"})}),Object(j.jsx)(A.a.Item,{name:"file",label:"\u540d\u5355excel",children:Object(j.jsx)(b.a,{type:"file",placeholder:"file",onChange:s})}),Object(j.jsx)(A.a.Item,{wrapperCol:{span:12,offset:6},children:Object(j.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u7a7a\u6295"})})]}))},L=(b.a.Search,{limitPerAccount:"\u6bcf\u4eba\u9650\u8d2d",maxNum:"\u6c60\u5b50\u603bNFT\u6570",paused:"\u662f\u5426\u5df2\u6682\u505c",price:"\u4ef7\u683c",root:"\u9ed8\u514b\u5c14\u6811 root hash",supply:"\u5df2mint\u6570"}),q={price:function(e){return"".concat(e," wei (").concat(x.utils.fromWei(e)," eth)")},default:function(e){return e}},W=(M.a.Option,function(){var e=O().contract,t=Object(i.useState)([]),n=Object(p.a)(t,2),a=n[0],o=n[1],s=Object(i.useState)(),r=Object(p.a)(s,2),c=r[0],l=r[1],u=Object(i.useState)(null),d=Object(p.a)(u,2),y=d[0],h=d[1],f=Object(i.useCallback)((function(){console.log("getPools",e),e&&e.methods.poolLength().call().then((function(e){console.log("pool length ---\x3e",e);var t=new Array(+e||0).fill(1).map((function(e,t){return t}));o(t)}))}),[e]),x=Object(i.useCallback)((function(e){console.log(e.target.value),l(e.target.value)}),[]),T=Object(i.useCallback)((function(){e.methods.poolInfo(c).call().then((function(e){var t="<div>poolId: ".concat(c,"</div>");Object.keys(L).forEach((function(n){t+="<div>".concat(L[n],": ").concat((q[n]||q.default)(e[n]),"</div>")})),h(t)}))}),[c,e]);return Object(i.useEffect)((function(){setTimeout((function(){f()}),2e3)}),[f]),Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap"},children:[Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%",justifyContent:"center",marginBottom:"20px"},children:[Object(j.jsxs)("div",{style:{marginRight:"20px"},children:["pool \u603b\u6570\uff1a ",a.length,"(poolid \u4ece 0 \u5f00\u59cb)"]}),Object(j.jsx)(m.a,{onClick:f,children:"\u5237\u65b0\u6c60\u5b50\u603b\u6570"})]}),Object(j.jsx)("div",{style:{display:"flex",alignItems:"center",width:"100%",textAlign:"center",justifyContent:"center"},children:Object(j.jsx)(b.a,{style:{width:"500px"},width:500,placeholder:"\u8f93\u5165\u8981\u67e5\u8be2\u7684pool id",onBlur:x,addonAfter:Object(j.jsx)("span",{style:{cursor:"pointer"},onClick:T,children:"\u67e5\u8be2"})})}),Object(j.jsx)("div",{style:{textAlign:"left"},dangerouslySetInnerHTML:{__html:y}})]})}),U=c.a.Panel;var D=function(){return Object(j.jsx)(T,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:"\u521b\u4e16mint \u64cd\u4f5c\u754c\u9762"}),Object(j.jsxs)("main",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(v,{})}),Object(j.jsxs)(c.a,{defaultActiveKey:["1","2","3","4","5"],onChange:function(e){console.log(e)},children:[Object(j.jsx)(U,{header:"poolInfo",children:Object(j.jsx)(W,{})},"5"),Object(j.jsx)(U,{header:"\u521b\u5efa\u6c60\u5b50",children:Object(j.jsx)(C,{})},"1"),Object(j.jsx)(U,{header:"\u5f00\u59cb/\u6682\u505c \u6c60\u5b50",children:Object(j.jsx)(P,{})},"2"),Object(j.jsx)(U,{header:"\u4fee\u6539\u767d\u540d\u5355",children:Object(j.jsx)(k,{})},"3"),Object(j.jsx)(U,{header:"\u7a7a\u6295",children:Object(j.jsx)(B,{})},"4")]})]})]})})};r.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(D,{})}))}},[[682,1,2]]]);