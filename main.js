function revealMyInfo(myInfo, className, color) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;
}
