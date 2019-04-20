$(function(){
	var progress=$('progress')
	var now=0;
	var r=0;
	$('#start-button').click(function(){
		0===now&&(now = window.setInterval(function(){
			progress.attr('value',r++)
		},100));
	});
	$('#stop-button').click(function(){
		window.clearInterval(now),now=0;
	});
	$('#reset-button').click(function(){
		progress.attr('value',r=0);
	});
});