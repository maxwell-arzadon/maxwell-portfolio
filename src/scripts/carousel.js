let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

function updateCarousel() {
  // Calculate the offset
  const offset = -currentSlide * 100;
  
  // Move the slides container
  document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
}

// Next slide
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

// Previous slide
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});
