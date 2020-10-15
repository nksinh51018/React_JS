import React, { Component } from 'react';

import ProductsContainer from './../containers/ProductsContainer'
import MessageContainer from './../containers/MessageContainer'
import CartContainer from './../containers/CartContainer'


class Container extends Component {
    render() {
        return (

            <main id="mainContainer">
                <div className="container">

                    <ProductsContainer />
                    <MessageContainer />
                    <CartContainer />

                </div>
            </main>

        )
    };
}

export default Container;
