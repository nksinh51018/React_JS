import React, { Component } from 'react';
import Search from './Search'
import Sort from './Sort'
import { connect } from 'react-redux'
import * as Action from './../actions/index'

class Control extends Component {

    onToggleForm = () => {

        if (this.props.itemEditting.id === '') {
            this.props.onToggleForm();
        }
        else {
            this.props.onOpenForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: true
        });
    }

    render() {

        return (
            <>
                <button onClick={this.onToggleForm}>Thêm công việc</button><br />
                <Search />
                <Sort />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEditting,
    };
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onToggleForm: () => {
            dispatch(Action.toggleForm());
        },
        onClearTask: (task) => {
            dispatch(Action.editTask(task));
        },
        onOpenForm: () => {
            dispatch(Action.openForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Control);
