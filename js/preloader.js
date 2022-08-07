$(document).ready(function () {
  var preloader    = $('#preloader'), // селектор прелоадера
      light        = $('.light'),
      progressbar  = $('.dws-progress-bar'),
      imagesCount  = $('img').length, // количество изображений
      dBody        = $('body'), //обращаемся к body
      percent      = 100 / imagesCount, // количество % на одну картинку
      progress     = 0, // точка отсчета
      imgSum       = 0, // количество картинок
      loadedImg    = 0; // счетчик загрузки картинок

  if (imagesCount >= imgSum && imagesCount > 0) {
      preloader.css('background', '#000');
      dBody.addClass('hidden');

      $(".dws-progress-bar").circularProgress({
          percent: 0,
      }).circularProgress('animate', percent, 1000);

      for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
          var img_copy        = new Image();
          img_copy.src        = document.images[i].src;
          img_copy.onload     = img_load;
          img_copy.onerror    = img_load;
      }

      function img_load () {
          progress += percent;
          loadedImg++;
          if (progress >= 100 || loadedImg == imagesCount) {
              preloader.delay(1000).fadeOut('slow');
              progressbar.addClass('display-none')
              light.addClass('light-active')
              dBody.removeClass('hidden');
          }
          $(".dws-progress-bar").circularProgress('animate', progress, 500);
      }
  } else {
      preloader.remove();
  }


});
 