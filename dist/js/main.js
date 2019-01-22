window.addEventListener("keydown", function(e) {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //to stop the function from running
  audio.currentTime = 0; // rewind the start
  audio.play();
  console.log(key);
});
