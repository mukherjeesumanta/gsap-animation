import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(MotionPathPlugin);


const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});




