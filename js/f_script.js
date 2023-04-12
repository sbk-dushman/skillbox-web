$(document).ready(function(){
	
	// плавный скролл перехода по якарям   
	$("nav").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({ scrollTop: top }, 1500);
	});
	// клик по кнопкам вызова формы 
	
	$('body').on('click', '.click-button', function (e) {
		e.preventDefault();
		console.log('asd')

		let pagePos = $(window).scrollTop();
		$('body').addClass('is-pop-up-open').attr('data-scroll', pagePos);
		// $('body').css('top', -pagePos);

		$('.popup-container').fadeIn("slow");
		$('#popup-container').css('visibility', 'visible');

	});

	$('body').on('click', '.recall-form__exit-btn', function (e) {
		let pos = parseInt($('body').attr('data-scroll'), 10);

		$('body').css('top', 'auto');

		$('.popup-container').fadeOut("slow");

		$('body').removeClass('is-pop-up-open').removeAttr('data-scroll');
		window.scrollTo(0, pos);
	});
	// // Проверка на клик по контейнеру формы
	$('body').on('click', '#popup-container',function(event) {
		if(event.target == this){
			$(this).fadeOut("slow");	
			$('body').removeClass('is-pop-up-open').removeAttr('data-scroll');
		}

	});
	$('body').on('click','.m-menu__btn', function (e) {
		e.preventDefault();
		console.log('asd')
		$('.m-menu__btn').toggleClass('menu-close');
		if ($('.popup-menu').is(':visible')) {

			$('body').css('top', 'auto');

			$('.popup-menu').hide('.slideUp(400)');

			$('body').removeClass('is-pop-up-open').removeAttr('data-scroll');
			// window.scrollTo(0, pos);
		}
		else{
			let pagePos = $(window).scrollTop();
		$('body').addClass('is-pop-up-open').attr('data-scroll', pagePos);
		$('body').css('top', -pagePos);
			$('.popup-menu').show('.slideUp(400)');
		}
	});	 
	

	//  нажатие на ссылку в меню
	$(".popup-menu__elements ").on("click", "a", function () {
		$(".popup-menu").css('display', 'none');
		$('.m-menu__btn').toggleClass('menu-close');
		$('body').removeClass('is-pop-up-open').removeAttr('data-scroll');
		
	});
	//  cкрипт записи в базу
	$('#recall-form').on('submit', function () {
		
	 
		let data = {
			'name': $(this).find('#recall__name').val(),
			'tel': $(this).find('#recall__tel').val(),
			'email': $(this).find('#recall__email').val()

		};
		$.post('/php/api.php', data, function(response) {
			if (response == 1) {
				$('#recall-form input').val('');
				$('#popup-container').fadeOut("slow");
			}
			
		});

	});
	// валидация формы
	
	$('form').each(function () {
		$(this).validate({
			// errorPlacement(error, element) {
			// 	return true;
			// },
			focusInvalid: false,
			rules: {
				name: {
					required: true,
					maxlength: 15,
				},
				phone: {
					required: true,
				},
				email:{
					required: true,
					email:true
				}
			},
			messages: {
				
				name: {
					required: 'Введите имя',
					maxlength: 'Можно ввести максимум 15 букв'
				},

				phone: {
					required: 'Введите телефон',
				},
				email: {
					required: 'Введите email',
					email: "Введите действительный email",
				}
			},
			submitHandler(form) {
				let th = $(form);
				th.trigger('reset');
					$('body').removeClass('is-pop-up-open').removeAttr('data-scroll');
					$('.popup-container').fadeOut("slow");
					console.log('Отправлено')
				
	return true;
		}
			
		});
	});


			
	// Маска
	$('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-99-99" }); //specifying options


});
