var index = 0;
var x = document.getElementsByClassName("slides");
var left = document.getElementById("left");
var right = document.getElementById("right");
left.addEventListener("click", btnleft);
right.addEventListener("click", btnright);
showimage();

function showimage() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[index].style.display = "block";
}

function btnright() {
  if (index + 1 == x.length) {
    index = 0;
  } else {
    index = index + 1;
  }
  showimage();
}

function btnleft() {
  if (index == 0) {
    index = x.length - 1;
  } else {
    index = index - 1;
  }
  showimage();
}
