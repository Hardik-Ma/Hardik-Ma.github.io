document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  
  fetch('/Testimonials/testimonials.json')
    .then(response => response.json())
    .then(testimonials => {
      testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        
        card.innerHTML = `
          <div class="testimonial-text">${testimonial.text}</div>
          <div class="testimonial-name">${testimonial.name}</div>
          <div class="testimonial-position">${testimonial.position}</div>
          <div class="testimonial-company">${testimonial.company}</div>
        `;
        
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error loading testimonials:', error);
      container.innerHTML = '<p>Error loading testimonials. Please try again later.</p>';
    });
});