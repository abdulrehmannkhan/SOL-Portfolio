$(document).ready(function () {
		initScroll();
		initMenu();
});

var initScroll = function () {
		$('html').addClass('ready');

		var _scroll = function () {
				if ($(window).scrollTop() > 0) {
						$('html').addClass('scrolled');
				} else {
						$('html').removeClass('scrolled');
				}

				$('.js_detect-scroll').each(function () {
						var el = $(this);

						if (($(window).scrollTop() + $(window).outerHeight() - 100) > el.offset().top) {
								el.addClass('visible');
						} else {
								//el.removeClass('visible');
						}
				});
				$('.js_scroll-progress').each(function () {
						var el = $(this);
						var i;
						var p = (($(window).scrollTop() + $(window).outerHeight() - el.offset().top) / ($(window).outerHeight() / 2));

						if (p <= 0) {
								i = 0;
						} else if (p > 0 && p < 1) {
								i = p;
						} else {
								i = 1
						}

						el.css({
								'--percent': i
						});
				});
		};

		_scroll();
		$(window).on('scroll resize', _scroll);
};

var initMenu = function () {
		$('.toggle-menu, .menu-fader').on('click', function () {
				$('html').toggleClass('open-menu');
		});
};
