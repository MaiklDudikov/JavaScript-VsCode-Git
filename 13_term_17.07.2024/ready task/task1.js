document.getElementById('username').addEventListener('input', function (e) {
    const value = e.target.value;
    e.target.value = value.replace(/[0-9]/g, '');
});
