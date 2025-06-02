import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState, useEffect } from 'react';
import { getData } from './Utils/API';
import { Button, Container } from 'react-bootstrap';
import QuestionList from './components/QuestionList'



function App() {

  const [questions, setQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)

  useEffect(() => {
    getData('/questions').then(res => setQuestions(res))
  }, []);

  const onStartButtonClick = () => {
    setQuizStarted(true)
  }

  const handleAnswerQuestion = () => {
    console.log('answer')
  }

  const handleNextQuestion = () => {
    console.log('next')
  }

  return (
    <>
      <Container>
        <h1>Vilnius coding school</h1>
        <h3>Quiz</h3>
        <p>start test</p>
        {!quizStarted && <Button onClick={onStartButtonClick}>Start</Button>}
        {quizStarted && <QuestionList
          questions={questions}
          current={currentQuestion}
          handleAnswerQuestion={handleAnswerQuestion}
          handleNextQuestion={handleNextQuestion} />}
      </Container>

    </>
  )
}

export default App
