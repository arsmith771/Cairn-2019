function toggleText(){

	jQuery('.text-cta').on('click', function(){

		console.log('open');
		jQuery(this).closest('.story-screen__graphic').siblings('.story-screen__text').animate({right: '-7px'}, 500);
		//alert('yay');

	});
}

function closeText(){

	jQuery('.story-screen__text__close').on('click', function(){

		console.log('closed');
		jQuery('.story-screen__text').animate({right: '-410px'}, 300);

		var audioTrack = document.getElementById('audio-1'); 
		audioTrack.pause(); 
		jQuery('.story-screen__audio-ctrl').addClass('paused');
		jQuery('.story-screen__audio-ctrl').removeClass('playing');

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

	console.log(storyScreenW);

	if ( storyScreenW < 320 ){

		jQuery('.story-screen__text').css('position','fixed');

	} else {

		jQuery('.story-screen__text').removeAttr('style');
	}
}

jQuery(document).ready(function(){

	toggleText();
	closeText();
	ctrlAudio();
	modalPosition();
});

jQuery(window).on('resize', function(){

	modalPosition();
	
});