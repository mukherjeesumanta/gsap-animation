import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin";

/*
SplitText.min.js is a Club GreenSock perk

import { SplitText } from "gsap/SplitText";

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/



const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

lenis.on("scroll", (e) => {
  lenis.on("scroll", ScrollTrigger.update);

  /* gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  }); */
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);



const tl = gsap.timeline();
tl.to('.hero', {
  scale: 1.5,
  duration: 5
})
.fromTo('.image', {
  scale: 1.5
}, {
  scale: 3,
  duration: 2,
  x: '+=200',
  y: '+=200'
})

/* let cards = gsap.utils.toArray(".card");
cards.forEach(card => {
  gsap.to(card, {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: card,
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: true
    }
  })
}) */
gsap.utils.toArray('.card').forEach((panel, i) => {
	ScrollTrigger.create({
		trigger: panel,
		start: 'top top',
		pin: true,
		pinSpacing: false
	})
})


let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector(".container").offsetWidth
  }
});