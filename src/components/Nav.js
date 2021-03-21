import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            navResponsive : false
        }
    }
    render() {
        return (
            <div className="navbar">
                <div className="logoDiv align">
                    <div className="logoContainer align">
                        <p>F</p>
                    </div>
                </div>
                <div className="align links">
                    <div className="linkDiv align">
                        <Link className="link " to="/">About</Link>
                    </div>
                    <div className="linkDiv align">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="linkDiv align">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                </div>
                <div className="hamburger align">
                    <div className="xHamburger align">
                    <i class="fa fa-bars hamburgerTxt"></i>
                    </div>
                </div>
            </div>
        )
    }
}
