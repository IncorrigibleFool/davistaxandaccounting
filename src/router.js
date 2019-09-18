import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './components/Landing'
import About from './components/About'
import Contact from './components/Contact'

export default (
    <Switch>
        <Route exact path='/'>
            <Landing/>
        </Route>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/contact'>
            <Contact/>
        </Route>
    </Switch>
)