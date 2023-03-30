const voicesSelect = document.getElementById('voices');
const volumeRange = document.getElementById('volume');
const rateRange = document.getElementById('rate');
const pitchRange = document.getElementById('pitch');
const volumeLabel = document.getElementById('volume-label');
const rateLabel = document.getElementById('rate-label');
const pitchLabel = document.getElementById('pitch-label');
const textInput = document.getElementById('text-input');

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stopBtn = document.getElementById('stop-btn');


let speech = new SpeechSynthesisUtterance();
speech.lang = 'en';

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => {
        voicesSelect.options[i] = new Option(voice.name, i);
    });
};

volumeRange.addEventListener('input', () => {
    let volume = volumeRange.value;
    speech.volume = volume;
    volumeLabel.textContent = volume;
});

rateRange.addEventListener('input', () => {
    let rate = rateRange.value;
    speech.rate = rate;
    rateLabel.textContent = rate;
});

pitchRange.addEventListener('input', () => {
    let pitch = pitchRange.value;
    speech.pitch = pitch;
    pitchLabel.textContent = pitch;
});

voicesSelect.addEventListener('onchange', () => {
    speech.voice = voices[voicesSelect.value];
});

startBtn.addEventListener('click', () => {
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
});
pauseBtn.addEventListener('click', () => {
    window.speechSynthesis.pause();
});
resumeBtn.addEventListener('click', () => {
    window.speechSynthesis.resume();
});
stopBtn.addEventListener('click', () => {
    window.speechSynthesis.stop();
});