document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const keyboard = document.getElementById('keyboard');

    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '←', 'C'];

    keys.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.className = 'key';
        keyElement.textContent = key;
        keyElement.addEventListener('click', () => handleKeyPress(key));
        keyboard.appendChild(keyElement);
    });

    function handleKeyPress(key) {
        if (key === '←') {
            numberInput.value = numberInput.value.slice(0, -1);
        } else if (key === 'C') {
            numberInput.value = '';
        } else {
            numberInput.value += key;
        }
    }
});
