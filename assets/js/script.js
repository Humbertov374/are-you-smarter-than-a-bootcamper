var score = 0;
var banner = document.querySelector(".banner");
var question = document.querySelector(".question");
var highscore = document.querySelector(".highscore");
var buttonsrow = document.querySelector(".buttons");
var timer = document.querySelector(".timer");
var timerInterval;
var correctsound = document.querySelector(".correct");
var wrongsound = document.querySelector(".wrong");
var cw = document.querySelector(".cw");
var cwtime = 2;
var seconds = 180;
var a1;
var a2;
var a3;
var a4;

//layout
function opening() {
  highscore.style.visibility = " hidden";
  a1 = document.createElement("button");
  a1.innerHTML = "Start Quiz!";
  document.body.children[4].appendChild(a1);
  a1.addEventListener("click", function () {
    question1();

  });
  a2 = document.createElement("button");
  a2.innerHTML = "Scores!";
  document.body.children[4].appendChild(a2);
  a2.addEventListener("click", function () {
    scorepage();
  });
}
quizOpening();

// Timer Animation
function countdown() {
    timerInterval = setInterval(function() {
        seconds --;
        timer.textContent = "Time Left!: " + seconds;
        if(seconds<= 0) {
            clearInterval (timerInterval);
            seconds = 0;
            timer.timerContent = "Timer Left!: 0"
            postquiz();
        }

    },1000)
}


//Adds remaining time to the score.
function timepoints() {
    score += seconds;
}

//Correct answer response.
function correct() {
    correctsound.play();
}

//Correct text display.
function correctcw() {
    var yesInterval = setInterval(function() {
    cwtime --;
    cw.setAttribute("style", "color: rgb(112, 177, 112)")
    cw.textContent = "Correct!";
        if (cwtime <= 0) {
            clearInterval (yesInterval);
            cw.textContent = "";
            cwtime = 2;
        }
    }, 350);
}

