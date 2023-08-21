var t = gsap.timeline();
t.from("#navbar", {
  delay: 1,
  opacity: -1,
  y: 35,

  duaration: 1,
});
t.from("#navbar h3, #navbar h4, #navbar h5", {
  opacity: 0.5,
  y: -80,
  stagger: 0.15,
});
t.from("#left #big", {
  opacity: -1,
  y: 45,

  duaration: 1,
});

t.from("#left #big h1", {
  x: -800,
  opacity: 0,
  stagger: 0.25,
});

t.from("#left #small", {
  opacity: 0,
  duration: 0.3,
  scale: 1.4,
});

t.to("#right img ", {
  x: 400,
  opacity: 0.5,

  duration: 3,
  scrollTrigger: {
    trigger: "#right img",
    scroller: "body",
    // markers: "true",
    start: "top 15%",
    end: "top -50%",

    scrub: 1,
  },
});
t.from("#right", {
  delay: 0.3,
  scale: 0.85,
  duaration: 0.5,
});
t.to("#left ", {
  x: -400,
  opacity: 0,
  opacity: 0.5,

  duration: 3,
  scrollTrigger: {
    trigger: "#left",
    scroller: "body",

    start: "top 15%",
    end: "top -50%",

    scrub: 1,
  },
});

t.from("#page2 .box ", {
  opacity: 0,
  y: 100,
  scale: 0.01,
  duration: 0.1,

  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",

    scrub: "true",
    start: "top 170%",
    end: "top 55%",
  },
});
