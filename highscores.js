var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("highScores",highScores)
var highScoresElement = document.querySelector("leaderboard")
for (i = 0; i < highScores.length; i++) {
 var newElement =   document.createElement("li")
 newElement.textContent=highScores[i].initials + ":"+highScores[i].score
 highScoresElement.innerHTML(newElement);
 console.log(highScoresElement)



}

















// const highScoresList = document.getElementById('highScoresList')
// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScores.map( score => {

// });