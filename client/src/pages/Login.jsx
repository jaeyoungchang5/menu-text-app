import React, {useState} from 'react';
import userUtil from '../utils/user.util';
import {Button, Form, Jumbotron} from 'react-bootstrap';

function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    }

    async function handleSubmit(event) {
        console.log(user);
        try {
           await userUtil.login(user);
        } catch (err) {
            alert('Invalid Credientials');
        }
        event.preventDefault();
    }

    return (
        <div>
            <Jumbotron>
                <h1>Login Page</h1>
            </Jumbotron>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' value={user.username} placeholder='Username' name='username' onChange={handleChange} autoComplete='off' />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={user.password} placeholder='Password' name='password' onChange={handleChange} autoComplete='off' />
                </Form.Group>
                
                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
}

export default Login;