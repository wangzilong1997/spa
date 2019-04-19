$(function(){
	var $img=$('img');
	var $inp=$('input');
	$img.mouseout(()=>{
		$inp.attr('type','password');
		$img.attr('src','https://raw.githubusercontent.com/wubin666/spa01/master/11-password-visual/close.png');
	});
	$img.mouseover(()=>{
		$inp.attr("type","text");
		$img.attr("src","open.png");
	});
});