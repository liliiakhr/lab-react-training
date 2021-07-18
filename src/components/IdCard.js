import React from 'react';
import dateFormat from "dateformat";


function IdCard(props) {


    return (
        <div>
        <ol>
        <li>
            <img src={props.picture}/>  </li>
            <li> First name: {props.firstName}</li>
            <li> Last name: {props.lastName}</li>
            <li> Gender: {props.gender}</li>
            <li> Height: {props.height} </li>
            <li> Birth: {dateFormat(props.birth, "dddd, mmmm , yyyy")} </li>
        </ol>
            
        </div>
    )
}


export default IdCard;