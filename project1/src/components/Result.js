import React, { Component } from 'react';


class Result extends Component {

  render() {
   


    return (
        <div style={{border: '1px solid black',padding: 10}}>
        <p>FontSize: {this.props.fontSize}, Color: {this.props.color}</p>
        <span style={{color: this.props.color,fontSize: this.props.fontSize}}>Nội dung</span>
      </div>
    );
  }

}

export default Result;
