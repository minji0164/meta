let prevScrollpos = $(window).scrollTop();
$(window).scroll(function () {
  let currentScrollPos = $(this).scrollTop();
  if (prevScrollpos > currentScrollPos) {
    $("#header").css("top", "0");
  } else {
    $("#header").css("top", "-100px");
  }
  prevScrollpos = currentScrollPos;
});

var swiper = new Swiper(".per-slide", {
  pagination: {
    el: ".swiper-pagination",
  },
});
