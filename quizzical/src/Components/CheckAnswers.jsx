import he from 'he'

const CheckAnswers = ({questions, selectedChoice, correctAnswers, restartQuiz}) => {
  
  let totalCorrect = 0;

  return (
    <div>
      {questions.map((question, questionIndex) => {
        const userChoice = selectedChoice[questionIndex];
        const correctAnswer = correctAnswers[questionIndex];

        if (userChoice === correctAnswer) {
          totalCorrect++;
        }

        return (
          <div key={question.question}>
            <h2>{he.decode(question.question)}</h2>
            <ul className="choices-list">
              {question.shuffledChoices.map((choice, index) => {
                const isCorrect = choice === correctAnswer;
                const isUserChoice = choice === userChoice;
                const isWrongChoice = isUserChoice && !isCorrect;

                return (
                  <li key={index}>
                    <button
                      style={isCorrect ? {backgroundColor: 'green'} : isWrongChoice ? {backgroundColor: 'red'} : {}}
                      className={isUserChoice ? 'user-choice' : ''}
                    >
                      {he.decode(choice)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div>Total Correct Answers: {totalCorrect}</div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default CheckAnswers;
