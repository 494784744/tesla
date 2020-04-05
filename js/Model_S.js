$(function(){
	
	//侧栏跳转功能
	$('nav ul li').on('click',function(){
		var i = $(this).index();
		var top  =$('body>div').eq(i).offset().top;
		$('html,body').stop().animate({
			scrollTop:top
		});
	});
	
	//侧栏鼠标移入功能
	$('nav ul li').on('mouseenter',function(){
		var i = $(this).index();
		$(this).css({
			borderLeft:'3px solid #ffffff',
			color:'#ffffff'
		}).find('span').show();
	});
	
	//侧栏鼠标移出功能
	$('nav ul li').on('mouseleave',function(){
		var i = $(this).index();
		$(this).css({
			borderLeft:'1px solid #ffffff70',
			color:'#ffffff70'
		}).find('span').hide();
	});
	
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>0&&$(window).scrollTop()<500){
			
			$('.Model_S .title').show(2000);
			$('.Model_S .lead').show(2400);
			$('.Model_S .tips').show(2600);
		}
		else if($(window).scrollTop()>500&&$(window).scrollTop()<1200){
			
			$('.safety .right ul').fadeIn(2000);
			$('.safety .left .top .titleS').show(2400).next().show(2600).next().slideDown(2800);
			$('.safety .left .down').slideDown(2400);
		}
		else if($(window).scrollTop()>1200&&$(window).scrollTop()<1900){
			
			$('.property .c2').show(2000);
			$('.property .down .left').show(2400);
			$('.property .down .right').fadeIn(2400);
			
		}
		else if($(window).scrollTop()>1900&&$(window).scrollTop()<2600){
			
			$('.endurance .c3').show(2000);
			$('.endurance .right .top').slideDown(2400);
			$('.endurance .right .down').slideDown(2400);
			
		}
		else if($(window).scrollTop()>2600&&$(window).scrollTop()<3400){
			
			$('.aided .p1').show(2000);
			$('.aided .down .left').slideDown(2500);
			$('.aided .down .right').show(2500);
			
		}
		else if($(window).scrollTop()>3400&&$(window).scrollTop()<4100){
			
			$('.interior .p2').show(2000);
			$('.interior .down .left').slideDown(2500);
			$('.interior .down .right').show(2500);
			
		}
		else if($(window).scrollTop()>4100&&$(window).scrollTop()<4800){
			
			$('.appearance .c3').show(2000);
			$('.appearance .down .left').slideDown(2400);
			$('.appearance .down .right').fadeIn(2400);
			
		}
		else if($(window).scrollTop()>4800&&$(window).scrollTop()<5500){
			
			$('.specification .data .top h1').show(2000).next('.btnbk').show(2500).next().show(2500);
			$('.specification .data .down ul').slideDown(2500);
			
		}
	})
	
});