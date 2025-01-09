const questions = [
    
    { 
        question: "Which is the largest ocean-dwelling creature in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Dolphin", correct: false },
            { text: "Giant Squid", correct: false }
        ]
    },

    { 
        question: "Which creature is known for its ability to change color to blend in with its surroundings?",
        answer: [
            { text: "Octopus", correct: true },
            { text: "Whale Shark", correct: false },
            { text: "Sea Turtle", correct: false },
            { text: "Starfish", correct: false }
        ]
    },
    {
        question: "Which of these animals is known for its long migrations across the ocean?",
        answer: [
            { text: "Clownfish", correct: false },
            { text: "Great White Shark", correct: false },
            { text: "Jellyfish", correct: false },
            { text: " Sea Turtle", correct: true }
        ]
    }, 
    {
        question: "Which marine animal is the fastest swimmer in the ocean?",
        answer: [
            { text: "Orca", correct: false },
            { text: "Sailfish", correct: true },
            { text: "Dolphin", correct: false },
            { text: "Tuna", correct: false }
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 


const showQuestion = () => {
    resetState();
    const currentQuestion = questions[currentQuestionIndex]; 
    const questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question; 

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement ("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
       
        button.addEventListener("click", selectAnswer);
        
    });
}

const resetState = () => {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

const selectAnswer = (e) => {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect"); 
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    }); 
    nextButton.style.display = "block";
}

const showScore = () => {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = 'Failed? No worries - Play Again!';
    nextButton.style.display = "block";
    nextButton.style.width = "fit-content"
}


const handleNextButton = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore ();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton(); 
    }else{
        startQuiz(); 
    }
})

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; 
    showQuestion(); 
}

startQuiz ();