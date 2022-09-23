$(function(){
  var $device = $('.device');
  var $features = $('.features');
  var $location = $('.location');
  var $offset = 700;
 
//디바이스가 top에서 부터 떨어진거리 
  var $deviceOST = $device.offset().top - $offset;
    var $featuresOST = $features.offset().top - $offset;
      var $locationOST = $location.offset().top - $offset;
 
 $(window).scroll(function(){
     if($(this).scrollTop() > $deviceOST) { $device.find('img').addClass('animate');
    }
   
     if($(this).scrollTop() > $featuresOST) { 
      $features.find('img').addClass('grow-img');
      $features.find('h4').addClass('animate');
}
//grow-img class가 있으면 실행
 if($(this).scrollTop() > $locationOST) {
$('.stripe').each(function(idx){
 var $this = $(this);
 setTimeout(function(){$this.addClass('animate_down');}, 100*idx);
});
    }
 });
});
//each 안에 this는 stripe를 각각 받아옴

//$location.find('.stripe').addClass('animate_down'); 한번에 나옴

//시간차로 차례대로 나오게하기
//setTimeout(할일, 시간)
//할일 = 함수 function(){실제로 할일}
// $('#s1').addClass('animate_down');

//idx 전
//   setTimeout(function(){$('#s1').addClass('animate_down');}, 100);

// 제이쿼리 추가