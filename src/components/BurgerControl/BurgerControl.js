import React from'react';
import ControlList from'./ControlList/ControlList';
import './BurgerControl.css'

const BurgerControl = (props) =>{
    const ingredientControlList = Object.keys(props.ingredient).map((igKey)=>{
        return ( <ControlList
                    key={igKey} 
                    ingredient={igKey}
                    addBtn={props.addBtn}
                    reduceBtn={props.reduceBtn}
                     />)
    })

    return (
            <div className='BurgerControl'>
                <p>Current Price:<strong>{props.price.toFixed(2)}$</strong></p>
                {ingredientControlList}
                <button className='OrderButton' onClick={props.purchase} disabled={!props.canPurchase}>
                    <strong>Check Out!!!</strong>
                </button>
            </div>
        
    )
}

export default BurgerControl