$(document).ready(function(){
	$(".bounce").css("margin-top", $(window).height()-140 + "px");
	$(window).resize(function(){
		$(".bounce").css("margin-top", $(window).height()-140 + "px");
	});
});


