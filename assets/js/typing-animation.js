document.addEventListener("DOMContentLoaded", function() {
  // Add animation delay to stagger the animations
  const animatedElements = document.querySelectorAll('.animate-on-load');
  animatedElements.forEach((el, index) => {
    el.style.setProperty('--animation-order', index);
  });
  
  // Simple animation for the hero elements
  setTimeout(() => {
    animatedElements.forEach(el => {
      el.classList.add('fade-in');
    });
  }, 100);
  
  // Initialize the word transition animation
  initWordTransition();
});

/**
 * Initializes the smooth word transition animation for the hero subtitle
 */
function initWordTransition() {
  // Get the element where the animation will be displayed
  const typingElement = document.querySelector('.hero-typing');
  if (!typingElement) return;

  // The base text that stays constant
  const baseText = "I build reactors that are ";

  // Words to cycle through
  const words = ["smart", "robust", "adaptive", "sustainable", "carbon conscious"];

  // Create the HTML structure for the animation
  const staticTextSpan = document.createElement('span');
  staticTextSpan.textContent = baseText;

  const wordContainer = document.createElement('span');
  wordContainer.className = 'word-container';

  // Clear the element and add our new structure
  typingElement.innerHTML = '';
  typingElement.appendChild(staticTextSpan);
  typingElement.appendChild(wordContainer);

  // Create spans for each word
  words.forEach((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'animated-word';
    wordSpan.textContent = word;

    // Make the first word visible
    if (index === 0) {
      wordSpan.classList.add('visible');
    }

    wordContainer.appendChild(wordSpan);
  });

  // Calculate the widest word and set container width
  let maxWidth = 0;
  wordElements.forEach(el => {
    // Briefly make el visible to get its width
    const originalOpacity = el.style.opacity;
    const originalPosition = el.style.position;
    
    el.style.opacity = '0';
    el.style.position = 'relative'; // relative gives true width
    el.style.display = 'inline-block';
    
    const width = el.offsetWidth;
    if (width > maxWidth) maxWidth = width;
    
    // Restore
    el.style.opacity = '';
    el.style.position = '';
    el.style.display = '';
  });
  
  if (maxWidth > 0) {
    wordContainer.style.width = (maxWidth + 10) + 'px';
  }

  // Set up the animation cycle
  let currentIndex = 0;

  // Function to cycle through words
  function cycleWords() {
    // Hide current word
    wordElements[currentIndex].classList.remove('visible');

    // Move to next word
    currentIndex = (currentIndex + 1) % words.length;

    // Show next word
    wordElements[currentIndex].classList.add('visible');

    // Schedule next cycle
    setTimeout(cycleWords, 3000); // Change word every 3 seconds
  }

  // Start the animation cycle after a delay
  setTimeout(cycleWords, 3000); // First change after 3 seconds
}