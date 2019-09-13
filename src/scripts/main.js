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

function closeTextAll(){

	var i;
	for (i = 0; i < 18; i++) {

  		closeText('#story-screen__text__close--' + i, '#story-screen__text--' + i, 'audio-' + i, '#ctrl-' + i);
	}
}

function loadingAudio(){

	jQuery(document).on('click','.story-screen__audio-ctrl.playing', function(){

   		jQuery(this).next('.story-screen__audio__loading').css('display','inline-block');

   		setTimeout(function() { 

     		jQuery('.story-screen__audio__loading').fadeOut(); 

   		}, 2000);

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

function ctrlAudioAll(){

	var i;
	for (i = 0; i < 18; i++) {

  		ctrlAudio('#ctrl-' + i, 'audio-' + i)
	}
}

function audioEnded( elem0, elem1){

	var audioTrack = document.getElementById(elem0),
		button = document.getElementById(elem1);

	audioTrack.addEventListener('ended',function() {

		button.classList.add('paused');
		button.classList.remove('playing');
		console.log('audio ended');

	});
}

function audioEndedAll(){

	var i;
	for (i = 0; i < 18; i++) {

		audioEnded('audio-' + i, 'ctrl-' + i);
	}
}

function modalPosition(){

	var storyScreenW = jQuery('.story-screen').width();

	//console.log(storyScreenW);

	if ( storyScreenW < 320 ){

		jQuery('.story-screen__text').css('position','fixed');

	} else {

		jQuery('.story-screen__text').css('position','absolute');
	}
}


function fadeOutLoadingModal(){

	jQuery('#page-loading').fadeOut();
}

function toggleTextLayer(){

	jQuery('.text-cta').on('click', function(e){

			jQuery(this).closest('.story-screen__graphic').siblings('.story-screen__text').fadeIn();
			console.log('clicked');

	})

	jQuery('.text-cta').on('keypress', function(e){

		if (e.which == 13) {

			jQuery(this).closest('.story-screen__graphic').siblings('.story-screen__text').fadeIn();

		}

	})
}

function isElementinViewPort2(){

   jQuery('.story-screen').each(function(index){

      var 	jThis = jQuery(this),
      		screen = document.getElementById('story-screen--' + index),
          	rect = screen.getBoundingClientRect();

      if ( ( rect.top >= -100 ) && ( rect.top < 100 ) ) {

        jThis.addClass('animate');
        jThis.find('.story-screen__footer').show();

      } else {

        jThis.removeClass('animate');
        jThis.find('.story-screen__footer').hide();
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

	if ( ( articleWidth + 60) <= winW ){ // if the article("screen") width is less than or equal to the viewport width

		article.addClass('story-screen--with-border'); // add left/right borders to screens
		jQuery('body').addClass('body--with-graphics'); // add graphics to page background



	} else {

		article.removeClass('story-screen--with-border');
		jQuery('body').removeClass('body--with-graphics');
	}
}

function leafAnim(){

// browser detect
var BrowserDetect = {
        init: function() {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function(data) {
		for (var i = 0; i < data.length; i++) {
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
			} else if (dataProp) return data[i].identity;
		}
	},
	searchVersion: function(dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
	},
	dataBrowser: [{
		string: navigator.userAgent,
		subString: "Chrome",
		identity: "Chrome"
	}, {
		string: navigator.userAgent,
		subString: "OmniWeb",
		versionSearch: "OmniWeb/",
		identity: "OmniWeb"
	}, {
		string: navigator.vendor,
		subString: "Apple",
		identity: "Safari",
		versionSearch: "Version"
	}, {
		prop: window.opera,
		identity: "Opera",
		versionSearch: "Version"
	}, {
		string: navigator.vendor,
		subString: "iCab",
		identity: "iCab"
	}, {
		string: navigator.vendor,
		subString: "KDE",
		identity: "Konqueror"
	}, {
		string: navigator.userAgent,
		subString: "Firefox",
		identity: "Firefox"
	}, {
		string: navigator.vendor,
		subString: "Camino",
		identity: "Camino"
	}, { // for newer Netscapes (6+)
		string: navigator.userAgent,
		subString: "Netscape",
		identity: "Netscape"
	}, {
		string: navigator.userAgent,
		subString: "MSIE",
		identity: "Explorer",
		versionSearch: "MSIE"
	}, {
		string: navigator.userAgent,
		subString: "Gecko",
		identity: "Mozilla",
		versionSearch: "rv"
	}, { // for older Netscapes (4-)
		string: navigator.userAgent,
		subString: "Mozilla",
		identity: "Netscape",
		versionSearch: "Mozilla"
	}],
	dataOS: [{
		string: navigator.platform,
		subString: "Win",
		identity: "Windows"
	}, {
		string: navigator.platform,
		subString: "Mac",
		identity: "Mac"
	}, {
		string: navigator.userAgent,
		subString: "iPhone",
		identity: "iPhone/iPod"
	}, {
		string: navigator.platform,
		subString: "Linux",
		identity: "Linux"
	}]

};
BrowserDetect.init();

if ( !( BrowserDetect.browser === 'Safari' && BrowserDetect.version < 9 ) )  {
		

		// Define the type of leaves (to match with various CSS classes)
var leafColours = ['red-leaf', 'brown-leaf', 'yellow-leaf', 'green-leaf'];
var leafMovements = ['small-move', 'medium-move', 'large-move', 'large-move'];
var MAX_LEAVES = 6;
var container = document.querySelector('.container');
var leafCounter = 0;
setInterval( function() {
  // Don't do anything if window not in focus
  var narrowScreen = jQuery('.body--with-graphics').length;

if( (document.visibilityState === 'hidden') || ( narrowScreen < 1) ){
    console.info('Browser not in focus, so we will not generate new leaves');
    return;
  }
  // Some garbage cleaning first up
  if(leafCounter > MAX_LEAVES){
    // Remove oldest leave once we hit the max limit;
    console.info(`Limit reached on number of leaves  (${MAX_LEAVES}), so we are culling the oldest one...`);
  container.removeChild(container.querySelector('.leaf'));
  }
  // Create a leaf div
  var leaf = document.createElement('div');
  
  // Randomly select leaf colour
  var selectedLeafColour = Math.floor(Math.random() * leafColours.length);
  leaf.classList.add(leafColours[selectedLeafColour]);
  
  // Randomly select leaf type
  var selectedLeafMovement = Math.floor(Math.random() * leafMovements.length);
  leaf.classList.add(leafMovements[selectedLeafMovement]);
  
  // Create supporting structure for leaf
  leaf.classList.add('leaf');
  var yAxis = document.createElement('div');
  yAxis.classList.add('y-axis');
  var xAxis = document.createElement('div');
  xAxis.classList.add('x-axis');
  
  yAxis.appendChild(xAxis);
  leaf.appendChild(yAxis);
  
  // Set random x-axis starting position
  var horizontalPosition = Math.random() * window.innerWidth;
  leaf.style.position = 'absolute';
  leaf.style.left = `${horizontalPosition}px`;
  
  // Set to start slightly off top of screen
  var verticalPosition = -25;
  leaf.style.top = `${verticalPosition}vh`;
  container.appendChild(leaf);
  
  // Increment leaf counter
  leafCounter++;
}, 1000)


}
}


function addFooter(){

	jQuery('.story-screen').not('.story-screen--10, .story-screen--16, .story-screen--15, .story-screen--13, .story-screen--11').each(function(){

		var jThis = jQuery(this),
			articleH = jThis.height(),
			svgH = jThis.find('.story-screen__graphic').height(),
			footer = jThis.find('.story-screen--footer').length;

		if ( ( articleH < svgH ) && ( footer < 1 ) ) {

			jThis.append('<div class="story-screen--footer" />');

		} else if ( articleH >= svgH )  {

			jThis.find('.story-screen--footer').remove();

		}

	});
}


jQuery(window).on('load', function(){

	leafAnim();
});


jQuery('#app').on('scroll', function(){

    isElementinViewPort2();
});

jQuery(document).ready(function(){

	screenBorders();
	toggleTextLayer();
	isElementinViewPort2();
	addFooter();

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
	/*
	closeText('#story-screen__text__close--0', '#story-screen__text--0', 'audio-0', '#ctrl-0');
	closeText('#story-screen__text__close--1', '#story-screen__text--1', 'audio-1', '#ctrl-1');
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
	*/

	closeTextAll();


	//ctrlAudio('#ctrl-0', 'audio-0');
	//ctrlAudio('#ctrl-1', 'audio-1');
	//ctrlAudio('#ctrl-2', 'audio-2');
	loadingAudio();
	ctrlAudioAll();
	audioEndedAll();
	modalPosition();
	fadeOutLoadingModal();

});

jQuery(window).on('resize', function(){

	//pulsePosXY();
	screenBorders();
	modalPosition();
	//addFooter();

	
});