// JavaScript Document

$(document).ready(function(){

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
});

<!--���չ�����ý���-->
function changeBody(index) { 
$(".skinbox").hide(); 
$("#ContentMenu" + index).show(0); 
} 

<!--Ƥ��TAG�л�-->
$(document).ready(function(){

    var $li=$(".my_skin>li a");
    $li.click(function(){
           setstyle(this.id);
    });   
    var skinname=$.cookie("MySkin");   
    if(skinname)
    {
       setstyle(skinname);
    }
       
    function setstyle(name)
    {
      $("#"+name).addClass("selected").siblings().removeClass("selected");
       $("#mystyle").attr("href","/Skins/mb/css/"+(name)+".css");
       $.cookie("MySkin",name,{expires:10,path:'/'});
    }
   
});
<!--Ƥ��TAG�л�-->
$(document).ready(function(){

    var $li=$(".skinok2>a");
    $li.click(function(){
           setstyle(this.id);
    });   
    var skinname=$.cookie("MySkin");   
    if(skinname)
    {
       setstyle(skinname);
    }
       
    function setstyle(name)
    {
      $("#"+name).addClass("selected").siblings().removeClass("selected");
       $("#mystyle").attr("href","/Skins/mb/css/"+(name)+".css");
       $.cookie("MySkin",name,{expires:10,path:'/'});
    }
   
});

<!--���������ļ�����-->






// ����Ϊ��ҳ 
function SetHome(obj,vrl){ 
try{ 
obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
} 
catch(e){ 
if(window.netscape) { 
try { 
netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
} 
catch (e) { 
alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�"); 
} 
var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
prefs.setCharPref('browser.startup.homepage',vrl); 
}else{ 
alert("�����������֧�֣��밴�����沽�������1.����������á�2.���������ҳ��3.���룺"+vrl+"���ȷ����"); 
} 
} 
} 
// �����ղ� ����360��IE6 
function shoucang(sTitle,sURL) 
{ 
try 
{ 
window.external.addFavorite(sURL, sTitle); 
} 
catch (e) 
{ 
try 
{ 
window.sidebar.addPanel(sTitle, sURL, ""); 
} 
catch (e) 
{ 
alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������"); 
} 
} 
} 
