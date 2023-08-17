const controller = new ScrollMagic.Controller();
const videoSlides = document.querySelectorAll('.custom-video-slide');

// Set up animations for each slide
videoSlides.forEach((slide, index) => {
  const animation = gsap.to(slide, {
    x: `-${index * 100}%`,
    ease: 'power1.out',
  });

  new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.5, // Adjust this value based on when you want the animation to start
    duration: '50%', // Adjust this value based on your design
  })
  .setTween(animation)
  .addTo(controller);
});
