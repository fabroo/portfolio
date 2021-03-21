import React, { Component } from 'react'
import { motion, AnimatePresence } from "framer-motion";

export default class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            show: false
        }
    }
    render() {
        const increase = (e) => {
            e.preventDefault();
            this.setState({ count: this.state.count + 1 })
        }
        return (
            <div className="container align">
                <AnimatePresence>
                    {this.state.show && <motion.div
                        className="main-container align"
                        // initial={{ scale: 0 }}
                        // exit={{ scale: 0, opacity: 0 }}
                        // animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 70,
                            damping: 10
                        }}
                        exit={{ transform: 'translateX(100vw)' }}
                        animate={{ transform: 'translateX(0vw)' }}
                        initial={{ transform: 'translateX(100vw)' }}                    
                    >

                        <p className="main-txt">hola!</p>
                        <button onClick={(e) => increase(e)}>apretame</button>
                        {this.state.count > 0 ? <p>vas {this.state.count}</p> : null}
                        <p onClick={() => alert(`LOL ${this.state.count} toques`)}><b>apretame</b></p>
                    </motion.div>}
                </AnimatePresence>

                {!this.state.show && <button onClick={(e) => {
                    e.preventDefault();
                    this.setState({ show: !this.state.show })
                }}>Hola</button>}

            </div>
        )
    }
}
