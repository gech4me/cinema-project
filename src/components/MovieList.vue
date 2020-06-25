<template>
    <div id="movie-list">
        <movie-item v-for="movie in filteredMovies" class="movie" :movie="movie.movie"/>
    </div>
</template>

<script>
    import MovieItem from "./MovieItem";

    export default {
        name: "MovieList",
        props: ['genre', 'time','movies'],
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