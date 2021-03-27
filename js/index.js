console.log("index.js file") 

$(".navigation").on("click", function() {
    $(".inline-block").fadeOut(500);
    $("this").delay("slow").fadeIn(500);
});
$(".logo").on("click", function(){
    $("#aboutMe").fadeOut(500);
    $(".myName").delay("slow").fadeIn(500);
});
$(".navigation ").on("click", function() {
    var targetDiv = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

