var STOREDATA=STORETOOL;var COUNTER=0;function fnInitRecent(){var c=fnGetCookie("hao123_tool_recent");var f=$('.all_item_container[sub_toolkit="recent"]');if(!c){f.find(".tool_bd").empty();f.find(".tool_bd").html('<a class="recent_empty" style="display: block;">鏆傛棤浣跨敤宸ュ叿</a>');$(".recent_empty",f).css("display","block");return}$(".list_use span",f).css("display","block");$.each(c,function(l,o){var m=o.top_toolkit;var j=o.sub_toolkit;var q=o.tool_id;var k=ALLTOOLDATA;var n;var h;var i;var g=$('<li class="txt_item clearfix"/>');if(typeof k[m][j][q]=="undefined"){return}n=k[m][j][q];h=n.type;var p='<div class="tool_title clearfix"><a href="'+n.href+'" class="visited"  target="_blank">'+n.title+"</a></div>";g.attr({top_toolkit:m,sub_toolkit:j,tool_id:q}).html(p).appendTo($(".recent_tool",f))});var a=$(".recent_tool li",f);var b=(a.length%5)==0?5:(a.length%5);for(var d=a.length-1;d>a.length-1-b;d--){$(a[d]).addClass("last_line")}var e="<li></li>";if(a.length==0){f.find(".tool_bd").empty();f.find(".tool_bd").html('<a class="recent_empty" style="display: block;">鏆傛棤浣跨敤宸ュ叿</a>');$(".recent_empty",f).css("display","block")}}function fnGetStoreTool(g,b){var j=g;var h=b;var a=0;$.each(h,function(p,w){var t=w.top_toolkit;var v=w.sub_toolkit;var A=w.tool_id;var n=ALLTOOLDATA;var m;var q;var y;var s=$("<li/>");if(typeof n[t][v][A]=="undefined"){return}m=n[t][v][A];q=m.type;if(q=="text"){a=a+1;y=$(".txt_tool_list",j);var k=$('<div class="tool_title clearfix" />');var x='<a href=" '+m.href+'" class="visited" target="_blank">'+m.title+'</a><span class="'+m.status+'"></span>';k.html(x);s.addClass("txt_item").attr({tool_id:A,sub_toolkit:v,top_toolkit:t}).html('<div class="operate_del"></div>').prepend(k).appendTo(y)}if(q=="form"){y=$(".icon_tool_list",j);var B=$('<a class="item_icon_wraper fl visited" href="'+m.href+'" target="_blank"/>').html('<span class="icon_wrapper"></span><img class="item_icon" height="32" width="32" src="'+m.bg+'"/>');var o=$('<form class="des_content fl" />');var E=$('<div class="clearfix" />');E.html('<a class="tool_title fl visited" title="'+m.title+'" href="'+m.href+'" target="_blank"> '+m.title+' </a><span class="'+m.status+'"></span>');var i=$("<div />");var z;var l=m.param.split(",");var u=m.hiddenParam!=undefined?m.hiddenParam.split(","):0;if(l.length==2){z='<input class="des_from fl" type="text" value="'+m.ltip+'" name="'+l[0]+'"defaultTxt="'+m.ltip+'"/><input class="des_to fl" type="text" value="'+m.rtip+'" name="'+l[1]+'"defaultTxt="'+m.rtip+'"/><button class="find fl visited" type="submit"></button>'}if(l.length==1){z='<input class="icon_key fl" type="text" value="" name="'+l[0]+'" defaultTxt=""><button class="find fl visited" type="submit"></button>'}for(var p=0;p<u.length;p++){var D=u[p].split("=")[0];var C=u[p].split("=")[1];z=z+'<input type="hidden" name="'+D+'" value="'+C+'" />'}i.html(z);var r=$('<div class="operate_del">');o.attr({action:m.href,target:"_blank",mehtod:"get"}).append(E).append(i);s.addClass("icon_item").attr({tool_id:A,sub_toolkit:v,top_toolkit:t}).append(B).append(o).append(r).appendTo(y)}if(q=="icon"){y=$(".icon_tool_list",j);var B=$('<a class="item_icon_wraper fl visited" href="'+m.href+'" target="_blank"/>').html('<span class="icon_wrapper"></span><img class="item_icon" height="32" width="32" src="'+m.bg+'"/>');var E=$('<div class="icon_status clearfix"/>');E.html('<a class="tool_title fl visited" target="_blank" title="'+m.title+'" href="'+m.href+'"> '+m.title+' </a><span class="'+m.status+'"></span>');var i=$("<div />");var z='<span class="describe"></span>';i.html(z);var r=$('<div class="operate_del">');s.addClass("icon_item").attr({tool_id:A,sub_toolkit:v,top_toolkit:t}).append(B).append(E).append(i).append(r).appendTo(y)}});var d=$(".txt_tool_list li");var f=(d.length%5)==0?5:(d.length%5);for(var c=d.length-1;c>d.length-1-f;c--){$(d[c]).addClass("last_line")}var e=$(".icon_tool_list li");var f=(e.length%4)==0?4:(e.length%4);for(var c=e.length-1;c>e.length-1-f;c--){$(e[c]).css("margin","0 10px 0px 0")}if($(".icon_tool_list li").length==0){$(".icon_tool_list").removeClass();$(".txt_tool_list").css("margin","-11px 0 0 0")}if($(".txt_tool_list li").length==0){$(".txt_tool_list").css("display","none")}if($(".icon_tool_list li").length==0&&$(".txt_tool_list li").length==0){$('.all_item_container[sub_toolkit="store"] .tool_bd').empty().html('<a class="store_empty" style="display: block;">鏆傛棤鏀惰棌宸ュ叿</a>')}}function fnInitStore(){var b=STOREDATA;var c=$('.all_item_container[sub_toolkit="store"]');var a=fnGetCookie("hao123_tool_store")||"";if((a==null)&&(!b)){$(".store_empty",c).css("display","block");return}if(a){fnGetStoreTool(c,a);return}fnGetStoreTool(c,b)}function fnInitDelEvent(){var a=$(".all_item_container .operate_del");a.click(function(){var n=this;var l=$(".all_item_container li").has(this).attr("top_toolkit");var c=$(".all_item_container li").has(this).attr("sub_toolkit");var m=$(".all_item_container li").has(this).attr("tool_id");var b=fnGetCookie("hao123_tool_store")?fnGetCookie("hao123_tool_store"):STOREDATA;var d={};d.top_toolkit=l;d.sub_toolkit=c;d.tool_id=m;for(var j=0;j<b.length;j++){var k=b[j];if(k.top_toolkit==d.top_toolkit&&k.sub_toolkit==d.sub_toolkit&&k.tool_id==d.tool_id){b.splice(j,1);fnSetCookie("hao123_tool_store",baidu.json.stringify(b));break}}$(n).parent().remove();var f=$(".txt_tool_list li");var h=(f.length%5)==0?5:(f.length%5);f.removeClass("last_line");for(var e=f.length-1;e>f.length-1-h;e--){$(f[e]).addClass("last_line")}var g=$(".icon_tool_list li");var h=(g.length%4)==0?4:(g.length%4);g.removeAttr("style");for(var e=g.length-1;e>g.length-1-h;e--){$(g[e]).css("margin","0 10px 0px 0")}if($(".icon_tool_list li").length==0){$(".icon_tool_list").removeClass();$(".txt_tool_list").css("margin","-11px 0 0 0")}if($(".txt_tool_list li").length==0){$(".txt_tool_list").css("display","none")}if($(".icon_tool_list li").length==0&&$(".txt_tool_list li").length==0){$('.all_item_container[sub_toolkit="store"] .tool_bd').empty().html('<a class="store_empty" style="display: block;">鏆傛棤鏀惰棌宸ュ叿</a>')}})}function fnTackToolClick(){var a=$(".visited");a.click(function(){var h=$(".all_item_container li").has(this).attr("top_toolkit");var g=$(".all_item_container li").has(this).attr("sub_toolkit");var e=$(".all_item_container li").has(this).attr("tool_id");var d=fnGetCookie("hao123_tool_recent")||[];var f={};f.top_toolkit=h;f.sub_toolkit=g;f.tool_id=e;if(d.length==0){d.push(f);fnSetCookie("hao123_tool_recent",baidu.json.stringify(d));return}for(var c=0;c<d.length;c++){var b=d[c];if(b.top_toolkit==f.top_toolkit&&b.sub_toolkit==f.sub_toolkit&&b.tool_id==f.tool_id){d.splice(c,1);break}if(c==9){d.pop();break}if(c==d.length-1){break}}d.unshift(f);fnSetCookie("hao123_tool_recent",baidu.json.stringify(d))});a.mousedown(function(){var e=$(".all_item_container li").has(this).attr("top_toolkit");var d=$(".all_item_container li").has(this).attr("sub_toolkit");var c=$(".all_item_container li").has(this).attr("tool_id");var b=ALLTOOLDATA[e][d][c].title;UserTrack.send({level:"2",page:pageId,type:"click",toolType:d,title:encodeURIComponent(b)},"https://www.hao123.comm/images/track.gif")})}function fnInitEmptyRecentUse(){$(".list_use span").click(function(){var b=this;fnSetCookie("hao123_tool_recent","");var h='<a class="recent_empty" style="display:block;">鏆傛棤浣跨敤宸ュ叿</a>';$(".all_item_container").has(this).find(".tool_bd").empty();$(".all_item_container").has(this).find(".tool_bd").html(h);$(b).css("display","none");var e=$('<div class="overlay"/>');var c='<div class="tips_overlay"></div> <div class="empty_tips"><span class="succ">鎴愬姛娓呯┖浣跨敤璁板綍</span></div>';var g=$(document).height()>$(window).height()?$(document).height():$(window).height();var f=$(document).width()>$(window).width()?$(document).width():$(window).width();e.html(c).appendTo("body");var a=($(window).width()-200)/2;var d=($(window).height()-60)/2;$(".tips_overlay",e).css({height:g,width:f});$(".empty_tips",e).css({left:a,top:d});e.css("display","block");$(".empty_tips").fadeIn("slow",function(){setTimeout(function(){$(".empty_tips").fadeOut("slow",function(){$(".tips_overlay").fadeOut("fast")})},1000)})})}function init(){fnInitRecent();fnInitStore();fnInitDelEvent();fnTackToolClick();fnInitEmptyRecentUse()}(function(){var b=document.GlobalSharedObject;var a=document.documentMode&&document.documentMode==9;if(++COUNTER>10){return}if((Browser.isIE&&!a)||Browser.isFF){init();return}else{if(b&&b.get){init()}else{setTimeout(arguments.callee,64)}}})();