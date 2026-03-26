document.addEventListener('DOMContentLoaded', function() {
  // Set dark mode as default if no theme is saved
  if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    
    // Update toggle button state if it exists
    const darkModeToggle = document.getElementById('darkModeToggleBtn');
    if (darkModeToggle) {
      darkModeToggle.classList.add('dark-mode-active');
    }
  }
});