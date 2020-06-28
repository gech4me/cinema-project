import Vue from "vue";
import "./style.scss";
import axios from "axios";
import moment from "moment-timezone";
import { checkFilter, setDay } from "./util/bus";
import VueRouter from "vue-router";
import routes from "./util/routes";

window.axios = require("axios");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  },
});

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus;
  },
});
Vue.use(VueRouter);

const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  data: {
    genre: [],
    time: [],
    movies: [],
    moment,
    day: moment(),
    bus,
  },
  created() {
    axios.get("/api").then((response) => {
      this.movies = response.data;
    });
    this.$bus.$on("check-filter", checkFilter.bind(this));
    this.$bus.$on("set-day", setDay.bind(this));
  },
  router,
});
