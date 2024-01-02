import { populateGenreDropdown,getSelectedGenre,showBtns,clearCurrentMovie,likeMovie,dislikeMovie,createMoviePoster,createMovieTitle,createMovieOverview,getRandomMovie,displayMovie } from './helper.js'

const tmdbKey = "013f0cdaa08e32c524adf4ae277a843b";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

//create element for test of working of stroke request
// const newDiv = document.createElement("div");
// document.body.appendChild(newDiv);
// newDiv.textContent='ura';

const getGenres = async () => {
  //collect request
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  let requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  console.log(requestParams);

  let urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);
    if(response.ok){
     console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse.total_pages);
      if(jsonResponse.total_pages>500){
        jsonResponse.total_pages = 500;
      }
     const randomPage = Math.floor(Math.random() * jsonResponse.total_pages);
     requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}&page=${randomPage}`;
  console.log(requestParams);

  urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;
console.log(urlToFetch);

  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
     const jsonResponse = await response.json();
     const movies = jsonResponse.results;
     console.log(movies);
     return movies;
    }
  }
  catch(error){
    console.log(error);
  }

  }
}
  catch (error){
    console.log(error);
  }

  
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

 try {
   const response =  await fetch(urlToFetch);

   if(response.ok){
   
    const jsonResponse=await response.json();
    const movieInfo = jsonResponse;
    return movieInfo;
   }

 } catch (error) {
  console.log(error);
 }
  };

  
// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async() => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

