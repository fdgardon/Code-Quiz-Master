
var questions = [

        { question: "How many seasons are there in a year?", choices: ["Three", "Four", "Five", "Six"], answer: "Four" },
        { question: "In which season we will see snow?", choices: ["Spring", "Summer", "Autumn", "Winter"], answer: "Winter" },
        { question: "Which city is the capital of California?", choices: ["Sacramento", "Los Angeles", "San Francisco", "San Diego"], answer: "Sacramento" },
        { question: "Which state is the golden state?", choices: ["California", "Nevada", "Virginia", "Arizona"], answer: "California" },
        { question: "How many states buld United States of America?", choices: ["30", "40", "50", "60"], answer: "50" },
];

var timeLeft = 60; //set timer to 60
var time = document.getElementById("time")
var timerId;
var startbtn = document.getElementById("startBtn")
var quiz = document.querySelector(".Quiz")
var question = document.getElementById("Question")
var button = document.getElementById("Button")
var track = 0
var welcome = document.getElementById("Welcome")
var currentQuestionIndex = 0;
var choices = document.getElementById("choices")
//var submitBtn = document.getElementById("submit")
var initials = document.getElementById("initials")
var feedback = document.getElementById("feedback")
var highscore = document.getElementById("highscores")
var final = document.getElementById("final")
var finalScore = document.getElementById("finalScore")
var score = 0;




function countdown() {


        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
                // As long as the `timeLeft` is greater than 1
                if (timeLeft > 1) {
                        // Set the `textContent` of `timerEl` to show the remaining seconds
                        time.textContent = timeLeft + ' seconds remaining';
                        // Decrement `timeLeft` by 1
                        timeLeft--;
                } else if (timeLeft === 1) {
                        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
                        time.textContent = timeLeft + ' second remaining';
                        timeLeft--;
                } else {
                        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
                        time.textContent = '';
                        // Use `clearInterval()` to stop the timer
                        clearInterval(timeInterval);
                        // Call the `displayMessage()` run in the game function

                }
        }, 1000);

        
}

function startQuiz() {
        startbtn.style.display = "none"
        welcome.style.display = "none"
        countdown()
        displayquestion()


}

function displayquestion() {
        question.textContent = questions[track].question
        displaychoices()
}


function displaychoices() {
        choices.innerHTML = ""
        for (var i = 0; i < questions[track].choices.length; i++) {
                var createBtn = document.createElement("button")
                createBtn.textContent = questions[track].choices[i]
                createBtn.onclick = correctAnwser
                choices.append(createBtn)
        }

}

function correctAnwser(event) {
        console.log(event.target)
        if (event.target.textContent === questions[track].answer) {
                score++;

        } else {
                timeLeft -= 15;
        }

        track++
        if (track >= questions.length) {
                // console.log("GameOver")
                final.classList.remove("hide")
                quiz.classList.add("hide")
                finalScore.textContent = timeLeft;
        } else {
                displayquestion()
        

                
        }
        
};



startbtn.addEventListener("click", startQuiz);
//submitBtn.addEventListener("click", saveHighScore)

// ///////////////////////////////////////////////////////////////////////////


let submitBtn = {
        finalScore: "",
        initials: ""

};
let submitBtn_serialized = JSON.stringify(submitBtn);

localStorage.setItem("submitBtn", submitBtn_serialized);

let submitBtn_deserialized = JSON.parse(localStorage.getItem("submitBtn"));

console.log(submitBtn_deserialized);

