webpackJsonp([6],{1078:function(t,e){t.exports='<h1 id="vcl-json-editor">vcl-json-editor</h1>\n<p>A json-editor based on <a href="https://github.com/josdejong/jsoneditor">jsoneditor</a>.</p>\n<h2 id="installation">Installation</h2>\n<pre class="hljs">npm install @ng-vcl/json-editor --save\n</pre>\n<h2 id="usage-">Usage:</h2>\n<pre class="hljs"><span class="hljs-keyword">import</span> { VCLJsonEditorModule } <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;ng-vcl&apos;</span>;\n\n@NgModule({\n  <span class="hljs-attr">imports</span>: [ VCLJsonEditorModule ],\n  ...\n})\n<span class="hljs-keyword">export</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AppComponent</span> </span>{}\n</pre>\n<pre class="hljs"><span class="hljs-tag">&lt;<span class="hljs-name">vcl-json-editor</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">&quot;myObject&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-json-editor</span>&gt;</span>\n</pre>\n<h3 id="api">API</h3>\n<h4 id="vcl-json-editor-properties-">vcl-json-editor properties:</h4>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><code>mode</code></td>\n<td>string</td>\n<td>&apos;tree&apos;</td>\n<td>Editormode ENUM(&apos;tree&apos;,&apos;form&apos;,&apos;text&apos;,&apos;view&apos;)</td>\n</tr>\n<tr>\n<td><code>height</code></td>\n<td>string</td>\n<td>&apos;250px&apos;</td>\n<td>height of the editor-window</td>\n</tr>\n<tr>\n<td><code>value</code></td>\n<td>string</td>\n<td>{}</td>\n<td>An Object to begin editing with</td>\n</tr>\n<tr>\n<td><code>options</code></td>\n<td>object</td>\n<td>{}</td>\n<td>Any jsoneditor specific content. See <a href="https://github.com/josdejong/jsoneditor/blob/master/docs/api.md">JSON-EDITOR-API</a></td>\n</tr>\n</tbody>\n</table>\n'},1079:function(t,e){t.exports='<span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>JSON-Editor:<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">br</span>/&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">vcl-json-editor</span> [<span class="hljs-attr">value</span>]=<span class="hljs-string">"myObject"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">vcl-json-editor</span>&gt;</span>\n\n'},1080:function(t,e){t.exports='<span class="hljs-keyword">import</span> { Component, OnInit } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'app\'</span>,\n  templateUrl: <span class="hljs-string">\'demo.component.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> JsonEditorDemoComponent  {\n  myObject: <span class="hljs-built_in">Object</span> = {\n    foo: <span class="hljs-string">"bar"</span>,\n    names: [\n      <span class="hljs-string">\'alice\'</span>,\n      <span class="hljs-string">\'bob\'</span>,\n      <span class="hljs-string">\'carol\'</span>\n    ]\n  };\n}\n'},1081:function(t,e,i){/*!
 * jsoneditor.js
 *
 * @brief
 * JSONEditor is a web-based tool to view, edit, format, and validate JSON.
 * It has various modes such as a tree editor, a code editor, and a plain text
 * editor.
 *
 * Supported browsers: Chrome, Firefox, Safari, Opera, Internet Explorer 8+
 *
 * @license
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy
 * of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 * Copyright (c) 2011-2017 Jos de Jong, http://jsoneditoronline.org
 *
 * @author  Jos de Jong, <wjosdejong@gmail.com>
 * @version 5.11.0
 * @date    2017-11-22
 */