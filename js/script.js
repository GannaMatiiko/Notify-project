$(document).ready(function () {
	$('#slider_container').owlCarousel({
		items: 21,
		responsive:{ 
			320:{
				items:7
			},
			480:{
				items:10
			},
			600:{
				items:16
			},
			768:{
				items:21
			}
		}
	});

	$('.person').on('click', function() {
		var name = $(this).data('name');
		var quote = $(this).data('quote');

		$('.testimonials_name').text(name);
		$('.testimonials_text').text(quote);
	});
});