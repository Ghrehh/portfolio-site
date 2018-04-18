import React from 'react';
import ReactDOM from 'react-dom';

import 'reset-css';
import './index.css';
import Routes from './Routes';
import serviceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker();
