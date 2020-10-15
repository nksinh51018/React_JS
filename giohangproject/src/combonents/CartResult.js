import React, { Component } from 'react'

class CartResult extends Component {

    render() {

        let { cart } = this.props;

        return (
            <>
                <tr>
                    <td colSpan="3"></td>
                    <td>
                        <h4>
                            <strong>Tổng Tiền</strong>
                        </h4>
                    </td>
                    <td>
                        <h4>
                            <strong>{this.showTotalAmount(cart)}$</strong>
                        </h4>
                    </td>
                    <td colSpan="3">
                        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                                            <i className="fa fa-angle-right right"></i>
                        </button>
                    </td>
                </tr>
            </>
        )
    }

    showTotalAmount = (cart) =>{

        let result = 0;
        let n = cart.length;
        if(n >0){
            for(let i=0;i<n;i++){
                let cartItem = cart[i];
                result += cartItem.product.price * cartItem.quantity;
            }
        }
        return result;

    }

}

export default CartResult