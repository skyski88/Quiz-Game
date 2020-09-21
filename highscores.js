var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("highScores",highScores)
var highScoresElement = $("#leaderboard")
for (i = 0; i < highScores.length; i++) {
 var newElement =   document.createElement("li")
 newElement.textContent=highScores[i].initials + ":"+highScores[i].score
//  newElement.addClass("texture")
 console.log(highScoresElement)
 highScoresElement.append(newElement);
//  $.maximum("3");

//  var highScores = {};
//  function myFunction() {
//    highScores.sort(function(a, b){return a-b});
//  }

//  console.log(JSON.parse(JSON.stringify(obj)))
}


// const highScoresList = document.getElementById('highScoresList')
// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScores.map( score => {

// });