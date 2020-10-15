import * as React from 'react';
import TopBarContainer from './TopBarContainer';
import Header from '../components/Header/Header';
import { Route, Switch } from 'react-router';
import routes from '../routes'
import Footer from '../components/Footer/Footer';
const showContent = (routes: ({ to: string; exact: boolean; main: ({ history }: { history: any; }) => JSX.Element; } | { to: string; exact: boolean; main: ({ match }: { match: any; }) => JSX.Element; })[]) => {
    let result: {} | null | undefined = [];

    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route key={index}
          path={'/admin'+route.to}
          exact={route.exact}
          component={route.main} />
        )
      })
    }
    return <Switch>{result}</Switch>;
  }

export interface Props {
    
}
 
const AdminContainer: React.SFC<Props> = () => {
    return ( 
        <React.Fragment>
             <TopBarContainer />
              <Header />
              {showContent(routes)}
              <Footer />
        </React.Fragment>
     );
}
 
export default AdminContainer;