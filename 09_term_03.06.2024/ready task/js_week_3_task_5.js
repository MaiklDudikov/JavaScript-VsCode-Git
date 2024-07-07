document.getElementById('numbersForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const numbers = document.getElementById('numbers').value.split(',').map(Number);

    let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;

    numbers.forEach(number => {
        if (number > 0) positive++;
        if (number < 0) negative++;
        if (number === 0) zero++;
        if (number % 2 === 0) even++;
        if (number % 2 !== 0) odd++;
    });

    document.getElementById('result').innerText = `
        Положительные: ${positive}, Отрицательные: ${negative}, Нули: ${zero},
        Четные: ${even}, Нечетные: ${odd}
    `;
});
