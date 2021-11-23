import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style/style.scss'
import { Provider } from 'react-redux';
import store from './redux/store';
import RouteApp from './contentRoutes/RouteApp';

ReactDOM.render(
    <Provider store={store} >
    <RouteApp />
    </Provider>,
  document.getElementById('root')
);
