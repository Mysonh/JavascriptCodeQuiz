var question = document.getElementById('questions');
var option = document.getElementbyClassName('options-container');

// Available questions
var questionCounter = 0;
var questionsLeft = [];

//Questions 
function questions(){
 var ques = [
    {
        question: "Commonly used data types Do Not include:",
        options1:"strings",
        option2:"array",
        option3:"booleans",
        option4:"numbers",
        answer: 1
    },
    {
        question: "How can you add a comment in Javascript",
        option1:"//",
        option2:"!--",
        option3:"<->",
        option4:"{}",
        answer:1
    },
    {
        questions: "How would you write a function?",
        option1: "function()",
        option2: "<function>",
        option3: "function(){}",
        option4: "function{}",
        answer: 3
    },
    {
        questions: "String values must be enclosed within_ when being assigned to variables?",
        options1: "Array",
        option2: "Function",
        option3: "Parenthesis",
        option4: "Curly braces",
        answer: 1
    },
 ]
 
};

startQuiz(){
    questioncounter = 0;
};

getNewQuestion(){
 questioncounter ++;
 var questionData = Math.floor(math.random() * 3);
}


startQuiz()