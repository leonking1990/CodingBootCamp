import React from "react";



class ReviewForm extends React.Component{
    constructor(props){
      super(props)
        this.addNewReviewFun = props.parentCallback
        this.reviewText = ''
    }
    
   
    render(){
        return(
            <div>
            <form onSubmit = {e => this.addNewReviewFun(e, this.reviewText)}>
              
          <textarea onChange={e => this.reviewText = e.target.value} name ='formText' className="form-control" id="FormControlTextarea" rows="4" 
            placeholder="Leave a review"></textarea>
          <br></br>
          <input type = "submit" value = "Submit"/>
            <br></br><br></br><br></br>
          </form>
      </div>
        )
    }
}
export default ReviewForm