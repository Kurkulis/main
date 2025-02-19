// Function to fetch all movies and populate dropdown
async function fetchMovies() {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=spiderman`);
        const data = await response.json();
        populateDropdown(data);
        return data;
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// Function to populate the dropdown with movie names
function populateDropdown(movies) {
    const dropdown = document.getElementById('movieDropdown');
    dropdown.innerHTML = ""; // Clear existing options

    // Default option
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = "Select a movie";
    dropdown.appendChild(defaultOption);

    // Add movies to dropdown
    movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.show.id;  // Store movie ID as value
        option.textContent = movie.show.name;
        dropdown.appendChild(option);
    });

    // Store movies data for later use
    dropdown.dataset.movies = JSON.stringify(movies);
}

// Function to display selected movie details
function displayMovie() {
    const dropdown = document.getElementById('movieDropdown');
    const movies = JSON.parse(dropdown.dataset.movies);
    const selectedMovieId = dropdown.value;
    
    if (!selectedMovieId) {
        alert("Please select a movie!");
        return;
    }

    const selectedMovie = movies.find(movie => movie.show.id == selectedMovieId);
    
    if (!selectedMovie) return;

    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = ""; // Clear previous movie

    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';

    const imgLink = selectedMovie.show.image ? selectedMovie.show.image.medium : "https://via.placeholder.com/250x350";
    const summary = selectedMovie.show.summary ? selectedMovie.show.summary : "No summary available.";

    movieDiv.innerHTML = `
        <img src='${imgLink}' alt='${selectedMovie.show.name}'>
        <h3>${selectedMovie.show.name} (${selectedMovie.show.premiered ? selectedMovie.show.premiered.slice(0, 4) : "N/A"})</h3>
        <p><strong>Genres:</strong> ${selectedMovie.show.genres.length > 0 ? selectedMovie.show.genres.join(', ') : "Unknown"}</p>
        <p>${summary}</p>
    `;

    moviesContainer.appendChild(movieDiv);
}

// Load movies when the page loads
window.addEventListener('DOMContentLoaded', fetchMovies);

// Event listener for selecting a movie
document.getElementById('selectButton').addEventListener('click', displayMovie);
