---
layout: page
title: Bollywood Dumb Charades
permalink: /dumbcharades/
---

<div class="game-container">
  <div class="filters">
    <div class="year-filter">
      <label for="yearStart">Release Year:</label>
      <select id="yearStart">
        <option value="1950">1950</option>
        <!-- Dynamically populated -->
      </select>
      <span>to</span>
      <select id="yearEnd">
        <option value="2024">2024</option>
        <!-- Dynamically populated -->
      </select>
    </div>
    
    <div class="genre-filter">
      <label>Genre:</label>
      <div class="genre-options">
        <label><input type="checkbox" value="Action"> Action</label>
        <label><input type="checkbox" value="Drama"> Drama</label>
        <label><input type="checkbox" value="Comedy"> Comedy</label>
        <label><input type="checkbox" value="Romance"> Romance</label>
      </div>
    </div>
    
    <div class="difficulty-filter">
      <label>Difficulty:</label>
      <select id="difficulty">
        <option value="all">All Levels</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  </div>

  <div class="movie-display">
    <h2 id="movieTitle">Click the button to start!</h2>
    <p id="movieInfo"></p>
  </div>

  <div class="game-controls">
    <button id="nextMovie" class="game-button">Get Next Movie</button>
    <button id="skipMovie" class="game-button secondary">Skip</button>
    <button id="toggleTimer" class="game-button timer-button">Start Timer (3:00)</button>
  </div>

  <div class="timer-display" id="timer">3:00</div>
</div>

<script>
  // Convert Jekyll data to JavaScript array
  const movies = [
    {% for movie in site.data.movies %}
      {
        title: "{{ movie.Title }}",
        year: {{ movie.Year }},
        genre: ["{{ movie.Genre | split: ',' | join: '","' }}"],
        difficulty: "{{ movie.Difficulty }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>
<script src="{{ site.baseurl }}/assets/js/dumbcharades.js"></script>