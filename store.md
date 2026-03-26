---
layout: page
title: Items For Sale
permalink: /store/
---

<div class="store-intro">
  <h2>Items For Sale</h2>
  <p>Browse through items I currently have available. Click on any item to express interest.</p>
</div>

<div class="products-grid">
  {% for product in site.data.products %}
    <div class="product-card" onclick="openModal('{{ product.name | slugify }}')">
      <div class="product-image-wrapper">
        <img src="{{ product.image }}" alt="{{ product.name }}" class="product-image">
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }}</p>
      <p class="product-pickup"><i class="fas fa-map-marker-alt"></i> Pickup: {{ product.pickup }}</p>
      <p class="product-description">{{ product.description }}</p>
      <button class="interest-btn" onclick="event.stopPropagation(); openProductInquiry('{{ product.name }}')">
        I'm Interested
      </button>
    </div>

    <!-- Modal for each product -->
    <div id="modal-{{ product.name | slugify }}" class="product-modal">
      <div class="modal-content">
        <span class="close-modal" onclick="closeModal('{{ product.name | slugify }}')">&times;</span>
        <div class="modal-product-details">
          <div class="modal-image">
            <img src="{{ product.image }}" alt="{{ product.name }}">
          </div>
          <div class="modal-info">
            <h2>{{ product.name }}</h2>
            <p class="modal-price">{{ product.price }}</p>
            <p class="modal-pickup"><i class="fas fa-map-marker-alt"></i> Pickup: {{ product.pickup }}</p>
            <p class="modal-description">{{ product.description }}</p>
            {% if product.details %}
            <div class="modal-additional-details">
              {{ product.details | newline_to_br }}
            </div>
            {% endif %}
            <button class="interest-btn large" onclick="openProductInquiry('{{ product.name }}')">
              I'm Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

<script>
  function openModal(productId) {
    document.getElementById(`modal-${productId}`).style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeModal(productId) {
    document.getElementById(`modal-${productId}`).style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target.classList.contains('product-modal')) {
      event.target.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }

  function openProductInquiry(productName) {
    // From your URL, I can see these are the correct IDs
    const formId = '1FAIpQLSfl78TsAuL3yCf9jdlmClJdPsPJ2WPIAEenB2zJ3f5plV4Iyg';
    const productFieldId = '910720600'; 
    
    // Create the pre-filled Google Form URL
    const formUrl = `https://docs.google.com/forms/d/e/${formId}/viewform?usp=pp_url&entry.${productFieldId}=${encodeURIComponent(productName)}`;
    
    // Open the form in a new tab
    window.open(formUrl, '_blank');
  }
</script>