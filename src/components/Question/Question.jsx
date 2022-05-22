import React, { useState } from 'react';
import './Question.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Question({ question, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleShowAnswer(event) {
        setShowAnswer(true);
    }

    return (
        <Card className={showAnswer ? 'flip_card active' : 'flip_card'}>
            <div className="flip_card--inner">
                <div className="flip_card--front" onClick={handleShowAnswer}>
                    <Card.Body className="d-flex flex-column justify-content-center max_height">
                        <Card.Title as="h2">{question}</Card.Title>
                    </Card.Body>
                </div>
                <div className="flip_card--back">
                    <Card.Body className="d-flex flex-column justify-content-between max_height">
                        <Card.Title>{question}</Card.Title>
                        <Card.Text>{answer}</Card.Text>
                        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
                            <Button className="btn-lg btn-success mb-3 mb-sm-0 btn-width">Correct</Button>
                            <Button className="btn-lg btn-warning mb-3 mb-sm-0 btn-width">Not sure</Button>
                            <Button className="btn-lg btn-danger mb-3 mb-sm-0 btn-width">Wrong</Button>
                        </div>
                    </Card.Body>
                </div>
            </div>
        </Card>
    );
}

export default Question;
