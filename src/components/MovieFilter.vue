<template>
    <div id="movie-filter">
        <h2 class="movie-filter">Filter Results</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" :title="genre" @check-filter="checkFilter"></check-filter>
        </div>
    </div>
</template>

<script>
    import genres from "../util/genres";
    import CheckFilter from "./CheckFilter";

    export default {
        name: "MovieFilter",
        data() {
            return {
                genres
            }
        },
        methods: {
            checkFilter: function (category, title, checked) {
                this.$emit('check-filter', category, title, checked)
            }
        },
        components: {
            CheckFilter
        }
    }
</script>

<style scoped>

</style>