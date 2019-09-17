import React, { Component } from 'react'

class Titles extends Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">What Will the Weather Be?</h1>
                <p className="title-container__subtitle" style={{fontStyle:"italic"}}>Find out the temperature, conditions and more...</p>
            </div>
        )
    }
}

export default Titles
