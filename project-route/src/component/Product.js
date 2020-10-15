import React, { Component } from 'react'

class Product extends Component{

    render(){
        let {match} = this.props;
        let name = match.params.id;
        console.log(match)
        
        return(
            <h1>Đây là trang chi tiet san pham: {name}</h1>
        )
    }

}

export default Product;