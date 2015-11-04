$(window).load(function(){

	if ($(window).width() >= 750) {
		$('.animateTop').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated fadeIn');
		   },
		   tolerance: 100
		})





		$('.animateZoom').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated zoomIn');
		   },
		   tolerance: 100
		})

		$('.animateZoom-delay').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated zoomIn');
		   },
		   tolerance: 400
		})





		$('.animateLeft').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated fadeInLeft');
		   },
		   tolerance: 100
		})

		$('.animateLeft-delay').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated fadeInLeft');
		   },
		   tolerance: 400
		})




		$('.animateRight').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated fadeInRight');
		   },
		   tolerance: 100
		})
		$('.animateRight-delay').onScreen({
			doIn: function() {
		 	 $(this).addClass('visible animated fadeInRight');
		   },
		   tolerance: 400
		})




		$('li .numbers').onScreen({
			doIn: function() {
			$(this).addClass('visible');
		 	 var value = $(this).text();
		 	$(this).animate({ num: value/* - начало */ }, {
				    duration: 2000,
				    step: function (num){
				        this.innerHTML = (num).toFixed(0)
				    }
				});
		   },
		   tolerance: 200
		})

		$('.percent').onScreen({
			doIn: function() {
			$(this).addClass('visible');
		 	 var value = $(this).text();
		 	$(this).animate({ num: value/* - начало */ }, {
				    duration: 2000,
				    step: function (num){
				        this.innerHTML = (num).toFixed(1) + '%'
				    }
				});
		   },
		   tolerance: 200
		})
	}; // End of IF

	$('.animate-svg-slider').onScreen({
		doIn: function() {
	 	 $(this).addClass('animated');
	   },
	   tolerance: 210
	})

	$('.animate-dot').onScreen({
		doIn: function() {
	 	 $(this).addClass('animated');
	   },
	   tolerance: 250
	})

	$('.animate-circle').onScreen({
		doIn: function() {
	 	 $(this).attr('id','animated');
	   },
	   tolerance: 250
	})	
	
})
