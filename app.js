let controller;
let slideScene;

function animateSlides() {
  controller = new ScrollMagic.Controller();
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP (select element, time(1sec), object with properties that you want to change)
    //gsap.to(revealImg, 1, { x: "100%" });
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideTl.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
