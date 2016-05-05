// JavaScript Document
//折叠
$(".collapse").css("height","0");
$(".accordion-group .topBox").click(function(){
	zhedie($(this));
	$(this).children("*").children(".icon").toggleClass("active");
});
function accordionL(){
	$(".accordion-group .topBox").click(function(){
		zhedie($(this));
	});
}
function zhedie(i){
	var a = i.next().height();
	var h = i.next().children().height();
	if(a == 0){
		i.next().css("height",h);
	}else{
		i.next().css("height","0");
	}
}
//导航条下拉菜单
$(".nav .navR").click(function(){
	$(".navRList").toggle();
	$(".Graylevel").toggle();
});
$(".navRListBox li").click(function(){
	$(".navRList").toggle();
	$(".Graylevel").toggle();
});
$(".Graylevel").click(function(){
	$(".navRList").toggle();
	$(".Graylevel").toggle();
});
//拟态对话框
function modal(i){
	i.show();
	$(".modal-backdrop").show();
	setTimeout(function(){$(".modal-backdrop").addClass("in");
	i.addClass("in");
	},4);
}
function modalD(i){
	i.removeClass("in");
	$(".modal-backdrop").removeClass("in");
	setTimeout(function(){
		$(".modal-backdrop").hide();
		i.hide();
	},150);
}

$(".releaseList .indexesList").hide();
$(".releaseList .ctrl .g1").click(function(){
	$(".releaseList .ctrl div").removeClass("active");
	$(this).addClass("active");
	$(".releaseList .hotList").show();
	$(".releaseList .indexesList").hide();
});
$(".releaseList .ctrl .g2").click(function(){
	$(".releaseList .ctrl div").removeClass("active");
	$(this).addClass("active");
	$(".releaseList .hotList").hide();
	$(".releaseList .indexesList").show();
});
$('#search input').bind('input propertychange', function(){
	
});
//$(".searchBox .menu").hide();
//$(".searchBox .input").click(function(){
//	$(".searchBox .menu").show();
//});
//$(".searchBox .input").blur(function(){
//	$(".searchBox .menu").hide();
//});
//foot
//$(".foot li").click(function(){
//	$(".foot .active").removeClass("active");
//	$(this).addClass("active");
//	for(i=0;i<4;i++){
//		var s = $(".foot li:eq("+i+")").find(".icon").attr("class").split(' ')[1];
//		$(".foot li:eq("+i+")").find(".icon").removeClass(s);
//		if(s.indexOf("_a") > -1){
//			s=s.substring(0,s.length-2);
//		}
//		$(".foot li:eq("+i+")").find(".icon").addClass(s);	
//	}
//	var t2 = $(this).find(".icon").attr("class").split(' ');
//	$(this).find(".icon").removeClass(t2[1]);
//	t2[1]+="_a";	
//	$(this).find(".icon").addClass(t2[1]);
//});
if($(".nav").length > 0 ) { 
  $("<div style='width:100%; height:"+$(".nav").height()+"px'>").prependTo("body");
}
if($(".foot").length > 0 && $(".foot2").length == 0 && $(".foot3").length == 0) { 
  $("<div style='width:100%; height:"+$(".foot").height()+"px;padding:0.1em 0;'>").appendTo("body");
}
if($(".foot2").length > 0 ) { 
  $("<div style='width:100%; height:"+$(".foot2").height()+"px;'>").appendTo("body");
}
if($(".foot3").length > 0 ) { 
  $("<div style='width:100%; height:"+$(".foot3").height()+"px;'>").appendTo("body");
}
	
window.onload=function(){
	//模拟延迟
	setTimeout('yourFunction()',1000); 
}
function yourFunction(){
		$(".loader").hide();
}
$(".WeChatCtrl").click(function(){
	$(".WeChatShare").show();
	})
$(".WeChatShare").click(function(){
	$(".WeChatShare").hide();
})
$(".ReadingRed").click(function(){
	$(".ReadingRed .icon").toggleClass("active");	
})
$(".customRadio div").click(function(){
	var name = $(this).attr("name");
	$("[name = "+name+"]").removeClass("active");
	$(this).addClass("active");
})
