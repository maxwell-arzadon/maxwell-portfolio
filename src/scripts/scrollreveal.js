import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  origin: 'bottom', 
  distance: '50px',
  duration: 1000,
  delay: 200,
  easing: 'ease-in-out',
  reset: true, // Re-trigger animations on scroll
});

// Reveal elements with the specified selector
sr.reveal('.reveal', {
  interval: 200, // Delay between each revealed element
});
