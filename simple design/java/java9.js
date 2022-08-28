let leftTen = 0;
const Ften = document.querySelector(".slider-list9");

document.querySelector(".next-move9").addEventListener("click", function () {
  leftTen = leftTen + 300;
  if (leftTen > 600) {
    leftTen = 0;
  }
  Ften.style.left = -leftTen + "px";
});
document.querySelector(".prev-move9").addEventListener("click", function () {
  leftTen = leftTen - 300;
  if (leftTen < 0) {
    leftTen = 600;
  }
  Ften.style.left = -leftTen + "px";
});