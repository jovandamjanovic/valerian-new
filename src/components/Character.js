import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Character extends Component {
    constructor (props) {
        props.init();
        super(props);
    }
    
    render () {
        return (
            <p className="App-intro">
                {this.props.name}                    
            </p>
        )
    }
}

Character.propTypes = {
    name: PropTypes.string.isRequired
}

export default Character   