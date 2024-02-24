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

//waypoint
var counter1 = new CountUp("counter1", 0, 70, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});
var counter2 = new CountUp("counter2", 0, 2, 0, 4, {
  useEasing: true,
  useGrouping: true,
  separator: ",",
});
var counter3 = new CountUp("counter3", 0, 7, 0, 4, {
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

//비디오 일시정지
$(document).ready(function () {
  $(".pause-btn").click(function () {
    var video = $(this).closest("section").find(".vd")[0];
    if (video.paused) {
      video.play();
      $(this).find(".pause").text("pause");
    } else {
      video.pause();
      $(this).find(".pause").text("play_arrow");
    }
  });
});
