(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1871],{39856:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config/general",function(){return a(77634)}])},20284:function(e,t,a){"use strict";a.d(t,{Q:function(){return d},Y:function(){return u}});var s=a(85893),n=a(67294),l=a(47271),i=a(14845),r=a(62376),o=a(65326);let{Title:c}=l.default,d="#5a67d8",u=e=>{let{title:t,description:a,placeholder:l,maxLength:u,values:h,handleDeleteIndex:m,handleCreateString:p,submitStatus:x,continuousStatusMessage:g}=e,[f,j]=(0,n.useState)("");return(0,s.jsxs)("div",{className:"edit-string-array-container",children:[(0,s.jsx)(c,{level:3,className:"section-title",children:t}),(0,s.jsx)("p",{className:"description",children:a}),(0,s.jsx)("div",{className:"edit-current-strings",children:null==h?void 0:h.map((e,t)=>(0,s.jsx)(i.Z,{closable:!0,onClose:()=>{m(t)},color:d,children:e},"tag-".concat(e,"-").concat(t)))}),g&&(0,s.jsx)("div",{className:"continuous-status-section",children:(0,s.jsx)(o.E,{status:g})}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(r.nv,{fieldName:"string-input",value:f,onChange:e=>{let{value:t}=e;j(t)},onPressEnter:()=>{p(f.trim()),j("")},maxLength:u,placeholder:l,status:x})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},86088:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(85893),n=a(67294),l=a(38376),i=a(70329),r=a(65326),o=a(53068),c=a(84443);let d=e=>{let{apiPath:t,checked:a,reversed:d=!1,configPath:u="",disabled:h=!1,fieldName:m,label:p,tip:x,useSubmit:g,onChange:f}=e,[j,v]=(0,n.useState)(null),y=null,{setFieldInConfigState:b}=(0,n.useContext)(c.a)||{},k=()=>{v(null),clearTimeout(y),y=null},N=async e=>{if(g){v((0,i.kg)(i.Jk));let a=d?!e:e;await (0,o.Si)({apiPath:t,data:{value:a},onSuccess:()=>{b({fieldName:m,value:a,path:u}),v((0,i.kg)(i.zv))},onError:e=>{v((0,i.kg)(i.Un,"There was an error: ".concat(e)))}}),y=setTimeout(k,o.sI)}f&&f(e)},w=null!==j&&j.type===i.Jk;return(0,s.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:p})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)(l.Z,{className:"switch field-".concat(m),loading:w,onChange:N,defaultChecked:a,checked:a,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,s.jsx)(r.E,{status:j})]}),(0,s.jsx)("p",{className:"field-tip",children:x})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},77125:function(e,t,a){"use strict";a.d(t,{Z:function(){return S}});var s=a(85893),n=a(67294),l=a(47271),i=a(90622),r=a(43795),o=a(43796),c=a(24716),d=a(5152),u=a.n(d),h=a(35386),m=a(53068);let p=e=>{let{iconList:t,selectedOption:a,onSelected:n}=e,l=""===a?null:a;return(0,s.jsxs)("div",{className:"social-dropdown-container",children:[(0,s.jsx)("p",{className:"description",children:"If you are looking for a platform name not on this list, please select Other and type in your own name. A logo will not be provided."}),(0,s.jsxs)("div",{className:"formfield-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Social Platform"})}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsxs)(h.default,{style:{width:240},className:"social-dropdown",placeholder:"Social platform...",defaultValue:l,value:l,onSelect:e=>{n&&n(e)},children:[t.map(e=>{let{platform:t,icon:a,key:n}=e;return(0,s.jsxs)(h.default.Option,{className:"social-option",value:n,children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:a,alt:"",className:"option-icon"})}),(0,s.jsx)("span",{className:"option-label",children:t})]},"platform-".concat(n))}),(0,s.jsx)(h.default.Option,{className:"social-option",value:m.z_,children:"Other..."},"platform-".concat(m.z_))]})})]})]})};var x=a(6925),g=a(84443),f=a(94956),j=a(62376),v=a(70329),y=a(65326);let{Title:b}=l.default,k=u()(()=>Promise.all([a.e(7298),a.e(7676)]).then(a.t.bind(a,37676,23)),{loadableGenerated:{webpack:()=>[37676]},ssr:!1}),N=u()(()=>Promise.all([a.e(7298),a.e(37)]).then(a.t.bind(a,90037,23)),{loadableGenerated:{webpack:()=>[90037]},ssr:!1}),w=u()(()=>Promise.all([a.e(7298),a.e(7618)]).then(a.t.bind(a,7618,23)),{loadableGenerated:{webpack:()=>[7618]},ssr:!1});function S(){var e;let[t,a]=(0,n.useState)([]),[l,d]=(0,n.useState)([]),[u,h]=(0,n.useState)(!1),[S,C]=(0,n.useState)(!1),[T,E]=(0,n.useState)(!1),[P,Z]=(0,n.useState)(-1),[O,_]=(0,n.useState)(m.wC),[z,L]=(0,n.useState)(null),{serverConfig:I,setFieldInConfigState:U}=(0,n.useContext)(g.a)||{},{instanceDetails:B}=I,{socialHandles:F}=B,A=async()=>{try{let e=await (0,x.rQ)(x.$i,{auth:!1}),t=Object.keys(e).map(t=>({key:t,...e[t]}));a(t)}catch(e){console.log(e)}},D=e=>t.find(t=>t.key===e)||!1,M=""!==O.platform&&!t.find(e=>e.key===O.platform);(0,n.useEffect)(()=>{A()},[]),(0,n.useEffect)(()=>{B.socialHandles&&d(F)},[B]);let R=()=>{L(null),clearTimeout(null)},J=()=>{h(!1),Z(-1),C(!1),E(!1),_({...m.wC})},V=()=>{J()},G=(e,t)=>{_({...O,[e]:t})},H=async e=>{await (0,m.Si)({apiPath:m.c9,data:{value:e},onSuccess:()=>{U({fieldName:"socialHandles",value:e,path:"instanceDetails"}),E(!1),V(),L((0,v.kg)(v.zv)),setTimeout(R,m.sI)},onError:e=>{L((0,v.kg)(v.Un,"There was an error: ".concat(e))),E(!1),setTimeout(R,m.sI)}})},W=e=>{let t=[...l];t.splice(e,1),H(t)},Y=e=>{if(e<=0||e>=l.length)return;let t=[...l],a=t[e-1];t[e-1]=t[e],t[e]=a,H(t)},K=e=>{if(e<0||e>=l.length-1)return;let t=[...l],a=t[e+1];t[e+1]=t[e],t[e]=a,H(t)},$=[{title:"Social Link",dataIndex:"",key:"combo",render:(e,t)=>{let{platform:a,url:n}=t,l=D(a);if(!l)return(0,s.jsx)("div",{className:"social-handle-cell",children:(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:a}),(0,s.jsx)("span",{className:"handle-url",title:n,children:n})]})});let{icon:i,platform:r}=l;return(0,s.jsxs)("div",{className:"social-handle-cell",children:[(0,s.jsx)("span",{className:"option-icon",children:(0,s.jsx)("img",{src:i,alt:"",className:"option-icon"})}),(0,s.jsxs)("p",{className:"option-label",children:[(0,s.jsx)("strong",{children:r}),(0,s.jsx)("span",{className:"handle-url",title:n,children:n})]})]})}},{title:"",dataIndex:"",key:"edit",render:(e,t,a)=>(0,s.jsxs)("div",{className:"actions",children:[(0,s.jsx)(i.Z,{size:"small",onClick:()=>{let e=l[a];Z(a),_({...e}),h(!0),D(e.platform)||C(!0)},children:"Edit"}),(0,s.jsx)(i.Z,{icon:(0,s.jsx)(N,{}),size:"small",hidden:0===a,onClick:()=>Y(a)}),(0,s.jsx)(i.Z,{icon:(0,s.jsx)(k,{}),size:"small",hidden:a===l.length-1,onClick:()=>K(a)}),(0,s.jsx)(i.Z,{className:"delete-button",icon:(0,s.jsx)(w,{}),size:"small",onClick:()=>W(a)})]})}],X={disabled:(e=O.url,"xmpp"===O.platform?!(0,f.Kf)(e,"xmpp"):!(0,f.jv)(e))},Q=(0,s.jsxs)("div",{className:"other-field-container formfield-container",children:[(0,s.jsx)("div",{className:"label-side"}),(0,s.jsx)("div",{className:"input-side",children:(0,s.jsx)(r.default,{placeholder:"Other platform name",defaultValue:O.platform,onChange:e=>{let{value:t}=e.target;G("platform",t)}})})]});return(0,s.jsxs)("div",{className:"social-links-edit-container",children:[(0,s.jsx)(b,{level:3,className:"section-title",children:"Your Social Handles"}),(0,s.jsx)("p",{className:"description",children:"Add all your social media handles and links to your other profiles here."}),(0,s.jsx)(y.E,{status:z}),(0,s.jsx)(o.Z,{className:"social-handles-table",pagination:!1,size:"small",rowKey:e=>"".concat(e.platform,"-").concat(e.url),columns:$,dataSource:l}),(0,s.jsx)(c.default,{title:"Edit Social Handle",open:u,onOk:()=>{E(!0);let e=l.length?[...l]:[];-1===P?e.push(O):e.splice(P,1,O),H(e)},onCancel:V,confirmLoading:T,okButtonProps:X,children:(0,s.jsxs)("div",{className:"social-handle-modal-content",children:[(0,s.jsx)(p,{iconList:t,selectedOption:M?m.z_:O.platform,onSelected:e=>{e===m.z_?(C(!0),G("platform","")):(C(!1),G("platform",e))}}),S&&Q,(0,s.jsx)("br",{}),(0,s.jsx)(j.nv,{fieldName:"social-url",label:"URL",placeholder:{mastodon:"https://mastodon.social/@username",twitter:"https://twitter.com/username"}[O.platform]||"Url to page",value:O.url,onChange:e=>{let{value:t}=e;G("url",t)},useTrim:!0,type:"url",pattern:f.ax}),(0,s.jsx)(y.E,{status:z})]})}),(0,s.jsx)("br",{}),(0,s.jsx)(i.Z,{type:"primary",onClick:()=>{J(),h(!0)},children:"Add a new social link"})]})}},77634:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ed}});var s=a(85893),n=a(67294),l=a(32839),i=a(47271),r=a(24716),o=a(90622),c=a(48825),d=a(95089),u=a(58909),h=a(76538),m=a(55926),p=a(84443),x=a(53068),g=a(86088),f=a(70961),j=a(5152),v=a.n(j),y=a(65326),b=a(70329),k=a(6925),N=a(26541);let w=v()(()=>Promise.resolve().then(a.t.bind(a,81377,23)),{loadableGenerated:{webpack:()=>[81377]},ssr:!1}),S=v()(()=>a.e(5329).then(a.t.bind(a,55329,23)),{loadableGenerated:{webpack:()=>[55329]},ssr:!1}),C=()=>{var e;let[t,a]=(0,n.useState)(null),[l,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(0),{setFieldInConfigState:d,serverConfig:u}=(0,n.useContext)(p.a)||{},h=null==u?void 0:null===(e=u.instanceDetails)||void 0===e?void 0:e.logo,[m,g]=(0,n.useState)(null),j=null,{apiPath:v,tip:C}=x.TEXTFIELD_PROPS_LOGO,T=()=>{g(null),clearTimeout(j),j=null},E=async()=>{t!==h&&(g((0,b.kg)(b.Jk)),await (0,x.Si)({apiPath:v,data:{value:t},onSuccess:()=>{d({fieldName:"logo",value:t,path:""}),g((0,b.kg)(b.zv)),i(!1),c(Math.floor(100*Math.random()))},onError:e=>{g((0,b.kg)(b.Un,"There was an error: ".concat(e))),i(!1)}}),j=setTimeout(T,x.sI))},P="".concat(k.WB,"logo?random=").concat(r);return(0,s.jsxs)("div",{className:"formfield-container logo-upload-container",children:[(0,s.jsx)("div",{className:"label-side",children:(0,s.jsx)("span",{className:"formfield-label",children:"Logo"})}),(0,s.jsxs)("div",{className:"input-side",children:[(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("img",{src:P,alt:"avatar",className:"logo-preview"}),(0,s.jsx)(f.Z,{name:"logo",listType:"picture",className:"avatar-uploader",showUploadList:!1,accept:N.dr.join(","),beforeUpload:e=>(i(!0),new Promise((t,s)=>{if(e.size>N.Z7){let t="File size is too big: ".concat((0,N.kR)(e.size));return g((0,b.kg)(b.Un,"There was an error: ".concat(t))),j=setTimeout(T,x.sI),i(!1),s()}if(!N.dr.includes(e.type)){let t="File type is not supported: ".concat(e.type);return g((0,b.kg)(b.Un,"There was an error: ".concat(t))),j=setTimeout(T,x.sI),i(!1),s()}(0,N.y3)(e,e=>{a(e),setTimeout(()=>t(),100)})})),customRequest:E,disabled:l,children:l?(0,s.jsx)(w,{style:{color:"white"}}):(0,s.jsx)(o.Z,{icon:(0,s.jsx)(S,{})})})]}),(0,s.jsx)(y.E,{status:m}),(0,s.jsx)("p",{className:"field-tip",children:C})]})]})},{Title:T}=i.default,E=e=>{let{cancelPressed:t,okPressed:a}=e;return(0,s.jsxs)(r.default,{width:"70%",title:"Owncast Directory",visible:!0,onCancel:t,footer:(0,s.jsxs)("div",{children:[(0,s.jsx)(o.Z,{onClick:t,children:"Do not share my server."}),(0,s.jsx)(o.Z,{type:"primary",onClick:a,children:"Understood. Share my server publicly."})]}),children:[(0,s.jsx)(i.default.Title,{level:3,children:"What is the Owncast Directory?"}),(0,s.jsxs)(i.default.Paragraph,{children:["Owncast operates a public directory at"," ",(0,s.jsx)("a",{href:"https://directory.owncast.online",children:"directory.owncast.online"})," to share your video streams with more people, while also using these as examples for others. Live streams and servers listed on the directory may optionally be shared on other platforms and applications."]}),(0,s.jsx)(i.default.Title,{level:3,children:"Disclaimers and Responsibility"}),(0,s.jsx)(i.default.Paragraph,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"By enabling this feature you are granting explicit rights to Owncast to share your stream to the public via the directory, as well as other sites, applications and any platform where the Owncast project may be promoting Owncast-powered streams including social media."}),(0,s.jsx)("li",{children:"There is no obligation to list any specific server or topic. Servers can and will be removed at any time for any reason."}),(0,s.jsx)("li",{children:"Any server that is streaming Not Safe For Work (NSFW) content and does not have the NSFW toggle enabled on their server will be removed."}),(0,s.jsx)("li",{children:"Any server streaming harmful, hurtful, misleading or hateful content in any way will not be listed."}),(0,s.jsx)("li",{children:"You may reach out to the Owncast team to report any objectionable content or content that you believe should not be be publicly listed."}),(0,s.jsx)("li",{children:"You have the right to free software and to build whatever you want with it. But there is no obligation for others to share it."})]})})]})};function P(){let[e,t]=(0,n.useState)(null),{serverConfig:a}=(0,n.useContext)(p.a)||{},{instanceDetails:l,yp:i,hideViewerCount:r,disableSearchIndexing:f}=a,{instanceUrl:j}=i,[v,k]=(0,n.useState)(null),[N,w]=(0,n.useState)(!1);if((0,n.useEffect)(()=>{t({...l,...i,hideViewerCount:r,disableSearchIndexing:f})},[l,i]),!e)return null;let S=a=>{a&&w(!0),t({...e,yp:{enabled:a}})},P=a=>{let{fieldName:s,value:n}=a;t({...e,[s]:n})},Z=""!==j;return(0,s.jsxs)("div",{className:"edit-general-settings",children:[(0,s.jsx)(T,{level:3,className:"section-title",children:"Configure Instance Details"}),(0,s.jsx)("br",{}),(0,s.jsx)(m.$7,{fieldName:"name",...x.RE,value:e.name,initialValue:l.name,onChange:P}),(0,s.jsx)(m.$7,{fieldName:"instanceUrl",...x.cj,value:e.instanceUrl,initialValue:i.instanceUrl,type:m.xA,onChange:P,onSubmit:()=>{""===e.instanceUrl&&!0===i.enabled&&(0,x.Si)({apiPath:x.AP,data:{value:!1}})}}),(0,s.jsx)(m.$7,{fieldName:"summary",...x.rs,type:m.Sk,value:e.summary,initialValue:l.summary,onChange:P}),(0,s.jsxs)("div",{style:{marginBottom:"50px",marginRight:"150px"},children:[(0,s.jsxs)("div",{style:{display:"flex",width:"80vh",justifyContent:"space-between",alignItems:"end"},children:[(0,s.jsx)("p",{style:{margin:"20px",marginRight:"10px",fontWeight:"400"},children:"Offline Message:"}),(0,s.jsx)(d.ZP,{value:e.offlineMessage,...x.rd,theme:u.FZ,height:"150px",width:"450px",onChange:e=>{P({fieldName:"offlineMessage",value:e})},extensions:[(0,c.markdown)({base:c.markdownLanguage,codeLanguages:h.M})]})]}),(0,s.jsx)("div",{className:"field-tip",children:"The offline message is displayed to your page visitors when you're not streaming. Markdown is supported."}),(0,s.jsx)(o.Z,{type:"primary",onClick:()=>{(0,x.Si)({apiPath:x.bJ,data:{value:e.offlineMessage}}),k((0,b.kg)(b.zv)),setTimeout(()=>{k(null)},2e3)},style:{margin:"10px",float:"right"},children:"Save Message"}),(0,s.jsx)(y.Z,{status:v})]}),(0,s.jsx)(C,{}),(0,s.jsx)(g.Z,{fieldName:"hideViewerCount",useSubmit:!0,...x._X,checked:e.hideViewerCount,onChange:function(e){P({fieldName:"hideViewerCount",value:e})}}),(0,s.jsx)(g.Z,{fieldName:"disableSearchIndexing",useSubmit:!0,...x.il,checked:e.disableSearchIndexing,onChange:function(e){P({fieldName:"disableSearchIndexing",value:e})}}),(0,s.jsx)("br",{}),(0,s.jsxs)("p",{className:"description",children:["Increase your audience by appearing in the"," ",(0,s.jsx)("a",{href:"https://directory.owncast.online",target:"_blank",rel:"noreferrer",children:(0,s.jsx)("strong",{children:"Owncast Directory"})}),". This is an external service run by the Owncast project."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/directory/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more"}),"."]}),!i.instanceUrl&&(0,s.jsxs)("p",{className:"description",children:["You must set your ",(0,s.jsx)("strong",{children:"Server URL"})," above to enable the directory."]}),(0,s.jsxs)("div",{className:"config-yp-container",children:[(0,s.jsx)(g.Z,{fieldName:"enabled",useSubmit:!0,...x.P,checked:e.enabled,disabled:!Z,onChange:S}),(0,s.jsx)(g.Z,{fieldName:"nsfw",useSubmit:!0,...x.EY,checked:e.nsfw,disabled:!Z})]}),N&&(0,s.jsx)(E,{cancelPressed:function(){w(!1),S(!1),P({fieldName:"enabled",value:!1})},okPressed:function(){w(!1),P({fieldName:"enabled",value:!0}),t({...e,yp:{enabled:!0}})}})]})}var Z=a(14845),O=a(62376),_=a(20284);let{Title:z}=i.default;function L(){let[e,t]=(0,n.useState)(""),[a,l]=(0,n.useState)(null),{serverConfig:i,setFieldInConfigState:r}=(0,n.useContext)(p.a)||{},{instanceDetails:o}=i,{tags:c=[]}=o,{apiPath:d,maxLength:u,placeholder:h,configPath:m}=x.FIELD_PROPS_TAGS,g=null;(0,n.useEffect)(()=>()=>{clearTimeout(g)},[]);let f=()=>{l(null),clearTimeout(g=null)},j=async e=>{l((0,b.kg)(b.Jk)),await (0,x.Si)({apiPath:d,data:{value:e},onSuccess:()=>{r({fieldName:"tags",value:e,path:m}),l((0,b.kg)(b.zv,"Tags updated.")),t(""),g=setTimeout(f,x.sI)},onError:e=>{l((0,b.kg)(b.Un,e)),g=setTimeout(f,x.sI)}})},v=e=>{f();let t=[...c];t.splice(e,1),j(t)};return(0,s.jsxs)("div",{className:"tag-editor-container",children:[(0,s.jsx)(z,{level:3,className:"section-title",children:"Add Tags"}),(0,s.jsx)("p",{className:"description",children:"This is a great way to categorize your Owncast server on the Directory!"}),(0,s.jsx)("div",{className:"edit-current-strings",children:c.map((e,t)=>(0,s.jsx)(Z.Z,{closable:!0,onClose:()=>{v(t)},color:_.Q,children:e},"tag-".concat(e,"-").concat(t)))}),(0,s.jsx)("div",{className:"add-new-string-section",children:(0,s.jsx)(O.nv,{fieldName:"tag-input",value:e,className:"new-tag-input",onChange:e=>{let{value:s}=e;a||l(null),t(s)},onPressEnter:()=>{f();let t=e.trim();if(""===t){l((0,b.kg)(b.dG,"Please enter a tag"));return}if(c.some(e=>e.toLowerCase()===t.toLowerCase())){l((0,b.kg)(b.dG,"This tag is already used!"));return}j([...c,t])},maxLength:u,placeholder:h,status:a})})]})}var I=a(77125);let{Title:U}=i.default;function B(){let[e,t]=(0,n.useState)(""),[a,l]=(0,n.useState)(null),[i,r]=(0,n.useState)(!1),{serverConfig:m,setFieldInConfigState:g}=(0,n.useContext)(p.a)||{},{instanceDetails:f}=m,{extraPageContent:j}=f,v=null,k=()=>{l(null),r(!1),clearTimeout(v),v=null};async function N(){l((0,b.kg)(b.Jk)),await (0,x.Si)({apiPath:x.AA,data:{value:e},onSuccess:t=>{g({fieldName:"extraPageContent",value:e,path:"instanceDetails"}),l((0,b.kg)(b.zv,t))},onError:e=>{l((0,b.kg)(b.Un,e))}}),v=setTimeout(k,x.sI)}return(0,n.useEffect)(()=>{t(j)},[f]),(0,s.jsxs)("div",{className:"edit-page-content",children:[(0,s.jsx)(U,{level:3,className:"section-title",children:"Custom Page Content"}),(0,s.jsxs)("p",{className:"description",children:["Edit the content of your page by using simple"," ",(0,s.jsx)("a",{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer",children:"Markdown syntax"}),"."]}),(0,s.jsx)(d.ZP,{value:e,placeholder:"Enter your custom page content here...",theme:u.FZ,height:"200px",onChange:function(e){t(e),e===j||i?e===j&&i&&r(!1):r(!0)},extensions:[(0,c.markdown)({base:c.markdownLanguage,codeLanguages:h.M})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[i&&(0,s.jsx)(o.Z,{type:"primary",onClick:N,children:"Save"}),(0,s.jsx)(y.E,{status:a})]})]})}function F(){return(0,s.jsxs)("div",{className:"config-public-details-page",children:[(0,s.jsxs)("p",{className:"description",children:["The following are displayed on your site to describe your stream and its content."," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]}),(0,s.jsxs)("div",{className:"top-container",children:[(0,s.jsx)("div",{className:"form-module instance-details-container",children:(0,s.jsx)(P,{})}),(0,s.jsxs)("div",{className:"form-module social-items-container ",children:[(0,s.jsx)("div",{className:"form-module tags-module",children:(0,s.jsx)(L,{})}),(0,s.jsx)("div",{className:"form-module social-handles-container",children:(0,s.jsx)(I.Z,{})})]})]}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(B,{})})]})}var A=a(78533),D=a(55050),M=a(96652),R=a(6647),J=a(87130),V=a(63368),G=a(14073),H=a(48120);let{Title:W}=i.default,Y=()=>{let[e,t]=(0,n.useState)("/* Enter custom CSS here */"),[a,l]=(0,n.useState)(null),[i,r]=(0,n.useState)(!1),{serverConfig:c,setFieldInConfigState:h}=(0,n.useContext)(p.a)||{},{instanceDetails:m}=c,{customStyles:g}=m,f=null,j=()=>{l(null),r(!1),clearTimeout(f),f=null};async function v(){l((0,b.kg)(b.Jk)),await (0,x.Si)({apiPath:x.d$,data:{value:e},onSuccess:t=>{h({fieldName:"customStyles",value:e,path:"instanceDetails"}),l((0,b.kg)(b.zv,t))},onError:e=>{l((0,b.kg)(b.Un,e))}}),f=setTimeout(j,x.sI)}(0,n.useEffect)(()=>{t(g)},[m]);let k=n.useCallback(e=>{t(e),e===g||i?e===g&&i&&r(!1):r(!0)},[]);return(0,s.jsxs)("div",{className:"edit-custom-css",children:[(0,s.jsx)(W,{level:3,className:"section-title",children:"Customize your page styling with CSS"}),(0,s.jsxs)("p",{className:"description",children:["Customize the look and feel of your Owncast instance by overriding the CSS styles of various components on the page. Refer to the"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"CSS & Components guide"}),"."]}),(0,s.jsx)("p",{className:"description",children:"Please input plain CSS text, as this will be directly injected onto your page during load."}),(0,s.jsx)(d.ZP,{value:e,placeholder:"/* Enter custom CSS here */",theme:u.FZ,height:"200px",extensions:[(0,H.css)()],onChange:k}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[i&&(0,s.jsx)(o.Z,{type:"primary",onClick:v,children:"Save"}),(0,s.jsx)(y.E,{status:a})]})]})};var K=a(41692),$=a.n(K);let{Panel:X}=A.default,Q="/appearance",q=[{name:"theme-color-users-0",description:""},{name:"theme-color-users-1",description:""},{name:"theme-color-users-2",description:""},{name:"theme-color-users-3",description:""},{name:"theme-color-users-4",description:""},{name:"theme-color-users-5",description:""},{name:"theme-color-users-6",description:""},{name:"theme-color-users-7",description:""}],ee=[{name:"theme-color-background-main",description:"Background"},{name:"theme-color-action",description:"Action"},{name:"theme-color-action-hover",description:"Action Hover"},{name:"theme-color-components-primary-button-border",description:"Primary Button Border"},{name:"theme-color-components-primary-button-text",description:"Primary Button Text"},{name:"theme-color-components-chat-background",description:"Chat Background"},{name:"theme-color-components-chat-text",description:"Text: Chat"},{name:"theme-color-components-text-on-dark",description:"Text: Light"},{name:"theme-color-components-text-on-light",description:"Text: Dark"},{name:"theme-color-background-header",description:"Header/Footer"},{name:"theme-color-components-content-background",description:"Page Content"},{name:"theme-color-components-video-status-bar-background",description:"Video Status Bar Background"},{name:"theme-color-components-video-status-bar-foreground",description:"Video Status Bar Foreground"}],et=[{name:"theme-rounded-corners",description:"Corner radius"}],ea=[...ee,...q,...et].reduce((e,t)=>(e[t.name]={name:t.name,description:t.description},e),{}),es=n.memo(e=>{let{value:t,name:a,description:n,onChange:l}=e;return(0,s.jsxs)(D.Z,{span:3,children:[(0,s.jsx)("input",{type:"color",id:a,name:n,title:n,value:t,className:$().colorPicker,onChange:e=>l(a,e.target.value,n)}),(0,s.jsx)("div",{style:{padding:"2px"},children:n})]},a)}),en=e=>{let{variables:t,updateColor:a}=e,n=t.map(e=>{let{name:t,description:n,value:l}=e;return(0,s.jsx)(es,{value:l,name:t,description:n,onChange:a},t)});return(0,s.jsx)(s.Fragment,{children:n})};function el(){var e,t,a,l,i,r,c,d,u;let{serverConfig:h,setFieldInConfigState:m}=(0,n.useContext)(p.a),{instanceDetails:g}=h,{appearanceVariables:f}=g,[j,v]=(0,n.useState)(),[k,N]=(0,n.useState)(),[w,S]=(0,n.useState)(null),C=()=>{S(null),clearTimeout(null)},T=()=>{let e={};[...ee,...q,...et].forEach(t=>{let a=getComputedStyle(document.documentElement).getPropertyValue("--".concat(t.name));e[t.name]={value:a.trim(),description:t.description}}),v(e)};(0,n.useEffect)(()=>{T()},[]),(0,n.useEffect)(()=>{if(0===Object.keys(f).length)return;let e={};Object.keys(f).forEach(t=>{var a;e[t]={value:f[t],description:(null===(a=ea[t])||void 0===a?void 0:a.description)||""}}),N(e)},[f]);let E=(0,n.useCallback)((e,t,a)=>{N(s=>({...s,[e]:{value:t,description:a}}))},[]),P=async()=>{await (0,x.Si)({apiPath:Q,data:{value:{}},onSuccess:()=>{S((0,b.kg)(b.zv,"Updated.")),setTimeout(C,x.sI),N({})},onError:e=>{S((0,b.kg)(b.Un,e)),setTimeout(C,x.sI)}})},Z=async()=>{let e={};Object.keys(k).forEach(t=>{e[t]=k[t].value}),await (0,x.Si)({apiPath:Q,data:{value:e},onSuccess:()=>{S((0,b.kg)(b.zv,"Updated.")),setTimeout(C,x.sI),m({fieldName:"appearanceVariables",value:e,path:"instanceDetails"})},onError:e=>{S((0,b.kg)(b.Un,e)),setTimeout(C,x.sI)}})},O=e=>{E("theme-rounded-corners","".concat(e.toString(),"px"),"")};if(!j)return(0,s.jsx)("div",{children:"Loading..."});let _=e=>e.map(e=>{let t=(null==k?void 0:k[e.name])?k:j,{name:a,description:s}=e,{value:n}=t[a];return{name:a,description:s,value:n}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(M.Z,{direction:"vertical",children:[(0,s.jsx)(G.Z,{children:"Customize Appearance"}),(0,s.jsx)(V.Z,{children:"The following colors are used across the user interface."}),(0,s.jsx)("div",{children:(0,s.jsxs)(A.default,{defaultActiveKey:["1"],children:[(0,s.jsxs)(X,{header:(0,s.jsx)("strong",{children:"Section Colors"}),children:[(0,s.jsx)("p",{children:"Certain sections of the interface can be customized by selecting new colors for them."}),(0,s.jsx)(R.Z,{gutter:[16,16],children:(0,s.jsx)(en,{variables:_(ee),updateColor:E})})]},"1"),(0,s.jsx)(X,{header:(0,s.jsx)("strong",{children:"Chat User Colors"}),children:(0,s.jsx)(R.Z,{gutter:[16,16],children:(0,s.jsx)(en,{variables:_(q),updateColor:E})})},"2"),(0,s.jsxs)(X,{header:(0,s.jsx)("strong",{children:"Other Settings"}),children:["How rounded should corners be?",(0,s.jsxs)(R.Z,{gutter:[16,16],children:[(0,s.jsx)(D.Z,{span:12,children:(0,s.jsx)(J.Z,{min:0,max:20,tooltip:{formatter:null},onChange:e=>{O(e)},value:Number(null!==(d=null!==(c=null==k?void 0:null===(t=k["theme-rounded-corners"])||void 0===t?void 0:null===(e=t.value)||void 0===e?void 0:e.replace("px",""))&&void 0!==c?c:null==j?void 0:null===(l=j["theme-rounded-corners"])||void 0===l?void 0:null===(a=l.value)||void 0===a?void 0:a.replace("px",""))&&void 0!==d?d:0)})}),(0,s.jsx)(D.Z,{span:4,children:(0,s.jsx)("div",{style:{width:"100px",height:"30px",borderRadius:"".concat(null!==(u=null==k?void 0:null===(i=k["theme-rounded-corners"])||void 0===i?void 0:i.value)&&void 0!==u?u:null==j?void 0:null===(r=j["theme-rounded-corners"])||void 0===r?void 0:r.value),backgroundColor:"var(--theme-color-palette-7)"}})})]})]},"4")]})}),(0,s.jsxs)(M.Z,{direction:"horizontal",children:[(0,s.jsx)(o.Z,{type:"primary",onClick:Z,children:"Save Colors"}),(0,s.jsx)(o.Z,{type:"ghost",onClick:P,children:"Reset to Defaults"})]}),(0,s.jsx)(y.E,{status:w})]}),(0,s.jsx)("div",{className:"form-module page-content-module",children:(0,s.jsx)(Y,{})})]})}var ei=a(695),er=a(122);let{Title:eo}=i.default,ec=()=>{let[e,t]=(0,n.useState)("/* Enter custom Javascript here */"),[a,l]=(0,n.useState)(null),[i,r]=(0,n.useState)(!1),{serverConfig:c,setFieldInConfigState:h}=(0,n.useContext)(p.a)||{},{instanceDetails:m}=c,{customJavascript:g}=m,f=null,j=()=>{l(null),r(!1),clearTimeout(f),f=null};async function v(){l((0,b.kg)(b.Jk)),await (0,x.Si)({apiPath:x.JZ,data:{value:e},onSuccess:t=>{h({fieldName:"customJavascript",value:e,path:"instanceDetails"}),l((0,b.kg)(b.zv,t))},onError:e=>{l((0,b.kg)(b.Un,e))}}),f=setTimeout(j,x.sI)}(0,n.useEffect)(()=>{t(g)},[m]);let k=n.useCallback(e=>{t(e),e===g||i?e===g&&i&&r(!1):r(!0)},[]);return(0,s.jsxs)("div",{className:"edit-custom-css",children:[(0,s.jsx)(eo,{level:3,className:"section-title",children:"Customize your page with Javascript"}),(0,s.jsxs)("p",{className:"description",children:["Insert custom Javascript into your Owncast page to add your own functionality or to add 3rd party scripts. Read more about how to use this feature in the"," ",(0,s.jsx)("a",{href:"https://owncast.online/docs/website/",rel:"noopener noreferrer",target:"_blank",children:"Web page documentation."}),"."]}),(0,s.jsx)("p",{className:"description",children:"Please use raw Javascript, no HTML or any script tags."}),(0,s.jsx)(d.ZP,{value:e,placeholder:"/* Enter custom Javascript here */",theme:u.FZ,height:"200px",extensions:[(0,er.javascript)()],onChange:k}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"page-content-actions",children:[i&&(0,s.jsx)(o.Z,{type:"primary",onClick:v,children:"Save"}),(0,s.jsx)(y.E,{status:a})]})]})};function ed(){return(0,s.jsx)("div",{className:"config-public-details-page",children:(0,s.jsx)(l.Z,{defaultActiveKey:"1",centered:!0,items:[{label:"General",key:"1",children:(0,s.jsx)(F,{})},{label:"Appearance",key:"2",children:(0,s.jsx)(el,{})},{label:"Custom Scripting",key:"3",children:(0,s.jsx)(ec,{})}]})})}ed.getLayout=function(e){return(0,s.jsx)(ei.l,{page:e})}},26541:function(e,t,a){"use strict";a.d(t,{Z7:function(){return s},dr:function(){return n},kR:function(){return i},y3:function(){return l}});let s=2097152,n=["image/png","image/jpeg","image/gif"];function l(e,t){let a=new FileReader;a.addEventListener("load",()=>t(a.result)),a.readAsDataURL(e)}function i(e){let t=Math.floor(Math.log(e)/Math.log(1024)),a=1*Number((e/Math.pow(1024,t)).toFixed(2));return"".concat(a," ").concat(["B","KB","MB","GB","TB","PB","EB","ZB","YB"][t])}},41692:function(e){e.exports={colorPicker:"appearance_colorPicker__8KOjx"}}},function(e){e.O(0,[5762,7298,6410,8768,947,7406,4716,2862,7271,9083,811,5386,9974,8625,3796,2839,653,2861,5461,6356,9256,4073,9343,6269,695,2888,9774,179],function(){return e(e.s=39856)}),_N_E=e.O()}]);