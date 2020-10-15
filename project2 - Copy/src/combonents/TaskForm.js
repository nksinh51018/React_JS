import React, { Component } from 'react';

class TaskFrom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true,
      id:''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {

    if(nextProps.taskEditing.id === prevState.id){
      return prevState;
    }
    return {
      name: nextProps.taskEditing.name,
      status: nextProps.taskEditing.status,
      id:nextProps.taskEditing.id
    }
   }

  onChangeInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    console.log(val)
    this.setState({
      [name]: val
    })
  }

  onSubmitForm= (e)=>{
    e.preventDefault();
    let task = this.state;
    if(typeof task.status === 'string'){
      task.status = task.status === 'true' ? true : false
    }
    console.log(task)
    this.props.onSubmit(task)
    this.setState({
      name: '',
      status: true,
      id:''
    })
    this.onExit();
  }

  onExit = () =>{
    this.setState({
      name: '',
      status: true
    })
    this.props.onExit();
  }


  render() {

    return (
      <>

        <div style={{ flex: 95 }}>
          <form onSubmit={this.onSubmitForm}>
            <h3>{this.props.txt === 0 ? 'Thêm mới' : 'Sửa'}</h3>
            <label>Tên: </label><br />
            <input type='Text'
              style={{ width: '100%' }}
              name='name'
              value={this.state.name}
              onChange={this.onChangeInput}
            />
            <label>Trạng thái:</label><br />
            <select style={{ width: '100%' }}
              name='status'
              value={this.state.status}
              onChange={this.onChangeInput}>
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type='submit'>Lưu lại</button>
              <button type='button'
              onClick={this.onExit}>Hủy bỏ</button>
            </div>
          </form>
        </div>
        <div style={{ flex: 5 }}>
          <button style={{ width: 10, height: 20, backgroundColor: 'red', borderWidth: 0 }}
            onClick={this.onExit}></button>
        </div>

      </>
    );
  }
}

export default TaskFrom;
