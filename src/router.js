import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default (
    <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/contact'>
            <Contact/>
        </Route>
    </Switch>
)