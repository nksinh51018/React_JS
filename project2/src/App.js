import React, { Component } from 'react';
import './App.css';
import TaskForm from './combonents/TaskForm'
import Control from './combonents/Control'
import Table from './combonents/Table'
import { connect } from 'react-redux'
class App extends Component {

  render() {

    return (
      <>
        <h1 style={{ textAlign: "center" }}>Quản lí công việc</h1>
        <div style={{ flex: 1, marginTop: 30, flexDirection: 'row', display: 'flex' }}>
          <TaskForm />


          <div style={{ flex: 8, padding: 10, border: '1px solid black', margin: 10 }}>
            <Control/>
            <Table
            />
          </div>

        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm
  };
}

const mapDispatchToProps = (dispatch, action) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
