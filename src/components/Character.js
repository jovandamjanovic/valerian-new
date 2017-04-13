import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Characteristics from './Characteristics'

class Character extends Component {
    constructor (props) {
        props.init();
        super(props);
    }
    
    render () {
        return (
            <div>
                <p className="App-intro">
                    {this.props.name}                    
                </p>
                <Characteristics characteristics={this.props.characteristics}/>
            </div>
        )
    }
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    characteristics: PropTypes.array.isRequired
}

export default Character   