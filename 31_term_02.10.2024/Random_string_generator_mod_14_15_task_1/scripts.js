$(document).ready(function () {
    $('#string-form').on('submit', function (e) {
        e.preventDefault();

        const length = $('#length').val();
        const includeDigits = $('#digits').is(':checked');
        const includeUppercase = $('#uppercase').is(':checked');
        const includeLowercase = $('#lowercase').is(':checked');

        const digits = '0123456789';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';

        let charset = '';
        if (includeDigits) charset += digits;
        if (includeUppercase) charset += uppercase;
        if (includeLowercase) charset += lowercase;

        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            result += charset[randomIndex];
        }

        $('#result').val(result);
    });
});
