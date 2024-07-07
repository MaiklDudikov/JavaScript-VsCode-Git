document.getElementById('gcdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number1 = parseInt(document.getElementById('number1').value);
    const number2 = parseInt(document.getElementById('number2').value);

    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    const result = gcd(number1, number2);
    document.getElementById('result').innerText = `Наибольший общий делитель: ${result}`;
});

document.getElementById('divisorsForm').addEventListener('submit3', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number3').value);
    let divisors = [];

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    document.getElementById('result3').innerText = `Делители: ${divisors.join(', ')}`;
});
