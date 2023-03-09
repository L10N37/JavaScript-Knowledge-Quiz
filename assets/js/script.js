//////////// Global Area (on load) //////////////
let timeStart = 70;
let index = 0;
let questionsAnsweredCounter = 0;
// Insert Intro Screen
let introScreen= document.createElement("div");
introScreen.className= "intro"
introScreen.id="temp";
document.body.appendChild(introScreen);
introScreen.innerHTML = "Try to answer the following questions about JavaScript \
programming within the time limit. There are 10 questions. \
If you can answer correctly within an average of 7 seconds a question, \
you will make it through!"
// Highlighted text in Intro Screen (separate style)
let introScreenAlt= document.createElement("div");
introScreenAlt.className= "highLight"
introScreen.appendChild(introScreenAlt);
introScreenAlt.innerHTML = "\ You will be penalised 10 seconds for an incorrect answer!";
////////////////////////////////////////////////


function removeIntro(){
    // delete unecessary elements
    let deleteIntro = document.getElementById('temp', 'imReady');
    deleteIntro.parentNode.removeChild(deleteIntro);
    deleteIntro = document.getElementById('imReady');
    deleteIntro.parentNode.removeChild(deleteIntro);
}

function clearScreen(){
    let remove = document.getElementById('createDestroy');
    remove.parentNode.removeChild(remove);
    remove = document.getElementById('questionsID');
    remove.parentNode.removeChild(remove);
}

function score(correctAnswerPoints, timeLeftPoints) {
    console.log(correctAnswerPoints,timeLeftPoints)
}

function timerDisplay(){
    // Times up stuff
    if (timeStart<=0){
    // Clear interval timer stuff
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }     // times up alert and pass score attributes to score function
        alert("Time's up!");
        score(questionsAnsweredCounter, timeStart);
        }
    // Remove last timeupdate if exists
    let timerHasStarted = document.getElementById("timerID");
    if (timerHasStarted) timerHasStarted.parentNode.removeChild(timerHasStarted);
    // Create Timer
    let timerElement= document.createElement("div");
    timerElement.className= "timerClass"
    timerElement.id="timerID";
    document.body.appendChild(timerElement);
    timerElement.innerHTML = timeStart;
    timeStart--;
}

function startQuiz(){
    // Create/ Display questions until answered
    let questionVar= document.createElement("div");
    questionVar.className= "questionsClass";
    questionVar.id="questionsID";
    document.body.appendChild(questionVar);
    // display question array of objects question # as per index value
    questionVar.innerHTML = questions[index].question;
    // pluck answers from object array, as per current question index value
    // and display in random order each quiz through
    let randomAnswer1to4 =[];
    let AnswersJumbled =[];
    for (let i= 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * questions[index].answers.length);
        randomAnswer1to4[i] = questions[index].answers[randomIndex];
        // remove the answer from array, method sets new array length, 
        // so we can't generate the same answer multiple times
        questions[index].answers.splice(randomIndex, 1);
        AnswersJumbled[i] =  randomAnswer1to4[i];
    }
    // Generate Answers
    // parent used for click event listener
    let answersVarParent= document.createElement("div");
    answersVarParent.className= "listenTarget";
    answersVarParent.id="createDestroy"
    document.body.appendChild(answersVarParent);
    // children
    //1
    let answersVar0= document.createElement("div");
    answersVar0.className= "answersClass";
    answersVar0.id="answersID0";
    answersVarParent.appendChild(answersVar0);
    //2
    let answersVar1= document.createElement("div");
    answersVar1.className= "answersClass";
    answersVar1.id="answersID1";
    answersVarParent.appendChild(answersVar1);
    //3
    let answersVar2= document.createElement("div");
    answersVar2.className= "answersClass";
    answersVar2.id="answersID2";
    answersVarParent.appendChild(answersVar2);
    //4
    let answersVar3= document.createElement("div");
    answersVar3.className= "answersClass";
    answersVar3.id="answersID3";
    answersVarParent.appendChild(answersVar3);
    // Inner HTML generated randomly above, this section adjusts the ID of the div containing
    // the correct answer, to an ID used to ID the correct answer with the click event.
    answersVar0.innerHTML = AnswersJumbled[0];
    answersVar1.innerHTML = AnswersJumbled[1];
    answersVar2.innerHTML = AnswersJumbled[2];
    answersVar3.innerHTML = AnswersJumbled[3];

    if (AnswersJumbled[0] == questions[index].correctAnswer) {
    answersVar0.id="correctAnswerID";
    }
    else if (AnswersJumbled[1] == questions[index].correctAnswer) {
    answersVar1.id="correctAnswerID";
    }
    else if (AnswersJumbled[2] == questions[index].correctAnswer) {
    answersVar2.id="correctAnswerID";
    }
    else if (AnswersJumbled[3] == questions[index].correctAnswer) {
    answersVar3.id="correctAnswerID";
    }
        // Add our click event listener for clickable answers
        let clickableAnswers = document.querySelector(".listenTarget");

        clickableAnswers.addEventListener("click", function(event) {
        let element = event.target;
            // Check if the clicked element was the correct answer
            if (element.matches("#correctAnswerID")) {
                questionsAnsweredCounter++;
                if (questionsAnsweredCounter==10){
                    alert("You answered all the questions correctly!");
                    score(questionsAnsweredCounter, timeStart);
                }
                index++;
                // Clear Screen for next round
                clearScreen();
                console.log(questionsAnsweredCounter);
                startQuiz();
                return;
            }
            // Check if the clicked element was the correct answer
            else {
                timeStart=timeStart-10;
            }
        }
        )
}
