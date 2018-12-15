  let elem = document.getElementById("bar");   
    let width = 1;
    let id = setInterval(frame, 1000);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } 
      else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }


  function premotaj() {
    width--; 
    elem.style.width = width + '%';    
    
  
  }

  function zaustavi() {
      clearInterval(id);
  }
    







  document.getElementById("dugmePokreni").addEventListener("click", frame);
  document.getElementById("dugmePremotaj").addEventListener("click", premotaj);
  document.getElementById("dugmeZaustavi").addEventListener("click", zaustavi);