import React, {useState} from 'react';

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

        event.preventDefault();

    }

    return (
        <div>
            <h1>Signup Page</h1>
            <form>
                <input type='text' value={user.fName} placeholder='First name' name='fName' onChange={handleChange} autoComplete='off' />
                <input type='text' value={user.lName} placeholder='Last name' name='lName' onChange={handleChange} autoComplete='off' />
                <input type='text' value={user.username} placeholder='Username' name='username' onChange={handleChange} autoComplete='off' />
                <input type='email' value={user.email} placeholder='JohnySmith@email.com' name='email' onChange={handleChange} autoComplete='off' />
                <input type='tel' value={user.phoneNum} placeholder='888-888-8888' name='phoneNum' onChange={handleChange} autoComplete='off' />
                <input type='password' value={user.password} placeholder='Password' name='password' onChange={handleChange} autoComplete='off' />
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;