var UA=(function(b,i){var j={ie:"msie",sf:"safari",tt:"tencenttraveler"},c={browser:"("+j.ie+"|"+j.sf+"|firefox|chrome|opera)",shell:"(maxthon|360se|theworld|se|theworld|greenbrowser|qqbrowser)",tt:"(tencenttraveler)",os:"(windows nt|macintosh|solaris|linux)"},f=function(m){var l=new RegExp(m+"\\b[ \\/]?([\\w\\.]*)","i"),k=i.match(l);return k?k.slice(1):["",""]},a=function(){var k=i.toLowerCase().indexOf("360chrome")>-1?!!1:!1,l;try{if(b.external&&b.external.twGetRunPath){l=b.external.twGetRunPath;if(l&&l.toLowerCase().indexOf("360se")>-1){k=!!1}}}catch(m){k=!1}return k}(),e=function(){try{if(/(\d+\.\d)/.test(external.max_version)){return parseFloat(RegExp["\x241"])}}catch(k){}}(),g=f(c.browser),h=f(c.shell),d=f(c.os);if(g[0].toLowerCase()===j.ie){if(a){h=["360se",""]}else{if(e){h=["maxthon",e]}else{if(h==","){h=f(c.tt)}}}}else{if(g[0].toLowerCase()===j.sf){g[1]=f("version")+"."+g[1]}}return{browser:g.join(","),shell:h.join(","),os:d.join(",")}})(window,navigator.userAgent);var indexSetHome={config:{helpUrl:"https://www.hao123.com/redian/sheshouyef.htm",shell:{"360se":"02",maxthon:"03",se:"04",qqbrowser:"05",theworld:"10",greenbrowser:"12"},browser:{firefox:"ff",chrome:"08",opera:"09",safari:"11"}},set:function(d,b){var g=UA.browser.split(",")[0].toLowerCase(),h=UA.shell.split(",")[0].toLowerCase(),f=this.config,j=f.helpUrl,c="����������֧�֣����ֶ�����",a=function(){try{d.style.behavior="url(#default#homepage)";d.setHomePage(b)}catch(k){alert(c)}};if(g==="msie"&&(!h||h==="tencenttraveler")){a();return false}else{if(h&&f.shell[h]){j+="#"+f.shell[h];if(h==="maxthon"){try{if(external.max_version){window.open(j);return false}else{a();return false}}catch(i){a();return false}}else{window.open(j);return false}}else{if(f.browser[g]){if(g==="chrome"){try{if(external.max_version){j+="#03";window.open(j);return false}else{j+="#"+f.browser[g];window.open(j);return false}}catch(i){j+="#"+f.browser[g];window.open(j);return false}}else{j+="#"+f.browser[g];window.open(j);return false}}else{alert(c);return false}}}},bind:function(c,b){c=typeof c==="string"?document.getElementById(c):c;b=b||"https://www.hao123.com";var d=this,a=document.addEventListener?function(f,e,g){f.addEventListener(e,g,!1)}:function(f,e,g){f.attachEvent("on"+e,g)};a(c,"click",function(){d.set(c,b);return false});return this}};function hasClass(b,a){return -1<(" "+b.className+" ").indexOf(" "+a+" ")}function addClass(b,a){if(!hasClass(b,a)){b.className+=" "+a}}function removeClass(c,a){if(hasClass(c,a)){var b=new RegExp("(\\s|^)"+a+"(\\s|$)");c.className=c.className.replace(b," ")}}function showOrHideClass(b,a){if(hasClass(b,a)){removeClass(b,a)}else{addClass(b,a)}}(function(){function a(b,d){for(var c in d){b[c]=d[c]}return b}a(Object,{extend:a})})();Object.extend(String,(function(){function a(c){var b=Array.prototype.slice.call(arguments,1);return c.replace(/{\d}/g,function(e){var d=e.charAt(1);return b[d]})}return{format:a}})());window.Hao={_collectPage:window.pageId,setCollectPage:function(a){this._collectPage=a},collect:function(a){var c="https://www.hao123.com/images/track.gif",e=new Date().getTime(),g={level:2,page:this._collectPage,r:e},d,f,b=[];Object.extend(g,a);for(d in g){b.push(encodeURIComponent(d)+"="+encodeURIComponent(g[d]))}d="collector"+e;window[d]=f=new Image();f.onload=f.onerror=function(){window[d]=null};g.r=d;f.src=String.format("{0}?{1}",c,b.join("&"))},collectAll:function(d,a,f){var e={isTakeName:false,tagName:"a",deepth:1};Object.extend(e,f);Hao.bind(d,"mousedown",function(j){var h=j.target,i=b(Hao.fineEvent(j),e);if(i){if("[object String]"==Object.prototype.toString.call(a)){a={type:a}}var g=i.getAttribute("data-collect");if(g){g=Hao.parseJson(g);Object.extend(a,g)}if(e.isTakeName){a.name=j.target.innerHTML}Hao.collect(a)}});function c(h,g){if(h.tagName.toLowerCase()!=g.tagName){return false}if(g.className&&g.className!=h.className){return false}return true}function b(j,g){var i=g.deepth;if(c(j.target,g)){return j.target}while(i>=0){var h=j.target.parentNode;if(!h){return false}if(c(h,g)){return h}i--}return false}}};Hao.Hover=function(d,b){if(d.length){for(var c=0,a=d.length;c<a;c++){d[c].onmouseenter=function(){addClass(this,b)};d[c].onmouseleave=function(){removeClass(this,b)}}}else{d.onmouseenter=function(){addClass(this,b)};d.onmouseleave=function(){removeClass(this,b)}}};Hao.setPNG=function(a,b){a.style.filter=String.format("filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=noscale, src='{0}')",b);a.style.background="none"};Hao.Fill=function(c,d,g,b,h){var j=[],f;if(typeof c=="string"){c=document.getElementById(c)}if(b){j.push(b(d))}for(var e=0;e<d.length;e++){f=d[e].cname?String.format('class="{0}"',d[e].cname):"";var a=g(d[e],f);if(typeof a=="string"){j.push(a)}else{j.concat(a)}}if(h){j.push(h(d))}c.innerHTML=j.join("")};Hao.Cookie=(function(){var e=document,b=new Date(),c=b.getFullYear(),d=b.getMonth(),a=b.getDate();return{setCookie:function(f){var g=f.name+"="+encodeURIComponent(f.value);if(f.expires){g+=";expires="+f.expires.toGMTString()}if(f.path){g+=";path="+f.path}if(f.domain){g+=";domain="+f.domain}if(f.bSecure){g+=";secure"}e.cookie=g},getCookie:function(f){var g=new RegExp("(?:; )?"+f+"=([^;]*);?");if(g.test(e.cookie)){return decodeURIComponent(RegExp["$1"])}else{return null}},getExpires:function(f){var g=c,h=d,i=a;if(f.year){g=c+f.year}if(f.month){h=d+f.month}if(f.day){i=a+f.day}return new Date(g,h,i)}}})();Hao.DataLoader=function(){function b(){if(typeof XMLhttps://nssug.baidu.com/su";var d={prod:l};var q="wd";var m="baidu.sug";var n="s";switch(l){case"web":p="https://suggestion.baidu.com/su";break;case"tieba":d={callback:"baiduSugTieba",sc:"hao123"};p="https://tieba.baidu.com/sug";q="query";m="baiduSugTieba";n="msg";break;case"img":l="image";d={prod:l};break}testSug=G.sug("search-input-word",{classNameQuery:"sug-query",classNameQueryNull:"sug-querynull",charset:"gbk",requestQuery:q,requestParas:d,url:p,callbackFn:m,callbackDataKey:n})});function b(e,d){if(d=="tieba"){e.action="https://tieba.baidu.com/f"}else{if(d=="img"){e.action="https://image.baidu.com/i";T.g("search-args").innerHTML='<input type="hidden" name="tn" value="baiduimage"><input type="hidden" name="ct" value="201326592"><input type="hidden" name="cl" value="2"><input type="hidden" name="lm" value="-1"><input type="hidden" name="fm" value="hao123">'}else{if(d=="zhidao"){e.action="https://zhidao.baidu.com/q";T.g("search-args").innerHTML='<input type="hidden" name="tn" value="ikaslist"><input type="hidden" name="ct" value="17"><input type="hidden" name="sc" value="hao123"><input type="hidden" name="rn" value="20">'}else{if(d=="web"){e.action="https://www.baidu.com/s";T.g("search-args").innerHTML='<input type="hidden" name="tn" value="sitehao123">'}else{if(d=="mp3"){e.action="https://mp3.baidu.com/m";T.g("search-args").innerHTML='<input type="hidden" name="tn" value="baidump3"><input type="hidden" name="ct" value="134217728"><input type="hidden" name="sc" value="hao123">'}else{if(d=="news"){e.action="https://news.baidu.com/ns";T.g("search-args").innerHTML='<input type="hidden" name="tn" value="news"><input type="hidden" name="sc" value="hao123">'}else{if(d=="video"){e.action="https://video.baidu.com/v";T.g("search-args").innerHTML='<input type="hidden" name="sc" value="hao123">'}}}}}}}return true}})();