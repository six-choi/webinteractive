console.log("ready")

//.my-btn버튼을 누르면 .box의 background-color이 green으로 바꾸게 하자

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

// .box의 css background-color을 green으로 바꿔라

//css를 여기서도 바꿀 수 있지 않을까. 정답!