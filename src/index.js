import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

