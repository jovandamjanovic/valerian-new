import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Characteristic from './Characteristic'

const style = {
    padding: '15px',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'nowrap'
}

class Characteristics extends Component {
    render () {
        return (
            <div className="charTable" style={style}>
                {this.props.characteristics.map(char => 
                    <Characteristic name={char.name} value={char.value} unnat={char.unnat ? char.unnat : null}/>
                )}
            </div>
        )
    }
}

Characteristics.propTypes = {
    characteristics: PropTypes.array.isRequired
}

export default Characteristics