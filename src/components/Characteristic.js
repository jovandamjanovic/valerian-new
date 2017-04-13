import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import '../style/Characteristic.css'

class Characteristic extends Component {
    render () {
        const charBonus = (this.props.value-(this.props.value%10))/10;
        const charOnes = this.props.value%10;
        return (
            <div className="charContainer">
                <div className="charTop">{this.props.name}</div>
                <div className="charBot">
                    {this.props.unnat ? <div className="unnatural">{this.props.unnat}</div> : null }
                    <div className="charLeft">
                        {charBonus}
                    </div>
                    <div className="charRight">{charOnes}</div>
                </div>
            </div>
        )
    }
}

Characteristic.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    unnat: PropTypes.number
}

export default Characteristic