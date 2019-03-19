import React from'react';
import './MyButton.css'

const btn = (props) => (
    <button 
        className = {'Button '+ props.type}
        onClick={props.click}>{props.children}</button>
)
export default btn