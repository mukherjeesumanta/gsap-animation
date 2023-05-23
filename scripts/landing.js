import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to(
    //.add("start")
    ".hero .img-section img",
    {
        scale: 1,
        marginTop: "-5%",
        duration: 3,
    }
    //"start"
).to(
    ".hero .text-wrapper",
    {
        scale: 2,
        top: "5rem",
        opacity: 0.2,
        duration: 2,
    },
    "<"
);

gsap.utils.toArray(".card").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
    });
});
