<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="movie in filteredMovies"
                        :movie="movie.movie"
                        :sessions="movie.sessions"
                        :day="day"
                        :time="time"
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
    import times from "../util/times";

    export default {
        name: "MovieList",
        props: ['genre', 'time','movies', 'day'],
        data() {
            return {
                times
            }
        },
        computed: {
            filteredMovies() {
                return this.movies
                    .filter(this.filteredPassesGenreMovies)
                    .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
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
            },
            sessionPassesTimeFilter(session) {
                if(!this.day.isSame(this.$moment(session.time),'day')) {
                    return false;
                } else if(this.time.length === 0 || this.time.length === 2) {
                    return true;
                } else if(this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                } else {
                    return this.$moment(session.time).hour() < 18;
                }
            }
        },
        components: {
            MovieItem
        }
    }
</script>

<style scoped>

</style>