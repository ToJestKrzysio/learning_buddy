import React, { useEffect, useState } from 'react';
import './Train.scss';
import TrainingCard from '../TrainingCard/TrainingCard.jsx';

function Train() {
    const [cards, setCards] = useState([]);

    async function getSets() {
        const url = `http://localhost:8000`;
        const endpoint = 'sets';
        const response = await fetch(`${url}/${endpoint}`);
        return await response.json();
    }

    useEffect(() => {
        getSets()
            .then((data) => setCards(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            {cards.map(({ id, name, level, image, quantity }) => (
                <TrainingCard
                    key={id}
                    id={id}
                    name={name}
                    level={level}
                    image={image}
                    quantity={quantity}
                />
            ))}
        </div>
    );
}

export default Train;
