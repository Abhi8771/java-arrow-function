
    const formatStringWithIndices = (str) => {
        return str
            .toUpperCase()
            .split('')
            .map((char, index) => index + char)
            .join('');
    };

    const formatString = () => {
        const userInput = document.getElementById('userInput').value;
        const result = formatStringWithIndices(userInput);
        document.getElementById('output').textContent = result;
    };
