import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from './../actions/index'

class TaskItem extends Component {

    deleteTaskItem = () => {
        this.props.onDeleteTask(this.props.task.id)
        this.props.onCloseForm();
    }

    updateTaskItem = () => {
        this.props.onEditTask(this.props.task);
        this.props.onOpenForm();
    }

    render() {
        let { task, index } = this.props;
        return (
            <>
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td>
                        {task.status ? <button onClick={() => {
                            this.props.onUpdateStatus(task.id)
                        }}>Kích hoạt</button> : <button onClick={() => {
                            this.props.onUpdateStatus(task.id)
                        }}>Ẩn</button>}
                    </td>
                    <td>
                        <button onClick={() => {
                            this.updateTaskItem(task.id);
                        }}>Sửa</button>
                        <button onClick={() => {
                            this.deleteTaskItem(task.id);
                        }}>Xóa</button>
                    </td>
                </tr>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, action) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(Action.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(Action.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(Action.closeForm());
        },
        onOpenForm:()=>{
            dispatch(Action.openForm());
        },
        onEditTask:(task)=>{
            dispatch(Action.editTask(task));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
