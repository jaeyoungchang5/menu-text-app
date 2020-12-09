import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <form>
                    <input type='text' placeholder='First Name' name='fName' />
                    <input type='text' placeholder='Last Name' name='lName' />
                    <input type='email' placeholder='Email' name='email' />                 
                    <input type='text' placeholder='Username' name='username'  />
                    <input type='password' placeholder='Password' name='password'  />
                    <button>Sign Up</button>
                </form>
        </div>
        )
    }
}

export default Signup;