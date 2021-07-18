import React from 'react';

function Greetings(props) {
    let greetings = {
        de: "Hallo", 
        en: "Hi",
        es: "Hola", 
        fr: "Bonjour"
    }

    let word = () => {
        for (let key in greetings){
            if (key === props.lang){
                return greetings[key]
            }
        }
    }
    

    return (
        <div>
            <h3>{word()} {props.children}</h3> 
        </div>
    )
}
export default Greetings;