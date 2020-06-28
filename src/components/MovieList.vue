<template>
  <div id="movie-list">
    <div v-if="filteredMovies.length">
      <movie-item v-for="movie in filteredMovies" :movie="movie.movie">
        <div class="movie-sessions">
          <div
            v-for="session in filteredSessions(movie.sessions)"
            class="session-time-wrapper"
          >
            <div class="session-time">
              {{ formatSessionTime(session.time) }}
            </div>
          </div>
        </div>
      </movie-item>
    </div>
    <div v-else-if="movies.length" class="no-results">
      {{ noResults }}
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
  props: ["genre", "time", "movies", "day"],
  data() {
    return {
      times,
    };
  },
  computed: {
    filteredMovies() {
      return this.movies
        .filter(this.filteredPassesGenreMovies)
        .filter((movie) => movie.sessions.find(this.sessionPassesTimeFilter));
    },
    noResults() {
      let times = this.time.join(", ");
      let genres = this.genre.join(", ");
      return `No results for ${times}${
        times.length && genres.length ? ", " : ""
      }${genres}`;
    },
  },
  methods: {
    formatSessionTime(raw) {
      return this.$moment(raw).format("h:mm A");
    },
    filteredSessions(sessions) {
      return sessions.filter(this.sessionPassesTimeFilter);
    },
    filteredPassesGenreMovies(movie) {
      if (!this.genre.length) {
        return true;
      }

      let movieGenre = movie.movie.Genre.split(", ");
      let matched = true;
      this.genre.forEach((genre) => {
        if (movieGenre.indexOf(genre) === -1) {
          matched = false;
        }
      });
      return matched;
    },
    sessionPassesTimeFilter(session) {
      if (!this.day.isSame(this.$moment(session.time), "day")) {
        return false;
      } else if (this.time.length === 0 || this.time.length === 2) {
        return true;
      } else if (this.time[0] === times.AFTER_6PM) {
        return this.$moment(session.time).hour() >= 18;
      } else {
        return this.$moment(session.time).hour() < 18;
      }
    },
  },
  components: {
    MovieItem,
  },
};
</script>

<style scoped></style>
