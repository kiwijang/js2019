let currentPage = 1;
let click = "prev";
let timer = false;
let firstTime = false;

timer = setInterval(removeHide, 1500);

function removeHide() {
  if (currentPage < 5 && currentPage > 1) {
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.remove("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage - 1})`)
      .classList.add("hide");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage - 1})`)
      .classList.remove("a");
    currentPage += 1;
  } else if (currentPage == 5) {
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.remove("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage - 1})`)
      .classList.add("hide");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage - 1})`)
      .classList.remove("a");
    currentPage = 1;
  } else if (currentPage == 1) {
    document.querySelector(`.mainpic>a:nth-child(${5})`).classList.add("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.remove("hide");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${5})`)
      .classList.remove("a");
    currentPage += 1;
  }
}

function reverse_removeHide() {
  if (currentPage < 5 && currentPage > 1) {
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage - 1})`)
      .classList.remove("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.add("hide");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage - 1})`)
      .classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.remove("a");
    currentPage -= 1;
  } else if (currentPage == 5) {
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage - 1})`)
      .classList.remove("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.add("hide");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage - 1})`)
      .classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.remove("a");
    currentPage -= 1;
  } else if (currentPage == 1) {
    document
      .querySelector(`.mainpic>a:nth-child(${currentPage})`)
      .classList.add("hide");
    document
      .querySelector(`.mainpic>a:nth-child(${5})`)
      .classList.remove("hide");
    document.querySelector(`.minipic>img:nth-child(${5})`).classList.add("a");
    document
      .querySelector(`.minipic>img:nth-child(${currentPage})`)
      .classList.remove("a");
    currentPage = 5;
  }
}
//=====================================================================
document.getElementById("next").addEventListener("click", skipNext);
document.getElementById("prev").addEventListener("click", skipPrev);
document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", pause);

function skipNext() {
  console.log(currentPage);
  clearInterval(timer);
  timer = false;
  resetMinipic();
  console.log(click);
  if (click == "prev") {
    if (currentPage == 5) {
      currentPage = 1;
    } else {
      if (firstTime) {
        currentPage += 1;
      }
      firstTime = true;
    }
  }
  removeHide();
  click = "next";
  //隱藏暫停
  document.getElementById(`pause`).classList.add("hide");
  document.getElementById(`play`).classList.remove("hide");
}
function skipPrev() {
  console.log(currentPage);
  clearInterval(timer);
  timer = false;
  resetMinipic();
  console.log(click);
  if (click == "next") {
    if (currentPage == 1) {
      currentPage = 5;
    } else {
      currentPage -= 1;
    }
  }
  reverse_removeHide();
  click = "prev";
  //隱藏暫停
  document.getElementById(`pause`).classList.add("hide");
  document.getElementById(`play`).classList.remove("hide");
}
function pause() {
  clearInterval(timer);
  timer = false;
  document.getElementById(`pause`).classList.add("hide");
  document.getElementById(`play`).classList.remove("hide");
}
function play() {
  if (timer == false) {
    timer = setInterval(removeHide, 1500);
  }
  document.getElementById(`play`).classList.add("hide");
  document.getElementById(`pause`).classList.remove("hide");
}
function resetMinipic() {
  let pics = document.querySelectorAll(`.minipic>img`);
  for (let pic of pics) {
    pic.classList.remove("a");
  }
}
function resetMainpic(pagenow) {
  let pics = document.querySelectorAll(`.mainpic>a`);
  for (let pic of pics) {
    pic.classList.remove("hide");
    pic.classList.add("hide");
  }
  pics[pagenow - 1].classList.remove("hide");
}
//============================================================
let minipics = document.querySelectorAll(`.minipic>img`);
let mainpic = document.getElementById("mainpic");
for (let minipic of minipics) {
  //滑過
  minipic.addEventListener("mouseover", pauseMiniShow);
  //按下滑鼠
  minipic.addEventListener("mousedown", (e) => {
    resetMainpic(e.target.getAttribute("data-pic"));
    pauseMiniShow(e);
    pause();
  });
  //放開滑鼠
  minipic.addEventListener("mouseup", pauseMiniShow);
}

function pauseMiniShow(e) {
  pause();
  resetMinipic();
  let picMouseover = e.target.getAttribute("data-pic");
  currentPage = picMouseover * 1;
  resetMainpic(currentPage);
  removeHide();
  timer = setInterval(removeHide, 1500);
  //隱藏播放
  document.getElementById(`play`).classList.add("hide");
  document.getElementById(`pause`).classList.remove("hide");
}
