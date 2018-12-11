var i = 0;
var speed = 60;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("fact1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }
}

window.onload = function() {
  window.setTimeout(fadein, 3680); //2.68 seconds
}

function fadein() {
  document.getElementById('city1').style.opacity = '1';
}
