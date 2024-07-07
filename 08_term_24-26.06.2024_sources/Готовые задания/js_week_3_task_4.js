document.getElementById('digitsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;
    const digitsCount = number.length;

    document.getElementById('result').innerText = `Количество цифр: ${digitsCount}`;
});
