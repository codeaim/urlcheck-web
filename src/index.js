import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import '../node_modules/normalize.css/normalize.css'
import './css/index.css';
import '../node_modules/font-awesome/css/font-awesome.css'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
  document.getElementById('root')
);
