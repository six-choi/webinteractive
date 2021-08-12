$(document).ready(function() {
    $(document).scroll(function () {
        var box_width = $(document).scrollTop();

        var scrollLimit = $("body").height() - $(window).height();
        var percentage = ($(document).scrollTop() / scrollLimit) * 100;
        $(".wide-box").css("width", percentage + "%");
        $(".circle").css("width", percentage + "%");
        $(".circle").css("height", percentage + "%");

        console.log("현재스크롤 퍼센테이지", percentage);

        if ($(document).scrollTop() > 500) {
            $(".text").html("스크롤값 500이상");
        }
        if ($(document).scrollTop() > 1000) {
            $(".text").html("스크롤값 1000이상");
        }

    });
    //
    $(".text").on("click", function () {
        console.log($(".objective").offset());
        $("html, body").animate(
            {
                scrollTop: $(".objective").offset().top,
            },
            1000
        );
    });
});