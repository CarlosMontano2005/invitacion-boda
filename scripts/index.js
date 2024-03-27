const ID_AÑO_ACTUAL = document.getElementById('año_actual');

// Función para mostrar el año actual
function mostrarAñoActual() {
  const fechaActual = new Date();
  const año = fechaActual.getFullYear();
  ID_AÑO_ACTUAL.textContent = año;
}

// Función para silenciar o restaurar el volumen del audio
function toggleMute() {
  const audio = document.getElementById("audio");
  const volumeButton = document.getElementById("volumeButton");
  if (audio.paused) {
    audio.play();
    volumeButton.innerHTML = '<i class="bi bi-pause"></i> Pausar';
  } else {
    audio.pause();
    volumeButton.innerHTML = '<i class="bi bi-play"></i> Reproducir';
  }
}

// Función para mostrar el botón de reproducción
function showPlayButton() {
  const playButton = document.getElementById("playButton");
  if (playButton) {
    playButton.style.display = 'block';
  }
}

// Detección de reproducción de música y solicitud de permiso
const audioContext = new AudioContext();
if (!audioContext.state === "running") {
  audioContext.resume().then(() => {
    console.log("Permiso para reproducir audio concedido");
    mostrarAñoActual();
    toggleMute();
  });
} else {
  console.log("Permiso para reproducir audio ya concedido");
  mostrarAñoActual();
  toggleMute();
}

