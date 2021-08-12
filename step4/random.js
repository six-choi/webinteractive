var random_number_X;
var random_number_Y;

// $(document).ready(function () {
for (var i = 0; i < 10; i = i + 1) {
    $(".number-button").on("click", function () {
        random_number_X = parseInt(Math.random() * $("body").width());
        random_number_Y = parseInt(Math.random() * $("body").height());
        $(".number-container").html(random_number_X + " and " + random_number_Y);

        var circle = 
         "<div class= 'circle style='top:" +
         random_number_Y +
         "; left:" +
         random_number_X +
         "; '></div>";
        $("body").append(circle);
    });
};