$(function(){
	var $img=$('img');
	var $inp=$('input');
	$img.mouseout(function(){
		$inp.attr('type','password');
		$img.attr('src','close.png');
	});
	$img.mouseover(function(){
		$inp.attr("type","text");
		$img.attr("src","open.png");
	});
});