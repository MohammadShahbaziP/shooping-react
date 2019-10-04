import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './context/Context'
import AppRouter from './route/AppRouter'
import { storeProducts } from './products'
import shoppingReducer from './reducers/shoppingReducer'
import './styles/style.scss'

const jsx = (
    <ProductProvider initialState={{
        products:storeProducts,
        modalOpen:false,
        modalData:undefined,
        cart:[],
        filters:{
            text:'',
            brand:"all"
        }
    }} reducer={shoppingReducer}>
        <AppRouter />
    </ProductProvider>

)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
