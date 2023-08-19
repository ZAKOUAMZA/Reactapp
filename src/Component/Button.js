import React from 'react';
export default function Button({content,click}){
    return(
        <button onClick={click}>{content}</button>
    );
}