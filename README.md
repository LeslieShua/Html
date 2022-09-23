# 부트스트랩에서 가져온 html을 javascript로 Conversion반복되는 코드를 for문과 Array를 사용하여  팩토리 패턴같이 최적화 
<pre>
<!--  '<text id= '+examStateArr[i]+'></text>'   -->
id를 배열로 쓰려면  '+examStateArr[i]+' 와 같이 해주어야함
특히 html에서는 배열을 바로 적용시키기가 어렵기때문에 
javascript로 `${}`보관법을 잘 활용해야함

https://bfotool.com/ko/html-to-javascript
</pre>

# 요약
1. document.getElementById(`${examStateArr[i]}`).innerHTML= `${fruits[i]}`;
2. Id에 for문과 같이 사용하는 배열할당과 배열로 사용하는 것이 가능함



# html웹에서 bootstrap(그리드) + jQuery(문법)를 사용해서 css animation(opacity: 0; --> opacity: 1; + rotation) 애니메이션 주기
<pre>
css에서 제공해주는 .animate, .grow-img, .animate_down{  animation:fadeIn 1s forwards ease-in; transition:2s ease-in-out;}를 사용
transform은 초기값이 없기때문에 @keyframes fadeIn{0% {opacity: 0;}100%{opacity: 1;}} 키프레임을 사용함.

<div class= "row">
 <div class="col-md-6 map"></div>
 <div class="col-md-6 map"></div>
</div>
그리드는 12가 가로의 전체를 의미하기 때문에 col-md-6가 두개면 반반씩 차지한다 
.location에 relative잡고 위 문법row가 들어있는 .contents에 absolute한다음   top:0; left:0; right:0;으로 양쪽 공간을 준걸 볼 수 있다. 
</pre>

# Tip
1. 알맞은 jQuery(최신) cdn을 가져와야 문법이 제대로 작동한다.
2. <script defer src="java.js"></script>는 무조건 defer를 해주고, jQuery cdn은 /body 직전에 넣는걸 권장함.
3. bootstrap 또한 cdn을 가져와서 넣어주어야 한다.


# clone4-layoutsize/layout_size 그리드 800이상 3개 600이상 2개
<pre>
이미지에 마우스 hover시 (hide)글자 나타남 transform
card에 flex를 주어서 각 flex:1씩 가지게끔 함
애니메이션 없이 transform 과 opacity 기능만으로 애니메이션같은 기능을 줌
</pre>

# Tip 
1. width 600미만시 그리드가 3개로 Column으로 쌓이면서 가로 세로 값이(비율) 틀려도 background:cover로 화면에 꽉차지만,
2. 600 이상은 Row로 정사각형으로 나열 비율이 가로 세로가 같아야 한다. 




# clone7-autoCount

setTimeout 500 후 시작
function animateValue로(id, start, end, duration) 매개변수(parameter)로 넣어준뒤 animateValue("value", 시작점, 끝나는 지점, 속도);로 사용


# TopButton

해당 폴더는 아래로 스크롤을 내릴시 window full height 기준  1920 x 1080  400이 내려갔을때(height: 680) btn이 표시됩니다.
예) if (documnet.querySelector(window).scrollTop() > 400) //scroll량이 400보다 크면 show Class를 documnet.querySelector('#fixa').addClass('show');
    addClass 함수를 사용해서 fixa에 show 클레스를 추가해준다 이때 css에선 .show에 visibility: visible; poacity: 1; 속성을줘서 버튼이 보이게하고.
    사라질때(#fixa{ }속성에)는 transition: background-color .3s, opacity .5s, visibility .5s;를 주어서 서서히 사라지게하는 효과를 준다. 

    <div id="fixa"><button style="border:0; background-color: transparent;"class=”button-solid” onclick='window.scrollTo({top: 0, behavior: "smooth"});'>
      <img src="" alt="Top" width="100px"></button></div> //버튼을 생성하면 border이 생기니 배경색과 border속성을 조정해주었다.

#somthing elese

