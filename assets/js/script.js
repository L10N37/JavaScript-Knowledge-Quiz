//////////// Globals //////////////
timeStart = 10;
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
        return;
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
    // parent used for click event listener
    let answersVarParent= document.createElement("div");
    answersVarParent.className= "listenTarget";
    document.body.appendChild(answersVarParent);
    //1
    let answersVar0= document.createElement("div");
    answersVar0.className= "answersClass";
    answersVar0.id="answersID";
    answersVarParent.appendChild(answersVar0);
    //2
    let answersVar1= document.createElement("div");
    answersVar1.className= "answersClass";
    answersVar1.id="answersID";
    answersVarParent.appendChild(answersVar1);
    //3
    let answersVar2= document.createElement("div");
    answersVar2.className= "answersClass";
    answersVar2.id="answersID";
    answersVarParent.appendChild(answersVar2);
    //4
    let answersVar3= document.createElement("div");
    answersVar3.className= "answersClass";
    answersVar3.id="answersID";
    answersVarParent.appendChild(answersVar3);
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
        console.log(AnswersJumbled[i]);
    }
    answersVar0.innerHTML = AnswersJumbled[0];
    answersVar1.innerHTML = AnswersJumbled[1];
    answersVar2.innerHTML = AnswersJumbled[2];
    answersVar3.innerHTML = AnswersJumbled[3];

        // Add our click event listener for clickable answers
        let clickableAnswers = document.querySelector(".listenTarget");

        clickableAnswers.addEventListener("click", function(event) {
        let element = event.target;
            // Check if the clicked element was the correct answer
            if (element.matches(".answersClass")) {
                alert("fffyeah");
            }
        }
        )






    
 //  console.log(randomAnswer1to4) //test logger
       
}
