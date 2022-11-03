let start = true;
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let time = document.querySelectorAll(".time");

const alarm = new Audio("./Landline.mp3");
const clickSound = new Audio("./stopwatch.mp3");

time.forEach((all) => {
  all.addEventListener("click", () => {
    all.value = "";
  });
});

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (start === true) {
    if (hrs.value == 00 && min.value == 00 && sec.value == 00) {
    } else {
      myVar = setInterval(reduce, 1000);
      clickSound.play();
    }
  }
  // document.querySelector(".me").innerHTML = secVal;
  //
  start = false;
});
function reduce() {
  // let secVal = sec--;
  // let secVal = sec.value;

  if (hrs.value == 00 && min.value == 00 && sec.value == 00) {
    // sec.innerHTML = secVal--;
    sec.value = "00";
    alarm.play();
    clickSound.pause();
    alert("Time's up");
    clearInterval(myVar);
    start = true;
  } else {
    if (sec.value == 0) {
      sec.value = 60;
      min.value--;
      if (min.value == 0) {
        if (min.value == 0 && hrs.value == 0) {
          hrs.value = "00";
          min.value = "00";
        }
      }
      if (hrs.value == 0 && min.value >= 0) {
        hrs.value = "00";
        sec.value = 59;
      } else {
        hrs.value--;
        min.value = 59;
        sec.value = 59;
      }
    } else {
      sec.value--;
      clickSound.play();
    }
  }
}

function pause() {
  clearInterval(myVar);
  start = true;
  clickSound.pause();
}

function reset() {
  if (start === true) {
    hrs.value = "00";
    min.value = "00";
    sec.value = "00";
  }
}
