$(function () {
	$('.header__top-content').find('.header__сity-info').css('display', 'none');
	$('.footer__city-select').find('.footer__city-info').css('display', 'none');
	$('.header__title').find('.header__body-city').css('display', 'none');
	if (localStorage.getItem("myKey")) {
		var stored_select = localStorage.getItem("myKey");
		$('.' + stored_select).css('display', 'flex');
		$('span.' + stored_select).css('display', 'inline');
	} else {
		$('.stavropol').css('display', 'flex');
		$('span.stavropol').css('display', 'inline');
	};
	if (localStorage.getItem("vhod")) {
		$('.offer-notice').css("display", "none")
	};

	var modal = $modal({
		title: 'Ваш город',
		content: '<ul class="city__list"><li class="city__list-item"><a class="stavropol" href="#">Ставрополь</a></li><li class="city__list-item"><a class="krasnodar" href="#">Краснодар</a></li><li class="city__list-item"><a class="makhachkala" href="#">Махачкала</a></li><li class="city__list-item"><a class="rostov-on-don" href="#">Ростов-на-Дону</a></li></ul>',
	});

	document.addEventListener('click', function (e) {
		if (e.target.dataset.toggle === 'modal') {
			modal.show();
		}
	});

	$('.city__list-item a').on('click', function (e) {
		e.preventDefault()
		var selected = e.target.className;
		modal.hide();
		$('.header__top-content').find('.header__сity-info').css('display', 'none');
		$('.footer__city-select').find('.footer__city-info').css('display', 'none');
		$('.header__title').find('.header__body-city').css('display', 'none');
		localStorage.setItem("myKey", selected);
		$('.' + selected).css('display', 'flex');
		$('span.' + selected).css('display', 'inline');
	});
	$('.offer-notice a').on('click', function (e) {
		e.preventDefault();
		$('.offer-notice').css("display", "none")
		localStorage.setItem("vhod", 'ok');
	})
	// $('.burger').on('click', function (e) {
	// 	e.preventDefault()
	// 	$(this).toggleClass('burger--active')
	// });
	$('.burger').on('click', function (e) {
		e.preventDefault()
		$('.burger').toggleClass('burger--active');
		$('.burger-menu').toggleClass('burger-menu--open');
		$('.overlay').toggleClass('overlay--show');
	  });

	if (matchMedia) {
		var screen = window.matchMedia('(max-width:900px)');
		screen.addListener(changes);
		changes(screen);
	}
	function changes(screen) {
		if (screen.matches) {
			$('.catalog__list--mileage').slick({
				arrows: false,
				slidesToShow: 2,
				dots: true,
				appendDots: $('.catalog__dots--mileage'),
				centerMode: true,
				responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						centerMode: false
					  }
					}
				]
				// dots: true,
			});
			$('.catalog__list--without').slick({
				arrows: false,
				slidesToShow: 2,
				dots: true,
				appendDots: $('.catalog__dots--without'),
				centerMode: true,
				responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						centerMode: false
					  }
					}
				]
				// dots: true,
			});
		}
	}
	// $('.catalog__list').slick({
	// 	arrows: false,
	// 	centerMode: true,
	// 	dots: true,
	// });
});
