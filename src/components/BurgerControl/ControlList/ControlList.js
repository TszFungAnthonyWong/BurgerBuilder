import React from 'react';
import Aux from '../../../hoc/Aux'
import './ControlList.css'

const ControlList = (props) => {
    return(
    <Aux>
        <div className='BuildControl'>

            <label className='Label'>{props.ingredient}</label>
            <button className='Less' onClick={()=>props.reduceBtn(props.ingredient)}>-</button>
            <button className= 'More'onClick={()=>props.addBtn(props.ingredient)}>+</button>
        </div>
    </Aux>
    );
}

export default ControlList