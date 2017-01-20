$(function() {

	// set the offset pixels automatically on how much the sidebar height is.
	// plus the top margin or header height
	var offsetPixels = $('.sidebarBox').outerHeight() + 30;

	outerHeight = $('.sidebarBox').outerHeight();
	console.log(outerHeight);

	$(window).scroll(function() {
		if ( $(window).scrollTop() > offsetPixels ) {
			
			var scrollTop = $(window).scrollTop();
			console.log(scrollTop);
			console.log(offsetPixels);

			$('.scrollingBox').css({
				'position': 'fixed',
				'top': '40px'
			});
		} else {
			$('.scrollingBox').css({
				'position': 'static'
			});
		}
	});

});