import React, { useState } from 'react';
import './Question.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Question({ question, answer, updateNextQuestion }) {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleShowAnswer(event) {
        setShowAnswer(true);
    }

    function handleAnswer() {
        setShowAnswer(false);
        updateNextQuestion();
    }

    return (
        <Card className={showAnswer ? 'flip_card active' : 'flip_card'}>
            <div className="flip_card--inner">
                <div className="flip_card--front" onClick={handleShowAnswer}>
                    <Card.Body className="d-flex flex-column justify-content-center max_height">
                        <Card.Title>{question}</Card.Title>
                    </Card.Body>
                </div>
                <div className="flip_card--back d-flex flex-column justify-content-between">
                    <Card.Header>
                        <Card.Title>{question}</Card.Title>
                    </Card.Header>
                    <Card.Body className="d-flex flex-column justify-content-center max_height">
                        <Card.Text>{answer}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="p-3">
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
                            <Button className="btn-lg btn-success mb-3 m-sm-0 btn-width" onClick={handleAnswer}>
                                Correct
                            </Button>
                            <Button className="btn-lg btn-warning mb-3 mb-sm-0 btn-width" onClick={handleAnswer}>
                                Not sure
                            </Button>
                            <Button className="btn-lg btn-danger btn-width" onClick={handleAnswer}>
                                Wrong
                            </Button>
                        </div>
                    </Card.Footer>
                </div>
            </div>
        </Card>
    );
}

export default Question;
