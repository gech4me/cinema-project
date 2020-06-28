<template>
    <div id="day-select">
        <ul class="days">
            <li class="day" v-for="day in days">{{ formatDay(day) }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "DaySelect",
        data() {
            return {
                days: [0, 1, 2, 3, 4, 5, 6].map(num => this.$moment().add(num, 'days'))
            }
        },
        methods: {
            formatDay(raw) {
                return raw.format('ddd DD/MM')
            }
        }
    }
</script>

<style scoped>

</style>