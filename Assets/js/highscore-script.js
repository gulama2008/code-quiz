var scoreList = document.querySelector("#scorelist");
var clear = document.querySelector("#clear-highscores");

//create function of showing the list of initials and scores saved in local storage
function showHighscores() { 
    var save = JSON.parse(localStorage.getItem("save"));
    var saveLength = save.length;
    for (var i = 0; i < saveLength; i++) {
      var score = document.createElement("li");
      scoreList.appendChild(score);
      score.textContent = i + 1 + ". " + save[i];
    }
}
  
showHighscores();

//create function for the "clear highscores" button's click event
function clearHighScores() {
    localStorage.clear("save");
    scoreList.style.display = "none";
}
  
clear.addEventListener("click", clearHighScores);
