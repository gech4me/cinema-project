import Vue from "vue";
import "./style.scss";
import axios from "axios";
import moment from "moment-timezone";
import { checkFilter, setDay } from "./util/bus";
import VueRouter from "vue-router";
import routes from "./util/routes";
import { addClass, removeClass } from "./util/helpers";

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

let mouseHoverHandler = function (event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  addClass(span, "tooltip-show");
};
let mouseOutHandler = function () {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  removeClass(span, "tooltip-show");
};

Vue.directive("tooltip", {
  bind(el, bindings) {
    let span = document.createElement("SPAN");
    let text = document.createTextNode("Seats available: 200");
    span.appendChild(text);
    addClass(span, "tooltip");
    el.appendChild(span);
    let div = el.getElementsByTagName("DIV")[0];
    div.addEventListener("mouseover", mouseHoverHandler);
    div.addEventListener("mouseout", mouseOutHandler);
    div.addEventListener("touchstart", mouseHoverHandler);
    div.addEventListener("touchend", mouseOutHandler);
  },
  unbind(el) {
    let div = el.getElementsByTagName("DIV")[0];
    div.removeEventListener("mouseover", mouseHoverHandler);
    div.removeEventListener("mouseout", mouseOutHandler);
    div.removeEventListener("touchstart", mouseHoverHandler);
    div.removeEventListener("touchend", mouseOutHandler);
  },
});
