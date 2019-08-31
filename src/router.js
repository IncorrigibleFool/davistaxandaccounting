import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'

export default (
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
    </Switch>
)