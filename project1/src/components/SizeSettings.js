import React, { Component } from 'react';


class SizeSettings extends Component {

    change = (x) =>{
        let a = this.props.fontSize + x;
        this.props.onReceiveSize(a)
    }

    render() {



        return (
            <>

                <div style={{ flex: 50, padding: 10, border: '1px solid black', margin: 10 }}>
                    <h2>Font Size: {this.props.fontSize}</h2>
                    <button style={{ margin: 10}} onClick={() => this.change(-2)}>Giảm</button>
                    <button style={{ margin: 10 }} onClick={() => this.change(2)}>Tăng</button>
                </div>

            </>
        );
    }

}

export default SizeSettings;
