document.addEventListener('DOMContentLoaded', () => {
    setupImageModal();
});

function setupImageModal() {
    // Create modal container if it doesn't exist
    let modalContainer = document.querySelector('.image-modal-container');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.className = 'image-modal-container';
        
        modalContainer.innerHTML = `
            <div class="image-modal">
                <div class="image-modal-header">
                    <h2 class="image-modal-title">Image Preview</h2>
                    <button class="image-modal-close">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="image-modal-content">
                    <img src="" alt="Full size image" class="modal-image">
                    <p class="modal-caption"></p>
                </div>
            </div>
        `;

        document.body.appendChild(modalContainer);

        // Add event listeners
        const closeButton = modalContainer.querySelector('.image-modal-close');
        closeButton.addEventListener('click', closeImageModal);

        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeImageModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
                closeImageModal();
            }
        });
    }

    // Make all project images clickable
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.style.cursor = 'pointer';
        
        // Add click event listener
        img.addEventListener('click', function() {
            const caption = this.closest('.project-image').querySelector('.image-caption');
            openImageModal(this.src, caption ? caption.textContent : '');
        });
        
        // Add a hint that images are clickable
        const imageContainer = img.closest('.project-image');
        if (imageContainer && !imageContainer.querySelector('.zoom-hint')) {
            const zoomHint = document.createElement('div');
            zoomHint.className = 'zoom-hint';
            zoomHint.innerHTML = '<i class="fas fa-search-plus"></i>';
            imageContainer.appendChild(zoomHint);
        }
    });
}

function openImageModal(imageSrc, captionText) {
    const modalContainer = document.querySelector('.image-modal-container');
    const modalImage = modalContainer.querySelector('.modal-image');
    const modalCaption = modalContainer.querySelector('.modal-caption');
    
    // Set image source and caption
    modalImage.src = imageSrc;
    modalCaption.textContent = captionText;
    
    // Show modal with animation
    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    setTimeout(() => {
        modalContainer.querySelector('.image-modal').classList.add('active');
    }, 10);
}

function closeImageModal() {
    const modalContainer = document.querySelector('.image-modal-container');
    const modal = modalContainer.querySelector('.image-modal');
    
    // Hide modal with animation
    modal.classList.remove('active');
    
    setTimeout(() => {
        modalContainer.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }, 300);
}