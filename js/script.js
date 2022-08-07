  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show1");
  }
  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
  }

  const iconMenu = document.querySelector('.icon-menu');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const menuIconText = document.querySelector('.menu__icon_text');
    const headerButton = document.querySelector('.header__button_item');
    const headerLogo = document.querySelector('.header__logo_item');
    const headerLang = document.querySelector('.header__lang_item');
    const menuLink = document.querySelectorAll('.menu__link');

    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
      menuIconText.classList.toggle('active');
      headerButton.classList.toggle('active');
      headerLogo.classList.toggle('active');
      headerLang.classList.toggle('active');
      for (var i = 0; i < menuLink.length; i++) {
        menuLink[i].classList.toggle('active');
      };
    });
  }



  $(function () {
    $('.request').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.modal').removeClass('modal_active');
      $('.modal2').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.modal').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  
  $(function () {
    $('.confirm').click(function (e) {
      e.preventDefault();
      $('.modal2').addClass('modal_active');
    });
  
    $('.modal2').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $('.modal').removeClass('modal_active');
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('.back-to-request').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('.modal2').removeClass('modal_active');
    });
  
  
  });
  
  jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });
  
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
  
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
  });

  $(document).ready(function() {
    $('input[type="file"]').change(function () {
         var file = this.files; //Files[0] = 1st file

         if (file[0])
           $('.forlabel').addClass('preview');
           $('.preview').attr('src', URL.createObjectURL(file[0]));
     });
 });