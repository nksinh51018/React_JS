import React, { Component } from 'react';


class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                'red',
                'black',
                'blue',
                'yellow'
            ]
        }
    }

    setActive= (color) =>{
        this.props.onReceiveColor(color);
    }


    render() {

        var elements = this.state.colors.map((color, index) => {

            return (
                <button key={index}
                    style={{ margin: 10, backgroundColor: color, width: 50, height: 30 }}
                    className={this.props.color === color ? 'active' : ''}
                    onClick={() =>{
                        this.setActive(color);
                    }}></button>
            )
        })

        return (
            <>

                <div style={{ flex: 50, padding: 10, border: '1px solid black', margin: 10 }}>
                    <h2>Color: {this.props.color}</h2>
                    {elements}
                </div>

            </>
        );
    }

}

export default ColorPicker;
