import React, { useState } from 'react'

function RegisterForm(props) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        idade: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmitForm(user);
    };

  return (
    <form onSubmit={handleSubmit} className={"form"}>
        <h1>Criar usuário</h1>
        <label htmlFor="title">Nome</label>
        <input 
            type="text" 
            placeholder='Nome do usuário'
            name='title'
            id='title'
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            value={user.name}
        />
        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='Email...'
            name='email'
            id='email'
        
        />
        <label htmlFor="quantity">Idade</label>
        <input 
            value={user.idade}
            type="number" 
            onChange={(e) => setUser({ ...user, idade: e.target.value })}
            placeholder='Quantidade'
            name='quantity'
            id='quantity'
        />
        <label htmlFor="description">Senha</label>
        <input 
            value={user.confirmPassword}
            type="password" 
            onChange={(e) => setUser({...user, confirmPassword: e.target.value })}
            placeholder='Confirme sua senha...'
            name='confirmPassword'
            id='confirmPassword'
        />
        <button type='submit'>Registrar.</button>
    </form>
    );
}

export default RegisterForm