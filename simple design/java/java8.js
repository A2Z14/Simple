let sevenLeft = 0;
const carSix = document.querySelector(".slider-line7");

document.querySelector(".next-slide7").addEventListener("click", function () {
  sevenLeft = sevenLeft + 300;
  if (sevenLeft > 600) {
    sevenLeft = 0;
  }
  carSix.style.left = -sevenLeft + "px";
});
document.querySelector(".prev-slide7").addEventListener("click", function () {
  sevenLeft = sevenLeft - 300;
  if (sevenLeft < 0) {
    sevenLeft = 600;
  }
  carSix.style.left = -sevenLeft + "px";
});
