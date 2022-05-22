import React from 'react';
import './QuestionList.scss';
import Question from '../Question/Question';

function QuestionList() {
    const question = 'What is Javascript';
    const answer = 'This is some strange language';

    return <Question question={question} answer={answer} />;
}

export default QuestionList;
