document.getElementById('startButton').addEventListener('click', function() {
    let min = 0;
    let max = 100;
    let guess;

    while (true) {
        guess = Math.floor((min + max) / 2);
        let userResponse = prompt(`Ваше число > ${guess}, < ${guess} или == ${guess} ? Введите нужный знак`, '');

        if (userResponse === '>') {
            min = guess + 1;
        } else if (userResponse === '<') {
            max = guess - 1;
        } else if (userResponse === '==') {
            alert(`Ваше число ${guess}!`);
            break;
        } else {
            alert('Пожалуйста, введите корректный ответ (> , < или ==)');
        }
    }
});
