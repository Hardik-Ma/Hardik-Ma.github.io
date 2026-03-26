// toggle between light and dark themes
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('darkModeToggleBtn');
  if (toggleBtn) {
    // Set initial state from localStorage
    const isDark = localStorage.getItem('theme') === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');

    // Set initial icon visibility
    updateIconVisibility(isDark);

    toggleBtn.addEventListener('click', function() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update icon visibility on click
      updateIconVisibility(newTheme === 'dark');
    });
  }
});

function updateIconVisibility(isDark) {
  const sunIcon = document.querySelector('.sun-icon');
  const moonIcon = document.querySelector('.moon-icon');
  if (isDark) {
    sunIcon.style.opacity = '0';
    sunIcon.style.transform = 'scale(0.8)';
    moonIcon.style.opacity = '1';
    moonIcon.style.transform = 'scale(1)';
  } else {
    sunIcon.style.opacity = '1';
    sunIcon.style.transform = 'scale(1)';
    moonIcon.style.opacity = '0';
    moonIcon.style.transform = 'scale(0.8)';
  }
}