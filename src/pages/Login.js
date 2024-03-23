import React, { useState } from 'react'
import axios from 'axios';
import "../css/Signup.css"
import { useAppContext } from '../contexts/Context';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [user, setuser] = useState(null);
    // const [password, setPassword] = useState('');
    const { toggleBooleanState, setUser, setIsLogin } = useAppContext();
    const navigate = useNavigate();







    // const UserExists = () => {
    //     setuser(localStorage.getItem('LogedInUser'));
    //     setIsLogin(true);
    //     navigate('/home')
    // }

    // console.log(user);
    // UserExists();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            // alert("logIn successful");
            console.log('Login successful!', response.data.user.username);
            setUser(response.data.user)
            setIsLogin(true);
            localStorage.setItem('LogedInUser', `${response.data.user.username}`);
            navigate('/home')
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
            alert('Login failed:', error.response.data.error);
        }
    };

    return (
        <>
            <div className="signUpCont">
                <div className="form-cont">
                    <h1 className='form-head'>Login Page</h1>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='submit-btn' onClick={handleLogin}>Login</button>
                    {/* <a href="" onClick={toggleBooleanState}>Sign up?</a> */}
                    <p style={{ cursor: 'pointer' }} onClick={toggleBooleanState}>Don't have an account? Sign up?</p>
                    { }
                </div>

            </div>
        </>
    )
}

export default Login