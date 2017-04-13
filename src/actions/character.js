const setName = name => {
    return {
        type: 'CHARACTER_NAME',
        name: name
    }
};

const setCharacteristics = data => {
    return {
        type: 'CHARACTER_CHARACTERISTICS',
        data: data
    }
}

export { setName, setCharacteristics };