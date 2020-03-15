import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithMobx from './App';
import AppWithRedux from './AppWithRedux';
import * as serviceWorker from './serviceWorker';
import { Provider as MSTProvider } from 'mobx-react';
import { Provider as ReduxProvider } from 'react-redux';
import { storeMST } from './stores';

ReactDOM.render(
    // Mobx
    <MSTProvider store={storeMST}>
        <AppWithMobx />
    </MSTProvider>, document.getElementById('root')

    // Redux
    // <ReduxProvider store={storeRedux}>
    //     <AppWithRedux />
    // </ReduxProvider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
