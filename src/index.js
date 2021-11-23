import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './container/App';
import './style/style.scss'
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store} >
    <App />
    </Provider>,
  document.getElementById('root')
);
