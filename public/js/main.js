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
	
// Маска для телефона
	$.mask.definitions['~'] = "[+-]";
	$('.js-phone').mask('+7(999) 999-9999');

// Табуляция
	tabPage('.js-tabs-page');
	tabPage('.js-tabs-inner');

	function tabPage(name) {
		if ($(name).length) {

			$(name).each(function(){
				if (!$(this).hasClass('js-tabs-no-active')) {
					$(this).find(name+'-item:first').addClass("active");
					$(this).find(name+'-content-item:first').fadeIn();
				}
			});

			var windowWidth = $(window).width();

			$(window).resize(function(){
				windowWidth = $(window).width();

				$(name).each(function(){
					// console.log('11111');
					if ($(this).find('.js-tab-select').length) {
						console.log($(this));
						if (windowWidth < 768) {
							// console.log('222');
							var dataTab = $(name+'-item.active').attr('data-item');
							// console.log(dataTab);

							$(this).find('.js-tab-select option').removeAttr('selected');
							$(this).find('.js-tab-select option[data-item='+dataTab+']').attr('selected', 'selected')

							$(this).find('.js-tab-select').trigger('change');
						}
					}
				});
			});


			$(name+'-item').click(function(e) {
				e.preventDefault();
				var $parent = $(this).parents(name);
				var dataTab = $(this).attr('data-item');

				$parent.find(name+'-content-item').hide();
				$parent.find(name+'-item').removeClass('active');

				$(this).addClass("active");
				$parent.find('#' + dataTab).fadeIn();
			});

			$('.js-tab-select').change(function() {
				var $parent = $(this).parents(name);
				var dataTab = $(this).find('option:selected').data('item');

				$parent.find(name+'-content-item').hide();
				$parent.find(name+'-item').removeClass('active');

				$parent.find('[data-item ='+ dataTab+']').addClass("active");
				$parent.find('#' + dataTab).fadeIn();

			});
		}
	}

// Открыть/Закрыть мобильное меню
	$('.js-open-menu').click(function(){
		$('.js-top-menu-wrap').slideDown(300);
		$('.js-body').addClass('no-scroll');
	});

	$('.js-close-menu').click(function(){
		 closeCatMenu();
	});

	function closeCatMenu() {
		$('.js-top-menu-wrap').slideUp(300);
		$('.js-body').removeClass('no-scroll');
	}

// Слайдер партнеров включаем на мобильном разрешении
	var widthWindow = $(window).width();
	var showPartner = false;

	sliderPartner();

	$(window).on('resize',function(){
		widthWindow = $(window).width();
		sliderPartner();
	});

	function sliderPartner() {
		if (widthWindow < 768) {
			if (showPartner == false) {
				$('.js-partner-list').slick({
					infinite: false,
					slidesToShow: 2.5,
					slidesToScroll: 2,
					arrows: false,
					dots: false,
				});

				showPartner = true;
			}
		}else{
			if (showPartner == true) {
				$('.js-partner-list').slick('unslick');
				showPartner = false;
			}
		}
	}

// Слайдер блогеров включаем на мобильном разрешении
	var showBlogger = false;

	sliderBlogger();

	$(window).on('resize',function(){
		widthWindow = $(window).width();
		sliderBlogger();
	});

	function sliderBlogger() {
		if (widthWindow < 768) {
			if (showBlogger == false) {
				$('.js-team-list').slick({
					infinite: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
				});

				showBlogger = true;
			}
		}else{
			if (showBlogger == true) {
				$('.js-team-list').slick('unslick');
				showBlogger = false;
			}
		}
		
	}
});
