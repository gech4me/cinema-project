<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{ movie.movie.Title }}</div>
    </div>
</template>

<script>
    import genres from "../util/genres";

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
        }
    }
</script>

<style scoped>

</style>