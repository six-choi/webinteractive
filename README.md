[웹 디자인 1주차](#step1)
[웹 디자인 2주차](#step2)



---
step1


추가학습 [링크](https://www.notion.so/FIT-JOB-1-31d73bbe848841b493dbfde856b1538c) 

**미리 예습하기**

필수는 아니지만... 그래도 한번 정독하면 훨씬 이해가 쉬울거에요!

1. **HTML의 정의** [https://opentutorials.org/course/1073/10](https://opentutorials.org/course/1073/10) (생활코딩)
2. **CSS의 정의** [https://opentutorials.org/course/3327/2](https://opentutorials.org/course/3327/2) (생활코딩)
3. **HTML 개요** [http://tcpschool.com/html/intro](http://tcpschool.com/html/intro)
4. **CSS 개요** [http://tcpschool.com/css/intro](http://tcpschool.com/css/intro)

들어가며
* 모든 디자인은 코드로 구현이 가능함
* 디자인은 머리로 배워서 하는 것이 아니라 손으로 익어야 하는 것
* 코딩도 마찬가지 
* 가지. 디자인 스타일이 있는 것 처럼 코딩도 스타일이 있음
* 생각보다 진입장벽이 훨씬 낮아요. 심리적인 장벽은 낮아지지 않음. 

#실무에서 가장 많이 쓰는 css 

```
<div> box css
  font-size
  font-weight
  line-height
  text-align
  background-color
  border
  border-radius
  box-shadow
</div>
```
**디자인 자체로 평가 받는다고 생각하면 좋을 것 같음.**

**좋은 디자인이 무엇인가로 올라가면 무엇인가.**
* 상황에 맞는, 요구에 맞는 TPO
* 슈퍼마켓 전단지를 보면 볼 수 있는 할인 표시의 디자인 특징이라고 보면 좋은 디자인이라고 할 수 있는 것. 어디에 있어도 눈에 잘 띔.
* 개발자와 하면. 개발에는 항상 정답이 있음. 디자인은 정답이 없는 상태에서 하기 때문에 주변 사람을 설득하는 능력이 필요하고. 위와 아래의 사람을 설득하는 것이 필요해서 대인관계가 필요함. 
* 개발자는 디자인에 대해서 잘 판단할 수 있는지 능력이 없음. 그렇기 때문에 그런 사람들에게 내가 원하는 것 처럼 디자인을 하려면 굽신거려야 할 때도 있음. 
* 그래도 우리가 10주 동안 같이 할 것인데. 리액트 강의도 하고 있음. 점심 식사 정도는 같이 하면 좋을 것 같음. 정보공유가 정말 중요함. 

**Grid 레이아웃의 고민**
* 레이아웃을 짤때. 디자인 단계에서 유사한 것들을 묶으려고 함 (예를 들어 쇼핑의 카테고리를 짜는 것 처럼) `데슈칼트 이론`
* 계속계속 계층화 시키면서 발전해 나가는 것. 네이버를 들어가보자. 

> [name=선생님]
> 숨겨져 있던 그리드를 꺼내보자. 
> 
> 헤더 사이드 메인콘텐츠 등이 다 그리드로 나누어져 있음. 이 계층을 어떻게 성정하느냐. 
> 이것을 어떻게 설정하느냐. 헤더 div, 콘텐츠 div - 광고 div - 신문 div .... 처럼 설계하는 것이 퍼블리싱의 설계. 

디자이너와 개발자의 마인드셋은 다르지 않음. 우리의 접근 자체가 이런 설계 과정으로 생각해 본적이 없음. 어떤 사물을 만들 때. 프로덕트의 외관부터 정리를 시작함. 외관을 그려보고 기능을 배치하는 것 부터 시작함. 

개발자는 이 프로덕트의 기능은 무엇인지 부터 이야기 함. 디자인을 위해 기능이 이야기 되는 경우보다 - 기능을 위한 디자인이 필요한 경우가 더 많음. 

들여쓰기가 낮선 사람은 웹사이트를 보다보면 개발 수준이 보임. 대개편이 되기 전까지는 2000년대 초중반대 수준으로 개발. 지금은 괜찮아 졌음. 네이버에서 사용하는 코드작성규칙을 본적이 있는데 10년 전이나 3년 전이나 다른것은 없어요. (건드릴 수 없는 코드 - 스파게티 코드)

```
<class>를 잘 활용하면 더 잘 할 수 있음
css가 뒤에 있는 것부터 힘을 받음. 
.은 class의 약자. 두개를 동시에 선언하는 경우에 .box.green으로 할 수 있음. = 동시에 두 클래스를 가지고 있음. 

css선언 레밸 - 복잡하면 복잡할 수록 힘이 세집니다. 
important를 붙여주면 모든 단계를 뛰어 넘어서 이것만 적용이 됩니다. 하지만 실무에서 어쩔수 없는 경우에만 사용합니다. 

선택할 수 있는 정의
1. 동시선언
2. 자식이 있을 경우
3. 버튼을 만들 때 (확인 취소 삭제)

html
<div class="box1">
  <div class="circle">
</div>

css
.box1 {
    width: 300px;
    height: 300px;
    background-color: blueviolet;
}

.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: darkgrey;
}

https://www.youtube.com/watch?v=BKorP55Aqvg
- 잘 만든 버튼하나 100줄 css 안부럽다
```

```
css position relative는 박스가 상대적.
top - bottom, left-right 둘다 작용되지 않고 둘중 하나만 사용가능
```

---
step2 

step2

복습

position - absoulte 

* 아이폰이 가진 고유 크기를 맞출때 쓰일 수도 있음. 
* 하지만 가장 많이 써보면 좋은 것은 이미지 편집. 


day2 

**웹 콘텐츠의 90%는 이미지!**
작고 귀여운 인터랙티브 클론하기 

https://www.nytimes.com/paidpost/allbirds/the-view-from-above.html

![](https://i.imgur.com/bKSUzrd.jpg)

시작과 끝 지점의 변화량 차이는 몇 px이다. 

**css animation의 기본**

```
@keyframes fadeIn {
 from {
    opacity: 0;
 }
 
 to {
    opacity: 1;
 }
}

opacity, left 등을 사용해서 이용.
```

네모를 세밀하게 그리는 것처럼 세밀하게 적용해주어야 한다. 
css 애니메이션
http://www.tcpschool.com/css/css3_transform_animation
css 애니메이션 세밀 적용
https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Animations/Using_CSS_animations

애니메이션 심화 
* ,를 사용해서 두개의 애니메이션을 한번에 적용 가능
* delay 기능은 opacity 기능을 늦게 가져감. 

* 설계를 잘 해봅시다

css 값을 0에서 1로 끝난 상태로 고정하고 싶다면
```
animation-fill-mode: forward;
```


볼만한 css
https://codepen.io/hakimel/pen/aIhkf

---
버튼과 패딩 그리고 마진
패딩은 순서대로 표기 - 위 오른쪽 아래 왼쪽
패딩을 2개만 사용하면 1 = 아래 위, 2는 왼쪽 오른쪽

주황색은 마진, 초록색은 패딩 

```
.button{
    display: inline-block;
    background-color: blue;
    color: cornsilk;

    margin: 10px;
    margin-top: 10px;


    padding: 20px;

    border-radius: 10px;
}

.button:hover {
    background-color: cyan;
    font-size: 18px;
    border-radius: 20px;
}
```

인터랙션 하기 = transition
* 시작과 끝이 정해져 있음. 
* transition-property: backgrounf-color;
* property는 주소가 있을때 
* div에 마우스를 올렸을때 hover을 통해서 인터랙션을 사용할 수 있음. 
* 호버된 상태를 보고 싶으면 개발자 도구에서 호버를 체크하면 됨

애니매이션을 사용하는 것은 사용자의 동작과 상관없이 움직여야 할 때
호버는 사용자의 동작에 반응할 때

호버는 자식 선택자를 컨트롤 할 수 있다. 
부모 클래스에 마우스를 올리면 자식 클래스의 css가 변한다. 

```
.box-container {
    width: 100px;
    height: 100px;
    background-color: darkcyan;
}

.box-container .box {
    width: 50px;
    height: 50px;
    background-color: darkkhaki;
}

.box-container:hover .box {
    background-color: cyan;
    font-size: 18px;
    border-radius: 20px;
    
.box-container.second:hover .box {
    background-color: blue;
}
= .second = 형제도 함께 컨트롤 하기 
```
---
응용하기 
https://www.nextree.co.kr/p8468/

메뉴 바 만들기

뉴모티즘 - 엠비씨 기획취재팀 인터랙티브 디자인 모티프
https://ldrerin.tistory.com/467 - 뉴모티즘

개발과 디자인을 이해할 수 있는 사람. 개발과 디자인을 동시에 한다면 찾는 사람이 많아질 것. 

일반적인 회사는 개발과 디자인이 분리되어있음. 어떻게 보면 이상적이라고 생각할 수 있는데. 연구원은 css 규칙과 디자인 문법을 어떻게 설정할 것인지 정리할 수 있는 사람이 높은 레벨에서 환영을 받음. 

---
jquery
현업에서는 별로 사용하지 않는 라이브러리
html = 마크업, css = 스타일, js = 

```
console.log("ready")

//.my-btn버튼을 누르면 .box의 background-color이 green으로 바꾸게 하자

$(document).ready(function () {
    //도큐먼트가 준비되면 실행해라. 
    //이것을 적어줘야 하는 이유는 로딩이 느릴 경우에는 랜더링 되기 전에 먼저 js가 실행이 될 수 있음.
    //버튼 클릭시 아무 일도 일어나지 않아서 html 도큐멘트가 준비 되었을때 실행을 하라는 것.

$(".my-btn").on("click", function () {
    console.log("my-btn clicked")
    $(".box").css("background-color", "green")
    $(".box").css("margin-left", "400px")
     $(".box").animate({
        width: "toggle",
        height: "toggle",
    }, 1000);
   })
})

// .box의 css background-color을 green으로 바꿔라

//css를 여기서도 바꿀 수 있지 않을까. 정답!
```

add class
remove class

```
$(document).ready(function () {
    //도큐먼트가 준비되면 실행해라. 
    //이것을 적어줘야 하는 이유는 로딩이 느릴 경우에는 랜더링 되기 전에 먼저 js가 실행이 될 수 있음.
    //버튼 클릭시 아무 일도 일어나지 않아서 html 도큐멘트가 준비 되었을때 실행을 하라는 것.

  $(".my-btn").on("click", function () {
      console.log("my-btn clicked")
      $('.box').addClass('active');
    })

     $(".my-btn-2").on("click", function () {
      console.log("my-btn-2 clicked")
      $('.box').removeClass('active');
     }) 
  })
```
괄호를 잘 닫아야 한다. 

메뉴 만들고 디자인 해보기
