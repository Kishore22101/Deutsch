// app.js – Voice / TTS utilities

/* ── Speech Synthesis ── */
let voices = [];
function loadVoices() {
  voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

function getBestVoice(lang) {
  if (!voices.length) voices = window.speechSynthesis.getVoices();
  const exact = voices.find(v => v.lang === lang);
  if (exact) return exact;
  const partial = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
  return partial || null;
}

function speak(text, lang, btnEl) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = lang;
  const voice = getBestVoice(lang);
  if (voice) utt.voice = voice;
  utt.rate = 0.9;
  utt.pitch = 1;
  if (btnEl) {
    btnEl.classList.add('speaking');
    utt.onend = () => btnEl.classList.remove('speaking');
    utt.onerror = () => btnEl.classList.remove('speaking');
  }
  window.speechSynthesis.speak(utt);
}

function speakGerman(text, btnEl) { speak(text, 'de-DE', btnEl); }
function speakEnglish(text, btnEl) { speak(text, 'en-US', btnEl); }
