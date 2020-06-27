(this["webpackJsonpbrain-training"]=this["webpackJsonpbrain-training"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=(n(13),n(1)),l=n(2),u=n(5),s=n(4),m=n(3),d=[1,2,3,4,5,6,7,8,9,"del",0,"ok"],f=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).submit=function(){a.props.confirm(a.state.input),a.setState({input:""})},a.handleKeyDown=function(t){"Enter"===t.key&&a.submit()},a.handleChange=function(t){a.state.input.length>=5?a.setState({input:t.target.value[5]}):a.setState({input:t.target.value})},a.state={input:"",touchable:"ontouchstart"in window},a.submit=a.submit.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"delete",value:function(){this.setState({input:this.state.input.slice(0,-1)})}},{key:"componentDidUpdate",value:function(t){var e=this.props.value;if(t.value!==e){var n=e.replace(/-(.*)/g,"");n&&("del"===n?this.delete():"ok"===n?this.submit():this.state.input.length>=5?this.setState({input:n}):this.setState({input:this.state.input+n}))}}},{key:"render",value:function(){var t=this.state.input;return this.state.touchable?i.a.createElement("input",{id:"input",className:"center",value:t,readOnly:!0,type:"number"}):i.a.createElement("input",{id:"input",className:"center",value:t,autoFocus:!0,onKeyDown:this.handleKeyDown,onChange:this.handleChange,type:"number"})}}]),n}(i.a.Component),h=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleClick=function(t){a.props.click(t)},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"keys",className:"flex center"},d.map((function(e){return i.a.createElement("button",{key:e,onClick:function(){t.handleClick(e)}},i.a.createElement("span",null,e))})))}}]),n}(i.a.Component),p=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleClick=function(t){a.setState({input:t})},a.state={input:""},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.input;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{value:"".concat(t).concat("ok"===t?"":"- ".concat(performance.now())),confirm:this.props.confirm}),i.a.createElement(h,{click:this.handleClick}))}}]),n}(i.a.Component),v=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t)).generateQuestion=function(t){var e,n;!function i(){e=a.randomNumber(),n=a.randomNumber(),e*n===+t?i():a.setState({first:e,second:n})}()};var i=a.props.questionDifficulty;return a.state={index:0,min:i[0],max:i[1],first:a.randomNumber(),second:a.randomNumber(),start:(new Date).getTime()},a}return Object(l.a)(n,[{key:"randomNumber",value:function(){var t=this.props.questionDifficulty;return Math.round(Math.random()*(t[0]-t[1]))+t[1]}},{key:"componentDidUpdate",value:function(t){var e=this.props.value,n=this.state.index;t.value!==e&&e&&(this.state.first*this.state.second===+e?n===this.props.questionLength-1?this.props.done(((new Date).getTime()-this.state.start)/1e3):(this.setState({index:n+1}),this.generateQuestion(e)):this.props.wrong())}},{key:"render",value:function(){return i.a.createElement("div",{id:"question"},"".concat(this.state.first," * ").concat(this.state.second," = ?"))}}]),n}(i.a.Component),b=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).confirm=function(t){a.setState({answer:t})},a.setDifficulty=function(t,e,n){a.setState({difficulty:[t,e],difficultyString:n})},a.setCount=function(t){a.setState({count:t},a.generateQuestions)},a.done=function(t){a.setState({done:!0,doneTime:t})},a.restart=function(){a.setState({difficulty:void 0,difficultyString:"",count:void 0,done:!1,wrong:0})},a.state={difficulty:void 0,difficultyString:"",count:void 0,done:!1,wrong:0},a.confirm=a.confirm.bind(Object(u.a)(a)),a.done=a.done.bind(Object(u.a)(a)),a.wrong=a.wrong.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"wrong",value:function(){this.setState({wrong:this.state.wrong+1})}},{key:"render",value:function(){var t=this,e=this.state,n=e.done,a=e.doneTime,r=e.difficulty,c=e.difficultyString,o=e.count,l=e.answer,u=e.wrong;return n?i.a.createElement("div",{id:"result"},i.a.createElement("h1",null,"\ub05d\ub0ac\uc2b5\ub2c8\ub2e4!"),i.a.createElement("div",{className:"result"},"\ubaa8\ub4e0 \ubb38\uc81c\ub97c \ud478\ub294\ub370 ",a,"\ucd08\uac00 \uac78\ub9ac\uc168\ub124\uc694."),i.a.createElement("div",{className:"small"},i.a.createElement("span",null,"\ub09c\uc774\ub3c4 : ",i.a.createElement("span",null,c)),i.a.createElement("span",null,"\uc624\ub2f5 : ",i.a.createElement("span",null,u," \ud68c")),i.a.createElement("span",null,"\ubb38\uc81c : ",i.a.createElement("span",null,o," \uac1c")),i.a.createElement("span",null,"\ubb38\uc81c\ub2f9 :"," ",i.a.createElement("span",null,(a/o).toFixed(2)," \ucd08"))),i.a.createElement("div",null,i.a.createElement("button",{className:"button",onClick:this.restart},"\ub2e4\uc2dc \uc2dc\uc791"))):r&&o?i.a.createElement(i.a.Fragment,null,i.a.createElement(v,{questionDifficulty:r,questionLength:o,wrong:this.wrong,done:this.done,value:l}),i.a.createElement(p,{confirm:this.confirm})):r?i.a.createElement("ul",{id:"select"},i.a.createElement("li",{onClick:function(){return t.setCount(10)}},"10 \ubb38\uc81c"),i.a.createElement("li",{onClick:function(){return t.setCount(20)}},"20 \ubb38\uc81c"),i.a.createElement("li",{onClick:function(){return t.setCount(50)}},"50 \ubb38\uc81c"),i.a.createElement("li",{onClick:function(){return t.setCount(100)}},"100 \ubb38\uc81c")):i.a.createElement("ul",{id:"select"},i.a.createElement("li",{onClick:function(){return t.setDifficulty(2,10,"\uc26c\uc6c0")}},"\uc26c\uc6c0 (2 ~ 10)"),i.a.createElement("li",{onClick:function(){return t.setDifficulty(2,15,"\ubcf4\ud1b5")}},"\ubcf4\ud1b5 (2 ~ 15)"),i.a.createElement("li",{onClick:function(){return t.setDifficulty(2,20,"\uc5b4\ub824\uc6c0")}},"\uc5b4\ub824\uc6c0 (2 ~ 20)"),i.a.createElement("li",{onClick:function(){return t.setDifficulty(11,20,"\uc544\uc8fc \uc5b4\ub824\uc6c0")}},"\uc544\uc8fc \uc5b4\ub824\uc6c0 (11 ~ 20)"))}}]),n}(i.a.Component),k=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).toggleTheme=function(){var t=a.state.dark,e=document.documentElement;t?a.setState({dark:!1},e.classList.remove("dark"),localStorage.setItem("dark","false")):a.setState({dark:!0},e.classList.add("dark"),localStorage.setItem("dark","true"))},a.state={dark:window.darkTheme},a}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.dark;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{id:"darkThemeButton",onClick:this.toggleTheme},i.a.createElement("span",{role:"img","aria-label":t?"\ubc1d\uc740 \ubaa8\ub4dc":"\uc5b4\ub450\uc6b4 \ubaa8\ub4dc"},t?"\u2600\ufe0f":"\ud83c\udf19")))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null),i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f5f4c0ac.chunk.js.map