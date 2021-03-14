import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

import config from './config/env';
axios.defaults.baseURL = config.environment.development ? config.dev.api : config.prod.api;

ReactDOM.render(<Router />, document.getElementById('root'));
