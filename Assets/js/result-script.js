var initial;
var timer = document.querySelector("#timer");
var result = document.querySelector("#result");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");
var score = localStorage.getItem("score");

timer.textContent = "Time: " + score;
result.textContent = "your final score is: " + score;

//store the initial and score to localstorage
function saveInitialAndScore() {
    console.log("111");
  initial = input.value;
  if (initial == "") {
    window.alert("Please enter your initial");
  } else {
    if (!localStorage.getItem("save")) {
      var save = new Array();
      save.push(initial + "-" + score);
      localStorage.setItem("save", JSON.stringify(save));
    } else {
      var save = JSON.parse(localStorage.getItem("save"));
      save.push(initial + "-" + score);
      localStorage.setItem("save", JSON.stringify(save));
    }
    window.location.href='highscore.html';
  }
}

submit.addEventListener("click", saveInitialAndScore);