'use strict';

$(function(){

	var $slider = $("#lowerBodySlider");
	var $slide = $(".slide",$slider);
	var tracker=1;
	var $slides = $(".slides",$slider);

	var timer;

	function start(){  

		timer = setInterval(function(){

			$("#lowerBodySlider .slides").
			animate({"margin-left":"-=877px"},2000,function() {
					if( ++tracker === $slide.length )
					{
						tracker = 1;
						$slides.css("margin-left", 0);
					};
			});
	},
	5000);
	};

	start();

	function stop(){
		clearInterval(timer);
	}

	$slides.on('mouseenter', stop);
	$slides.on('mouseleave', start);

});