if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),f={module:{uri:n},exports:r,require:t};s[n]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"5916d8935cf91f366d4233ef76114f36"},{url:"/_next/static/chunks/2-5adea2d003e9dc48.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/222-d70ff80a55999c78.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/2631e2f4-eb8a6a6f85524f4e.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/337-85026dce9a641e95.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/36546cfe-59dcfd84504e0c26.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/401-c4602874a2aaacea.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/4e6af11a-81cb2dfd058ce8fc.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/531-39b7dfd41ec4bde6.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/587.1fcb76c62bdb47d6.js",revision:"1fcb76c62bdb47d6"},{url:"/_next/static/chunks/642-fcc93260bdafbf13.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/654-6c32215f6f56bcb2.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/9081a741-0937fe4539fc2bf4.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/938-510d307cf3a17a6e.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/_not-found-2ff84f2eae8a6940.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/AdminDashboardSlotPerson/page-0c79f27a2174da57.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/BusinessDashbord/page-b3652b13b74aaf46.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/EmailLoginpage/page-6dc41f6822b12479.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/Index/page-1ab2bee967e8f254.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/Locationpage/page-efbaaee3bde39999.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/Loginpage/page-d639f5dcf9bf6c9a.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/Profilepage/page-fa204665daa0c1ce.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/Signuppage/page-bb9b1a0af994e4eb.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/home/page-151cab031614e122.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/location/page-61703d03b679cb80.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/login_signup/page-eb22eb80c0cb8fc7.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/newpage/page-ff0e479b7d1fedc1.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/qrcode/page-a4a7368f5e469df1.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/jiffybook/signup/page-a0484e171296688a.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/layout-9942ac2096dfb6f2.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/app/page-b47270e1b886d91b.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/bc9e92e6-cbe0e894cc0acc3a.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/ca377847-48a9a88ae35daaf7.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/fd9d1056-de531f9907be2833.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/main-676761708d02a500.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/main-app-a0d3ec7d186d89ec.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-11fd67dd536626dc.js",revision:"rR6Zn3bsJgzc3MSsc3yX7"},{url:"/_next/static/css/0ca9f85f13530352.css",revision:"0ca9f85f13530352"},{url:"/_next/static/css/2520e19fee9369b9.css",revision:"2520e19fee9369b9"},{url:"/_next/static/css/25595ea20193c1af.css",revision:"25595ea20193c1af"},{url:"/_next/static/css/40a1dea8c5662779.css",revision:"40a1dea8c5662779"},{url:"/_next/static/css/56578300679f0b0f.css",revision:"56578300679f0b0f"},{url:"/_next/static/css/753523eb80978acb.css",revision:"753523eb80978acb"},{url:"/_next/static/css/94662c5f7a46a6dc.css",revision:"94662c5f7a46a6dc"},{url:"/_next/static/css/94c4a512c373f742.css",revision:"94c4a512c373f742"},{url:"/_next/static/css/bc536431352d601b.css",revision:"bc536431352d601b"},{url:"/_next/static/css/d394084260bb8e7b.css",revision:"d394084260bb8e7b"},{url:"/_next/static/css/d647ea645c9b4d39.css",revision:"d647ea645c9b4d39"},{url:"/_next/static/css/d72a76d608bb452c.css",revision:"d72a76d608bb452c"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/backgroundimage.b51c7ee5.png",revision:"b51c7ee5"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/rR6Zn3bsJgzc3MSsc3yX7/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/rR6Zn3bsJgzc3MSsc3yX7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/image/Picture1.png",revision:"6e283a8d25a87efec63fe1d560336eb7"},{url:"/image/appicon_192.png",revision:"d80b727dded9a1be4174eedf17760729"},{url:"/image/apple.svg",revision:"a3242e77a57db03b782a7d1286ff93a3"},{url:"/image/arrowaltcircleleft.svg",revision:"7b26158bbb6fb82951b3dbe3e3ab0bce"},{url:"/image/arrowcircleup@2x.png",revision:"b6ca0cba9549df7e772f54dc1e1c19b9"},{url:"/image/back.svg",revision:"aba1edfa6b86883657103bd232895eee"},{url:"/image/caretdown.svg",revision:"3b7691653a83d0149b62fd46abd0ba7c"},{url:"/image/caretdown1.svg",revision:"55d449995614016cd1fc01b2df8b68b3"},{url:"/image/ellipse-1@2x.png",revision:"0ee60b679b6e6289a7514eb423078c25"},{url:"/image/email.svg",revision:"775852d240d3abb34f8e43a5c94f0795"},{url:"/image/envelopeopentext.svg",revision:"6594bb56cdd73aaf114d3323488fbfb7"},{url:"/image/google.svg",revision:"a546205e0bdb80897aa92891c0cd5add"},{url:"/image/index.html",revision:"2641c597f81c24ac7afba069bf9cafd3"},{url:"/image/logo.png",revision:"0a0b0d955d22a4fa93a48b4e3d30c0e9"},{url:"/image/moneybillalt@2x.png",revision:"ffdbd651e5e2a64efb5df06702677e7f"},{url:"/image/rectangle@2x.png",revision:"d3d57cdb1589413fb4bd37ceab91f9f5"},{url:"/image/s01@3x.png",revision:"d0d5eb51cba346e148922a2c02a926c7"},{url:"/image/s06@3x.png",revision:"52a6afebd2d9552ffb4e697c210409d1"},{url:"/image/shoppingcart@2x.png",revision:"bde5f5973990b6b0780d3f2f9abb974e"},{url:"/image/users@2x.png",revision:"aa15c1bae512082433928c5fc3b371ab"},{url:"/image/vector.svg",revision:"5719642087c17fb52ffee361f3fd512e"},{url:"/image/windows.svg",revision:"238adf8fe7220e424fa9c9605cf6ec13"},{url:"/manifest.json",revision:"038198df4e34e0a9e279b27988075472"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker 2.js",revision:"1347efb32e12d776d6505769f6c1aa8b"},{url:"/service-worker 3.js",revision:"f324fed26b85a01ddfc5f79671ef52a5"},{url:"/service-worker 4.js",revision:"1347efb32e12d776d6505769f6c1aa8b"},{url:"/service-worker 5.js",revision:"1347efb32e12d776d6505769f6c1aa8b"},{url:"/sw.js",revision:"8b9bd3abef0b653c0e9edc3b49db6acc"},{url:"/sw.js.map",revision:"a34abc6e7067d35431ef822e3948417c"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
