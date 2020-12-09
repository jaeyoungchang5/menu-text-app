import React, {useState} from 'react';

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

        event.preventDefault();

    }

    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <input type='text' value={user.username} placeholder='Username' name='username' onChange={handleChange} autoComplete='off' />
                <input type='password' value={user.password} placeholder='Password' name='password' onChange={handleChange} autoComplete='off' />
                <button onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    );
}

export default Login;