import React, {useState} from 'react';

function LikeButton() {

    const [ count, updateCount ] = useState(0);
    const likeColors = ['purple','blue','green','yellow','orange','red'];
    let [ likeColor, setLikeColor ] = useState(0);

    const likesHandler = () => {
        updateCount(count => count + 1);
        setLikeColor(likeColor += 1)
    };




    return (
        <div>
            <button onClick = {likesHandler} 
            style={{backgroundColor: `${likeColors[likeColor]}`, width: '100px' }}> {count} </button>
        </div>
    )
};

export default LikeButton;
