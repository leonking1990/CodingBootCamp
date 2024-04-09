import React from 'react';
import Movie from './movie';
import ReviewList from './review-list';


export default class MovieList extends React.Component{
      
    constructor(props){
        super(props);
        this.state = {
            name: "",
            review: "",
            text: "",
            
           }
        
    }
    


 render(){ 
     const {name} = this.state;
     return(
         <div className='container'>
            <div id='center'> 
                <Movie/>
            </div>
            <br></br><br></br>
            <ReviewList/>
            
            
         </div>
     )
 }
}
