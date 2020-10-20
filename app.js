function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bg = "rgb(" + r + "," + g + "," + b + ")";
  document.body.style.backgroundColor = bg;
  document.getElementById("hex").innerHTML = bg;
}
