import { addClass, removeClass } from "./helpers";

let mouseHoverHandler = function (event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  addClass(span, "tooltip-show");
};
let mouseOutHandler = function (event) {
  let span = event.target.parentNode.getElementsByTagName("SPAN")[0];
  removeClass(span, "tooltip-show");
};
export default {
  install(Vue) {
    Vue.directive("tooltip", {
      bind(el, bindings) {
        let span = document.createElement("SPAN");
        let text = document.createTextNode(
          `Seats available: ${bindings.value.seats}`
        );
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
  },
};
