<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="movie in filteredMovies"
                        :movie="movie.movie"
                        :sessions="movie.sessions"
                        :day="day"
            />
        </div>
        <div v-else-if="movies.length" class="no-results">
            No results
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
    </div>
</template>

<script>
    import MovieItem from "./MovieItem";

    export default {
        name: "MovieList",
        props: ['genre', 'time','movies', 'day'],
        data() {
            return {

            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.filteredPassesGenreMovies);
            }
        },
        methods: {
            filteredPassesGenreMovies(movie) {
                if(!this.genre.length) {
                    return true;
                }

                let movieGenre = movie.movie.Genre.split(", ");
                let matched = true;
                   this.genre.forEach(genre => {
                      if(movieGenre.indexOf(genre) === -1) {
                          matched = false;
                      }
                   })
                return matched;
            }
        },
        components: {
            MovieItem
        }
    }
</script>

<style scoped>

</style>