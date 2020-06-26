<template>
    <div class="movie">
        <div class="movie-col-left">
            <img :src="movie.Poster" :alt="movie.Title">
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <h2>{{ movie.Title }}</h2>
                <span class="movie-rating">{{ movie.Rated }}</span>
            </div>
            <div class="movie-sessions">
                <div v-for="session in sessions" class="session-time-wrapper">
                    <div class="session-time">{{ formatSessionTime(session.time) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovieItem",
        props: ['movie','sessions','day'],
        methods: {
            formatSessionTime(raw) {
                return this.$moment(raw).format("h:mm A")
            }
        }
    }
</script>

<style scoped>

</style>