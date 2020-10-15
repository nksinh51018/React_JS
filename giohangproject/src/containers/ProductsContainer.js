import React, { Component } from 'react'
import Products from './../combonents/Products';
import Product from './../combonents/Product';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {actAddToCart,actChangeMessage} from './../actions/index'
class ProductsContainer extends Component {

    render() {

        let { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        )
    }

    showProducts = (products) => {
        let result = null;
        var {onAddToCart,onChangeMessage} = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product product={product}
                    key={index}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage} />
            })
        }

        return result;
    }


}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            }
        )
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product,1))
        },
        onChangeMessage:(message)=>{
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)