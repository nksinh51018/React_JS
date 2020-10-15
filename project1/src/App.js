import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset'
import Result from './components/Result'
import ColorPicker from './components/ColorPicker'
import SizeSettings from './components/SizeSettings'

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      fontSize: 12,
      color: 'red'
    }
  }

  onSetColor = (color) => {
    this.setState(
      pre => {
        return {
          color: color
        }
      }
    )
  }

  onSetSize = (size) => {
    if (size >= 8 && size <= 36) {
      this.setState(
        pre => {
          return {
            fontSize: size
          }
        }
      )
    }

  }

  onReset = () =>{
    this.setState(
      pre => {
        return {
          fontSize: 12,
          color: 'red'
        }
      }
    )
  }

  render() {



    return (
      <>
        <div style={{ flex: 1, flexDirection: 'row', width: '100%', display: 'flex' }}>

          <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
          <SizeSettings fontSize={this.state.fontSize} onReceiveSize={this.onSetSize} />
        </div>
        <Reset onReset = {this.onReset}></Reset>
        <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
      </>

    );
  }

}

export default App;
