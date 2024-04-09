import React from 'react';
import MovieList from './Movie-List';
import NavBar from './navbar';


export default class Feed extends React.Component{
    render(){
        return (
            <div className='container'>
                <NavBar/>
                <br></br><br></br><br></br>
                <h1 id='centerTitle'>John Wick: Chapter 4</h1>
                <MovieList/>
                
                <br></br>
                
            </div>
        );
    }
}