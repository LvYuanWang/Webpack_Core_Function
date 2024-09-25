import NumberTimer from "../utils/number";
import appendNumber from "./appendNumber";

const n = new NumberTimer(150);

n.onNumberCreated = (number, isPrime) => {
  appendNumber(number, isPrime);
}

let isStart = false;
window.addEventListener('mousedown', () => {
  isStart ? (n.stop(), isStart = false) : (n.start(), isStart = true);
})