webpackJsonp([22],{1072:function(l,n){l.exports='<h1 id="vcl-metalist">vcl-metalist</h1>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist</span> #<span class="hljs-attr">metalist</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">&quot;onChange($event)&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;item.value&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;item.selected&quot;</span>&gt;</span>\n    Item 1\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">&quot;metalist.select(meta)&quot;</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;meta.selected&quot;</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;meta.marked&quot;</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;item.value&quot;</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">&quot;item.selected&quot;</span>&gt;</span>\n    Item 2\n    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">&quot;metalist.select(meta)&quot;</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;meta.selected&quot;</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">&quot;meta.marked&quot;</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-metalist-attributes-">vcl-metalist attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>ngModel</code></td>\n<td>any | any[]</td>\n<td></td>\n<td>value(s) of the selected items</td>\n</tr>\n<tr>\n<td><code>mode</code></td>\n<td>&quot;single&quot; | &quot;multiple&quot;</td>\n<td>&quot;single&quot;</td>\n<td>1 item can be selected in &quot;single&quot; mode. 0 to <code>maxSelectableItems</code> in &quot;&quot;multiple&quot;</td>\n</tr>\n<tr>\n<td><code>maxSelectableItems</code></td>\n<td>number | undefined</td>\n<td></td>\n<td>maximum number of options that can be selected at the same time. Unlimited if undefined.</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-metalist-events-">vcl-metalist events:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>change</code></td>\n<td>any | any[]</td>\n<td>emits the new value when the selected items change</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-metalist-item-attributes-">vcl-metalist-item attributes:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>value</code></td>\n<td>any</td>\n<td></td>\n<td>value of the item</td>\n</tr>\n<tr>\n<td><code>selected</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>preselects the item. Ignored when using ngModel</td>\n</tr>\n<tr>\n<td><code>disabled</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>if true, the item cannot be selected</td>\n</tr>\n<tr>\n<td><code>marked</code></td>\n<td>boolean</td>\n<td>false</td>\n<td>marks the item</td>\n</tr>\n</tbody>\n</table>\n<h4 id="vcl-metalist-item-methods-">vcl-metalist-item methods:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>select</code></td>\n<td>(MetalistItem) =&gt; void</td>\n<td>Selects the passed item</td>\n</tr>\n</tbody>\n</table>\n'},1073:function(l,n){l.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist</span> #<span class="hljs-attr">metalist</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"item.selected"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"metalist.select(meta)"</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      Some HTML // {{item.name}}\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.selected"</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.marked"</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist</span> #<span class="hljs-attr">metalist2</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"multiple"</span> (<span class="hljs-attr">change</span>)=<span class="hljs-string">"onChange($event)"</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">"3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"item.selected"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"metalist2.select(meta)"</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      Some HTML // {{item.name}}\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.selected"</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.marked"</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>single-select with ngModel:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist</span> #<span class="hljs-attr">metalist3</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"value1"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"item.selected"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"metalist3.select(meta)"</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      Some HTML // {{item.name}}\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.selected"</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.marked"</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>Current value: {{value1}}\n\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>multi-select with ngModel:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist</span> #<span class="hljs-attr">metalist4</span> [(<span class="hljs-attr">ngModel</span>)]=<span class="hljs-string">"value2"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"multiple"</span> [<span class="hljs-attr">maxSelectableItems</span>]=<span class="hljs-string">"3"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">vcl-metalist-item</span> #<span class="hljs-attr">meta</span> *<span class="hljs-attr">ngFor</span>=<span class="hljs-string">"let item of items"</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"item.value"</span> [<span class="hljs-attr">selected</span>]=<span class="hljs-string">"item.selected"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">vcl-button</span> (<span class="hljs-attr">tap</span>)=<span class="hljs-string">"metalist4.select(meta)"</span>&gt;</span>Select<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n      Some HTML // {{item.name}}\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.selected"</span>&gt;</span> // selected<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> *<span class="hljs-attr">ngIf</span>=<span class="hljs-string">"meta.marked"</span>&gt;</span> // marked<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">vcl-metalist</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>Current value: {{value2}}\n'},1074:function(l,n){l.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MetalistDemoComponent {\n\n  items: <span class="hljs-built_in">any</span> = [\n    { name: <span class="hljs-string">\'name 1\'</span>, value: <span class="hljs-number">1</span> },\n    { name: <span class="hljs-string">\'name 2\'</span>, value: <span class="hljs-number">2</span> },\n    { name: <span class="hljs-string">\'name 3\'</span>, value: <span class="hljs-number">3</span>, selected: <span class="hljs-literal">true</span> },\n    { name: <span class="hljs-string">\'name 4\'</span>, value: <span class="hljs-number">4</span> },\n    { name: <span class="hljs-string">\'name 5\'</span>, value: <span class="hljs-number">5</span> },\n  ];\n\n  value1 = <span class="hljs-number">2</span>;\n  value2 = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>];\n\n  onChange(value: <span class="hljs-built_in">number</span>) {\n    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'metalist change\'</span>, value);\n  }\n}\n'},407:function(l,n,s){"use strict";function a(){return{label:"Metalist",tabs:{Demo:f,"README.md":{type:"md",content:s(1072)},"demo.component.html":{type:"pre",content:s(1073)},"demo.component.ts":{type:"pre",content:s(1074)}}}}function t(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // selected"]))],null,null)}function e(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // marked"]))],null,null)}function p(l){return v._28(0,[(l()(),v._6(0,0,null,null,16,"vcl-metalist-item",[],null,null,null,y.b,y.a)),v._5(1,49152,[[1,4],["meta",4]],0,I.a,[],{value:[0,"value"],selected:[1,"selected"]},null),(l()(),v._26(-1,0,["\n    "])),(l()(),v._6(3,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n      "])),(l()(),v._6(5,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,s){var a=!0;if("keypress"===n){a=!1!==v._20(l,6).onKeypress(s)&&a}if("mouseenter"===n){a=!1!==v._20(l,6).onMouseEnter(s)&&a}if("mouseleave"===n){a=!1!==v._20(l,6).onMouseLeave(s)&&a}if("tap"===n){a=!1!==v._20(l,6).onTap(s)&&a}if("click"===n){a=!1!==v._20(l,6).onClick(s)&&a}if("tap"===n){a=!1!==v._20(l.parent,5).select(v._20(l,1))&&a}return a},C.b,C.a)),v._5(6,4898816,null,1,q.a,[v.k],null,null),v._24(603979776,2,{buttonContent:1}),(l()(),v._26(-1,0,["Select"])),(l()(),v._26(9,null,["\n      Some HTML // ","\n      "])),(l()(),v._1(16777216,null,null,1,null,t)),v._5(11,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n      "])),(l()(),v._1(16777216,null,null,1,null,e)),v._5(14,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n    "])),(l()(),v._26(-1,0,["\n  "]))],function(l,n){l(n,1,0,n.context.$implicit.value,n.context.$implicit.selected),l(n,11,0,v._20(n,1).selected),l(n,14,0,v._20(n,1).marked)},function(l,n){l(n,5,0,!0,v._20(n,6).hovered,v._20(n,6).isDisabled,v._20(n,6).selected,v._20(n,6).title),l(n,9,0,n.context.$implicit.name)})}function u(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // selected"]))],null,null)}function c(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // marked"]))],null,null)}function i(l){return v._28(0,[(l()(),v._6(0,0,null,null,16,"vcl-metalist-item",[],null,null,null,y.b,y.a)),v._5(1,49152,[[3,4],["meta",4]],0,I.a,[],{value:[0,"value"],selected:[1,"selected"]},null),(l()(),v._26(-1,0,["\n    "])),(l()(),v._6(3,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n      "])),(l()(),v._6(5,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,s){var a=!0;if("keypress"===n){a=!1!==v._20(l,6).onKeypress(s)&&a}if("mouseenter"===n){a=!1!==v._20(l,6).onMouseEnter(s)&&a}if("mouseleave"===n){a=!1!==v._20(l,6).onMouseLeave(s)&&a}if("tap"===n){a=!1!==v._20(l,6).onTap(s)&&a}if("click"===n){a=!1!==v._20(l,6).onClick(s)&&a}if("tap"===n){a=!1!==v._20(l.parent,19).select(v._20(l,1))&&a}return a},C.b,C.a)),v._5(6,4898816,null,1,q.a,[v.k],null,null),v._24(603979776,4,{buttonContent:1}),(l()(),v._26(-1,0,["Select"])),(l()(),v._26(9,null,["\n      Some HTML // ","\n      "])),(l()(),v._1(16777216,null,null,1,null,u)),v._5(11,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n      "])),(l()(),v._1(16777216,null,null,1,null,c)),v._5(14,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n    "])),(l()(),v._26(-1,0,["\n  "]))],function(l,n){l(n,1,0,n.context.$implicit.value,n.context.$implicit.selected),l(n,11,0,v._20(n,1).selected),l(n,14,0,v._20(n,1).marked)},function(l,n){l(n,5,0,!0,v._20(n,6).hovered,v._20(n,6).isDisabled,v._20(n,6).selected,v._20(n,6).title),l(n,9,0,n.context.$implicit.name)})}function h(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // selected"]))],null,null)}function m(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // marked"]))],null,null)}function o(l){return v._28(0,[(l()(),v._6(0,0,null,null,16,"vcl-metalist-item",[],null,null,null,y.b,y.a)),v._5(1,49152,[[5,4],["meta",4]],0,I.a,[],{value:[0,"value"],selected:[1,"selected"]},null),(l()(),v._26(-1,0,["\n    "])),(l()(),v._6(3,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n      "])),(l()(),v._6(5,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,s){var a=!0;if("keypress"===n){a=!1!==v._20(l,6).onKeypress(s)&&a}if("mouseenter"===n){a=!1!==v._20(l,6).onMouseEnter(s)&&a}if("mouseleave"===n){a=!1!==v._20(l,6).onMouseLeave(s)&&a}if("tap"===n){a=!1!==v._20(l,6).onTap(s)&&a}if("click"===n){a=!1!==v._20(l,6).onClick(s)&&a}if("tap"===n){a=!1!==v._20(l.parent,30).select(v._20(l,1))&&a}return a},C.b,C.a)),v._5(6,4898816,null,1,q.a,[v.k],null,null),v._24(603979776,6,{buttonContent:1}),(l()(),v._26(-1,0,["Select"])),(l()(),v._26(9,null,["\n      Some HTML // ","\n      "])),(l()(),v._1(16777216,null,null,1,null,h)),v._5(11,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n      "])),(l()(),v._1(16777216,null,null,1,null,m)),v._5(14,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n    "])),(l()(),v._26(-1,0,["\n  "]))],function(l,n){l(n,1,0,n.context.$implicit.value,n.context.$implicit.selected),l(n,11,0,v._20(n,1).selected),l(n,14,0,v._20(n,1).marked)},function(l,n){l(n,5,0,!0,v._20(n,6).hovered,v._20(n,6).isDisabled,v._20(n,6).selected,v._20(n,6).title),l(n,9,0,n.context.$implicit.name)})}function r(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // selected"]))],null,null)}function g(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),v._26(-1,null,[" // marked"]))],null,null)}function d(l){return v._28(0,[(l()(),v._6(0,0,null,null,16,"vcl-metalist-item",[],null,null,null,y.b,y.a)),v._5(1,49152,[[7,4],["meta",4]],0,I.a,[],{value:[0,"value"],selected:[1,"selected"]},null),(l()(),v._26(-1,0,["\n    "])),(l()(),v._6(3,0,null,0,12,"div",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n      "])),(l()(),v._6(5,0,null,null,3,"button",[["vcl-button",""]],[[2,"vclButton",null],[2,"vclHovered",null],[1,"disabled",0],[2,"vclSelected",null],[1,"aria-label",0]],[[null,"tap"],[null,"keypress"],[null,"mouseenter"],[null,"mouseleave"],[null,"click"]],function(l,n,s){var a=!0;if("keypress"===n){a=!1!==v._20(l,6).onKeypress(s)&&a}if("mouseenter"===n){a=!1!==v._20(l,6).onMouseEnter(s)&&a}if("mouseleave"===n){a=!1!==v._20(l,6).onMouseLeave(s)&&a}if("tap"===n){a=!1!==v._20(l,6).onTap(s)&&a}if("click"===n){a=!1!==v._20(l,6).onClick(s)&&a}if("tap"===n){a=!1!==v._20(l.parent,49).select(v._20(l,1))&&a}return a},C.b,C.a)),v._5(6,4898816,null,1,q.a,[v.k],null,null),v._24(603979776,8,{buttonContent:1}),(l()(),v._26(-1,0,["Select"])),(l()(),v._26(9,null,["\n      Some HTML // ","\n      "])),(l()(),v._1(16777216,null,null,1,null,r)),v._5(11,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n      "])),(l()(),v._1(16777216,null,null,1,null,g)),v._5(14,16384,null,0,S.l,[v.P,v.M],{ngIf:[0,"ngIf"]},null),(l()(),v._26(-1,null,["\n    "])),(l()(),v._26(-1,0,["\n  "]))],function(l,n){l(n,1,0,n.context.$implicit.value,n.context.$implicit.selected),l(n,11,0,v._20(n,1).selected),l(n,14,0,v._20(n,1).marked)},function(l,n){l(n,5,0,!0,v._20(n,6).hovered,v._20(n,6).isDisabled,v._20(n,6).selected,v._20(n,6).title),l(n,9,0,n.context.$implicit.name)})}function j(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),v._26(-1,null,["single-select:"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(3,0,null,null,7,"vcl-metalist",[],null,[[null,"change"]],function(l,n,s){var a=!0,t=l.component;if("change"===n){a=!1!==t.onChange(s)&&a}return a},x.b,x.a)),v._23(5120,null,P.j,function(l){return[l]},[T.a]),v._5(5,1097728,[["metalist",4]],1,T.a,[v.h],null,{change:"change"}),v._24(603979776,1,{items:1}),(l()(),v._26(-1,null,["\n  "])),(l()(),v._1(16777216,null,null,1,null,p)),v._5(9,802816,null,0,S.k,[v.P,v.M,v.r],{ngForOf:[0,"ngForOf"]},null),(l()(),v._26(-1,null,["\n"])),(l()(),v._26(-1,null,["\n\n"])),(l()(),v._6(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(14,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),v._26(-1,null,["multi-select:"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(17,0,null,null,7,"vcl-metalist",[["mode","multiple"]],null,[[null,"change"]],function(l,n,s){var a=!0,t=l.component;if("change"===n){a=!1!==t.onChange(s)&&a}return a},x.b,x.a)),v._23(5120,null,P.j,function(l){return[l]},[T.a]),v._5(19,1097728,[["metalist2",4]],1,T.a,[v.h],{mode:[0,"mode"],maxSelectableItems:[1,"maxSelectableItems"]},{change:"change"}),v._24(603979776,3,{items:1}),(l()(),v._26(-1,null,["\n  "])),(l()(),v._1(16777216,null,null,1,null,i)),v._5(23,802816,null,0,S.k,[v.P,v.M,v.r],{ngForOf:[0,"ngForOf"]},null),(l()(),v._26(-1,null,["\n"])),(l()(),v._26(-1,null,["\n\n"])),(l()(),v._6(26,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),v._26(-1,null,["single-select with ngModel:"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(29,0,null,null,10,"vcl-metalist",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,s){var a=!0,t=l.component;if("ngModelChange"===n){a=!1!==(t.value1=s)&&a}return a},x.b,x.a)),v._5(30,1097728,[["metalist3",4]],1,T.a,[v.h],null,null),v._24(603979776,5,{items:1}),v._23(1024,null,P.j,function(l){return[l]},[T.a]),v._5(33,671744,null,0,P.n,[[8,null],[8,null],[8,null],[2,P.j]],{model:[0,"model"]},{update:"ngModelChange"}),v._23(2048,null,P.k,null,[P.n]),v._5(35,16384,null,0,P.l,[P.k],null,null),(l()(),v._26(-1,null,["\n  "])),(l()(),v._1(16777216,null,null,1,null,o)),v._5(38,802816,null,0,S.k,[v.P,v.M,v.r],{ngForOf:[0,"ngForOf"]},null),(l()(),v._26(-1,null,["\n"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(41,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),v._26(42,null,["Current value: ","\n\n"])),(l()(),v._6(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(45,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),v._26(-1,null,["multi-select with ngModel:"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(48,0,null,null,10,"vcl-metalist",[["mode","multiple"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,s){var a=!0,t=l.component;if("ngModelChange"===n){a=!1!==(t.value2=s)&&a}return a},x.b,x.a)),v._5(49,1097728,[["metalist4",4]],1,T.a,[v.h],{mode:[0,"mode"],maxSelectableItems:[1,"maxSelectableItems"]},null),v._24(603979776,7,{items:1}),v._23(1024,null,P.j,function(l){return[l]},[T.a]),v._5(52,671744,null,0,P.n,[[8,null],[8,null],[8,null],[2,P.j]],{model:[0,"model"]},{update:"ngModelChange"}),v._23(2048,null,P.k,null,[P.n]),v._5(54,16384,null,0,P.l,[P.k],null,null),(l()(),v._26(-1,null,["\n  "])),(l()(),v._1(16777216,null,null,1,null,d)),v._5(57,802816,null,0,S.k,[v.P,v.M,v.r],{ngForOf:[0,"ngForOf"]},null),(l()(),v._26(-1,null,["\n"])),(l()(),v._26(-1,null,["\n"])),(l()(),v._6(60,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),v._26(61,null,["Current value: ","\n"]))],function(l,n){var s=n.component;l(n,9,0,s.items);l(n,19,0,"multiple",3),l(n,23,0,s.items),l(n,33,0,s.value1),l(n,38,0,s.items);l(n,49,0,"multiple",3),l(n,52,0,s.value2),l(n,57,0,s.items)},function(l,n){var s=n.component;l(n,29,0,v._20(n,35).ngClassUntouched,v._20(n,35).ngClassTouched,v._20(n,35).ngClassPristine,v._20(n,35).ngClassDirty,v._20(n,35).ngClassValid,v._20(n,35).ngClassInvalid,v._20(n,35).ngClassPending),l(n,42,0,s.value1),l(n,48,0,v._20(n,54).ngClassUntouched,v._20(n,54).ngClassTouched,v._20(n,54).ngClassPristine,v._20(n,54).ngClassDirty,v._20(n,54).ngClassValid,v._20(n,54).ngClassInvalid,v._20(n,54).ngClassPending),l(n,61,0,s.value2)})}function _(l){return v._28(0,[(l()(),v._6(0,0,null,null,1,"ng-component",[],null,null,null,j,$)),v._5(1,49152,null,0,f,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var v=s(3),f=function(){function l(){this.items=[{name:"name 1",value:1},{name:"name 2",value:2},{name:"name 3",value:3,selected:!0},{name:"name 4",value:4},{name:"name 5",value:5}],this.value1=2,this.value2=[4,5]}return l.prototype.onChange=function(l){console.log("metalist change",l)},l}(),b={demo:a},k=function(){function l(){}return l}(),M=s(416),y=s(536),I=s(196),C=s(188),q=s(114),S=s(22),x=s(537),P=s(75),T=s(197),D=[],$=v._4({encapsulation:2,styles:D,data:{}}),w=v._2("ng-component",f,_,{},{},[]),F=s(46),H=s(185),L=s(76),O=s(415),E=s(417),N=s(190),U=s(186),B=s(187),K=s(189),A=s(36),V=s(414);s.d(n,"MetalistDemoModuleNgFactory",function(){return J});var J=v._3(k,[],function(l){return v._17([v._18(512,v.j,v.Z,[[8,[M.a,w]],[3,v.j],v.w]),v._18(4608,S.n,S.m,[v.t,[2,S.t]]),v._18(4608,P.t,P.t,[]),v._18(4608,F.a,F.a,[]),v._18(512,S.c,S.c,[]),v._18(512,P.q,P.q,[]),v._18(512,P.i,P.i,[]),v._18(512,H.a,H.a,[]),v._18(512,L.d,L.d,[]),v._18(512,O.a,O.a,[]),v._18(512,E.a,E.a,[]),v._18(512,N.b,N.b,[]),v._18(512,U.a,U.a,[]),v._18(512,B.a,B.a,[]),v._18(512,K.a,K.a,[]),v._18(512,A.m,A.m,[[2,A.r],[2,A.l]]),v._18(512,k,k,[]),v._18(1024,A.j,function(){return[[{path:"",component:V.a,data:b}]]},[])])})}});