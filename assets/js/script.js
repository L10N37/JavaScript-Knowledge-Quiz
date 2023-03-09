// Insert Intro Screen
let introScreen= document.createElement("div");
introScreen.className= "intro"
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




