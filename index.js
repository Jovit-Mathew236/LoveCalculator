const button = document.getElementById("button");
const name1Input = document.querySelector("#name1");

name1Input.addEventListener("change", function () {
  document.querySelector("p").style.background = "url(./images/love.jpg)";
  document.querySelector("p").style.backgroundSize = "cover";
  document.querySelector("p").innerHTML = "";
});

button.addEventListener("click", function () {
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;

  document.querySelector("p").style.background = "#fff";
  document.querySelector("p").innerHTML = loveScore + "%";
});
