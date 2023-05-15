import { useState, useEffect } from 'react';
import axios from 'axios';
import he from 'he';



const Questions = () => {

const [questions, setQuestions] = useState([])
const [selectedChoice, setSelectedChoice] = useState(null);

useEffect(() => {
  const getQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5');
      setQuestions(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  getQuestions();
}, []);

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


console.log(questions);




return (
  <div>
    {questions.map((question) => {
      const choices = shuffleArray([...question.incorrect_answers, question.correct_answer]);

      return (
        <div className="firstquestion" key={question.question}>
          <h2>{he.decode(question.question)}</h2>
          <ul className="choices-list">
            {choices.map((choice, index) => (
              <li key={index}>
                <button
                className={`choice-button ${selectedChoice === choice ? 'selected' : ''}`}   
                onClick={() => setSelectedChoice(choice)} >            
                {he.decode(choice)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

}
export default Questions