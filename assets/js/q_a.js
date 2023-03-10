let questions= [
  {
    question:  "Inside which HTML element do we put the JavaScript?",
    answers: ["&ltscript&gt", "&ltjavascript&gt", "&ltjs&gt","&ltscripting&gt"],
    correctAnswer: "&ltscript&gt"
  },
  {
    question:  "What is the correct JavaScript syntax to change the content of the HTML element below? <br><br> <p> &ltp id=\"demo\"&gt This is a demonstration.&lt/p&gt <p>",
    answers:   ["document.getElementById(\"demo\").innerHTML = \"Hello World!\";", "document.getElementByName(\"p\").innerHTML = \"Hello World!\";", "#demo.innerHTML = \"Hello World!\";", "document.getElement(\"p\").innerHTML = \"Hello World!\";"],
    correctAnswer: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
  },
  {
    question:  "Where is the correct place to insert a JavaScript?",
    answers:   ["Both the &lthead&gt section and the &ltbody&gt section are correct","The &ltbody&gt section","The &lthead&gt section","The &ltepic&gt section"],
    correctAnswer: "Both the &lthead&gt section and the &ltbody&gt section are correct"
  },
  {
    question:  "What is the correct syntax for referring to an external script called \"xxx.js\"?\"",
    answers:   ["&ltscript src=\"xxx.js\"&gt\"","&ltscript href=\"xxx.js\"&gt", "&ltscript name=\"xxx.js\"&gt", "&ltscript ref=\"xxx.js\"&gt"],
    correctAnswer: ["&ltscript src=\"xxx.js\"&gt\""]
  },
  {
    question:  "The external JavaScript file must contain the &ltscript&gt tag.",
    answers:    ["False","True","Sometimes","Only when required"],
    correctAnswer: "False"
  },
  {
    question:  "How do you write \"Hello World\" in an alert box?\"",
    answers:    ["alert(\"Hello World\");","msgBox(\"Hello World\");","alertBox(\"Hello World\");","msg(\"Hello World\");"],
    correctAnswer: "alert(\"Hello World\");"
  },
  {
    question:  "How do you create a function in JavaScript?",
    answers:    ["function myFunction()","function:myFunction()","function.myFunction()","function = myFunction()"],
    correctAnswer: "function myFunction()"
  },
  {
    question:  "How do you call a function named \"myFunction\"?",
    answers:    ["myFunction()", "call function myFunction()", "call myFunction", "function.call.myFunction()"],
    correctAnswer: "myFunction()"
  },
  {
    question:  "How to write an IF statement in JavaScript?",
    answers:    ["if (i == 5)", "if i == 5 then", "if i = 5 then", "if i = 5"],
    correctAnswer: "if (i == 5)"
  },
  {
    question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?\"",
    answers:  ["if (i != 5)","if i =! 5 then","if i &lt&gt 5","if (i &lt&gt 5)"],
    correctAnswer: "if (i != 5)"
  } ]

  let questionsMultiPlay= [
    {
      question:  "Inside which HTML element do we put the JavaScript?",
      answers: ["&ltscript&gt", "&ltjavascript&gt", "&ltjs&gt","&ltscripting&gt"],
      correctAnswer: "&ltscript&gt"
    },
    {
      question:  "What is the correct JavaScript syntax to change the content of the HTML element below? <br><br> <p> &ltp id=\"demo\"&gt This is a demonstration.&lt/p&gt <p>",
      answers:   ["document.getElementById(\"demo\").innerHTML = \"Hello World!\";", "document.getElementByName(\"p\").innerHTML = \"Hello World!\";", "#demo.innerHTML = \"Hello World!\";", "document.getElement(\"p\").innerHTML = \"Hello World!\";"],
      correctAnswer: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";"
    },
    {
      question:  "Where is the correct place to insert a JavaScript?",
      answers:   ["Both the &lthead&gt section and the &ltbody&gt section are correct","The &ltbody&gt section","The &lthead&gt section","The &ltepic&gt section"],
      correctAnswer: "Both the &lthead&gt section and the &ltbody&gt section are correct"
    },
    {
      question:  "What is the correct syntax for referring to an external script called \"xxx.js\"?\"",
      answers:   ["&ltscript src=\"xxx.js\"&gt\"","&ltscript href=\"xxx.js\"&gt", "&ltscript name=\"xxx.js\"&gt", "&ltscript ref=\"xxx.js\"&gt"],
      correctAnswer: ["&ltscript src=\"xxx.js\"&gt\""]
    },
    {
      question:  "The external JavaScript file must contain the &ltscript&gt tag.",
      answers:    ["False","True","Sometimes","Only when required"],
      correctAnswer: "False"
    },
    {
      question:  "How do you write \"Hello World\" in an alert box?\"",
      answers:    ["alert(\"Hello World\");","msgBox(\"Hello World\");","alertBox(\"Hello World\");","msg(\"Hello World\");"],
      correctAnswer: "alert(\"Hello World\");"
    },
    {
      question:  "How do you create a function in JavaScript?",
      answers:    ["function myFunction()","function:myFunction()","function.myFunction()","function = myFunction()"],
      correctAnswer: "function myFunction()"
    },
    {
      question:  "How do you call a function named \"myFunction\"?",
      answers:    ["myFunction()", "call function myFunction()", "call myFunction", "function.call.myFunction()"],
      correctAnswer: "myFunction()"
    },
    {
      question:  "How to write an IF statement in JavaScript?",
      answers:    ["if (i == 5)", "if i == 5 then", "if i = 5 then", "if i = 5"],
      correctAnswer: "if (i == 5)"
    },
    {
      question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?\"",
      answers:  ["if (i != 5)","if i =! 5 then","if i &lt&gt 5","if (i &lt&gt 5)"],
      correctAnswer: "if (i != 5)"
    } ]