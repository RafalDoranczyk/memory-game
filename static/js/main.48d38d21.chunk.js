(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,n,t){e.exports=t(55)},55:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(5),i=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(24),l=t(6),c=t(7),d=t(9),u=t(8),m=t(10),f=t(1),h=t(2);function p(){var e=Object(f.a)(["\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Montserrat', sans-serif;\n    overflow: hidden;\n}"]);return p=function(){return e},e}var b=Object(h.a)(p()),g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),e.children)};function v(){var e=Object(f.a)(["\nposition: absolute;\ntop: 85vh;\nleft: 50%;\ntransform: translateX(-50%);\npadding: 15px 25px;\nopacity: ",";\ntransition: opacity .4s;\nborder-radius: 100px;\nbackground-color: #059BE5;\nfont-size: 20px;\ncolor: #fff;\nfont-weight: 900;\nborder: none;\ncursor: pointer;\n"]);return v=function(){return e},e}var y=h.b.button(v(),function(e){return e.isGameReady?"1":".1"}),w=function(e){var n=e.startGame,t=e.isGameReady;return r.a.createElement(y,{disabled:!t,isGameReady:t,onClick:n},"Start Game!")};function R(){var e=Object(f.a)(["\nwidth: 80%;\nflex-basis: 70%;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-around;\ntext-align: justify;\nfont-size: 16px;\nletter-spacing: 1px;\n\nh1{\n    font-size: 22px;\n    text-align: center;\n}\np{\n   color: #ddd;\n}\n"]);return R=function(){return e},e}var x=h.b.div(R()),E=function(e){return r.a.createElement(x,null,r.a.createElement("h1",null,"Memory Game!"),r.a.createElement("p",null,"The game is simple - you have 9 pairs of colors to find as fast as you can. You will have 1 second to remember colors position. Start the game and let the timer begin! Compare your result with others!"))};function G(){var e=Object(f.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 100%;\nwidth: 100%;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-around;\nalign-items: center;\ntransform:",";\n    transition:  transform .4s;\nbackground-color: #222;\ncolor: #FFA611;\n"]);return G=function(){return e},e}var k=h.b.div(G(),function(e){if(!e.isStartGameWindowActive)return"translateX(-100%)"}),j=function(e){var n=e.startGame,t=e.time,a=e.isGameReady,o=e.isStartGameWindowActive;return r.a.createElement(k,{isStartGameWindowActive:o},r.a.createElement(E,null),r.a.createElement(w,{isGameReady:a,startGame:n,time:t}))};function S(){var e=Object(f.a)(["\n    flex-basis: 15%;\n    flex-grow: 1;\n    height: 33.33vh;\n    box-shadow: 0 0 1px 1px #D3D3D3;\n\n@media(orientation: portrait){\n        height: 16.66vh;\n        flex-basis: 33.30%;\n}\n"]);return S=function(){return e},e}var B=h.b.div(S()),O=function(e){var n=e.isDone,t=e.boardColor,a=e.clickBoard,o={backgroundColor:n?t:"#484848"};return r.a.createElement(B,{style:o,onClick:a})};function D(){var e=Object(f.a)(["\nheight: 100vh;\ndisplay: flex;\nflex-flow: row wrap;\n"]);return D=function(){return e},e}var C=h.b.div(D()),A=function(e){var n=e.renderedBoards.map(function(n){return r.a.createElement(O,{key:n.id,boardColor:n.color,isDone:n.isDone,clickBoard:function(t){return e.clickBoard(t,n.id)}})});return r.a.createElement(C,null,n)},H=function(e){var n=e.time,t=e.name;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,n))};function F(){var e=Object(f.a)(["\nheight: 80%;\nwidth: 90%;\nmargin: 10px auto 0 auto;\nbackground-color: #FFDC00;\ncolor: #111;\ntr{\n    background-color: #FF4136;\n}\ntd{\n    color: #000;\n}\n"]);return F=function(){return e},e}function W(){var e=Object(f.a)(["\nposition: absolute;\ntop: 5%;\nleft: ",";\ntransition: .4s;\nheight: 100%;\nwidth: 100%;\n/* background-color: red; */\nfont-size: 15px;\n"]);return W=function(){return e},e}var z=h.b.div(W(),function(e){return e.fetchedResults.length>0?"0":"-110%"}),I=h.b.table(F()),M=function(e){var n=e.fetchedResults,t=n.map(function(e,n){return r.a.createElement(H,{time:e.time,name:e.name,key:n})});return r.a.createElement(z,{fetchedResults:n},r.a.createElement("h3",null,"Top 10 Best results"),r.a.createElement(I,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Time"))),r.a.createElement("tbody",null,t)))};function P(){var e=Object(f.a)(["\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n  border-top: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-right: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);\n  border-left: 1.1em solid #ffffff;\n  animation: load8 1.1s infinite linear;\n/* &:after {\n  border-radius: 50%;\n  width: 5rem;\n  height: 5rem;\n} */\n@-webkit-keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n"]);return P=function(){return e},e}var T=h.b.div(P());function Y(){var e=Object(f.a)(["\nposition: absolute;\ntop: 50%;\ntransform: translate(-50%,-50%);\n"]);return Y=function(){return e},e}function N(){var e=Object(f.a)(["\nposition: absolute;\ntop: 40%;\nleft: ",";\nwidth: 90%;\nfont-size: 22px;\ntransform: translate(-50%,-50%);\ntransition: .9s;\n\nspan{\n    display: block;\n    width: 100%;\n    color: gold;\n    margin-top: 5px;\n    font-size: 16px;\n}\n    "]);return N=function(){return e},e}function J(){var e=Object(f.a)(["\nposition: absolute;\ntop: 0;\nleft: 2%;\nright: 2%;\nbottom: 80vh;\ndisplay: flex;\nflex-flow: column nowrap;\nalign-items: center;\ntext-align: center;\n"]);return J=function(){return e},e}var X=h.b.div(J()),q=h.b.h1(N(),function(e){return e.isSended?"200%":"50%"}),U=Object(h.b)(T)(Y()),$=function(e){var n=e.fetchedResults,t=e.isSended,a=e.time;return r.a.createElement(X,{fetchedResults:n},r.a.createElement(M,{fetchedResults:n}),r.a.createElement(q,{isSended:t},"Well done! Your time is: ",r.a.createElement("span",null,a," seconds! ")),t&&0===n.length?r.a.createElement(U,null):null)};function K(){var e=Object(f.a)(["\nposition: absolute;\ntop: 51vh;\nleft: 5%;\nheight: 25vh;\nwidth: 90%;\ndisplay: flex;\njustify-content: space-around;\nalign-items: center;\nopacity: ",";\nz-index: ",";\ntransition: .5s;\nbackground-color: #333;\nborder: 1px solid gold;\nborder-radius: 15px;\nh3{\n   padding: 5%;\n}\nspan{\n    /* margin-top: 80px; */\n    display: block;\n    width: 100%;\n}\n\n"]);return K=function(){return e},e}var L=h.b.div(K(),function(e){return e.fetchedResults.length>0?"1":"0"},function(e){return e.fetchedResults.length>0?"1":"-1"}),Q=function(e){var n=e.fetchedResults,t=e.playerPosition,a=1===t?a="Wooohoo! You're the best here!":t>1&&t<5?a="Good job!":t>=5&&t<=10?a="You have your name on the board! It's quite good, isn't it?":t>10?a="Man...Stop afking, start playing.":t>15?a="Only WolnyWiesiek is worse than you...":void 0;return r.a.createElement(L,{fetchedResults:n},r.a.createElement("h3",null,"Your position: ",t,r.a.createElement("span",null," ",a)))};function V(){var e=Object(f.a)(["\nposition: absolute;\ntop: 37.5vh;\nleft: ",";\n    transition: .4s;\nwidth: 90%;\nheight: 25vh;\ndisplay: flex;\nflex-flow: column nowrap;\njustify-content: space-around;\nalign-items: center;\nfont-size: 18px;\nbackground-color: #333;\nbox-shadow: 0 0 25px 0 #F6820D;\nborder-radius: 20px;\ntext-align: center;\n\ninput{\n    margin-top: 10px;\n    padding: 5px;\n    width: 80%;\n    text-align: center;\n}\n\nbutton{\n    background-color: #FFCB2B;\n    border: none;\n    padding: 10px;\n    border-radius: 50px;\n    font-weight: 900;\n    color: #222;\n}\n"]);return V=function(){return e},e}var Z=h.b.form(V(),function(e){return e.isSended?"140%":"5%"}),_=function(e){var n=e.playerPosition,t=e.fetchedResults,a=e.postAndGetResults,o=e.isSended,i=e.name,s=e.changeName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{fetchedResults:t,onSubmit:a,isSended:o},r.a.createElement("label",{htmlFor:"name"},"Enter your name",r.a.createElement("input",{placeholder:"Your name here",type:"text",id:"name",value:i,onChange:s})),r.a.createElement("button",{disabled:!!o},"Send your result!")),r.a.createElement(Q,{playerPosition:n,fetchedResults:t}))},ee=t(4),ne=t.n(ee);function te(){var e=Object(f.a)(["\n\n"]);return te=function(){return e},e}function ae(){var e=Object(f.a)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nheight: 100%;\nwidth: 100%; \ntransform:  ",";\nbackground-color: #222;\ncolor: #fff;\ntransition: transform .5s;\nfont-size: 12px;\n\n"]);return ae=function(){return e},e}var re=h.b.div(ae(),function(e){var n=e.isGameRunning,t=e.time;return!n&&t>0?"translateY(0)":"translateY(-100%)"}),oe=Object(h.b)(y)(te()),ie="https://colors-results.firebaseio.com/.json",se=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={name:"",fetchedResults:[],isSended:!1,playerPosition:""},t.changeNameHandler=function(e){e.preventDefault(),t.setState({name:e.target.value})},t.postAndGetResultsHandler=function(e){var n=t.state.name,a={name:n,time:t.props.time};e.preventDefault(),n?(t.setState({isSended:!0}),ne.a.post(ie,a).then(function(e){ne.a.get(ie).then(function(e){var n=Object.values(e.data),a=[];n.map(function(e){return a.push(e.time)});var r=1+a.sort(function(e,n){return e-n}).findIndex(function(e){return e===t.props.time});n.sort(function(e,n){var t=e.time,a=n.time,r=0;return t>a?r=1:t<a&&(r=-1),r}),n=n.splice(0,10),t.setState({fetchedResults:n,playerPosition:r})})})):alert("Enter your name!")},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.isSended,a=e.fetchedResults,o=e.playerPosition,i=this.props,s=i.time,l=i.isGameRunning;return r.a.createElement(re,{isGameRunning:l,time:s},r.a.createElement($,{fetchedResults:a,time:s,isSended:t}),r.a.createElement(_,{fetchedResults:a,isSended:t,changeName:this.changeNameHandler,name:n,postAndGetResults:this.postAndGetResultsHandler,playerPosition:o}),r.a.createElement(oe,{isGameReady:this.props.isGameReady,onClick:this.props.startGame,fetchedResults:a},"Play Again!"))}}]),n}(a.Component),le=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={allColors:[],renderedBoards:[],isGameReady:!1,isGameRunning:!1,clickedBoards:[],wait:!1,time:4,boardsDone:[],isStartGameWindowActive:!0},t.createRenderedBoardsHandler=function(){console.log("jestem");for(var e=Object(s.a)(t.state.allColors),n=[],a=0;a<t.state.allColors.length;a++){var r=Math.floor(Math.random()*e.length);n.push(e[r]),e.splice(r,1)}for(var o=t.state.renderedBoards,i=n.splice(0,9),l=i.concat(i),c=0;c<18;c++){var d=Math.floor(Math.random()*l.length);o[c]={id:c,color:l[d],isDone:!0},l.splice(d,1)}t.setState({renderedBoards:o,isGameReady:!0})},t.startGameHandler=function(){t.showBoardsForASecondHandler(),t.countTimeHandler(),t.setState({isGameRunning:!0,isStartGameWindowActive:!1,isGameReady:!1})},t.showBoardsForASecondHandler=function(){var e=t.state.renderedBoards;setTimeout(function(){e.forEach(function(e){return e.isDone=!1}),t.setState({renderedBoards:e})},1400)},t.countTimeHandler=function(){var e=0;t.timeID=setInterval(function(){e++,t.setState({time:e})},1e3)},t.clickOnBoardHandler=function(e,n){var a=t.state,r=a.renderedBoards,o=a.clickedBoards,i=r.findIndex(function(e){return e.id===n});r[i].isDone||t.state.wait||(r[i].isDone=!0,o.push(r[i]),t.setState({renderedBoards:r,clickedBoards:o}))},t}return Object(m.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.state.allColors;ne.a.get("https://colors-a5386.firebaseio.com/.json").then(function(t){n=t.data,e.setState({allColors:n,isGameReady:!0}),e.createRenderedBoardsHandler()})}},{key:"componentDidUpdate",value:function(e,n){var t=this,a=this.state,r=a.clickedBoards,o=a.renderedBoards,i=a.boardsDone,s=a.isGameReady,l=a.isGameRunning;console.log(s),18===i.length&&!0===n.isGameRunning&&(clearInterval(this.timeID),this.setState({isGameReady:!1,isGameRunning:!1,boardsDone:[]}),n.isGameReady||setTimeout(function(){t.createRenderedBoardsHandler()},2e3)),l&&2===this.state.clickedBoards.length&&(r[0].color!==r[1].color?(this.setState({wait:!0}),setTimeout(function(){o[r[0].id].isDone=!1,o[r[1].id].isDone=!1,t.setState({renderedBoards:o,wait:!1})},350)):(i.push(r[0].id),i.push(r[1].id)),this.setState({clickedBoards:[],boardsDone:i}))}},{key:"render",value:function(){var e=this.state,n=e.renderedBoards,t=e.time,a=e.isGameRunning,o=e.isGameReady,i=e.isStartGameWindowActive;return r.a.createElement(g,null,r.a.createElement(j,{isGameRunning:a,startGame:this.startGameHandler,time:t,isGameReady:o,isStartGameWindowActive:i}),r.a.createElement(A,{clickBoard:this.clickOnBoardHandler,renderedBoards:n,giveColors:this.giveRandomColorsHandler}),r.a.createElement(se,{isGameReady:o,isGameRunning:a,time:t,startGame:this.startGameHandler}))}}]),n}(a.Component);i.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.48d38d21.chunk.js.map