$(function() {
var radStatus,
  txtTime  = $('details input[type="number"]'),
  txtTitle = $('details input[type="text"]'),
  txtCode  = $('details textarea'),
  fmButton = $('details form');

fmButton.submit(function(e) {
e.preventDefault();
radStatus  = $('details input[type="radio"]:checked');

/*global timerButton:true*/
var btn = timerButton({
  'container': 'div.main',
  'enabled': radStatus.val() === 'true',
  'duration': Number(txtTime.val()),
  'text': txtTitle.val()
});

btn.on('timer-button-click', new Function(txtCode.val()));
});
});/*$(function(){var e,i=$('details input[type="number"]'),n=$('details input[type="text"]'),a=$("details textarea");$("details form").submit(function(t){t.preventDefault(),e=$('details input[type="radio"]:checked'),timerButton({container:"div.main",enabled:"true"===e.val(),duration:Number(i.val()),text:n.val()}).on("timer-button-click",new Function(a.val()))})});*/
