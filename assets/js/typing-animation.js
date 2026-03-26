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
  const baseText = "I build machines that can ";

  // Words to cycle through
  const words = ["think", "see", "learn", "adapt", "solve", "create"];

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

  // Set up the animation cycle
  let currentIndex = 0;
  const wordElements = wordContainer.querySelectorAll('.animated-word');

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