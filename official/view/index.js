$(function () {
  $('.shutter').shutter({
    //shutterW: 1000,  容器宽度
    //shutterH: 358,  容器高度
    isAutoPlay: true, // 是否自动播放
    playInterval: 3000, // 自动播放时间
    curDisplay: 4, // 当前显示页
    fullPage: false // 是否全屏展示
  });
  /*tab栏切换*/
  $("#business_ul>li").mouseenter(function(){
    // console.log(11111)
      var i = $(this).index();
      $(this).addClass("business_li_border").siblings("li").removeClass("business_li_border");
      $("#business_ulTwo>li").eq(i).show().siblings('li').hide();
  })



$("#myVideo").addClass('pause'); //for check pause or play add a class
			$('#myVideo').click(function() {
				if($(this).hasClass('pause')) {
					$("#myVideo").trigger("play");
					$(this).removeClass('pause');
					$(this).addClass('play');
				} else {
					$("#myVideo").trigger("pause");
					$(this).removeClass('play');
					$(this).addClass('pause');
				}
			})

});