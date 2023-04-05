import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";


export default class ReviewList extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            review: [],
            text:'',
            day:'',
            month:'',
            year:'',
        };
        
    }
    reviewContent = [
        {
            text: 'This content', 
            date: '12/30/2022', 
            time: '11:35 AM'
        }
    ];
    handleCallback = (e, value) =>{
        e.preventDefault()
        var today  = new Date();
        var day = today.getDate()
        var month = today.getMonth() + 1
        var year = today.getFullYear();
        var hours = today.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        var mins = today.getMinutes();
        var date = month + '/' + day + '/' + year;
        var time = hours +':' + mins + ' ' + ampm;
        
        this.reviewContent.push({text: value, date: date, time: time})
         this.setState({review: this.reviewContent})
         let haveContent = value;
         if(haveContent)
         {console.log('content was passed from text box')}
         console.log(new Date().getFullYear)
    }
    render(){

        let i = 0;
        let reviews =[];
        if (this.reviewContent) {
            let i = 0;
            
            for(let setReview of this.reviewContent){
                reviews.push(<Review key={i} {... setReview}/>);
                i++;
                console.log(i);
            }

        }
        return(
            <div>
                <div className='card w-90'>
                    <div className='card-body'>
                        {reviews}
                    </div>
                </div>
                <br></br><br></br>
                <ReviewForm parentCallback = {this.handleCallback}/>
            </div>
        )
    }
}