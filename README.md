[웹 디자인 1]( https://github.com/six-choi/webinteractive/main/README.md/day1)

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
