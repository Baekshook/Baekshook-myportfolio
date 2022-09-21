function revealMyInfo(myInfo, className, color, animationName) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;

  htmlElement.style.animationDuration = "2s";
  if (animationName === "bgFadeOut") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationName = animationName;
  }
}
