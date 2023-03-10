//////////// Global Area (on load) //////////////
// count page reloads
// https://stackoverflow.com/questions/31607773/counting-page-reloads
var state = history.state || {};
var reloadCount = state.reloadCount || 0;
if (performance.navigation.type === 1) { // Reload
    state.reloadCount = ++reloadCount;
    history.replaceState(state, null, document.URL);
} else if (reloadCount) {
    delete state.reloadCount;
    reloadCount = 0;
    history.replaceState(state, null, document.URL);
}

let timeStart = 70;
let index = 0;
let questionsAnsweredCounter = 0;
let highscores= [];
let localHighscoreIndex= 0;
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
    let deleteIntro = document.getElementById('temp');
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
    // remove correct / incorrect text from last attempt
    removeCorrectText();
    removeIncorrectText();
    // create text input box for initials entry
    let initialsEntryBox = document.createElement("input");
    initialsEntryBox.id="entryBox";
    document.body.appendChild(initialsEntryBox);
    // create 'Submit' button
    let createButton = document.createElement("button");
    createButton.className="buttonSubmitClass";
    createButton.id= "buttonSubmitID";
    document.body.appendChild(createButton);
    createButton.innerHTML="Submit";
    // create 'Play Again' button
    createButton = document.createElement("button");
    createButton.className="playAgainButtonClass";
    createButton.id= "playAgainButtonID";
    document.body.appendChild(createButton);
    createButton.innerHTML="Play Again";
    // create 'View High Scores' button
    createButton = document.createElement("button");
    createButton.className="viewScoresButtonClass";
    createButton.id= "viewScoresButtonID";
    document.body.appendChild(createButton);
    createButton.innerHTML="View High Scores";
    


    // add click event to 'Submit' button
    let submitButton = document.getElementById("buttonSubmitID");


        submitButton.addEventListener("click", function(event) {
        
        // initalsEntered == text entry boxes text input area (default:blank)
        let initialsEntered = document.getElementById("entryBox");
        // this variable stores the characters input into text input area
        const value= initialsEntered.value;
        // local storage stuff
        // `initials` is the key while the variable is the value.
        // setting up our entered initials for local storage
        window.localStorage.setItem("initials",value);
        // we must stringify objects before we store them in the local storage
        localStorage.setItem("initials", JSON.stringify(value));
        //Testing input capture
        console.log(value);
        // retrieve value from local storage

    }) //regular bracket stays here! it's not stray!!
    
        // add click event to 'Play Again' button
        let playAgainButton = document.getElementById("playAgainButtonID");
        
        playAgainButton.addEventListener("click", function(event) {
           location.reload();
    }) //regular bracket stays here! it's not stray!!

    // add click event to 'View High Scores'' button
    let viewHighScoresButton = document.getElementById("viewScoresButtonID");
        
    viewHighScoresButton.addEventListener("click", function(event) {
        
    }) //regular bracket stays here! it's not stray!!

        
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
        clearScreen();
        removeCorrectText();
        removeIncorrectText();
        score(questionsAnsweredCounter, timeStart);
        }
    // Remove last timeupdate if exists
    let timerHasStarted = document.getElementById("timerID");
    if (timerHasStarted) timerHasStarted.parentNode.removeChild(timerHasStarted);
    // Create Timer
    let timerElement= document.createElement("div");
    timerElement.className= "timerClass";
    timerElement.id="timerID";
    document.body.appendChild(timerElement);
    timerElement.innerHTML = timeStart;
    // blank out the timer so it doesn't show in the high scores screen
    // the element still exists, just blanking the variable
    if (timeStart<=0) timerElement.innerHTML = "";
    timeStart--;
}

function removeCorrectText(){
    let remove = document.getElementById("correctText");
    if (remove){
    remove.parentNode.removeChild(remove);
    }
}

function removeIncorrectText(){
    let remove = document.getElementById("incorrectText");
    if (remove){
    remove.parentNode.removeChild(remove);
    }
}

function showIncorrectText(){
    let incorrectText= document.createElement("div");
    incorrectText.id="incorrectText";
    document.body.appendChild(incorrectText);
    incorrectText.innerHTML = "Wrong";
}

function showCorrectText(){
    let correctText= document.createElement("div");
    correctText.id="correctText";
    document.body.appendChild(correctText);
    correctText.innerHTML = "Correct!"
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
            // and remove the correct or incorrect text IF shown
            removeCorrectText();
            removeIncorrectText();
            if (element.matches("#correctAnswerID")) {
                questionsAnsweredCounter++;
                showCorrectText();
                if (questionsAnsweredCounter==10){
                    clearScreen();
                    alert("You answered all the questions correctly!");
                    score(questionsAnsweredCounter, timeStart);
                }
                index++;
                // Clear Screen for next round
                clearScreen();
                startQuiz();
                return;
            }
            // If selected the wrong answer
            else {
                timeStart=timeStart-10;
                showIncorrectText();
            }
        }
        )
}