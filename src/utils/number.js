import isPrime from "./isPrime";

export default class NumberTimer {
  constructor(duration = 500) {
    this.duration = duration;
    this.curNumber = 1;
    this.timerId = null;
    this.onNumberCreated = null;  // 当一个数字产生的时候需要调用的函数
  }

  start() {
    if (this.timerId) {
      return;
    }
    this.timerId = setInterval(() => {
      this.onNumberCreated && this.onNumberCreated(this.curNumber, isPrime(this.curNumber));
      this.curNumber++;
    }, this.duration)
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
  }
}