const questions = () => [
    
    { 
        question: "Which is the largest ocean-dwelling creature in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Dolphin", correct: false },
            { text: "Giant Squid", correct: false }
        ],
        
        question: "Which creature is known for its ability to change color to blend in with its surroundings??",
        answer: [
            { text: "Octopus", correct: true },
            { text: "Whale Shark", correct: true },
            { text: "Sea Turtle", correct: false },
            { text: "Starfish", correct: false }
        ],

        question: "Which of these animals is known for its long migrations across the ocean?",
        answer: [
            { text: "Sea Turtle", correct: false },
            { text: "Great White Shark", correct: true },
            { text: "Jellyfish", correct: true },
            { text: "Clownfish", correct: false }
        ],
        question: "Which marine animal is the fastest swimmer in the ocean?",
        answer: [
            { text: "Orca", correct: false },
            { text: "Sailfish", correct: true },
            { text: "Dolphin", correct: false },
            { text: "Tuna", correct: false }
        ]
    }
];

const  questionElement = document.getElementById("question");
const  answerButtons = document.getElementById("answer-button");
const  nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"; 
    showQuestion(); 
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement ("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

    });
};

const resetState = () => {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

startQuiz();
 