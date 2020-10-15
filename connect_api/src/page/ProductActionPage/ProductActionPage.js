import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../action';
import { connect } from 'react-redux';
class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            txtName: "",
            txtPrice: 0,
            chkStatus: true,
            txtDescription: '',
            txtCode: '',
        }
    }

    componentDidMount() {
        let { match } = this.props;
        if (match) {
            let id = match.params.id;
            this.props.onEditProduct(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            let itemEditing = nextProps.itemEditing;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.productName,
                txtPrice: itemEditing.price,
                chkStatus: itemEditing.productStatus,
                txtDescription: itemEditing.productDescription,
                txtCode: itemEditing.productCode,
            })
        }
    }

    onChangeForm = (e) => {
        let target = e.target;
        let name = target.name;
        let val = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: val
        })
    }

    onSubmit = (e) => {
        let { id, txtName, txtPrice, chkStatus, txtDescription, txtCode } = this.state;
        let { history } = this.props;
        if (txtName !== "" && txtPrice !== "" && txtDescription !== "") {
            let product = {
                "id": id,
                "productCode": txtCode,
                "productName": txtName,
                "productDescription": txtDescription,
                "price": txtPrice,
                "productStatus": chkStatus
            }
            if (id === "") {
                this.props.onAddProduct(product)
            }
            else {
                this.props.onUpdateProduct(product)

            }
            history.goBack();
        }
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="form-group">
                    <label>Code: </label><br />
                    <input type="text"
                        className="form-control"
                        placeholder="Enter the code"
                        name="txtCode"
                        value={this.state.txtCode}
                        onChange={this.onChangeForm}
                        required></input>

                </div>
                <div className="form-group">
                    <label>Name: </label><br />
                    <input type="text"
                        className="form-control"
                        placeholder="Enter the name"
                        name="txtName"
                        value={this.state.txtName}
                        onChange={this.onChangeForm}
                        required></input>

                </div>
                <div className="form-group">
                    <label>Description: </label><br />
                    <input type="text"
                        className="form-control"
                        placeholder="Enter the description"
                        name="txtDescription"
                        value={this.state.txtDescription}
                        onChange={this.onChangeForm}
                        required></input>

                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input type="number"
                        className="form-control"
                        placeholder="Enter the price"
                        name="txtPrice"
                        value={this.state.txtPrice}
                        onChange={this.onChangeForm}
                        min={1}
                    ></input>

                </div>
                <label>Status: </label><br />
                <div className="form-check">
                    <input type="checkbox"
                        className="form-check-input"
                        name="chkStatus"
                        value={this.state.chkStatus}
                        checked={this.state.chkStatus}
                        onChange={this.onChangeForm}></input>
                    <label className="form-check-label" >Stocking</label>
                </div>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.onSubmit}>Save</button>
                <NavLink to="/products"
                    className="btn btn-info ml-10">Go back</NavLink>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)