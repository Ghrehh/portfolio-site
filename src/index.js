import React from 'react';
import ReactDOM from 'react-dom';

import 'reset-css';
import './index.module.css';
import App from './App';
import serviceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker();
