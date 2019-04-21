$(function(){
	var rwidth=$("#rectangle-width");
	var rheight=$("#rectangle-height");
	
	function transformation(base,exponent){
		return Math.round(base * Math.pow(10,exponent))/Math.pow(10,exponent)
	}
	
	function validation(b){
		var base = $(b);
		var bdate = $(b + "-validate");
		var blabel = $(b).attr("data-label");
		return ""===base.val()?(bdate.html(blabel+"不能为空"),base.select(),!1):/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(base.val())?window.Number(base.val())<0?(bdate.html(blabel+"必须大于零"),base.select(),!1):(bdate.html(""),!0):(bdate.html(blabel+"必须是数值"),base.select(),!1)
	}
	$("#rectangle-calc").click(function(){
		if (validation("#rectangle-width")&&validation("#rectangle-height")){
			var width = Number(rwidth.val());
			var height = Number(rheight.val());
			var pmeter = transformation((2*width)+(2*height),2);
			var area = transformation(width*height,2);
			
			$("#rectangle-perimeter").val(pmeter),
			$('#rectangle-area').val(area)
		}
	})
});