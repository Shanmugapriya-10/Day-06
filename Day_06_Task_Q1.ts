class Movie {
    title: string;
    studio: string;
    rating: string;

    constructor(title: string, studio: string, rating: string = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies: Movie[]): Movie[] {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of Movie with the specified details
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Testing getPG method
const movies: Movie[] = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG-13"),
    new Movie("Movie4", "Studio4", "PG"),
    new Movie("Movie5", "Studio5", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies); // Output: [ Movie { title: 'Movie1', studio: 'Studio1', rating: 'PG' }, Movie { title: 'Movie4', studio: 'Studio4', rating: 'PG' } ]
