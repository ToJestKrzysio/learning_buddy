import React from 'react';
import './TrainingCard.scss';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function TrainingCard({ id, name, level, image, quantity }) {
    return (
        <Link to={`/train/${id}`}>
            <Card className="mb-4">
                <Card.Img variant="top" src={`/assets/images/${image}`} className="p-3" />
            </Card>
        </Link>
    );
}

export default TrainingCard;
