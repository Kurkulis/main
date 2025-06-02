import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';


function QuestionList({ questions, current, hendleAnswerQuestion, handleNextQuestion }) {

    const [selectedOption, setSelectedOption] = useState(null)
    const optionsIds = ['a', 'b', 'c', 'd']


    return (

        <>
            <Container>
                <p>time remaining</p>
                <h3>{questions[current].question}</h3>



                <div>
                    <p>Question of 3</p>
                    <Button>next question</Button>
                </div>
            </Container>

        </>
    )
}

export default QuestionList
