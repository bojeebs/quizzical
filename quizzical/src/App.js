import { useState, useEffect, useCallback } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Questions from "./Components/Questions";
import CheckAnswers from "./Components/CheckAnswers";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Quizzical</h1>
      <Link to="/questions">
        <button className="start" style={{ color: "white" }}>
          Start Quiz
        </button>
      </Link>
    </div>
  );
}

function Main() {
  const [questions, setQuestions] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const fetchNewQuestions = useCallback(async () => {
    try {
      const response = await axios.get("https://opentdb.com/api.php?amount=5");
      const shuffledQuestions = response.data.results.map((question) => {
        const choices = shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer,
        ]);
        return { ...question, shuffledChoices: choices };
      });
      setQuestions(shuffledQuestions);
      setSelectedChoice(new Array(shuffledQuestions.length).fill(null));
      setCorrectAnswers(
        shuffledQuestions.map((question) => question.correct_answer)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // useEffect(() => {
  //   fetchNewQuestions();
  // }, [fetchNewQuestions]);

  const navigate = useNavigate();

  const restartQuiz = () => {
    fetchNewQuestions();
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/questions"
        element={
          <Questions
            questions={questions}
            selectedChoice={selectedChoice}
            setSelectedChoice={setSelectedChoice}
            fetchNewQuestions={fetchNewQuestions}
          />
        }
      />
      <Route
        path="/checkanswers"
        element={
          <CheckAnswers
            questions={questions}
            selectedChoice={selectedChoice}
            correctAnswers={correctAnswers}
            restartQuiz={restartQuiz}
          />
        }
      />
    </Routes>
  );
}

export default Main;
