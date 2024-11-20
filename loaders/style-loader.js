module.exports = function (sourceStyle) {
  const styleCode = `
    var style = document.createElement("style");
    style.innerHTML = ${JSON.stringify(sourceStyle)};
    document.head.appendChild(style);
    module.exports = ${JSON.stringify(sourceStyle)};
  `;
  return styleCode;
}
