<template>
    <div id="movie-list">
        <div v-for="movie in filteredMovies" class="movie">{{ movie.title }}</div>
    </div>
</template>

<script>
    import genres from "../util/genres";

    export default {
        name: "MovieList",
        data() {
            return {
                movies: [
                    { title: "Pulp Fiction", genre: genres.CRIME },
                    { title: "Home Alone", genre: genres.COMEDY },
                    { title: "Austin Powers", genre: genres.COMEDY }
                ],
            }
        },
        props: ['genre', 'time'],
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