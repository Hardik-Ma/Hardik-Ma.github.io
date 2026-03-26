let currentMovies = [...movies];
let timer;
let timeLeft = 180; // 3 minutes in seconds
let isTimerRunning = false;

// Initialize year dropdowns
function initializeYearDropdowns() {
    const yearStart = document.getElementById('yearStart');
    const yearEnd = document.getElementById('yearEnd');
    const currentYear = new Date().getFullYear();
    
    for (let year = 1950; year <= currentYear; year++) {
        yearStart.add(new Option(year, year));
        yearEnd.add(new Option(year, year));
    }
    yearEnd.value = currentYear;
}

// Filter movies based on selected criteria
function filterMovies() {
    const yearStart = parseInt(document.getElementById('yearStart').value);
    const yearEnd = parseInt(document.getElementById('yearEnd').value);
    const difficulty = document.getElementById('difficulty').value;
    const selectedGenres = Array.from(document.querySelectorAll('.genre-options input:checked'))
        .map(checkbox => checkbox.value);

    currentMovies = movies.filter(movie => {
        const yearMatch = movie.year >= yearStart && movie.year <= yearEnd;
        const difficultyMatch = difficulty === 'all' || movie.difficulty === difficulty;
        const genreMatch = selectedGenres.length === 0 || 
            selectedGenres.some(genre => movie.genre.includes(genre));
        
        return yearMatch && difficultyMatch && genreMatch;
    });
}

// Get random movie from filtered list
function getRandomMovie() {
    if (currentMovies.length === 0) {
        return { title: "No movies match your filters!", year: "", genre: [] };
    }
    return currentMovies[Math.floor(Math.random() * currentMovies.length)];
}

// Update movie display
function displayMovie() {
    const movie = getRandomMovie();
    document.getElementById('movieTitle').textContent = movie.title;
    if (movie.year) {
        document.getElementById('movieInfo').textContent = 
            `${movie.year} • ${movie.genre.join(", ")}`;
    } else {
        document.getElementById('movieInfo').textContent = "";
    }
}

// Timer functions
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
    const timerButton = document.getElementById('toggleTimer');
    if (!isTimerRunning) {
        // Start timer
        isTimerRunning = true;
        timerButton.textContent = "Stop Timer";
        timerButton.classList.add('active');
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft === 0) {
                clearInterval(timer);
                isTimerRunning = false;
                timerButton.textContent = "Start Timer (3:00)";
                timerButton.classList.remove('active');
                timeLeft = 180;
            }
        }, 1000);
    } else {
        // Stop timer
        clearInterval(timer);
        isTimerRunning = false;
        timerButton.textContent = "Start Timer (3:00)";
        timerButton.classList.remove('active');
        timeLeft = 180;
        updateTimerDisplay();
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeYearDropdowns();
    
    document.getElementById('nextMovie').addEventListener('click', () => {
        filterMovies();
        displayMovie();
    });
    
    document.getElementById('skipMovie').addEventListener('click', () => {
        displayMovie();
    });
    
    document.getElementById('toggleTimer').addEventListener('click', toggleTimer);
    
    // Add filter change listeners
    document.querySelectorAll('.filters select, .filters input').forEach(element => {
        element.addEventListener('change', () => {
            filterMovies();
        });
    });
});