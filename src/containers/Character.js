import { connect } from 'react-redux'
import component from '../components/Character'
import { setName, setCharacteristics } from '../actions/character'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.character.name,
        characteristics: state.character.characteristics
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        init: () => {
            dispatch(setName("Valerian"));
            dispatch(setCharacteristics([{name: 'WS', value: 45}, 
                                         {name: 'BS', value: 25}, 
                                         {name: 'S', value: 25}, 
                                         {name: 'T', value: 25}, 
                                         {name: 'Agi', value: 50, unnat: 11}, 
                                         {name: 'Int', value: 42}, 
                                         {name: 'Per', value: 35, unnat: 9}, 
                                         {name: 'WP', value: 41, unnat: 10}, 
                                         {name: 'Fel', value: 70, unnat: 9}, 
                                         {name: 'Inf', value: 98}, 
                                         {name: 'Cor', value: 19}]));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)