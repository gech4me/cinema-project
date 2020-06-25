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
            'check-filter': {
                props: [ 'title' ],
                data() {
                    return {
                        checked: false
                    }
                },
                template: `<div :class="{ 'check-filter': true, 'active': checked}" @click="checkFilter">
                                  <span class="checkbox"></span>
                                  <span class="check-filter-title">{{ title }}</span>
                               </div>`,
                methods: {
                    checkFilter() {
                        this.checked = !this.checked;
                        this.$emit('check-filter', 'genre', this.title, this.checked)
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>