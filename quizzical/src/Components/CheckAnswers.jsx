import he from 'he'

const CheckAnswers = ({questions, selectedChoice, correctAnswers}) => {




  return (
    <div>
    
      {questions.map((question, questionIndex) => {
        console.log('questions', questions)
        console.log('selectedchoice', selectedChoice)
        console.log('correctanswers', correctAnswers)
        const userChoice = selectedChoice[questionIndex];
        const correctAnswer = correctAnswers[questionIndex];

        return (
          <div key={question.question}>
            <h2>{he.decode(question.question)}</h2>
            <ul className="choices-list">
              {question.shuffledChoices.map((choice, index) => {
                const isCorrect = choice === correctAnswer;
                const isUserChoice = choice === userChoice;

                return (
                  <li key={index}>
                    <button
                      style={isCorrect ? {backgroundColor: 'green'} : {}}
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
    </div>
  );
};


export default CheckAnswers