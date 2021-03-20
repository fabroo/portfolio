import React, { Component } from 'react'

export default class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    render() {
        const increase = (e) =>{
            e.preventDefault();
            this.setState({count:this.state.count + 1})
        }
        return (
            <div className="container align">
                <div className="main-container align">
                    <h1>hola</h1>
                    <button onClick={(e) => increase(e)}>apretame</button>
                    {this.state.count > 0 ? `vas ${this.state.count}` : null}
                    <h2 onClick={() => alert(`LOL ${this.state.count} toques`)}>apretame</h2>
                </div>
            </div>
        )
    }
}
