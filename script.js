// Categorized questions by difficulty with 10 words each
const questions = {
    simple: [
        { question: "What is the meaning of 'छान' in English?", answers: ["Good", "Bad", "Ugly", "Weak"], correct: 0 },
        { question: "What is the meaning of 'मोठा' in English?", answers: ["Small", "Large", "Tiny", "Short"], correct: 1 },
        { question: "What is the meaning of 'उन्हाळा' in English?", answers: ["Summer", "Winter", "Spring", "Rainy"], correct: 0 },
        { question: "What is the meaning of 'शाळा' in English?", answers: ["School", "Library", "Park", "Office"], correct: 0 },
        { question: "What is the meaning of 'कुत्रा' in English?", answers: ["Dog", "Cat", "Bird", "Fish"], correct: 0 },
        { question: "What is the meaning of 'फळ' in English?", answers: ["Vegetable", "Fruit", "Leaf", "Stem"], correct: 1 },
        { question: "What is the meaning of 'घरी' in English?", answers: ["House", "Home", "Garden", "Office"], correct: 1 },
        { question: "What is the meaning of 'गाणे' in English?", answers: ["Dance", "Sing", "Jump", "Run"], correct: 1 },
        { question: "What is the meaning of 'मित्र' in English?", answers: ["Enemy", "Friend", "Stranger", "Neighbor"], correct: 1 },
        { question: "What is the meaning of 'उपहारगृह' in English?", answers: ["Restaurant", "Hotel", "Canteen", "Market"], correct: 0 }
    ],
    medium: [
        { question: "What is the meaning of 'शांतता' in English?", answers: ["Peace", "War", "Anger", "Fear"], correct: 0 },
        { question: "What is the meaning of 'विचित्र' in English?", answers: ["Common", "Strange", "Simple", "Clear"], correct: 1 },
        { question: "What is the meaning of 'चिडणे' in English?", answers: ["To be happy", "To be calm", "To be angry", "To be nervous"], correct: 2 },
        { question: "What is the meaning of 'घाबरणे' in English?", answers: ["To be scared", "To be brave", "To be careless", "To be confused"], correct: 0 },
        { question: "What is the meaning of 'संशय' in English?", answers: ["Doubt", "Trust", "Clarity", "Decision"], correct: 0 },
        { question: "What is the meaning of 'विनम्र' in English?", answers: ["Arrogant", "Rude", "Polite", "Angry"], correct: 2 },
        { question: "What is the meaning of 'कसोटी' in English?", answers: ["Test", "Prize", "Lesson", "Game"], correct: 0 },
        { question: "What is the meaning of 'प्रयत्न करणे' in English?", answers: ["To avoid", "To attempt", "To neglect", "To reject"], correct: 1 },
        { question: "What is the meaning of 'आरंभ' in English?", answers: ["End", "Start", "Pause", "Stop"], correct: 1 },
        { question: "What is the meaning of 'संदेश' in English?", answers: ["Message", "Speech", "Notice", "Announcement"], correct: 0 }
    ],
    tough: [
        { question: "What is the meaning of 'विचलित होणे' in English?", answers: ["To focus", "To distract", "To engage", "To relax"], correct: 1 },
        { question: "What is the meaning of 'महत्त्वाचा' in English?", answers: ["Unimportant", "Important", "Irrelevant", "Optional"], correct: 1 },
        { question: "What is the meaning of 'अत्यंत' in English?", answers: ["Extremely", "Mildly", "Casually", "Normally"], correct: 0 },
        { question: "What is the meaning of 'समाधान' in English?", answers: ["Confusion", "Satisfaction", "Regret", "Jealousy"], correct: 1 },
        { question: "What is the meaning of 'वाचन' in English?", answers: ["Writing", "Reading", "Drawing", "Cooking"], correct: 1 },
        { question: "What is the meaning of 'संकट' in English?", answers: ["Opportunity", "Threat", "Crisis", "Plan"], correct: 2 },
        { question: "What is the meaning of 'मुक्त' in English?", answers: ["Bound", "Free", "Captured", "Lost"], correct: 1 },
        { question: "What is the meaning of 'संघर्ष' in English?", answers: ["Peace", "Struggle", "Agreement", "Party"], correct: 1 },
        { question: "What is the meaning of 'साध्य' in English?", answers: ["Achievable", "Impossible", "Doubtful", "Optional"], correct: 0 },
        { question: "What is the meaning of 'दुर्लभ' in English?", answers: ["Common", "Rare", "Frequent", "Regular"], correct: 1 }
    ]
};

// Function to initialize the quiz
function initializeQuiz() {
    showDifficulty('simple'); // Default to simple difficulty on page load
}

// Function to show questions by difficulty
function showDifficulty(level) {
    const quizTabs = document.getElementById('quizTabs');
    const quizContainer = document.getElementById('quiz-container');

    // Clear existing tabs and questions
    quizTabs.innerHTML = '';
    quizContainer.innerHTML = '';

    // Get questions for the selected difficulty level
    const levelQuestions = questions[level];

    // Create tabs and question content dynamically
    levelQuestions.forEach((question, index) => {
        // Create sub-tab
        const tab = document.createElement('li');
        tab.className = 'nav-item';
        tab.innerHTML = `<a class="nav-link ${index === 0 ? 'active' : ''}" id="tab-${index}" href="#" onclick="showQuestion(${index}, '${level}')">Q${index + 1}</a>`;
        quizTabs.appendChild(tab);

        // Create question content
        const questionDiv = document.createElement('div');
        questionDiv.className = `question-content ${index === 0 ? '' : 'd-none'}`;
        questionDiv.id = `question-${index}`;
        questionDiv.innerHTML = `
            <h3>${question.question}</h3>
            <div class="answer-buttons">
                ${question.answers.map((answer, i) => `<button class="btn btn-primary answer" onclick="checkAnswer(${index}, ${i}, '${level}')">${answer}</button>`).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });

    // Set active main tab
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`${level}-tab`).classList.add('active');
}

// Function to show the selected question
function showQuestion(index, level) {
    // Hide all questions
    document.querySelectorAll('.question-content').forEach(el => el.classList.add('d-none'));
    // Show the selected question
    document.getElementById(`question-${index}`).classList.remove('d-none');
    // Set active sub-tab
    document.querySelectorAll('#quizTabs .nav-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`tab-${index}`).classList.add('active');
}

// Function to check the answer and move to the next question
function checkAnswer(questionIndex, answerIndex, level) {
    const isCorrect = questions[level][questionIndex].correct === answerIndex;
    if (isCorrect) {
        document.body.classList.add('blast');
        setTimeout(() => {
            document.body.classList.remove('blast');
            alert("Correct Answer!");
            nextQuestion(level);
        }, 1000);
    } else {
        alert("Wrong Answer. Try Again!");
        // Optionally, keep the current question to try again
    }
}

// Function to move to the next question
function nextQuestion(level) {
    const activeTab = document.querySelector('#quizTabs .nav-link.active');
    const nextTab = activeTab.parentElement.nextElementSibling?.querySelector('.nav-link');
    if (nextTab) {
        nextTab.click();
    } else {
        alert("Quiz Completed for this level!");
    }
}

// Initialize quiz on page load
document.addEventListener('DOMContentLoaded', initializeQuiz);
