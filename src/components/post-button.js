import React from 'react';


export default function PostButton(props) {

    //function that updates the parent state and is called when the button is clicked
    const handleClick = () => {

        //call the updateParentState function that was passed to the child component as a prop
        //updateParentState is a function that updates the parent state variable
        props.updateParentState('New parent state updated from child');
      }
    
      return (
        // callback function that is called when the button is clicked
        <button onClick={handleClick}>Update Parent State</button>
      );
}
