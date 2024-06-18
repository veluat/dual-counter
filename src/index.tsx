import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {App} from './app/App';
import {store} from './app/reducer/store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)
