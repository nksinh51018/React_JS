import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        let { task, index } = this.props;
        return (
            <>
                <tr>
                    <td>{index + 1}</td>
                    <td>{task.name}</td>
                    <td>
                        {task.status ? <button onClick={()=>{
                            this.props.updateStatusTaskItem(task.id)
                        }}>Kích hoạt</button> : <button onClick={()=>{
                            this.props.updateStatusTaskItem(task.id)
                        }}>Ẩn</button>}
                    </td>
                    <td>
                        <button onClick={()=>{
                            this.props.updateTaskItem(task.id);   
                        }}>Sửa</button>
                        <button onClick={()=>{
                            this.props.deleteTaskItem(task.id);   
                        }}>Xóa</button>
                    </td>
                </tr>

            </>
        );
    }
}

export default TaskItem;
