$(document).ready(function () {
// Переключение языка
	$('.js-lang-item').on('click', function(){
		var $def =  $('.js-lang-def');
		var defLabel = $def.attr('data-label');

		$(this).addClass('inactive');
		$('.js-lang-item[data-label='+defLabel+']').removeClass('inactive');

		$def.attr('data-label', $(this).attr('data-label'));
		$def.find('.js-lang-icon').attr('src', $(this).find('.js-lang-icon').attr('src'));
	});

// Отслеживание позиции шапки и добавление ей класса
	function posHeader() {
		if ($('.js-header').offset().top > 0) {
			$('.js-header').addClass('fixed');
		}else{
			$('.js-header').removeClass('fixed');
		}
	}

	posHeader();

	$(window).scroll(function(){
		posHeader();
	});
	
	// //---------- Маска для телефона -------------
	// $.mask.definitions['~'] = "[+-]";
	// $("#phone").mask("(999) 999-9999");
});
