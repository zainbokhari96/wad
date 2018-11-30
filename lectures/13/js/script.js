var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},{
    question : "  A tree's age can be found by?",
    choices : [ "counting the number of annual rings ",
        " counting the number of branches ",
        " measuring its height ",
        " measuring its girth"],
    correctAnswer : 1
},{
    question : " Which of these tags are all table tags?",
    choices : [ " table head t foot t",
        "table tr td",
        " table tr t t",
        "thead body tr " ],
    correctAnswer : 2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {

    if(currentQuestion >= questions.length) {
        resetQuiz();
        document.getElementById("choice-list").innerHTML = "";
        displayCurrentQuestion();
        return;
    }

    var myAnswer = -1;
    var radios = document.getElementsByName("answer");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            myAnswer = radios[i].value;
            break;
        }
    }

    if(myAnswer == -1) {
        var msg = document.getElementById("quiz-message");
        msg.style.display = 'block';
        msg.innerHTML = "Selection Required!!";
        return;
    }

    if (questions[currentQuestion].correctAnswer == myAnswer) {
        currentQuestion += 1;
        correctAnswers += 1;
        if(currentQuestion >= questions.length) {
            displayScore();
            document.getElementById("next-btn").innerHTML = "Start Again";
            return;
        }
    } else {
        currentQuestion += 1;

        if(currentQuestion >= questions.length) {
            displayScore();
            document.getElementById("next-btn").innerHTML = "Start Again";
            return;
        }
    }

    document.getElementById("choice-list").innerHTML = "";
    displayCurrentQuestion();
}

function displayCurrentQuestion() {

    var q=document.getElementById("question");

    q.innerHTML=questions[currentQuestion].question;

    var c=document.getElementById("choice-list");

    for (var i=0;i < questions[currentQuestion].choices.length ;i++) {
        var op = document.createElement("li");
        op.innerHTML = "<input id='myradio' type='radio' name='answer' value='" + i + "'>" + questions[currentQuestion].choices[i];
        q.appendChild(op);
    }


}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}