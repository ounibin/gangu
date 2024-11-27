import{_ as a,c as e,o as r,a4 as n}from"./chunks/framework.DF40YQsC.js";const g=JSON.parse('{"title":"Function: launchMiniProgram()","description":"","frontmatter":{},"headers":[],"relativePath":"api/functions/launchMiniProgram.md","filePath":"api/functions/launchMiniProgram.md"}'),o={name:"api/functions/launchMiniProgram.md"},t=n('<p><a href="./../README"><strong>gangu v0.3.0</strong></a> • <strong>Docs</strong></p><hr><p><a href="./../globals">gangu v0.3.0</a> / launchMiniProgram</p><h1 id="function-launchminiprogram" tabindex="-1">Function: launchMiniProgram() <a class="header-anchor" href="#function-launchminiprogram" aria-label="Permalink to &quot;Function: launchMiniProgram()&quot;">​</a></h1><blockquote><p><strong>launchMiniProgram</strong>(<code>params</code>): <code>void</code></p></blockquote><p>web页面中使用 明文URL Scheme 启动小程序</p><p>需要在MP平台-&gt;设置-&gt;隐私与安全-&gt;明文Scheme声明小程序路径。参考: <a href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html#%E6%98%8E%E6%96%87-URL-Scheme" target="_blank" rel="noreferrer">https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html#明文-URL-Scheme</a></p><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h2><p>• <strong>params</strong></p><p>• <strong>params.appId</strong>: <code>string</code></p><p>小程序的appId，用于标识特定的小程序</p><p>• <strong>params.path</strong>: <code>string</code></p><p>小程序的启动路径，用于指定小程序启动时的页面</p><p>• <strong>params.query</strong>: <code>Record</code>&lt;<code>string</code>, <code>any</code>&gt;</p><p>以对象形式传递给小程序的查询参数，用于传递额外信息给小程序的query</p><h2 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h2><p><code>void</code></p><h2 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h2><p><a href="https://github.com/ounibin/gangu/blob/583da0027a4b4e2240511cca35041b0f43f63eca/src/launchMiniProgram.ts#L11" target="_blank" rel="noreferrer">launchMiniProgram.ts:11</a></p>',19),i=[t];function c(s,p,d,h,l,m){return r(),e("div",null,i)}const f=a(o,[["render",c]]);export{g as __pageData,f as default};
