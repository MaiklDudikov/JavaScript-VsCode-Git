let newWindow;

document.getElementById('openWindow').addEventListener('click', () => {
    newWindow = window.open('https://itstep.org', '_blank', 'width=640,height=480');
});

document.getElementById('closeWindow').addEventListener('click', () => {
    if (newWindow) {
        newWindow.close();
    }
});
