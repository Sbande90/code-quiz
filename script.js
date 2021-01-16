var container = document.querySelector("#container");
var questions = document.querySelector("#questions");
var options = document.querySelector("#options");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var score = document.querySelector("#score");
var start = document.querySelector("#start");
var start2 = document.querySelector("#start2");
var next = document.querySelector("#next");
var Time = document.querySelector("#time");
var showquestions = document.querySelector(".hide");
var welcome = document.querySelector("#welcom");
var highestscore = localStorage.getItem("highestscore");
var bestplayer = document.querySelector("#bestplayer");
var pickAnAnswer = document.querySelector("#error");
if (highestscore) {
    bestplayer.innerHTML = highestscore;
}
var timeLeft = 20;
var interval = false;

var userMustSelect = false;
var checker = false;
var count = 0;
var index = 0;
var questionsList = [
    {
        question: "who is the best intructor? ",
        opt1: "Anthony Maddatu",
        opt2: "Thomas Minoungou",
        opt3: "karl Max",
        opt4: "Salfo Bande",
        answer: "Thomas Minoungou"
    },
    {
        question: "who likes mango? ",
        opt1: "Mr Peter",
        opt2: "Karim Benzema",
        opt3: "Anthony Maddatu",
        opt4: "kevin Mango",
        answer: "Anthony Maddatu"
    },
    {
        question: "who is the best soccer player? ",
        opt1: "Lionel Messi",
        opt2: "Thomas Minoungou",
        opt3: "Mr George",
        opt4: "Salfo Bande",
        answer: "Salfo Bande"
    },
    {
        question: "who is the 1st president of Wakanda? ",
        opt1: "Chadwick Boseman",
        opt2: "Thomas Minoungou",
        opt3: "Blaise Compoare",
        opt4: "Salfo Bande",
        answer: "Chadwick Boseman"
    },
    {
        question: "who is the best of javascript? ",
        opt1: "Anthony Maddatu",
        opt2: "Thomas Minoungou",
        opt3: "Danai Guirira",
        opt4: "Salfo Bande",
        answer: "Thomas Minoungou"
    },
]
function startGame() {
    welcome.style.display = "none";
    console.log("start")
    index = 0;
    count = 0;
    questions.innerHTML = questionsList[0].question;
    opt1.innerHTML = questionsList[0].opt1
    opt2.innerHTML = questionsList[0].opt2
    opt3.innerHTML = questionsList[0].opt3
    opt4.innerHTML = questionsList[0].opt4
    showquestions.style.display = "block";
    startTimer();
}
// setting a timer
var startTimer = function () {
    if (interval != false) {
        clearInterval(interval);
        timeLeft = 20;
        opt1.style.background = "#3c32a8";
        opt2.style.background = "#3c32a8";
        opt3.style.background = "#3c32a8";
        opt4.style.background = "#3c32a8";
        score.innerHTML = 0;
        checker = false;
    }
    interval = setInterval(function () {
        timeLeft--;
        Time.innerHTML = timeLeft;
        if (timeLeft <= 0) {
            userMustSelect = true;
            showresult();

        }
    }, 1000);
}

function nextGame() {
    if (userMustSelect === true) {
        pickAnAnswer.innerHTML = "";
        index++;
        if (index < questionsList.length) {
            questions.innerHTML = questionsList[index].question;
            opt1.innerHTML = questionsList[index].opt1
            opt2.innerHTML = questionsList[index].opt2
            opt3.innerHTML = questionsList[index].opt3
            opt4.innerHTML = questionsList[index].opt4
            checker = false
            opt1.style.background = "#3c32a8";
            opt2.style.background = "#3c32a8";
            opt3.style.background = "#3c32a8";
            opt4.style.background = "#3c32a8";
        }
        else {
            showresult();
        }
        userMustSelect = false;

    }
    else {
        pickAnAnswer.innerHTML = "you must choose an answer!"
    }
}
function validateOpt1(event) {
    if (checker === false) {
        var val = opt1.innerHTML;
        var answer = questionsList[index].answer;
        if (val === answer) {
            opt1.style.background = "green";
            count++;
            score.innerHTML = count;
        }
        else {
            opt1.style.background = "red";
            timeLeft = timeLeft - 5;
        }
        checker = true;
        userMustSelect = true;
    }
}
function validateOpt2(event) {
    if (checker === false) {
        var val = opt2.innerHTML;
        var answer = questionsList[index].answer;
        if (val === answer) {
            opt2.style.background = "green";
            count++;
            score.innerHTML = count;
        }
        else {
            opt2.style.background = "red";
            timeLeft = timeLeft - 5;
        }
        checker = true;
        userMustSelect = true;
    }
}
function validateOpt3(event) {
    if (checker === false) {
        var val = opt3.innerHTML;
        var answer = questionsList[index].answer;
        // console.log(opt3.innerHTML)
        // console.log(answer)
        if (val === answer) {
            opt3.style.background = "green";
            count++;
            score.innerHTML = count;
        }
        else {
            opt3.style.background = "red";
            timeLeft = timeLeft - 5;
        }
        checker = true;
        userMustSelect = true;
    }
}
function validateOpt4(event) {
    if (checker === false) {
        var val = opt4.innerHTML;
        var answer = questionsList[index].answer;
        if (val === answer) {
            opt4.style.background = "green";
            count++;
            score.innerHTML = count;
        }
        else {
            opt4.style.background = "red";
            timeLeft = timeLeft - 5;
        }
        checker = true;
        userMustSelect = true;
    }
}
function showresult() {
    var msg = "nice try you got " + count + " out the 5! please enter your initial";
    // alert(msg);
    var userName = prompt(msg, "");
    if (userName == null || userName == "") {
        alert("userName is not saved");
    }
    else {
        var bestscore = localStorage.getItem("bestscore");
        var greatplayer = localStorage.getItem("highestscore");
        if (count > bestscore) {
            var name = userName + ": " + count;
            localStorage.setItem("highestscore", name);
            localStorage.setItem("bestscore", count);
            bestplayer.innerHTML = name;
        }

    }
    showquestions.style.display = "none";
    welcome.style.display = "block";
    clearInterval(interval);
}

start.addEventListener("click", startGame)
start2.addEventListener("click", startGame)
next.addEventListener("click", nextGame)
opt1.addEventListener("click", validateOpt1)
opt2.addEventListener("click", validateOpt2)
opt3.addEventListener("click", validateOpt3)
opt4.addEventListener("click", validateOpt4)




