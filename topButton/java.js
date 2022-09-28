// 제이쿼리 문법을 썻음으로 cdn을 꼭 추가해주어야함. 
/*Top 버튼*/
var btn = $('#fixa');

$(window).scroll(function () {
  if ($(window).scrollTop() > 400) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});