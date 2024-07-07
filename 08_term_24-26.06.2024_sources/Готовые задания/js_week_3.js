document.getElementById('rangeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    document.getElementById('result').innerText = `Сумма: ${sum}`;
});
