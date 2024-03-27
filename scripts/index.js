const ID_AÑO_ACTUAL = document.getElementById('año_actual');

// Crear una instancia del objeto Date para obtener la fecha y hora actuales
const fechaActual = new Date();
// Obtener el año
const año = fechaActual.getFullYear();

document.addEventListener("DOMContentLoaded", async () => {
    ID_AÑO_ACTUAL.textContent = año;

    toggleMute();

    var audio = document.getElementById("audio");

    // Agregar un controlador de eventos para esperar la interacción del usuario
    document.addEventListener('click', function () {
        // Intentar iniciar la reproducción del audio
        var playPromise = audio.play();

        // Manejar el resultado de la promesa
        if (playPromise !== undefined) {
            playPromise.then(function () {
                // La reproducción ha comenzado con éxito
                console.log("Reproducción iniciada.");
                // Ocultar el botón de reproducción si la reproducción automática tiene éxito
                hidePlayButton();
            }).catch(function (error) {
                // Ocurrió un error al iniciar la reproducción
                console.log("Error al iniciar la reproducción:", error);
            });
        }
    });
});

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

// Función para ocultar el botón de reproducción
function hidePlayButton() {
    var volumeButton = document.getElementById("volumeButton");
    if (volumeButton) {
        volumeButton.style.display = 'none';
    }
}
