import he from 'he';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



const Questions = ({questions, selectedChoice, setSelectedChoice, fetchNewQuestions }) => {
const navigate = useNavigate()

useEffect(() => {
  fetchNewQuestions();
}, [fetchNewQuestions]);  

return (
  <div>
    {questions.map((question, questionIndex) => {
       console.log(questions)
      return (
        <div className="firstquestion" key={question.question}>
          <h2>{he.decode(question.question)}</h2>
          <ul className="choices-list">
            {question.shuffledChoices.map((choice, index) => (
              
              <li key={index}>
                <button
                    style={selectedChoice && selectedChoice[questionIndex] === choice ? {backgroundColor: '#D6DBF5'} : {}}
                    onClick={() => {
                      // console.log('questionIndex:', questionIndex);
                      // console.log('choice:', choice);  
                      // console.log('current selectedChoice', selectedChoice)
                      const newSelectedChoice = Array.isArray(selectedChoice) ? [...selectedChoice] : [];
                      console.log('newSelectedChoice after copying:', newSelectedChoice);
                      newSelectedChoice[questionIndex] = choice;
                      setSelectedChoice(newSelectedChoice);

                      // console.log("newselectedchoice", newSelectedChoice)
                    }}
                  >
                    {he.decode(choice)}
                </button>

              </li>
            ))}
            
          </ul>
        </div>
        
      );
    })}
    <button className="checkbtn" onClick={() => navigate('/checkanswers')}>Check Answers</button>
  </div>
);
};

export default Questions;






