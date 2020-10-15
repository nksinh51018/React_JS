import React from "react";
import "./App.css";
import { Route, Router, Switch } from "react-router-dom";
import history from "./history";

import { ToastContainer } from "react-toastify";
import UserContextProvider from "./contexts/UserContext";
import SignInContainer from "./containers/SignInContainer";
import PrivateRouter from "./ulti/PrivateRoutes";
import AdminContainer from "./containers/AdminContainer";
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    to?: string;
  }
}

const App = () => {
  return (
    <>
      <Router history={history}>
        <ToastContainer />
        <UserContextProvider>
          <div className="App">
            <div className="container lg">
              <Switch>
                <Route
                  path="/signIn"
                  component={() => <SignInContainer />}
                  exact={true}
                />
                <Route
                  path="/admin"
                  component={() => <PrivateRouter component={AdminContainer} />}
                  exact={false}
                />
              </Switch>
            </div>
          </div>
        </UserContextProvider>
      </Router>
    </>
  );
};

// class App extends Component {
//   render() {
//     return (
//       < >
//         <Router history={history}>
//           <ToastContainer />
//           <UserContextProvider>
//             <div className="App">
//               <div className="container lg">
//                 <TopBarContainer />
//                 <Header />
//                 {this.showContent(routes)}
//                 <Footer />
//               </div>
//             </div>
//           </UserContextProvider>
//         </Router>
//       </>
//     );
//   }
//   showContent = (routes) => {
//     let result = "";

//     if (routes.length > 0) {
//       result = routes.map((route, index) => {
//         return (<Route key={index}
//           path={route.to}
//           exact={route.exact}
//           component={route.main} />
//         )
//       })
//     }
//     return <Switch>{result}</Switch>;
//   }

// }

export default App;
