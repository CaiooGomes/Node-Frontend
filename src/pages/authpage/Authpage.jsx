import React, { useState } from 'react'
import RegisterForm from '../../components/auth/register/Register';
import axios from 'axios';
import LoginForm from '../../components/auth/login/Login';

function Authpage() {
    const [RegisterPage, setRegisterPage] = useState(true);
    const registerHook = async (data) => {
        const response = await axios.post("https://localhost:4444/auth/register",data);
        if (response.status === 200) {
            console.log("registrou", response.data.token);
        }
    }
    const loginHook = async (data) => {
        const response = await axios.post("https://localhost:4444/auth/login",data);
        if (response.status === 200) {
            console.log("logou", response.data.token);
        }
    }
    
  return (
    <div id='auth-page'>
        {RegisterPage ? (
            <>
                <RegisterForm onSubmitForm={registerHook} />
                <div className='navigate-link' onClick={() => setRegisterPage(false)}>
                    Ir para o login
                </div>
            </>
        ) : (
            <>
                <LoginForm onSubmitForm={loginHook} />
                <div className='navigate-link' onClick={() => setRegisterPage(true)}>
                    Ir para o registro
                </div>
            </>
        )
    }
    </div>
  )
}

export default Authpage