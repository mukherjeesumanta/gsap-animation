import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

