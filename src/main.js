import Vue from 'vue';
import './style.scss';
import axios from 'axios';
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import genres from './util/genres';
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
        movies: []
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