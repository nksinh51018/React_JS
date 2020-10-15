import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Product from './Product'

const products = [
    {
        id: 1,
        name: "san pham 1",
        price: 350000
    },
    {
        id: 2,
        name: "san pham 2",
        price: 350000
    },
    {
        id:3,
        name: "san pham 3",
        price: 350000
    },
]

class Products extends Component{

    render(){
        let {match} = this.props;
        let url = match.url;
        let result = products.map((product, index) =>{
            return (
                <NavLink to={`${url}/${product.id}`} key={index}>
                    {product.name}
                </NavLink>
            )
        })

        let {location} = this.props;
        console.log(location)

        return(
            <div>
                <h1>Danh sach san pham</h1>
                {result}
                <Route path={"/product/:id"} component={({match}) =>{
                    return(
                        <Product match={match} />
                    )
                }}/>
            </div>
        )
    }

}

export default Products;