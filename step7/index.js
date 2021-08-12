// $(document).ready(function () {
//  var path = document.querySelector(".drawing-object")
//  console.log(path.getTotalLength());
// });

//$(document).ready(function () {
//  var pathArray = $(".cls-1");
//  $.each(pathArray, function (i, d) {
//    $(d).css("stroke-dasharray", $(".cls-1")[i].getTotalLength);
//    $(d).css("stroke-dashoffset", $(".cls-1")[i].getTotalLength);
//  });
//});

$(document).ready(function () {
    for (var i = 0; i < 5; i++) {
         console.log($(".drawing-object")[i].getTotalLength());

         $($(".drawing-object")[i]).css(
             "stroke-dasharray",
             $(".drawing-object")[i].getTotalLength
         );
         $($(".drawing-object")[i]).css(
             "stroke-dashoffset",
             $(".drawing-object")[i].getTotalLength
         );
    }
});

//개인 작업
//jquery animate 지정 후 이동 
//캘린더 구현에 집중 후 텍스트는 