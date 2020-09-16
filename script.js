var questions = [
{
    prompt: "What are the primary colors of the Cleveland Browns?\n(a) Black/Yellow\n (b) Orange/Brown\n (c) Pink/Purple",
    answer: "b"
},
{
    prompt: "Does Math.floor round down to the nearest integer?\n (a) yes\n (b) no",
    answer: "a"
},
{
    prompt: "Is 2020 almost over (finally)?\n (a) Yes\n (b) No",
    answer: "a"
}


]

var score = 0;

for (let i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert('Good Job!');
    }
    else {
        ("Try Again");
    }
}

alert("you scored " + score + "/" + questions.length);