import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import storeFactory from '../src/store/store';
import { Provider } from 'react-redux';
import ContentContainer from './container/ContentContainer';
import './styles/main.scss';
const store= storeFactory();

ReactDOM.render(
    <Provider store={store}>
       <ContentContainer/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
