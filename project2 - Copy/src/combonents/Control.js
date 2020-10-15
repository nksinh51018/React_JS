import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'

class Control extends Component {



    render() {

        return (
            <>
                <button onClick={this.props.onExit}>Thêm công việc</button><br />
                <Search onSearch={this.props.onSearch} />
                <Sort onSort ={this.props.onSort}/>
            </>
        );
    }
}

export default Control;
