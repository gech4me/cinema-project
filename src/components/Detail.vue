<template>
    <div id="detail" v-if="movie">
        <movie-item :movie="movie.movie">
            <div class="movie-details">
                <p class="movie-genre">{{ movie.movie.Genre }}</p>
            </div>
        </movie-item>
    </div>
</template>

<script>
    import MovieItem from "./MovieItem";
    export default {
        name: "Detail",
        components: {MovieItem},
        props: [ 'movies' ],
        computed: {
            movie() {
                let movie = this.movies.find(movie => movie.id === this.$route.params.id);
                return movie ? movie : null;
            }
        },
        created() {
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>