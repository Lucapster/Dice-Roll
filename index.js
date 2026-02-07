roll_btn.onclick = function() {
  let num = Math.floor(Math.random() * 6) + 1;
  src = "imgs/" + num + ".png";
  img = document.getElementById("die").src = src;
  img = document.getElementById("die").alt = num;

}
