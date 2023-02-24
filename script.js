
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
var mainContent = document.querySelector(".card-content")
var startbtn = document.getElementById("startBtn")
var quiz = document.querySelector(".Quiz")///1
var headEl = document.getElementById("head")////2
var question = document.getElementById("Question")
var button = document.getElementById("Button")
var track = 0
var welcome = document.getElementById("Welcome")
var currentQuestionIndex = 0;
var choices = document.getElementById("choices")
var submitBtn = document.getElementById("submit")
var initials = document.getElementById("initials")///////5
var containerHighScoresEl = document.getElementById("high-score-container")/////6
var feedback = document.getElementById("feedback")
var highscore = document.getElementById("highscores")////7
var final = document.getElementById("final")////3
var finalScore = document.getElementById("finalScore")////4
var listHighScoreEl = document.getElementById("high-score-list")/////8
var arrayShuffledQuestions//////12
var score = 0;
var timeInterval; 
var gobackBtn = document.getElementById("goBack");
time.innerText = 60
var gameover

function countdown() {


        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
         timeInterval = setInterval(function () {
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


};

function startQuiz() {
        startbtn.style.display = "none"
        welcome.style.display = "none"
        countdown()
        displayquestion()


};

function displayquestion() {
        question.textContent = questions[track].question
        displaychoices()
};


function displaychoices() {
        choices.innerHTML = ""
        for (var i = 0; i < questions[track].choices.length; i++) {
                var createBtn = document.createElement("button")
                createBtn.textContent = questions[track].choices[i]
                createBtn.onclick = correctAnwser
                choices.append(createBtn)
        }

};

function correctAnwser(event) {
        console.log(event.target)
        if (event.target.textContent === questions[track].answer) {
                score++;

        } else {
                timeLeft -= 20;
        }

        track++
        if (track >= questions.length) {
                final.classList.remove("hide")
                quiz.classList.add("hide")
                finalScore.textContent = timeLeft;
        } else {
                displayquestion()
                displayResult()
        }
};

function submitScore() {
        clearInterval(timeInterval)
        let initials = document.getElementById('initials');
        initials = initials.value;

        localStorage.setItem('timeLeft', timeLeft);
        localStorage.setItem('initials', initials);

        final.classList.add("hide")
        containerHighScoresEl.classList.remove("hide");

        localStorage.setItem("initials", JSON.stringify(initials));

        var storResult = JSON.parse(window.localStorage.getItem("initials"));
        var scoreResult = JSON.parse(window.localStorage.getItem("timeLeft"));
        console.log(localStorage);

const scoreEl = document.createElement("li")

scoreEl.textContent = storResult + " " + scoreResult

listHighScoreEl.append(scoreEl)

};

function displayResult() {
listHighScoreEl.textContent = initials.value;

}

var renderStartPage = function () {

        mainContent.style.display = "block"
        startbtn.style.display = "block"

        containerHighScoresEl.style.display = "none"

        QuestionIndex = 0
        gameover = ""
        time.textContent = 60 
        score = 0
}


/////////////////////////////////////////
/////////////////////////////////////////
startbtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitScore);
gobackBtn.addEventListener("click", renderStartPage);


