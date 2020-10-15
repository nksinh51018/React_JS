import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from "./component/Menu"
import routes from './routes'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </Router>

    );
  }


  showContentMenu = (routes) => {
    let result = null;
    if(routes.length > 0){
      result = routes.map((route,index)=>{
        return (
          <Route path={route.path} key={index} exact={route.exact} component={route.main} />
        )
      })
    }
    return result;
  }

}

export default App;
