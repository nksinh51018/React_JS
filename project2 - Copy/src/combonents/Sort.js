import React, { Component } from 'react';

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
        this.props.onSort(val);
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

export default Sort;
