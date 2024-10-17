import React, {useState} from 'react'
import "../../form/Form.css"

function LoginForm(props) {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitForm(user);
    };

    return (
        <form onSubmit={handleSubmit} className={"form"}>
            <h1>Logar</h1>
            <label htmlFor="email">Email</label>
            <input 
                value={user.email}
                type="text" 
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder='Email...'
                name='email'
            />

            <label htmlFor="password">senha</label>
            <input 
                type="text"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder='senha...'
                name='password'
                id='password'
            />
            <button type='submit'>Logar</button>
        </form>
    )
}

export default LoginForm