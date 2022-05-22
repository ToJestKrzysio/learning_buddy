import React from 'react';
import './Card.scss';

function Card({ id, name, level, image, quantity }) {
    return (
        <div>
            <h1>{name}</h1>
            <h3>{level}</h3>
        </div>
    );
}

export default Card;
