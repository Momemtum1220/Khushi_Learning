debugger;
let userScore = 0;
// here we have to keep the value 0 because it starts with the starting index which is 0
let currentQuestionIndex = 0;

let quizQuestions = [
{
   Question : "Who's the king of fruits ?",
   options : [{label:"Orange", value:"orange"},
   {label:"Mango", value:"mango"},
   {label:"Litchi",value:"litchi"},
   {label:"Apple",value:"apple"}],  
   correctAns : "mango"
},
{
    Question : "who is the national bird of india ?",
    options : [{label:"Peacock", value:"peacock"},
    {label:"Crow",value:"crow"},
    {label:"Kukoo",value:"kukoo"},
    {label:"Kiwi",value:"kiwi"}],
    correctAns : "peacock"
},
{
    Question : "who is the king of jungle ?",
    options : [{label:"Dog",value:"dog"},
    {label:"Giraffe",value:"giraffe"},
    {label:"Elephant",value:"elephant"},
    {label:"Lion",value:"lion"}],
    correctAns : "lion"
}
];
    function showQuestion(){
        const questionBox = document.getElementById("questionBox");
        const Option = document.getElementById("optionBox");
         
    questionBox.textContent = quizQuestions[currentQuestionIndex].Question;
    optionBox.innerHTML ="";

    quizQuestions[currentQuestionIndex].options.forEach((options, index) => {
    const button = document.createElement('button');
    button.textContent = options.label;
    button.onclick = () => checkAns(options);
    optionBox.appendChild(button);
    });

    }

    function checkAns(userAns){
        if (userAns.value === quizQuestions[currentQuestionIndex].correctAns) {
            userScore++;
    }
        document.getElementById("currentScore").innerHTML= "My Score: "+ userScore;
        nextQuestion();
    }


    function nextQuestion(){
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

    function endQuiz(){
        const quizBox = document.getElementById("quizBox");
        quizBox.innerHTML = `
        <h1>You Completed your Quiz</h1>
        <p> Your Score: ${userScore} out of ${quizQuestions.length}</p>
        `;

    }
    showQuestion();