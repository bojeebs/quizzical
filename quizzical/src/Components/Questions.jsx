import he from 'he';



const Questions = ({questions, selectedChoice, setSelectedChoice }) => {


  
// const [questions, setQuestions] = useState([])
// const [selectedChoice, setSelectedChoice] = useState([]);
// const [correctAnswers, setCorrectAnswers] = useState([])


// useEffect(() => {
//   const getQuestions = async () => {
//     try {
//       const response = await axios.get('https://opentdb.com/api.php?amount=5');
//       const shuffledQuestions = response.data.results.map(question => {
//         const choices = shuffleArray([...question.incorrect_answers, question.correct_answer]);
//         return { ...question, shuffledChoices: choices };
//       });
//       setQuestions(shuffledQuestions);
//       setSelectedChoice(new Array(shuffledQuestions.length).fill(null))
//       setCorrectAnswers(shuffledQuestions.map(question => question.correct_answer))
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getQuestions();
// }, []);



// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };


// console.log(questions);




return (
  <div>
    {questions.map((question, questionIndex) => {
      return (
        <div className="firstquestion" key={question.question}>
          <h2>{he.decode(question.question)}</h2>
          <ul className="choices-list">
            {question.shuffledChoices.map((choice, index) => (
              <li key={index}>
                <button
                    style={selectedChoice && selectedChoice[questionIndex] === choice ? {backgroundColor: '#D6DBF5'} : {}}
                    onClick={() => {
                      console.log('questionIndex:', questionIndex);  // Add this line
                      console.log('choice:', choice);  // Add this line
                      const newSelectedChoice = Array.isArray(selectedChoice) ? [...selectedChoice] : [];
                      newSelectedChoice[questionIndex] = choice;
                      setSelectedChoice(newSelectedChoice);

                      console.log(newSelectedChoice)
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
    <button className="checkbtn">Check Answers</button>
  </div>
);
};

export default Questions;






