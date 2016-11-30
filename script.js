$(document).ready(function() {

//FADE IN/OUT EFFECT FOR TRASH BIN PIC
	setTimeout(function() {
		$("#trash-bin-white").fadeIn(800);
	}, 700);
	// var x = 0;
	$("#trash-bin-white").click(function(){
		// $(".chat").fadeOut();
		$("#trash-bin-white").fadeOut(800);
		setTimeout(function() {
			$("#trash-bin-white").fadeIn(1000);
			// $("#talking0").show();
			// $("#talking0").fadeIn(300);
			// $("#talking0").fadeIn(1400);
		}, 2400);
		
	});

//TEXT FADES
	setTimeout(function() {
		$("#talking0").fadeIn();
	}, 600);
	setTimeout(function() {
		$("#talking0").fadeOut();
		$("#talking0").fadeOut(function() {
			$("#talking1").fadeIn();
			setTimeout(function() {
				$("#talking1").fadeOut();
				$("#talking1").fadeOut(function() {
					$("#talking2").fadeIn();
				}); 
			}, 6000);
		}); 
	}, 6000);

//BOUNCE FIRST DOWN BUTTON
	setTimeout(function() {
      	$("#down0").effect("bounce", { times: 3, distance:100 }, 400);
   	}, 300);

// ANIMATE SMOOTH SCROLL FOR DOWN BUTTONS
	$("#down0").click(function() {
	 	$('html, body').animate({
	    	scrollTop: $("#intro-section").offset().top
	 	}, 700);
	})
	$("#down1").click(function() {
	 	$('html, body').animate({
	    	scrollTop: $("#facts-section").offset().top
	 	}, 700);
	})
	$("#down2").click(function() {
	 	$('html, body').animate({
	    	scrollTop: $("#lifestyle-section").offset().top
	 	}, 700);
	})

//SHOW HIGHLIGHT BOX FOR DOWN BUTTON ON Hover 
	$(".down-button").hover(function() { 
    		$('.highlight-box').fadeIn(); 
		}, function() { 
    		$('.highlight-box').fadeOut(); 
	});
//SNAP TO NEXT SECTION: 
//When scrolling down, && past halfway of current section, snap to next section
})