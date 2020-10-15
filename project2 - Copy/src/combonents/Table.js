import React, { Component } from 'react';
import TastItem from './TaskItem'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1,
      dem:0
    }
  }

  onChange = (e) =>{
    let name = e.target.name;
    let val = e.target.value;
    this.setState({
      [name]: val
    })
    this.props.onFilter(name==='filterName'? val : this.state.filterName,name==='filterStatus' ? parseInt(val) : parseInt(this.state.filterStatus))
  }

  render() {

    let tasks = this.props.tasks;
    let elements = tasks.map((task, index) => {
      return <TastItem task={task}
        key={index}
        index={index}
        updateStatusTaskItem={this.props.updateStatusTaskItem}
        deleteTaskItem={this.props.deleteTaskItem}
        updateTaskItem={this.props.updateTaskItem} />
    })

    return (
      <>

        <table style={{ border: '1px solid black', width: '100%' }}>
          <thead>
            <tr>
              <td>STT</td>
              <td>Tên</td>
              <td>Trạng thái</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type='text'
                  value={this.state.filterName}
                  name='filterName'
                  onChange={this.onChange}
                />
              </td>
              <td>
                <select value={this.state.filterStatus}
                  name='filterStatus'
                  onChange={this.onChange}>
                  <option value={-1}>Tất cả</option>
                  <option value={1}>Kích hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </td>
            </tr>
            {elements}
          </tbody>
        </table>

      </>
    );
  }
}

export default Table;
