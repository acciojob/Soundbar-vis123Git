function playSound(soundFileName) {
    const audio = new Audio("sounds/applause.mp3");
    audio.play();
}

function stopAllSounds() {
    const allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach((audio) => audio.pause());
}
