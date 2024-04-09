import React from 'react';
import PasswordInput from './password-input';
import UserName from './user-name';
import LoginButton from './login-button';

export default class LoginForm extends React.Component{
    render(){
        return(
            <div className='container-lg' id='page' >
                <h2>Login</h2>
                <div className='card-footer' id='loginbar' >
                    <UserName />
                    <PasswordInput /> 
                    <br></br>
                    <LoginButton/>
                </div>
            </div>
        );
    }
}