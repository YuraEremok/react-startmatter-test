import React from 'react';
import ReactDOM from 'react-dom';
import store from '../src/store/configureStore';
import { Provider } from 'react-redux';
import SearchApp from "./Containers/SearchApp";
import 'bootstrap/dist/css/bootstrap.css'
import './sass/main.scss'



ReactDOM.render(<Provider store={store} ><SearchApp/></Provider>, document.getElementById('root'));


