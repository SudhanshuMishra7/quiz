const quizData = [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language"
      ],
      correct: 0
    },
    {
      question: "Which language runs in a web browser?",
      answers: [
        "Java",
        "Python",
        "JavaScript",
        "C++"
      ],
      correct: 2
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 0
    }
  ];
  
  const quiz = document.getElementById('quiz');
  const resultsEl = document.getElementById('results');
  const submitBtn = document.getElementById('submit');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionData = quizData[currentQuestion];
    const answers = questionData.answers.map((answer, i) => `
      <label>
        <input type="radio" name="answer" value="${i}">
        ${answer}
      </label>
    `).join('');
  
    quiz.innerHTML = `
      <div class="question">${questionData.question}</div>
      <div class="answers">${answers}</div>
    `;
  }
  
  function showResults() {
    const totalQuestions = quizData.length;
    resultsEl.innerHTML = `You scored ${score} out of ${totalQuestions}!`;
    submitBtn.style.display = 'none';
  }
  
  submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
      alert('Please select an answer!');
      return;
    }
  
    const answerIdx = parseInt(selectedAnswer.value);
    if (answerIdx === quizData[currentQuestion].correct) {
      score++;
    }
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });
  
  // Load first question
  loadQuestion();