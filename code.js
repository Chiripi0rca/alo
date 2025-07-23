 window.addEventListener('DOMContentLoaded', () => {
      const audio = document.getElementById("musica");
      audio.muted = false;
    });

    function iniciarMusica() {
      const audio = document.getElementById("musica");
      audio.play();
      document.body.onclick = null;
      document.querySelector('.boton-tierno').style.display = 'none';
    }

    const audio = document.getElementById("musica");
    const frase1 = document.getElementById("frase1");
    const frase15 = document.getElementById("frase15");
    const frase2 = document.getElementById("frase2");
    const frase3 = document.getElementById("frase3");
    const frase4 = document.getElementById("frase4");
    const frase5 = document.getElementById("frase5");
    const frase6 = document.getElementById("frase6");
    const frase7 = document.getElementById("frase7");
    const frase8 = document.getElementById("frase8");
    const frase9 = document.getElementById("frase9");
    const imagen1 = document.getElementById("imagen1");
    const imagen15 = document.getElementById("imagen15");
    const imagen2 = document.getElementById("imagen2");
    const imagen3 = document.getElementById("imagen3");
    const imagen4 = document.getElementById("imagen4");
    const imagen5 = document.getElementById("imagen5");
    const imagen6 = document.getElementById("imagen6");
    const imagen7 = document.getElementById("imagen7");
    const imagen8 = document.getElementById("imagen8");
    const imagen9 = document.getElementById("imagen9");


    audio.ontimeupdate = () => {
      const tiempo = audio.currentTime;

      if (tiempo >= 2 && tiempo < 4) {
        frase1.classList.add("visible");
        imagen1.classList.add("visible");
      } else {
        frase1.classList.remove("visible");
        imagen1.classList.remove("visible");
      } 

      if (tiempo >= 4.30 && tiempo < 5.45) {
        frase15.classList.add("visible");
        imagen15.classList.add("visible");
      } else {
        frase15.classList.remove("visible");
        imagen15.classList.remove("visible");
      }

         if (tiempo >= 5.46 && tiempo < 7) {
        frase2.classList.add("visible");
        imagen2.classList.add("visible");
      } else {
        frase2.classList.remove("visible");
        imagen2.classList.remove("visible");
      }
          
      if (tiempo >= 7.20 && tiempo < 9) {
        frase3.classList.add("visible");
        imagen3.classList.add("visible");
      } else {
        frase3.classList.remove("visible");
        imagen3.classList.remove("visible");
      }

        if (tiempo >= 9.05 && tiempo < 11) {
        frase4.classList.add("visible");
        imagen4.classList.add("visible");
      } else {
        frase4.classList.remove("visible");
        imagen4.classList.remove("visible");
      }

        if (tiempo >= 11.05 && tiempo < 13) {
        frase5.classList.add("visible");
        imagen5.classList.add("visible");
      } else {
        frase5.classList.remove("visible");
        imagen5.classList.remove("visible");
      }

        if (tiempo >= 13.05 && tiempo < 15) {
        frase6.classList.add("visible");
        imagen6.classList.add("visible");
      } else {
        frase6.classList.remove("visible");
        imagen6.classList.remove("visible");
      }

        if (tiempo >= 15.05 && tiempo < 17) {
        frase7.classList.add("visible");
        imagen7.classList.add("visible");
      } else {
        frase7.classList.remove("visible");
        imagen7.classList.remove("visible");
      }

        if (tiempo >= 17.05 && tiempo < 19) {
        frase8.classList.add("visible");
        imagen8.classList.add("visible");
      } else {
        frase8.classList.remove("visible");
        imagen8.classList.remove("visible");
      }

         if (tiempo >= 19.05 && tiempo < 22) {
        frase9.classList.add("visible");
        imagen9.classList.add("visible");
      } else {
        frase9.classList.remove("visible");
        imagen9.classList.remove("visible");
      }

    };