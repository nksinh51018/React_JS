import React, { Component } from 'react';
import './App.css';
import TaskForm from './combonents/TaskForm'
import Control from './combonents/Control'
import Table from './combonents/Table'
import {findIndex} from 'lodash'
import Demo from './trainning/Demo'

// let list = [
//   'Kích hoạt',
//   'Ẩn'
// ]
class App extends Component {

  constructor(props) {
    super(props);
    this.txt = React.createRef();
    this.state = {
      txt: 0,
      active: false,
      tasks: [],
      taskEditing: {
        id: ''
      },
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: 0,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      //let a = localStorage.getItem('tasks');
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
    else {
      this.onGenerateData();
    }
  }

  updateStatusTaskItem = (id) => {
    let tasks = this.state.tasks;
    let index = this.findTask(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      })
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  deleteTaskItem = (id) => {
    let tasks = this.state.tasks;
    let index = this.findTask(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
        active: false
      })
    }


    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  updateTaskItem = (id) => {
    let tasks = this.state.tasks;
    let index = this.findTask(id);
    if (index !== -1) {
      this.setState({
        taskEditing: tasks[index],
        active: true,
        txt: 1
      })
    }
  }

  findTask = (id) => {
    let tasks = this.state.tasks;
    let kq = -1;
    tasks.forEach((ele, index) => {
      if (ele.id === id) {
        kq = index;
      }

    })
    return kq;
  }

  onExit = () => {
    this.setState({
      active: !this.state.active,
      taskEditing: {
        id: '',
        name: '',
        status: true
      },
      txt: 0
    })
  }

  onGenerateData = () => {
    let tasks = [
      {
        id: this.generateID(),
        name: 'sp1',
        status: true,
      },
      {
        id: this.generateID(),
        name: 'sp2',
        status: true,
      },
      {
        id: this.generateID(),
        name: 'sp3',
        status: false,
      },
    ]
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  random1 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID = () => {
    return this.random1() + this.random1() + this.random1() + this.random1();
  }

  onSubmit = (data) => {
    console.log(data)
    let tasks = this.state.tasks;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    }
    else {
      //let index = this.findTask(data.id);
      let index = findIndex(tasks,(task)=>{
        return task.id === data.id;
      })
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  onFilter = (filterName, filterStatus) => {
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    })
  }

  onSort = (i) => {
    this.setState({
      sort: parseInt(i),
    })
  }

  render() {

    let { tasks, filter, keyword, sort } = this.state;
    if (keyword !== '') {
      //console.log('a')
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1
      })
      // tasks = _.filter(tasks,(task)=>{
      //   return task.name.toLowerCase().indexOf(keyword) !== -1

      // })
    }
    if (filter.name !== '' || filter.name !== null) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filter.name) !== -1
      })
    }
    if (filter.status !== -1) {
      tasks = tasks.filter((task) => {
        return task.status == filter.status
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

    return (
      <>
        <h1 style={{ textAlign: "center" }}>Quản lí công việc</h1>
        <div style={{ flex: 1, marginTop: 30, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 4, padding: 10, border: '1px solid black', margin: 10, flexDirection: 'row', display: this.state.active ? 'flex' : 'none' }}>
            <TaskForm active={this.state.active}
              txt={this.state.txt}
              onExit={this.onExit}
              onSubmit={this.onSubmit}
              taskEditing={this.state.taskEditing}
            />
          </div>

          <div style={{ flex: 8, padding: 10, border: '1px solid black', margin: 10 }}>
            <Control onGenerateData={this.onGenerateData}
              onExit={this.onExit}
              onSearch={this.onSearch}
              onSort={this.onSort}
            />
            <Table tasks={tasks}
              updateStatusTaskItem={this.updateStatusTaskItem}
              deleteTaskItem={this.deleteTaskItem}
              updateTaskItem={this.updateTaskItem}
              onFilter={this.onFilter}
            />
          </div>

        </div>
      </>
    );
  }
}

export default App;
