import { useEffect, useState } from "react";
import React from "react";
import "./singUp.css"
import navigate from "navigate";

const defaultValue = {
    fullName: '',
    username: '',
    password: '',
}

export default function SingUp() {
    const [inputs, setInputs] = useState(defaultValue);

     const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleButtonClick = () => {
        
        const saveInput = {
            fullName: inputs.fullName,
            username: inputs.username,
            password: inputs.password,
            role: 'localUser'
        }
        localStorage.setItem('myInputs', JSON.stringify(saveInput));
        console.log(saveInput);
        setInputs(defaultValue);
    };
    return (
        <>
            <div className='sing-container'>
                <form className='form-style'>
                    <div class="nine">
                        <h1>Welcome<span>Sign Up Page</span></h1>
                    </div>

                    <label htmlFor="fullName"  >Full Name</label><br />
                    <input
                        type="text"
                        id='fullName'
                        name="fullName"
                        value={inputs.fullName}
                        onChange={handleChange}
                    /> <br /><br /><br />

                    <label htmlFor="userName"  >User Name</label><br />
                    <input
                        type="text"
                        id='userName'
                        name="username"
                        value={inputs.username}
                        onChange={handleChange}
                    /> <br /><br /><br />

                    <label htmlFor="password" >Password</label><br />
                    <input
                        type="password"
                        id='password'
                        name="password"
                        value={inputs.password}
                        onChange={handleChange}
                    /> <br />

                    <button className='sing-up' onClick={handleButtonClick} >Sign up</button>
                    <button className='log-out' onClick={() => navigate('/')} >log out</button>
                </form>
            </div>
        </>
    )
}