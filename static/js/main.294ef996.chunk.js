(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),o=n(4),c=n.n(o),i=(n(13),n(2)),r=n(5),h=n(6),d=n(8),k=n(7),u=n(0),l=function(e){return Object(u.jsx)("div",{children:e.snakeDots.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(u.jsx)("div",{className:"snake-dot",style:n},t)}))})},f=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return Object(u.jsx)("div",{className:"snake-food",style:t})},v=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},j={food:v(),direction:"RIGHT",speed:100,snakeDots:[[0,0],[2,0]]},p=function(e){Object(d.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state=j,e.onkeydown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(i.a)(e.state.snakeDots),n=t[t.length-1];switch(e.state.direction){case"RIGHT":n=[n[0]+2,n[1]];break;case"LEFT":n=[n[0]-2,n[1]];break;case"DOWN":n=[n[0],n[1]+2];break;case"UP":n=[n[0],n[1]-2]}t.push(n),t.shift(),e.setState({snakeDots:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onkeydown}},{key:"componentDidUpdate",value:function(){this.checkIfoutBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfoutBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(i.a)(this.state.snakeDots),n=t[t.length-1];t.pop(),t.forEach((function(t){n[0]==t[0]&&n[1]==t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]==t[0]&&e[1]==t[1]&&(this.setState({food:v()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(i.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over . Score is ".concat(this.state.snakeDots.length)),this.setState(j)}},{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Snake Game!"}),Object(u.jsxs)("h5",{children:["Score=",this.state.snakeDots.length-2]}),Object(u.jsxs)("div",{className:"game-area",id:"game",children:[Object(u.jsx)(l,{snakeDots:this.state.snakeDots}),Object(u.jsx)(f,{dot:this.state.food})]})]})}}]),n}(s.Component),b=p,O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),o(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.294ef996.chunk.js.map