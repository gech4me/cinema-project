import Vue from 'vue';
import './style.scss';

import genres from './util/genres';
import MovieList from "./components/MovieList";
import MovieFilter from "./components/MovieFilter";

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: []
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
    }
});