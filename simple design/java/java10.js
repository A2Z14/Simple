let eLeft = 0;
const fEleven = document.querySelector(".slider-list10");

document.querySelector(".next-move10").addEventListener("click", function () {
  eLeft = eLeft + 300;
  if (eLeft > 600) {
    eLeft = 0;
  }
  fEleven.style.left = -eLeft + "px";
});
