let rightC = 0;
const fatherLeftc = document.querySelector(".slider6-3");

document.querySelector(".next-slider3").addEventListener("click", function () {
  rightC = rightC + 300;
  if (rightC > 600) {
    rightC = 0;
  }
  fatherLeftc.style.left = -rightC + "px";
});
document.querySelector(".prev-slider3").addEventListener("click", function () {
  rightC = rightC - 300;
  if (rightC < 0) {
    rightC = 600;
  }
  fatherLeftc.style.left = -rightC + "px";
});