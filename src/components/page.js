import React from 'react';
import LoginForm from './login-form';
import NavBar from './navbar';

export default class Page extends React.Component{
    render(){
        return <div>
            <NavBar/> <span>' '</span>
            <LoginForm/>
        </div>
        
    }
}