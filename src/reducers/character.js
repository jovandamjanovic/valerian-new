import fpswitch from '../lib/fpswitch';

const character = (state = {name: 'Bob'}, action) => {
    const cases = {
        'CHARACTER_NAME': () => Object.assign({}, state, {name: action.name})
    }
    return fpswitch(cases)(action.type)(state);
}

export default character;