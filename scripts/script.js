$('document').ready(function() {
	$('.container').on('click', '.menuButton', function() {
		$('#navMenu').addClass('activeNav');
	});
	$('.container').on('click', '.close', function() {
		$('#navMenu').removeClass('activeNav');
	});

	$('.container').on('click', '.next', function() {
		nextSlide();
	});
	$('.container').on('click', '.prev', function() {
		prevSlide();
	});
});

function nextSlide() {
	const slideCount = $('.heroImg').length;
	$('.heroImg').each(function(i) {
		if ($(this).hasClass('front')) {
			let nextImg = '';
			let nextText = '';
			let currentText = $(`.card-${i + 1}`);
			if (i + 1 === slideCount) {
				nextImg = $('.heroImg').first();
				nextText = $('.card-1');
			} else {
				nextImg = $(this).next();
				nextText = $(`.card-${i + 2}`);
			}
			$(this).removeClass('front').addClass('behind');
			currentText.removeClass('front').addClass('behind');
			nextImg.removeClass('behind').addClass('front');
			nextText.removeClass('behind').addClass('front');
			return false;
		}
	});
}
function prevSlide() {
	const slideCount = $('.heroImg').length;
	$('.heroImg').each(function(i) {
		if ($(this).hasClass('front')) {
			let prevImg = '';
			let nextText = '';
			let currentText = $(`.card-${i + 1}`);
			if (i === 0) {
				prevImg = $('.heroImg').last();
				nextText = $(`.card-${slideCount}`);
			} else {
				prevImg = $(this).prev();
				nextText = $(`.card-${i}`);
			}
			$(this).removeClass('front').addClass('behind');
			currentText.removeClass('front').addClass('behind');
			prevImg.removeClass('behind').addClass('front');
			nextText.removeClass('behind').addClass('front');
			return false;
		}
	});
}
