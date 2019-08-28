/*

 function toggleText(elem0, elem1){


	jQuery(document).on('click', elem0, function(event){
	event.preventDefault();
	
		
		jQuery( elem1 ).fadeIn();


	});
}
*/

function closeText(elem0, elem1, elem2, elem3){

	jQuery(document).on('click', elem0, function(){

		//console.log('closed');
		//alert('closed');
		//jQuery( elem1).animate({right: '-400px'}, 300);
		jQuery( elem1).fadeOut();
		
		var audioTrack = document.getElementById( elem2 ),
			control = jQuery( elem3 );
		audioTrack.pause(); 
		control.addClass('paused');
		control.removeClass('playing');
		

	});
}

function ctrlAudio(elem0, elem1){

	jQuery( elem0 ).on('click', function(){

		var audioTrack = document.getElementById( elem1 ); 

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


function fadeOutLoadingModal(){

	jQuery('#loading-modal').fadeOut();
}

function toggleTextLayer(){

	jQuery('.text-cta').on('click', function(){

		console.log('clicked');

		jQuery(this).closest('.story-screen__graphic').siblings('.story-screen__text').fadeIn();

	})
}

function isElementinViewPort2(){

   jQuery('.story-screen').each(function(index){

      var screen = document.getElementById('story-screen--' + index),
          rect = screen.getBoundingClientRect();

      if ( ( rect.top >= -100 ) && ( rect.top < 100 ) ) {

        jQuery(this).addClass('animate');

      } else {

        jQuery(this).removeClass('animate');
      }
      //console.log(screen);

   });
}

function screenBorders(){

	var winW = window.innerWidth,
		article = jQuery('.story-screen'),
		article0 = article.eq(0),
		articleWidth = article0.width();

	console.log(articleWidth + 60, winW)

	if ( ( articleWidth + 60) <= winW ){

		article.addClass('story-screen--with-border');

	} else {

		article.removeClass('story-screen--with-border');
	}
}

jQuery(window).on('load', function(){

	
});


jQuery('#app').on('scroll', function(){

    isElementinViewPort2();
});

jQuery(document).ready(function(){

	screenBorders();
	toggleTextLayer();
	isElementinViewPort2();

	//pulsePosXY();
	//appCenter();
	/* toggleText('#layer-cta-0', '#story-screen__text--0');
	toggleText('#layer-cta-1', '#story-screen__text--1');
	toggleText('#layer-cta-2', '#story-screen__text--2');
	toggleText('#layer-cta-3', '#story-screen__text--3');
	toggleText('#layer-cta-4', '#story-screen__text--4');
	toggleText('#layer-cta-5', '#story-screen__text--5');
	toggleText('#layer-cta-6', '#story-screen__text--6');
	toggleText('#layer-cta-7', '#story-screen__text--7');
	toggleText('#layer-cta-8', '#story-screen__text--8');
	toggleText('#layer-cta-9', '#story-screen__text--9');
	toggleText('#layer-cta-10', '#story-screen__text--10');
	toggleText('#layer-cta-11', '#story-screen__text--11');
	toggleText('#layer-cta-12', '#story-screen__text--12');
	toggleText('#layer-cta-13', '#story-screen__text--13');
	toggleText('#layer-cta-14', '#story-screen__text--14');
	toggleText('#layer-cta-15', '#story-screen__text--15');
	toggleText('#layer-cta-16', '#story-screen__text--16'); */
	closeText('#story-screen__text__close--0', '#story-screen__text--0', 'audio-0', '#ctrl-0');
	closeText('#story-screen__text__close--1', '#story-screen__text--1');
	closeText('#story-screen__text__close--2', '#story-screen__text--2');
	closeText('#story-screen__text__close--3', '#story-screen__text--3');
	closeText('#story-screen__text__close--4', '#story-screen__text--4');
	closeText('#story-screen__text__close--5', '#story-screen__text--5');
	closeText('#story-screen__text__close--6', '#story-screen__text--6');
	closeText('#story-screen__text__close--7', '#story-screen__text--7');
	closeText('#story-screen__text__close--8', '#story-screen__text--8');
	closeText('#story-screen__text__close--9', '#story-screen__text--9');
	closeText('#story-screen__text__close--10', '#story-screen__text--10');
	closeText('#story-screen__text__close--11', '#story-screen__text--11');
	closeText('#story-screen__text__close--12', '#story-screen__text--12');
	closeText('#story-screen__text__close--13', '#story-screen__text--13');
	closeText('#story-screen__text__close--14', '#story-screen__text--14');
	closeText('#story-screen__text__close--15', '#story-screen__text--15');
	closeText('#story-screen__text__close--16', '#story-screen__text--16');
	ctrlAudio('#ctrl-0', 'audio-0');
	modalPosition();
	fadeOutLoadingModal();

});

jQuery(window).on('resize', function(){

	//pulsePosXY();
	screenBorders();
	modalPosition();

	
});