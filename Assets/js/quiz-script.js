//define global variables
var timeLeft;
var quizNumber = 0;

//get element from html
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var options = document.querySelector("#options")
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var message = document.querySelector("#message");


//create objects for each quiz
var question1 = {
    content: "Inside which HTML element do we put the JavaScript?",
    optionA: "<javascript>",
    optionB: "<scripting>",
    optionC: "<script>",
    optionD: "<js>",
    correctAnswer: "<script>"
};

var question2 = {
  content: "How do you write 'Hello World' in an alert box?",
  optionA: "alertBox('Hello World')",
  optionB: "msgBox('Hello World')",
  optionC: "msg('Hello World')",
  optionD: "alert('Hello World')",
  correctAnswer: "alert('Hello World')",
};

var question3 = {
  content: "How to write an IF statement in JavaScript?",
  optionA: "if i==5 then",
  optionB: "if i=5",
  optionC: "if i=5 then",
  optionD: "if (i==5)",
  correctAnswer: "if (i==5)",
};


//create array for the quiz objects
var quizArray = [question1, question2, question3]

//timer function
function timeCountDown() { 
    var countDown = setInterval(function () { 
        if (timeLeft >= 10 && timeLeft <= 30) {
            console.log(timeLeft);
            timer.textContent = "Time: " + timeLeft;
        } else if (timeLeft >= 0 && timeLeft < 10) {
            console.log(timeLeft);
            timer.textContent = "Time: 0" + timeLeft;
        } else { 
            clearInterval(countDown);
        }
        timeLeft--;
    }, 1000)
}

//function of showing the finishing page with scores and email

function addLinkToRegPage() { 
    message.textContent = "";
    optionA.textContent = "";
    optionB.textContent = "";
    optionC.textContent = "";
    optionD.textContent = "";
    var aA = document.createElement("a");
    var aB = document.createElement("a");
    var aC = document.createElement("a");
    var aD = document.createElement("a");
    optionA.appendChild(aA).textContent = quizArray[quizNumber].optionA;
    optionB.appendChild(aB).textContent = quizArray[quizNumber].optionB;
    optionC.appendChild(aC).textContent = quizArray[quizNumber].optionC;
    optionD.appendChild(aD).textContent = quizArray[quizNumber].optionD;
    var anchor = options.querySelectorAll("a");
    for (i = 0; i < anchor.length; i++) {
        console.log(anchor[i]);
        anchor[i].setAttribute("href", "reg-page.html");
        console.log(anchor[i]);
        anchor[i].style.textDecoration = "none";
        console.log(anchor[i]);
        anchor[i].style.color= "white";
        console.log(anchor[i]);

     }

}

//function of changing to the next quiz
function nextPage() { 
    quizNumber++;
    if (quizNumber == quizArray.length - 1) {
        setTimeout(addLinkToRegPage, 500);

    } else { 
        var showNextQuizInOneSecond = setTimeout(function () {
            message.textContent = "";
            quiz.textContent = quizArray[quizNumber].content;
            optionA.textContent = quizArray[quizNumber].optionA;
            optionB.textContent = quizArray[quizNumber].optionB;
            optionC.textContent = quizArray[quizNumber].optionC;
            optionD.textContent = quizArray[quizNumber].optionD;
        }, 500);
    }
    
} 

//event of clicking one option
options.addEventListener("click", function (event) { 
    if (event.target.textContent == quizArray[quizNumber].correctAnswer) {
        message.textContent = "Correct!"
        
    } else { 
        message.textContent="Wrong!"
    }
    
    nextPage();
})

//

//render function

function init() { 
    timeLeft = 10;
    timeCountDown();
    quiz.textContent = quizArray[quizNumber].content;
    optionA.textContent = quizArray[quizNumber].optionA;
    optionB.textContent = quizArray[quizNumber].optionB;
    optionC.textContent = quizArray[quizNumber].optionC;
    optionD.textContent = quizArray[quizNumber].optionD;
}

//
init();