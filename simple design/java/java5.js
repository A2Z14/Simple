let zeroD = 0;
const fatherZeroD = document.querySelector(".slider64");

document.querySelector(".next-move4").addEventListener("click", function () {
  zeroD = zeroD + 300;
  if (zeroD > 600) {
    zeroD = 0;
  }
  fatherZeroD.style.left = -zeroD + "px";
});
document.querySelector(".prev-move4").addEventListener("click", function () {
  zeroD = zeroD - 300;
  if (zeroD < 0) {
    zeroD = 600;
  }
  fatherZeroD.style.left = -zeroD + "px";
});
