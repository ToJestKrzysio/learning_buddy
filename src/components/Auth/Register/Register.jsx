import React from 'react';
import './Register.scss';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [terms, setTerms] = useState(false);

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleTerms(event) {
        setTerms(event.target.checked);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(email, password);
    }

    return (
        <Card className="card-login">
            <Card.Body>
                <Card.Title>Login</Card.Title>
                <Card.Text>
                    <Form onSubmit={handleFormSubmit} className="d-flex flex-column">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={handleEmail}
                                onBlur={handleEmail}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={handlePassword}
                                onBlur={handlePassword}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Accept terms and conditions"
                                required={true}
                                checked={terms}
                                onClick={handleTerms}
                            />
                        </Form.Group>

                        <Button type="submit" className="">
                            Register
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Register;
