/**
 * 判断一个数是否为素数
 * @param {*} number 
 * @returns Boolean
 */
export default function (number) {
  if (number < 2) return false;
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}