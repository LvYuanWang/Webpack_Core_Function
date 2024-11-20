const imagePath = require("./assets/image.jpg");

console.log("index.js file");

var img = document.createElement("img");
img.src = imagePath;
img.style = "width: 50vw; height: 35vw;";
document.body.appendChild(img);

console.log(imagePath);