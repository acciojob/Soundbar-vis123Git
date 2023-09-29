function playSound(soundFileName) {
    const audio = new Audio();
    audio.src = `sounds/${soundFileName}`;
    
    audio.play();

	let container = document.getElementByClass("center-container")
    container.appendChild(audio);
    
    audio.addEventListener('ended', () => {
        audio.remove();
    });
}

function stopAllSounds() {
    const allAudioElements = document.querySelectorAll('audio');
    allAudioElements.forEach((audio) => audio.pause());
}
