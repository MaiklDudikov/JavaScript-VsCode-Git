// Задание №1
function min(a, b) {
    return (a < b) ? a : b;
}

console.log(min(5, 10)); // 5
console.log(min(15, 10)); // 10

// Задание №2
function power(base, exponent) {
    return Math.pow(base, exponent);
}

console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25

// Задание №3
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}

console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2

// Задание №4
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Задание №5
function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

for (let i = 2; i <= 9; i++) {
    multiplicationTable(i);
    console.log('---------');
}

// Задание №6
function mod(a, b) {
    return a - Math.floor(a / b) * b;
}

console.log(mod(10, 3)); // 1
console.log(mod(15, 4)); // 3

// Задание №7
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Задание №8
function max(...numbers) {
    return Math.max(...numbers);
}

console.log(max(1, 2, 3)); // 3
console.log(max(1, 2, 3, 4, 5)); // 5

// Задание №9
function printNumbersInRange(start, end, isEven) {
    for (let i = start; i <= end; i++) {
        if (isEven && i % 2 === 0) {
            console.log(i);
        } else if (!isEven && i % 2 !== 0) {
            console.log(i);
        }
    }
}

printNumbersInRange(1, 10, true); // 2 4 6 8 10
printNumbersInRange(1, 10, false); // 1 3 5 7 9

// Задание №10
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getNextDay(day, month, year) {
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    day++;
    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    return `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.${year}`;
}

console.log(getNextDay(28, 2, 2023)); // 01.03.2023
console.log(getNextDay(31, 12, 2023)); // 01.01.2024
