import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import config from './config/env';
axios.defaults.baseURL = config.environment.development ? config.dev.api : config.prod.api;

ReactDOM.render(<App />, document.getElementById('root'));
