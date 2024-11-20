const styleCode = require("./assets/index.css");

console.log("index.js file");

var div = document.createElement("div");
div.innerHTML = "Hello Webpack";
div.classList.add("box");
document.body.appendChild(div);

console.log(styleCode);