import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Staff from './components/Staff'
import Paths from './components/Paths'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/staff' component={Staff}></Route>
            <Route path='/paths' component={Paths}></Route>
            <Route path='/contact' component={Contact}></Route>
        </Switch>
    );
}

export default Router