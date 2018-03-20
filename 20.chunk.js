webpackJsonp([20],{1142:function(n,l){n.exports='<h1 id="offclick-directive">offClick directive</h1>\n<p>The offClick event fires when a click event is handled and its source is not(!) the element or any of its subelements.  </p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLOffClickModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLOffClickModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<p>offClick() is called when the click`s source is not DIV1 or DIV2  </p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">&quot;offClick()&quot;</span>&gt;</span>\n  DIV1\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n    DIV2\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</pre>\n'},1143:function(n,l){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">div</span> (<span class="hljs-attr">offClick</span>)=<span class="hljs-string">"offClick()"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 2px solid;background-color:red;width:300px;height:300px"</span>&gt;</span>\n  DIV 1\n  <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n  Click somewhere outside to trigger an offClick\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"</span>&gt;</span>\n    DIV 2 \n    <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n    This is a subelement of DIV 1 \n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks &gt; 0"</span>&gt;</span>offClicks triggered: {{clicks}}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"clicks === 0"</span>&gt;</span>Click anywhere to trigger an offClick<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  \n'},1144:function(n,l){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> OffClickDemoComponent  {\n\n  clicks: <span class="hljs-built_in">number</span> = <span class="hljs-number">0</span>;\n\n  offClick() {\n    <span class="hljs-keyword">this</span>.clicks++;\n  }\n}\n'},497:function(n,l,s){"use strict";function a(){return{label:"Off Click",tabs:{Demo:u,"README.md":{type:"md",content:s(1142)},"demo.component.html":{type:"pre",content:s(1143)},"demo.component.ts":{type:"pre",content:s(1144)}}}}function t(n){return o._29(0,[(n()(),o._6(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o._27(1,null,["offClicks triggered: ",""]))],null,function(n,l){n(l,1,0,l.component.clicks)})}function p(n){return o._29(0,[(n()(),o._6(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o._27(-1,null,["Click anywhere to trigger an offClick"]))],null,null)}function c(n){return o._29(0,[(n()(),o._6(0,0,null,null,9,"div",[["style","border: 2px solid;background-color:red;width:300px;height:300px"]],null,[[null,"offClick"]],function(n,l,s){var a=!0,t=n.component;if("offClick"===l){a=!1!==t.offClick()&&a}return a},null,null)),o._5(1,4341760,null,0,f.a,[o.k],null,{offClick:"offClick"}),(n()(),o._27(-1,null,["\n  DIV 1\n  "])),(n()(),o._6(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._27(-1,null,["\n  Click somewhere outside to trigger an offClick\n  "])),(n()(),o._6(5,0,null,null,3,"div",[["style","border: 1px solid;background-color:green;width:50%;margin:auto; height:100px"]],null,null,null,null,null)),(n()(),o._27(-1,null,["\n    DIV 2 \n    "])),(n()(),o._6(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._27(-1,null,["\n    This is a subelement of DIV 1 \n  "])),(n()(),o._27(-1,null,["\n"])),(n()(),o._27(-1,null,["\n"])),(n()(),o._6(11,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o._27(-1,null,["\n"])),(n()(),o._1(16777216,null,null,1,null,t)),o._5(14,16384,null,0,g.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o._27(-1,null,["\n"])),(n()(),o._1(16777216,null,null,1,null,p)),o._5(17,16384,null,0,g.l,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(n()(),o._27(-1,null,["\n  \n"]))],function(n,l){var s=l.component;n(l,14,0,s.clicks>0),n(l,17,0,0===s.clicks)},null)}function e(n){return o._29(0,[(n()(),o._6(0,0,null,null,1,"ng-component",[],null,null,null,c,j)),o._5(1,49152,null,0,u,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var o=s(2),u=function(){function n(){this.clicks=0}return n.prototype.offClick=function(){this.clicks++},n}(),i={demo:a},r=function(){function n(){}return n}(),h=s(503),f=s(563),g=s(33),d=[],j=o._4({encapsulation:2,styles:d,data:{}}),m=o._2("ng-component",u,e,{},{},[]),k=s(94),_=s(59),C=s(227),v=s(504),b=s(229),y=s(50),w=s(502);s.d(l,"OffClickDemoModuleNgFactory",function(){return I});var I=o._3(r,[],function(n){return o._14([o._15(512,o.j,o.Z,[[8,[h.a,m]],[3,o.j],o.w]),o._15(4608,g.n,g.m,[o.t,[2,g.v]]),o._15(512,g.c,g.c,[]),o._15(512,k.a,k.a,[]),o._15(512,_.d,_.d,[]),o._15(512,C.a,C.a,[]),o._15(512,v.a,v.a,[]),o._15(512,b.a,b.a,[]),o._15(512,y.m,y.m,[[2,y.r],[2,y.l]]),o._15(512,r,r,[]),o._15(1024,y.j,function(){return[[{path:"",component:w.a,data:i}]]},[])])})}});