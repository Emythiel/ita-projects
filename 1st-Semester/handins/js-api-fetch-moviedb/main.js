// Fetch the movie data from API, and assign data to movieDataFetched variable
let movieDataFetched;
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(movieData => {
        movieDataFetched = movieData;
        renderMovies(movieDataFetched);
        console.log(movieDataFetched);
    });

// Get movie list div element to put movie titles under
const getMovieListDivElement = document.querySelector('#movie-list');

// Function to render movies in data array
function renderMovies(movies) {
    movies.forEach(function (movie) {
        renderMovieAsList(movie);
    });
}

// Function to render movie as list
function renderMovieAsList(movie) {
    const createUlElement = document.createElement('ul');
    getMovieListDivElement.appendChild(createUlElement);
    for (const [key, value] of Object.entries(movie)) {
        const createLiElement = document.createElement('li');
        createUlElement.appendChild(createLiElement);
        createLiElement.textContent = `${key}: ${value}`;
    }
    const listItems = createUlElement.children;
    listItems.item(0).style.fontWeight = 'bold';
}

// Function to render movie after given year
function renderMoviesAfterYear(movies, year) {
    movies.forEach(function (movie) {
        if (movie.year >= year) {
            renderMovieAsList(movie);
        }
    });
}

// Function to remove all movies from list
function removeMovieRenders() {
    const movieUlElements = getMovieListDivElement.querySelectorAll('ul')
    movieUlElements.forEach(movieUlElement => {
        getMovieListDivElement.removeChild(movieUlElement);
    });
}

// Button to show movies after 2014
const movieAfter2014Button = document.querySelector('#movies-after-2014');
movieAfter2014Button.addEventListener('click', function() {
    removeMovieRenders();
    renderMoviesAfterYear(movieDataFetched, 2014);
});

// Button to show all movies
const allMoviesButton = document.querySelector('#movies-all');
allMoviesButton.addEventListener('click', function() {
    removeMovieRenders();
    renderMovies(movieDataFetched);
})

// Input field to search by movie titles
const movieFilterTitleField = document.querySelector('#movie-search');
movieFilterTitleField.addEventListener('input', function() {
    removeMovieRenders();
    const inputText = movieFilterTitleField.value;
    const moviesFetchedFromApi = movieDataFetched.length > 0;
    if (moviesFetchedFromApi) {
        const matchingMovies = movieDataFetched.filter(movie => movie.title.includes(inputText));
        renderMovies(matchingMovies);
    }
})

// Input field to search by year
const movieFilterYearField = document.querySelector('#movie-year');
movieFilterYearField.addEventListener('input', function() {
    removeMovieRenders();
    const inputYear = parseInt(movieFilterYearField.value);
    const moviesFetchedFromApi = movieDataFetched.length > 0;
    if (moviesFetchedFromApi) {
        const matchingMovies = movieDataFetched.filter(movie => movie.year === inputYear);
        renderMovies(matchingMovies);
    }
})

// Input field to search by minimum rating
const movieFilterMinRatingField = document.querySelector('#movie-rating-min');
movieFilterMinRatingField.addEventListener('input', function() {
    removeMovieRenders();
    const inputRatingMin = parseInt(movieFilterMinRatingField.value);
    const moviesFetchedFromApi = movieDataFetched.length > 0;
    if (moviesFetchedFromApi) {
        const matchingMovies = movieDataFetched.filter(movie => movie.rating >= inputRatingMin);
        renderMovies(matchingMovies);
    }
})
