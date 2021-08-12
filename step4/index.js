$(document).ready(function () {
  $(".my-button").on("click", function () {
    $(".my-box").css("background-color", "red");
    $(".my-box").addClass("white-text");
  });

  $(".my-button-2").on("click", function () {
    $(".my-box").removeClass("white-text");
  });
});
