const counterElement = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

function updateCounter() {
  counterElement.textContent = count;
  counterElement.classList.toggle("positive", count > 0);
  counterElement.classList.toggle("negative", count < 0);
}

increaseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  count = count + 1;
  updateCounter();
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();
  count = 0;
  updateCounter();
});

decreaseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  count = count - 1;
  updateCounter();
});
