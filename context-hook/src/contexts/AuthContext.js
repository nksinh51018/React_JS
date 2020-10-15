import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthetication: false,
    }

    toggleAuth = () => {
        this.setState({
            isAuthetication: !this.state.isAuthetication
        })
    }
    render() {
        return ( 
            <AuthContext.Provider value={{...this.state,toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
         );
    }
}

export default AuthContextProvider;