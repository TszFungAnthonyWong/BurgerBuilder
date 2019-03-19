import React from 'react';
import Aux from '../../hoc/Aux'
import Btn from '../UI/Button/MyButton';
const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredient).map(igKey =>{
        return <li key={igKey}><span>{igKey}: {props.ingredient[igKey]}</span></li>
    })

    return (
        <Aux>
            <h3><strong>Your Order:</strong></h3>
            <p>A delicious Burger with the following ingredient:</p>
            {ingredientSummary}
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}$</strong></p>
            <p>Contiune to checkout?</p>
            <Btn click= {props.cancel} type='Danger'>Cancal</Btn>
            <Btn type='Success'> Contiune</Btn>
        </Aux>
    )
}
export default OrderSummary