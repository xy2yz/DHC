// JavaScript Document
//创建索引

var Y;
var htmlHeight = document.body.offsetHeight;
var touchTopHeight = htmlHeight*0.1;
var touchIndexHeight;
var touchIndexTopHeight;
var centerHeight;
var liNum;
var touchIndexLiHeight;
//初始化
function touch(){
	touchIndexHeight = $("#touchIndex").height();
	centerHeight = (htmlHeight-touchIndexHeight)/2;
	liNum = $("#touchIndex li").length+1;
	touchIndexLiHeight = touchIndexHeight/liNum;
	$("#touchIndex").css("top",centerHeight);
	bindTochuEvent();
}
function bindTochuEvent(){
	document.getElementById("touchIndex").addEventListener("touchmove",ontouchmove, false);
	document.getElementById("touchIndex").addEventListener("touchstart",ontouchstart, false);
	document.getElementById("touchIndex").addEventListener("touchend", touchEndFunc, false);
}
function unbind(){
	document.getElementById("touchIndex").removeEventListener('touchmove',ontouchmove,false);
	document.getElementById("touchIndex").removeEventListener('touchend',touchEndFunc,false);
	document.getElementById("touchIndex").removeEventListener("touchend", touchEndFunc, false);
}

//触摸开始
function ontouchstart(event){
	event.preventDefault();
    var touch = event.touches[0];
    //记录
   	Y = touch.clientY;
    touchIndexTopHeight = Y - centerHeight;
	if(touchIndexTopHeight<0){
		touchIndexTopHeight = 0;
	}
	$("#touchInstructions").show();
	touchIndexTopHeight = parseInt(touchIndexTopHeight);
	letterInstructions(touchIndexTopHeight,touchIndexLiHeight);
}
//触摸移动
function ontouchmove(event){
    var touch = event.touches[0];
    Y = touch.clientY;
    
	Y = touch.clientY;
    touchIndexTopHeight = Y - centerHeight;
	if(touchIndexTopHeight<0){
		touchIndexTopHeight = 0;
	}
	touchIndexTopHeight = parseInt(touchIndexTopHeight);
	letterInstructions(touchIndexTopHeight,touchIndexLiHeight);
	
}
//移动执行跳转方法
function letterInstructions(i,c){
	var dijige = i/c;
	var zimu;
	dijige = parseInt(dijige);
	switch (dijige)
		{
		case 0:
		  zimu="A";
		  break;
		case 1:
		  zimu="B";
		  break;
		case 2:
		  zimu="C";
		  break;
		case 3:
		  zimu="D";
		  break;
		case 4:
		  zimu="E";
		  break;
		case 5:
		  zimu="F";
		  break;
		case 6:
		  zimu="G";
		  break;
		case 7:
		  zimu="H";
		  break;
		case 8:
		  zimu="I";
		  break;
		case 9:
		  zimu="G";
		  break;
		case 10:
		  zimu="K";
		  break;
		case 11:
		  zimu="M";
		  break;
		case 12:
		  zimu="L";
		  break;
		case 13:
		  zimu="N";
		  break;
		case 14:
		  zimu="O";
		  break;
		case 15:
		  zimu="P";
		  break;
		case 16:
		  zimu="Q";
		  break;
		case 17:
		  zimu="R";
		  break;
		case 18:
		  zimu="S";
		  break;
		case 19:
		  zimu="T";
		  break;
		case 20:
		  zimu="U";
		  break;
		case 21:
		  zimu="V";
		  break;
		case 22:
		  zimu="W";
		  break;
		case 23:
		  zimu="X";
		  break;
		case 24:
		  zimu="Y";
		  break;
		case 25:
		  zimu="Z";
		  break;
		default:
		  zimu="☆";
		  break;
		}
	$("#touchInstructions").html(zimu);
	window.location="#"+zimu;
}
//触摸结束
function touchEndFunc(event){
   $("#touchInstructions").hide();
}

	var listTopheight = $("#list").offset().top;
	if($(".foot").length > 0 ){
		listTopheight = listTopheight + $(".foot").height() + (parseInt($("html").css("font-size"))*0.2);
	}
	$("#list").height(htmlHeight-listTopheight);
	$(".closeSearch").click(function(){
		$(".searchModular").hide();
	});
//输入框检索列表
(function($) {
    $.expr[":"].Contains = function(a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    function filterList(header, list) {
        //@header 头部元素
        //@list 无需列表
        //创建一个搜素表单
        var form = $("<form>").attr({
            "class":"filterform",
            action:"#"
        }), input = $("<input>").attr({
            "class":"input",
            type:"text"
        });
        $(form).append(input).appendTo(header);
        $(input).change(function() {
		$(".releaseList .hotList").hide();
		$(".releaseList .indexesList").show();
		$(".releaseList .ctrl div").removeClass("active");
		$(".releaseList .ctrl .g2").addClass("active");
            var filter = $(this).val();
            if (filter) {
                $matches = $(list).find("a:Contains(" + filter + ")").parent();
                $("li", list).not($matches).slideUp();
				$(".title",list).slideUp();
                $matches.slideDown();
            } else {
                $(list).find("li").slideDown();
				$(list).find(".title").slideDown();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });
    }
    $(function() {
        filterList($("#form"), $("#demo-list"));
    });
})(jQuery);	