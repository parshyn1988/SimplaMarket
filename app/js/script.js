$(function(){
  /*======================= menu-toggle =========================*/
  $('.main-menu-toggle').click(function(){    //клик на кнопку
    $(this).toggleClass('active');            //добавляем класс 'active'
    $('.main-menu').slideToggle(400);         //отображаем меню
  });
  /*======================= slider =========================*/
  $('.img-slider').slick({                    //параметры для slick слайдера
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    speed: 300,
    slidesToShow: 5,
    vertical: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-up.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-down.png" alt=""></button>',
    infinite: true
  });
  /*======================= slider click image =========================*/
  $('.img-slider__image').click(function(){   //клик на изображении из слайдера
    var src = $(this).attr('src');            //сохраняем путь к файлу в переменную
    $('#img-wrap img').attr('src', src);      //заменяем путь к файлу
  });
  /*======================= popup image =========================*/
  $('#img-wrap img').click(function(){        //клик на изображении из слайдера
    var src_popup = $(this).attr('src');      //сохраняем путь к файлу в переменную
    $('.block-popup').fadeIn();               //отображаем блок
    $('.popup-img').attr('src', src_popup);   //присваиваем путь к файлу
    $('body').css('overflow-y', 'hidden');    //отменяем скролл
  });
  $('.icon-cross').click(function(){          //клик на крестик
    $('body').css('overflow-y', 'scroll');    //разрешаем скролл
    $('.block-popup').fadeOut();              //скрываем блок
  });
  /*======================= hidden-text =========================*/
  $('.btn-read-more').click(function(){       //аналогично menu-toggle
    $('.hidden-text').toggleClass('active');
    $('.hidden-text').slideToggle(400);
  });
  /*======================= callback =========================*/
  $('.btn-callback').click(function(){        //аналогично popup image
    $('.block-callback').fadeIn();
  });
  $('.callback__close, .callback__button').click(function(){
    $('.block-callback').fadeOut();
  });
});

