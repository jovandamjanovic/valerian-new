import fpswitch from '../lib/fpswitch';

const character = (state = {name: 'Bob', characteristics: []}, action) => {
    const cases = {
        'CHARACTER_NAME': () => Object.assign({}, state, {name: action.name}),
        'CHARACTER_CHARACTERISTICS': () => Object.assign({}, state, {characteristics: action.data})
    }
    return fpswitch(cases)(action.type)(Object.assign({}, state));
}

export default character;