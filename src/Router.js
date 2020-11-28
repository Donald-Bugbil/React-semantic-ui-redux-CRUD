import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import App from './App';
import EditNote from './Components /editNotejsx';



const Router = () => {
    
    return (
        <BrowserRouter>
            <Route exact path='/' component={App}/>
            <Route path='/edit/:header' component={EditNote}/>
        </BrowserRouter>
    )
}

export default Router;