import * as actions from './character';

describe('character actionRunner', () => {
    it('should create an action to change character name', () => {
        const name = "Steve";
        const expectedAction = {
            type: 'CHARACTER_NAME',
            name: name
        };
        expect(actions.setName(name)).toEqual(expectedAction);
    });
    it('should create an action to change character characteristics', () => {
        const data = [{name: 'WS', value: 45}, 
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
        const expectedAction = {
            type: 'CHARACTER_CHARACTERISTICS',
            data
        };
        expect(actions.setCharacteristics(data)).toEqual(expectedAction);
    });
});