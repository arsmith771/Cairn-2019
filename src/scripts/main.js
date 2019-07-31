function toggleText(elem0, elem1){

	//jQuery('.text-cta').on('click', function(){
	jQuery(document).on('click', elem0, function(){
		//alert('open');
		//console.log('open');
		//jQuery(this).closest('.story-screen__graphic').siblings('.story-screen__text').animate({right: '-7px'}, 500);
		jQuery( elem1 ).animate({right: '-7px'}, 500);
		//alert('yay');

	});
}

function closeText(){

	jQuery(document).on('click', '#story-screen__text__close--0', function(){

		//console.log('closed');
		//alert('closed');
		jQuery('#story-screen__text--0').animate({right: '-410px'}, 300);

		/*
		var audioTrack = document.getElementById('audio-1'); 
		audioTrack.pause(); 
		jQuery('.story-screen__audio-ctrl').addClass('paused');
		jQuery('.story-screen__audio-ctrl').removeClass('playing');
		*/

	});
}

function ctrlAudio(){

	jQuery('.story-screen__audio-ctrl').on('click', function(){

		var audioTrack = document.getElementById('audio-1'); 

		if ( jQuery(this).hasClass('paused') ) {

			audioTrack.play();
			jQuery(this).addClass('playing');
			jQuery(this).removeClass('paused');

		} else {

			audioTrack.pause(); 
			jQuery(this).addClass('paused');
			jQuery(this).removeClass('playing');
		}
	})
	
}

function modalPosition(){

	var storyScreenW = jQuery('.story-screen').width();

	//console.log(storyScreenW);

	if ( storyScreenW < 320 ){

		jQuery('.story-screen__text').css('position','fixed');

	} else {

		jQuery('.story-screen__text').removeAttr('style');
	}
}

function pulsePosXY(){

	function getOffset(element) {
  		
  		var bound = element.getBoundingClientRect(),
  			html = document.documentElement;

  		return {
    		top: bound.top + window.pageYOffset - html.clientTop,
    		left: bound.left + window.pageXOffset - html.clientLeft
  		};
	}

var svg = document.getElementsByTagName('svg')[0];
var offset = getOffset(svg);


var x = offset.left;
var y = offset.top;

/*
var box = document.createElement('div');
box.style['position'] = "absolute";
box.style['left'] = offset.left + "px";
box.style['top'] = offset.top + "px";
box.style['background-color'] = "blue";
box.style['width'] = "32px";
box.style['height'] = "32px";
*/

//document.body.appendChild(box);

	//console.log('x = ' + x +', y = ' + y); 

}

jQuery(document).ready(function(){

	//pulsePosXY();
	toggleText('#layer-cta-0', '#story-screen__text--0');
	closeText();
	//ctrlAudio();
	modalPosition();
	//alert();
});

jQuery(window).on('resize', function(){

	//pulsePosXY();
	modalPosition();
	
});