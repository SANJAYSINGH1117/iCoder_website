$(document).ready(function () {

    //   $(".nav-link dropdown-toggle").click(function(){
    // $("this").css(1000,function(){
    //     console.log("It is shown.")

    $(".nav-link dropdown-toggle").mouseleave(function () {
        $(".nav-link dropdown-togglex").css("background", "purple");
        $(".nav-link dropdown-toggle").css("color", "orange");
        var a = $(".nav-link dropdown-toggle").html();
        console.log(a);


    });









});