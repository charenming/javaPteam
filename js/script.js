// 메뉴 스크롤
$(function () {
  $(window).scroll(function (evt) {
    var y = $(this).scrollTop();
    if (y > 120) {
      $(".header").addClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").addClass("gnbColor");
    } else {
      $(".header").removeClass("gnbBg");
      $(".gnb>li>a,.liveReservation>a>i").removeClass("gnbColor");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //app toggle
  $(".toggle>li").mouseover(function () {
    $(".subMenu").stop().slideDown();
  });
  $(".toggle>li").mouseleave(function () {
    $(".subMenu").stop().slideUp();
  });
  $(".toggleGnb>li").mouseover(function () {
    $(".subMenu").stop().slideDown();
  });
  $(".toggleGnb>li").mouseleave(function () {
    $(".subMenu").stop().slideUp();
  });
});

// space
$(function () {
  //밑에 점 버튼
  document.querySelector(".button1").addEventListener("click", function () {
    document.querySelector("#image_wapper_container").style.transform =
      "translate(0px)";
  });
  document.querySelector(".button2").addEventListener("click", function () {
    document.querySelector("#image_wapper_container").style.transform =
      "translate(-1120px)";
  });
  //화살표 버튼
  document.querySelector(".button_prev").addEventListener("click", function () {
    document.querySelector("#image_wapper_container").style.transform =
      "translate(0px)";
  });
  document.querySelector(".button_next").addEventListener("click", function () {
    document.querySelector("#image_wapper_container").style.transform =
      "translate(-1120px)";
  });
});
