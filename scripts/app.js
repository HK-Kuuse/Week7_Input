const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterURL = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');

let titleInStorage=localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageURL');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent=titleInStorage;
    movieYearToDisplay.textContent=yearInStorage;
    container.style.backgroundImage=`linear-gradient(rgba(73, 83, 133, 0.685),rgba(178, 8, 158, 0.371)),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterURL.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageURL', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent=movieTitleInput;
    movieYearToDisplay.textContent=movieYearInput;
    container.style.backgroundImage=`linear-gradient(rgba(73, 83, 133, 0.685),rgba(178, 8, 158, 0.371)),
    url('${posterUrlInput}')`;
    moviePosterURL.value='';
});