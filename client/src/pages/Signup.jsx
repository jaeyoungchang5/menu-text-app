import React, {useState} from 'react';
import userUtil from '../utils/user.util';
import {Button, Form, Jumbotron} from 'react-bootstrap';

function Signup() {
    const [user, setUser] = useState({
        fName: '',
        lName: '',
        username: '',
        email: '',
        phoneNum: '',
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
            await userUtil.signup(user);
        } catch (err) {
            alert(err.message);
        }
        event.preventDefault();

    }

    return (
        <div>
            <Jumbotron>
                <h1>Signup Page</h1>
            </Jumbotron>
            <Form>
                <Form.Group controlId="fName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='text' value={user.fName} placeholder='First name' name='fName' onChange={handleChange} autoComplete='off' />
                </Form.Group>
                
                <Form.Group controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='text' value={user.lName} placeholder='Last name' name='lName' onChange={handleChange} autoComplete='off' />
                </Form.Group>
                
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='text' value={user.username} placeholder='Username' name='username' onChange={handleChange} autoComplete='off' />
                </Form.Group>
                
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' value={user.email} placeholder='JohnySmith@email.com' name='email' onChange={handleChange} autoComplete='off' />
                </Form.Group>
                
                <Form.Group controlId="phoneNum">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type='tel' value={user.phoneNum} placeholder='888-888-8888' name='phoneNum' onChange={handleChange} autoComplete='off' />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' value={user.password} placeholder='Password' name='password' onChange={handleChange} autoComplete='off' />
                </Form.Group>

                <Button onClick={handleSubmit} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
}

export default Signup;