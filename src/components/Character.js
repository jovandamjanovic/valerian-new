import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Characteristics from './Characteristics'
import '../style/Character.css'

class Character extends Component {
    constructor (props) {
        props.init();
        super(props);
    }
    
    render () {
        return (
            <div className="container">
                <p className="charName">
                    {this.props.name}                    
                </p>
                <div className="characteristics">
                    <Characteristics characteristics={this.props.characteristics} />
                </div>
            </div>
        )
    }
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    characteristics: PropTypes.array.isRequired
}

export default Character   