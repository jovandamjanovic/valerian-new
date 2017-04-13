import characterReducer from './character';

describe('character reducer', () => {
    it('should return initial state', () => {
        expect(
            characterReducer(undefined, {})
        ).toEqual({name: 'Bob', characteristics: []});
    });
    it('should handle CHARACTER_NAME', () => {
        const newName = "Steve";
        expect(
            characterReducer({name: 'Bob', characteristics: []},{type: 'CHARACTER_NAME',name: newName})
        ).toEqual({name: newName, characteristics: []});
    });
    it('should handle CHARACTER_CHARACTERISTICS', () => {
        const newChars = [{name: 'WS', value: 45}, 
                          {name: 'BS', value: 25}, 
                          {name: 'S', value: 25}, 
                          {name: 'T', value: 25}, 
                          {name: 'Agi', value: 50, unnat: 11}, 
                          {name: 'Int', value: 42}, 
                          {name: 'Per', value: 35, unnat: 9}, 
                          {name: 'WP', value: 41, unnat: 10}, 
                          {name: 'Fel', value: 70, unnat: 9}, 
                          {name: 'Inf', value: 98}, 
                          {name: 'Cor', value: 19}];
        expect(
            characterReducer({name: 'Bob', characteristics: []},{type: 'CHARACTER_CHARACTERISTICS',data: newChars})
        ).toEqual({name: 'Bob', characteristics: newChars});
    });
});
  