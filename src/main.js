import Vue from 'vue';
import './style.scss';
import axios from 'axios';
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import moment from 'moment-timezone';
import { checkFilter } from './util/bus'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype,'$moment',{ get() { return this.$root.moment; }});

const bus = new Vue();
Object.defineProperty(Vue.prototype,'$bus',{ get() { return this.$root.bus }})

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment,
        day: moment(),
        bus
    },
    components: {
        MovieList,
        MovieFilter
    },
    created() {
       axios.get('/api').then(response => {
           this.movies = response.data;
           this.$bus.$on('check-filter', checkFilter.bind(this))
       })
    }
});