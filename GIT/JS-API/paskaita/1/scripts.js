// pirma uzduotis

// async function duokBairi() {
//     try {
//         const response = await fetch("https://icanhazdadjoke.com", {
//             headers: {Accept: "application/json"}
//         })
//         const joke = await response.json()
//         return joke
//     } catch(e) {
//         throw e
//     }
// }

// document.querySelector('button').addEventListener('click', () => {
//     duokBairi()
//     .then(data => {document.querySelector('.bairis').innerHTML = data.joke})
//     .catch(e => console.log('klaida'))
// }
// )

// antra uzduotis

async function fetchMovies(query) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
}

// fetchMovie()
//     .then(data => {
//         const moviesContainer = document.createElement('div');
//         moviesContainer.className = 'movies-container';

//         for (let movie of data) {
//             const movieDiv = document.createElement('div');
//             movieDiv.className = 'movie';

//             movieDiv.innerHTML = `
//                 <img src='${movie.show.image.medium}'>
//                 <h3>${movie.show.name}</h3>
//                 <p> genres: ${movie.show.genres.join(',')}</p>
//                 <p> ${movie.show.summary} </p>
//             `;

//             moviesContainer.appendChild(movieDiv);
//         }

//         document.body.appendChild(moviesContainer);
//     });


function displayMovies(data) {
    const moviesContainer = document.getElementById('moviesContainer');
    moviesContainer.innerHTML = ""; // Clear previous results

    if (data.length === 0) {
        moviesContainer.innerHTML = "<p>No movies found.</p>";
        return;
    }

    for (let movie of data) {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        const imgLink = movie.show.image ? movie.show.image.medium : "https://via.placeholder.com/250x350";
        const summary = movie.show.summary ? movie.show.summary : "No summary available.";

        movieDiv.innerHTML = `
            <img src='${imgLink}' alt='${movie.show.name}'>
            <h3>${movie.show.name} (${movie.show.premiered ? movie.show.premiered.slice(0, 4) : "N/A"})</h3>
            <p><strong>Genres:</strong> ${movie.show.genres.length > 0 ? movie.show.genres.join(', ') : "Unknown"}</p>
            <p>${summary}</p>
        `;

        moviesContainer.appendChild(movieDiv);
    }
}

document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('searchInput').value.trim();
    
    if (query === "") {
        alert("Please enter a movie title!");
        return;
    }

    const movieData = await fetchMovies(query);
    displayMovies(movieData);
});