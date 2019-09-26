$(document).ready(function () {
    $('.carousel').carousel();
  });

// var movies = ['thor', 'iron man', 'captain america'];
var characterID = '';
// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo(event) {
console.log('I click!')

var movie = $("#movie-input").val().trim();//trim()
console.log(movie)

}

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", "#download-button", displayMovieInfo);

