let timeStart= 70;
let index= 0;
let highscores= [];
let timesPlayed=1;
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

    // add click event to 'I'm Ready' button
    let playButton = document.getElementById("imReady");
    playButton.addEventListener("click", function(event) {
        removeIntro();
        setInterval(timerDisplay, 1000);
        timerDisplay();
        startQuiz(); })

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
       
    console.log("Correct Answers: " + correctAnswerPoints + " Time Left: " + timeLeftPoints)
    // remove correct / incorrect text from last attempt
  removeAnsweredText();
    // create parent wrapper (for easy removal of all elements)
        let wrapper = document.createElement("div");
            wrapper.id="wrapper";
                 document.body.appendChild(wrapper);
    // create text input box for initials entry
        let initialsEntryBox = document.createElement("input");
            initialsEntryBox.id="entryBox";
                wrapper.appendChild(initialsEntryBox);
    // create 'Submit' button
        let createButton = document.createElement("button");
            createButton.className="buttonSubmitClass";
                createButton.id= "buttonSubmitID";
                    wrapper.appendChild(createButton);
                        createButton.innerHTML="Submit";
    // create 'Play Again' button
    createButton = document.createElement("button");
        createButton.className="playAgainButtonClass";
            createButton.id= "playAgainButtonID";
                wrapper.appendChild(createButton);
                    createButton.innerHTML="Play Again";
    // create 'View High Scores' button
    createButton = document.createElement("button");
        createButton.className="viewScoresButtonClass";
            createButton.id= "viewScoresButtonID";
                wrapper.appendChild(createButton);
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
        
        
        //Testing input capture
        console.log("You just entered: " + value + " Into the high score entry");
        
        if (timesPlayed==1) {
            localStorage.setItem("initials0", JSON.stringify(value));
            }
                else if (timesPlayed==2) {
                    localStorage.setItem("initials1", JSON.stringify(value));
                        }
                            else if (timesPlayed==3) {
                                localStorage.setItem("initials2", JSON.stringify(value));
                                    }
                                        else if (timesPlayed==4) {
                                            localStorage.setItem("initials3", JSON.stringify(value));
                                                }
                                                    else if (timesPlayed==5) {
                                                        localStorage.setItem("initials4", JSON.stringify(value));
                                                        }
                                                         

        //          check score status in console log               //                                                 
        let checkCurrentScoreStatus = localStorage.getItem("initials0");
        console.log(checkCurrentScoreStatus);
        checkCurrentScoreStatus = localStorage.getItem("initials1");
        console.log(checkCurrentScoreStatus);
        checkCurrentScoreStatus = localStorage.getItem("initials2");
        console.log(checkCurrentScoreStatus);
        checkCurrentScoreStatus = localStorage.getItem("initials3");
        console.log(checkCurrentScoreStatus);
        checkCurrentScoreStatus = localStorage.getItem("initials4");
        console.log(checkCurrentScoreStatus);
        //                                                         //
    }) //regular bracket stays here! it's not stray!!
    
        // add click event to 'Play Again' button
        let playAgainButton = document.getElementById("playAgainButtonID");
        playAgainButton.addEventListener("click", function(event) {
                replay();
    }) //regular bracket stays here! it's not stray!!

    // add click event to 'View High Scores'' button
    let viewHighScoresButton = document.getElementById("viewScoresButtonID");
    viewHighScoresButton.addEventListener("click", function(event) {
        
    }) //regular bracket stays here! it's not stray!!     
}
 
function stopTimer(){

    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
    for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
    }     
        // times up alert and call score function
        //alert("Time's up!");
        clearScreen();
            removeAnsweredText();
                score(index, timeStart);
                                            }

function timerDisplay(){

    // Remove last timeupdate if exists
    let timerHasStarted = document.getElementById("timerID");
        if (timerHasStarted) timerHasStarted.parentNode.removeChild(timerHasStarted);
    // Create Timer
            let timerElement= document.createElement("div");
                timerElement.className= "timerClass";
                    timerElement.id="timerID";
                        document.body.appendChild(timerElement);
                            timerElement.innerHTML = timeStart;
    timeStart--;
    // Times up stuff
        if (timeStart<=0) {
            stopTimer();
            let timerElement = document.getElementById("timerID");
            timerElement.innerHTML = "";
            window.alert("Times up!");
        }
}

function removeAnsweredText(){

    let remove = document.getElementById("correctText");
        if (remove){
            remove.parentNode.removeChild(remove);
        }

    remove = document.getElementById("incorrectText");
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

function replay(){
    timesPlayed++;
    // remove high score elements
    let highScoreElements = document.getElementById("wrapper");
    highScoreElements.parentNode.removeChild(highScoreElements);
    // reset gameplay variables and call gameplay functions
    timeStart = 70;
    index=0;
    setInterval(timerDisplay, 1000);
    timerDisplay();
    startQuiz();
}
function startQuiz(){
        // for high score (max 5 entries, then rewrites itself from the start of high scores)
        if (timesPlayed==6) timesPlayed=1;
    // Create/ Display questions until answered
    let questionVar= document.createElement("div");
        questionVar.className= "questionsClass";
            questionVar.id="questionsID";
                document.body.appendChild(questionVar);
    // display question array of objects question # as per index value
                    questionVar.innerHTML = questions[index].question;

// variable to store answers in temporarily as we slice them out of the answers arrays
let tempAnswerStorage = {};

    // pluck answers from object array, as per current question index value
    // and display in random order each quiz through
    let randomAnswer1to4 =[];
        let AnswersJumbled =[];
            for (let i= 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * questions[index].answers.length);
                randomAnswer1to4[i] = questions[index].answers[randomIndex];
                //store the random answer here temporarily before we slice it out
                tempAnswerStorage[i] = questions[index].answers[randomIndex];
        // slice the answer out of the array, slice method sets new array length 
        // so we can't generate the same answer multiple times
            let tempAnswerStored = questions[index].answers.randomIndex;
            questions[index].answers.splice(randomIndex, 1);
                AnswersJumbled[i] =  randomAnswer1to4[i];
    }
    //  restore the answers for next play through/s back into the array it was sliced from
    for (let i = 0; i < 4; i++) {
        questions[index].answers[i]= tempAnswerStorage[i];
    }
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

          removeAnsweredText();
            ///////// Correct Answer flow ////////////
            if (element.matches("#correctAnswerID"))                {
                    index++;
                        showCorrectText();
                            // if Answered final question correctly
                            if (index==10){
                                 alert("You answered all the questions correctly!");
                                    stopTimer();
                                    let timerElement = document.getElementById("timerID");
                                    timerElement.innerHTML = "";
                                    }
                                            // Clear Screen for next round (not up to final question)
                                                if (index!=10){
                                                    clearScreen();
                                                        startQuiz();
                                                            return;
                                                            }
                                                                    }
            // else wrong answer flow
            else    {
                    timeStart=timeStart-10;
                    showIncorrectText();
                    }
                }
             )
}
