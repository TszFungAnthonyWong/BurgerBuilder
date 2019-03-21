import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger/Burger'
import BurgerControls from '../../components/BurgerControl/BurgerControl'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OderSummary/OrderSummary'
import Backdrop from '../../components/UI/Backdrop/Backdrop'

const ingredientPrice ={
    Bacon : 0.7,
    Meat: 2,
    Cheese: 1.3,
    Salad : 5
}
class BurgerBuilder extends Component {

    state={ 
        ingredient:{
            Bacon : 5,
            Meat: 0,
            Cheese: 0,
            Salad : 0
        },

        totalPrice: 3,

        canPurchase: false,

        purchasing: false
    }

    purchasingHandler = () =>{
        const cur = this.state.purchasing;
        this.setState({purchasing:!cur});
    }

    updatePurchaseHandler = (ingredient) => {
        
        const sum = Object.keys(ingredient)
            .map(igKey=> {
                return ingredient[igKey]
            })
            .reduce((sum , el) =>{
               return sum + el
            }
        ,0);
        this.setState({canPurchase: sum > 0})
    }

    addingredientHandler =(ing) =>{
        const ingredient = {...this.state.ingredient};
        ingredient[ing]++;
        const totalPrice = this.state.totalPrice;
        const newTotalPrice = totalPrice + ingredientPrice[ing];
        this.setState({ingredient: ingredient, totalPrice: newTotalPrice});
        this.updatePurchaseHandler(ingredient);
    }

    reduceingredientHandler =(ing) =>{
        const ingredient = {...this.state.ingredient};
        let totalPrice = this.state.totalPrice;
        if( ingredient[ing]>0 ){
            ingredient[ing]--;
            totalPrice = totalPrice - ingredientPrice[ing];
        }

        this.setState({ingredient: ingredient, totalPrice:totalPrice});
        this.updatePurchaseHandler(ingredient);
    }
   render(){ 
       return (
           <Aux>
               <Backdrop click= {this.purchasingHandler} show = {this.state.purchasing}></Backdrop>
               <Burger ingredient={this.state.ingredient}/>
               <Modal show = {this.state.purchasing} >
                   <OrderSummary ingredient = {this.state.ingredient} totalPrice={this.state.totalPrice} cancel= {this.purchasingHandler}/>
               </Modal>
               <BurgerControls 
               canPurchase = {this.state.canPurchase}
               price ={this.state.totalPrice}
               ingredient={this.state.ingredient} 
               addBtn={this.addingredientHandler}
               reduceBtn={this.reduceingredientHandler}
               purchase = {this.purchasingHandler}
               />
           </Aux>
       )
   }
}

export default BurgerBuilder