//////////// Globals //////////////
timeStart = 70;
setInterval(timer, 1000);
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
    // create a timer element while we're here?
    
}

function timer(){
    // Create Timer
    let timerElement= document.createElement("div");
    timerElement.className= "timerClass"
    timerElement.id="timerID";
    document.body.appendChild(timerElement);
    timerElement.innerHTML = timeStart;
    timeStart--;
    // Destroy Timer
    //timerElement= document.getElementById('timerID');
    //timerElement.parentNode.removeChild(timerElement);
}

function styleQuiz(){

}

function startQuiz(){

}

