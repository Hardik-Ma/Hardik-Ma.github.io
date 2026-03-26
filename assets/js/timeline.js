function toggleCategory(element) {
  // Toggle active class on parent container
  const category = element.parentElement;
  category.classList.toggle('active');
}

// Auto-expand the first category on page load
document.addEventListener('DOMContentLoaded', function() {
  // Wait for the page to load, then expand the first category
  setTimeout(function() {
    const firstCategory = document.querySelector('.responsibility-category');
    if (firstCategory) {
      firstCategory.classList.add('active');
    }
  }, 300);
});