import{_ as e,c as a,o as r,a4 as t}from"./chunks/framework.BIBj-nLj.js";const f=JSON.parse('{"title":"Class: BiMap","description":"","frontmatter":{},"headers":[],"relativePath":"api/classes/BiMap.md","filePath":"api/classes/BiMap.md"}'),o={name:"api/classes/BiMap.md"},n=t('<p><a href="./../README"><strong>gangu v0.3.0</strong></a> • <strong>Docs</strong></p><hr><p><a href="./../globals">gangu v0.3.0</a> / BiMap</p><h1 id="class-bimap" tabindex="-1">Class: BiMap <a class="header-anchor" href="#class-bimap" aria-label="Permalink to &quot;Class: BiMap&quot;">​</a></h1><p>BiMap 类用于实现双向映射，即可以通过键找到值，也可以通过值找到键。 它维护两个内部 Map 对象，一个用于正向映射（键到值），另一个用于反向映射（值到键）。</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-bimap" tabindex="-1">new BiMap() <a class="header-anchor" href="#new-bimap" aria-label="Permalink to &quot;new BiMap()&quot;">​</a></h3><blockquote><p><strong>new BiMap</strong>(<code>obj</code>): <a href="./BiMap"><code>BiMap</code></a></p></blockquote><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>obj</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./BiMap"><code>BiMap</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/ounibin/gangu/blob/dda3d2ccfcf52aa63dc56f8f870108571bbb5e36/src/BiMap.ts#L9" target="_blank" rel="noreferrer">BiMap.ts:9</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="forwardobj" tabindex="-1">forwardObj <a class="header-anchor" href="#forwardobj" aria-label="Permalink to &quot;forwardObj&quot;">​</a></h3><blockquote><p><strong>forwardObj</strong>: <code>Map</code>&lt;<code>string</code>, <code>unknown</code>&gt;</p></blockquote><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/ounibin/gangu/blob/dda3d2ccfcf52aa63dc56f8f870108571bbb5e36/src/BiMap.ts#L6" target="_blank" rel="noreferrer">BiMap.ts:6</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getkey" tabindex="-1">getKey() <a class="header-anchor" href="#getkey" aria-label="Permalink to &quot;getKey()&quot;">​</a></h3><blockquote><p><strong>getKey</strong>(<code>value</code>): <code>string</code></p></blockquote><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>value</strong>: <code>unknown</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/ounibin/gangu/blob/dda3d2ccfcf52aa63dc56f8f870108571bbb5e36/src/BiMap.ts#L23" target="_blank" rel="noreferrer">BiMap.ts:23</a></p><hr><h3 id="getvalue" tabindex="-1">getValue() <a class="header-anchor" href="#getvalue" aria-label="Permalink to &quot;getValue()&quot;">​</a></h3><blockquote><p><strong>getValue</strong>(<code>key</code>): <code>unknown</code></p></blockquote><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>key</strong>: <code>string</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>unknown</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/ounibin/gangu/blob/dda3d2ccfcf52aa63dc56f8f870108571bbb5e36/src/BiMap.ts#L19" target="_blank" rel="noreferrer">BiMap.ts:19</a></p>',37),i=[n];function s(d,c,l,h,p,u){return r(),a("div",null,i)}const g=e(o,[["render",s]]);export{f as __pageData,g as default};