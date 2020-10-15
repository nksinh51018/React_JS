import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from './../actions/index'

class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    onChange = (e) => {
        let val = e.target.value;
        this.setState({
            value: val,
        })
        this.props.onSort(val)
    }


    render() {

        return (
            <>
                <select value={this.state.value}
                    onChange={this.onChange}>
                    <option value={0}>Sắp xếp A -{'>'} Z</option>
                    <option value={1}>Sắp xếp Z -{'>'} A</option>
                    <option disabled>─────────────────────────</option>
                    <option value={2}>Kích hoạt</option>
                    <option value={3}>Ẩn</option>
                </select>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onSort : (sort)=>[
            dispatch(Action.sortTask(sort))
        ]
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort);
