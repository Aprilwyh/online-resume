$(function() {
	$(".dv").css({"width": $(window).width(), "height": $(window).height()});
	$(".cover").css({"width": $(window).width(), "height": $(window).height()});
	$("button").click(function() {
		if($(".inp").val() != "") {
			open('https://www.baidu.com/s?wd=' + $(".inp").val());
			$(".inp").val("");
		}
	});
	$(document).keypress(function(e) {
		if($(".inp").val() != "") {
			var keyCode = (e.keyCode ? e.keyCode : e.which);
			if (keyCode == '13') {
				open('https://www.baidu.com/s?wd=' + $(".inp").val());
				$(".inp").val("");
			}
		}		
	});
});