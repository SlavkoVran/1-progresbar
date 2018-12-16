let width = 1;
let elem = document.getElementById("bar");

function pokreni() {
  id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    }
    else {
      width++;
      elem.style.width = width + '%';
    }
  }

}
function premotaj() {
  clearInterval(id);
  id = setInterval(frame1, 1000);
  function frame1() {
    width--;
    elem.style.width = width + '%';
  }
}

function zaustavi() {
  clearInterval(id);
}

document.getElementById("dugmePokreni").addEventListener("click", pokreni);
document.getElementById("dugmePremotaj").addEventListener("click", premotaj);
document.getElementById("dugmeZaustavi").addEventListener("click", zaustavi);
