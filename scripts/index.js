const ID_AÑO_ACTUAL = document.getElementById('año_actual');

// Obtener el año
const año = fechaActual.getFullYear();
document.addEventListener("DOMContentLoaded", async () => {
    ID_AÑO_ACTUAL.textContent = año;
    toggleMute();
})
// Función para silenciar o restaurar el volumen del audio
function toggleMute() {
    var audio = document.getElementById("audio");
    if (audio.volume === 0) {
        audio.volume = 0.5; // Establecer el volumen al valor original (0.5)
        volumeButton.innerHTML = '<i class="bi bi-volume-up"></i> Silenciar';
    } else {
        audio.volume = 0; // Silenciar el audio
        volumeButton.innerHTML = '<i class="bi bi-volume-mute"></i> Restaurar';
    }
}

