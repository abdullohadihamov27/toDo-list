import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from "react";
import "./login.css"

export default function Login() {
    const [labelStatus, setlabelStatus] = useState('success')
    const navigate = useNavigate()

    const users = [{
        name: "Abdulloh",
        username: "Abdulloh",
        password: "111",
        role: 'admin',
    },
    {
        name: "Abu",
        username: "vali",
        password: "333",
        role: 'localUser',
    }
]
    const fromData = JSON.parse(localStorage.getItem('myInputs'))
    const fromUser = users.concat(fromData)
    // console.log(fromData);

    const password = useRef('')
    const username = useRef('')

    function handleSubmitadd() {
        const currentPass = password.current.value
        const currentUsername = username.current.value
        if (!username || !password) {
            return
        }
        const user = fromUser.find(
            (user) => user.username === currentUsername && user.password === currentPass || fromData.username === currentUsername && fromData.password === currentPass
        )

        if (!user) {
            return alert("username yoki password xato")
        }
        localStorage.setItem('user', JSON.stringify(fromUser))
        localStorage.setItem('isAuthenticated', 'true')

        navigate('/ToDoList')

    }
    function handleSubmitSingUP() {
        navigate('/SingUp')
    }


    return (
        <>
            <div className='login-container'>
                <form className='form-style'>
                    <div class="nine">
                        <h1>Welcome<span>Login Page</span></h1>
                    </div>
                    <label htmlFor="userName"  className={labelStatus === 'success' ? '' : 'fail-label' } >User Name</label><br />
                    <input type="text" id='userName' value={username.current.value} ref={username} /> <br /><br /><br />

                    <label htmlFor="password"  className={labelStatus === 'success' ? '' : 'fail-label'} >Password</label><br />
                    <input type="password" id='password' ref={password} value={password.current.value} /> <br />

                    <div className='find-password'>
                        <span>forgot password?</span>
                        <button onClick={handleSubmitSingUP} className='singUp-btn'>Sign Up</button>
                    </div>
                    <button type={'button'} onClick={handleSubmitadd} className='sing-in'>Sign In</button>
                </form>
            </div>
        </>
    )
}