import Vue from 'vue';
import './style.scss';

import genres from './util/genres';

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
        'movie-list': {
            template: `<div id="movie-list">
                            <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                        </div>`,
            data() {
                return {
                    movies: [
                        { title: "Pulp Fiction", genre: genres.CRIME },
                        { title: "Home Alone", genre: genres.COMEDY },
                        { title: "Austin Powers", genre: genres.COMEDY }
                    ],
                }
            },
            props: ['genre', 'time']
        },
        'movie-filter': {
            data() {
                return {
                    genres
                }
            },
            template: `<div id="movie-filter">
                            <h2 class="movie-filter">Filter Results</h2>
                            <div class="filter-group">
                                <check-filter v-for="genre in genres" :title="genre" @check-filter="checkFilter"></check-filter>
                            </div>
                        </div>`,
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
        },
    }
});