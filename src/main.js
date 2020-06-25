import Vue from 'vue';
import './style.scss';
import axios from 'axios';
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";
import moment from 'moment-timezone';

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype,'$moment',{ get() { return this.$root.moment; }});

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: [],
        moment
    },
    methods: {
      checkFilter(category, title, checked) {
          if(checked) {
              this[category].push(title);
          } else {
              let index = this[category].indexOf(title);
              this[category].splice(index, 1);
          }
      }
    },
    components: {
        MovieList,
        MovieFilter
    },
    created() {
       axios.get('/api').then(response => {
           this.movies = response.data;
       })
    }
});