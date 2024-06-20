import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/styles/index.scss';
import {App} from './feature';
import {store} from './redux';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
