import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();