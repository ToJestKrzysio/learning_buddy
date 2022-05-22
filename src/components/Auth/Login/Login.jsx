import React, { useState } from 'react';
import './Login.scss';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleRememberMe(event) {
        setRememberMe(event.target.checked);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(email, password, rememberMe);
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
                                label="Remember me"
                                variant="secondary"
                                checked={rememberMe}
                                onClick={handleRememberMe}
                            />
                        </Form.Group>

                        <Button variant="outline-dark" type="submit" className="">
                            Login
                        </Button>
                    </Form>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Login;
