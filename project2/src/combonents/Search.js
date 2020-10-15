import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from './../actions/index'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({
            [name]: val,
        })
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }


    render() {

        return (
            <>

                <input type='text'
                    value={this.state.keyword}
                    onChange={this.onChange}
                    name='keyword' />
                <button onClick={this.onSearch}>Tìm</button>

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
        onSearch: keyword =>{
            dispatch(Action.searchTask(keyword))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
