function addEvent() {
    var a = document.getElementById("soundeffect");
    a.addEventListener("click", play);
}
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}