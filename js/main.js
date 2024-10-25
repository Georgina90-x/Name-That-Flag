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

let currentIndex = 0;
let rightAnswer = 0;

function getQuestions() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let questions = JSON.parse(this.responseText);
            let qCount = 5;
            questionNum(qCount);
    questions = questions.sort(() => Math.random() - Math.random()).slice(0, 5);

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
        flagLis.forEach((li, i) => {
            li.id = `answer_${i+1}`;
            li.dataset.answer = obj[`options`][i];
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

function StartMyTimer() {
    // Set the date we're counting down to 60 seconds
    var countDownDate = new Date().getTime()+60000;
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="TimerDisplay"
      document.getElementById("TimerDisplay").innerHTML = seconds + "s";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("TimerDisplay").innerHTML = "Times Up";
        let element = document.getElementById("TimeoutTryAgain");
        let hidden = element.getAttribute("hidden");
        element.removeAttribute("hidden");
      }
    }, 1000);
    }
   
  
    function TryAgain() {
        let element = document.getElementById("TimeoutTryAgain");
        let hidden = element.getAttribute("hidden");
        element.setAttribute("hidden", "hidden");
        StartMyTimer();
    }


