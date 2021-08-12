var posX;
var posY; 
var canvasX;
var canvasY;
var circleColor = "black";
//선언이 바깥에서 선언이 되면 안쪽에서 모두 사용할 수 있음. 하지만 안에서 선언하면 밖에서 사용하지 못함 그래서 밖에서 변수선언을 함

$(document). ready(function () {
    canvasX = $(".my-canvas").offset().left;
    canvasY = $(".my-canvas").offset().top;

    console.log(canvasX, canvasY);
    
    $(".my-canvas").mousemove(function (event) {
        posX = event.clientX -25 - canvasX;
        posY = event.clientY -25 - canvasY;
    });

    $(".my-canvas").on("click", function () {
        var circleHtml = 
         "<div class='circle' style='top:" + 
         posY + 
         "px; left:" + 
         posX + 
         "px; background-color:" +
         circleColor +
         ";'></div>";
        $(".my-canvas").append(circleHtml);
        console.log(posX, posY);
    });

    $('.button-red').on("click", function(){
     circleColor = "red";
    });

    $('.button-blue').on("click", function(){
     circleColor = "blue";
    });

    $('.button-green').on("click", function(){
     circleColor = "green";
    });

    $('.clear').on("click", function() {
        $('.my-canvas').html("");
    });
});

// 마우스를 움직이다가, 클릭하면, 해당위치에 원이 생성된다.

// 버튼을 클릭하면 원의 색이 바뀌게 한다. 
// 클릭되는 범위가 버튼을 넘지 못하게 한다. 
