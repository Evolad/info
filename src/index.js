import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import store from './helpers/store';
import App from './App';

import './assets/css/jquery-ui.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/icons.min.css';
import './assets/css/main.css';
import './assets/css/responsive.css';
import './assets/css/color-schemes/color.css';
import './assets/css/color-schemes/color1.css';
import './assets/css/color-schemes/color2.css';
import './assets/css/color-schemes/color4.css';
import './assets/css/color-schemes/color5.css';

ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('container')
);