import React from 'react';
import styles from './styles'
import { withStyles, ThemeProvider } from '@material-ui/core';
import TaskBoard from '../TaskBoard';
import theme from '../../common/Theme'
import configStore from '../../redux/configStore';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from '../../components/GlobalLoadding';
import TaskModal from '../../components/TaskModal';
const store = configStore();
const App = (props) => {
  return (
    <Provider store={store}>
      <ToastContainer />
      <GlobalLoading />
      <ThemeProvider theme={theme}>
        <TaskModal />
        <TaskBoard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
