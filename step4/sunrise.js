var mouseX
var mouseY

$(document).ready(function () {
   screenWidth = $("body").width(); 

    $("body").mousemove(function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        console.log(mouseX, mouseY);

        $(".img-1").css("left", (mouseX - screenWidth / 2) / 10);
        $(".img-2").css("left", (mouseX - screenWidth / 2) / 20);
        $(".img-3").css("left", (mouseX - screenWidth / 2) / 30);
        $(".img-4").css("left", (mouseX - screenWidth / 2) / 40);
        $(".img-5").css("left", (mouseX - screenWidth / 2) / 50);
    });
});

// 1:1 비율로 움직이는데, 이 비율이 훨씬 더 적었으면 좋겠다. 
// 1:10 비율로 움직이면 좋을것 같다. 

// 화면 넓이기 820px 이면
// 가운데 값은 410px 이죠
// mouseXrk 410 이상일 경우, 오른쪽으로 움직인다. 
// 410 이하일 경우 왼쪽으로 움직인다. 

// mouseX = 800px
// screenWidth 820px

// 800-410px  = 390px /10 = 39px

// 계단이 생기는 이유는 바디의 100% 1px이라도 이동을 하면 여백이 생길 수 밖에 없음
// 이미지를 120%로 해보면 오른쪽에서는 생기지 않음. 왼쪽에서만 생김
// 이미지 전체를 왼쪽으로 살짝만 이동하면 이미지 자체가 원래는 100% 였다가 120% 이동.
// 추가적으로 있어서 우리가 그 여백을 움직여도 오른쪽에는 여백이 안보임.
// 이미지 전체를 왼쪽으로 좀 더 가도록 10%, 10%를 조정을 하면 되지 않을까?

// 2가지 방법
// 1. translate 위치에 관련되어있으면서, left, top 이런 애들과는 다르게 움직인다.
// 2. left에 보정값을 10% 주는 것. left가 중복되어 쓰여서 계산하기가 넘 어려워요. 