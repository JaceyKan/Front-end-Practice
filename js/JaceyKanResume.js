$(document).ready(function(){
	$("#portfolio .work a").mouseenter(function(){
		//$(this).find(".showImg").css("opacity","0.4");
		//$(this).find(".coverImg").css("display","inline");
		//$(this).find(".showImg").css("opacity","0.4");
		$(this).find(".coverImg").css({"display":"inline","opacity":"0.7"});
	});

	$("#portfolio .work a").mouseleave(function(){
		//$(this).find(".showImg").css("opacity","1");
		$(this).find(".coverImg").css("display","none");
	});
});
