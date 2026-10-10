$( document ).ready( function () { 
	if (location.href.match(/submit/)) {
		$('#contact').css('height','auto');
		$('html,body').scrollTop( 0 );
		TweenMax.from ($('#contact') , 0.5, {
			height: 0	 
		});
	}

	$('a[href=#contact]').click( function () {
		$('#contact').css('height','auto');
		$('html,body').scrollTop( 0 );
		TweenMax.from ($('#contact') , 0.5, {
			height: 0	 
		});
	})
	$('#contact .contact-close').click( function () {
		TweenMax.to ($('#contact') , 0.5, {
			height: 0	 
		});
	})
});