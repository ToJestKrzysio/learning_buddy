import React from 'react';
import './Question.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Question({ question, answer }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{question}</Card.Title>
                <Card.Text>{answer}</Card.Text>
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
                    <Button className="btn-lg btn-success mb-3 mb-sm-0 btn-width">Correct</Button>
                    <Button className="btn-lg btn-warning mb-3 mb-sm-0 btn-width">Not sure</Button>
                    <Button className="btn-lg btn-danger mb-3 mb-sm-0 btn-width">Wrong</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Question;
