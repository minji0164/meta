//header
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

//slide
var swiper = new Swiper(".per-slide", {
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

//waypoint
var counter1 = new CountUp("counter1", 0, 70, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});

var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter1.reset();
    } else {
      counter1.start();
    }
  },
  offset: "50%",
});
