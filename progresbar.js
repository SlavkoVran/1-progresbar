let width = 0 ;
let elem = document.getElementById("bar");
let id;
function pokreni() {
  id = setInterval(frame, 1000);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    }
    else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }

}
function premotaj() {
  if (width == 0){
    alert("Progres bar je na 0%");
  id = clearInterval(id);
  }
  
  id = setInterval(frame1, 1000);
 
  function frame1() {
    if (width <= 0) {
      clearInterval(id);
       }
       else { 
    width--;
    elem.style.width = width + '%';
    elem.innerHTML = width * 1 + '%';
  }
  }
}

function zaustavi() {
  clearInterval(id);
}

document.getElementById("dugmePokreni").addEventListener("click", pokreni);
document.getElementById("dugmePremotaj").addEventListener("click", premotaj);
document.getElementById("dugmeZaustavi").addEventListener("click", zaustavi);