import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom'
import Landing from '../components/Landing'
import Error1 from '../components/Error'

export default class Router extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route path="*" component={Error1} />
                    </Switch>
                </BrowserRouter>
            </>
        )
    }
}