(this["webpackJsonpslack-clone"]=this["webpackJsonpslack-clone"]||[]).push([[0],{271:function(e,t,a){e.exports=a(455)},276:function(e,t,a){},455:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(45),l=a.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(18),o=a(19),i=a(20),u=a(22),h=a(67),m=a(59),d=(a(276),a(483)),p=a(17),f=a(478),g=a(472),v=a(26),E=a(479),C=a(48),b=a(465),y=a(457),O=a(24),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentChannel:"",searchText:""},e.handleChange=function(t){e.setState(Object(p.a)({},e.state,Object(v.a)({},t.target.name,t.target.value)))},e}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{currentChannel:e.currentChannel}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{clearing:!0},r.a.createElement(E.a,{fluid:"true",as:"h2",floated:"left",style:{marginBottom:0}},r.a.createElement("span",null,this.state.currentChannel&&this.state.currentChannel.name.toUpperCase(),r.a.createElement(C.a,{name:"star outline",color:"black"}))),r.a.createElement(E.a,{floated:"right"},r.a.createElement(b.a,{size:"mini",icon:"search",name:"searchText",placeholder:"search messages",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(y.a,{color:"green",onClick:function(){e.props.searchMessages(e.state.searchText)}}," ","Search"," "))))}}]),a}(n.Component),S=Object(O.b)((function(e){return{currentChannel:e.channel.currentChannel}}),{})(j),k=a(162),w=a.n(k),R=(a(366),a(368),a(456),{apiKey:"AIzaSyCv2Rh88a8YshIP81tfHu8OfaqWTioKPRk",authDomain:"react-slack-clone-7b265.firebaseapp.com",databaseURL:"https://react-slack-clone-7b265.firebaseio.com",projectId:"react-slack-clone-7b265",storageBucket:"react-slack-clone-7b265.appspot.com",messagingSenderId:"289515100388",appId:"1:289515100388:web:f3317214cd51dcf011f4f1",measurementId:"G-5EFCYX52T1"});w.a.initializeApp(R);var U=w.a,P=a(471),M=a(163),A=a.n(M),L=a(237),x=a.n(L),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={file:null,permittedTypes:["image/jpeg","image/png","image/jpg"],user:null,percentUploaded:0,currentChannel:null,storageRef:U.storage().ref(),messgesRef:U.database().ref("messages"),uploadState:"",uploadTask:""},e.addFile=function(t){var a=t.target.files[0];a&&e.setState(Object(p.a)({},e.state,{file:a}))},e.sendFile=function(){var t=e.state.file;if(t&&e.isPermitted(t.name)){var a={contentType:A.a.lookup(t.name)};e.uploadFile(t,a)}},e.clearFile=function(){e.setState(Object(p.a)({},e.state,{file:null}))},e.uploadFile=function(t,a){var n=e.state.currentChannel.id,r=e.state.messgesRef,s="chat/public".concat(x()(),".jpg");e.setState(Object(p.a)({},e.state,{uploadState:"uploading",uploadTask:e.state.storageRef.child(s).put(t,a)}),(function(){e.state.uploadTask.on("state_changed",(function(t){var a=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({percentUploaded:a})}),(function(e){return console.log(e)}),(function(){e.props.closeModal(),e.state.uploadTask.snapshot.ref.getDownloadURL().then((function(t){return e.props.sendFileMessage(t,r,n)}))}))}))},e.isPermitted=function(t){return e.state.permittedTypes.includes(A.a.lookup(t))},e}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{user:e.user,currentChannel:e.currentChannel}))}},{key:"render",value:function(){return r.a.createElement(P.a,{basic:!0,open:this.props.modal,close:this.props.closeModal},r.a.createElement(P.a.Header,null,"Select File"),r.a.createElement(P.a.Content,null,r.a.createElement(b.a,{onChange:this.addFile,fluid:!0,label:"file types : jpg / png",name:"file",type:"file"})),r.a.createElement(P.a.Actions,null,r.a.createElement(y.a,{color:"green",onClick:this.sendFile,inverted:!0}," ",r.a.createElement(C.a,{name:"checkmark"}),"Upload"),r.a.createElement(y.a,{color:"red",onClick:this.props.closeModal,inverted:!0}," ",r.a.createElement(C.a,{name:"remove"})," Cancel")))}}]),a}(n.Component),T=Object(O.b)((function(e){return{currentChannel:e.channel.currentChannel,user:e.user.currentUser}}),{})(N),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={user:e.props.currentUser,isPrivateChannel:e.props.isPrivateChannel,message:"",loading:!1,currentChannel:e.props.currentChannel,errors:[],messagesRef:e.props.messagesRef,modal:!1},e.handleChange=function(t){e.setState(Object(p.a)({},e.state,Object(v.a)({},t.target.name,t.target.value)))},e.openModal=function(){return e.setState(Object(p.a)({},e.state,{modal:!0}))},e.closeModal=function(){return e.setState(Object(p.a)({},e.state,{modal:!1}))},e.sendMessage=function(){var t=e.state,a=t.messagesRef,n=t.message,r=t.currentChannel;n.length>0&&(e.setState(Object(p.a)({},e.state,{loading:!0})),a.child(r.id).push().set(e.createMessage()).then((function(){console.log("sent"),e.setState(Object(p.a)({},e.state,{message:"",loading:!1,errors:[]}))})).catch((function(t){console.log(t),e.setState(Object(p.a)({},e.state,{loading:!1,errors:e.state.errors.concat(t)}))})))},e.createMessage=function(t){var a={timestamp:U.database.ServerValue.TIMESTAMP,user:{id:e.state.user.uid,displayName:e.state.user.displayName,photoURL:e.state.user.photoURL}};return t?a.image=t:a.content=e.state.message,a},e.sendFileMessage=function(t,a,n){a.child(n).push().set(e.createMessage(t)).then((function(){return console.log("upload done")})).catch((function(e){return console.log(e)}))},e}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{currentChannel:e.currentChannel,user:this.props.currentUser,isPrivateChannel:this.props.isPrivateChannel}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{className:"message__form"},r.a.createElement(b.a,{fluid:!0,name:"message",onChange:this.handleChange,value:this.state.message,style:{marginBottom:"0.7em"},label:r.a.createElement(y.a,{icon:"add"}),labelPosition:"left",className:this.state.errors.some((function(e){return e.includes("message")}))?"error":""}),r.a.createElement(y.a.Group,{icons:!0,widths:"2"},r.a.createElement(y.a,{disabled:this.state.loading,onClick:this.sendMessage,color:"orange",icon:"edit",content:"reply",labelPosition:"left"}),r.a.createElement(y.a,{onClick:this.openModal,color:"green",content:"upload media",icon:"cloud upload",labelPosition:"right"}),r.a.createElement(T,{modal:this.state.modal,sendFileMessage:this.sendFileMessage,closeModal:this.closeModal}))))}}]),a}(n.Component),F=Object(O.b)((function(e){return{currentChannel:e.channel.currentChannel,currentUser:e.user.currentUser,isPrivateChannel:e.channel.isPrivateChannel}}),{})(I),D=a(127),_=a(260),B=a(246),W=a.n(B);var H=Object(O.b)()((function(e){var t,a,s=Object(n.useState)(e.currentUser),l=Object(D.a)(s,2);return l[0],l[1],r.a.createElement(g.a,null,r.a.createElement(g.a.Avatar,{src:e.message.user.photoURL}),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Author,{as:"a"},e.message.user.displayName),r.a.createElement(g.a.Metadata,null,(a=e.message.timestamp,W()(a).fromNow())),(t=e.message).hasOwnProperty("image")&&!t.hasOwnProperty("content")?r.a.createElement(_.a,{src:e.message.image}):r.a.createElement(g.a.Text,null,e.message.content)))})),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={messagesRef:U.database().ref("messages"),currentChannel:null,messages:[],messagesLoading:!0,user:null,isPrivateChannel:e.props.isPrivateChannel,uniqueUsers:0,searching:!1,privateMessagesRef:U.database().ref("privateMessages"),searchMessages:[]},e.addListeners=function(t){e.addMessageListener(t)},e.addMessageListener=function(t){var a=[];e.getMessagesRef().child(t).on("child_added",(function(t){a.push(t.val()),e.setState(Object(p.a)({},e.state,{messages:a,messagesLoading:!1}))}))},e.searchMessages=function(t){var a=[];""!=t?(e.state.messages.map((function(e){e.content&&e.content.includes(t)&&a.push(e)})),e.setState(Object(p.a)({},e.state,{searchMessages:a,searching:!0}))):e.setState(Object(p.a)({},e.state,{searching:!1}))},e.getMessagesRef=function(){var t=e.state,a=t.messagesRef,n=t.privateMessagesRef;return t.isPrivateChannel?n:a},e.displaySearchMessages=function(){var t=e.state.searchMessages;return t.length>0?t.map((function(t){return r.a.createElement(H,{key:t.timestamp,message:t,user:e.state.user})})):r.a.createElement("div",null,"Cannot find such a message")},e.displayMessages=function(t,a){return t.length>0?t.map((function(t){return r.a.createElement(H,{key:t.timestamp,message:t,user:e.state.user})})):r.a.createElement("div",null,"This is the beginning of Channel")},e}return Object(o.a)(a,[{key:"componentWillUnmount",value:function(){this.state.messagesRef.off()}},{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(Object(p.a)({},this.state,{user:e.user,currentChannel:e.currentChannel}),(function(){var e=t.state,a=e.currentChannel,n=e.user;a&&n&&t.addListeners(a.id)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{searchMessages:this.searchMessages,uniqueUsers:this.state.uniqueUsers}),r.a.createElement(f.a,null,r.a.createElement(g.a.Group,{className:"messages"},this.state.searching?this.displaySearchMessages():this.displayMessages(this.state.messages,this.state.currentChannel))),r.a.createElement(F,{messagesRef:this.state.messagesRef,getMessagesRef:this.getMessagesRef}))}}]),a}(r.a.Component),z=Object(O.b)((function(e){return{user:e.user.currentUser,currentChannel:e.channel.currentChannel}}),{})(V),q=a(482),K=a(477),G=a(468),J=(r.a.Component,a(473)),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.currentUser},e.handleSignout=function(){U.auth().signOut().then((function(){return console.log("Signout")})).catch((function(e){return console.log(e)}))},e.dropdownOptions=function(){return[{key:"user",text:r.a.createElement("span",null,"Signed In as ",r.a.createElement("strong",null,e.state.user.displayName)," ")},{key:"avatar",text:r.a.createElement("span",null," Change Avatar")},{key:"signout",text:r.a.createElement("span",{onClick:e.handleSignout},"Sign out")}]},e}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state),r.a.createElement(d.a,{style:{background:"#2B2B52"}},r.a.createElement(d.a.Column,null,r.a.createElement(d.a.Row,{style:{paddingTop:"1.2em",margin:"0px"}},r.a.createElement(E.a,{style:{color:"white",textAlign:"center"}},r.a.createElement(E.a.Content,{inverted:!0,float:"left",as:"h2"},r.a.createElement(C.a,{name:"code"}),"Klack"))),r.a.createElement(E.a,{style:{padding:"0.24em"},inverted:!0,as:"h4"},r.a.createElement(J.a,{trigger:r.a.createElement("span",{style:{paddingLeft:"4em"}}," ",r.a.createElement(_.a,{src:this.state.user.photoURL,spaced:"right",style:{width:"40px",height:"40px",borderRadius:"50%"}})," ",this.state.user.displayName),options:this.dropdownOptions()}))))}}]),a}(n.Component),X=Object(O.b)((function(e){return{currentUser:e.user.currentUser}}),{})(Y),$=a(470),Q=function(e){return{type:"SET_CHANNEL",payload:{currentChannel:e}}},Z=function(e){return{type:"SET_PRIVATE_CHANNEL",payload:{isPrivateChannel:e}}},ee=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user,channels:[],showModal:!1,channelName:"",firstLoad:!0,channelDetails:"",activeChannel:"",channelsRef:U.database().ref("channels")},e.addListeners=function(){var t=[];e.state.channelsRef.on("child_added",(function(a){t.push(a.val()),e.setState({channels:t},(function(){return e.setFirstChannel()}))}))},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.showModal=function(){e.setState({showModal:!0})},e.closeModal=function(){e.setState({showModal:!1})},e.handleSubmit=function(t){t.preventDefault(),console.log("Submit"),e.isFormValid(e.state)&&e.addChannel()},e.isFormValid=function(e){var t=e.channelName,a=e.channelDetails;return t.length&&a.length},e.addChannel=function(){var t=e.state.channelsRef.push().key,a={id:t,name:e.state.channelName,details:e.state.channelDetails,createdBy:{name:e.state.user.displayName,photoURL:e.state.user.photoURL}};e.state.channelsRef.child(t).update(a).then((function(){e.setState({channelName:"",channelDetails:""}),e.closeModal()})).catch((function(e){return console.log(e)}))},e.changeChannel=function(t){e.props.setCurrentChannel(t),e.setActiveChannel(t)},e.setFirstChannel=function(){e.state.firstLoad&&e.state.channels.length>0&&(e.setState(Object(p.a)({},e.state,{activeChannel:e.state.channels[0].id})),e.setActiveChannel(e.state.channels[0]),e.props.setCurrentChannel(e.state.channels[0]),e.setState(Object(p.a)({},e.state,{firstLoad:!1})))},e.setActiveChannel=function(t){e.setState(Object(p.a)({},e.state,{activeChannel:t.id}))},e.displayChannels=function(){if(e.state.channels.length>0)return e.state.channels.map((function(t){return r.a.createElement(K.a.Item,{name:t.name,style:{opacity:.7},key:t.id,onClick:function(){console.log("change"),e.changeChannel(t)},active:t.id==e.state.activeChannel},"# ",t.name)}))},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"removeListeners",value:function(){this.state.channelsRef.off()}},{key:"render",value:function(){var e=this.state.channels;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Menu,{className:"menu",style:{textAlign:"center"}},r.a.createElement("br",null),r.a.createElement(K.a.Item,null,r.a.createElement("span",null,r.a.createElement(C.a,{name:"exchange"}),"CHANNELS"," ")," ","(",e.length,") ",r.a.createElement(C.a,{onClick:this.showModal,name:"add"}))),this.displayChannels(),r.a.createElement(P.a,{basic:!0,open:this.state.showModal,onClose:this.closeModal},r.a.createElement(P.a.Header,null,"Add Channel"),r.a.createElement(P.a.Content,null,r.a.createElement($.a,null,r.a.createElement(b.a,{fluid:!0,label:"Name Of Channel",name:"channelName",onChange:this.handleChange,value:this.state.channelName}),r.a.createElement("br",null),r.a.createElement(b.a,{fluid:!0,label:"Description Of Channel",name:"channelDetails",onChange:this.handleChange,value:this.state.channelDetails}))),r.a.createElement(P.a.Actions,null,r.a.createElement(y.a,{onClick:this.handleSubmit,color:"green",inverted:!0,style:{marginBottom:"20px"}},r.a.createElement(C.a,{name:"checkmark"}),"Add Channel"),r.a.createElement(y.a,{color:"red",inverted:!0,onClick:this.closeModal},r.a.createElement(C.a,{name:"remove"}),"Cancel"))))}}]),a}(n.Component),te=Object(O.b)((function(e){return{user:e.user.currentUser}}),{setCurrentChannel:Q,setPrivateChannel:Z})(ee),ae=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={users:[],currentUser:e.props.currentUser,usersRef:U.database().ref("users"),connectedRef:U.database().ref(".info/connected"),presenceRef:U.database().ref("presence")},e.addListeners=function(t){var a=[];e.state.usersRef.on("child_added",(function(n){if(t!==n.key){var r=n.val();r.uid=n.key,r.status="offline",a.push(r),e.setState({users:a})}})),e.state.connectedRef.on("value",(function(a){!0===a.val()&&e.state.presenceRef.child(t).set(!0)})),e.state.presenceRef.on("child_added",(function(a){t!==a.key&&e.addStatusToUser(a.key,!0)})),e.state.presenceRef.on("child_removed",(function(a){t!==a.key&&e.addStatusToUser(a.key,!1)}))},e.addStatusToUser=function(t,a){var n=e.state.users.reduce((function(e,n){return n.uid===t&&(n.status=a?"online":"offline"),e.concat(n)}),[]);e.setState({users:n})},e.changeChannel=function(t){var a={id:e.getChannelId(t.uid),name:t.name};e.props.setCurrentChannel(a),e.props.setPrivateChannel(!0)},e.getChannelId=function(t){var a=e.state.currentUser.uid;return t<a?"".concat(t,"/").concat(a):"".concat(a,"/").concat(t)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props),this.setState(Object(p.a)({},this.state,{currentUser:this.props.currentUser})),this.addListeners(this.state.currentUser.uid)}},{key:"render",value:function(){var e=this,t=this.state.users;return r.a.createElement(K.a.Menu,{className:"menu"},r.a.createElement(K.a.Item,null,r.a.createElement("span",null,r.a.createElement(C.a,{name:"mail"})," DIRECT MESSAGES ",t.length)),this.state.users.map((function(t){return r.a.createElement(K.a.Item,{key:t.uid,onClick:function(){e.changeChannel(t)}},r.a.createElement(C.a,{name:"circle",color:"online"===t.status?"green":"red"})," ",t.name)})))}}]),a}(n.Component),ne=(Object(O.b)(null,{setCurrentChannel:Q,setPrivateChannel:Z})(ae),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(K.a,{size:"large",inverted:!0,fixed:"left",vertical:!0,style:{background:"#2B2B52",fontSize:"1.2rem"}},r.a.createElement(X,null),r.a.createElement(te,null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component)),re=Object(O.b)((function(e){return{currentUser:e.user.currentUser}}),{})(ne),se=a(474),le=a(475),ce=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={channel:e.props.currentChannel,activeIndex:0},e.setActiveIndex=function(t,a){var n=a.index,r=e.state.activeIndex===n?-1:n;e.setState({activeIndex:r})},e.formatCount=function(e){return"".concat(e,e>1||0===e?" posts":" post")},e.displayTopPosters=function(t){return Object.entries(t).sort((function(e,t){return t[1]-e[1]})).map((function(t,a){var n=Object(D.a)(t,2),s=n[0],l=n[1];return r.a.createElement(se.a.Item,{key:a},r.a.createElement(_.a,{avatar:!0,src:l.avatar}),r.a.createElement(se.a.Content,null,r.a.createElement(se.a.Header,{as:"a"},s),r.a.createElement(se.a.Description,null,e.formatCount(l.count))))})).slice(0,5)},e}return Object(o.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(p.a)({},this.state,{channel:e.currentChannel}))}},{key:"render",value:function(){var e=this.state,t=e.activeIndex,a=e.channel,n=this.props.userPosts;return r.a.createElement(f.a,{style:{height:"100vh"}},r.a.createElement(E.a,{as:"h3",attached:"top"},"About # ",a&&a.name),r.a.createElement(le.a,{styled:!0,attached:"true"},r.a.createElement(le.a.Title,{active:0===t,index:0,onClick:this.setActiveIndex},r.a.createElement(C.a,{name:"dropdown"}),r.a.createElement(C.a,{name:"info"}),"Channel Details"),r.a.createElement(le.a.Content,{active:0===t},a&&a.details),r.a.createElement(le.a.Title,{active:1===t,index:1,onClick:this.setActiveIndex},r.a.createElement(C.a,{name:"dropdown"}),r.a.createElement(C.a,{name:"user circle"}),"Top Posters"),r.a.createElement(le.a.Content,{active:1===t},r.a.createElement(se.a,null,n&&this.displayTopPosters(n))),r.a.createElement(le.a.Title,{active:2===t,index:2,onClick:this.setActiveIndex},r.a.createElement(C.a,{name:"dropdown"}),r.a.createElement(C.a,{name:"pencil alternate"}),"Created By"),r.a.createElement(le.a.Content,{active:2===t},r.a.createElement(E.a,{as:"h3"},r.a.createElement(_.a,{circular:!0,src:a&&a.createdBy.avatar}),a&&a.createdBy.name))))}}]),a}(r.a.Component),oe=Object(O.b)((function(e){return console.log(e),{currentChannel:e.channel.currentChannel}}),{})(ce);var ie=Object(O.b)((function(e){return{isPrivateChannel:e.channel.isPrivateChannel,currentUser:e.currentUser}}))((function(e){return r.a.createElement(d.a,{columns:"equal",className:"app",style:{background:"#eee"}},r.a.createElement(re,{currentUser:e.currentUser}),r.a.createElement(d.a.Column,{style:{marginLeft:320}},r.a.createElement(z,{isPrivateChannel:e.isPrivateChannel})),r.a.createElement(d.a.Column,{width:4},r.a.createElement(oe,null)))})),ue=a(476),he=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",errors:[],loading:!1,usersRef:U.database().ref("users")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({errors:[],loading:!0}),e.isFormValid(e.state)&&U.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then((function(t){e.setState({loading:!1})})).catch((function(t){console.log(t),e.setState({errors:e.state.errors.concat(t),loading:!1})}))},e.isFormValid=function(e){var t=e.email,a=e.password;return t&&a},e.saveUser=function(t){return e.state.usersRef.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.showErrors=function(){return e.state.errors.map((function(e,t){return r.a.createElement("p",{key:t},e.message)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.loading;return r.a.createElement(d.a,{textAlign:"center",verticalAlign:"middle",className:"app"},r.a.createElement(d.a.Column,{style:{maxWidth:"450px"}},r.a.createElement(E.a,{as:"h4",icon:!0,color:"blue",textAlign:"center"},r.a.createElement(C.a,{name:"code branch",color:"violet"}," ",r.a.createElement("br",null),"Login for Klack")),this.state.errors.length>0&&r.a.createElement(ue.a,{color:"red"},r.a.createElement("h4",null,"Errors"),this.showErrors()),r.a.createElement($.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(f.a,{stacked:!0},r.a.createElement($.a.Input,{fluid:!0,name:"email",value:t,icon:"envelope",iconPosition:"left",placeholder:"Email",type:"email",onChange:this.handleChange}),r.a.createElement($.a.Input,{fluid:!0,value:a,name:"password",icon:"key",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handleChange}),r.a.createElement(y.a,{disabled:n,className:n?"loading":"",color:"violet",fluid:!0,size:"large"},"Submit"))),r.a.createElement(ue.a,null,"New User? ",r.a.createElement(h.b,{to:"/register"},"Register Here"))))}}]),a}(r.a.Component),me=a(258),de=a.n(me),pe=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={username:"",email:"",password:"",passwordConfirmation:"",errors:[],loading:!1,usersRef:U.database().ref("users")},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.setState({errors:[],loading:!0}),e.isFormValid()&&U.auth().createUserWithEmailAndPassword(e.state.email,e.state.password).then((function(t){t.user.updateProfile({displayName:e.state.username,photoURL:"http://gravatar.com/avatar/".concat(de()(t.user.email),"?d=identicon")}).then((function(){e.saveUser(t).then((function(){console.log("user saved"),e.setState({loading:!1})}))})).catch((function(e){return console.log(e)}))})).catch((function(t){e.setState({errors:e.state.errors.concat(t),loading:!1}),console.log(t)}))},e.saveUser=function(t){return e.state.usersRef.child(t.user.uid).set({name:t.user.displayName,avatar:t.user.photoURL})},e.isFormValid=function(){if(e.isFormEmpty(e.state))e.setState({errors:e.state.errors.concat({message:"Please fillout all fields"})});else if(e.isPasswordValid(e.state.password,e.state.passwordConfirmation))return!0},e.isFormEmpty=function(e){var t=e.email,a=e.username,n=e.password,r=e.passwordConfirmation;return!n.length||!r.length||!a.length||!t.length},e.isPasswordValid=function(t,a){return t.length<6?(e.setState({errors:e.state.errors.concat({message:"Password must be 6 characters long"})}),!1):t===a||(e.setState({errors:e.state.errors.concat({message:"Passwords donot match"})}),!1)},e.showErrors=function(){return e.state.errors.map((function(e,t){return r.a.createElement("p",{key:t},e.message)}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,s=e.passwordConfirmation,l=e.loading;return r.a.createElement(d.a,{textAlign:"center",verticalAlign:"middle",className:"app"},r.a.createElement(d.a.Column,{style:{maxWidth:"450px"}},r.a.createElement(E.a,{as:"h4",icon:!0,color:"blue",textAlign:"center"},r.a.createElement(C.a,{name:"comment outline",color:"blue"}," ",r.a.createElement("br",null),"Register for Klack")),this.state.errors.length>0&&r.a.createElement(ue.a,{color:"red"},r.a.createElement("h4",null,"Errors"),this.showErrors()),r.a.createElement($.a,{size:"large",onSubmit:this.handleSubmit},r.a.createElement(f.a,{stacked:!0},r.a.createElement($.a.Input,{fluid:!0,name:"username",value:t,icon:"user",iconPosition:"left",placeholder:"Username",type:"text",onChange:this.handleChange}),r.a.createElement($.a.Input,{fluid:!0,name:"email",value:a,icon:"envelope",iconPosition:"left",placeholder:"Email",type:"text",onChange:this.handleChange}),r.a.createElement($.a.Input,{fluid:!0,value:n,name:"password",icon:"key",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handleChange}),r.a.createElement($.a.Input,{fluid:!0,value:s,name:"passwordConfirmation",icon:"repeat",iconPosition:"left",placeholder:"Password",type:"password",onChange:this.handleChange}),r.a.createElement(y.a,{disabled:l,className:l?"loading":"",color:"blue",fluid:!0,size:"large"},"Submit"))),r.a.createElement(ue.a,null,"Already A User ? ",r.a.createElement(h.b,{to:"/login"},"Login Here"))))}}]),a}(r.a.Component),fe=(a(454),a(65)),ge=a(259),ve={currentUser:null,isLoading:!0},Ee={currentChannel:null,isPrivateChannel:!1},Ce=Object(fe.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return{currentUser:t.payload.currentUser,isLoading:!1};case"CLEAR_USER":return Object(p.a)({},ve,{isLoading:!1});case"SET_PRIVATE_CHANNEL":return Object(p.a)({},Ee,{isPrivateChannel:t.payload.isPrivateChannel});default:return e}},channel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CHANNEL":return Object(p.a)({},e,{currentChannel:t.payload.currentChannel});default:return e}}}),be=a(480),ye=a(469);function Oe(){return r.a.createElement(be.a,{active:!0},r.a.createElement(ye.a,{size:"huge",content:"Preparing Chat..."}))}var je=Object(fe.createStore)(Ce,Object(ge.composeWithDevTools)()),Se=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;U.auth().onAuthStateChanged((function(t){t?(e.props.setUser(t),e.props.history.push("/")):(e.props.clearUser(),e.props.history.push("/login"))}))}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement(Oe,null):r.a.createElement(h.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:ie}),r.a.createElement(m.a,{path:"/login",exact:!0,component:he}),r.a.createElement(m.a,{path:"/register",exact:!0,component:pe})))}}]),a}(r.a.Component),ke=Object(m.f)(Object(O.b)((function(e){return{isLoading:e.user.isLoading}}),{setUser:function(e){return{type:"SET_USER",payload:{currentUser:e}}},clearUser:function(){return{type:"CLEAR_USER"}}})(Se)),we=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{store:je},r.a.createElement(h.a,null,r.a.createElement(ke,null)))}}]),a}(r.a.Component);l.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[271,1,2]]]);
//# sourceMappingURL=main.eb1cd3b3.chunk.js.map