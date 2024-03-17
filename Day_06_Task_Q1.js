var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        if (rating === void 0) { rating = "PG"; }
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.getPG = function (movies) {
        return movies.filter(function (movie) { return movie.rating === "PG"; });
    };
    return Movie;
}());
// Creating an instance of Movie with the specified details
var casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
// Testing getPG method
var movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "PG-13")
];
var pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Output: [ Movie { title: 'Movie1', studio: 'Studio1', rating: 'PG' }, Movie { title: 'Movie4', studio: 'Studio4', rating: 'PG' } ]
