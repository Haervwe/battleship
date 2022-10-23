(()=>{var e={192:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var a=r(81),n=r.n(a),i=r(645),o=r.n(i),s=r(667),l=r.n(s),d=new URL(r(24),r.b),p=new URL(r(238),r.b),c=new URL(r(122),r.b),h=new URL(r(502),r.b),u=new URL(r(568),r.b),y=o()(n()),m=l()(d),f=l()(p),g=l()(c),b=l()(h),x=l()(u);y.push([e.id,'@font-face{font-family:"font";src:url('+m+');font-weight:1500;font-style:bold}@font-face{font-family:"disarmer";src:url('+f+');font-weight:1000;font-style:bold}@font-face{font-family:"ships";src:url('+g+');font-weight:1000;font-style:bold}*{box-sizing:border-box}body{margin:0px;padding:0px;height:100vh;width:100vw;overflow:hidden}button{border-radius:5px;font-size:0.65rem;font-family:"disarmer";border-color:#c3c3c3;background:conic-gradient(#e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab);text-shadow:-1px -1px 5px #fff;transition:all 200ms ease-in-out}button:hover{transform:scale(1.05);box-shadow:5px 5px 15px #000}#main{display:grid;height:100vh;width:100vw;justify-content:center;align-items:center;grid-template-columns:1fr;grid-template-rows:1fr 10fr 1fr;background-image:url('+b+')}#header{grid-row:1/ 2;display:flex;align-items:center;justify-content:center;font-family:"font";font-size:1.5em;width:100%;height:100%;background-image:url('+x+');background-position:bottom}#header h1{text-align:center;margin:0px;text-shadow:-1px -1px 5px #fff}#winnerDiv{display:flex;flex-direction:column;justify-content:center;align-items:center}#winnerDiv #winner{border:2px solid #abaeb300;border-radius:5px;padding:15px;margin:15px;font-size:0.65rem;font-family:"disarmer";border-color:#c3c3c3;background:conic-gradient(#e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab);text-shadow:-1px -1px 5px #fff;transition:all 200ms ease-in-out}#footer{grid-row:3/ -1;font-size:1.3rem;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-image:url('+x+'),linear-gradient(to bottom, #adb2b6, rgba(171,174,179,0));font-family:"font"}#footer h3{text-align:center;margin:0px;text-shadow:-1px -1px 5px #fff}#gameTypeSelector{display:flex;height:3rem;align-items:center;justify-content:center}#gameTypeSelector button{margin:25px;height:100%;font-size:1.3rem;width:8rem}#playerNames{display:grid;grid-template-columns:1fr;grid-auto-rows:1fr;gap:10px;justify-items:center}#playerNames label{font-family:"font";background:conic-gradient(#e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab);margin:5px;font-size:1.2fr;padding:5px;border-radius:3px}#playerNames input{margin:5px;padding:5px;background-color:#c3c3c3b0}#playerNames button{font-size:1.5em;width:7rem;justify-self:center}#gameContainer{display:grid;height:100%;width:100%;grid-template-columns:1fr 1fr;grid-template-rows:10fr 1fr;gap:20px;padding:20px}#gameContainer #player1Contaier{grid-row:1/2;grid-column:1/2}#gameContainer #player2Contaier{grid-row:1/2;grid-column:2/3}#gameContainer .playerContainer{height:100%;width:100%;display:grid;gap:20px}#gameContainer .playerContainer .dock{border:3px solid black;border-radius:15px;overflow:none;display:grid;justify-items:center;align-content:center;grid-template-rows:1fr 1fr 1fr 1fr 1fr}#gameContainer .playerContainer .dock .dockedShip{border:3px solid black;border-radius:15px;margin:10px;display:grid;width:90%;font-family:"ships";justify-items:center;align-content:center;overflow:hidden;background:conic-gradient(#e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab, #e6e9bf, #d2b5aa, #cbaea3, #d4b5ab);transition:all 200ms ease-in-out}#gameContainer .playerContainer .dock .dockedShip:hover{transform:scale(1.05);box-shadow:2px 2px 8px #000}#gameContainer .playerContainer .playerBoard{display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr);border:2px solid black;border-radius:15px;overflow:hidden}#gameContainer .playerContainer .playerBoard .square{border:1px solid black;transition:all 200ms ease-in-out}#gameContainer .playerContainer .playerBoard .ship{background-color:rgba(0,0,0,0.74)}#gameContainer .playerContainer .playerBoard .water{background-color:rgba(97,97,97,0.712)}#gameContainer .playerContainer .playerBoard .hitShip{background-color:rgba(255,0,0,0.548)}#gameContainer .playerContainer .playerBoard .hitWater{background-color:rgba(127,197,255,0.726)}#gameContainer .playerContainer .playerBoard .hidden{background-color:rgba(133,133,133,0.329)}#gameContainer .playerContainer .playerBoard .hiddenHitWater{background-color:rgba(127,197,255,0.726)}#gameContainer .playerContainer .playerBoard .hiddenHitBoat{background-color:rgba(255,0,0,0.548)}#gameContainer #player1Container{grid-template-columns:1fr 5fr}#gameContainer #player1Container .playerBoard{grid-column:2/3;grid-row:1/2}#gameContainer #player1Container .dock{grid-column:1/2;grid-row:1/2}#gameContainer #player2Container{grid-template-columns:5fr 1fr}#gameContainer #player2Container .playerBoard{grid-column:1/2;grid-row:1/2}#gameContainer #player2Container .dock{grid-column:2/3;grid-row:1/2}#gameContainer #buttonContainer{grid-column:1/3;grid-row:2/3;display:flex;justify-content:center;justify-items:center}#gameContainer #buttonContainer #rotateShipButton{margin-left:10px;height:4rem;width:4rem;border-radius:100%}#gameContainer #buttonContainer #nextTurnButton{margin-right:10px;height:4rem;width:4rem;border-radius:100%}\n',""]);const v=y},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",a=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),a&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),a&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,a,n,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);a&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),t.push(p))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,a=0;a<t.length;a++)if(t[a].identifier===e){r=a;break}return r}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],d=a.base?l[0]+a.base:l[0],p=i[d]||0,c="".concat(d," ").concat(p);i[d]=p+1;var h=r(c),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var y=n(u,a);a.byIndex=s,t.splice(s,0,{identifier:c,updater:y,references:1})}o.push(c)}return o}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var i=a(e=e||[],n=n||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=r(i[o]);t[s].references--}for(var l=a(e,n),d=0;d<i.length;d++){var p=r(i[d]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=l}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var a=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var a="";r.supports&&(a+="@supports (".concat(r.supports,") {")),r.media&&(a+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(a+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),a+=r.css,n&&(a+="}"),r.media&&(a+="}"),r.supports&&(a+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},101:(e,t,r)=>{r(497),e.exports=class{#e;#t;#r;#a;#n;#i;#o;constructor(e,t,r){this.#e=(()=>{let t=[];for(let r=0;r<e;r++){let r=[];for(let t=0;t<e;t++)r.push(0);t.push(r)}return t})(),this.#t=[],this.#r=t,this.#n=r,this.#i=[],this.#a=(()=>{let t=[];for(let r=0;r<e;r++)for(let a=0;a<e;a++)r%2==0&&a%2!=0&&t.push({x:r,y:a}),r%2!=0&&a%2==0&&t.push({x:r,y:a});return t})(),this.#o=(()=>{let t=[];for(let r=0;r<e;r++)for(let a=0;a<e;a++)t.push({x:r,y:a});return t})()}placeShips(){let e=["x","y"];for(let t=0;t<this.#r.board.boats.length;t++)for(;0==this.#r.board.boats[t].placed;){let r=Math.floor(Math.random()*this.#e.length),a=Math.floor(Math.random()*this.#e.length),n=Math.floor(2*Math.random());this.#r.board.placeShip(t,{x:r,y:a},e[n])}}newAttackVector(){if(console.log(this.#a),1==this.#r.board.isGameOver())return"gameOver";let e,t;if(0!=this.#a.length){let t=Math.floor(Math.random()*this.#a.length);if(t==this.#a.length&&(t-=1),e=(()=>{for(let e=0;e<this.#o.length;e++)if(this.#o[e].x==this.#a[t].x&&this.#o[e].y==this.#a[t].y)return e})(),null==e&&(e=Math.floor(Math.random()*this.#o.length),e==this.#o.length&&(e-=1),-1==e))return"error"}else if(e=Math.floor(Math.random()*this.#o.length),e==this.#o.length&&(e-=1),-1==e)return"error";if(console.log(e),0!=this.#i.length){if(this.#i[0].x<0||this.#i[0].x>=this.#e.length||this.#i[0].y<0||this.#i[0].y>=this.#e.length)return t={x:this.#o[e].x,y:this.#o[e].y},this.#o.splice(e,1),this.#i.shift(),t;{t=this.#i[0];let e=(()=>{for(let e=0;e<this.#o.length;e++)if(this.#o[e].x==t.x&&this.#o[e].y==t.y)return e})();return null==e?(this.#i.shift(),this.newAttackVector()):(this.#o.splice(e,1),this.#i.shift(),t)}}return t={x:this.#o[e].x,y:this.#o[e].y},this.#o.splice(e,1),t}play(){if(1==this.#r.board.isGameOver())return"gameOver";let e=this.newAttackVector(),t=0;return console.log(this.#t,this.#i,e),1==this.#n.board.grid[e.x][e.y]&&(t=1,0==this.#i.length&&void 0===this.#t[0]||0==this.#t[0].result?this.#i.push({x:e.x+1,y:e.y},{x:e.x-1,y:e.y},{x:e.x,y:e.y+1},{x:e.x,y:e.y-1}):1==this.#t[0].result&&(e.x>this.#t[0].x&&e.y==this.#t[0].y&&(this.#i.unshift({x:e.x+1,y:e.y}),this.#i.unshift({x:e.x-1,y:e.y})),e.x<this.#t[0].x&&e.y==this.#t[0].y&&(this.#i.unshift({x:e.x+1,y:e.y}),this.#i.unshift({x:e.x-1,y:e.y})),e.x==this.#t[0].x&&e.y>this.#t[0].y&&(this.#i.unshift({x:e.x,y:e.y-1}),this.#i.unshift({x:e.x,y:e.y+1})),e.x==this.#t[0].x&&e.y<this.#t[0].y&&(this.#i.unshift({x:e.x,y:e.y+1}),this.#i.unshift({x:e.x,y:e.y-1})))),this.#t.unshift({x:e.x,y:e.y,result:t}),e}}},427:(e,t,r)=>{let a=r(497);e.exports=class{#e;#s;#l;constructor(e,t){e<1||!Array.isArray(t)||(this.#e=(()=>{let t=[];for(let r=0;r<e;r++){let r=[];for(let t=0;t<e;t++)r.push(0);t.push(r)}return t})(),this.#s=(()=>{let e=[];return t.forEach(((t,r)=>{e.push({ship:new a(t),placed:!1})})),e})(),this.#l=[])}get grid(){return this.#e}get boats(){return this.#s}get positions(){return this.#l}allShipsPlaced(){let e=!0;return this.#s.forEach((t=>{0==t.placed&&(e=!1)})),e}placeShip(e,t,r){if(0!=this.#s[e].placed)return"Ship already placed";if("y"==r){let r=this.boats[e].ship;if(!(t.y+r.size-1<this.#e.length&&t.x>=0&&t.y>=0&&t.x<this.#e.length&&t.y<this.#e.length))return"boat outside the grid";for(let e=t.y;e<t.y+r.size;e++)if(1==this.#e[t.x][e])return"Can not overlap ships";for(let a=t.y;a<t.y+r.size;a++)this.#e[t.x][a]=1,this.#l.push({cords:{x:t.x,y:a},shipIndex:e,shipAtackVector:a-t.y});this.#s[e].placed=!0}if("x"==r){let r=this.boats[e].ship;if(t.x+r.size-1<10&&t.x>=0&&t.y>=0&&t.x<10&&t.y<10){for(let e=t.x;e<t.x+r.size;e++)if(1==this.#e[e][t.y])return"Can not overlap ships";for(let a=t.x;a<t.x+r.size;a++)this.#e[a][t.y]=1,this.#l.push({cords:{x:a,y:t.y},shipIndex:e,shipAtackVector:a-t.x});this.#s[e].placed=!0}}}recieveAttack(e,t){if(e<0||e>9||t<0||t>9)return"Atack out of range";if(2==this.#e[e][t]||3==this.#e[e][t])return"Attack already made";if(0!=this.#e[e][t])for(let r=0;r<this.#l.length;r++)e==this.#l[r].cords.x&&t==this.#l[r].cords.y&&(this.#e[e][t]=2,this.#s[this.#l[r].shipIndex].ship.shot(this.#l[r].shipAtackVector));else this.#e[e][t]=3}isGameOver(){let e=!0;return this.#s.forEach((t=>{1==t.ship.floats&&(e=!1)})),e}}},404:(e,t,r)=>{let a=r(507);e.exports=class{#d;#p;#c;#h;#u;#y;constructor(e,t,r=""){this.#d=e,this.#p=new a(""==t?"Player 1":t),this.#c=(()=>"ai"==this.type?new a("AI"):new a(""==t?"Player 2":r))(),this.#h=this.#p,this.#u=this.#c,this.#y=null}get type(){return this.#d}get player1(){return this.#p}get player2(){return this.#c}get currentPlayer(){return this.#h}get player1name(){return this.#p.name}get player2name(){return this.#c.name}get winner(){return this.#y}nextPlayer(){this.#h==this.#p?this.#h=this.#c:this.#h=this.#p}turn(e=0,t=0){if(0==this.#p.board.allShipsPlaced()||0==this.#c.board.allShipsPlaced())return"All ships must been placed before an attack";if(null!=this.#y)return"game already finished";let r=this.#u.board.recieveAttack(e,t);if(null!=r)return r;if(1==this.#u.board.isGameOver())return this.#y=`${this.#h.name} WINS`,!0;let a=this.#h;this.#h=this.#u,this.#u=a}}},507:(e,t,r)=>{let a=r(427);const n=r(844);e.exports=class{#m;constructor(e){this.#m=e,this.board=new a(n.size,n.ships)}get name(){return this.#m}}},844:e=>{e.exports={size:10,ships:[5,4,3,3,2]}},497:e=>{e.exports=class{#f;#g;#b;constructor(e){e<1||(this.#f=e,this.#g=(()=>{let t=[];for(let r=0;r<e;r++)t.push(1);return t})(),this.#b=!0)}get size(){return this.#f}get slots(){return this.#g}get floats(){return this.#b}checkfloat(){0==this.slots.reduce(((e,t)=>e+t))&&(this.#b=!1)}shot(e){e<this.#f&&e>=0&&(this.#g[e]=0,this.checkfloat())}}},238:(e,t,r)=>{"use strict";e.exports=r.p+"403083ee03ffd9e17799.ttf"},24:(e,t,r)=>{"use strict";e.exports=r.p+"bc760098f694b5906fd5.ttf"},568:(e,t,r)=>{"use strict";e.exports=r.p+"a956e7dd171c3538e188.jpg"},502:(e,t,r)=>{"use strict";e.exports=r.p+"f73efb588c67a2d4b414.jpg"},122:(e,t,r)=>{"use strict";e.exports=r.p+"fab30e56b6cad0407169.ttf"}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{"use strict";var e=r(844),t=r.n(e),a=r(379),n=r.n(a),i=r(795),o=r.n(i),s=r(569),l=r.n(s),d=r(565),p=r.n(d),c=r(216),h=r.n(c),u=r(589),y=r.n(u),m=r(192),f={};f.styleTagTransform=y(),f.setAttributes=p(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=h(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let g,b,x,v=r(404),C=r(101),w=document.getElementById("main"),M="y";function B(e,t="div"){let r=document.createElement(t);return r.className=e,r}function E(e,t="div"){let r=document.createElement(t);return r.id=e,r}function k(){let e=E("gameTypeSelector","div");e.className="gameTypeSelector";let t=B("typeSelector","button");t.innerText="vs AI",t.addEventListener("click",(()=>{let e=document.getElementById("gameTypeSelector");e.className="gameTypeSelector after",setTimeout((()=>{w.removeChild(e),N("ai")}),300)}));let r=B("typeSelector","button");r.innerText="2 Players",r.addEventListener("click",(()=>{let e=document.getElementById("gameTypeSelector");e.className="gameTypeSelector after",setTimeout((()=>{w.removeChild(e),N("human")}),300)})),e.appendChild(t),e.appendChild(r),w.appendChild(e)}function S(e){let r=B("dock");r.id=e;for(let e=0;e<t().ships.length;e++){let a=B(`dockedShip size${t().ships[e]}`);switch(a.id=`ship${e}`,t().ships[e]){case 5:a.innerText="A";break;case 4:a.innerText="F";break;case 3:a.innerText="L";break;case 2:a.innerText="O"}a.draggable="true",a.addEventListener("dragstart",(r=>{let n=JSON.stringify({id:a.id,index:e,size:t().ships[e]});x=t().ships[e],r.dataTransfer.setData("text/html",n)})),r.appendChild(a)}return r}function N(e){let r=document.createElement("div");r.id="player1NameContainer";let a=document.createElement("div");a.id="player2NameContainer";let n=document.createElement("form");n.id="playerNames",n.method="get",n.action="";let i=document.createElement("label");i.for="player1name",i.innerText="Player 1 Name:";let o=document.createElement("input");o.id="player1name",o.type="text",o.placeholder="Jhon",o.autocomplete="off",o.name="player1name";let s=B("PlayButton","button");if(s.innerText="Play!",s.type="button","ai"==e)return s.addEventListener("click",(()=>{let e=document.getElementById("playerNames");e.className="playerNames after",setTimeout((()=>{w.removeChild(e),g=new v("ai",n.player1name.value),b=new C(t().size,g.player2,g.player1),b.placeShips(),T()}),300)})),r.appendChild(i),r.appendChild(o),n.appendChild(r),n.appendChild(s),void w.appendChild(n);let l=document.createElement("label");l.for="player2name",l.innerText="Player 2 Name:";let d=document.createElement("input");d.id="player2name",d.type="text",d.placeholder="Eve",d.autocomplete="off",d.name="player2name",s.addEventListener("click",(()=>{let e=document.getElementById("playerNames");e.className="playerNames after",setTimeout((()=>{w.removeChild(e),g=new v("human",n.player1name.value,n.player2name.value),T()}),300)})),r.appendChild(i),r.appendChild(o),n.appendChild(r),a.appendChild(l),a.appendChild(d),n.appendChild(a),n.appendChild(s),w.appendChild(n)}function T(){let e=E("gameContainer"),t=E("player1Container"),r=P(g.player1,"player1Board",!1),a=E("player2Container");a.className="playerContainer",t.className="playerContainer";let n=P(g.player2,"player2Board",!0);r.className="playerBoard",n.className="playerBoard",t.appendChild(S("player1Dock")),t.appendChild(r);let i=document.createElement("div");i.id="buttonContainer","ai"!=g.type&&a.appendChild(S("player2Dock")),a.appendChild(n),e.appendChild(t),e.appendChild(a);let o=document.createElement("button");if(o.innerHTML="Rotate Ship",o.id="rotateShipButton",o.addEventListener("click",(()=>{M="x"==M?"y":"x"})),"ai"!=g.type){let e=document.createElement("button");e.innerHTML="Next Turn",e.id="nextTurnButton",e.addEventListener("click",(()=>{1==g.currentPlayer.board.allShipsPlaced()&&(g.currentPlayer==g.player1?(r=P(g.player1,"player1Board",!0),n=P(g.player2,"player2Board",!1),g.nextPlayer()):(r=P(g.player1,"player1Board",!0),n=P(g.player2,"player2Board",!0),g.nextPlayer(),e.parentElement.removeChild(e)))})),i.appendChild(e)}i.appendChild(o),e.appendChild(i),w.appendChild(e)}function $(e,t,r){if(0==g.player1.board.allShipsPlaced()||0==g.player2.board.allShipsPlaced())return;let a=document.getElementById("player1Board"),n=document.getElementById("player2Board");if("ai"!=r){let r=g.turn(e,t);if(null!=r)return void(1==r&&I(g.currentPlayer.name));a=P(g.player1,"player1Board",!0),n=P(g.player2,"player2Board",!0)}else{let r=g.turn(e,t);if(null!=r)return void(1==r&&I(g.player1.name));n=P(g.player2,"player2Board",!0);let i=b.play(),o=g.turn(i.x,i.y);for(;null!=o;){if(1==o)return void I(g.currentPlayer.name);i=b.play(),o=g.turn(i.x,i.y)}a=P(g.player1,"player1Board",!1)}}function P(e,t,r){let a=document.getElementById(t),n=e.board.grid;null==a?a=E(t):a.innerHTML="";for(let e=0;e<n.length;e++)for(let i=0;i<n[e].length;i++){let o=document.createElement("div");1==r?(n[e][i]<=1?o.className=`square x${e}y${i} hidden`:2==n[e][i]?o.className=`square x${e}y${i} hiddenHitBoat`:3==n[e][i]&&(o.className=`square x${e}y${i} hiddenHitWater`),o.addEventListener("click",(()=>{"player1Board"==t&&g.currentPlayer==g.player2&&$(e,i,g.type),"player2Board"==t&&g.currentPlayer==g.player1&&$(e,i,g.type)}))):0==n[e][i]?(o.className=`square x${e}y${i} water`,o.addEventListener("dragover",(t=>{if(t.preventDefault(),"y"==M)for(let t=0;t<x;t++){let r=document.querySelector(`.x${e}y${i+t}`);r.className==`square x${e}y${i+t} water`&&(r.className=`square x${e}y${i+t} hoverShip`)}if("x"==M)for(let t=0;t<x;t++){let r=document.querySelector(`.x${e+t}y${i}`);r.className==`square x${e+t}y${i} water`&&(r.className=`square x${e+t}y${i} hoverShip`)}})),o.addEventListener("dragleave",(()=>{if("y"==M)for(let t=0;t<x;t++){let r=document.querySelector(`.x${e}y${i+t}`);r.className==`square x${e}y${i+t} hoverShip`&&(r.className=`square x${e}y${i+t} water`)}if("x"==M)for(let t=0;t<x;t++){let r=document.querySelector(`.x${e+t}y${i}`);r.className==`square x${e+t}y${i} hoverShip`&&(r.className=`square x${e+t}y${i} water`)}})),o.addEventListener("drop",(t=>{t.preventDefault();let r=JSON.parse(t.dataTransfer.getData("text/html")),a=document.getElementById(r.id);if("string"!=typeof g.currentPlayer.board.placeShip(r.index,{x:e,y:i},M)&&a.parentNode.removeChild(a),g.currentPlayer==g.player1){let e=P(g.player1,"player1Board",!1);if(e.className="playerBoard",document.getElementById("player1Container").appendChild(e),1==g.player1.board.allShipsPlaced()){let e=document.getElementById("player1Dock");if(e.parentNode.removeChild(e),"ai"==g.type){let e=document.getElementById("rotateShipButton");e.parentNode.removeChild(e)}}}else{let e=P(g.player2,"player2Board",!1);e.className="playerBoard",document.getElementById("player2Container").appendChild(e)}if(1==g.player2.board.allShipsPlaced()){let e=document.getElementById("player2Dock");if(null!=e&&e.parentNode.removeChild(e),"ai"!=g.type){let e=document.getElementById("rotateShipButton");e.parentNode.removeChild(e)}}}))):1==n[e][i]?o.className=`square x${e}y${i} ship`:2==n[e][i]?o.className=`square x${e}y${i} hitShip `:3==n[e][i]&&(o.className=`square x${e}y${i} hitWater `),a.appendChild(o)}return a}function I(e){let t=document.getElementById("gameContainer");t.parentElement.removeChild(t);let r=E("winnerDiv"),a=E("winner");a.innerText=`${e} wins the game`;let n=document.createElement("button");n.id="restartBtn",n.innerText="Restart Game",n.addEventListener("click",(()=>{let e=document.getElementById("winnerDiv");e.parentElement.removeChild(e),k()})),r.appendChild(a),r.appendChild(n),w.appendChild(r)}!function(){let e=E("header","div"),t=E("headerText","h1");t.innerText="BATTLESHIP",e.appendChild(t),w.appendChild(e)}(),k(),function(){let e=E("footer","div"),t=E("footerText","h3");t.innerText="Made by Haervwe",e.appendChild(t),w.appendChild(e)}()})()})();