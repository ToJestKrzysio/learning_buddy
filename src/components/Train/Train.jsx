import React, { useEffect, useState } from 'react';
import './Train.scss';
import TrainingCard from '../TrainingCard/TrainingCard.jsx';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';

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
        <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
            {cards.map(({ id, name, level, image, quantity }) => (
                <Col key={id}>
                    <TrainingCard
                        id={id}
                        name={name}
                        level={level}
                        image={image}
                        quantity={quantity}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default Train;
