import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id)=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you sure you want to delete this item?")){
            this.props.onDelete(id);
        }

    }

    render() {

        let { product, index } = this.props;
        let statusTitle, statusClass;
        if (product.productStatus) {
            statusTitle = 'Stocking';
            statusClass = 'badge-success';
        }
        else {
            statusTitle = 'Out of stock';
            statusClass = 'badge-warning';
        }
        return (

            <tr >
                <td>{index + 1}</td>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge ${statusClass} `}>{statusTitle}</span>
                </td>
                <td>
                    <Link to={`/products/edit/${product.id}`}
                        className="btn btn-success mr-1">Modify</Link>
                    <button type="button"
                        className="btn btn-danger" 
                        onClick={()=>this.onDelete(product.id)}>Delete</button>
                </td>
            </tr>
        )
    }

}

export default ProductItem;