import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }
    onChange = (e) =>{
        let name= e.target.name;
        let val = e.target.value;
        this.setState({
            [name]: val,
        })
    }

    onSearch=()=>{
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

export default Search;
