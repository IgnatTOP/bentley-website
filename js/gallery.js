document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = [
        'images/image31.png',
        'images/image32.png',
        'images/image33.png',
        'images/image34.png',
        'images/image35.png',
        'images/image36.png',
        'images/image37.png',
        'images/image38.png',
        'images/image39.png',
        'images/image40.png',
        'images/image41.png',
        'images/image42.png',
        'images/image43.png',
        'images/image44.png',
        'images/image45.png',
        'images/image46.png',
        'images/image47.png',
        'images/image48.png',
        'images/image49.png',
        'images/image50.png',
        'images/image51.png',
        'images/image52.png',
        'images/image53.png',
       
    ];

    const galleryGrid = document.querySelector('.gallery-grid');
    const modal = document.getElementById('fullscreen-modal');
    const modalImage = document.getElementById('fullscreen-image');
    const closeButton = document.querySelector('.close-modal');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentImageIndex = 0;

    // Create gallery grid
    galleryImages.forEach((src, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        img.loading = 'lazy';
        
        imgContainer.appendChild(img);
        galleryGrid.appendChild(imgContainer);

        imgContainer.addEventListener('click', () => openFullscreen(index));
    });

    // Open fullscreen
    function openFullscreen(index) {
        currentImageIndex = index;
        modalImage.src = galleryImages[currentImageIndex];
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close fullscreen
    function closeFullscreen() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Navigate to previous image
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
    }

    // Navigate to next image
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImage.src = galleryImages[currentImageIndex];
    }

    // Event listeners
    closeButton.addEventListener('click', closeFullscreen);
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') closeFullscreen();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeFullscreen();
    });
});
