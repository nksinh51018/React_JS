import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from './../actions/index'

class TaskFrom extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: true,
      id: ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //console.log(nextProps)

    if (nextProps.itemEditting.id === prevState.id) {
      return prevState;
    }
    let { name, id, status } = nextProps.itemEditting;
    return {
      name,
      status,
      id
    }
  }

  onChangeInput = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    //console.log(val)
    this.setState({
      [name]: val
    })
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    let task = this.state;
    //this.props.onSubmit(task)
    this.props.onSaveTask(task)
    this.onExit();
  }

  onExit = () => {
    this.setState({
      name: '',
      status: true
    })
    this.props.onCloseForm();
    this.props.onClearTask({
      id: '',
      name: '',
      status: true
  });
  }


  render() {
    let { isDisplayForm, itemEditting } = this.props
    //console.log(itemEditting)
    if (isDisplayForm === false) {
      return <></>
    }
    return (
      <>
        <div style={{ flex: 4, padding: 10, border: '1px solid black', margin: 10, flexDirection: 'row', display: 'flex' }}>

          <div style={{ flex: 95 }}>
            <form onSubmit={this.onSubmitForm}>
              <h3>{!itemEditting.id ? 'Thêm mới' : 'Sửa'}</h3>
              <label>Tên: </label><br />
              <input type='text'
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
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(Action.saveTask(task));
    },
    onCloseForm: () => {
      dispatch(Action.closeForm());
    },
    onClearTask: (task) => {
      dispatch(Action.editTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFrom);
