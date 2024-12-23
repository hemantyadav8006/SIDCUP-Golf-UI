var cursorDot = document.querySelector("#cursor-dot");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
  cursorDot.style.left = e.x - 10 + "px";
  cursorDot.style.top = e.y - 10 + "px";
  cursorDot.style.transitionDuration = 0.4;
  cursorDot.style.transitionDelay = 0.3;
});

document.addEventListener("mousemove", function (e) {
  cursorBlur.style.left = e.x - 150 + "px";
  cursorBlur.style.top = e.y - 150 + "px";
  cursorBlur.style.transitionDuration = 0.4;
  cursorBlur.style.transitionDelay = 0.4;
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    cursorDot.style.scale = 3;
    cursorDot.style.border = "1px solid #fff";
    cursorDot.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    cursorDot.style.scale = 1;
    cursorDot.style.border = "0px solid #95C11E";
    cursorDot.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from(".colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: ".colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
