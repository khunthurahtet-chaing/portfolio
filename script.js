// Slideshow Functionality (event-driven, no inline handlers)
let slideIndex = 1;
let autoSlideTimer;

function startAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => plusSlides(1), 4500);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  startAutoSlide();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  startAutoSlide();
}

function showSlides(n) {
  const slides = Array.from(document.getElementsByClassName('slide'));
  const dots = Array.from(document.getElementsByClassName('dot'));
  if (!slides.length) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  slides.forEach((s, i) => {
    s.classList.toggle('active', i === slideIndex - 1);
    s.style.display = i === slideIndex - 1 ? 'block' : 'none';
    s.setAttribute('aria-hidden', i === slideIndex - 1 ? 'false' : 'true');
  });

  dots.forEach((d, i) => {
    d.classList.toggle('active', i === slideIndex - 1);
    d.setAttribute('aria-current', i === slideIndex - 1 ? 'true' : 'false');
  });
}

// Wire up controls once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Initialize
  showSlides(slideIndex);
  startAutoSlide();

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => plusSlides(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => plusSlides(1));

  // Dots with data-slide attribute
  const dots = Array.from(document.querySelectorAll('.dot[data-slide]'));
  dots.forEach(d => {
    d.addEventListener('click', (e) => {
      const n = parseInt(d.getAttribute('data-slide'), 10);
      if (!Number.isNaN(n)) currentSlide(n);
    });
    // make it keyboard accessible
    d.setAttribute('tabindex', '0');
    d.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        d.click();
      }
    });
  });
});
