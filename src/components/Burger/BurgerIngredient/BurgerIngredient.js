import React, {Component} from 'react';
import propTypes from 'prop-types';
import './Burgeringredient.css';
class BurgerIngredient extends Component {
    render() { 
        let ingredient = null;

        switch(this.props.type){
            
            case ('BreadTop'):
            ingredient = (
                <div className={'BreadTop'}>
                    <div className={'Seeds1'}></div>
                    <div className={'Seeds2'}></div>
                </div>
            )
            break;

            
            default: ingredient = <div className={this.props.type}></div>;

        }

        return ingredient;
    }
} 
BurgerIngredient.propTypes ={
    type: propTypes.string.isRequired

}

export default BurgerIngredient