import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShoppingDashboardPage from '../components/productPage/ShoppingDashboardPage'
import ProductOverViewPage from '../components/ProductOverViewPage'
import ProductCardPage from '../components/ProductCardPage'
import NoteFoundPage from '../components/NoteFoundPage'
import Header from '../components/global/Header'
import Modal from '../components/global/Modal'
import ProductFilteringPage from '../components/productFilter/ProductFilteringPage'

const AppRouter= ()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={ShoppingDashboardPage} exact={true} />
                <Route path='/overview/:id' component={ProductOverViewPage} />
                <Route path='/product-card' component={ProductCardPage} />
                <Route path="/filtering" component={ProductFilteringPage} />
                <Route component={NoteFoundPage} />
            
            </Switch>
            
            <Modal />
        </div>
    
    </BrowserRouter>
)
export default AppRouter