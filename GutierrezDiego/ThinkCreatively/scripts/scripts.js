var video = document.getElementById("MiVideo");
var boton = document.getElementById("MiBoton");

function PausePlay() {
  if (video.paused) {
    video.play();
    boton.innerHTML = "Pause";
  } 
  else {
    video.pause();
    boton.innerHTML = "Play";
  }
}