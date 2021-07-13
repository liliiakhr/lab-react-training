import React, {useState} from 'react';

function LikeButton() {

    const [ count, updateCount ] = useState(0)

    const likesHandler = () => {
        updateCount(count+1)
    };



    return (
        <div>
            <button onClick = {likesHandler} > Like {count} </button>
        </div>
    )
};

export default LikeButton;
