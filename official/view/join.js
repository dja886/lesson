 $(document).ready(function() {
		var liContent = $(".list_content")
		for(var i = 0; i < liContent.length ; i++){
			var k = liContent[i].index;
			
			$(".list_content").mouseenter(function(){
				$(this).css("background","#42a4ff");
				$(this).find(".IMg").attr("src","images/join/minus.png")
				$(this).siblings(".pictxt").slideDown(500);
			})
//			$(".list_content .pictxt").mouseleave(function(){
//				$(this).siblings(".pictxt").css("display","none")
//			})
		}
    });
    











