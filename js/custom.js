$(document).ready(function() {
    $('.button-side-nav').click(function() {
        if(($("main").css("padding-left"))==="240px") {
            $("ul.side-nav").css("left","-240px");
            $("main").css("padding-left","0px");
        } else {
            $("ul.side-nav").css("left","00px");
            $("main").css("padding-left","240px");
        }
    });
});