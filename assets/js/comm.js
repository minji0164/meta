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

//aos
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

//waypoint
var counter1 = new CountUp("counter1", 0, 70, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});
var counter2 = new CountUp("counter1", 0, 70, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});
var counter3 = new CountUp("counter1", 0, 70, 0, 4, {
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
var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter2.reset();
    } else {
      counter2.start();
    }
  },
  offset: "50%",
});
var waypoint1 = new Waypoint({
  element: document.getElementById("waypoint1"),
  handler: function (direction) {
    if (direction == "up") {
      counter3.reset();
    } else {
      counter3.start();
    }
  },
  offset: "50%",
});

//animate.css
window.addEventListener("scroll", function () {
  var element = document.querySelector(".txt-box");
  var positionFromTop = element.getBoundingClientRect().top;

  // 스크롤 위치에 따라 CSS 클래스 추가 또는 제거
  if (positionFromTop - window.innerHeight < 0) {
    element.classList.add("animate__fadeInLeft");
  } else {
    element.classList.remove("animate__fadeInLeft");
  }
});

// window.addEventListener("scroll", function () {
//   var element = document.querySelector(".per-img1");
//   var positionFromTop = element.getBoundingClientRect().top;

//   // 스크롤 위치에 따라 CSS 클래스 추가 또는 제거
//   if (positionFromTop - window.innerHeight < 0) {
//     element.classList.add("fade-in");
//   } else {
//     element.classList.remove("fade-in");
//   }
// });
