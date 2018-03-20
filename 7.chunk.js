webpackJsonp([7],{1135:function(n,s){n.exports='<h1 id="wormhole">wormhole</h1>\n<p>The wormhole directive allows to render templates and components in the DOM.</p>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLWormholeModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLWormholeModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<p>Use the the <code>wormhole</code> directive to create a wormhole template...</p>\n<pre class="hljs">\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">myFirstWormhole</span>&gt;</span>\n  I will be rendered through a wormhole\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n</pre>\n<p>...and connect it via the wormholeTarget directive.<br>The template is rendered below the wormhole directive.</p>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">wormhole</span> [<span class="hljs-attr">connect</span>]=<span class="hljs-string">&quot;myFirstWormhole&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wormhole</span>&gt;</span>\n<span class="hljs-comment">&lt;!-- The myFirstWormhole template is rendered here --&gt;</span>\n</pre>\n'},1136:function(n,s){n.exports='The template wormhole is defined above the hr\n<span class="hljs-tag">&lt;<span class="hljs-name">ng-template</span> #<span class="hljs-attr">someTemplate</span>&gt;</span>\n  But is rendered below\n<span class="hljs-tag">&lt;/<span class="hljs-name">ng-template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">wormhole</span> [<span class="hljs-attr">connect</span>]=<span class="hljs-string">"someTemplate"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">wormhole</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">hr</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">div</span> #<span class="hljs-attr">target</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n\n\n'},1137:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component, ViewChild, Input, ViewContainerRef } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { Wormhole, WormholeHost } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ng-vcl/ng-vcl\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  template: <span class="hljs-string">\'&lt;p&gt;I am a component. And this is my &lt;b&gt;{{value}}&lt;/b&gt;&lt;/p&gt;\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyComponent {\n  <span class="hljs-meta">@Input</span>()\n  value: <span class="hljs-built_in">string</span>;\n}\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> WormholeDemoComponent {\n\n  <span class="hljs-comment">// Template wormhole</span>\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'myFirstWormhole\'</span>)\n  myFirstTemplateWormhole: <span class="hljs-built_in">any</span>;\n\n\n  <span class="hljs-comment">// Component wormhole</span>\n\n  <span class="hljs-comment">// This is the target where the component will be rendered</span>\n  <span class="hljs-meta">@ViewChild</span>(<span class="hljs-string">\'target\'</span>, { read: ViewContainerRef })\n  <span class="hljs-keyword">set</span> target(vcRef: ViewContainerRef) {\n    <span class="hljs-keyword">this</span>.host =  <span class="hljs-keyword">new</span> WormholeHost(vcRef);\n  }\n\n  host: WormholeHost;\n\n  ngAfterViewInit() {\n    <span class="hljs-comment">// Create and connect wormhole</span>\n    <span class="hljs-keyword">this</span>.host.connectWormhole(MyComponent, {\n      value: <span class="hljs-string">\'value\'</span>\n    });\n  }\n\n  ngOnDestroy() {\n    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.host) {\n      <span class="hljs-keyword">this</span>.host.clearWormholes();\n    }\n  }\n}\n'},494:function(n,s,l){"use strict";function a(){return{label:"Wormhole",tabs:{Demo:m,"README.md":{type:"md",content:l(1135)},"demo.component.html":{type:"pre",content:l(1136)},"demo.component.ts":{type:"pre",content:l(1137)}}}}function e(n){return h._29(0,[(n()(),h._6(0,0,null,null,3,"p",[],null,null,null,null,null)),(n()(),h._27(-1,null,["I am a component. And this is my "])),(n()(),h._6(2,0,null,null,1,"b",[],null,null,null,null,null)),(n()(),h._27(3,null,["",""]))],null,function(n,s){n(s,3,0,s.component.value)})}function t(n){return h._29(0,[(n()(),h._6(0,0,null,null,1,"ng-component",[],null,null,null,e,_)),h._5(1,49152,null,0,u,[],null,null)],null,null)}function o(n){return h._29(0,[(n()(),h._27(-1,null,["\n  But is rendered below\n"]))],null,null)}function p(n){return h._29(0,[h._25(402653184,1,{myFirstTemplateWormhole:0}),h._25(402653184,2,{target:0}),(n()(),h._27(-1,null,["The template wormhole is defined above the hr\n"])),(n()(),h._1(0,[["someTemplate",2]],null,0,null,o)),(n()(),h._27(-1,null,["\n"])),(n()(),h._6(5,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),h._27(-1,null,["\n"])),(n()(),h._6(7,16777216,null,null,1,"wormhole",[],null,null,null,null,null)),h._5(8,671744,null,0,g.a,[h.P],{target:[0,"target"]},null),(n()(),h._27(-1,null,["\n"])),(n()(),h._6(10,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),h._27(-1,null,["\n"])),(n()(),h._6(12,16777216,[[2,3],["target",1]],null,0,"div",[],null,null,null,null,null)),(n()(),h._27(-1,null,["\n\n\n\n"]))],function(n,s){n(s,8,0,h._18(s,3))},null)}function r(n){return h._29(0,[(n()(),h._6(0,0,null,null,1,"ng-component",[],null,null,null,p,v)),h._5(1,4374528,null,0,m,[],null,null)],null,null)}Object.defineProperty(s,"__esModule",{value:!0});var h=l(2),c=l(97),u=function(){function n(){}return n}(),m=function(){function n(){}return Object.defineProperty(n.prototype,"target",{set:function(n){this.host=new c.g(n)},enumerable:!0,configurable:!0}),n.prototype.ngAfterViewInit=function(){this.host.connectWormhole(u,{value:"value"})},n.prototype.ngOnDestroy=function(){this.host&&this.host.clearWormholes()},n}(),i={demo:a},j=function(){function n(){}return n}(),d=l(503),g=l(232),w=[],_=h._4({encapsulation:2,styles:w,data:{}}),y=h._2("ng-component",u,t,{value:"value"},{},[]),f=[],v=h._4({encapsulation:2,styles:f,data:{}}),b=h._2("ng-component",m,r,{},{},[]),k=l(33),W=l(94),C=l(59),T=l(227),V=l(504),M=l(50),D=l(502);l.d(s,"WormholeDemoModuleNgFactory",function(){return F});var F=h._3(j,[],function(n){return h._14([h._15(512,h.j,h.Z,[[8,[d.a,b,y]],[3,h.j],h.w]),h._15(4608,k.n,k.m,[h.t,[2,k.v]]),h._15(512,k.c,k.c,[]),h._15(512,W.a,W.a,[]),h._15(512,C.d,C.d,[]),h._15(512,T.a,T.a,[]),h._15(512,V.a,V.a,[]),h._15(512,M.m,M.m,[[2,M.r],[2,M.l]]),h._15(512,j,j,[]),h._15(1024,M.j,function(){return[[{path:"",component:D.a,data:i}]]},[])])})}});