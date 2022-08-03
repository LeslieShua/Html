# 부트스트랩에서 가져온 html을 javascript로 Conversion
# 반복되는 코드를 for문과 Array를 사용하여  
# 팩토리 패턴같이 최적화 

<pre>
``` '<text id= '+examStateArr[i]+'></text>' ```
id를 배열로 쓰려면  '+examStateArr[i]+' 와 같이 해주어야함
특히 html에서는 배열을 바로 적용시키기가 어렵기때문에 
javascript로 `${}`보관법을 잘 활용해야함

</pre>

# 결론

1. document.getElementById(`${examStateArr[i]}`).innerHTML= `${fruits[i]}`;
2. Id에 for문과 같이 사용하는 배열할당과 배열로 사용하는 것이 가능함