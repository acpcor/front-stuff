const button = document.getElementById("chocolate");
const steam = document.getElementById("steamContainer");

button.addEventListener("click", () => {
  var r = document.querySelector(":root");
  var el = document.getElementById("beverage");
  el.style.animation = "none";
  el.offsetHeight;
  el.style.animation = null;
  r.style.setProperty("--beverage", "rgba(96, 52, 21, 0.71)");
  steam.innerHTML = `<div class="steam" id="steam1"></div>
  <div class="steam" id="steam2"></div>
  <div class="steam" id="steam3"></div>
  <div class="steam" id="steam4"></div>`;
});
