let timeStart= 70;
let index= 0;
let timesPlayed=1;
// Insert Intro Screen
let introScreen= document.createElement("div");
introScreen.className= "intro"
introScreen.id="temp";
document.body.appendChild(introScreen);
introScreen.innerHTML = "Try to answer the following questions about JavaScript \
programming within the time limit. There are 10 questions. \
If you can answer correctly within an average of 7 seconds a question, \
you will make it through! <highlight><br>You will be penalised 10 seconds for an incorrect answer! </highlight>"

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
            initialsEntryBox.maxLength=3;
                initialsEntryBox.id="entryBox";
                    wrapper.appendChild(initialsEntryBox);
    // create 'Submit' button
        let createButton = document.createElement("button");
            createButton.className="buttonSubmitClass";
                createButton.id= "buttonSubmitID";
                    wrapper.appendChild(createButton);
                        createButton.innerHTML="Submit Your Initials";
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
        // this variable stores the characters input into text input area, convert to uppcase if not already
        let spacing = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
        let value = initialsEntered.value.toUpperCase();
        value = "Name: "+value+spacing+"Time Left:  "+timeLeftPoints+spacing+"Correct Answers:"+"&nbsp"+correctAnswerPoints+"/10";
        
        // local storage stuff
        // `initials` is the key while the variable is the value.
        // setting up our entered initials for local storage
        window.localStorage.setItem("initials",value);
        
        
        //Testing input capture
        console.log("You just entered: " + value + " Into the high score entry");
        
        if (timesPlayed==1) {
            localStorage.setItem("initials1", JSON.stringify(value));
            }
                else if (timesPlayed==2) {
                    localStorage.setItem("initials2", JSON.stringify(value));
                        }
                            else if (timesPlayed==3) {
                                localStorage.setItem("initials3", JSON.stringify(value));
                                    }
                                        else if (timesPlayed==4) {
                                            localStorage.setItem("initials4", JSON.stringify(value));
                                                }
                                                    else if (timesPlayed==5) {
                                                        localStorage.setItem("initials5", JSON.stringify(value));
                                                        }
    })
    
        // add click event to 'Play Again' button
        let playAgainButton = document.getElementById("playAgainButtonID");
        playAgainButton.addEventListener("click", function(event) {
                replay();
    })

    // add click event to 'View High Scores'' button
    let viewHighScoresButton = document.getElementById("viewScoresButtonID");
    viewHighScoresButton.addEventListener("click", function(event) {
        //create high scores viewable front end list using stored high score values from JSON Stringify
        let alreadyClickedHighScores= document.getElementById("highScoresID");
        if (alreadyClickedHighScores){
            alreadyClickedHighScores.parentNode.removeChild(alreadyClickedHighScores);     
            }

        let highScoresList= document.createElement("div");
        highScoresList.className= "highScoresClass";
            highScoresList.id="highScoresID";
                document.body.appendChild(highScoresList);
                        highScoresList.innerHTML= highScoreList();     
    })
}

function highScoreList(scores){
    let a=localStorage.getItem("initials1")
        if (a==null) a= "";
            let b=localStorage.getItem("initials2")
                if (b==null) b= "";
                    let c=localStorage.getItem("initials3")
                        if (c==null) c= "";
                            let d=localStorage.getItem("initials4")
                                if (d==null) d= "";
                                    let e=localStorage.getItem("initials5")
                                        if (e==null) e= "";
                                            let all = a+b+c+d+e;
                                                    return(all.replace(/["''"]+/g,'<br>'));
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
                if(timeStart<0) timeStart=0;
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

function removeHighScores(){
    let highScoreElements = document.getElementById("wrapper");
        highScoreElements.parentNode.removeChild(highScoreElements);
            highScoreElements = document.getElementById("highScoresID");
                highScoreElements.parentNode.removeChild(highScoreElements);
                }

function replay(){
    timesPlayed++;
        // remove high score elements
        removeHighScores();
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
    // children * 4
    let answersVar = [];
    let answersIDVar=["answersID0","answersID1","answersID2","answersID3"]
    for (let i = 0; i < 4; i++) {
    answersVar[i]= document.createElement("div");
        answersVar[i].className= "answersClass";
            answersVar[i].id=answersIDVar[i];
                answersVarParent.appendChild(answersVar[i]);            
    }
    // Inner HTML generated randomly above, this section adjusts the ID of the div containing
    // the correct answer, to an ID used to ID the correct answer with the click event.
    for (let i = 0; i < 4; i++) {
        answersVar[i].innerHTML = AnswersJumbled[i];                                            //[x]
    }
    for (let i = 0; i < 4; i++) {
        if (AnswersJumbled[i]==questions[index].correctAnswer){
            answersVar[i].id="correctAnswerID";
        }
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
