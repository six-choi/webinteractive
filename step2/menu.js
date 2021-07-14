$(document).ready(function () {

    $(".menu-item").on("click", function () {
        $(".menu-item").removeClass("active")
        $(this).addClass("active")
    })

    $(".menu-1").on("click", function () {
        $(".img-container").attr("src", "birds/bird_3.png")
        $(".img-container").css("transition-delay", "2s")
    })

    $(".menu-2").on("click", function () {
        $(".img-container").attr("src", "birds/bird_2.png")
        $(".img-container").css("margin-left", "50px")
    })

    $(".menu-3").on("click", function () {
        $(".img-container").attr("src", "birds/bird_1.png")
        $(".img-container").css("transition-delay", "2s")
    })
})
