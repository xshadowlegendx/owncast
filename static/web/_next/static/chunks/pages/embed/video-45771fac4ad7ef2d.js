(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,248],{61357:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return t(73077)}])},35006:function(e,n,t){"use strict";t.d(n,{X:function(){return _}});var s=t(85893),a=t(62573),o=t(10314),r=t(67294),l=t(5152),i=t.n(l),c=t(93967),u=t.n(c),d=t(12366),f=t.n(d),m=t(36431);let h=i()(()=>Promise.all([t.e(7298),t.e(5313)]).then(t.t.bind(t,35313,23)),{loadableGenerated:{webpack:()=>[35313]},ssr:!1}),_=e=>{let n,{online:t,lastConnectTime:l,lastDisconnectTime:i,viewerCount:c,className:d}=e,[,_]=(0,r.useState)(new Date);(0,r.useEffect)(()=>{let e=setInterval(()=>_(new Date),1e3);return()=>{clearInterval(e)}},[]);let p="";if(t&&l){let e=function(e){let n="hour",t="minute",s=(0,a.y)({start:e,end:new Date});return s.days>=1?"".concat(s.days," ").concat((0,m._6)("day",s.days),"\n			").concat(s.hours," ").concat((0,m._6)(n,s.hours)):s.hours>=1?"".concat(s.hours," ").concat((0,m._6)(n,s.hours)," ").concat(s.minutes,"\n			").concat((0,m._6)(t,s.minutes)):"".concat(s.minutes," ").concat((0,m._6)(t,s.minutes),"\n		").concat(s.seconds," ").concat((0,m._6)("second",s.seconds))}(new Date(l));p=t?"Live for  ".concat(e):"Offline",n=c>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:f().viewerIcon,children:(0,s.jsx)(h,{})}),(0,s.jsx)("span",{children:" ".concat(c)})]})}else!t&&(p="Offline",i&&(n="Last live ".concat((0,o.Q)(new Date(i))," ago.")));return(0,s.jsxs)("div",{className:u()(f().statusbar,d),role:"status",children:[(0,s.jsx)("span",{"aria-live":"off",className:f().onlineMessage,children:p}),(0,s.jsx)("span",{className:f().viewerCount,children:n})]})};_.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},73077:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var s,a,o=t(85893),r=t(69554),l=t.n(r),i=t(67294),c=t(4480),u=t(11163),d=t(23132),f=t(61153),m=t(35006),h=t(17650),_=t(26111),p=t(93047),b=t.n(p),g=t(93967),v=t.n(g),w=t(9008),x=t.n(w),j=t(47271),y=t(70936),N=t(46994),C=t(90622),E=t(43795),S=t(96652),F=t(66879),O=t.n(F),k=t(94956);let{Title:P}=j.default;(s=a||(a={}))[s.CannotFollow=1]="CannotFollow",s[s.CanFollow=2]="CanFollow",s[s.FollowPrompt=3]="FollowPrompt",s[s.InProgress=4]="InProgress";let I=e=>{let{streamName:n,subtitle:t,image:s,supportsFollows:a}=e,[r,l]=(0,i.useState)(2),[c,u]=(0,i.useState)(null),[d,f]=(0,i.useState)(!1),[m,h]=(0,i.useState)(!1),[_,p]=(0,i.useState)(null);(0,i.useEffect)(()=>{a||l(1)},[a]);let b=async()=>{l(3)},g=async()=>{h(!0),l(1);try{let e=c.replace(/^@+/,""),n=await fetch("/api/remotefollow",{method:"POST",body:JSON.stringify({account:e})}),t=await n.json();if(t.redirectUrl&&window.open(t.redirectUrl,"_blank"),!t.success){p(t.message),h(!1);return}if(!t.redirectUrl){p("Unable to follow."),h(!1);return}}catch(e){p(e.message)}h(!1)},w=e=>{u(e),(0,k.ME)(e)?f(!0):f(!1)};return(0,o.jsxs)("div",{children:[(0,o.jsx)(x(),{children:(0,o.jsx)("title",{children:n})}),(0,o.jsx)("div",{className:v()(O().offlineContainer),children:(0,o.jsx)(y.Z,{spinning:m,children:(0,o.jsxs)("div",{className:O().content,children:[(0,o.jsx)("div",{className:O().heading,children:"This stream is not currently live."}),(0,o.jsx)("div",{className:O().message,children:t}),(0,o.jsx)("div",{className:O().pageLogo,style:{backgroundImage:"url(".concat(s,")")}}),(0,o.jsx)("div",{className:O().pageName,children:n}),_&&(0,o.jsx)(N.Z,{message:"Follow Error",description:_,type:"error",showIcon:!0}),2===r&&(0,o.jsx)(C.Z,{className:O().submitButton,type:"primary",onClick:b,children:"Follow Server"}),4===r&&(0,o.jsx)(P,{level:4,className:O().heading,children:"Follow the instructions on your Fediverse server to complete the follow."}),3===r&&(0,o.jsxs)("div",{children:[(0,o.jsx)(E.default,{value:c,size:"large",onChange:e=>w(e.target.value),placeholder:"Your fediverse account @account@server",defaultValue:c}),(0,o.jsx)("div",{className:O().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."}),(0,o.jsx)(S.Z,{className:O().buttons,children:(0,o.jsx)(C.Z,{className:O().submitButton,disabled:!d,type:"primary",onClick:g,children:"Submit and Follow"})})]})]})})})]})};function L(){var e;let n=(0,c.sJ)(f.RI),t=(0,c.sJ)(f.g1),s=(0,c.sJ)(f.Q),{name:a,summary:r,offlineMessage:p,federation:g}=t,{viewerCount:v,lastConnectTime:w,lastDisconnectTime:x,streamTitle:j}=n,y=(0,c.sJ)(f.YW),{enabled:N}=g,C=(null!==(e=(0,u.useRouter)().asPath.split("?")[1])&&void 0!==e?e:"").split("&").reduce((e,n)=>{let[t,s]=n.split("=");return{...e,[t]:s}},{}),E="true"===C.initiallyMuted,S=N&&"false"!==C.supportsSocialFollow,F=(0,o.jsx)(d.Z,{active:!0,style:{padding:"10px"},paragraph:{rows:10}});(0,i.useEffect)(()=>{document.body.classList.add("body-background")},[]);let O=(0,o.jsx)(I,{streamName:a,subtitle:p||r,image:"/logo",supportsFollows:S}),k=(0,o.jsxs)("div",{className:"jsx-c9ad39c4496ab6bc "+(b().onlineContainer||""),children:[(0,o.jsx)(l(),{id:"c9ad39c4496ab6bc",children:".body-background{background:var(--theme-color-components-video-status-bar-background)}"}),(0,o.jsx)(h.OwncastPlayer,{source:"/hls/stream.m3u8",online:y,initiallyMuted:E,title:j||a}),(0,o.jsx)(m.X,{online:y,lastConnectTime:w,lastDisconnectTime:x,viewerCount:v})]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.me,{}),(0,o.jsx)(_.Q,{}),(0,o.jsx)("div",{className:"video-embed",children:s.appLoading?F:y?k:O})]})}},94956:function(e,n,t){"use strict";t.d(n,{Kf:function(){return o},ME:function(){return r},ax:function(){return s},jv:function(){return a}});let s="https?://.*";function a(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let t=new URL(e);if(""===t.protocol||""===t.hostname||!n.includes(t.protocol))return!1}catch(e){return!1}return!0}function o(e,n){e.startsWith("@")&&(e=e.slice(1));let t=e.split(/:|@/),[s,a,o]=t;return s===n&&3===t.length&&!!s&&!!a&&!!o}function r(e){let n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}},66879:function(e){e.exports={offlineContainer:"OfflineEmbed_offlineContainer__fdZ07",content:"OfflineEmbed_content__j10dd",message:"OfflineEmbed_message__ZSzJ6",heading:"OfflineEmbed_heading__KnMu3",pageLogo:"OfflineEmbed_pageLogo__cl5VS",pageName:"OfflineEmbed_pageName__9lEC_",submitButton:"OfflineEmbed_submitButton__UhIpB",footer:"OfflineEmbed_footer__sL75T"}},12366:function(e){e.exports={statusbar:"Statusbar_statusbar__b24qe",onlineMessage:"Statusbar_onlineMessage__FJnEa",viewerCount:"Statusbar_viewerCount__pfDDX",viewerIcon:"Statusbar_viewerIcon__U_j6P"}},93047:function(e){e.exports={onlineContainer:"VideoEmbed_onlineContainer__5XevB"}}},function(e){e.O(0,[2544,6410,8768,947,7271,1880,314,5888,2379,6374,2440,3226,9336,2888,9774,179],function(){return e(e.s=61357)}),_N_E=e.O()}]);