let zeroC = 0;
const fatherZeroC = document.querySelector(".slider65");

document.querySelector(".next-move5").addEventListener("click", function () {
  zeroC = zeroC + 300;
  if (zeroC > 600) {
    zeroC = 0;
  }
  fatherZeroC.style.left = -zeroC + "px";
});
document.querySelector(".prev-move5").addEventListener("click", function () {
  zeroC = zeroC - 300;
  if (zeroC < 0) {
    zeroC = 600;
  }
  fatherZeroC.style.left = -zeroC + "px";
});
