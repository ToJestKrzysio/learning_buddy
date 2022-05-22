import React, { useEffect, useState } from 'react';
import './QuestionList.scss';
import Question from '../Question/Question';
import { useParams } from 'react-router';

function QuestionList() {
    const [questions, setQuestions] = useState([]);
    const [question, setQuestion] = useState(null);
    const params = useParams();

    useEffect(() => {
        getQuestions(params.id)
            .then((data) => setQuestions(data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(updateNextQuestion, [questions]);

    function updateNextQuestion() {
        if (questions.length > 0) {
            const id = Math.round(Math.random() * (questions.length - 1));
            const selectedQuestion = questions[id];
            setQuestion(selectedQuestion);
        }
    }

    async function getQuestions(id) {
        const url = 'http://localhost:8000';
        const endpoint = 'decks';
        const response = await fetch(`${url}/${endpoint}/${id}/cards`);
        return await response.json();
    }

    if (!question) {
        return <h2>Loading...</h2>;
    }
    return <Question question={question.question} answer={question.answer} updateNextQuestion={updateNextQuestion} />;
}

export default QuestionList;
