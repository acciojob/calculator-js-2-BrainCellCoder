document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');

    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.id);
        });
    });

    function handleButtonClick(id) {
        if (id === 'C') {
            display.textContent = '0';
        } else if (id === 'back') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else if (id === 'equal') {
            try {
                display.textContent = eval(display.textContent) || '0';
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0' && id !== 'op' && id !== 'cl') {
                display.textContent = id;
            } else {
                display.textContent += id;
            }
        }
    }
});
