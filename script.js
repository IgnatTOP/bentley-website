document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.slider-arrow.left');
    const nextButton = document.querySelector('.slider-arrow.right');
    let currentSlide = 0;

    function showSlide(index) {
        // Handle index bounds
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentSlide = index;
    }

    // Next/Previous controls
    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

    // Dot controls
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Auto advance slides
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Show first slide
    showSlide(0);
});
