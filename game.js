
var startCard = document.getElementById("startcard");
var quiz = document.getElementById("questionDiv");
var scores = document.getElementById("scoresDiv");
var ques = document.getElementById("question")
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");
var total = document.getElementById("total");
var seconds = 90 ;



var questions = [
    {
        question: "I'm tall when I'm young, and short when I'm old. What am I?",
        answer1: "Person",
        answer2: "Candle",
        answer3: "Cake",
        answer4: "Bank Account",
        correct: "2"
    },
    {
        question: "I am full of holes, but I still hold water. What am I?",
        answer1: "Paper",
        answer2: "Bag",
        answer3: "Sponge",
        answer4: "Cup",
        correct: "3"
    },
    {
        question: "What is always in front of you, but cannot be seen?",
        answer1: "Your Hand",
        answer2: "The Future",
        answer3: "The Road",
        answer4: "The Ground",
        correct: "2"
    },
    {
        question: "What goes up, but never comes down?",
        answer1: "Browns Opponent Score",
        answer2: "College Tuition",
        answer3: "Inflation",
        answer4: "Age",
        correct: "4"
    },
    {
        question: "What gets wet while drying?",
        answer1: "A Shoe",
        answer2: "A Blanket",
        answer3: "A Towel",
        answer4: "A Car",
        correct: "3"
    },
    {
        question: "What can you keep after giving to someone?",
        answer1: "Money",
        answer2: "Your Word",
        answer3: "Food",
        answer4: "Clothes",
        correct: "2"
    },
]


var previousQuestion = questions.length-1;
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
    var i = setInterval(function() {
        seconds--;
        var secondsString = seconds.toString();
        timeLeft.textContent = secondsString;
        if (seconds <= 0) {
            clearInterval(i);
            alert("Try Again. Use Google!!!")
        } else if (previousQuestion === displayedQuestions){
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
    if (answer == questions [displayedQuestions].correct) {
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
    total.innerHTML = "You Scored " + seconds;
}


var userInitals = document.getElementById("user-initials");
var submitScore = document.getElementById("submitScore");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

submitScore.addEventListener("click", function(event){
    event.preventDefault();

    var user = {
        initials: userInitals.value.trim(),
        score: seconds,
    }
    console.log(user)
    highScores.push(user);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores)
    window.location="Highscore.html";

    document.getElementById("highScores").html(user);
    
    
})
