<template>
    <div>
        Hello
    </div>
</template>

<script>
    export default {
        name: "Detail",
        created() {
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>