<template>
  <div id="movie-filter">
    <h2 class="movie-filter">Filter Results</h2>
    <h3>Filter by time</h3>
    <div class="filter-group">
      <check-filter
        v-for="time in times"
        category="time"
        :title="time"
      ></check-filter>
    </div>
    <h3>Filter by genre</h3>
    <div class="filter-group">
      <check-filter
        v-for="genre in genres"
        category="genre"
        :title="genre"
      ></check-filter>
    </div>
  </div>
</template>

<script>
import genres from "../util/genres";
import times from "../util/times";
import CheckFilter from "./CheckFilter";

export default {
  name: "MovieFilter",
  data() {
    return {
      genres,
      times,
    };
  },
  components: {
    CheckFilter,
  },
};
</script>

<style scoped></style>
