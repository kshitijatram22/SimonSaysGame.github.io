let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "blue", "purple"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.querySelector(".startBtn").addEventListener("click", function (e) {
  if (started == false) {
    console.log("The game is started.");
    started = true;

    document.querySelector(".button").style.display = "none";
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
    userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;
  let ranIndex = Math.floor(Math.random() * 3);
  let ranColor = btns[ranIndex];
  let ranBtn = document.querySelector(`.${ranColor}`);
  gameSeq.push(ranColor);
  console.log(gameSeq);
  //   console.log(ranBtn);
  //   console.log(ranColor);
  //   console.log(ranIndex);
  gameFlash(ranBtn);
}

function checkAns(idx) {
 
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
      h4.innerText = `Game Over. Your Score was ${level}.`;
      document.body.style.backgroundColor = "red";
      setTimeout(function(){
          document.body.style.backgroundColor = "rgb(3, 3, 37)";
          document.querySelector(".button").style.display = "flex";
    }, 3000)
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
