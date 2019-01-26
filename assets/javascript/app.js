// sqestions
// The array of questions for our quiz game.
var questions = [
    { q: "The sky is blue.", a: "true" },
    { q: "There are 365 days in a year.", a: "true" },
    { q: "There are 42 ounces in a pound.", a: "false" },
    { q: "The Declaration of Independence was created in 1745.", a: "false" },
    { q: "Bananas are vegetables.", a: "false" }
];

var score = 0;
var questionIndex = 0;



function renderQuestion() {

    if (questionIndex <= (questions.length - 1)) {
        document.querySelector(".lead").innerHTML = questions[questionIndex].q;
    }

    else {
        document.querySelector(".lead").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
}








renderQuestion();



document.onclick = function (event) {
    if (questionIndex === questions.length) {
        return;
    }
    event.preventDefault();
    if (yes.clicked == true || no.clicked === true) {
        if (userInput === questions[questionIndex].a) {

        }
    }
    // If they guess the correct answer, increase and update score, 
    score++;
    updateScore();
    // Increment the questionIndex variable and call the renderQuestion function.
    questionIndex++;
    renderQuestion();
};
var number = 300;
$(document).ready(run);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").text("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.

    }
}

//  The stop function
function stop() {


    clearInterval(intervalId);
}


run();

