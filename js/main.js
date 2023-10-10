$(function () {

  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".toggle_btn").on("click", function () {
    ($("#header").toggleClass("open"));
  });
  $("#navi a").on("click", function () {
    $("#header").toggleClass("open");
  });

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 2000, "swing");
    return false;
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  $(window).scroll(function () {
    $(".fadein").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 100) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });




  $(window).scroll(function () {
    $(".inview-img-right").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-right");
      }
    });
  });


  $(window).scroll(function () {
    $(".inview-img-left").each(function () {
      var scroll = $(window).scrollTop();
      var target = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > target - windowHeight + $(this).outerHeight()) {
        $(this).addClass("slide-left");
      }
    });
  });

});