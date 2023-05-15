import { Routes, Route, Link } from 'react-router-dom';
import Questions from './Components/Questions';
import './App.css';

function App() {
 return (
 <div className="App">
 <h1 className="title">Quizzical</h1>
 <Link to="/questions">
 <button className="start" style={{ color: 'white' }}>
 Start Quiz
 </button>
 </Link>
 </div>
 );
}

function Main() {
 return (
 <Routes>
 <Route path="/" element={<App />} />
 <Route path="/questions" element={<Questions />} />
 </Routes>
 );
}

export default Main;

