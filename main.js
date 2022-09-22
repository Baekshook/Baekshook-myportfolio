const todayLunch = [
  "알리오 올리오",
  "치킨",
  "피자",
  "짜장면",
  "굶기",
  "햄버거",
  "떡볶이",
  "짬뽕",
  "도넛",
  "사케동",
  "텐동",
  "국밥",
  "탕수육",
  "회",
];

const myProfile = {
  age: 24,
  job: "University Student",
  favorite: "Zero Pepsi",
  motto: "Carpe Diem",
};

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

function choiceTodayLunch() {
  let htmlElement = document.querySelector(".todayLunch");

  htmlElement.innerHTML =
    todayLunch[Math.floor(Math.random() * todayLunch.length)];
}

function getMyProfile(key) {
  let htmlElement = document.querySelector(".aboutMe");

  htmlElement.innerHTML = myProfile[key];
}
