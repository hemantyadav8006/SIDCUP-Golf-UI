var cursorDot = document.querySelector("#cursor-dot");
var cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
  cursorDot.style.left = e.x + 5 + "px";
  cursorDot.style.top = e.y + 5 + "px";
  cursorBlur.style.left = e.x - 150 + "px";
  cursorBlur.style.top = e.y - 150 + "px";
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
    end: "top -75%",
    scrub: 2,
  },
});
