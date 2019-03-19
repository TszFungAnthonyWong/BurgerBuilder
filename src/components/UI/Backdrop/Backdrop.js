import React from'react';
import './Backdrop.css'
const backdrop = (props) =>(
        props.show?<div onClick={()=>props.click()} className="Backdrop"></div>:null
)

export default backdrop

