import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtUsername: "",
            txtPassword: "",
        }
    }

    render() {

        let { state } = this;

        let loggedUser = localStorage.getItem("user");
        let {location } = this.props;
        if(loggedUser != null){
            return (
                <Redirect to={{
                    pathname:"/product",
                    state:{
                        from: location
                    }
                }} />
            )
        }
        return (
            <>
                <input type="text"
                    name="txtUsername"
                    value={state.txtUsername}
                    onChange={this.onChangeText}
                /><br />
                <input type="password"
                    name="txtPassword"
                    value={state.txtPassword}
                    onChange={this.onChangeText}
                /><br />
                <button onClick={this.onLogin}>Login</button>
            </>
        )
    }

    onChangeText = (e)=>{
        let target =e.target;
        let name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        })
    }

    onLogin = ()=>{

        let {txtUsername,txtPassword} = this.state;

        if(txtUsername ==='admin' && txtPassword === 'admin'){
            localStorage.setItem("user",JSON.stringify({
                "txtUsername": txtUsername,
                "txtPassword": txtPassword  
            }))
        }
    }

    onCheckLogin = ()=>{
        
    }
}

export default Login;