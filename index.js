const decreaseBtn = document.getElementById("decrease_btn");
const increaseBtn = document.getElementById("increase_btn");
const resetBtn = document.getElementById("reset_btn");

const countLabel = document.getElementById("count_label");

let count = 0;

increase_btn.onclick = function() {
  count += 1;
  countLabel.innerText = count;
}

decrease_btn.onclick = function() {
  count -= 1;
  countLabel.innerText = count;

}

reset_btn.onclick = function() {
  count = 0;
  countLabel.innerText = count;

}

