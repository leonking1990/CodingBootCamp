import React from "react";
import RatingStars from "./Stars";
import LikeButton from './like-button'


export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text: props.text,
            date: props.date,
            time: props.time,

        }
    }
    render(){
        return(
            <div>
                <div className='card '>
                    <div className='card-header bg-primary text-whit'>{this.props.date} {this.props.time}</div>
                    <div className="card-body"> <div className="stars"><RatingStars/></div> {this.props.text}</div>
                    <div className="card-footer"><LikeButton/></div>
                </div>
                <br></br>
            </div>
            
        )
    }
}