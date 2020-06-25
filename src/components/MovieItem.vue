<template>
    <div>
        {{ movie.movie.Title }}
    </div>
</template>

<script>
    export default {
        name: "MovieItem",
        props: ['movie']
    }
</script>

<style scoped>

</style>