import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from './store';
import rootSaga from './saga';

import theme from './ui-components/theme/theme';
import './index.css';
import App from './application/App';
import reportWebVitals from './reportWebVitals';


const history = createBrowserHistory();

// initialize store
const store = configureStore({}, history);
store.runSaga(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
