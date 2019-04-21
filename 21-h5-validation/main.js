$(function(){
	var l=$("#rectangle-width");
	var u=$("#rectangle-height");
	function c(e,t){
		return Math.round(e*Math.pow(10,t))/Math.pow(10,t)
	}
	$(".rectangle form").on('submit',function(e){
		e.preventDefault();
		var t=Number(l.val());
		var a=Number(u.val());
		console.log(t,a);
		var pmeter=c(2*t+2*a,2);
		var area=c(t*a,2);
		console.log(pmeter,area);
		$("#rectangle-perimeter").val(pmeter),
		$("#rectangle-area").val(area)
		
	})
});