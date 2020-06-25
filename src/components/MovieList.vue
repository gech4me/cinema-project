<template>
    <div id="movie-list">
        <movie-item v-for="movie in filteredMovies" class="movie" :movie="movie"/>
    </div>
</template>

<script>
    import genres from "../util/genres";
    import MovieItem from "./MovieItem";

    export default {
        name: "MovieList",
        props: ['genre', 'time','movies'],
        data() {
            return {
                movies: [],
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

                return this.genre.find(genre => movie.genre === genre);
            }
        },
        components: {
            MovieItem
        }
    }
</script>

<style scoped>

</style>