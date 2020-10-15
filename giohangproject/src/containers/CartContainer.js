import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from './../combonents/Cart'
import CartItem from "./../combonents/CartItem";
import CartResult from "./../combonents/CartResult";
import * as Message from './../constants/Message'
import {actDeleteProductInCart,actChangeMessage,actUpdateProductInCart} from './../actions/index'
class CartContainer extends Component {

    render() {
        let {cart} = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        )
    }

    showCartItem = (cart) =>{
        let {onDeleteProductInCart,onChangeMessage,onUpdateProductInCart} = this.props;
        let result = <tr><td> {Message.MSG_CART_EMPTY} </td></tr>;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return  (
                    <CartItem   key={index}
                                item={item} 
                                onDeleteProductInCart={onDeleteProductInCart}
                                onChangeMessage={onChangeMessage}
                                onUpdateProductInCart={onUpdateProductInCart}>

                    </CartItem>
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) =>{
        let result = null;

        if(cart.length >0){
            result = <CartResult cart={cart} />
        }

        return result;
    }

}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
              id: PropTypes.number.isRequired  
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStatetoProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onDeleteProductInCart: (id) =>{
            dispatch(actDeleteProductInCart(id))
        },
        onChangeMessage: (message) =>{
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product,quantity)=>{
            dispatch(actUpdateProductInCart(product,quantity))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CartContainer)