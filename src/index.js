/* REACT and REDUX REDUC-OBSERVABLE imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

/* Root css and Root React.Component */
import './index.css';
//import 'bootstrap/dist/css/bootstrap.css';

import Store from './store/store';
import Root from './Root';

/* Initialize root React.Component provided with the store. */
ReactDOM.render(<Root store={Store} />,
  document.getElementById('root')
)

/* Some PWA crap that is not used atm. */
registerServiceWorker();
