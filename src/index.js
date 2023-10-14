import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './components/App/App'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {store} from "./features/store";
import './i18n';
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Suspense fallback={<div>...Loading...</div>}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </Provider>
);
