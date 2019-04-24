/*var timerButton=function(t){var n,e=t,i=e.enabled,a=e.duration,r=$('<input class="timer-button" type="button">');function o(){i=!1,r.attr("disabled","disabled"),c(),n=window.setInterval(function(){a--,c(),0===a&&u()},1e3)}function u(){i=!0,a=e.duration,clearInterval(n),c(),r.removeAttr("disabled")}function c(){var t=i?e.text:e.text+" ("+a+" s)";r.val(t)}return $(e.container).append(r),e.enabled?u():o(),r.click(function(){r.trigger("timer-button-click"),e.enabled&&o()}),r};*/
var timerButton = function(config){
  var cfg = config,
      enabled = cfg.enabled,
      timer,
      i = cfg.duration,
      $btn = $('<input class="timer-button" type="button">');

  $(cfg.container).append($btn);

  if(cfg.enabled){
    enableBtn();
  } else{
    disabledBtn();
  }

  function disabledBtn(){
    enabled = false;
    $btn.attr('disabled','disabled');
    setBtnText();

    timer = window.setInterval(function(){
      i--;
      setBtnText();
      if(i == 0) enableBtn();
    },1000);
  }

  function enableBtn(){
    enabled = true;
    i = cfg.duration;
    clearInterval(timer);
    setBtnText();
    $btn.removeAttr('disabled');
  }

  function setBtnText(){
    var txt = enabled ? cfg.text:cfg.text+'('+i+'s)';
    $btn.val(txt);
  }

  $btn.click(function(){
    $btn.trigger('timer-button-click');
    if(cfg.enabled)
    disabledBtn();
  });
  return $btn;
};
