let pixel = 0;
const secondMove = document.querySelector(".slider6-2");

document.querySelector(".next-slider2").addEventListener("click", function () {
  pixel = pixel + 300;
  if (pixel > 600) {
    pixel = 0;
  }
  secondMove.style.left = -pixel + "px";
});
document.querySelector(".prev-slider2").addEventListener("click", function () {
  pixel = pixel - 300;
  if (pixel < 0) {
    pixel = 600;
  }
  secondMove.style.left = -pixel + "px";
});
