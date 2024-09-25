import randomColor, { getRandom } from "../utils/randomColor";
import $ from "jquery";

// 负责渲染页面
const container = $("#container");
const center = $("#center");

export default function (number, isPrime) {
  const span = $("<span>").text(number);
  if (isPrime) {
    const color = randomColor();
    span.css("color", color);
    createPrimeNumber(number, color);
  }
  container.append(span);
  center.text(number);
}

function createPrimeNumber(number, color) {
  const div = $('<div>').addClass("center").css("color", color).text(number);

  $("body").append(div);

  div[0].offsetHeight;// 强制浏览器渲染

  div.css("transform", `translate(${getRandom(-250, 200)}px, ${getRandom(-250, 200)}px)`).css("opacity", 0);
}