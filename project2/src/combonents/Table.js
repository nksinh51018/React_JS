import React, { Component } from 'react';
import TastItem from './TaskItem'
import { connect } from 'react-redux'
import * as Action from './../actions/index'
//import * as Action from './../actions/index'

class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1,
    }
  }

  onChange = (e) => {
    let { filterName, filterStatus } = this.state;
    let target = e.target;
    let name = target.name;
    let val = name === 'filterStatus' ? parseInt(target.value) : target.value;
    this.setState({
      [name]: val
    })

    let filter = {
      name: name === 'filterName' ? val : filterName,
      status: name === 'filterStatus' ? val : filterStatus
    }
    this.props.onFilterTable(filter)
  }

  render() {

    let { tasks, filterTable, search, sort } = this.props;
    // console.log(sort)
    if (search !== '') {
      //console.log('a')
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(search) !== -1
      })
    }
    // tasks = _.filter(tasks,(task)=>{
    //   return task.name.toLowerCase().indexOf(keyword) !== -1
    if (filterTable.name !== '') {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name) !== -1
      })
    }
    if (filterTable.status !== -1) {
      tasks = tasks.filter((task) => {
        return task.status == filterTable.status
      })
    }
    if (sort === 0) {
      tasks = tasks.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        else {
          return -1;
        }
      })
      // console.log(tasks)
    } else if (sort === 1) {
      tasks = tasks.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        else {
          return 1;
        }
      })
      //console.log(tasks)
    } else if (sort === 2) {
      tasks = tasks.sort((a, b) => {
        if (a.status > b.status) {
          return -1;
        }
        else {
          return 1;
        }
      })
    } else if (sort === 3) {
      tasks = tasks.sort((a, b) => {
        if (a.status < b.status) {
          return -1;
        }
        else {
          return 1;
        }
      })
    }
    let elements = tasks.map((task, index) => {
      return <TastItem task={task}
        key={index}
        index={index} />
    })

    //console.log(this.)

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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    search: state.search,
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, action) => {
  return {
    onFilterTable: (filterTable) => {
      dispatch(Action.filterTasks(filterTable))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
