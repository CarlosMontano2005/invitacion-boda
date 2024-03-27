const ID_AÑO_ACTUAL = document.getElementById('año_actual');
// Crear una instancia del objeto Date para obtener la fecha y hora actuales
const fechaActual = new Date();
// Obtener el año
const año = fechaActual.getFullYear();
document.addEventListener("DOMContentLoaded", async () => {
    ID_AÑO_ACTUAL.textContent = año;
    toggleMute();
})
// Función para silenciar o restaurar el volumen del audio
function toggleMute() {
    var audio = document.getElementById("audio");
    var volumeButton = document.getElementById("volumeButton");
    if (audio.paused) {
        audio.play(); // Reproducir el audio
        volumeButton.innerHTML = '<i class="bi bi-pause"></i> Pausar';
    } else {
        audio.pause(); // Pausar el audio
        volumeButton.innerHTML = '<i class="bi bi-play"></i> Reproducir';
    }
}

