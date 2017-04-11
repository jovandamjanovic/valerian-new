import { connect } from 'react-redux'
import component from '../components/Character'
import { setName } from '../actions/character'

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.character.name
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        init: () => {
            dispatch(setName("Steva"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)