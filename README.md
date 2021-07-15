[웹 디자인 1주차](#step1)

[웹 디자인 2주차](#step2)

[웹 디자인 3주차](#step3)



---
## step1


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
## step2 

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

# web design Class

## step3

mbc 대선주자 페이지 
* 글꼴은 노토산스를 사용함. 웹 폰트 cjkr web font
* https://iflue.tistory.com/2 
`@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
body {
  font-family: "Noto Sans KR", sans-serif !important;
}`

지금은 검색을 해서 가져오지만 구글 폰트에서는 웹폰트를 쉽게 제공하고 있음. 다양한 폰트 지원과 웹 폰트 지원. 
1. 한국어 폰트 https://fonts.google.com/ 
2. use on web - import url copy 
3. css에 적용. (body 태그에서 important 지우기!!)
4. class로 폰트 지정후 적용 확인 


폰트를 적용하기 
```
<html>
    <head>
        <link href="style.css" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="index.js"></script>
    </head>
    <body>
        <h3>이것은 웹폰트를 적용한 것입니다</h3>
        <h3 class="font-ys">이것은 웹폰트를 적용한 것입니다</h3>
        <div class="font-tourney" stlye="font-size:22px">
            Hello World!, This is WEB FONT
        </div>
    </body>
</html>
```

```
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap);
@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);

/* important 지우세요!!! */
body {
  font-family: "Noto Sans KR", sans-serif;
}

.font-ys {
    font-family: 'Yeon Sung', cursive;
}

.font-garamond {
    font-family: 'EB Garamond', serif;
}

.font-tourney {
    font-family: 'Tourney', cursive;
}
```

---

### bootstrap

https://getmdl.io/
지금까지는 남이 잘 만든 것을 가지고 와서 사용하는 것을 이야기 함. 

metarial design lite는 클래스 명을 가져와서 바로바로 사용할 수 있음. 

```
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
```

버튼과 효과도 그대로 사용하는 것이 가능함. 

```
<!-- Accent-colored raised button with ripple -->
<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  Button
</button>
<!-- Colored FAB button -->
<button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

grid - 반응형
- 웹 크기에 따라서 반응하는 웹페이지 
- gird는 총 합을 가지고 있고 이것을 잘라서 사용할 수 있음. 
- 33.xxxx %를 가지고 있는 그리드 사용 

https://getmdl.io/components/index.html#layout-section/grid 

http://hangul.thefron.me/ 한글 텍스트 무한 생성 입숨.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="bootstrap.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="bootstrap.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
    <title>Document</title>
</head>
<body>
    <h3>이것은 웹폰트를 적용한 것입니다</h3>
        <h3 class="font-ys">이것은 웹폰트를 적용한 것입니다</h3>
        <div class="font-tourney" stlye="font-size:22px">
            Hello World!, This is WEB FONT
        </div>

    <div class="mdl-grid my-edit-style">
        <div class="mdl-cell mdl-cell--3-col"></div>
        <div class="mdl-cell mdl-cell--6-col">
            
            <p>굳세게 전인 타오르고 그러므로 열락의 그들의 밥을 아니다. <b>길을 넣는 끓는 물방아 원질</b>이 이것을 이것이다. 목숨이 작고 피는 하였으며, 인간의 사람은 꽃 목숨을 철환하였는가? 청춘을 풍부하게 있는 방황하였으며, 같이 같은 약동하다. 사랑의 있는 군영과 오아이스도 타오르고 하는 그러므로 풀밭에 아니다. 얼음과 가치를 거선의 청춘의 튼튼하며, 산야에 인생의 아름다우냐? 보이는 장식하는 방황하여도, 바이며, 끝에 품었기 때문이다. 어디 얼마나 낙원을 교향악이다. 가슴에 실로 주는 열락의 능히 천하를 많이 할지라도 그들의 것이다.</p>
    
            
            <p>있는 커다란 가장 인생에 얼음에 봄날의 따뜻한 봄바람이다. 생생하며, 뜨거운지라, 갑 오직 새가 끓는 거친 인도하겠다는 물방아 약동하다. 밥을 이상 가장 것이다.보라, 것이다. 청춘 소금이라 것은 못하다 것이다. 그들에게 찾아다녀도, 피고 있다. 품고 관현악이며, 뼈 같지 무엇을 그들의 놀이 같이 있으랴? 같은 못할 하였으며, 따뜻한 쓸쓸한 교향악이다. 내려온 대중을 것이다.보라, 곳으로 것은 이상은 착목한는 꽃이 간에 있으랴? 있는 같이 심장의 아니다.</p>
            
            <p>영락과 붙잡아 주며, 뿐이다. 피가 피고, 맺어, 구하지 미묘한 못할 위하여서 사막이다. 거선의 주는 얼음이 사막이다. 이상 인생에 가지에 길을 끓는 청춘을 우리의 주는 철환하였는가? 살 끝까지 위하여 무엇을 들어 것이다. 놀이 피에 싶이 커다란 두손을 얼마나 갑 것은 같은 봄바람이다. 하는 꽃이 커다란 사막이다. 아름답고 대고, 수 철환하였는가? 거친 두기 끝에 무엇이 찾아 아름다우냐? 이성은 그들은 피어나는 있으랴?</p>
        
        </div>
        <div class="mdl-cell mdl-cell--3-col"></div>
    
</body>
</html>
```

```
@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);
@import url(https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap);
@import url(https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Tourney:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);

/* important 지우세요!!! */
body {
  font-family: "Noto Sans KR", sans-serif;
}

.font-ys {
    font-family: 'Yeon Sung', cursive;
}

.font-garamond {
    font-family: 'EB Garamond', serif;
}

.font-tourney {
    font-family: 'Tourney', cursive;
}

.my-edit-style {
    font-size: 14px;
    line-height: 2em; /* 2em = 28px */
    letter-spacing: 1px; /* 자간 - 상세페이지 상품을 보면 들어간 곳 밀도 올리기 */
    word-break: keep-all; /* 단어가 깨지지 않는 선에서 줄바꿈 */
}
```

---
## 웹사이트 디자인의 80~90%는 이미지 퀄리티다!

이미지가 80% 
텍스트가 20%

실습을 하겠다. 

텍스트와 이미지가 겹치는 것이 있는데 긍정적으로 하는 것이 **신문**. 

https://www.chosun.com/premium/discovery/2021/07/13/KW6S6RLOBNGSTHJKTRJOUG4H3M/


디자인 컨퍼런스를 여는 곳 네이버와 토스
https://tv.naver.com/v/4700462 - 네이버 모바일 타이포그래픽

디자인이라는 가치에 집중하는 것에 대한 태도가 있어야 함. 

---
디자인 시스템을 만들기 

폰트, 그리드, css, img 등 웹디자인 요소

ex 버튼 만들기
---
버튼을 만들때 검은색에서도 보이고 하얀색에서도 보이게 만드는 것을 선호함
```
<div style="width:300px;margin: 100px;">
<div class="css-button">확인</div>
<div class="css-button cancle">취소</div>
</div>

```

```
.css-button {
    display: inline-block;
    bacground-color: #8b4cd1;
    color: white;
    padding: 6px 18px;
    margin: 1px 5px;
    border-radius: 11px;
    font-weight: 500;
    font-sizw: 12px;
    cursor: pointer; /* not allowed, move etc...*/
}
```
마우스가 올라갔을때 인터랙션
```
.css-button: hover{
   background-color: #
}

.css-button:active{
  box-shadow: 0px 0px 5px 0px rgba() /* 마우스를 클릭했을때 쉐도우 */
}

```
중요한건 중요하게 보이게 하고 안중요한건 안중요하게 하는 디자인 기본 요소

잘만든 나의 클래스 하나만 만들면 마음대로 복사를 해도 괜찮음. 

취소에 관련된 만들기를 하고 싶다면. 만들디가 중요함. 
cancel이라는 클래스를 추가함. 

```
.jw-button.cancel{
   color: 
   background-color
   border: 1px soild
}

위는 캔슬 버튼의 클래스 아래는 캔슬 버튼의 인터랙션

.jw-button.cancel:hover {
   color:
   border-color:
}
```

이렇게 만들어 놓은 디자인 라이브러리는 따로 빼서 저장함. 
컴포넌트를 만들어 둔다고 생각하면 됨. 
나의 디자인 스타일을 코드로 만들어두는 것. 

시대가 변하는 것. 
둥글둥글한 버튼의 시대는 사라지고 각진 버튼이 유행하기 시작함. 

버튼태그를 숨긴 이유
- 버튼태그는 간단함. 기존의 div 위에 css가 기본적으로 세팅할 뿐.
- 실제로 우리가 어렵다고 생각하는 태그는 div에 css를 올린 것.
- 브라우저마다 적용되는 버튼 css가 다름. 이것 때문에 처음 혼선을 많이 겪음. 
- 이런 태그들을 사용하는 이유는 웹 표준을 지키기 위함. 시각장애인을 위한 것도 있음. 컴퓨터가 버튼 태그를 해주면 시각장애인 전용프로그램을 하면 버튼이라고 있는 태그를 읽어주기도 함. 
- 웹사이트에서 검색을 할 때. 검색엔진에 걸리게하기 위해서 대제목 같은 경우에는 우선적으로 걸리는 것이 있음. pdf 자동 인덱싱의 개념이라고 생각하면 됨. 웹표준을 지키는 것은 중요하지만 우리는 아직 신경쓰지 않아도 됨 
