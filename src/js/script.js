$('.slick').each(function(){
	const $this = $(this),
		$blockArrows = $('.controls-arrows', $this),
		$blockDots = $('.controls-dots', $this),
		$slick = $('.carousel', $this);
	$slick.slick({
		dots: true,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		appendArrows: $blockArrows,
        appendDots: $blockDots,
        autoplay:true,
		speed: 500,
        autoplaySpeed:1000,
        pauseOnHover: true,
        cssEase: 'lianer'
    });
});
    $('.slick_slider').each(function(){
        const $this = $(this),
            $blockDots = $('.controls-dots', $this),
            $slick = $('.carousel_second', $this);
        $slick.slick({
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            appendDots: $blockDots,
            autoplay:true,
            speed: 500,
            autoplaySpeed:1000,
            pauseOnHover: true,
            cssEase: 'lianer',
            initialSlide: 1,
            lazyLoad: 'ondemand',
            responsive: [
                {
                  breakpoint: 576,
                  settings: {
                    dots: false,
                    arrows: false
                  },
                }
            ]
        });
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })

    // Smooth scroll and pageup
    function windowSize(){
        if ($(window).width() > '991'){
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    }  //адптивность под мобильную версию (кнопочка вверх)

    $(window).scroll(function() {
        if($(this).scrollTop() > 1600) {
            windowSize();
        }  else {
            $('.pageup').fadeOut();
        } 
    });

    $("a[href^='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    }); 




    //Modal Windows

    // !!заметка $('[data-modal=consultat]').fadeOut(); //для красивого скрытия элементов со страницы.

    $('[data-modal=consultat]').on('click', function() {
        $('.overlay, #consultat').fadeIn('slow');
    }); //скрипт для открытия модальных окон
    $('.modal__close').on('click', function() {
        $('.overlay, #consultat, #thanks').fadeOut('slow');
    }); //скрипт для закрытия модальных окон



    function validateForm(form){
        $(form).validate({
            rules: {
                name: { 
                    required : true,
                    minlength: 2
                },
                phone: {
                    required : true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email:true
                }
            },
            messages: {
                name: {
                    required: "Введите Ваше имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: {
                    required: "Введите Ваш номер телефона",
                    minlength: jQuery.validator.format("Введите {0} символов!")
                  },
                email: {
                    required: "Введите Вашу электронную почту",
                    email: "Вы не правильно ввели адрес"
                }
            },
            submitHandler: function() {
                $.ajax({
                }).done(function() {
                    $('#modal-form').find("input").val("");   
                    $('#modal').fadeOut('fast');
                    $('#thanks').fadeIn('fast');
                    $('form').trigger('reset');
                });
                return false;
              }
        });
    };

    validateForm('#consultat form');

    $('input[name=phone]').mask("+38 (099) 999-9999");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({

        }).done(function(){
            $(this).find("input").val("");
            $('#consultat, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

