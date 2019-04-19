$(function(){
	var $img=$('img');
	var $inp=$('input');
	$img.mouseout(function(){
		$inp.attr('type','password');
		$img.attr('src','https://raw.githubusercontent.com/wubin666/spa01/master/11-password-visual/close.png');
	});
	$img.mouseover(function(){
		$inp.attr("type","text");
		$img.attr("src","open.png");
	});
});