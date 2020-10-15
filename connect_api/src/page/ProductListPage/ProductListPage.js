import React, { Component } from 'react'
import ProductsList from './../../conponent/productList/ProductsList'
import ProductItem from './../../conponent/productItem/ProductItem'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductRequest} from '../../action/index'
class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchProductsRequest();
    }

    onDelete = (id) => {
       this.props.onDeleteProduct(id)
    }

   

    render() {
        let {products} = this.props;

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/products/add" className="btn btn-info mt-1">Add product</Link>
                <ProductsList>
                    {this.showProduct(products)}
                </ProductsList>
            </div>
        )
    }

    showProduct = products => {
        let result = <></>;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem key={index}
                        onDelete={this.onDelete}
                        product={product}
                        index={index} />
                )
            })
        }

        return result;
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch,action)=>{
    return{
        fetchProductsRequest: ()=>{
            dispatch(actFetchProductsRequest())
        },
        onDeleteProduct: (id)=>{
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)