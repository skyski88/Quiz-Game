
var startCard = document.getElementById("startcard");
var quiz = document.getElementById("questionDiv");
var scores = document.getElementById("scoresDiv");
var ques = document.getElementById("question")
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var total = document.getElementById("total");
var seconds = 90;



var questions = [
    {
        question: "What symbol is used in jQuery?",
        answer1: "*",
        answer2: "$",
        answer3: "&",
        answer4: "%",
        correct: "2"
    },
    {
        question: "What is a binary variable having two values of 'true' and 'false'?",
        answer1: "Array",
        answer2: "JSON",
        answer3: "Boolean",
        answer4: "Stringify",
        correct: "3"
    },
    {
        question: "What is JavaScript Object Notation?",
        answer1: "Integer",
        answer2: "JSON",
        answer3: "Python",
        answer4: "C++",
        correct: "2"
    },
    {
        question: "What do you use to exit from a function?",
        answer1: "ESC Key",
        answer2: "Exit Browser",
        answer3: "Stop",
        answer4: "Return;",
        correct: "4"
    },
    {
        question: "Where is data stored using local storage?",
        answer1: "A SSD",
        answer2: "You HD",
        answer3: "Browser Webpage",
        answer4: "Desktop",
        correct: "3"
    },
    {
        question: "What is a number?",
        answer1: "Integer",
        answer2: "String",
        answer3: "JAVA",
        answer4: "MySQL",
        correct: "1"
    },
]


var previousQuestion = questions.length - 1;
var displayedQuestions = 0;


function randomQuestions() {
    var q = questions[displayedQuestions];
    question.innerHTML = "<h5>" + q.question + "</h5>";
    answer1.innerHTML = q.answer1;
    answer2.innerHTML = q.answer2;
    answer3.innerHTML = q.answer3;
    answer4.innerHTML = q.answer4;
}

function countDown() {
    var timeLeft = document.getElementById("time")
    var i = setInterval(function () {
        seconds--;
        var secondsString = seconds.toString();
        timeLeft.textContent = secondsString;
        if (seconds <= 0) {
            clearInterval(i);
            alert("Try Again. Use Google!!!")
        } else if (previousQuestion === displayedQuestions) {
            clearInterval(i)
        }
    }, 1000);
}

document.getElementById("startbutton").addEventListener("click", function startQuiz() {
    startCard.style.display = "none";
    randomQuestions();
    quiz.style.display = "block"
    countDown();
});

function checkAnswer(answer) {
    if (answer == questions[displayedQuestions].correct) {
        console.log("Bingo!");
    } else {
        seconds -= 10;
        console.log("Come on man...");
    }
    if (displayedQuestions < previousQuestion) {
        displayedQuestions++;
        randomQuestions();
    } else
        scoreDisplay();
}
function correctAnswer() {
    document.getElementById()
}


function scoreDisplay() {
    quiz.style.display = "none"
    scores.style.display = "block";
    total.innerHTML = "Your Total Score is... " + seconds;
}


var userInitals = document.getElementById("user-initials");
var submitScore = document.getElementById("submitScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

submitScore.addEventListener("click", function (event) {
    event.preventDefault();

    var user = {
        initials: userInitals.value.trim(),
        score: seconds,
    }
    console.log(user)
    highScores.push(user);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores)
    window.location = "Highscore.html";

    document.getElementById("highScores").html(user);


})

