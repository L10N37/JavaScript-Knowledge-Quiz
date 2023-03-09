//////////// Globals //////////////
timeStart = 70;
index = 0;
//////////////////////////////////

// Insert Intro Screen
let introScreen= document.createElement("div");
introScreen.className= "intro"
introScreen.id="temp";
document.body.appendChild(introScreen);
introScreen.innerHTML = "Try to answer the following questions about JavaScript \
programming within the time limit. There are 10 questions. \
If you can answer within an average of 7 seconds a question, \
you will make it through!"
// Highlighted text in Intro Screen (separate style)
let introScreenAlt= document.createElement("div");
introScreenAlt.className= "highLight"
introScreen.appendChild(introScreenAlt);
introScreenAlt.innerHTML = "\ You will be penalised 10 seconds for an incorrect answer!";


function removeIntro(){
    // delete unecessary elements
    let deleteIntro = document.getElementById('temp');
    deleteIntro.parentNode.removeChild(deleteIntro);
    deleteIntro = document.getElementById('imReady');
    deleteIntro.parentNode.removeChild(deleteIntro);
}

function timerDisplay(){
    // Times up stuff
    if (timeStart<=0){
        alert("Time's up!");
        location.reload();
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
    // Generate Answers
    let answersVar= document.createElement("div");
    answersVar.className= "answersClass";
    answersVar.id="answersID";
    document.body.appendChild(answersVar);
    // pluck answers from object array, as per current question index value
    // and display in random order each quiz through
    let randomAnswer1to4 =[];
    for (let i= 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * questions[index].answers.length);
        randomAnswer1to4[i] = questions[index].answers[randomIndex];
        // remove the answer from array, method sets new array length, 
        // so we can't generate the same answer multiple times
        questions[index].answers.splice(randomIndex, 1);
        answersVar.innerHTML = randomAnswer1to4;
    }


 //  console.log(randomAnswer1to4) //test logger
       
}
