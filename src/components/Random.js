import React from 'react'

function Random({min, max}) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;


    return (
        <div>
            <p>Random vaue between {min} and {max} = {randomNumber} </p>
        </div>
    )
}
export default Random;