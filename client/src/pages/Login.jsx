import React, {Component} from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <input type='text' placeholder='Username' name='username'  />
                    <input type='password' placeholder='Password' name='password'  />
                    <button>Log In</button>
                </form>
        </div>
        )
    }
}

export default Login;