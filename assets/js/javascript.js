/**
 soundeffect element in HTML points to the location the use must click on.
 */
function addEvent() {
  const a = document.getElementById("soundeffect");
  a.addEventListener("click", play);
}

/**
 The audio element in HTML contains a reference to audio file, which is then played by line 14.
 */
function play() {
  const audio = document.getElementById("audio");
  audio.play();
}