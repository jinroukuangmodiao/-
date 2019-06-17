$(function(){
    var count=0;
    // 右侧边栏点击实现轮播图切换
    $(".right").click(function(){
            flag=false;
            count++;
          if (count==$(".item").length){
            count=0;
        }
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().fadeOut(100);
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
    })
    // 左侧边栏点击实现轮播图切换
    $(".left").click(function(){
        count--;
        if (count==-1){
            count=$(".item").length-1;
        }
        console.log(count);
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().fadeOut(100);
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
    })
    // 轮播图自动切换
   setInterval(function(){
    count++;
        if (count==$(".item").length){
            count=0;
        }
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().fadeOut(100);
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
   },10000)
//    小圆点切换轮播图
    $("#indicator1").click( function(){
        count=0;
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().hide();
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
    })
    $("#indicator2").click( function(){
        count=1;
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().hide();
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
    })
    $("#indicator3").click( function(){
        count=2;
        $(".item").eq(count).stop().fadeIn(800).siblings().stop().hide();
        $(".carousel-indicators>li").eq(count).addClass("active").siblings().removeClass("active");
    })
    // 详细介绍切换
    $("#option1").click(function(){
        $(".option a").removeClass("active");
        $("#option1").addClass("active");              
        $(".taboption").siblings().stop().hide().eq(0).stop().fadeIn();
        return false;
    })
    $("#option2").click(function(){
        $(".option a").removeClass("active");
        $("#option2").addClass("active");
        $(".taboption").siblings().stop().hide().eq(1).stop().fadeIn();
        return false;
    })
    $("#option3").click(function(){
        $(".option a").removeClass("active")
        $("#option3").addClass("active");
        $(".taboption").siblings().stop().hide().eq(2).stop().fadeIn();
        return false;
    })





})
