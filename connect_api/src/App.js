import React, { Component } from 'react';
import Menu from './conponent/menu/menu';
import routes from './routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container" style={{ marginTop: 10 }}>
            <div className="row">
            
              {this.showContent(routes) }
            </div>
          </div>

        </div>
      </Router>
    );
  }

  showContent = (routes) => {
    let result = "";

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route key={index}
          path={route.path}
          exact={route.exact}
          component={route.main} />
        )
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;
