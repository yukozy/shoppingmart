// 轮播动画
$(function(){
	var mySwiper=new Swiper(".swiper-container",{
		pagination:".swiper-pagination",
		paginationClickable:true,
		spaceBetween:20,
		mousewheelControl:true,
		loop:true,
		autoplay:1500,
		autoplayDisableOnInteraction:true,
	});
})


window.onload=function(){
	// 倒计时
	var timer=document.getElementById("timer");
	clock();
	setInterval(clock,1000);
	function clock(){
		var nowTime = new Date();
		var newTime = new Date(2017,4,17,00,00,00);
		var onlyTime = Math.floor((newTime-nowTime)/1000);
		var strTime = Math.floor(onlyTime/3600)+":"+Math.floor(onlyTime%3600/60)+":"+onlyTime%60;
		timer.innerHTML = strTime;

	}

}

// 城市选择
$(function(){
	$(".select").css("display","none");
	var state=0;
	$(".nav_left").click(function(){
		if(state==0){
			$(".select").show();
			$(".down").css("transform","rotate(180deg)");
			state=1;
		}else{
			$(".select").hide();
			$(".down").css("transform","rotate(360deg)");
			state=0;
		}
	})
	$(".select li").click(function(){
		$(".text").html($(this).html());
	});

});

// 查看全部团购
var state=0;
function checkAll(){
	if(state==0){
		$("#groupMore").slideDown(500);
		$("#open").css("display","none");
		$("#close").css("display","block");
		state=1;
	}else{
		$("#groupMore").slideUp(500);
		$("#open").css("display","block");
		$("#close").css("display","none");
		state=0;
	}


}

var state=0;
function lookAll(){
	if(state==0){
		$("#shopping").show();
		$(".jbnPro").hide();

		state=1;
	}else{
		$("#shopping").hide();
		$(".jbnPro").show();
		state=0;
	}
}