import React from 'react';

function BoxColor({r,g,b}) {
    const divStyle = {
        width: '400px',
        backgroundColor:    `rgb(${r},${g},${b})`,
      };

    return (
        <div  style={divStyle}>
            Box Color
        </div>
    )
}
export default BoxColor;