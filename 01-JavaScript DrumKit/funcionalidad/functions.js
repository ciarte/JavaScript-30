function tecla(e) {
  const sonido = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if (!sonido) return;
  sonido.currentTime = 0;
  sonido.play();
  key.classList.add("playing");
  console.log(e);
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", tecla);

module.exports = {
  tecla,
  removeTransition,
};
