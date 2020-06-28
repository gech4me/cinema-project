<template>
    <div id="overview">
        <day-select></day-select>
        <div id="main" class="main">
            <movie-list :genre="genre" :time="time" :movies="movies" :day="day"></movie-list>
            <movie-filter></movie-filter>
        </div>
    </div>
</template>

<script>
    import MovieList from "./MovieList";
    import MovieFilter from "./MovieFilter";
    import DaySelect from "./DaySelect";
    export default {
        name: "Overview",
        props: ['genre', 'time','movies', 'day'],
        components: {
            DaySelect,
            MovieList,
            MovieFilter
        },
    }
</script>

<style scoped>

</style>