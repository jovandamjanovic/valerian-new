import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Characteristic from './Characteristic'
import '../style/Characteristics.css'

class Characteristics extends Component {
    render () {
        return (
            <div className="charTable">
                {this.props.characteristics.map(char => 
                    <Characteristic key={char.name} name={char.name} value={char.value} unnat={char.unnat ? char.unnat : null}/>
                )}
            </div>
        )
    }
}

Characteristics.propTypes = {
    characteristics: PropTypes.array.isRequired
}

export default Characteristics