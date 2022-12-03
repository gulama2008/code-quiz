//define global variables
var timeLeft;
var quizNumber = 0;
var finish = false;
var score;
var input;
var initial;


//get element from html
var timer = document.querySelector("#timer");
var quiz = document.querySelector("#quiz");
var options = document.querySelector("#options")
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
var message = document.querySelector("#message");

var submit;

//create objects for each quiz
var question1 = {
    content: "1. Inside which HTML element do we put the JavaScript?",
    optionA: "<javascript>",
    optionB: "<scripting>",
    optionC: "<script>",
    optionD: "<js>",
    correctAnswer: "<script>"
};

var question2 = {
  content: "2. How do you write 'Hello World' in an alert box?",
  optionA: "alertBox('Hello World')",
  optionB: "msgBox('Hello World')",
  optionC: "msg('Hello World')",
  optionD: "alert('Hello World')",
  correctAnswer: "alert('Hello World')",
};

var question3 = {
  content: "3. How to write an IF statement in JavaScript?",
  optionA: "if i==5 then",
  optionB: "if i=5",
  optionC: "if i=5 then",
  optionD: "if (i==5)",
  correctAnswer: "if (i==5)",
};

var question4 = {
  content: "4. Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
  optionA: "Position",
  optionB: "Window",
  optionC: "Standard",
  optionD: "Location",
  correctAnswer: "Window",
};

var question5 = {
  content: "5. Which of the following is true about variable naming conventions in JavaScript?",
  optionA: "JavaScript variable names must begin with a letter or the underscore character",
  optionB: "JavaScript variable names are case sensitive",
  optionC: "Both of the above",
  optionD: "None of the above",
  correctAnswer: "Both of the above",
};

var question6 = {
  content: "6. Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  optionA: "last()",
  optionB: "put()",
  optionC: "push()",
  optionD: "None of the above",
  correctAnswer: "push()",
};

var question7 = {
  content:
    "7. Which of the following function of String object returns the characters in a string between two indexes into the string?",
  optionA: "slice()",
  optionB: "split()",
  optionC: "substr()",
  optionD: "substring()",
  correctAnswer: "substring()",
};

var question8 = {
  content:
    "8. Which of the following function of String object returns the calling string value converted to lower case?",
  optionA: "toLocaleLowerCase()",
  optionB: "toLowerCase()",
  optionC: "toString()",
  optionD: "substring()",
  correctAnswer: "toLowerCase()",
};

//create array for the quiz objects
var quizArray = [question1, question2, question3,question4,question5,question6,question7,question8]

//timer function
function timeCountDown() { 
    var countDown = setInterval(function () {
        timeLeft--;
        if (!finish) {
            if (timeLeft == 0) {
                clearInterval(countDown);
            } else {
                timer.textContent = "Time: " + timeLeft;
            }
        } else { 
            clearInterval(countDown);          
        }
        score = timeLeft;         
    }, 1000);  
}

//function of showing the finishing page
function regPage() { 
    var lis = document.querySelectorAll("li");
    for (i = 0; i < lis.length; i++) { 
        lis[i].textContent = "";
        lis[i].setAttribute("class", "regpage");
    }
    quiz.textContent = "All done!";
    optionA.textContent = "Your final score is: "+score;
    var label = document.createElement("label");
    var text = document.createElement("input");
    var submit = document.createElement("button");
    optionB.appendChild(label);
    optionB.appendChild(text);
    optionB.appendChild(submit);
    label.setAttribute("for", "initial");
    label.textContent = "Enter initials:";
    text.setAttribute("type", "text");
    text.setAttribute("id", "initial");
    console.log("aaa");
    options.removeEventListener("click", clickEvent);
    console.log("bbb");
    submit.textContent = "submit"; 
    console.log("ccc");
    submit.addEventListener("click", function (event) { 
        event.preventDefault();
        saveInitialAndScore();
    });
}

//function of changing to the next quiz
function nextPage() { 
    quizNumber++;
    if (quizNumber == quizArray.length) {
        regPage();
        finish = true;
        console.log(finish);
    } else {
        quiz.textContent = quizArray[quizNumber].content;
        optionA.textContent = quizArray[quizNumber].optionA;
        optionB.textContent = quizArray[quizNumber].optionB;
        optionC.textContent = quizArray[quizNumber].optionC;
        optionD.textContent = quizArray[quizNumber].optionD;
    }  
} 

//event of clicking one option
var clickEvent = function (event) {
  if (event.target.textContent == quizArray[quizNumber].correctAnswer) {
    message.textContent = "Correct!";
  } else {
    message.textContent = "Wrong!";
    console.log(message.textContent);
    timeLeft -= 10;
  }
  nextPage();
};
    
options.addEventListener("click", clickEvent);

//render function
function init() { 
    timeLeft = 60;
    quiz.textContent = quizArray[quizNumber].content;
    optionA.textContent = quizArray[quizNumber].optionA;
    optionB.textContent = quizArray[quizNumber].optionB;
    optionC.textContent = quizArray[quizNumber].optionC;
    optionD.textContent = quizArray[quizNumber].optionD;
    timeCountDown();   
}

init();




 

function saveInitialAndScore() {
   
    input = document.querySelector("input");
    initial = input.value;
  if (initial == "") {
    window.alert("Please enter your initial");
  } else {
        if (!localStorage.getItem("save")) {
        var save = new Array();
        save.push(initial + "-" + score);
            localStorage.setItem("save", JSON.stringify(save));
            console.log(save);
        } else {
            var save = JSON.parse(localStorage.getItem("save")); 
            save.push(initial + "-" + score);
            localStorage.setItem("save", JSON.stringify(save));
            console.log(save);
        }
  }
}

//get initial and score and save it to the localstorage when clicking submit



