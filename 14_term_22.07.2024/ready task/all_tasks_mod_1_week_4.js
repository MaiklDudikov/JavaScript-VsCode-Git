// Задание №1
function compareNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// Задание №2
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Задание №3
function combineDigits(a, b, c) {
    return parseInt(`${a}${b}${c}`);
}

// Задание №4
function calculateArea(length, width) {
    if (width === undefined) {
        return length * length;
    }
    return length * width;
}

// Задание №5
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

// Задание №6
function getPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}

// Задание №7
function formatTime(hours, minutes = 0, seconds = 0) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Задание №8
function timeToSeconds(hours, minutes = 0, seconds = 0) {
    return hours * 3600 + minutes * 60 + seconds;
}

// Задание №9
function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 3600 % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Задание №10
function dateDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const time1 = timeToSeconds(hours1, minutes1, seconds1);
    const time2 = timeToSeconds(hours2, minutes2, seconds2);
    const diffInSeconds = Math.abs(time1 - time2);
    return secondsToTime(diffInSeconds);
}
