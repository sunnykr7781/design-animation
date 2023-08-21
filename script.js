var t = gsap.timeline();
t.from("#navbar", {
  delay: 0.5,
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
t.from("#right img", {
  x: 700,
});
t.from("#right", {
  delay: 0.3,
  scale: 0.85,
  duaration: 0.5,
});

t.from("#page2 .box , footer", {
  opacity: 0,
  x: -700,
  scale: 0.01,
  duration: 0.1,

  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",

    scrub: 1,
    start: "top 100%",
    end: "top 39.9%",
  },
});
