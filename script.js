let currentAudio = null;

function playSound(soundName) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    console.log("`./sounds/${soundName}.mp3`====",`./sounds/${soundName}.mp3`)
    currentAudio = new Audio(`./sounds/${soundName}.mp3`);
    currentAudio.play();
}

function stopAllSounds() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}