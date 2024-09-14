let currentAudio = document.getElementById("audio-player");

function playSound(soundName) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    const audioPath = `./sounds/${soundName}.mp3`;
    currentAudio.src = audioPath;
    currentAudio.play();
}

function stopAllSounds() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}
