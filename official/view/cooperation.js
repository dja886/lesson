$(document).ready(function(){
	$(".periphery").mouseenter(function(){
        $(this).children(".introduce").fadeIn(200,function(){
            $(".periphery").mouseleave(function(){
                $(this).children('.introduce').fadeOut(300);
            })
        });
    });
    $(function() {
            $(".superior").click(function() {
                $("html,body").animate({
                    scrollTop: 0
                }, 1000);
            })
        })
})



