var save = JSON.parse(localStorage.getItem("save"));
var saveLength = save.length;
var scoreList = document.querySelector("#scorelist");
console.log(save.length);
for (var i = 0; i < saveLength; i++) {
    var score=document.createElement("li");
    scoreList.appendChild(score); 
    score.textContent = (i+1)+". "+save[i];    
}