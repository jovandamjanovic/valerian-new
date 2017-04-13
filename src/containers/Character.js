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
            dispatch(setName("Steva"));
            dispatch(setCharacteristics([{name: 'WS',value: 25}, 
                                         {name: 'BS',value: 25}, 
                                         {name: 'S',value: 25}, 
                                         {name: 'T',value: 25}, 
                                         {name: 'Agi',value: 25,unnat: 6}, 
                                         {name: 'Per',value: 25,unnat: 6}, 
                                         {name: 'Int',value: 25}, 
                                         {name: 'WP',value: 25}, 
                                         {name: 'Fel',value: 25,unnat: 6}, 
                                         {name: 'Cor',value: 25}, 
                                         {name: 'Inf',value: 25}]));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)