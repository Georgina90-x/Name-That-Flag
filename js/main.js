//Select Elements
let countSpan = document.querySelector(".count span");
let flagImgDiv = document.querySelector(".flag-img");
let flagImg = document.querySelector(".flag-img img");
let flagOptions = document.querySelector(".flag-options ul");
let flagLis = document.querySelectorAll(".flag-options ul li");
let score = document.querySelector("h3 span");
let scoreDiv = document.querySelector(".score");
let correctAns = document.querySelector(".score .right span");
let incorrectAns = document.querySelector(".score .incorrect span");
let btnNewGame = document.querySelector("#newGame");
const timerElement = document.getElementById("time");

let timeLeft=60;

/** TIMER FUNCTION?
function updateTimer() {
    const minutes=Math.floor(timeLeft/30);
    let seconds=timeLeft%30;
    seconds=seconds<10?"0"+seconds:seconds;
    timerElement.textContext= '${minutes}:${seconds}';

    if (timeLeft===0) {
        showResults();
    }
    else {
        timeLeft--;
    }
} **/

let currentIndex = 0;
let rightAnswer = 0;

function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            let qCount = 10;
            questionNum(qCount);
    questions = questions.sort(() => Math.random() - Math.random()).slice(0, 10);

            addQuestionData(questions[currentIndex], qCount);

            flagLis.forEach(li => {
                li.addEventListener("click", () => {
                    let rightAnswer = questions[currentIndex].right_answer;
                    li.classList.add("active");

                    currentIndex++;


                    setTimeout(() => {
                        checkAnswer(rightAnswer, qCount);
                    }, 500);

                    setTimeout(() => {
                        flagImg.src = "";
                        li.classList.remove("active");
                        li.classList.remove("success");
                        li.classList.remove("wrong");

                        addQuestionData(questions[currentIndex], qCount);
                    }, 1000);

                    setTimeout(() => {
                        showResults(qCount);
                    }, 1002);
                });
            });
        }
    }
    myRequest.open("GET", "js/flag_questions.json", true);
    myRequest.send();
}

getQuestions();

function questionNum(num) {
    countSpan.innerHTML = num;
}

function addQuestionData(obj, count) {
    if (currentIndex < count) {
        flagImg.src = `img/${obj.img}`;
        //Create Options
        flagLis.forEach((li, i) => {
            //Give each Li a dynamic Id
            li.id = `answer_${i+1}`;
            //Create for Each Li a dynamic data-attribut
            li.dataset.answer = obj[`options`][i];
            //Insert the Option in the li
            li.innerHTML = obj[`options`][i];
        });
    }
}

function checkAnswer(rAnswer, count) {
    let choosenAnswer;
    for (let i = 0; i < flagLis.length; i++) {
        if (flagLis[i].classList.contains("active")) {
            choosenAnswer = flagLis[i].dataset.answer;
            if (rAnswer === choosenAnswer) {
                flagLis[i].classList.add("success");
                rightAnswer++;
                score.innerHTML = rightAnswer;
            } else {
                flagLis[i].classList.add("wrong");
            }
        }
    }
}

function showResults(count) {
    if (currentIndex === count) {
        flagOptions.innerHTML = "";
        flagImgDiv.innerHTML = "";
        scoreDiv.style.display = "block";
        correctAns.innerHTML = rightAnswer;
        incorrectAns.innerHTML = count - rightAnswer;
    }
}

btnNewGame.addEventListener("click", () => {
    window.location.reload();
});

btnChallenge.addEventListener("click"), () => {
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}