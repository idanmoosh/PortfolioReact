(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/pixels.ea20df69.jpg"},26:function(e,t,n){e.exports=n.p+"static/media/pxArt.419d7954.png"},27:function(e,t,n){e.exports=n.p+"static/media/Oil_Essence.290ed061.png"},28:function(e,t,n){e.exports=n.p+"static/media/React_Synth.4f6d1bdb.png"},29:function(e,t,n){e.exports=n.p+"static/media/tournament generator.d2cd5850.jpg"},31:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(21),l=n(30),i=n(12),c=n(24);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise(function(t){return setTimeout(function(){return t({data:e})},500)})}function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(_){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof h?t:h,l=Object.create(o.prototype),i=new S(r||[]);return a(l,"_invoke",{value:N(e,n,i)}),l}function m(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function p(){}function d(){}var g={};c(g,o,function(){return this});var E=Object.getPrototypeOf,v=E&&E(E(j([])));v&&v!==t&&n.call(v,o)&&(g=v);var y=d.prototype=h.prototype=Object.create(g);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function l(){return new t(function(r,l){!function a(r,o,l,i){var c=m(e[r],e,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){a("next",e,l,i)},function(e){a("throw",e,l,i)}):t.resolve(s).then(function(e){u.value=e,l(u)},function(e){return a("throw",e,l,i)})}i(c.arg)}(a,o,r,l)})}return r=r?r.then(l,l):l()}})}function N(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return O()}for(n.method=r,n.arg=o;;){var l=n.delegate;if(l){var i=k(l,n);if(i){if(i===f)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=m(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=m(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,a(y,"constructor",{value:d,configurable:!0}),a(d,"constructor",{value:p,configurable:!0}),p.displayName=c(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,l,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var l=new w(u(t,n,a,r),o);return e.isGeneratorFunction(n)?l:l.next().then(function(e){return e.done?e.value:l.next()})},b(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return l.type="throw",l.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;L(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var m=Object(i.b)("counter/fetchCount",function(){var e=Object(c.a)(s().mark(function e(t){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),f=Object(i.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(m.pending,function(e){e.status="loading"}).addCase(m.fulfilled,function(e,t){e.status="idle",e.value+=t.payload})}}),h=f.actions,p=(h.increment,h.decrement,h.incrementByAmount,f.reducer),d=Object(i.a)({reducer:{counter:p}}),g=(n(43),n(11)),E=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"logo"}," Idan Haim"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(g.b,{to:"/",className:"Link"},"Home")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/work",className:"Link"},"Work")),r.a.createElement("li",null,r.a.createElement(g.b,{to:"/about",className:"Link"},"About"))))},v=(n(44),n(25)),y=n.n(v);function b(){return r.a.createElement("div",{className:"Home"},r.a.createElement("img",{src:y.a,alt:"pixels",className:"HeroImage"}),r.a.createElement("section",{className:"HomeSection"},r.a.createElement("h2",{className:"h2"},"Hello!"),r.a.createElement("p",null," ","I'm ",r.a.createElement("span",{className:"HomeSpan"},"Idan"),", a full stack developer based in Ramat-Gan. Looking for my next"," ",r.a.createElement("span",{className:"HomeSpan"},"challenge"))))}n(45);var w=n(26),N=n.n(w),k=n(5),x=(n(46),{1:{name:"JS",logo:r.a.createElement(k.g,null)},2:{name:"React",logo:r.a.createElement(k.j,null)},3:{name:"React-Router",logo:r.a.createElement(k.k,null)},4:{name:"Redux",logo:r.a.createElement(k.l,null)},5:{name:"GitHub",logo:r.a.createElement(k.d,null)},6:{name:"HTML 5",logo:r.a.createElement(k.f,null)},7:{name:"Node JS",logo:r.a.createElement(k.h,null)},8:{name:"CSS",logo:r.a.createElement(k.a,null)},9:{name:"Python",logo:r.a.createElement(k.i,null)},10:{name:"Git",logo:r.a.createElement(k.c,null)},11:{name:"React-Native",logo:r.a.createElement(k.j,null)},12:{name:"Express",logo:r.a.createElement(k.b,null)}}),L=function(){return r.a.createElement("div",{className:"SkillsMain"},r.a.createElement("h2",{className:"skillsHeader"},"Skills"),r.a.createElement("div",{className:"SkillsContainer"},Object.keys(x).map(function(e){return r.a.createElement("div",{className:"skill",key:e},x[e].logo,r.a.createElement("p",{className:"skillName"},x[e].name))})))},S=(n(47),n(9)),j={1:{name:"Travelling",logo:r.a.createElement(S.a,null)},2:{name:"Hiking",logo:r.a.createElement(S.b,null)},3:{name:"Gaming",logo:r.a.createElement(S.c,null)},4:{name:"Arts and Crafts",logo:r.a.createElement(S.d,null)},5:{name:"Socializing",logo:r.a.createElement(S.h,null)},6:{name:"Pets",logo:r.a.createElement(S.g,null)},7:{name:"Music",logo:r.a.createElement(S.f,null)},8:{name:"Gardening and Foraging ",logo:r.a.createElement(S.e,null)}},O=function(){return r.a.createElement("div",{className:"HobbiesMain"},r.a.createElement("h2",{className:"HobbiesHeader"},"Skills"),r.a.createElement("div",{className:"HobbiesContainer"},Object.keys(j).map(function(e){return r.a.createElement("div",{className:"Hobbie",key:j[e]+j[e].name},j[e].logo,r.a.createElement("p",{className:"HobbieName"},j[e].name))})))};function _(){return r.a.createElement("div",{className:"about"},r.a.createElement("section",{className:"AboutSection"},r.a.createElement("img",{className:"about-image",src:N.a,alt:"thats-me"}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",{className:"aboutHeader"},"About me"),r.a.createElement("p",{className:"aboutText"},"I'm a developer who"," ",r.a.createElement("span",{className:"aboutSpan"},"loves creating")," and building. with vast ",r.a.createElement("span",{className:"aboutSpan"},"experience in R&D processes."),"I can assure a clean and coherent code. Love working in groups and alone.",r.a.createElement("span",{className:"aboutSpan"}," ","welcoming each challenge with a smile.")," "))),r.a.createElement("section",{className:"skillSection"},r.a.createElement(L,null)),r.a.createElement("section",{className:"skillSection"},r.a.createElement(O,null)))}var H=n(27),G=n.n(H),R=n(28),T=n.n(R),I=n(29),P=n.n(I),C=(n(20),n(10)),A=function e(t){var n=t.project;return r.a.createElement("div",{className:"projectContainer"},r.a.createElement("h2",null,n.title),r.a.createElement("div",{className:"projectDetails"},r.a.createElement("img",{className:"projectImage",src:n.img,alt:n.title}),r.a.createElement("ul",{className:"techList",key:e.id+n.name+"techlist"},n.technologies.map(function(e){return r.a.createElement("li",{key:n.id+n.name+e},e)}))),r.a.createElement("p",{className:"projectParagraph"},n.details),r.a.createElement("a",{href:n.gitLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,null)," GitHub Repository"))},F=[{id:1,name:"oilEssence",title:"Oil Essence - Ecommerce",technologies:["React","Redux","Node.js"],img:G.a,details:"Oil Essence - E-commerce for House and Businesses perfuming solutions",gitLink:"https://github.com/idanmoosh/oil-essence"},{id:2,name:"synTronic",title:"React Synthesizer - SynTronic",technologies:["React","Redux"],img:T.a,details:"SynTronica - Web Synth for Synth lovers",gitLink:"https://github.com/idanmoosh/React-Synth"},{id:3,name:"tournamentGenerator",title:"Tournament Generator - Mobile App",technologies:["React","React Native","Redux"],img:P.a,details:"Tournament Generator - Play custom tournaments with friends",gitLink:"https://github.com/idanmoosh/LeagueGenerator"}],M=function(){return r.a.createElement(r.a.Fragment,null,F.map(function(e){return r.a.createElement(A,{key:e.id+e.name,project:e})}))};n(48),n(49);function B(){return r.a.createElement("div",{className:"Contact"},r.a.createElement("h2",{className:"contactLabel"},"Contact"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/idanmoosh",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.a,null)," GitHub")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://wa.me/972506794083",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.d,null)," WhatsApp")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:idanmoosh@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(k.e,null)," Gmail")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/idan-haim-025a23a9",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.c,null)," LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/idanmoosh/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(C.b,null)," Instagram"))))}var J=n(2);var D=function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/",element:r.a.createElement(b,null)}),r.a.createElement(J.a,{path:"/about",element:r.a.createElement(_,null)}),r.a.createElement(J.a,{path:"/work",element:r.a.createElement(M,null)})),r.a.createElement(B,null)))},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),o(e),l(e)})},z=(n(50),document.getElementById("root"));Object(o.createRoot)(z).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{store:d},r.a.createElement(D,null)))),W()}},[[31,1,2]]]);
//# sourceMappingURL=main.2c1616c6.chunk.js.map