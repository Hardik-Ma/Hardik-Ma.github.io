document.addEventListener('DOMContentLoaded', () => {
    initResumeModal();
});

function initResumeModal() {
    // Create modal container if it doesn't exist
    let modalContainer = document.querySelector('.resume-modal-container');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.className = 'resume-modal-container';
        
        // Add your resume file path here
        const pdfPath = '/assets/pdf/Sagar_Wadke_Resume_En.pdf'; // Update this path

        modalContainer.innerHTML = `
            <div class="resume-modal">
                <div class="resume-modal-header">
                    <h2 class="resume-modal-title">Resume</h2>
                    <button class="resume-modal-close">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="resume-modal-content">
                    <iframe src="${pdfPath}" class="resume-iframe" title="Resume"></iframe>
                </div>
            </div>
        `;

        document.body.appendChild(modalContainer);

        // Add event listeners
        const closeButton = modalContainer.querySelector('.resume-modal-close');
        closeButton.addEventListener('click', closeResumeModal);

        modalContainer.addEventListener('click', (e) => {
            if (e.target === modalContainer) {
                closeResumeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalContainer.classList.contains('active')) {
                closeResumeModal();
            }
        });
    }

    // Add click event to resume buttons
    const resumeButtons = document.querySelectorAll('.menu-resume-button');
    resumeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openResumeModal();
        });
    });
}

function openResumeModal() {
    const modalContainer = document.querySelector('.resume-modal-container');
    if (!modalContainer) return;

    modalContainer.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        modalContainer.querySelector('.resume-modal').classList.add('active');
    }, 10);
}

function closeResumeModal() {
    const modalContainer = document.querySelector('.resume-modal-container');
    if (!modalContainer) return;

    const modal = modalContainer.querySelector('.resume-modal');
    modal.classList.remove('active');

    setTimeout(() => {
        modalContainer.classList.remove('active');
        document.body.style.overflow = '';
    }, 300);
}