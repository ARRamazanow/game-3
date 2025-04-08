document.addEventListener('DOMContentLoaded', () => {
    const testSound = new Audio('./you-win.wav');
    document.body.addEventListener('click', () => {
        testSound.play();
    });
});
