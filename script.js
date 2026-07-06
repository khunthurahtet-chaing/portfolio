// Slideshow Functionality
let slideIndex = 1;
let autoSlideTimer;

function startAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
        plusSlides(1);
    }, 4500);
}

showSlides(slideIndex);
startAutoSlide();

function plusSlides(n) {
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    startAutoSlide();
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
