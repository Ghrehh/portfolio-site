import React from 'react';
import ReactDOM from 'react-dom';

import 'reset-css';
import './index.css';
import Router from './Router';
import serviceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
serviceWorker();
