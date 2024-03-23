import React, { useState } from 'react'
import axios from 'axios';
import "../css/Signup.css"
import { useAppContext } from '../contexts/Context';


const Signup = () => {

    const { toggleBooleanState } = useAppContext();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [admin, setAdmin] = useState(false);
    // const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await axios.post(`http://localhost:5000/${admin ? 'admin-signup' : 'signup'}`, { username, password, phone, email });
            console.log('Signup successful!');
            setUsername('');
            setPassword('');
            setPhone('');
            setEmail('');
            setAdmin(false);
        } catch (error) {
            console.error('Signup failed:', error.response.data.error);
        }
    };

    // const handleAdminSignup = async () => {
    //     try {
    //         await axios.post(`http://localhost:5000/signup`, { username, password, phone, email });
    //         console.log('Signup successful!');
    //     } catch (error) {
    //         console.error('Signup failed:', error.response.data.error);
    //     }
    // };

    return (
        <>
            <div className="signUpCont">
                <div className="form-cont">
                    <h1 className='form-head'>Signup Page</h1>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label>email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Phone:</label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label>Admin:</label>
                    <input type="checkbox" onChange={(e) => setAdmin(!admin)} />
                    <button className='submit-btn' onClick={handleSignup}>Sign Up</button>
                    {/* <a onClick={toggleBooleanState} href='#'>Already signed up?</a> */}
                    <p style={{ cursor: 'pointer' }} onClick={toggleBooleanState}>Already signed up?</p>
                    {/* {admin ? "admin" : "user"} */}
                </div>

            </div>
        </>
    )
}

export default Signup