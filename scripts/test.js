import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
//import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* import { EaselPlugin } from "gsap/EaselPlugin";
import { TextPlugin } from "gsap/TextPlugin"; */

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
tl.to(".desc", {
    scale: 2,
    top: "5rem",
    opacity: 0.2,
    duration: 2,
}).to(
    ".image img",
    {
        scale: 1,
        top: "13vh",
        duration: 3,
    },
    "<"
);

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".plane-in-sky",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
    },
});


tl2.to(".airplane", {
    y: -500, //document.documentElement.scrollTop does NOT work with Safari nor Apple Products.
    duration: 3,
})
    .to(
        ".couple .img-div",
        {
            bottom: "0%",
            scale: 1,
            duration: 2,
        },
        "<"
    )
    .to(
        ".cloud-left",
        {
            y: 400,
            duration: 2,
        },
        "<"
    )
    .to(
        ".cloud-right",
        {
            y: 150,
            duration: 2,
        },
        "<"
    );

const cards = gsap.utils.toArray(".card");
cards.forEach((card, index) => {
    const tween = gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: () => `top bottom-=100`,
            end: () => `top top+=40`,
            scrub: true,
            //markers: true,
            invalidateOnRefresh: true,
        },
        ease: "none",
        scale: () => 1 - (cards.length - index) * 0.025,
    });

    ScrollTrigger.create({
        trigger: card,
        start: "top top+=60px",
        pin: true,
        pinSpacing: false,
        //markers: true,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
    });
});

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".thumbnails",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
    },
});
tl3.to(
    ".first-col",
    {
        y: -200,
        duration: 2,
    },
    "<"
)
    .to(
        ".second-col",
        {
            y: -400,
            duration: 2,
        },
        "<"
    )
    .to(
        ".third-col",
        {
            y: -100,
            duration: 2,
        },
        "<"
    );

const sections = gsap.utils.toArray(".panel");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
    },
});
